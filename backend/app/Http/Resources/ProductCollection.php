<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'response_code'    => '00',
            'response_message' => 'Successfully get data',
            'data' => $this->collection
        ];
    }
}
