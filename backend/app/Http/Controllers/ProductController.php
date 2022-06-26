<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::select('id', 'name', 'price')
                    ->orderBy('id','desc')
                    ->paginate(5);
        return new ProductCollection($product);
    }

    public function store(ProductRequest $request)
    {
        $product = Product::create([
            'name'  => $request->name,
            'price' => $request->price
        ]);

        return [
            'response_code' => '00',
            'response_message' => 'Successfully insert data',
            'data' => new ProductResource($product)
        ];
    }

    public function edit($id){
        $product = Product::select('id', 'name', 'price')
                    ->findOrFail($id);
        return [
            'response_code' => '00',
            'response_message' => 'Successfully get data',
            'data' => new ProductResource($product)
        ];
    }

    public function update(ProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->update([
            'name'  => $request->name,
            'price' => $request->price,
        ]);

        return [
            'response_code' => '00',
            'response_message' => 'Successfully update data',
            'data' => new ProductResource($product)
        ];
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return [
            'response_code' => '00',
            'response_message' => 'Successfully delete data',
            'data' => null
        ];
    }
}
