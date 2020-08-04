<?php

namespace App\Http\Controllers\Auth;

//use Illuminate\Http\LoginRequest;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Auth;
//use Illuminate\Routing\Controller;
//use Validator;
use App\Http\Controllers\Controller;
use App\User;
use App\Model\Users;
use Illuminate\Http\Request;

//use App\Http\Requests\LoginRequest;

class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @return Response
     */
    public function authenticate()
    {
//        if (Auth::attempt(['email' => $email, 'password' => $password]))
//        {
//            return redirect()->intended('dashboard');
//        }
    }

    public function register2Frontend(Request $request)
    {
        return view('auth/register2Frontend');
    }

    public function postRegister2Frontend(Request $request)
    {
        if (empty($request->name)) {
            return 'Vui lòng nhập họ tên';
        }
        if (empty($request->email)) {
            return 'Vui lòng nhập địa chỉ Email';
        }
        if (empty($request->username)) {
            return 'Vui lòng nhập tên đăng nhập.';
        }
        if (empty($request->password)) {
            return 'Vui lòng nhập Mật khẩu.';
        }
        if (empty($request->password_confirm)) {
            return 'Vui lòng nhập Mật khẩu.';
        }
        if ($request->password != $request->password_confirm) {
            return 'Mật khẩu và mật khẩu xác nhận không giống nhau.';
        }
        $checkUser = Users::where('username', $request->username)->first();
        if (count($checkUser) > 0) {
            return 'Tên đăng nhập đã tồn tại, vui lòng thử lại tên khác.';
        }
        $checkUser = Users::where('email', $request->email)->first();
        if (count($checkUser) > 0) {
            return 'địa chỉ Email này đã tồn tại, vui lòng thử lại email khác.';
        }
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'address' => $request->address,
            'user_type' => 0,
            'remember_token' => $request->_token,
            'password' => bcrypt($request->password),
        ]);
        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            $checkUser = Users::where('username', $request->username)->first();
            Auth::login(Auth::user(), true);

            return 'success';
        }

        return 'Đăng ký thất bại, vui lòng thử lại.';
    }

    public function login2Frontend(Request $request)
    {
        return view('auth/login2Frontend');
    }

    public function postLogin2Frontend(Request $request)
    {
        if (empty($request->username)) {
            return 'Vui lòng nhập tên đăng nhập';
        }
        if (empty($request->password)) {
            return 'Vui lòng nhập Mật khẩu';
        }
        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            //check permission, if is admin will do not login in web
            $checkUser = Users::where('username', $request->username)->first();
            Auth::login(Auth::user(), true);

            return 'success';
        }

        return 'Sai tên đăng nhập hoặc mật khẩu';
    }

    public function showLoginForm()
    {
        return view('auth/login');
    }

    public function login(LoginRequest $request)
    {
        if (empty($request->username)) {
            return 'Tên đăng nhập không được bỏ trống';
        }
        if (empty($request->password)) {
            return 'Mật khẩu không được bỏ trống';
        }
        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            //check permission, if is admin will do not login in web
            $checkUser = Users::where('username', $request->username)->first();
            if (intval($checkUser->userType) == 1) {
                return 'Tài khoản này không có quyền truy cập vào hệ thống.';
            }
            Auth::login(Auth::user(), true);

            return RETURN_SUCCESS;
            // return redirect(route('adminHome'));
        }

        return 'Tên đăng nhập hoặc mật khẩu không chính xác.';
    }

    public function logout()
    {
        Auth::logout();

        return redirect('/');
    }

    public function loginAdmin(LoginRequest $request)
    {
        $user = \Auth::attempt(['username' => $request->username, 'password' => $request->password]);
        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            $checkUser = Users::where('username', $request->username)->first();
            if (intval($checkUser->userType) == 0) {
                $message = 'username or password is incorrect';
            }
            die;

            Auth::login(\Auth::user(), true);

            return redirect('/admin');
        }

        return view('auth/login', [
            'message' => 'username or password is incorrect',
        ]);
    }

    public function showRegistrationForm()
    {
        return view('auth/register');
    }

    public function register(RegisterRequest $request)
    {
        User::create([
            'fullname' => $request['fullname'],
            'email' => $request['email'],
            'username' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);

        return 'success';
    }
}
