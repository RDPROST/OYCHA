<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    public $timestamps = true;

    protected $fillable = ['parent_id', 'name'];

    public function children()
    {
        return $this->hasMany(self::class, "parent_id");
    }
}
