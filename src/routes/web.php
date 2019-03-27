<?php

// Authentication Routes.
// Auth::routes(); 

Route::group(['middleware' => \App\Http\Middleware\Language::class], function () {
    Route::get('', 'Frontend\PageController@index')->name('home');

    
    Route::post('login', 'Auth\AuthController@login');
    Route::get('login', 'Auth\AuthController@showLoginForm')->name('login');
    Route::get('admin/login', 'Auth\AuthController@showLoginForm');
    Route::post('admin/login', 'Auth\AuthController@loginAdmin');
    Route::get('logout', 'Auth\AuthController@logout');

    Route::get('{sluggable}/ln{cid}.html', 'Frontend\NewsController@listNews')->name('listNews');
    Route::get('{sluggable}/dn{nid}.html', 'Frontend\NewsController@detail')->name('detailNews');
    Route::get('{sluggable}/ns{nid}.html', 'Frontend\NewsController@single')->name('singleNews');
    Route::get('{sluggable}/v{nid}.html', 'Frontend\NewsController@listVideo')->name('video');
    Route::get('news.html', 'Frontend\NewsController@listNews04')->name('listNews04');

    Route::get('{sluggable}/lp{cid}.html', 'Frontend\ProductsController@listProduct')->name('listProduct');
    Route::get('{sluggable}/dp{pid}.html', 'Frontend\ProductsController@detail')->name('detailProducts');
    Route::get('tim-kiem.html', 'Frontend\ProductsController@search')->name('search');
    Route::get('search-autocomplate', 'Frontend\ProductsController@searchProductByName')->name('search');

    Route::post('sendcontact', 'Frontend\ContactController@postSaveContact')->name('saveContact');

    Route::get('gio-hang.html', 'Frontend\CartController@index')->name('cart');
    Route::get('dat-hang.html', 'Frontend\CartController@orders')->name('formOrder');
    Route::post('dat-hang.html', 'Frontend\CartController@postOrders');
    Route::get('hoan-tat.html', 'Frontend\CartController@ordersResult')->name('ordersResult');

//contact
    Route::get('{sluggable}/ct{id}.html', 'Frontend\ContactController@index')->name('contact');
    Route::post('lien-he.html', 'Frontend\ContactController@postSaveContact');

//languages
    Route::get('lang/{lang}', ['as' => 'lang.switch', 'uses' => 'LanguageController@switchLang']);
});
//backend
Route::group(['middleware' => 'auth'], function () {
    Route::group(['prefix' => 'admin'], function () {
        Route::get('/', 'Backend\PagesController@home')->name('adminHome');
        //config tbl
        Route::get('/configtbl', 'Backend\TblController@index')->name('configTbl');
        Route::get('/configtbl/edit/{id}', 'Backend\TblController@formEdit')->name('configTbl_edit');
        Route::post('/configtbl/edit-table/{id}', 'Backend\TblController@postSbmitFormTable')->name('editTable');
        Route::post('/configtbl/edit-column', 'Backend\TblController@postSubmitFormColumn')->name('editColumn');
        Route::get('/configtbl/delete-table/', 'Backend\TblController@deleteTable')->name('deleteTable');
        Route::get('/configtbl/delete-column', 'Backend\TblController@deleteColumn')->name('deleteColumn');
        Route::get('/tbl/list/{tableId}', 'Backend\TblController@listDataTbl')->name('listDataTbl');
        Route::get('/tbl/edit/{tableId}/{dataId}', 'Backend\TblController@formDataTbl')->name('editDataTbl');
        Route::post('/tbl/edit/{tableId}/{dataId}', 'Backend\TblController@submitFormDataTbl');
    });
});
