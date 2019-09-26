<?php

// Authentication Routes.
// Auth::routes();

Route::group(['middleware' => \App\Http\Middleware\Language::class], function () {
    Route::get('/', 'Frontend\HomeController@index')->name('home');

    Route::get('{name}/n{id}.html', 'Frontend\NewsController@listNews')->name('news');
    Route::get('{name}/dn{id}.html', 'Frontend\NewsController@detailNews')->name('detailNews');
    Route::get('{name}/p{id}.html', 'Frontend\ProductController@listProduct')->name('product');
    Route::get('{name}/dp{id}.html', 'Frontend\ProductController@detailProduct')->name('detailProduct');
    Route::get('{name}/cn{id}.html', 'Frontend\CertificationController@index')->name('certification');
    Route::get('{name}/l{id}.html', 'Frontend\LandingPageController@singleLandingPage')->name('singleLandingPage');
    Route::get('{name}/ll{id}.html', 'Frontend\LandingPageController@listLandingPage')->name('listLandingPage');

    Route::get('gio-hang.html', 'Frontend\CartController@index')->name('cart');
    Route::get('dat-hang.html', 'Frontend\CartController@orders')->name('formOrder');
    Route::post('dat-hang.html', 'Frontend\CartController@postOrders');
    Route::get('hoan-tat.html', 'Frontend\CartController@ordersResult')->name('ordersResult');

    //contact
    Route::get('lien-he.html', 'Frontend\ContactController@contact')->name('contact');
    // Route::get('{sluggable}/ct{id}.html', 'Frontend\ContactController@index')->name('contact');
    Route::post('lien-he.html', 'Frontend\ContactController@postSaveContact');

    //languages
    Route::get('lang/{lang}', ['as' => 'lang.switch', 'uses' => 'LanguageController@switchLang']);
    //login by member
    Route::get('login', 'Auth\AuthController@login2Frontend')->name('login2Frontend');
    Route::post('login', 'Auth\AuthController@postLogin2Frontend');
    Route::get('register', 'Auth\AuthController@register2Frontend')->name('register2Frontend');
    Route::post('register', 'Auth\AuthController@postRegister2Frontend');
    //login by admin
    Route::get('admin/login', 'Auth\AuthController@showLoginForm')->name('loginAdmin');
    Route::post('admin/login', 'Auth\AuthController@login');
    Route::get('logout', 'Auth\AuthController@logout')->name('logout');
});
//backend
// Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'Backend\PagesController@home')->name('home');
    Route::group(['prefix' => 'admin'], function () {
        Route::get('/', 'Backend\PagesController@home')->name('adminHome');
        //config tbl
        Route::get('/configtbl', 'Backend\TblController@index')->name('configTbl');
        Route::get('/configtbl/edit/{id}', 'Backend\TblController@formEdit')->name('configTbl_edit');
        Route::post('/configtbl/edit-table/{id}', 'Backend\TblController@postSbmitFormTable')->name('editTable');
        Route::post('/configtbl/edit-column', 'Backend\TblController@postSubmitFormColumn')->name('editColumn');
        Route::get('/configtbl/delete-table/', 'Backend\TblController@deleteTable')->name('deleteTable');
        Route::get('/configtbl/delete-column', 'Backend\TblController@deleteColumn')->name('deleteColumn');
        Route::post('/configtbl/sort-order-table/', 'Backend\TblController@sortOrderTable')->name('sortOrderTable');
        //table
        Route::get('/list-data/{tableId}', 'Backend\RowController@listRow')->name('listDataTbl');
        Route::get('/detail/{tableId}/{dataId}', 'Backend\RowController@detailRow')->name('detailRow');
        Route::get('/edit-data/{tableId}/{dataId}', 'Backend\RowController@formRow')->name('formRow');
        Route::post('/edit-data/{tableId}/{dataId}', 'Backend\RowController@submitFormRow');
        Route::get('/delete-row/{tableId}/{dataId}', 'Backend\RowController@deleteRow')->name('deleteRow');
        Route::post('/delete-multiple-row', 'Backend\RowController@listOption')->name('listOption');
        Route::post('/sort-order-row/{tableId}', 'Backend\RowController@sortOrderRows')->name('sortOrderRows');
        Route::post('/sort-order-Column/{tableId}', 'Backend\RowController@sortOrderColumn')->name('sortOrderColumn');
        Route::post('/update-current-row/{columnName}/{tableId}/{dataId}', 'Backend\RowController@editCurrentRow')->name('editCurrentColumn');

        Route::get('/tbl/import/{tableId}/', 'Backend\RowController@import2Excel')->name('import2Excel');
        Route::post('/tbl/import/{tableId}/', 'Backend\RowController@postImport2Excel');
        Route::get('/tbl/export/{tableId}/', 'Backend\RowController@export2Excel')->name('export2Excel');
        //blockType
        Route::get('/tbl/list-block/{landingPageId?}', 'Backend\BlockController@index')->name('adminListBlock');
        Route::get('/tbl/edit-block/{landingPageId}/{blockId}/{landingPageItemId?}', 'Backend\BlockController@formBlock')->name('adminEditBlock');
        Route::post('/tbl/edit-block/{landingPageId}/{blockId}/{landingPageItemId?}', 'Backend\BlockController@submitFormBlock');

        //so dien
        Route::post('/auto-generate/tien-phong', 'Backend\RowController@generateTienPhong')->name('generateTienPhong');
        Route::get('/generate/tien-phong/{id}', 'Backend\RowController@generateCurrenTienPhong')->name('generateCurrenTienPhong');
        //thong ke
        Route::get('/auto-generate/thong-ke', 'Backend\RowController@thongKe')->name('thongKe');
        
        //upload file
        Route::post('file/upload', 'Backend\UploadController@uploadFile');
        Route::post('file/delete', 'Backend\UploadController@fileDestroy');
    });
// });
