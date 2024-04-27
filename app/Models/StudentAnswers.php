<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentAnswers extends Model
{
    use HasFactory;

    protected $fillable = [
        'assessment_id',
        'user_id',
        'questions',
        'answers',
        'correct_answer',
    ];

    protected $casts = [
        'questions' => 'array',
        'answers' => 'array',
    ];
}
