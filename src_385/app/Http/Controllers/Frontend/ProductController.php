<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Model\Product;

class ProductController extends Controller {

    public function listProduct($name, $id) {
        $listProduct = Product::where('category_id', '=', $id)->paginate(30);
        return view('frontend.product.listProduct', [
            'listProduct' => $listProduct,
        ]);
    }
    public function detailProduct($name, $id) {

        $detaiproduct = Product::find($id);
        $images = !empty($detaiproduct->images) ? json_decode($detaiproduct->images, true):['avatar' => ''];
        $image = $images['avatar'];
        $listProduct = Product::where('category_id', '=', $id)->paginate(32);
        return view('frontend.product.detailProduct', [
            'detaiproduct' => $detaiproduct,
            'listProduct' => $listProduct,
            'images' => $images,
            'image' => $image,
        ]);
    }

}
