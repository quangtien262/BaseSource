<?php

namespace App\Services\Entity;

use App\Model\Category;
use App\Model\CategoryData;

class ClassCategory {

    public function getDataById($id, $lang = 'vi') {
        if (empty($lang)) {
            $lang = \App::getLocale();
        }
        $listCategory = Category::select([
                    \TblName::CATEGORY_DATA . '.id as cdId',
                    \TblName::CATEGORY_DATA . '.*',
                    \TblName::CATEGORY . '.id as cId',
                    \TblName::CATEGORY . '.*'
                ])
                ->where(\TblName::CATEGORY . '.id', $id)
                ->where(\TblName::CATEGORY_DATA . '.language', $lang)
                ->leftJoin(\TblName::CATEGORY_DATA, \TblName::CATEGORY . '.id', \TblName::CATEGORY_DATA . '.category_id')
                ->orderBy('sort_order', 'asc')
                ->first();

        return $listCategory;
    }

    public function getDataByIds($ids, $lang = 0) {
        if (empty($lang)) {
            $lang = \App::getLocale();
        }

        $listCategory = Category::select([
                    \TblName::CATEGORY_DATA . '.id as cdId',
                    \TblName::CATEGORY_DATA . '.*',
                    \TblName::CATEGORY . '.id as cId',
                    \TblName::CATEGORY . '.*'
                ])
                ->whereIn(\TblName::CATEGORY . '.id', $ids);
        $listCategory = $listCategory->where(\TblName::CATEGORY_DATA . '.language', $lang)
                ->leftJoin(\TblName::CATEGORY_DATA, \TblName::CATEGORY . '.id', \TblName::CATEGORY_DATA . '.category_id')
                ->orderBy('sort_order', 'asc')
                ->get();
        return $listCategory;
    }

    public function saveCategory($cid, $request) {
        if ($cid > 0) {
            $category = Category::find($cid);
        } else {
            $category = new Category;
        }

        $file = $request->file('image');
        if (count($file) > 0) {
            $destinationPath = 'img/category';
            $filename = $file->getClientOriginalName();
            $filePath = $destinationPath . '/' . $filename;
            $file->move($destinationPath, $filename);
        } else {
            $filePath = $request->hiddenImage;
        }

        $category->image = $filePath;
        $category->route_name = $request->route_name;
        $category->type = $request->type;
        $category->front = $request->front;
        $category->parent_id = intval($request->parent_id);
        $category->sort_order = intval($request->sort_order);
        if(!empty($request->icon))
            $category->icon = $request->icon;
        
        $category->save();
        return $category;
    }

    public function saveCategoryData($cid, $request) {
        try {
            \DB::beginTransaction();
            foreach (\Config::get('languages') as $lang => $language) {
                if (CategoryData::where('category_id', $cid)->where('language', $lang)->count() > 0)
                    $cateData = CategoryData::where('category_id', $cid)->where('language', $lang)->first();
                else
                    $cateData = new CategoryData;

                $name = 'name_' . $lang;
                $cateData->name = $request->$name;

                $link = '';
//            dd($request->routeName);
                if (!empty($request->route_name))
                    $link = route($request->route_name, [app('ClassCommon')->formatText($request->$name), $cid], false);

                $cateData->link = $link;
                $cateData->seo_description = $request->seo_description;
                $cateData->seo_keyword = $request->seo_keyword;
                $cateData->category_id = $cid;
                $cateData->language = $lang;

                $cateData->save();
            }
            \DB::commit();
            return \ReturnCode::RETURN_SUCCESS;
        } catch (\Exception $exc) {
            \DB::rollback();
            echo $exc->getMessage();
            return \ReturnCode::RETURN_ERROR;
        }
        return $cateData;
    }

