<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class StaffMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if(Auth()->user()->role !== 'staff'){
            return response()->json([
                'response_code'     => '01',
                'response_message'  => 'Invalid, Staff Only !!',
            ], 401);
        }

        return $next($request);
    }
}
