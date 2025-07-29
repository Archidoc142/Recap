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
        Schema::create('cours', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->bigInteger('id_matiere')->unsigned()->nullable();
            $table->bigInteger('id_icon')->unsigned()->nullable();
            $table->timestamps();
        });

        Schema::table('cours', function (Blueprint $table) {
            $table->foreign('id_matiere')->references('id')->on('matiere')->nullOnDelete();
            $table->foreign('id_icon')->references('id')->on('icon')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cours');
    }
};