    public function htmlMenuProduct($classUL = 'branding__menu') {
        $conditions = [
            \TblName::CATEGORY . '.parent_id' => 0,
            \TblName::CATEGORY_DATA . '.language' => 'vi',
            \TblName::CATEGORY . '.route_name' => 'listProduct'
        ];
        $category = app('ClassTbl')->getDatasTblByConditions(\TblName::CATEGORY, $conditions);

        $hidden = '';
        if (\Request::route()->getName() != 'home') {
            $hidden = '_hidden';
        }
        $html = '<ul class="' . $classUL . ' ' . $hidden . '">';
        foreach ($category as $cate) {
            $icon = '';
            if (!empty($cate->icon)) {
                $icon = $cate->icon;
            }
            if (self::countSubCategory($cate->tid) > 0) {

                $conditionsSub = [
                    \TblName::CATEGORY . '.parent_id' => $cate->tid,
                    \TblName::CATEGORY_DATA . '.language' => 'vi',
                    \TblName::CATEGORY . '.route_name' => 'listProduct'
                ];
                $subCategory = app('ClassTbl')->getDatasTblByConditions(\TblName::CATEGORY, $conditionsSub);

                $html .= '<li class="branding__item branding branding--beauty multicolumns">
                            <a href="' . route($cate->route_name, [$cate->sluggable, $cate->tid]) . '"><i class="' . $icon . '"></i>' . $cate->name . '</a>';
                $html .= '<div class="submenu-wrapper">
                                    <div class="branding__submenu columns columns-2">
                                        <div class="menucolumn">
                                            <ul class="submenu">';
                $html .= '<li  class="submenu-heading"><a  href="' . route($cate->route_name, [$cate->sluggable, $cate->tid]) . '">' . $cate->name . '</a></li>';
                foreach ($subCategory as $subCate) {
                    $html .= '<li  class="child"><a  href="' . route($subCate->route_name, [$subCate->sluggable, $subCate->tid]) . '">' . $subCate->name . '</a></li>';
                }
                $html .= '</ul></div></div></div>';

                $html .= '</li>';
            } else {
                $html .= '<li class="no_sub">
                            <a href="' . route($cate->route_name, [$cate->sluggable, $cate->tid]) . '"><i class="' . $icon . '"></i>' . $cate->name . '</a>
						</li>';
            }
        }
        $html .= '</ul>';
        return $html;
    }

    public function htmlMenuMobile() {
        $conditions = [
            \TblName::CATEGORY . '.parent_id' => 0,
            \TblName::CATEGORY_DATA . '.language' => 'vi',
        ];
        $category = app('ClassTbl')->getDatasTblByConditions(\TblName::CATEGORY, $conditions);

        $hidden = '';
        if (\Request::route()->getName() != 'home') {
            $hidden = '_hidden';
        }
        $html = '<ul class="nav-menu" style="padding: 10px 0; margin: 0;">';
        foreach ($category as $cate) {
            $icon = '';
            if (!empty($cate->icon)) {
                $icon = '<i class="' . $cate->icon . '"></i>';
            }
            if (!empty($cate->route_name)) {
                $link = route($cate->route_name, [$cate->sluggable, $cate->tid]);
            } else {
                $link = $cate->link;
            }
            $html .= '<li class="nav-menu">
                            <a href="' . $link . '">' . $icon . $cate->name . '</a>
						</li>';
        }
        $html .= '</ul>';
        return $html;
    }

    public function htmlCategoryByParent($parentId) {
        $conditions = [
            \TblName::CATEGORY . '.parent_id' => $parentId,
            \TblName::CATEGORY_DATA . '.language' => 'vi'
        ];
        $category = app('ClassTbl')->getDatasTblByConditions(\TblName::CATEGORY, $conditions, 15);
        $html = '';
        foreach ($category as $cate) {
            $name = str_replace('Sạc', '', $cate->name);
            $name = str_replace('Pin', '', $name);
            $name = str_replace('Bàn Phím', '', $name);
            $name = str_replace('Laptop', '', $name);
            $html .= '<li><a href="' . route($cate->route_name, [$cate->sluggable, $cate->tid]) . '">' . $name . '</a></li>';
        }

        return $html;
    }

    public function htmlMenuFooter($classUL = 'list-item') {
        $conditions = [
            \TblName::CATEGORY . '.parent_id' => 0,
            \TblName::CATEGORY_DATA . '.language' => 'vi'
        ];
        $category = app('ClassTbl')->getDatasTblByConditions(\TblName::CATEGORY, $conditions);
        $html = '<ul class="' . $classUL . '">';
        foreach ($category as $cate) {
            $html .= '<li>
						<a href="' . $cate->link . '">' . $cate->name . '</a>
					</li>';
        }
        $html .= '</ul>';
        return $html;
    }

    public function htmlMenuNews() {
        $category = Category::select([
                    \TblName::CATEGORY_DATA . '.id as cdId',
                    \TblName::CATEGORY_DATA . '.*',
                    \TblName::CATEGORY . '.id as cId',
                    \TblName::CATEGORY . '.*'
                ])
                ->where(\TblName::CATEGORY . '.route_name', '!=', 'listProduct')
                ->leftJoin(\TblName::CATEGORY_DATA, \TblName::CATEGORY . '.id', \TblName::CATEGORY_DATA . '.category_id')
                ->orderBy('sort_order', 'asc')
                ->get();
        $hidden = '';
        if (\Request::route()->getName() != 'home') {
            $hidden = '_hidden';
        }
        $html = '';
        foreach ($category as $cate) {
            if (!empty($cate->route_name)) {
                $link = '';
                $link = route($cate->route_name, [$cate->sluggable, $cate->id]);
            } else {
                $link = $cate->link;
            }
            $html .= '<li class="no_sub">
                            <a href="' . $link . '">' . $cate->name . '</a>
						</li>';
        }
        return $html;
    }

