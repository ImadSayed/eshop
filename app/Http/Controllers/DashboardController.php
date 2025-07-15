<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        if (!Auth::check()) {
            return redirect()->route('home');
        }

        if ($this->isAdmin()) {
            return Inertia::render('admin/dashboard', [
                'isAdmin' => true
            ]);
        }
        return Inertia::render('dashboard', [
            'isAdmin' => false
        ]);
    }
}
