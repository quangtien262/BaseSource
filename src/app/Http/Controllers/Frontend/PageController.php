<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Auth;

class PageController extends Controller {

    public function __construct() {
        
    }

    public function index() {
        $conditions = [];
        $order = [\TblName::PRODUCTS.'.sort_order', 'asc'];
        $products = app('ClassTbl')->getDatasTblByConditions(\TblName::PRODUCTS, $conditions, 4);
        
        //get all category product
        $conditions = [
			\TblName::CATEGORY . '.parent_id' => 0,
			\TblName::CATEGORY_DATA . '.language' => 'vi',
			\TblName::CATEGORY . '.route_name' => 'listProduct',
			\TblName::CATEGORY . '.front' => 1
		];
		$categorys = app('ClassTbl')->getDatasTblByConditions(\TblName::CATEGORY, $conditions);
        
        $config = app('ClassConfig')->getConfig();
        
        return view('Frontend.Pages.home', [
            'products' => $products,
            'config' => $config,
            'categorys' => $categorys
        ]);
    }

}
