<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use App\Models\Image;

class InventoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $products = Product::all();
        $images = Image::all();

        return Inertia::render('inventory/index', [
            'isAdmin' => $this->isAdmin(),
            'categories' => $categories,
            'products' => $products,
            'images' => $images
        ]);
    }
}
