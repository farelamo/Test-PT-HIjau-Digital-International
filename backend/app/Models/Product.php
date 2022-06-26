<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\useUuid;

class Product extends Model
{
    use HasFactory, useUuid;

    protected $guarded = [];
}
