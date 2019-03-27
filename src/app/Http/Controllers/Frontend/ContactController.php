<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller {

	public function __construct() {
		
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
			'title' => 'Thư gửi liên hệ từ saclaptop.net',
			'name' => $request->name,
			'email' => $request->email,
			'phone' => $request->phone,
			'content' => $request->content,
		];
		
		$sendmail = app('ClassEmail')->sendMail($title, $view, $from, $tos, $data);

		//save to db
		$ret = app('ClassContact')->saveContact($request);
        
        $config = app('ClassConfig')->getConfig();
        
        $result = 'Gửi liên hệ thành công, cám ơn quý khách đã gửi liên hệ cho chúng tôi, chúng tôi sẽ liên hệ lại với bạn trong vòng 24h';
        
        
        return $result;	
//		return view('Frontend/Contact/index', compact('config', 'result'));
	}

}
