<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('User/User', [
            'table' => User::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        DB::beginTransaction();

        try {

            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ]);

            if ($request->hasFile('file_upload')) {
                $filename = time().$request->file('file_upload')->getClientOriginalName();

                $filePath = $request->file('file_upload')->storeAs('uploads', $filename, 'public');


                $request->merge([
                    'attachment' => $filePath
                ]);
            }

            User::create($request->except('file_upload'));

            DB::commit();

            return Redirect::route('user.create');

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
        $currData = User::find($id);
        return Inertia::render('User/Edit', [
            'table' => $currData
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @throws \Exception
     */
    public function update(Request $request, string $id)
    {
        //
        DB::beginTransaction();

        try {

            User::find($id)->update($request->all());

            DB::commit();

            return \redirect()->back();

        }
        catch (\Exception $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        DB::beginTransaction();

        try {

            User::find($id)->delete();

            DB::commit();

            return \redirect()->back();

        }
        catch (\Exception $exception) {
            DB::rollBack();
            throw $exception;
        }
    }
}
