<?php

namespace Database\Seeders;

use App\Models\Seat;
use App\Models\Showtime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(MovieSeeder::class);

        Seat::factory(64)->create();

        Showtime::factory()->count(100)->create();
    }
}
