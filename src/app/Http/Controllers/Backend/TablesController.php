<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TablesController extends Controller {

    public function index() {
        //SELECT column_name , data_type ,character_maximum_length FROM information_schema.columns WHERE table_name = 'tables' and (column_name = 'id' or column_name = 'tbl_name')
        return view('backend.tables.index');
    }

    public function formEdit($id = 0) {
        return view('backend.tables.formEdit');
    }

    public function postEdit(Request $request, $id = 0) {
        //todo: validation
        \DB::beginTransaction();
//        try {
        //save tables
        $tables = app('ClassTables')->saveTable($id, $request->input());
        //save tables field
        if (empty($id)) {
            $tables = app('ClassTables')->saveTableField(0, $tables->id, $request->input());
        }
        
        //generate table
        Schema::create($request->input('table_name'), function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('password');
            $table->timestamps();
        });
        
        //delete tbl
        //Schema::dropIfExists('users');
//            \DB::commit();
        \DB::rollback();
//        } catch (\Exception $e) {
//            \DB::rollback();
//            return "Save fail!!!"; 
//        }
        return 'success';
    }
    
    private function createTable() {
    
    }
    
    private function updateTable() {
    
    }
    
    private function addTypeData($table) {
    
    }
}
