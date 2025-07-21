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
            $table->integer('category')->unsigned()->index()->default(1);
            $table->foreign('category')->references('id')->on('categories');
            $table->string('name');
            $table->string('image_ids');
            $table->string('description');
            $table->decimal('price', 10, 2);
            $table->integer('stock')->default(0);
            $table->string('sku')->unique()->nullable();
            $table->integer('active')->default(1);
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
