<?php

namespace App\Http\Controllers;

use App\Models\LearningOutcome;
use App\Models\Questions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class LearningOutcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        dd($request->all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('ILO/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     * @throws \Exception
     */
    public function store(Request $request)
    {
        //

        DB::beginTransaction();

        try {
            $request->validate(['ilo' => 'required', 'description' => 'required']);

            LearningOutcome::create($request->all());

            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Update LearningOutcome', [
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
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $ilo = LearningOutcome::where('question_id', $id)->get();
        $question = Questions::find($id);

        return Inertia::render('ILO/Show', [
            'ilo' => $ilo,
            'question' => $question
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        $learningOutcome = LearningOutcome::find($id);

        return Inertia::render('ILO/Edit', [
            'ilo' => $learningOutcome
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @throws \Exception
     */
    public function update(Request $request, $id)
    {
        //
        DB::beginTransaction();

        try {

            LearningOutcome::find($id)->update($request->all());

            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Update LearningOutcome', [
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

            LearningOutcome::find($id)->delete();

            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Delete LearningOutcome', [
                'exception' => $exception,
                'message'=> $exception->getMessage(),
                'line'=> $exception->getLine(),
                'code' => $exception->getCode(),
            ]);
            throw $exception;
        }
    }
}
