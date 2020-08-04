<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BackendController;
use Illuminate\Http\Request;

class SettingController extends BackendController
{
    public function changeSetting()
    {
        // $table = app('ClassTables')->getTable($tableId);
        // if (!empty($table)) {
        //     app('EntityCommon')->deleteTable($table->name, $dataId);
        // }

        return back();
    }
}
