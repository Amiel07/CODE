<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use App\Models\Questions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class QuestionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //

        $id = $request->get('assessment_id');

        $assessment = Assessment::find($id);
        $question = Questions::where('assessment_id', $assessment->id)
            ->latest()
            ->get();
        return Inertia::render('Question/Home', [
            'assessment' => $assessment,
            'question' => $question,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $assessment_id = $request->get('assessment_id');
        $assessment = Assessment::where('id', $assessment_id)
            ->latest()
            ->first();

        return Inertia::render('Question/Create', [
            'assessment' => $assessment
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @throws \Exception
     */
    public function store(Request $request)
    {
        //

        try {

            $request->validate([
                'question' => 'required',
            ]);

            $choices = [
                'a' => $request->post('a') ?? '',
                'b' => $request->post('b') ?? '',
                'c' => $request->post('c') ?? '',
                'd' => $request->post('d') ?? ''
            ];

            $request->merge([
                'choices' => $choices
            ]);

            Questions::create($request->all());

            DB::commit();

            return redirect()->back();


        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Update Questions', [
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

    public function settings(Questions $questions)
    {
        return Inertia::render('Question/Settings');
    }

    /**
     * Display the specified resource.
     */
    public function show(Questions $questions)
    {
        //

//        return view();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        $question = Questions::where('id', $id)->with('assessment')->first();

        return Inertia::render('Question/Edit', [
            'questions' => $question
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @throws \Exception
     */
    public function update(Request $request, $id)
    {
        //
        try {

            $request->validate([
                'question' => 'required',
                'answer' => 'required',
            ]);

            Questions::find($id)->update($request->all());

            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Update Questions', [
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
     * @throws \Exception
     */
    public function destroy($id)
    {
        //

        DB::beginTransaction();

        try {

            Questions::find($id)->delete();

            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Delete Questions', [
                'exception' => $exception,
                'message'=> $exception->getMessage(),
                'line'=> $exception->getLine(),
                'code' => $exception->getCode(),
            ]);
            throw $exception;
        }
    }
}
