<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EtatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('etat')->insert([
            ['nom' => 'Publié'],
            ['nom' => 'Privé'],
            ['nom' => 'En attente de validation'],
        ]);
    }
}
