<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller {

    public function __construct() {
        
    }

    public function detail($sluggable, $id) {
        $news = app('ClassNews')->getDataNewsByColId($id);


        //get all news is project
        $conditionsProjectLatest = [
            \TblName::NEWS_DATA . '.language' => \App::getLocale(),
            \TblName::NEWS . '.category_id' => 55,
        ];
        $orderProjectLatest = [\TblName::NEWS . '.id', 'desc'];
        $listProjectLatest = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsProjectLatest, 4, $orderProjectLatest);

        $config = app('ClassConfig')->getConfig();
        
        $news = $news['vi'];

        //get all news latest
        $conditionsNews = [
            \TblName::NEWS_DATA . '.language' => 'vi',
        ];
        $order = [\TblName::NEWS . '.id', 'desc'];
        $subCategoryID = app('ClassCategory')->getSubCategoryID(65);
        if (!empty($subCategoryID)) {
            $whereInConditionsNews = ['category_id' => $subCategoryID];
        } else {
            $whereInConditionsNews = [];
        }
        $listNewsLatest = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsNews, 10, $order, $whereInConditionsNews);
//			dd($listNewsLatest);
        //tin nổi bật
        $conditionsHighlight = [
            \TblName::NEWS_DATA . '.language' => 'vi',
            \TblName::NEWS . '.type' => 'highlight'
        ];
        $listHighlight = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsHighlight, 5, $order);

        $category = app('ClassCategory')->getDataById($news->category_id);
        
        return view('Frontend.News.detailBasic', compact('news', 'listNewsLatest', 'listHighlight', 'config', 'category'));
    }

    public function single($sluggable, $cid) {

        $conditions = [
            \TblName::NEWS_DATA . '.language' => 'vi',
            \TblName::NEWS . '.category_id' => $cid
        ];
        $order = [\TblName::NEWS . '.id', 'desc'];
        $news = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditions, 1, $order);

        $category = app('ClassCategory')->getDataById($cid);

        $config = app('ClassConfig')->getConfig();

        return view('Frontend.News.single', [
            'news' => $news,
            'config' => $config,
            'category' => $category
        ]);
    }

    public function listNews($sluggable, $cid) {
        //get news by category
        $conditionsNews = [
            \TblName::NEWS_DATA . '.language' => 'vi',
        ];
        $order = [\TblName::NEWS . '.id', 'desc'];
        $subCategoryID = app('ClassCategory')->getSubCategoryID($cid);
        if (!empty($subCategoryID)) {
            $whereInConditionsNews = ['category_id' => $subCategoryID];
        } else {
            $whereInConditionsNews = [];
        }
        $listNews = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsNews, 30, $order, $whereInConditionsNews);

//        print_r($listNews);die;
        $config = app('ClassConfig')->getConfig();

        //Kiểm tra loại nội dung hiển thị ra view,
        //if parent_id = 0 thì sẽ show ra trang index news
        //else sẽ show ra trang listNews01
        $cateConditions = [\TblName::CATEGORY . '.id' => $cid];
        $category = app('ClassTbl')->getDatasTblByConditions(\TblName::CATEGORY, $cateConditions, 1);

        return view('Frontend.News.listNews', compact('listNews', 'listHighlight', 'config', 'category', 'subCategorys', 'listProject'));
    }

    public function search(Request $request) {
        //get all news by category
        $listNews = app('ClassNews')->searchByKeyword($request->keyword);

        $conditionsHighlight = [
            \TblName::NEWS_DATA . '.language' => \App::getLocale(),
            \TblName::NEWS . '.type' => 'highlight'
        ];
        $order = [\TblName::NEWS . '.id', 'desc'];
        $listHighlight = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsHighlight, 5, $order);

        $config = app('ClassConfig')->getConfig();

        return view('Frontend.News.search', compact('listNews', 'listHighlight', 'config'));
    }

}
