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
        Schema::create('sujet', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->json('meta');
            $table->integer('ordre')->default(0);
            $table->bigInteger('id_etat')->unsigned()->nullable();
            $table->bigInteger('id_users')->unsigned()->nullable();
            $table->bigInteger('id_chapitre')->unsigned()->nullable();
            $table->string('couleur', 7)->default('#000000');
            $table->timestamps();
        });

        Schema::table('sujet', function (Blueprint $table) {
            $table->foreign('id_etat')->references('id')->on('etat')->nullOnDelete();
            $table->foreign('id_users')->references('id')->on('users')->nullOnDelete();
            $table->foreign('id_chapitre')->references('id')->on('chapitre')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sujet');
    }
};
