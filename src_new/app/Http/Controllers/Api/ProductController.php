<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class ProductController extends Controller {

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		
	}
	
	public function getListProduct($limit) {
		$products = app('EProducts')->getProductByConditions($limit);
		return $products;
	}

}
