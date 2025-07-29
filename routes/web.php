<?php

use App\Http\Controllers\UsersController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InventoryController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::middleware(['auth', 'verified', 'is_admin'])->group(function () {
    Route::get('users', [UsersController::class, 'index'])->name('users.index');
    Route::get('users/edit/{id}', [UsersController::class, 'edit'])->name('users.edit');
    Route::put('users/update', [UsersController::class, 'update'])->name('users.update');

    Route::get('inventory', [InventoryController::class, 'index'])->name('inventory.index');
    // Route::get('category/{id}', [InventoryController::class, 'showProducts'])->name('products.index');
    // Route::get('product/{id}', [InventoryController::class, 'showProduct'])->name('products.show');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
