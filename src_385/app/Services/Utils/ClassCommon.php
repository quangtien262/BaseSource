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
        return strtolower($string . $ext);
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
        $file = fopen($output_file, "wb");

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
            //
            if($idx == 0 || $idx == 3 || $idx ==6 || $idx ==9  || $idx ==12) {
                $html .= '<div class="col-xs-6">';
            }

            $html .= '<div class="col-md-4"><dl><dt>'.$cate->name.'</dt>'.$subData.'</dl></div>';

            if($idx == 2 || $idx == 5  || $idx == 8 || $idx == 11) {
                $html .= '</div>';
            }
        }
        if($idx != 2 || $idx != 5  || $idx != 8 || $idx != 11) {
            $html .= '</div>';
        }
        $html .= '</div>';

        return $html;
    }

    function generateRandomString($length = 5) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    function tienPhongCHDV($d, $month, $year, $date) { 
        $tmpData = [];
        $totalDichVu = $d->gia_thue;
        $tmpData['month'] = $month;
        $tmpData['year'] = $year;
        $tmpData['motel_room_id'] = $d->motel_room_id;
        $tmpData['name'] = 'Tiền dịch vụ tháng '.$month.' và tiền phòng tháng '. ($month - 1);
        $tmpData['tien_phong'] = $d->gia_thue;

        $tmpData['apartment_id'] = $d->apartment_id;
        //tien dien
        $tmpData['tien_dien'] = ($d->so_cuoi - $d->so_dau) * 4000;
        $totalDichVu += $tmpData['tien_dien'];
        $tmpData['tong_so_dien'] = $d->so_cuoi - $d->so_dau;
        $tmpData['note'] = 'Số điện đầu: '.$d->so_dau.',<br/> Số điện cuối: '.$d->so_cuoi.',<br/> Tổng số điện xử dụng là: '.($d->so_cuoi - $d->so_dau).' Số';

        //fix data
        $tmpData['created_at'] = $date;
        $tmpData['updated_at'] = $date;
        $tmpData['status_tien_phong_id'] = 2;

        //dich vu khac
        $tienDichVu = app('EntityCommon')->getRowsByConditions(TBL_LOAI_TIEN_PHONG, ['type_business_id' => CHO_THUE_CHDV]);
        
        foreach ($tienDichVu as $dv) {
            if ($dv->name == 'may_giat') {
                if($d->is_may_giat == 1) {
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
        return $tmpData;
    }

    function tienPhongKinhDoanh($d, $month, $year, $date, $h2o = null) { 
        $tmpData = [];

        $tmpData['month'] = ($month);
        $tmpData['year'] = $year;
        $tmpData['motel_room_id'] = $d->motel_room_id;
        $tmpData['name'] = 'Tiền dịch vụ tháng '.$month.' và tiền phòng tháng '. ($month - 1);
        $tmpData['tien_phong'] = $d->gia_thue;
        $tmpData['apartment_id'] = $d->apartment_id;
        $tmpData['created_at'] = $date;
        $tmpData['updated_at'] = $date;
        $tmpData['status_tien_phong_id'] = 2;
        
        $totalDichVu = $tmpData['tien_phong'];
        //tien dien
        $tmpData['tien_dien'] = ($d->so_cuoi - $d->so_dau) * 4000;
        $totalDichVu += $tmpData['tien_dien'];
        $tmpData['tong_so_dien'] = $d->so_cuoi - $d->so_dau;
        $note = 'Số điện đầu: '.$d->so_dau.
                ',<br/> Số điện cuối: '.$d->so_cuoi.
                ',<br/> <b>Tổng số điện xử dụng là</b>: '.($d->so_cuoi - $d->so_dau).' (Số)';
        //Tiền nước
        if(!empty($h2o)) {
            $soNuoc = $h2o->so_nuoc_cuoi - $h2o->so_nuoc_dau;
            $tmpData['tien_nuoc'] = $soNuoc * 25000;
            $totalDichVu += $tmpData['tien_nuoc'];
            $note .= ',<br/> Số nước đầu: '.$h2o->so_nuoc_dau.
                     ',<br/> Số nước cuối: '.$h2o->so_nuoc_cuoi.
                     ',<br/> <b>Tổng số nước xử dụng là</b>: ' . $soNuoc . ' (Số)';
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
}
