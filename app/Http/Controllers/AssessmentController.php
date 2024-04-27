<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use App\Models\AssessmentResult;
use App\Models\Classroom;
use App\Models\Questions;
use App\Models\StudentAnswers;
use App\Notifications\AssessmentNotification;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use PhpLatex_Renderer_Abstract;
use PhpLatex_Renderer_Html;

class AssessmentController extends Controller
{

    private \PhpLatex_Parser $parser;

    public function __construct(\PhpLatex_Parser $parser)
    {
        $this->parser = $parser;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function copy($id)
    {
        return Inertia::render('Assessment/Copy', [
            'assessment' => Assessment::find($id),
            'assessment_all' => Classroom::with('createdBy')->latest()->get(),
        ]);
    }

    public function saveCopy(Request $request)
    {

        DB::beginTransaction();

        try {
            $assessment_id = $request->assessment_id;
            $classroom_id = $request->to_copy;

            $questionsByAssessment = Questions::with('assessment')
                ->where('assessment_id', $assessment_id)
                ->get();


            $assessment = Assessment::find($assessment_id);

            /*
             * Create the assessment first
             */

            $newAssessment = Assessment::create([
                'name' => $assessment->name . " - Copied",
                'type' => $assessment->type,
                'status' => $assessment->status,
                'created_by' => auth()->user()->id,
                'classroom_id' => $classroom_id,
                'time_limit' => $assessment->time_limit,
                'attempts' => $assessment->attempts,
                'publishing_date' => $assessment->publishing_date,
                'record_score' => $assessment->record_score,
                'isAutoSubmit' => $assessment->isAutoSubmit,
                'isAnswerViewable' => $assessment->isAnswerViewable,
                'isAnotherTab' => $assessment->isAnotherTab,
                'visibility' => $assessment->visibility,
            ]);

            foreach ($questionsByAssessment as $question) {
                Questions::create([
                    'assessment_id' => $newAssessment->id,
                    'question' => $question->question,
                    'answer' => $question->answer,
                    'formula' => $question->formula,
                    'input_variable' => $question->input_variable,
                    'output_variable' => $question->output_variable,
                    'syntax' => $question->syntax,
                    'choices' => $question->choices,
                ]);
            }

            DB::commit();

            return redirect()->back();
        } catch (Exception $exception) {
            DB::rollBack();

            return redirect()->back()->with([
                'message' => $exception->getMessage(),
            ]);
        }




    }

    /**
     * Store a newly created resource in storage.
     * @throws Exception
     */
    public function store(Request $request)
    {
        //
        try {
            $request->validate([
                'name' => 'required',
                'type' => 'required',
            ]);

            $request->merge([
                'status' => 'Pending',
                'created_by' => auth()->id()
            ]);

            Assessment::create($request->all());
            DB::commit();

            return redirect()->back();

        } catch (Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Update Assessment', [
                'exception' => $exception,
                'message' => $exception->getMessage(),
                'line' => $exception->getLine(),
                'code' => $exception->getCode(),
                'headers' => $request->headers,
                'form_data' => $request->all()
            ]);
            throw $exception;
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

        return Inertia::render('Assessment/Create');
    }

    /**
     * Display the specified resource.
     */
    public function show(Assessment $assessment)
    {
        //

        $question = Questions::where('assessment_id', $assessment->id)
            ->latest()
            ->get();


        return Inertia::render('Assessment/Show', [
            'assessment' => $assessment,
            'question' => $question
        ]);
    }

    public function answer(Request $request)
    {
        $id = $request->get('assessment_id');

        $questions = Questions::where('assessment_id', $id)
            ->oldest()
            ->get();

        $assessment = Assessment::find($id);

        $content = $assessment->name . ' has been launched by ' . auth()->user()->name;

        auth()->user()->notify(new AssessmentNotification($content));

        return Inertia::render('Assessment/Answer', [
            'questions' => $questions,
            'assessment' => $assessment
        ]);
    }

    function evaluateDynamicFormula($formula, $variables)
    {

        foreach ($variables as $key => $value) {
            $formula = str_replace($key, $value, $formula);
        }
        try {
            $result = eval("return $formula;");
        } catch (\Throwable $t) {
            dd($formula, $variables);
            echo 'Caught exception: ',  $t->getMessage();
        }

        return $result;

    }

