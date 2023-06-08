<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // \App\Models\User::factory(10)->create();

         \App\Models\User::factory()->create([
             'name' => 'tom',
             'email' => 'thomasscullyking@hotmail.com',
             'password' => Hash::make('password'),
             'super' => 1,
         ]);


        \App\Models\Module::factory()->create([
            'name' => 'Module 1',
        ]);

        \App\Models\Module::factory()->create([
            'name' => 'Module 2',
        ]);

        \App\Models\Module::factory()->create([
            'name' => 'Module 3',
        ]);



        DB::table('topics')->insert([
            'name' => 'Topic 1',
        ]);

        DB::table('topics')->insert([
            'name' => 'Topic 2',
        ]);

        DB::table('topics')->insert([
            'name' => 'Topic 3',
        ]);
    }
}
