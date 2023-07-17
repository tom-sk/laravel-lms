<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('topics', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
//            $table->string('modules')->nullable();
            $table->integer('sort_order')->nullable();
            $table->unsignedBiginteger('module_id')->nullable();
//            $table->unsignedBiginteger('module_id')->unsigned()->nullable();
//            $table->foreign('module_id')->references('id')
//                ->on('modules')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('topics');
    }
};
