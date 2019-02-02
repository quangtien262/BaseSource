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
        Route::post('/configtbl/edit/{id}', 'Backend\TablesController@postEdit');
    });
});

