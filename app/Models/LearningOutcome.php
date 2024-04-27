<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LearningOutcome extends Model
{
    use HasFactory;

    protected $fillable = [
        'question_id',
        'ilo',
        'description',
    ];
}