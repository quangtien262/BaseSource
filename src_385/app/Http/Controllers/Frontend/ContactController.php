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
			'title' => 'Thu g?i liên h? t? saclaptop.net',
			'name' => $request->name,
			'email' => $request->email,
			'phone' => $request->phone,
			'content' => $request->content,
		];
		
		$sendmail = app('ClassEmail')->sendMail($title, $view, $from, $tos, $data);

		//save to db
		$ret = app('ClassContact')->saveContact($request);
        
        $config = app('ClassConfig')->getConfig();
        
        $result = 'G?i liên h? thành công, cám on quý khách dã g?i liên h? cho chúng tôi, chúng tôi s? liên h? l?i v?i b?n trong vòng 24h';
        
        
        return $result;	
//		return view('Frontend/Contact/index', compact('config', 'result'));
	}

}
