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
        Schema::create('chapitre', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('ordre')->default(0);
            $table->string('couleur', 7)->default('#000000');
            $table->bigInteger('id_users')->unsigned()->nullable();
            $table->bigInteger('id_cours')->unsigned()->nullable();
            $table->timestamps();
        });

        Schema::table('chapitre', function (Blueprint $table) {
            $table->foreign('id_users')->references('id')->on('users')->nullOnDelete();
            $table->foreign('id_cours')->references('id')->on('cours')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapitre');
    }
};
