<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use App\Models\Classroom;
use App\Models\User;
use App\Models\UserClassroom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function join()
    {
        return Inertia::render('UserClassroom/Create');
    }

    public function unjoin(Request $request, $id)
    {
        UserClassroom::where('user_id', auth()->user()->id)
            ->where('id', $id)
            ->latest()
            ->delete();

        return redirect()->back();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

        return Inertia::render('Classroom/Create', [
            'table' => User::latest()->get()
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
                'name' => 'required',
                'description' => 'required',
                'class_code' => 'required|unique:classrooms'
            ]);

            $request->merge([
                'created_by' => auth()->id()
            ]);

            Classroom::create($request->all());
            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Classroom $classroom)
    {
        //

        $assessment = Assessment::where('classroom_id', $classroom->id)
            ->latest()
            ->get();

        $members = UserClassroom::where('classroom_id', $classroom->id)
            ->with(['user.assessmentResult' => function ($query) use ($classroom) {
                $query->where('classroom_id', $classroom->id);
            }, 'user.assessmentResult.assessment'])
            ->latest()
            ->get();

        return Inertia::render('Classroom/Show', [
            'classroom' => $classroom,
            'assessment' => $assessment,
            'members' => $members
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Classroom $classroom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @throws \Exception
     */
    public function destroy(Classroom $classroom)
    {
        //

        try {

            Classroom::find($classroom->id)->delete();

            DB::commit();

            return to_route('dashboard.index');

        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Delete Classroom', [
                'exception' => $exception,
                'message'=> $exception->getMessage(),
                'line'=> $exception->getLine(),
            ]);
            throw $exception;
        }
    }
}
