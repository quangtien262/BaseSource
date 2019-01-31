<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfigTblController extends Controller
{
    public function index()
    {
        //SELECT column_name , data_type ,character_maximum_length FROM information_schema.columns WHERE table_name = 'tables' and (column_name = 'id' or column_name = 'tbl_name')
        return view('backend.configTbl.index');
    }
    public function formEdit($id = 0)
    {
        return view('backend.configTbl.formEdit');
    }
    public function postEdit($id = 0)
    {

    }
}
