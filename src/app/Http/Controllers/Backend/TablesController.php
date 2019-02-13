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
        $tables = app('ClassTables')->getTables();
        return view('backend.tables.index', compact('tables'));
    }

    public function formEdit(Request $request, $tableId = 0) {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        if(!empty($request->input('column'))) {
            $column = app('ClassTables')->getColumn($request->input('column'));
        }
        
        return view('backend.tables.formTables', compact('tableId', 'table', 'columns', 'column'));
    }

    public function postSbmitFormTable(Request $request, $tableId = 0) {
        //todo: validation
        \DB::beginTransaction();
//        try {
        //get table detail
        $tablePreview = app('ClassTables')->getTable($tableId);

        //save tables
        $tables = app('ClassTables')->saveTable($tableId, $request->input());

        //save tables field
//            $tables = app('ClassTables')->saveTableColumn($tableId, $tables->id, $request->input());
        //generate table
        if ($tableId == 0) {
            Schema::create($request->input('table_name'), function (Blueprint $table) use ($request) {
                $table->increments('id');
                $table->timestamps();
                $table->charset = 'utf8';
                $table->collation = 'utf8_unicode_ci';
                $table->engine = 'InnoDB';
            });
        } else {
            if ($tablePreview->name != $request->input('table_name')) {
                Schema::rename($tablePreview->name, $request->input('table_name'));
            }
        }
        //delete tbl
        //Schema::dropIfExists('users');
        \DB::commit();
        return redirect(route('configTbl_edit', [$tables->id]));
//        } catch (\Exception $e) {
//            \DB::rollback();
        return "Save fail!!!";
//        }
    }

    public function postSubmitFormColumn(Request $request) {
        //todo: validation
        \DB::beginTransaction();
//        try {
        //get table detail
        $columnPreview = app('ClassTables')->getColumn($request->input('column_id'));
        $tableDetail = app('ClassTables')->getTable($request->input('table_id'));
        //save column
        $column = app('ClassTables')->saveColumn($request->input());

        //generate table
        if (empty($request->input('column_id'))) {
            Schema::table($tableDetail->name, function($table) use ($request) {
                $table = self::setTypeForField($table, $request->input('column_name'), 
                        $request->input('column_type'), $request->input('max_length'), 
                        $request->input('value_default'), $request->input('is_null'));
            });
        } else {
            if ($columnPreview->name != $request->input('column_name')) {
                Schema::renameColumn($columnPreview->name, $request->input('column_name'));
            }
        }
        //delete tbl
        //Schema::dropIfExists('users');
        \DB::commit();
        return redirect(route('configTbl_edit', [$tables->id]));
//        } catch (\Exception $e) {
//            \DB::rollback();
        return "Save fail!!!";
//        }
    }

    private function setTypeForField($table, $fieldName, $type, $maxlength, $default, $isNull = 1) {
        switch ($type) {
            case "INT":
                $table->integer($fieldName)->nullable()->default($default);
                if (!empty($isNull)) {
                    $table->integer($fieldName)->default($default);
                } else {
                    $table->integer($fieldName)->nullable()->default($default);
                }
                break;
            case "VARCHAR":
                if (!empty($isNull)) {
                    $table->string($fieldName)->default($default);
                } else {
                    $table->string($fieldName)->nullable()->default($default);
                }
                break;
            case "TEXT":
                if (!empty($isNull)) {
                    $table->text($fieldName)->default($default);
                } else {
                    $table->text($fieldName)->nullable()->default($default);
                }
                break;
            case "LONGTEXT":
                if (!empty($isNull)) {
                    $table->longText($fieldName)->default($default);
                } else {
                    $table->longText($fieldName)->nullable()->default($default);
                }
                break;
            case "DATE":
                if (!empty($isNull)) {
                    $table->date($fieldName)->default($default);
                } else {
                    $table->date($fieldName)->nullable()->default($default);
                }
                break;
            case "DATETIME":
                if (!empty($isNull)) {
                    $table->dateTime($fieldName)->default($default);
                } else {
                    $table->dateTime($fieldName)->nullable()->default($default);
                }
                break;
        }
        return $table;
    }

    private function createTable() {
        
    }

    private function updateTable() {
        
    }

    private function addTypeData($table) {
        
    }

}
