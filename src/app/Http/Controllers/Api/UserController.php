<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Users;
use Auth;

class UserController extends Controller {

	public function __construct() {
		$this->middleware('guest')->except('logout');
	}
	
	public function postLogin(Request $request) {
		
		try {
			if (Auth::attempt(['username' =>  $request->username, 'password' => $request->password])) {
				Auth::login(Auth::user(), true);
				return 'success';
			}
			return 'login fail';
		} catch (\Exception $exc) {
			return $exc->getMessage();
		}
	}

}
