<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BackendController;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class UploadController extends BackendController
{

    public function uploadFile(Request $rq)
    {
        $result = '';
        $directoryUpload = 'imgs/' .$rq->tblId . '/' . $rq->dataId . '/' . $rq->fileType;
        if($rq->type == 'base64') {
            $result = app('UtilsCommon')->uploadBase64($directoryUpload, $rq->file);
        }
        return $result;
    }
}
