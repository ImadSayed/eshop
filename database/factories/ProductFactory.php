<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'image_ids' => 1,
            'category' => 1,
            'description' => str::random(20),
            'price' => $this->faker->randomDigitNotZero(),
            'stock' => 10,
            'sku' => Str::random(10),
            'active' => true
        ];
    }
}
