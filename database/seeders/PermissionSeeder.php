<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $manageUser = new Permission();
        $manageUser->name = 'Admin panel';
        $manageUser->slug = 'admin-panel';
        $manageUser->save();
        $createTasks = new Permission();
        $createTasks->name = 'Profile';
        $createTasks->slug = 'profile';
        $createTasks->save();
    }
}