    public function htmlMenuLand02($parent_id) {
        $conditions = [
            \TblName::CATEGORY . '.parent_id' => $parent_id,
            \TblName::CATEGORY_DATA . '.language' => 'vi'
        ];
        $category = app('ClassTbl')->getDatasTblByConditions(\TblName::CATEGORY, $conditions);
        $html = '<ul id="avia-menu" class="menu av-main-nav">';
        foreach ($category as $cate) {
            if (self::countSubCategory($cate->tid) > 0) {
                $html .= '<li  id="menu-item-' . $cate->tid . '" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-947">';
                $html .= '<a href="' . $cate->link . '">' . $cate->name . '</a>';
                $html .= '<ul  class="sub-menu">';
                $conditionsSub = [
                    \TblName::CATEGORY . '.parent_id' => $cate->tid,
                    \TblName::CATEGORY_DATA . '.language' => \App::getLocale()
                ];
                $subCategory = app('ClassTbl')->getDatasTblByConditions(\TblName::CATEGORY, $conditionsSub);
                foreach ($subCategory as $sCate) {
                    $html .= '<li id="menu-item-' . $sCate->tid . '" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-' . $sCate->tid . '">'
                            . '<a href="' . $sCate->link . '">' . $sCate->name . '</a>'
                            . '</li>';
                }
                $html .= '</ul>';
                $html .= '</li>';
            } else {
                $html .= '<li  id="menu-item-' . $cate->tid . '" class="menuItem">
                            <a href="' . $cate->link . '">
                                <span>' . $cate->name . '</span>
                            </a>
						</li>';
            }
        }
        $html .= '</ul>';
        return $html;
    }

    private function countSubCategory($id) {
        return Category::where('parent_id', $id)->count();
    }

    //admin function'
    public function htmlListCategoryInAdmin($parentID) {
        $listCategory = Category::where('parent_id', $parentID)
                ->orderBy('sort_order', 'asc')
                ->get();
        $htmlListCategory = '';
        if (count($listCategory) > 0) {
            $htmlListCategory .= '<ol class="dd-list">';
            $idx = 0;
            foreach ($listCategory as $category) {

                $idx++;

                $categoryData = CategoryData::where('category_id', $category->id)
                        ->orderBy('id', 'desc')
                        ->get();
                $name_arr = [];
                foreach ($categoryData as $data) {
                    $name_arr[] = $data->name;
                }
                $name = implode(' - ', $name_arr);

                //check show in footer
                if (isset($category->footer) && $category->footer == 1) {
                    $showFooter = "<em style='font-size:11px; color:blue'> (footer)</em>";
                } else {
                    $showFooter = '';
                }

                //check show in mobile
                if (isset($category->mobile) && $category->mobile == 1) {
                    $showMobile = "<em style='font-size:11px; color:red'> (mobile)</em>";
                } else {
                    $showMobile = '';
                }

                $htmlListCategory .= '<li data-id="' . $category->id . '" class="dd-item">'
                        . '<div class="option-menu">'
                        . '<a onclick="loadPopupLarge(\'/admin/category/edit/' . $category->id . '\')" data-toggle="modal" data-target=".bs-modal-lg"><i data-pack="default" class="ion-edit"></i></a>&nbsp;&nbsp;'
                        . '<a onclick="deleteCategory(\'' . $category->id . '\')"  tabindex="-1"><i data-pack="default" class="ion-trash-a"></i></a></div>'
                        . '<div class="card b0 dd-handle"><div class="mda-list">'
                        . '<div class="mda-list-item"><div class="mda-list-item-icon item-grab"><em class="ion-drag icon-lg"></em></div>'
//                        . $image
                        . '<div class="mda-list-item-text mda-2-line">';
                $htmlListCategory .= '<h4>' . $name . $showFooter . $showMobile . ' </h4>';
                $htmlListCategory .= '</div><div class="_right">'
                        . '</div></div></div></div>';
                $subMenu = Category::where('parent_id', $category->id)->count();
                if ($subMenu > 0) {
                    $htmlListCategory .= self::htmlListCategoryInAdmin($category->id);
                }
                $htmlListCategory .= "</li>";
            }
            $htmlListCategory .= '</ol>';
        }
        return($htmlListCategory);
    }

    public function recursivelyUpdateSortOrder($listCateID, $parentId = 0) {
        $idx = 0;
        foreach ($listCateID as $cate) {
            $idx++;
            $category = Category::find($cate['id']);
            $category->sort_order = $idx;
            $category->parent_id = $parentId;
            $category->save();
            if (isset($cate['children'])) {
                self::recursivelyUpdateSortOrder($cate['children'], $cate['id']);
            }
        }
        return 'success';
    }

