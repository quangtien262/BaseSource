<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BackendController;
use Illuminate\Http\Request;

class PagesController extends BackendController
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function home()
    {
        if(!empty($_GET['tien_coc'])) {
            //insert hd to tien_coc
            $hd1 = app('EntityCommon')->getRowsByConditions('hop_dong');
            // dd($hd);
            foreach($hd1 as $hd) {
                $data = [];
                $data['name'] = $hd->name;
                $data['motel_room_id'] = $hd->motel_room_id;
                // $data['customer_id'] = $hd->customer_id;
                $data['tien_coc'] = $hd->tien_dat_coc;
                $data['status_hop_dong_id'] = $hd->status_hop_dong_id;
                $data['apartment_id'] = $hd->apartment_id;
                $data['start_date'] = $hd->start_date;
                $data['end_date'] = $hd->end_date;
                app('EntityCommon')->insertData('tien_coc', $data);
            }
        }
        // var_dump(\Auth::check());
        return view('backend.pages.home');
    }
}
