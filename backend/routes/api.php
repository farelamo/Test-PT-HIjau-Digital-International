<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\ProductController;

Route::group(['prefix' => 'auth'], function(){
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/register', [RegisterController::class, 'register']);
    Route::post('/logout', [LogoutController::class, 'logout'])->middleware('auth:api');
});

Route::group([
        'middleware' => 'auth:api',
        'prefix'     => 'product',
    ],function(){
        Route::get('/', [ProductController::class, 'index']);
        Route::post('/', [ProductController::class, 'store'])->middleware('staff');
        Route::get('/{id}', [ProductController::class, 'edit']);
        Route::put('/{id}', [ProductController::class, 'update'])->middleware('staff');
        Route::delete('/{id}', [ProductController::class, 'destroy'])->middleware('staff');
});