    private function getCateByRouteNameAndParentId($parentID = 0, $routeName = []) {

        $listCategory = Category::select([
                    \TblName::CATEGORY_DATA . '.id as cdId',
                    \TblName::CATEGORY_DATA . '.*',
                    \TblName::CATEGORY . '.id as cId',
                    \TblName::CATEGORY . '.*'
                ])
                ->where('parent_id', $parentID);
        if (!empty($routeName)) {
            $listCategory = $listCategory->whereIn('route_name', $routeName);
        }
//        $listCategory = $listCategory->where(\TblName::CATEGORY_DATA . '.language', \App::getLocale())
        $listCategory = $listCategory->where(\TblName::CATEGORY_DATA . '.language', 'vi')
                ->leftJoin(\TblName::CATEGORY_DATA, \TblName::CATEGORY . '.id', \TblName::CATEGORY_DATA . '.category_id')
                ->orderBy('sort_order', 'asc')
                ->get();
        return $listCategory;
    }

    public function OptionElement($parentID, $routeName = [], $selectedId = 0, $space = '&nbsp;') {

        $listCategory = self::getCateByRouteNameAndParentId($parentID, $routeName);
        $htmlOption = '';
        if (count($listCategory) > 0) {
            foreach ($listCategory as $cate) {
                if ($cate->cId == $selectedId) {
                    $selected = ' selected ';
                } else {
                    $selected = '';
                }
                $htmlOption .= '<option ' . $selected . ' value="' . $cate->cId . '">' . $space . $cate->name . '</option>';

                $countSubCategory = Category::where('parent_id', $cate->cId)
//                    ->where('route_name', $routeName)
                        ->count();
                if ($countSubCategory > 0) {
                    $subSpace = $space . $space . $space . $space . $space . $space;
                    $htmlOption .= self::OptionElement($cate->cId, $routeName, $selectedId, $subSpace);
                }
            }
        }
        return($htmlOption);
    }

    public function getSubCategoryID($parentID) {
        $c = $parentID . self::stringSubCategoryID($parentID);
        $m = explode(",", $c);
        return $m;
    }

    private function countSubCate($parentID) {
        return Category::where('parent_id', $parentID)->count();
    }

    private function stringSubCategoryID($parentID, $data = '') {
        if (self::countSubCate($parentID)) {
            $category = Category::where('parent_id', $parentID)->get();
            foreach ($category as $cate) {
                $data = $data . "," . $cate->id;
                if (self::countSubCate($cate->id)) {
                    $data = self::stringSubCategoryID($cate->id, $data);
                }
            }
        }
        return($data);
    }

    public function deleteByCateId($cid) {
        $cate = Category::find($cid);
        if (!empty($cate)) {
            if ($cid > 0) {
                Category::find($cid)->delete();
                CategoryData::where('category_id', $cid)->delete();
            }
        }
        return \ReturnCode::RETURN_SUCCESS;
    }

    public function getMenuLeft($cid) {
        $result = [];
        $category = self::getDataById($cid);
        if ($category->parent_id == 0) {
            $subId = self::getSubCategoryID($category->id);
            $result['parent'] = $category;
        } else {
            $subId = self::getSubCategoryID($cid);
            $result['parent'] = self::getDataById($category->parent_id);
        }
        if (($key = array_search($cid, $subId)) !== false) {
            unset($subId[$key]);
        }
        $result['sub'] = self::getDataByIds($subId);
        return $result;
    }

    public function getCategoryByIds($cid) {
        $result = [];
        $category = self::getDataById($cid);
        if ($category->parent_id == 0) {
            $subId = self::getSubCategoryID($category->id);
            $result['parent'] = $category;
        } else {
            $subId = self::getSubCategoryID($cid);
            $result['parent'] = self::getDataById($category->parent_id);
        }
        if (($key = array_search($cid, $subId)) !== false) {
            unset($subId[$key]);
        }
        $result['sub'] = self::getDataByIds($subId);
        return $result;
    }

    public function getCateByParentId($parentID = 0) {
        $listCategory = Category::select([
                    \TblName::CATEGORY_DATA . '.id as cdId',
                    \TblName::CATEGORY_DATA . '.*',
                    \TblName::CATEGORY . '.id as cId',
                    \TblName::CATEGORY . '.*'
                ])
                ->where('parent_id', $parentID)
                ->where(\TblName::CATEGORY_DATA . '.language', 'vi')
                ->leftJoin(\TblName::CATEGORY_DATA, \TblName::CATEGORY . '.id', \TblName::CATEGORY_DATA . '.category_id')
                ->orderBy('sort_order', 'asc')
                ->get();
        return $listCategory;
    }

}
