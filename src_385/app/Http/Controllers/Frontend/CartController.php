<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Cart;
use App\Model\CartProduct;
use App\Model\Product;

class CartController extends Controller {

    public function __construct() {
        
    }

    public function index(Request $request) {

        if (!empty($request->carId)) {
            \Cart::remove($request->carId);
            return redirect(route('cart'));
        }
        if (!empty($request->pid)) {
            $product = Product::find($request->pid);
            if (!empty($product)) {
                if (!empty($product->gia_ban) && !empty($product->gia_khuyen_mai) && $product->gia_ban > $product->gia_khuyen_mai) {
                    $price = $product->gia_khuyen_mai;
                } else {
                    $price = $product->gia_ban;
                }

                \Cart::add($request->pid, $product->name, 1, intval($price), ['count' => 1]);

                if (!empty($request->return) && $request->return == 'back') {
                    return \Redirect::back();
                } else {
                    return redirect(route('cart'));
                }

                return redirect(route('cart'));
            }
        }
        $cartContent = \Cart::content();

        $title = 'Giỏ hàng';
        return view('frontend.Cart.index', [
            'cartContent' => $cartContent,
            'title' => $title
        ]);
    }

    public function orders(Request $request) {

        if (!empty($request->carId)) {
            \Cart::remove($request->carId);
            return redirect(route('cart'));
        }

        if (!empty($request->pid)) {
            $product = Product::find($request->pid);
            if (!empty($product)) {
                if (!empty($product->gia_ban) && !empty($product->gia_khuyen_mai) && $product->gia_ban > $product->gia_khuyen_mai) {
                    $price = $product->gia_khuyen_mai;
                } else {
                    $price = $product->gia_ban;
                }
                \Cart::add($request->pid, $product['vi']->name, 1, $price, ['count' => 1]);

                return redirect(route('cart'));
            }
        }
        $user = \Auth::user(); 
        $config = app('EntityCommon')->getDataById('configweb', 1);
        $title = 'Đặt hàng';
        return view('frontend.Cart.orders', [
            'config' => $config,
            'title' => $title,
            'user' => $user
        ]);
    }

    public function postOrders(Request $request) {
       try {
           \DB::beginTransaction();
        $userId = 0;
        if(\Auth::check()) {
            $userId = \Auth::user()->id; 
        } 
        $cart = new Cart;
        $cart->fullname = $request->name;
        $cart->address_type = $request->address_type;
        $cart->address = $request->address;
        $cart->phone = $request->phone;
        $cart->email = $request->email;
        $cart->user_id = $userId;
        $cart->save();
        
        foreach (\Cart::content() as $row) {
            $cartProduct = new CartProduct;
            $cartProduct->cart_id = $cart->id;
            $cartProduct->product_id = $row->id;
            $cartProduct->product_name = $row->name;
            $cartProduct->price = $row->price;
            $cartProduct->save();
        }

           \DB::commit();
       } catch (\Exception $exc) {
           \DB::rollback();
       }

        // \Cart::destroy();

        $config = app('EntityCommon')->getDataById('configweb', 1);
        //send mail
        $title = "[website] " . $request->title;
        $view = 'Frontend.Elements.email.default';
        $from = 'auto@aclaptop.net';
        $tos = [$config->email];
        $total = 0;
        $content = '<p><b>Địa chỉ nhận hàng:</b> ' . $request->address . '</p>';
        $content .= '<br><p><b>Thông tin đơn hàng:</b></p>';
        $content .= '<table>';
        $content .= '<tr>
                        <th><b>Tên sản phẩm:</b></th>
                        <th><b>Giá Sản phẩm (VNĐ)</b></th>
                    </tr>';
        foreach (\Cart::content() as $row) {
            $total = $total + ($row->options->count * $row->price);
            $content .= '<tr>
                            <td><a href="' . route('detailProduct', [ app('ClassCommon')->formatText($row->name), $row->id]) . '">' . $row->name . '</a></td>
                            <td>' . $request->price . '</td>
                        </tr>';
        }
        $content .= '<tr>
                        <td></td>
                        <td>' . $total . '</td>
                    </tr>';
        $content .= '</table>';

        $data = [
            'title' => 'Đơn đặt hàng từ saclaptop.net',
            'name' => $request->fullname,
            'email' => $request->email,
            'phone' => $request->phone,
            'content' => $content,
        ];

        $sendmail = app('ClassEmail')->sendMail($title, $view, $from, $tos, $data);

        return redirect(route('ordersResult'));
    }

    public function ordersResult(Request $request) {

        $config = app('EntityCommon')->getDataById('configweb', 1);
        $title = "Đặt hàng Thành công";
        return view('frontend.Cart.ordersResult', [
            'config' => $config,
            'title' => $title
        ]);
    }

}

//duyquang18106@gmail.com