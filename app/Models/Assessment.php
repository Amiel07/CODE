<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Assessment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'status',
        'created_by',
        'classroom_id',
        'time_limit',
        'attempts',
        'publishing_date',
        'record_score',
        'isAutoSubmit',
        'isAnswerViewable',
        'isAnotherTab',
        'visibility',
    ];

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }


}
