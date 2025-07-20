<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Image;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    protected $model = Image::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $storage_path = 'app/public/images/';

        return [
        'name' => 'default',
        'mime' => 'jpg',
        'path' => storage_path($storage_path),
        'active' => 1,
        ];
    }
}
