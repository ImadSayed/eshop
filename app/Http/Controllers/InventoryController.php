<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use App\Models\Image;
use Illuminate\Database\Eloquent\Collection;

class InventoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $products = Product::all();
        
        // $this->addImages($categories);

        return Inertia::render('inventory/index', [
            'isAdmin' => $this->isAdmin(),
            'categories' => $categories,
            'products' => $products
        ]);
    }

    public function showProducts($id)
    {
        $category = Category::find($id);
        $products = Product::where('category', $id)->get();
        
        $this->addImages($products);

        return Inertia::render('inventory/products/index', [
            'isAdmin' => $this->isAdmin(),
            'category' => $category,
            'products' => $products
        ]);
    }

    public function showProduct($id)
    {
        $product = Product::find($id);
        $category = $product->category;

        $this->addAllImages($product);
        // var_dump($product); die;

        return Inertia::render('inventory/products/show', [
            'isAdmin' => $this->isAdmin(),
            'product' => $product,
            'category' => $category
        ]);
    }

    private function addImages(Collection &$listItems): void
    {
        foreach($listItems as $listItem) {
            $image_ids = $listItem->image_ids ?? '';
            $imageIds = explode(',', $image_ids);
            $images = Image::whereIn('id', $imageIds)->get();
            $listItem['image_path'] = asset($images[0]->path) . "/" . $images[0]->name . "." . $images[0]->mime;
        }
    }

    private function addAllImages(Product &$prod): void
    {
        $image_ids = $prod->image_ids;
        $imageIds = explode(',', $image_ids);
        $images = Image::whereIn('id', $imageIds)->get();

        foreach($images as $image) {
            $image['imagePath'] = asset($image->path) . "/" . $image->name . "." . $image->mime;
        }
        $prod['images'] = $images;
    }
}
