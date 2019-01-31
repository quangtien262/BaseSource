<?php

namespace App\Services\Utils;

class AppConst {
    const PREFIX_TABLE = 'jjob__';
    
    // User list paging
    const HOME_PAGING = 10;
    const COUNT_HOT_NEWS = 5;
    const COUNT_HOT_NEWS_LARGE = 1;
    
    //maxium file size upload
    const CV_MAX_FILE_SIZE = 3000000;
    const PRODUCT_MAX_FILE_SIZE = 3000000;
    
    //message
    const MSG_ERR_DELETE_SUCCESS = 'Xóa thành công';
    const MSG_ERR_EDIT_SUCCESS = 'Lưu thành công';
    const MSG_ERR_EDIT_FAIL = 'Lưu thất bại: %s';
    const MSG_ERR_EMPTY_FIELD = '\'%s\' không được bỏ trống';
    const MSG_ERR_EXIST_FIELD = '\'%s\' đã tồn tại';
    const MSG_ERR_NOT_EXIST_FIELD = '\'%s\' không đã tồn tại';
    const MSG_ERR_PASSWORD_NOT_MATCH = 'Mật khẩu và mật khẩu xác nhận không giống nhau';
    const MSG_ERR_NOT_SELECTED = '\'%s\' chưa được chọn';
    const MSG_ERR_DATE_FORMAT = '\'%s\' định dạng ngày tháng không đúng';
    const MSG_ERR_NUMBERIC = '\'%s\' phải là kiểu số';
    const MSG_ERR_EXIST = '%s này đã tồn tại';
    const MSG_ERR_FILE_EMPTY = 'Bạn chưa chọn file upload';
    const MSG_ERR_EXTENSION_INVALID = 'Định dạng file %s không đúng, Định dạng yêu cầu: %s';
    const MSG_ERR_FILE_SIZE_INVALID = 'Dung lượng file cho phép phải dưới %s';
    const MSG_ERR_NOT_EMAIL_FORMAT = 'Định dạng email không đúng';
    const MSG_ERR_MIN_NUMBER = '%s phải lớn hơn %s';
    const MSG_ERR_MAX_NUMBER = '%s phải nhỏ hơn %s';
    
    //path upload
    const JOB_FILE_PATH = 'file/job/%s'; 
    const CV_FILE_PATH = 'upload/%s/product/';
    
    //sendmail
    
    public static function cvExtensionRequire() {
        return ['png', 'jpeg', 'doc', 'docx', 'pdf'];
    }
    
    public static function productExtensionRequire() {
        return ['png', 'jpeg', 'doc', 'docx', 'pdf', 'zip', 'rar'];
    }
}
