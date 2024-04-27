<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Questions extends Model
{
    use HasFactory;

    protected $fillable = [
        'assessment_id',
        'question',
        'answer',
        'formula',
        'input_variable',
        'output_variable',
        'syntax',
        'choices',
        'upper_value',
        'lower_value',
    ];


    protected $casts = [
        'choices' => 'json'
    ];

    public function assessment(): BelongsTo
    {
        return $this->belongsTo(Assessment::class, 'assessment_id');
    }
}
