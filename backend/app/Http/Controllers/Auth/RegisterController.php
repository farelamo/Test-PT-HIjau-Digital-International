<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Resources\Auth\RegisterResource;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $result = User::create([
            'name'       => $request->name, 
            'email'      => $request->email,
            'password'   => bcrypt($request->password),
            'role'       => 'staff',
        ]);

        return new RegisterResource($result);
    }
}
