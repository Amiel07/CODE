<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/link', function() {
    Artisan::call('storage:link');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function(){
    Route::resource('dashboard', \App\Http\Controllers\DashboardController::class);
    Route::resource('user', \App\Http\Controllers\UserController::class);
    Route::resource('classroom', \App\Http\Controllers\ClassroomController::class);
    Route::resource('assessment', \App\Http\Controllers\AssessmentController::class);
    Route::resource('question', \App\Http\Controllers\QuestionsController::class);
    Route::resource('userClassroom', \App\Http\Controllers\UserClassroomController::class);
    Route::resource('ilo', \App\Http\Controllers\LearningOutcomeController::class);
    Route::resource('gradeBook', \App\Http\Controllers\GradebookController::class);
    Route::resource('calendar', \App\Http\Controllers\CalendarController::class);

    Route::get('settings', [\App\Http\Controllers\QuestionsController::class, 'settings'])->name('question.settings');
    Route::get('joinClass', [\App\Http\Controllers\ClassroomController::class, 'join'])->name('classroom.join');
    Route::get('take', [\App\Http\Controllers\AssessmentController::class, 'take'])->name('assessment.take');
    Route::get('answer', [\App\Http\Controllers\AssessmentController::class, 'answer'])->name('assessment.answer');
    Route::get('result', [\App\Http\Controllers\AssessmentController::class, 'result'])->name('assessment.result');
    Route::post('submitAnswer', [\App\Http\Controllers\AssessmentController::class, 'submitAnswer'])->name('assessment.submit-answer');
    Route::patch('unjoinClass/{id}', [\App\Http\Controllers\ClassroomController::class, 'unjoin'])->name('classroom.unjoin');
    Route::get('copy/{id}', [\App\Http\Controllers\AssessmentController::class, 'copy'])->name('assessment.copy');
    Route::post('saveCopy', [\App\Http\Controllers\AssessmentController::class, 'saveCopy'])->name('assessment.save-copy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('clearNotification', function () {
    \App\Models\Notification::query()
        ->whereNull('read_at')
        ->update(['read_at' => now()]);
});

require __DIR__.'/auth.php';
