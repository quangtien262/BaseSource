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
    Route::resource('users', 'Backend\UserController');

    Route::resource('roles', 'Backend\RoleController');

    Route::resource('permissions', 'Backend\PermissionController');
});
