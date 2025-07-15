<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);
        // Inertia::share('isAdmin', function() {
        //     if (!Auth::check()) {
        //         return false;
        //     }
        //     $id = Auth::user()->id;
        //     $loggedInUser = User::find($id);
        //     return $loggedInUser->level_id > 1;
        // });
    }
}
