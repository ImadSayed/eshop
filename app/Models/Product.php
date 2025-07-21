<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Category;
use App\Models\Image;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'category',
        'name',
        'image_ids',
        'description',
        'price',
        'stock',
        'sku',
        'active',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category', 'id');
    }

    public function Image(): HasOneOrMany
    {
        return $this->hasOneOrMany(Image::class);
    }
}
