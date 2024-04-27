<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\UserClassroom;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
                'classroom_code' => 'required'
            ]);

            $classroom = Classroom::where('class_code', strtoupper($request->classroom_code))->latest()->first();

            if (!$classroom) {
                throw new Exception('No classroom found in this code');
            }

            UserClassroom::create([
                'user_id' => auth()->id(),
                'classroom_id' => $classroom->id,
                'status' => 'Active'
            ]);

            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Unable to Update UserClassroom', [
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
    public function show(UserClassroom $userClassroom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserClassroom $userClassroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserClassroom $userClassroom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserClassroom $userClassroom)
    {
        //
    }
}
