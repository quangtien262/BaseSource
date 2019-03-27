<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Component\FormatDataComponent;
use App\Model\Category;
use App\Model\SiteConfig;
use App\Model\Images;
use App\Model\News;
use App\Model\LibraryImages;
use App\Model\Video;
use App\Model\DichVuHot;
use App\Model\Address;
use App\Http\Component\Frontend\CategoryComponent;
use Auth;
use Jenssegers\Agent\Agent;

class LibraryController extends Controller {

	public function __construct() {
		
	}

	public function listLibrary($slugCate, $cid) {
		$user = Auth::user();
		
		$subCategoryIDs = app('ClassCategory')->getSubCategoryID(69);
		$list = LibraryImages::whereIn('categoryID', $subCategoryIDs)
				->orderBy('id', 'desc')
				->paginate(12);
		$conditionsProjectLatest = [
			\TblName::NEWS_DATA . '.language' => \App::getLocale(),
			\TblName::NEWS . '.category_id' => 55,
		];
		$orderProjectLatest = [\TblName::NEWS . '.id', 'desc'];
		$listProjectLatest = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsProjectLatest, 4, $orderProjectLatest);

		$conditionsHighlight = [
			\TblName::NEWS_DATA . '.language' => 'vi',
			\TblName::NEWS . '.type' => 'highlight'
		];
		$order = [\TblName::NEWS . '.id', 'desc'];
		$listHighlight = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsHighlight, 5, $order);

		$conditionsNews = [
			\TblName::NEWS_DATA . '.language' => 'vi',
		];

		$subCategoryID = app('ClassCategory')->getSubCategoryID(56);
		if (!empty($subCategoryID)) {
			$whereInConditionsNews = ['category_id' => $subCategoryID];
		} else {
			$whereInConditionsNews = [];
		}
		$listNewsLatest = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsNews, 3, $order, $whereInConditionsNews);

		$config = app('ClassConfig')->getConfig();

		return view('Frontend/Library/list', [
			'list' => $list,
			'config' => $config,
			'listProjectLatest' => $listProjectLatest,
			'listHighlight' => $listHighlight,
			'listNewsLatest' => $listNewsLatest
		]);
	}

	public function detailLibrary($slugCate, $id) {
		$user = Auth::user();

		$libraryImages = LibraryImages::find($id);
		$lstFile = FormatDataComponent::dirToArray(LIB_FOLDER . $id);
		
		//get detail category
		$conditionsProjectLatest = [
			\TblName::NEWS_DATA . '.language' => \App::getLocale(),
			\TblName::NEWS . '.category_id' => 55,
		];
		$orderProjectLatest = [\TblName::NEWS . '.id', 'desc'];
		$listProjectLatest = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsProjectLatest, 4, $orderProjectLatest);

		$conditionsHighlight = [
			\TblName::NEWS_DATA . '.language' => 'vi',
			\TblName::NEWS . '.type' => 'highlight'
		];
		$order = [\TblName::NEWS . '.id', 'desc'];
		$listHighlight = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsHighlight, 5, $order);

		$conditionsNews = [
			\TblName::NEWS_DATA . '.language' => 'vi',
		];
		$subCategoryID = app('ClassCategory')->getSubCategoryID(56);
		if (!empty($subCategoryID)) {
			$whereInConditionsNews = ['category_id' => $subCategoryID];
		} else {
			$whereInConditionsNews = [];
		}
		$listNewsLatest = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsNews, 3, $order, $whereInConditionsNews);

		$config = app('ClassConfig')->getConfig();


		return view('Frontend/Library/detail', [
			'libraryImages' => $libraryImages,
			'config' => $config,
			'listProjectLatest' => $listProjectLatest,
			'listHighlight' => $listHighlight,
			'listNewsLatest' => $listNewsLatest,
			'lstFile' => $lstFile
		]);
	}

}
