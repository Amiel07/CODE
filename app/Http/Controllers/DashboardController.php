<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\User;
use App\Models\UserClassroom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $userClassroom = UserClassroom::where('user_id', auth()->id())
            ->with('classroom')
            ->latest()
            ->get();

        return Inertia::render('Dashboard', [
            'table' => User::latest()->get(),
            'classroom' => Classroom::where('created_by', auth()->id())->latest()->get(),
            'classroomUser' => $userClassroom
        ]);
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
        DB::beginTransaction();

        try {
            if ($request->hasFile('file_upload')) {
                $filename = time().$request->file('file_upload')->getClientOriginalName();

                $filePath = $request->file('file_upload')->storeAs('uploads', $filename, 'public');


                $request->merge([
                    'attachment' => $filePath
                ]);
            }

            User::create($request->except('file_upload'));

            DB::commit();

            return Redirect::route('dashboard.index');

        }
        catch (\Exception $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
