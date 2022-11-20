<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::where('slug','admin')->first();
        $user = Role::where('slug', 'user')->first();
        $adminPanel = Permission::where('slug','admin-panel')->first();
        $profile = Permission::where('slug','profile')->first();
        $user1 = new User();
        $user1->name = 'Jhon';
        $user1->lastname = 'Deo';
        $user1->country = 'RU';
        $user1->phone = '88005553535';
        $user1->email = 'jhon@deo.com';
        $user1->password = bcrypt('secret');
        $user1->save();
        $user1->roles()->attach($admin);
        $user1->permissions()->attach($adminPanel);
        $user2 = new User();
        $user2->name = 'Mike';
        $user2->lastname = 'Thomas';
        $user2->country = 'RU';
        $user2->phone = '88005553534';
        $user2->email = 'mike@thomas.com';
        $user2->password = bcrypt('secret');
        $user2->save();
        $user2->roles()->attach($user);
        $user2->permissions()->attach($profile);
    }
}
