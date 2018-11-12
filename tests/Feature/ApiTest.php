<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Passport\Passport;

class ApiTesting extends TestCase
{
    /**
     * Get Auth User test
     *
     * @return void
     */
    public function testGetUser()
    {
        // Create A sample User 
        $password = 'password';
        $user = factory(User::class)->create([
            'password' => bcrypt($password)
        ]);

        // Login
        Passport::actingAs(
            $user,
            ['user']
        );
        $response = $this->json('GET', '/api/user');

        // Show receive 200 response status
        // Show receive success response status json

        $response
        ->assertStatus(200)
        ->assertJson([
            'status' => 'success',
        ]);
    }

    /**
     * Login
     * 
     * @return void
     */
    public function testLogin(){
        // Create User 
        $password = 'password';
        $user = factory(User::class)->create([
            'password' => bcrypt($password)
        ]);

        // Login
        $response = $this->json('POST', '/api/login',[
            'email' => $user->email,
            'password' => $password
        ]);

        // Show receive 200 response status
        // Show receive success response status json

        $response
        ->assertStatus(200)
        ->assertJson([
            'status' => 'success',
        ]);
    }

    /**
     * Register
     * 
     * @return void
     */
    public function testRegister(){
        // Create User
        $faker = factory(User::class)->make();

        $response = $this->json('POST', '/api/register', [
            'email' => $faker->email,
            'name' => $faker->name,
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response
        ->assertStatus(200)
        ->assertJson([
            'status'=>'success'
        ]);
    }
}
