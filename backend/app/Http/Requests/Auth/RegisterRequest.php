<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'     => ['required', 'max:100'],
            'email'    => ['email', 'required', 'unique:users,email'],
            'password' => ['required', 'min:6'],
        ];
    }
}
