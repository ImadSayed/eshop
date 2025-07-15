<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Product;

class InventoryController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render('inventory/index', [
            'isAdmin' => $this->isAdmin(),
            'products' => $products,
        ]);
    }
}
