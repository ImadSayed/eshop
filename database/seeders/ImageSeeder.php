<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Image;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Image::factory()->create([
            'name' => 'default',
            'mime' => 'jpg',
            'path' => 'storage/media/',
            'active' => 1
        ]);
    }
}
