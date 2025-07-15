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
        Schema::create('products', function (Blueprint $table) {
            $table->id()->primary();
            $table->foreignId('product_images')->nullable()->constrained('product_images', 'id');
            $table->string('name');
            $table->string('description');
            $table->decimal('price', 10, 2);
            $table->integer('stock')->default(0);
            $table->string('category')->nullable();
            $table->string('sku')->unique()->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