    public function submitAnswer(Request $request)
    {
        $answer = $request->post('answers');
        $assessment = $request->post('assessment');

        /*
         * Get the assessment info and check the answer if correct
         */
        $correctAnswer = 0;
        $wrongAnswer = 0;
        $total = 0;
        $studentQuestion = [];
        $studentAnswer = [];
        if ($assessment['type'] !== 'Problem Solving') {
            foreach ($answer as $key => $value) {
                $question = Questions::find($key);
                /*
                 * Check the answer -> Applicable only for non problem-solving questions
                 */
                if (strtolower(trim($question->answer)) == strtolower(trim($value))) {
                    $correctAnswer++;
                } else {
                    $wrongAnswer++;
                }
                $total++;

                $a = [
                    'answer' => $value,
                    'correct_answer' => $question->answer,
                ];

                $studentQuestion[] = $request->post('questionsReplaced');
                $studentAnswer[] = $a;
            }
        } else {
            /*
             * Compute the formula base on number provided
             */
            foreach ($answer as $key => $value) {
                $question = Questions::find($key);

                $processedFormula = preg_replace_callback('/{{(.*?)}}|\[\[(.*?)\]\]/', function ($matches) {
                    $match1 = isset($matches[1]) ? $matches[1] : '';
                    $match2 = isset($matches[2]) ? $matches[2] : '';
                    return $match1 . $match2;
                }, $question->syntax);

                $computedAnswer =  $this->evaluateDynamicFormula($processedFormula, $request->post('replacement')[$key]);
                if ($value == number_format($computedAnswer, 2)){
                    $correctAnswer++;
                } else {
                    $wrongAnswer++;
                }
                $total++;


                $a = [
                    'answer' => $value,
                    'correct_answer' => number_format($computedAnswer, 2),
                ];

                $studentQuestion[] = $request->post('questionsReplaced');
                $studentAnswer[] = $a;
            }
        }

        $this->saveStudentAnswer(auth()->id(), $assessment['id'], $studentQuestion, $studentAnswer);

        /*
         * Check for any existing assessment and save to db or update
         */
        if ($total !== 0) {
            $percentage = ($correctAnswer / $total) * 100;
        } else {
            // Handle the situation where $total is zero.
            // You need to decide what you want to do in this case.
            // As an example, let's set $percentage to 0.
            $percentage = 0;
        }

        AssessmentResult::create([
            'user_id' => auth()->id(),
            'assessment_id' => $assessment['id'],
            'classroom_id' => $assessment['classroom_id'],
            'correct' => $correctAnswer,
            'wrong' => $wrongAnswer,
            'total' => $total,
            'attempts' => 1,
            'grade' => $percentage
        ]);

        $assessmentResult = AssessmentResult::where('user_id', auth()->id())
            ->where('assessment_id', $assessment['id'])
            ->latest()
            ->first();

        $content = $assessment['name'] . ' answered has been submitted by ' . auth()->user()->name;
        auth()->user()->notify(new AssessmentNotification($content));

        return to_route('assessment.result', [
            'assessmentResult' => $assessmentResult->id
        ]);
    }

    public function result(Request $request)
    {
        $assessmentResult = AssessmentResult::find($request->get('assessmentResult'));
        $assessment = Assessment::find($assessmentResult->assessment_id);

        $attempts = AssessmentResult::where('assessment_id', $assessmentResult->assessment_id)
            ->where('user_id', auth()->id())
            ->count();

        $questions = Questions::where('assessment_id', $assessmentResult->assessment_id)
            ->latest()
            ->get();

        $studentAnswers = StudentAnswers::where('assessment_id', $assessmentResult->assessment_id)
            ->latest()
            ->first();

        return Inertia::render('Assessment/Result', [
            'assessmentResult' => $assessmentResult,
            'assessment' => $assessment,
            'attempts' => $attempts,
            'questions' => $questions,
            'studentAnswers' => $studentAnswers,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Assessment $assessment)
    {
        //

        return Inertia::render('Assessment/Edit', [
           'assessment' => $assessment,
           'assessment_id' => $assessment->id,
        ]);

    }

    public function take(Request $request)
    {
        $assessment_id = $request->get('assessment_id');
        $assessment = Assessment::find($assessment_id);
        $questions = Questions::where('assessment_id', $assessment_id)
            ->oldest()
            ->get();
        $answer = AssessmentResult::where('user_id', auth()->id())
            ->where('assessment_id', $assessment_id)
            ->latest()
            ->first();
        $attempts = AssessmentResult::where('user_id', auth()->id())
            ->where('assessment_id', $assessment_id)
            ->latest()
            ->count();

        return Inertia::render('Assessment/Take', [
            'assessment' => $assessment,
            'questions' => $questions,
            'answer' => $answer,
            'attempts' => $attempts,
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @throws Exception
     */
    public function update(Request $request, Assessment $assessment)
    {
        //

        DB::beginTransaction();

        try {

            Assessment::find($assessment->id)->update($request->all());

            DB::commit();

            return redirect()->back();

        } catch (Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Update Assessment', [
                'exception' => $exception,
                'message' => $exception->getMessage(),
                'line' => $exception->getLine(),
                'code' => $exception->getCode(),
                'headers' => $request->headers,
                'form_data' => $request->all()
            ]);
            throw $exception;
        }
    }

    /**
     * Remove the specified resource from storage.
     * @throws Exception
     */
    public function destroy(Assessment $assessment)
    {
        //

        try {

            Assessment::find($assessment->id)->delete();

            DB::commit();

            return redirect()->route('assessment.index');

        } catch (Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Delete Assessment', [
                'exception' => $exception,
                'message' => $exception->getMessage(),
                'line' => $exception->getLine(),
                'code' => $exception->getCode(),
            ]);
            throw $exception;
        }
    }

    private function saveStudentAnswer($user_id, $assessment_id, $questions, $answers)
    {
        StudentAnswers::create([
            'user_id' => $user_id,
            'assessment_id' => $assessment_id,
            'questions' => $questions,
            'answers' => $answers,
        ]);
    }
}
