<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::table('assessments', function (Blueprint $table) {
            $table->string('time_limit')->nullable();
            $table->string('attempts')->nullable();
            $table->string('publishing_date')->nullable();
            $table->string('record_score')->nullable();
            $table->string('isAutoSubmit')->nullable();
            $table->string('isAnswerViewable')->nullable();
            $table->string('isAnotherTab')->nullable();
            $table->string('visibility')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
