<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group(['middleware'=>'auth:api'], function(){
    Route::get('details', 'UserController@details');
    Route::get('user', 'UserController@details');
    Route::post('logout', 'UserController@logout');
});

Route::group(['middleware' => 'guest:api'], function(){
    Route::post('login', 'UserController@login');
    Route::post('register', 'UserController@register');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
