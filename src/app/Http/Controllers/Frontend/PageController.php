<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Auth;

class PageController extends Controller {

    public function __construct() {
        
    }

    public function index() {
        echo "home";
    }

}
