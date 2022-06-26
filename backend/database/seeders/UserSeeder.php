<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'name'      => 'owner',
                'email'     => 'owner@gmail.com',
                'password'  => bcrypt('123456'),
                'role'      => 'owner'
            ],
            [
                'name'      => 'staff',
                'email'     => 'staff@gmail.com',
                'password'  => bcrypt('123456'),
                'role'      => 'staff',
            ],
        ];

        foreach ($data as $item) {
            User::create($item);
        }
    }
}
