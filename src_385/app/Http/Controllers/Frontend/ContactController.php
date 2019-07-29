<?php

namespace App\Http\Controllers\Frontend;


use App\Model\category;
use App\Model\contact;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
//        $this->middleware('auth');
    }

	public function index(Request $request) {
		$config = app('ClassConfig')->getConfig();
		return view('Frontend/Contact/index', compact('config'));
	}

	public function postSaveContact(Request $request) {
	
        $config = app('ClassConfig')->getConfig();
		//send mail
		$title = "[saclaptop.net] " . $request->title;
		$view = 'Frontend.Elements.Email.default';
		$from = 'auto@aclaptop.net';
		$tos = [$config->email];
		$data = [
			'title' => 'Thu g?i li�n h? t? saclaptop.net',
			'name' => $request->name,
			'email' => $request->email,
			'phone' => $request->phone,
			'content' => $request->content,
		];
		
		$sendmail = app('ClassEmail')->sendMail($title, $view, $from, $tos, $data);

		//save to db
		$ret = app('ClassContact')->saveContact($request);
        
        $config = app('ClassConfig')->getConfig();
        
        $result = 'G?i li�n h? th�nh c�ng, c�m on qu� kh�ch d� g?i li�n h? cho ch�ng t�i, ch�ng t�i s? li�n h? l?i v?i b?n trong v�ng 24h';
        
        
        return $result;	
//		return view('Frontend/Contact/index', compact('config', 'result'));
	}

}
