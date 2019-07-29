<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;

class ProductsController extends Controller {

    public function __construct() {
        
    }

    public function listProduct($sluggable, $cateId) {
        
        if(!empty($_GET['order']) && $_GET['order'] == 'desc') {
            $order = 'desc';
        } else if(!empty($_GET['order']) && $_GET['order'] == 'asc') {
            $order = 'asc';
        } else {
            $order = 'latest';
        }
        $products = app('ClassProducts')->getProductByCategory($cateId, 30, $order);

        //get category
        $category = app('ClassCategory')->getDataById($cateId);

        //check parent id
        if ($category->parent_id != 0) {
            $parentCategory = app('ClassCategory')->getDataById($category->parent_id);
        } else {
            $parentCategory = $category;
        }

        //get all sub
        $subCateId = app('ClassCategory')->getSubCategoryID($parentCategory->id);

        $listSubCategory = app('ClassCategory')->getDataByIds($subCateId);
        $config = app('ClassConfig')->getConfig();

        return view('Frontend.Products.list', [
            'products' => $products,
            'config' => $config,
            'category' => $category,
            'parentCategory' => $parentCategory,
            'listSubCategory' => $listSubCategory
        ]);
    }

    public function detail($sluggable, $pId) {
        $product = app('ClassProducts')->getDataProductsById($pId);

        //get image by productId
        $conditionsImages = [
            'product_id' => $pId
        ];
        $orderImages = ['active', 'DESC'];
        $productsImages = app('ClassTbl')->getRowsByConditions(\TblName::PRODUCTS_IMAGE, $conditionsImages, 30, $orderImages);
        
        $imgLarge = '';
        $imgThumb = '';
        foreach ($productsImages as $img) {
            $imgLarge .= '<a href="#" class=""><img width="400" itemprop="image" style="max-width: 100%;"  src="' . $img->image . '" alt="' . $product['vi']->name . '" /></a>';
            $imgThumb .= '<a class=""><img src="' . $img->image . '" alt="' . $product['vi']->name . '" /></a>';
        }

        //get category
        $category = app('ClassCategory')->getDataById($product['vi']->category_id);

        //sản phẩm liên quan
        $conditions = [
            \TblName::PRODUCTS . '.category_id' => $product['vi']->category_id
        ];
        $order = [\TblName::PRODUCTS . '.id', 'desc'];
        $products = app('ClassTbl')->getDatasTblByConditions(\TblName::PRODUCTS, $conditions, 8);

        //sản phẩm xem nhieu
        $conditionsTopView = [\TblName::PRODUCTS_DATA . '.language' => 'vi'];
        $orderTopView = [\TblName::PRODUCTS . '.views_count', 'desc'];
        $productsTopView = app('ClassTbl')->getDatasTblByConditions(\TblName::PRODUCTS, $conditionsTopView, 8, $orderTopView);
        
        //block
        $blockMoTaSP = app('ClassBlock')->getBlockByType('detailPro');

        //get data config
        $config = app('ClassConfig')->getConfig();
        return view('Frontend.Products.detail', [
            'config' => $config,
            'imgLarge' => $imgLarge,
            'imgThumb' => $imgThumb,
            'product' => $product['vi'],
            'title' => $product['vi']->name,
            'description' => $product['vi']->description,
            'keyword' => $product['vi']->keyword,
            'products' => $products,
            'category' => $category,
            'productsTopView' => $productsTopView,
            'blockMoTaSP' => $blockMoTaSP
        ]);
    }

    public function searchProductByName(Request $request) {
        $data = [];
        if (!empty($request->q)) {
            $products = app('ClassProducts')->searchProductByName($request->q);

            foreach ($products as $idx => $pro) {
                $data[$idx]['id'] = $pro->pId;
                $data[$idx]['url'] = route('detailProducts', [$pro->sluggable, $pro->pId]);
                $data[$idx]['username'] = $pro->name;
                $data[$idx]['image'] = $pro->image;
            }
        }


        $result = [
            "status" => true,
            "error" => null,
            "data" => ['user' => $data]
        ];

        return response()->json($result);
    }

    public function search(Request $request) {
        if (!empty($request->q)) {
            $products = app('ClassProducts')->searchProductByName($request->q);
        } else {
            $products = app('ClassProducts')->searchProductByName('xxxxxxxxxxxxxxxxxx');;
        }
        //get category
//        $category = app('ClassCategory')->getDataById(0);
        //get all sub
//        $subCateId = app('ClassCategory')->getSubCategoryID(0);

        $listSubCategory = app('ClassCategory')->getCateByParentId(0);
        
//        dd($listSubCategory);

        $config = app('ClassConfig')->getConfig();

        return view('Frontend.Products.search', [
            'products' => $products,
            'config' => $config,
        ]);

        return response()->json($result);
    }

}
