<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



Route::group(['middleware' => 'auth'], function () {
    Route::group(['prefix' => 'admin'], function () {
        Route::get('/', 'Backend\PagesController@home')->name('adminHome');
        //config tbl
        Route::get('/configtbl', 'Backend\TablesController@index')->name('configTbl');
        Route::get('/configtbl/edit/{id}', 'Backend\TablesController@formEdit')->name('configTbl_edit');
        Route::post('/configtbl/edit-table/{id}', 'Backend\TablesController@postSbmitFormTable')->name('editTable');
        Route::post('/configtbl/edit-column', 'Backend\TablesController@postSubmitFormColumn')->name('editColumn');
        Route::get('/configtbl/delete-table/', 'Backend\TablesController@deleteTable')->name('deleteTable');
        Route::get('/configtbl/delete-column', 'Backend\TablesController@deleteColumn')->name('deleteColumn');
        Route::get('/tbl/list/{tableId}', 'Backend\TablesController@listDataTbl')->name('listDataTbl');
        Route::get('/tbl/edit/{tableId}/{dataId}', 'Backend\TablesController@formDataTbl')->name('editDataTbl');
        Route::post('/tbl/edit/{tableId}/{dataId}', 'Backend\TablesController@submitFormDataTbl');
    });
    Route::resource('users', 'Backend\UserController');

    Route::resource('roles', 'Backend\RoleController');

    Route::resource('permissions', 'Backend\PermissionController');
});

