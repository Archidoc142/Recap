<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MatiereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('matiere')->insert([
            ['title' => 'Mathématiques'],
            ['title' => 'Informatique'],
            ['title' => 'Biologie'],
            ['title' => 'Physique'],
            ['title' => 'Chimie'],
            ['title' => 'Histoire'],
            ['title' => 'Géographie'],
            ['title' => 'Philosophie'],
            ['title' => 'Langues'],
            ['title' => 'Astronomie'],
            ['title' => 'Environnement'],
            ['title' => 'Alimentation']
        ]);
    }
}
