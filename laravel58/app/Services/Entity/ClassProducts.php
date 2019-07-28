<?php

namespace App\Services\Entity;

use App\Model\Product;
use App\Model\ProductsData;
use App\Model\ProductsImage;

class ClassProducts {

    public function saveProducts($request, $id) {
        if ($id > 0) {
            $product = Product::find($id);
        } else {
            $product = new Product;
        }
        if(!empty($request->active))
            $product->image = $request->img[$request->active];
        else 
            $product->image = $request->img[0];
        $product->category_id = $request->category_id;
        $product->price = $request->price;
        $product->price_promotion = $request->price_promotion;
        $product->active = $request->active;

        $product->save();
        return $product;
    }

    public function saveProductsData($productId, $request) {
        foreach (\Config::get('languages') as $lang => $language) {
            //kiểm tra ngôn ngữ này đã có data chưa
            $productData = ProductsData::where('products_id', $productId)
                    ->where('language', $lang)
                    ->first();
            if (empty($productData))
                $productData = new ProductsData;

            $productData->sluggable = app('ClassCommon')->formatText($request->name);
            $productData->content = $request->content;
            $productData->summary = $request->summary;
            $productData->name = $request->name;
            $productData->description = $request->description;
            $productData->keyword = $request->keyword;
            $productData->color = $request->color;
            $productData->baohanh = $request->baohanh;
            $productData->tinhtrang = $request->tinhtrang;
            $productData->language = $lang;
            $productData->products_id = $productId;
            $productData->maker = $request->maker;
            $productData->save();
        }
        return \ReturnCode::RETURN_SUCCESS;
    }


    /**
     * get Product by condition
     * $conditions = [$collumn => value]
     * $limit = 0 is get all
     *          1 is get first item
     *          >1 is paginate
     * @return list product
     */
    public function getProductByConditions($limit = 0, $conditions = []) {
        $products = new Products;
        foreach ($conditions as $columnName => $value) {
            $products = $products->where($columnName, $value);
        }
        $products = $products->paginate($limit);
        return $products;
    }

    public function getDataProductsById($id) {
        $result = [];
        foreach (\Config::get('languages') as $lang => $language) {
            $data = Product::select([
                        \TblName::PRODUCTS . '.id as pId',
                        \TblName::PRODUCTS . '.*',
                        \TblName::PRODUCTS_DATA . '.id as pdId',
                        \TblName::PRODUCTS_DATA . '.*',
                    ])
                    ->where(\TblName::PRODUCTS . '.id', $id)
                    ->where(\TblName::PRODUCTS_DATA . '.language', $lang)
                    ->leftJoin(\TblName::PRODUCTS_DATA, \TblName::PRODUCTS_DATA . '.products_id', \TblName::PRODUCTS . '.id')
                    ->first();
            $result[$lang] = $data;
        }
        return $result;
    }

    public function getProductByCategory($cateId, $limit = 4, $order = 'latest') {
        $subCategory = app('ClassCategory')->getSubCategoryID($cateId);

        $products = Product::select([
                    \TblName::PRODUCTS . '.id as pId',
                    \TblName::PRODUCTS . '.*',
                    \TblName::PRODUCTS_DATA . '.id as pdId',
                    \TblName::PRODUCTS_DATA . '.*',
                ])
                ->whereIn(\TblName::PRODUCTS . '.category_id', $subCategory)
                ->where(\TblName::PRODUCTS_DATA . '.language', 'vi')
                ->leftJoin(\TblName::PRODUCTS_DATA, \TblName::PRODUCTS_DATA . '.products_id', \TblName::PRODUCTS . '.id');
        if ($order == 'asc')
            $products = $products->orderBy(\TblName::PRODUCTS . '.price', 'asc');
        elseif ($order == 'desc')
            $products = $products->orderBy(\TblName::PRODUCTS . '.price', 'desc');
        else
            $products = $products->orderBy(\TblName::PRODUCTS . '.updated_at', 'desc');

        $products = $products->paginate($limit);
        return $products;
    }

    public function getCountProductByCategory($cateId) {
        $subCategory = app('ClassCategory')->getSubCategoryID($cateId);
        $products = Product::select([
                    \TblName::PRODUCTS . '.id as pId',
                    \TblName::PRODUCTS . '.*',
                    \TblName::PRODUCTS_DATA . '.id as pdId',
                    \TblName::PRODUCTS_DATA . '.*',
                ])
                ->whereIn(\TblName::PRODUCTS . '.category_id', $subCategory)
                ->count();
        return $products;
    }

    public function searchProductByName($keyword) {
        $products = Product::select([
                    \TblName::PRODUCTS . '.id as pId',
                    \TblName::PRODUCTS . '.*',
                    \TblName::PRODUCTS_DATA . '.id as pdId',
                    \TblName::PRODUCTS_DATA . '.*',
                ])
                ->where(\TblName::PRODUCTS_DATA . '.name', 'like', "%$keyword%")
                ->where(\TblName::PRODUCTS_DATA . '.language', "vi")
                ->leftJoin(\TblName::PRODUCTS_DATA, \TblName::PRODUCTS_DATA . '.products_id', \TblName::PRODUCTS . '.id')
                ->paginate(40);
//                
        return $products;
    }

    public function adminListProduct($request) {
        $products = Product::select([
                    \TblName::PRODUCTS . '.id as pId',
                    \TblName::PRODUCTS . '.*',
                    \TblName::PRODUCTS_DATA . '.id as pdId',
                    \TblName::PRODUCTS_DATA . '.*',
        ]);

        if (!empty($request->cate)) {
            $products = $products->where(\TblName::PRODUCTS . '.category_id', $request->cate);
        }

        if (!empty($request->q)) {
            $products = $products->where(\TblName::PRODUCTS_DATA . '.name', 'like', "%$q%");
        }

        $products = $products->where(\TblName::PRODUCTS_DATA . '.language', "vi");
        $products = $products->leftJoin(\TblName::PRODUCTS_DATA, \TblName::PRODUCTS_DATA . '.products_id', \TblName::PRODUCTS . '.id')->paginate(40);

//                
        return $products;
    }

}
