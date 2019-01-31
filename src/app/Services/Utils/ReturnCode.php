<?php

namespace App\Services\Utils;

class ReturnCode {
    
    //return
    const RETURN_SUCCESS = 'success';
    const RETURN_ERROR = 'error';
    const RETURN_MSG = 'msg';
    const RETURN_OBJ = 'obj';
    
    //error code
    const Exception_DELETE_TABLE = 100;
    const Exception_SEND_MAIL = 101;
}
