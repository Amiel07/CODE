<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssessmentResult extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'assessment_id',
        'classroom_id',
        'correct',
        'wrong',
        'total',
        'attempts',
        'grade'
    ];

    public function assessment()
    {
        return $this->belongsTo(Assessment::class, 'assessment_id');
    }

}
