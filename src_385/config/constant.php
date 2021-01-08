<?php
define('LAYOUT_BACKEND_01', 'Layouts.main');
define('LAYOUT_BACKEND_02', 'Layouts.backend');
define('LAYOUT_POPUP', 'Layouts.popup');

//table đặc biệt
define('THONG_KE_DONG_TIEN', 'thong_ke_dong_tien');
define('THONG_KE_KHAU_HAO', 'thong_ke_khau_hao');
define('TIEN_PHONG', 'tien_phong');
define('SO_DIEN', 'so_dien_nuoc');
define('TBL_LOAI_TIEN_PHONG', 'loai_tien_phong');

//Loaị hình kinh doanh
define('CHO_THUE_CHDV', 1);
define('CHO_THUE_SAN_KINH_DOANH', 2);

//return code
define('RETURN_SUCCESS', 'success');
define('RETURN_ERROR', 'error');
define('PERMISSION_OF_ADMIN', 'edit articles');
define('EXCEPTION_SEND_MAIL', 'EXCEPTION_SEND_MAIL');

define('MSG_UPDATE_SORT_ORDER_SUCCESS', 'Sắp sếp lại thứ tự thành công');
define('MSG_UPDATE_COLUMN_DATA_SUCCESS', 'Cập nhật dữ liệu thành công');
define('MSG_UPDATE_COLUMN_DATA_FAIL', 'Cập nhật dữ liệu Thất bại');

define('LANDING_PAGE_ITEM_ID', 33);

//form config
define('COLUMN_TYPE', serialize(['INT', 'VARCHAR', 'TEXT', 'LONGTEXT', 'DATE', 'DATETIME', 'FLOAT', 'TIMESTAMP']));
define('IS_REQUIRE', serialize([
    0 => 'NOT REQUIRE',
    1 => 'REQUIRE',
]));
define('IS_EDIT', serialize([
    1 => 'EDIT',
    0 => 'NOT EDIT',
]));
define('ADD2SEARCH', serialize([
    1 => 'Hiển thị trong form search',
    0 => 'Không hiển thị trong form search',
]));
define('SHOW_IN_LIST', serialize([
    1 => 'Hiển thị ở trang danh sách',
    0 => 'Không hiển thị ở trang danh sách',
    ]));
define('TYPE_EDIT', serialize([
    'text' => 'Text',
    'number' => 'Number',
    'textarea' => 'Textarea',
    'select' => 'Select',
    'selects' => 'Multiple select',
    'select2' => 'Select <Library select2>',
    'selects2' => 'Multiple select <Library select2>',
    'summoner' => 'Summoner',
    'ckeditor' => 'Ckeditor',
    'image_laravel' => 'Image <Laravel file manager>',
    'images_laravel' => 'Images <Laravel file manager>',
    'image' => 'Image',
    'images' => 'Images',
    'images_no_db' => 'images_no_db',
    'video' => 'File Video <laravel file manager>',
    'pdf' => 'File pdf <laravel file manager>',
    'files' => 'Multiple file',
    'password' => 'Password',
    'encryption' => 'Password <Encryption>',
    'date' => 'Date',
    
    'input' => 'Select Input',
    'block' => 'Block (Cần tạo sẵn 2 bảng:block_type & block_item)',
    'color' => 'Màu sắc',
    'comment' => 'comment ("Tên cột" phải là "comment")',
    'permission_list' => 'Danh sách quyền',
]));

define('TABLE_TYPE_SHOW', serialize([
    0 => 'Table basic',
    1 => 'Kiểu kéo thả ',
    3 => 'Landingpage',
    4 => 'Block for Landingpage',
    5 => 'Chỉ có 1 data master',
]));

define('SEARCH_TYPE', serialize([
    1 => 'Like',
    2 => 'equal',
    3 => 'different',
    4 => '% Like',
    5 => 'Like %',
    6 => 'between dates',
]));

define('FORM_DATA_TYPE', serialize([
    1 => 'Mở sang 1 cửa sổ mới',
    2 => 'Mở dưới dang popup',
]));

define('FAST_EDIT', serialize([
    1 => 'Cho phép sửa nhanh ở trang list',
    0 => 'Mở dưới dang popup',
]));
