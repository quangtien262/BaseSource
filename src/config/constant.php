<?php

//return code
define("RETURN_SUCCESS", 'success');
define("RETURN_ERROR", 'error');
define("PERMISSION_OF_ADMIN", 'edit articles');

define("COLUMN_TYPE", serialize(['INT', 'VARCHAR', 'TEXT', 'LONGTEXT', 'DATE', 'DATETIME']));
define("IS_REQUIRE", serialize([
    0 => 'NOT REQUIRE',
    1 => 'REQUIRE'
]));
define("IS_EDIT", serialize([
    1 => 'EDIT',
    0 => 'NOT EDIT'
]));
define("ADD2SEARCH", serialize([
    1 => 'Add to form search',
    0 => 'Not show in form search'
]));
define("SHOW_IN_LIST", serialize([
    1 => 'show in list',
    0 => 'Not show in list'
    ]));
define("TYPE_EDIT", serialize([
    'text' => 'Text',
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
    'file' => 'File',
    'files' => 'Multiple file',
    'password' => 'Password',
    'encryption' => 'Password <Encryption>',
]));

define("TABLE_TYPE_SHOW", serialize([
    0 => 'Table basic',
    1 => 'Drag and Drop <Single level>',
    2 => 'Drag and Drop <Multiple level>'
]));

