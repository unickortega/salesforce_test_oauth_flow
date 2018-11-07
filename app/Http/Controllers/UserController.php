<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth; 
use Validator;

class UserController extends Controller
{
    public $successStatus = 200;

    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            return response()->json(['status'=>'success','token'=>$user->createToken('MyApp')->accessToken], $this->successStatus); 
        } 
        else{ 
            return response()->json([
                'errors' => [
                    'email' => [
                        'These credentials do not match our records.'
                    ]
                ],
                'message' => 'The given data was invalid.'
            ], 401); 
        } 
    }

    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        $this->validate($request, [ 
            'name' => 'required', 
            'email' => 'required|email|max:255|unique:users', 
            'password' => 'required|min:6|confirmed', 
        ]
        );
        
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input);

        if($request->test){
            return response()->json(['status'=>'success'], $this->successStatus); 
        }

        return response()->json(['status'=>'success','token'=>$user->createToken('MyApp')->accessToken], $this->successStatus); 
    }
    
    /** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        $user = Auth::user(); 
        return response()->json(['status'=>'success', 'user' => $user], $this->successStatus); 
    }

    /**
     * logout user
     * 
     * @return \Illuminate\Http\Response
     */
    public function logout(){
        \Auth::user()->logout();
    }
}
