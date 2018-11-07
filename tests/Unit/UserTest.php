<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testUserModel()
    {
        // Given I have a record in the database that is a user

        $user = factory('App\User')->create([
            "name" => "Uelmar Ortega"
        ]);

        // When I fetch the archives
        $_user = User::find($user->id);
        
        // Assert that both are equal
        $this->assertEquals($user->name, $_user->name);
    }
}
