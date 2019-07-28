<?php

// namespace App\Http\Controllers;

// use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
// use Illuminate\Foundation\Auth\Access\AuthorizesResources;
// use Illuminate\Foundation\Bus\DispatchesJobs;
// use Illuminate\Foundation\Validation\ValidatesRequests;
// use Illuminate\Http\Request;
// use Illuminate\Routing\Controller as BaseController;

// //use App\Http\Requests;

// class BackendController extends BaseController
// {

//     use AuthorizesRequests,
//     AuthorizesResources,
//     DispatchesJobs,
//         ValidatesRequests;

//     public function __construct(Request $request)
//     {
//     }
// }

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class BackendController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}