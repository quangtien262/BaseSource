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
//Auth
Auth::routes();

Route::group(['prefix' => 'admin'], function () {
    Route::group(
        ['middleware' => 'auth'],
        function () {
            //TOOL ---------------------------------------------------------------
            Route::get('/configtbl', 'Backend\TblController@index')->name('configTbl');
            Route::get('/configtbl/edit/{id}', 'Backend\TblController@formEdit')->name('configTbl_edit');
            Route::post('/configtbl/edit-table/{id}', 'Backend\TblController@postSbmitFormTable')->name('editTable');
            Route::post('/configtbl/edit-column', 'Backend\TblController@postSubmitFormColumn')->name('editColumn');
            Route::get('/configtbl/delete-table/', 'Backend\TblController@deleteTable')->name('deleteTable');
            Route::get('/configtbl/delete-column', 'Backend\TblController@deleteColumn')->name('deleteColumn');
            Route::post('/configtbl/sort-order-table/', 'Backend\TblController@sortOrderTable')->name('sortOrderTable');
            //table
            Route::get('/tbl/list-row/{tableId}', 'Backend\RowController@listRow')->name('listDataTbl');
            Route::get('/tbl/edit-row/{tableId}/{dataId}', 'Backend\RowController@formRow')->name('formRow');
            Route::post('/tbl/edit-row/{tableId}/{dataId}', 'Backend\RowController@submitFormRow');
            Route::get('/tbl/delete-row/{tableId}/{dataId}', 'Backend\RowController@deleteRow')->name('deleteRow');
            Route::post('/tbl/delete-multiple-row', 'Backend\RowController@listOption')->name('listOption');
            Route::post('/tbl/sort-order-row/{tableId}', 'Backend\RowController@sortOrderRows')->name('sortOrderRows');
            Route::post('/configtbl/sort-order-Column/{tableId}', 'Backend\RowController@sortOrderColumn')->name('sortOrderColumn');
            Route::post('/tbl/update-current-row/{columnName}/{tableId}/{dataId?}/{subName?}/{subValue?}', 'Backend\RowController@editCurrentRow')->name('editCurrentColumn');

            Route::get('/tbl/import/{tableId}/', 'Backend\RowController@import2Excel')->name('import2Excel');
            Route::post('/tbl/import/{tableId}/', 'Backend\RowController@postImport2Excel');
            Route::get('/tbl/export/{tableId}/', 'Backend\RowController@export2Excel')->name('export2Excel');
            //blockType
            Route::get('/tbl/list-block/{landingPageId?}', 'Backend\BlockController@index')->name('adminListBlock');
            Route::get('/tbl/edit-block/{landingPageId}/{blockId}/{landingPageItemId?}', 'Backend\BlockController@formBlock')->name('adminEditBlock');
            Route::post('/tbl/edit-block/{landingPageId}/{blockId}/{landingPageItemId?}', 'Backend\BlockController@submitFormBlock');

            //upload file
            Route::post('file/upload', 'Backend\UploadController@uploadFile');
            Route::post('file/delete', 'Backend\UploadController@fileDestroy');
        }
    );
});
