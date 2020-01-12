<?php

namespace App\Services\Utils;

class ClassCommon
{
    public function formatText($string, $ext = '')
    {
        // remove all characters that aren"t a-z, 0-9, dash, underscore or space
        $string = strip_tags(str_replace('&nbsp;', ' ', $string));
        $string = str_replace('&quot;', '', $string);

        $string = self::_utf8ToAscii($string);
        $NOT_acceptable_characters_regex = '#[^-a-zA-Z0-9_ /]#';
        $string = preg_replace($NOT_acceptable_characters_regex, '', $string);
        // remove all leading and trailing spaces
        $string = trim($string);
        // change all dashes, underscores and spaces to dashes
        $string = preg_replace('#[-_]+#', '-', $string);
        $string = str_replace(' ', '-', $string);
        $string = preg_replace('#[-]+#', '-', $string);

        return strtolower($string.$ext);
    }

    public static function _utf8ToAscii($str)
    {
        $chars = array(
            'a' => array('ấ', 'ầ', 'ẩ', 'ẫ', 'ậ', 'Ấ', 'Ầ', 'Ẩ', 'Ẫ', 'Ậ', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ', 'Ắ', 'Ằ', 'Ẳ', 'Ẵ', 'Ặ', 'á', 'à', 'ả', 'ã', 'ạ', 'â', 'ă', 'Á', 'À', 'Ả', 'Ã', 'Ạ', 'Â', 'Ă'),
            'e' => array('ế', 'ề', 'ể', 'ễ', 'ệ', 'Ế', 'Ề', 'Ể', 'Ễ', 'Ệ', 'é', 'è', 'ẻ', 'ẽ', 'ẹ', 'ê', 'É', 'È', 'Ẻ', 'Ẽ', 'Ẹ', 'Ê'),
            'i' => array('í', 'ì', 'ỉ', 'ĩ', 'ị', 'Í', 'Ì', 'Ỉ', 'Ĩ', 'Ị'),
            'o' => array('ố', 'ồ', 'ổ', 'ỗ', 'ộ', 'Ố', 'Ồ', 'Ổ', 'Ô', 'Ộ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ', 'Ớ', 'Ờ', 'Ở', 'Ỡ', 'Ợ', 'ó', 'ò', 'ỏ', 'õ', 'ọ', 'ô', 'ơ', 'Ó', 'Ò', 'Ỏ', 'Õ', 'Ọ', 'Ô', 'Ơ'),
            'u' => array('ứ', 'ừ', 'ử', 'ữ', 'ự', 'Ứ', 'Ừ', 'Ử', 'Ữ', 'Ự', 'ú', 'ù', 'ủ', 'ũ', 'ụ', 'ư', 'Ú', 'Ù', 'Ủ', 'Ũ', 'Ụ', 'Ư'),
            'y' => array('ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ', 'Ý', 'Ỳ', 'Ỷ', 'Ỹ', 'Ỵ'),
            'd' => array('đ', 'Đ'),
        );
        foreach ($chars as $key => $arr) {
            $str = str_replace($arr, $key, $str);
        }

        return $str;
    }

    public function base64ToImage($base64, $output_file)
    {
        $file = fopen($output_file, 'wb');

        $data = explode(',', $base64);

        fwrite($file, base64_decode($data[1]));
        fclose($file);

        return true;
    }

    public function htmlFooter()
    {
        $html = '';
        $conditions = ['parent_id' => '0'];
        $categorys = app('EntityCommon')->getRowsByConditions('footer', $conditions);
        foreach ($categorys as $idx => $cate) {
            //sub data
            $subConditions = ['parent_id' => $cate->id];
            $subCate = app('EntityCommon')->getRowsByConditions('footer', $subConditions);
            $countSub = count($subCate);
            $subData = '';
            if ($countSub > 0) {
                foreach ($subCate as $sub) {
                    $subData .= '<dd><a href="'.$sub->link.'" title="'.$sub->name.'">'.$sub->name.'</a></dd>';
                }
            }

            if ($idx == 0 || $idx == 3 || $idx == 6 || $idx == 9 || $idx == 12) {
                $html .= '<div class="col-xs-6">';
            }

            $html .= '<div class="col-md-4"><dl><dt>'.$cate->name.'</dt>'.$subData.'</dl></div>';

            if ($idx == 2 || $idx == 5 || $idx == 8 || $idx == 11) {
                $html .= '</div>';
            }
        }
        if ($idx != 2 || $idx != 5 || $idx != 8 || $idx != 11) {
            $html .= '</div>';
        }
        $html .= '</div>';

        return $html;
    }

    public function generateRandomString($length = 5)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; ++$i) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        return $randomString;
    }

    public function tienPhongCHDV($d, $month, $year, $date)
    {
        $tmpData = [];
        $totalDichVu = $d->gia_thue;
        $preMonth = $month - 1;
        if($month == 1) {
            $preMonth = 12;
        }
        $tmpData['month'] = $month;
        $tmpData['year'] = $year;
        $tmpData['motel_room_id'] = $d->motel_room_id;
        $tmpData['name'] = 'Tiền dịch vụ tháng '.$preMonth.' và tiền phòng tháng '.$month;
        $tmpData['tien_phong'] = $d->gia_thue;

        $tmpData['apartment_id'] = $d->apartment_id;
        //fix data
        $tmpData['created_at'] = $date;
        $tmpData['updated_at'] = $date;
        $tmpData['status_tien_phong_id'] = 2;
        $typeBusiness = app('EntityCommon')->getDataById('type_business', $d->type_business_id);
        //check so dien
        // dd($typeBusiness);
        $tienDienBussiness = 0;
        if(!empty($typeBusiness->tien_dien)) {
            $tienDienBussiness = $typeBusiness->tien_dien;
        }
        $tmpData['tien_dien'] = 0;
        // echo $tmpData['tien_dien'] . '---';
        if(!empty($d->so_dien_cuoi) && !empty($tienDienBussiness)) {
            // echo $d->so_dien_cuoi.'-';
            // echo $d->so_dien_dau.'-';
            // echo $d->id.'<br>';
            $tmpData['tien_dien'] = ($d->so_dien_cuoi - $d->so_dien_dau) * $tienDienBussiness;
        }
        
        $totalDichVu += $tmpData['tien_dien'];
        $tmpData['tong_so_dien'] = intval($d->so_dien_cuoi) - intval($d->so_dien_dau);
        //check so nuoc
        $noteTienNuoc = '';
        // echo $typeBusiness->have_cong_to_nuoc;die;
        if (!empty($typeBusiness->have_cong_to_nuoc)) {
            $tmpData['tien_nuoc'] = ($d->so_nuoc_cuoi - $d->so_nuoc_dau) * $typeBusiness->tien_nuoc;
            $totalDichVu += $tmpData['tien_nuoc'];
            // echo $totalDichVu;die;
            $noteTienNuoc = 'Số nước đầu: '.$d->so_nuoc_dau.
                               ', Số nước cuối: '.$d->so_nuoc_cuoi.
                               ',<br/> Tổng số nước xử dụng là: '.($d->so_nuoc_cuoi - $d->so_nuoc_dau).' Số (Giá nước: '.number_format($typeBusiness->tien_nuoc).'/Số)<br/>';
        }
        //note
        $tmpData['note'] = $noteTienNuoc.
                           'Số điện đầu: '.$d->so_dien_dau.
                           ', Số điện cuối: '.$d->so_dien_cuoi.
                           ',<br/> Tổng số điện xử dụng là: '.$tmpData['tien_dien'].
                           ' Số (Giá điện: '. number_format($tienDienBussiness) .'/Số)<br/>';
        
        $tienDichVu = app('EntityCommon')->getRowsByConditions(TBL_LOAI_TIEN_PHONG, ['type_business_id' => $d->type_business_id]);

        foreach ($tienDichVu as $dv) {
            if ($dv->name == 'may_giat') {
                if ($d->is_may_giat == 1) {
                    $tmpData[$dv->name] = $dv->price;
                    $totalDichVu += $dv->price;
                } else {
                    $tmpData[$dv->name] = 0;
                }
            } else {
                $price = $dv->price;
                if (!empty($dv->tinh_theo_so_nguoi)) {
                    $price = $d->so_nguoi * $dv->price;
                }
                $totalDichVu += $price;
                $tmpData[$dv->name] = $price;
            }
        }

        //total
        $tmpData['total'] = $totalDichVu;
        // dd($tmpData);
        return $tmpData;
    }

    public function tienPhongKinhDoanh($d, $month, $year, $date, $h2o = null)
    {
        $tmpData = [];

        $tmpData['month'] = ($month);
        $tmpData['year'] = $year;
        $tmpData['motel_room_id'] = $d->motel_room_id;
        $tmpData['name'] = 'Tiền dịch vụ tháng '.($month - 1).' và tiền phòng tháng '.$month;
        $tmpData['tien_phong'] = $d->gia_thue;
        $tmpData['apartment_id'] = $d->apartment_id;
        $tmpData['created_at'] = $date;
        $tmpData['updated_at'] = $date;
        $tmpData['status_tien_phong_id'] = 2;

        $totalDichVu = $tmpData['tien_phong'];
        //tien dien
        $tmpData['tien_dien'] = ($d->so_dien_cuoi - $d->so_dien_dau) * 4000;
        $totalDichVu += $tmpData['tien_dien'];
        $tmpData['tong_so_dien'] = $d->so_dien_cuoi - $d->so_dien_dau;
        $note = 'Số điện đầu: '.$d->so_dien_dau.
                ',<br/> Số điện cuối: '.$d->so_dien_cuoi.
                ',<br/> <b>Tổng số điện xử dụng là</b>: '.($d->so_dien_cuoi - $d->so_dien_dau).' (Số)';
        //Tiền nước
        if (!empty($h2o)) {
            $soNuoc = $h2o->so_nuoc_cuoi - $h2o->so_nuoc_dau;
            $tmpData['tien_nuoc'] = $soNuoc * 25000;
            $totalDichVu += $tmpData['tien_nuoc'];
            // echo $tmpData['tien_nuoc'];
            // die;
            $note .= ',<br/> Số nước đầu: '.$h2o->so_nuoc_dau.
                     ',<br/> Số nước cuối: '.$h2o->so_nuoc_cuoi.
                     ',<br/> <b>Tổng số nước xử dụng là</b>: '.$soNuoc.' (Số)';
        }
        $tmpData['note'] = $note;

        //dich vu khac
        $tienDichVu = app('EntityCommon')->getRowsByConditions(TBL_LOAI_TIEN_PHONG, ['type_business_id' => CHO_THUE_SAN_KINH_DOANH]);
        foreach ($tienDichVu as $dv) {
            $price = $dv->price;
            if (!empty($dv->tinh_theo_so_nguoi)) {
                $price = $d->so_nguoi * $dv->price;
            }
            $totalDichVu += $price;
            $tmpData[$dv->name] = $price;
        }

        //total
        $tmpData['total'] = $totalDichVu;

        return $tmpData;
    }

    public function generateDongTien($total)
    {
        $result = '<table class="table-datatable table table-striped table table-bordered mv-lg fix-tbl-basic">';
        $result .= '<tr>';
        $result .= '<th> Tháng </th>';
        $apms = app('EntityCommon')->getRowsByConditions('apartment', [],  0);
        foreach($apms as $apm) {
            $result .= '<th>'.$apm->name.'</th>';
        }
        $result .= '<th>Tổng thu</th>';
        $result .= '</tr>';

        
        $currentMonth = date('m');
        $currentYear = date('Y');
        $x = 1;
        $this->getListKyThanhToanTienNha ($apms);
        while ($x <= 12) {
            ++$x;
            if ($currentMonth == 12) {
                $currentMonth = 1;
                $currentYear++;
            } else {
                ++$currentMonth;
            }
            $detailPlan = $this->getDetailPlanByMonth($currentMonth, $currentYear, $apms, $total);
            $result .= $detailPlan['html'];
            $total = $detailPlan['total'];
        }

        $result .= '</table>';
        // echo $result;
        // die();

        return $result;
    }
    private function getDetailPlanByMonth($month, $year, $apms, $total) {
        $month = str_pad($month, 2, 0, STR_PAD_LEFT);
        $html = '<tr>';
        $html .= '<td><b>'.$month.'/'.$year.'</b></td>';
        $ngayDongTien = $this->getListKyThanhToanTienNha($apms);
        // dd($ngayDongTien);
        $thuTotal = 0;
        $chiTotal = 0;
        foreach ($apms as $apm) {
            $explodecreateDate = explode('-' ,$apm->start_date);
            $currentDate = $year . '-' . $month . '-' . $explodecreateDate[2];
            // echo $currentDate;die;
            $strChi = '';
            $chi = 0;
            if(in_array($currentDate, $ngayDongTien[$apm->id])) {
                $chi = $apm->gia_thue * $apm->ky_thanh_toan;
                $strChi = '<p><em class="_red">Tiền nhà: '. number_format($chi).'</em></p>
                           <p><em style="font-size:11px">('. $currentDate.')</em></p>';
            }
            $thu = app('EntityCommon')->getTotalByCondition('hop_dong', 'gia_thue', ['apartment_id' => $apm->id]);
            
            $thuTotal = $thuTotal + $thu;
            $chiTotal = $chiTotal + $chi;
            
            $html .= "<td>
                            <p>TiềnPhòng: <b>".number_format($thu)."</b></p>
                            ".$strChi."
                        </td>";
        }
        $total = $total + $thuTotal - $chiTotal;
        $htmlChi = '';
        if(!empty($chiTotal)) {
            $htmlChi = '<p class="_red"><b>TổngChi: '. number_format($chiTotal).'</b></p>';
        }
        $html .= '<td>
                        <p><b>TổngThu:</b> '. number_format($thuTotal).'</p>
                        '.$htmlChi.'
                        <p><b>TổngCònLại:</b> '. number_format($total).'</p>
                    </td>';
   
        $html .= '</tr>';
        return ['total' => $total, 'html' => $html];
    }

    private function getListKyThanhToanTienNha ($apms) {
        $result = [];
        foreach ($apms as $apm) {
            $ngayDenHan = [$apm->start_date];
            $date=date_create($apm->start_date);
            $endDate = date_create($apm->end_date);
            while ($date <= $endDate) {
                date_modify($date, "+".$apm->ky_thanh_toan." months");
                $ngayDenHan[] = date_format($date, "Y-m-d");
            }
            $result[$apm->id] = $ngayDenHan;
        }
        return $result;
    }


}
