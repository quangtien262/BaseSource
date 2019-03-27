<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
//use Illuminate\Foundation\Auth\Passwords;

class PasswordController extends Controller
{

    //use Passwords;

    public function __construct()
    {
        $this->middleware('guest');
    }
    public function showResetForm()
    {
        return view('auth/passwords/reset');
    }
}
