<?php

//return code
define("RETURN_SUCCESS", 'success');
define("RETURN_ERROR", 'error');


define("COLUMN_TYPE", serialize(['INT', 'VARCHAR', 'TEXT', 'LONGTEXT', 'DATE', 'DATETIME']));
define("IS_NULL", serialize(['NOT NULL', 'NULL']));
define("IS_EDIT", serialize(['NOT EDIT', 'EDIT']));
define("ADD2SEARCH", serialize(['Not show in form search', 'Add to form search']));
define("SHOW_IN_LIST", serialize(['Not show in list', 'show in list']));
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
    'files' => 'Multiple file'
    ]));

