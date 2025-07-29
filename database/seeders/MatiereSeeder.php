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
            ['nom' => 'Mathématiques'],
            ['nom' => 'Informatique'],
            ['nom' => 'Biologie'],
            ['nom' => 'Physique'],
            ['nom' => 'Chimie'],
            ['nom' => 'Histoire'],
            ['nom' => 'Géographie'],
            ['nom' => 'Philosophie'],
            ['nom' => 'Langues'],
            ['nom' => 'Astronomie'],
            ['nom' => 'Environnement'],
            ['nom' => 'Alimentation']
        ]);
    }
}
