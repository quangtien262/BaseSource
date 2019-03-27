<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        
    }

    public function getListNews($limit) {
        $news = app('ENews')->getNewsByConditions($limit);
        return $news;
    }
    
    public function getNewsById($id) {
        $news = app('ENews')->getNewsById($id);
        return $news;
    }

    public function editNews() {

        $news = $_GET;
        return 'editNews123';
    }

    public function postEditNews(Request $request ,$id) {
        try {
            return $request->username;
        } catch (\Exception $exc) {
            return $exc->getMessage();
        }
        
    }

}
