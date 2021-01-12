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
        // dd($d);
        $tmpData = [];
        $totalDichVu = $d->gia_thue;
        $preMonth = $month - 1;
        if ($month == 1) {
            $preMonth = 12;
        }
        $tmpData['month'] = $month;
        $tmpData['year'] = $year;
        $tmpData['motel_room_id'] = $d->motel_room_id;
        if($d->is_dv == 1) {
            $tmpData['name'] = 'Tiền điện tháng '.$preMonth.' và tiền phòng, dịch vụ tháng '.$month;
        } else {
            $tmpData['name'] = 'Tiền dịch vụ tháng '.$preMonth.' và tiền phòng tháng '.$month;
        }
        
        $tmpData['tien_phong'] = $d->gia_thue;

        $tmpData['apartment_id'] = $d->apartment_id;
        //fix data
        $tmpData['created_at'] = $date;
        $tmpData['updated_at'] = $date;
        $tmpData['staus_hd_id'] = 1; // 1: chua gửi hđ cho khách
        $tmpData['status_tien_phong_id'] = 2; // 2: chưa thanh toán
        $service = json_decode($d->service_price, true);

        // $typeBusiness = app('EntityCommon')->getDataById('type_business', $d->type_business_id);
        // check so dien
        // dd($typeBusiness);
        $tienDienBussiness = 0;
        if (!empty($service[TIEN_DIEN][PRICE])) {
            $tienDienBussiness = $service[TIEN_DIEN][PRICE];
        }
        $tmpData[TIEN_DIEN] = 0;
        $tmpData[TONG_SO_DIEN] = intval($d->so_dien_cuoi) - intval($d->so_dien_dau);
        // echo $tmpData['tien_dien'] . '---';
        if (!empty($d->so_dien_cuoi) && !empty($tienDienBussiness)) {
            $tmpData[TIEN_DIEN] = ($d->so_dien_cuoi - $d->so_dien_dau) * $tienDienBussiness;
            if (!empty($d->may_bom_dau) && !empty($d->may_bom_cuoi)) { 
                $tmpData[TIEN_DIEN] = $tmpData[TIEN_DIEN] - (($d->may_bom_cuoi - $d->may_bom_dau) * $tienDienBussiness);
                $tmpData[TONG_SO_DIEN] = $tmpData[TONG_SO_DIEN] - ($d->may_bom_cuoi - $d->may_bom_dau);
            }
        }
        $totalDichVu += $tmpData[TIEN_DIEN];

        
        //check so nuoc
        $noteTienNuoc = '';
        // echo $typeBusiness->have_cong_to_nuoc;die;
        // echo $service[TIEN_NUOC][THEO_CONG_TO];die;
        if (!empty($service[TIEN_NUOC]) && !empty($service[TIEN_NUOC][THEO_CONG_TO]) && $service[TIEN_NUOC][THEO_CONG_TO] == 1) {
            $tmpData[TIEN_NUOC] = ($d->so_nuoc_cuoi - $d->so_nuoc_dau) * $service[TIEN_NUOC][PRICE];
            $totalDichVu += $tmpData[TIEN_NUOC];
            // echo $totalDichVu;die;
            $noteTienNuoc = 'Số nước: '.$d->so_nuoc_dau.' - '.$d->so_nuoc_cuoi.' = '.($d->so_nuoc_cuoi - $d->so_nuoc_dau).
                               '<em> (Giá nước: '.number_format($service[TIEN_NUOC][PRICE]).'/Số)</em><br/>';
        }

        // $tienDichVu = app('EntityCommon')->getRowsByConditions(TBL_LOAI_TIEN_PHONG, ['type_business_id' => $d->type_business_id]);

        $noteDV = '<b>Các phí dv khác:</b> <br/>';
        foreach ($service as $key => $dv) {
            if($key == TIEN_DIEN) {
                continue;
            }
            if($key == TIEN_NUOC && !empty($dv[THEO_CONG_TO])) {
                continue;
            }

            if(empty($dv[PRICE])) {
                continue;
            }

            $loaiTienDV = app('EntityCommon')->findDataLatestByCondition('loai_tien_dv', ['name' => $key]);
            $price = $dv[PRICE];
            //note tmp
            $tmpNote = '&nbsp;&nbsp;&nbsp; - ' . $loaiTienDV->display_name . ':' . number_format($dv[PRICE]) . '/1Phòng <br/>';
            if (!empty($dv[THEO_SO_NGUOI])) {
                $price = $d->so_nguoi * $dv[PRICE];
                //note tmp
                $tmpNote = '&nbsp;&nbsp;&nbsp; - ' . $loaiTienDV->display_name . ':' . number_format($dv[PRICE]) . '/1Người <br/>';
            }
            $noteDV .= $tmpNote;
            $totalDichVu += $price;
            $tmpData[$key] = $price;
        }
        //note
        $soMayBom = '';
        if (!empty($d->may_bom_dau) && !empty($d->may_bom_cuoi)) { 
            $soMayBom = '<br/>Số điện máy bơm: '.$d->may_bom_cuoi. ' - '.$d->may_bom_dau. ' = ' . ($d->may_bom_cuoi - $d->may_bom_dau);
        }
        $tmpData['note'] = $noteTienNuoc.
                           'Số điện: '.$d->so_dien_cuoi. ' - '.$d->so_dien_dau. ' = '.($d->so_dien_cuoi - $d->so_dien_dau).
                           $soMayBom .
                           '<em> (Giá điện: '.number_format($tienDienBussiness).'/Số) </em><br/>' . 
                           $noteDV;

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
        $tmpData[TONG_SO_DIEN] = $d->so_dien_cuoi - $d->so_dien_dau;
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
        $result = '<table class="table table-striped">';
        $result .= '<tr>';
        $result .= '<th> Tháng </th>';
        $apms = app('EntityCommon')->getRowsByConditions('apartment', [], 0);
        foreach ($apms as $apm) {
            $result .= '<th>'.$apm->name.'</th>';
        }
        $result .= '<th>Tổng thu</th>';
        $result .= '</tr>';

        $currentMonth = date('m');
        $currentYear = date('Y');
        $x = 1;
        // $this->getListKyThanhToanTienNha ($apms);
        while ($x <= 10) {
            ++$x;
            if ($currentMonth == 12) {
                $currentMonth = 1;
                ++$currentYear;
            } else {
                ++$currentMonth;
            }
            $detailPlan = $this->getDetailPlanByMonth($currentMonth, $currentYear, $apms, $total);
            $result .= $detailPlan['html'];
            $total = $detailPlan['total'];
        }

        $result .= '</table>';

        return $result;
    }

    private function getDetailPlanByMonth($month, $year, $apms, $total)
    {
        $month = str_pad($month, 2, 0, STR_PAD_LEFT);
        $html = '<tr>';
        $html .= '<td><b>'.$month.'/'.$year.'</b></td>';
        $ngayDongTien = $this->getListKyThanhToanTienNha($apms);
        // dd($ngayDongTien);
        $thuTotal = 0;
        $chiTotal = 0;
        $tienNhaTotal = 0;
        foreach ($apms as $apm) {
            $explodecreateDate = explode('-', $apm->start_date);
            $currentDate = $year.'-'.$month.'-'.$explodecreateDate[2];
            // echo $currentDate;die;
            if (strtotime($currentDate) > strtotime($apm->end_date)) { 
                $html .= '<td></td>';
                continue;
            }
            $strChi = '';
            $chi = 0;
            if (in_array($currentDate, $ngayDongTien[$apm->id])) {
                $chi = $apm->gia_thue * $apm->ky_thanh_toan;
                $strChi = '<p><em class="_red">Tiền nhà: '.number_format($chi).'</em></p>
                           <p><em style="font-size:11px">('.$currentDate.')</em></p>';
            }
            $thu = app('EntityCommon')->getTotalByCondition('hop_dong', 'gia_thue', ['apartment_id' => $apm->id]);

            $thuTotal = $thuTotal + $thu;
            $chiTotal = $chiTotal + $chi;
            $tienNhaTotal = $tienNhaTotal + $apm->gia_thue;

            $html .= '<td>
                            <p>TiềnPhòng: <b>'.number_format($thu).'</b></p>
                            <p>'.$strChi.'</p>
                            <p>TiềnNhà: '.number_format($apm->gia_thue).'</p>
                            <p><b>Lợi Nhuận:</b> '.number_format(($thu - $apm->gia_thue)).'</p>
                        </td>';
        }
        $total = $total + $thuTotal - $chiTotal;
        $htmlChi = '';
        if (!empty($chiTotal)) {
            $htmlChi = '<p class="_red"><b>TổngChi: '.number_format($chiTotal).'</b></p>';
        }
        $html .= '<td>
                        <p><b>TổngThu:</b> '.number_format($thuTotal).'</p>
                        <p><b>Tổng Tiền Nhà Đã Đóng:</b> '.number_format($tienNhaTotal).'</p>
                        <p><b>Lợi Nhuận:</b> '.number_format(($thuTotal - $tienNhaTotal)).'</p>
                        <p><hr/></p>
                        <p>'.$htmlChi.'</p>
                        <p><b>TổngCònLại:</b> '.number_format($total).'</p>
                    </td>';

        $html .= '</tr>';

        return ['total' => $total, 'html' => $html];
    }

    public function generateHistoryDongTien()
    {
        $result = '<table class="table table-striped">';
        $result .= '<tr>';
        $result .= '<th> Tháng </th>';
        $apms = app('EntityCommon')->getRowsByConditions('apartment', [], 0);
        foreach ($apms as $apm) {
            $result .= '<th>'.$apm->name.'</th>';
        }
        $result .= '<th>Tổng thu</th>';
        $result .= '</tr>';

        $currentMonth = date('m');
        $currentYear = date('Y');
        $month = 0;
        while ($month < intval($currentMonth)) {
            ++$month;
            $detailPlan = $this->getDetailHistoryByMonth($month, $currentYear, $apms);
            $result .= $detailPlan['html'];
            $total = $detailPlan['total'];
        }

        $result .= '</table>';

        return $result;
    }

    private function getDetailHistoryByMonth($month, $year, $apms)
    {
        $month = str_pad($month, 2, 0, STR_PAD_LEFT);
        $html = '<tr>';
        $html .= '<td><b>'.$month.'/'.$year.'</b></td>';
        $ngayDongTien = $this->getListKyThanhToanTienNha($apms);
        // dd($ngayDongTien);
        $startMonth = $year.'-'.$month.'-01';
        $endMonth = $year.'-'.$month.'-30';
        $thuTotal = 0;
        $chiTotal = 0;
        $tienNhaTotal = 0;
        foreach ($apms as $apm) {
            if (strtotime($startMonth) > strtotime($apm->end_date)) { 
                $html .= '<td></td>';
                continue;
            }
            $explodecreateDate = explode('-', $apm->start_date);
            $currentDate = $year.'-'.$month.'-'.$explodecreateDate[2];
            // echo $currentDate;die;
            $strKyThanhToan = '';
            $kyThanhToan = 0;
            if (in_array($currentDate, $ngayDongTien[$apm->id])) {
                $kyThanhToan = $apm->gia_thue * $apm->ky_thanh_toan;
                $strKyThanhToan = '<p><em class="_red">Tiền nhà: '.number_format($kyThanhToan).'</em></p>
                           <p><em style="font-size:11px">('.$currentDate.')</em></p>';
            }

            //tổng thu
            $conditions = [
                'apartment_id' => $apm->id,
                'year' => $year,
                'month' => $month,
            ];
            $thu = app('EntityCommon')->getTotalByCondition('tien_phong', 'total', $conditions);

            //thu tiền cọc
            $tienCoc = app('EntityCommon')->getTotalByCondition('tien_phong', 'tien_coc', $conditions);

            //trả tiền cọc
            $traCoc = app('EntityCommon')->getTotalByCondition('tien_phong', 'tra_coc', $conditions);

            //giảm giá
            $giamGia = app('EntityCommon')->getTotalByCondition('tien_phong', 'giam_gia', $conditions);

            //Tiền dịch vụ
            $conditionsChiTieu = [
                'phan_loai_chi_tieu_id' => 1
            ];
            $betweenChiTieu = [
                'ngay_chi' => [$startMonth, $endMonth],
            ];
            $tienDV = app('EntityCommon')->getTotalByCondition('tien_chi_tieu', 'money', $conditionsChiTieu, $betweenChiTieu);

            $conditionsChi = ['apartment_id' => $apm->id];
            $between = [
                'ngay_chi' => [$startMonth, $endMonth],
            ];
            $chi = app('EntityCommon')->getTotalByCondition('tien_chi_tieu', 'money', $conditionsChi, $between);

            $conditionsChi_dichvu = ['apartment_id' => $apm->id, 'phan_loai_chi_tieu_id' => 1]; //1: id loại tiền dịch vụ
            $chi_dichvu = app('EntityCommon')->getTotalByCondition('tien_chi_tieu', 'money', $conditionsChi_dichvu, $between);

            $giaThueNha = 0;
            if ((strtotime($apm->start_date) >= strtotime($startMonth) && strtotime($apm->start_date) <= strtotime($endMonth)) ||
            !(strtotime($apm->start_date) >= strtotime($endMonth))) {
                $giaThueNha = $apm->gia_thue;
            }

            $thuTotal = $thuTotal + $thu;
            $chiTotal = $chiTotal + $chi;
            $tienNhaTotal = $tienNhaTotal + $giaThueNha;
            $strTienCoc = '';
            if (!empty($tienCoc)) {
                $strtienCoc = '<p>TiềnCọc: <b>'.number_format($tienCoc).'</b></p>';
            }

            $strTraCoc = '';
            if (!empty($traCoc)) {
                $strTraCoc = '<p>TrảCọc: <b>'.number_format($traCoc).'</b></p>';
            }

            $strGiamGia = '';
            if (!empty($tienCoc)) {
                $strGiamGia = '<p>GiảmGiá: <b>'.number_format($giamGia).'</b></p>';
            }
            $html .= '<td>
                            <p>TiềnPhòng: <b>'.number_format($thu).'</b></p>
                            '.$strTienCoc.'
                            '.$strTraCoc.'
                            '.$strGiamGia.'
                            <p>TiềnNhà: '.number_format($giaThueNha).'</p>
                            <p><b>Tiền dịch vụ:</b> '.number_format($chi_dichvu).'</p>
                            <p><b>Chi:</b> '.number_format($chi).'</p>
                            <p><b>LợiNhuận:</b> '.number_format(($thu - $chi_dichvu - $giaThueNha)).'</p>
                            <p>'.$strKyThanhToan.'</p>
                        </td>';
        }
        $total = $thuTotal - $chiTotal;
        $htmlChi = '';
        if (!empty($chiTotal)) {
            $htmlChi = '<p class="_red"><b>TổngChi: '.number_format($chiTotal).'</b></p>';
        }
        $html .= '<td>
                        <p><b>TổngThu:</b> '.number_format($thuTotal).'</p>
                        <p><b>Tổng Tiền Nhà Đã Đóng:</b> '.number_format($tienNhaTotal).'</p>
                        <p><b>Tổng Tiền DV:</b> '.number_format($tienDV).'</p>
                        <p><b>Lợi Nhuận:</b> '.number_format(($thuTotal - $tienNhaTotal - $tienDV)).'</p>
                        <p><hr/></p>
                        <p>'.$htmlChi.'</p>
                    </td>';

        $html .= '</tr>';

        return ['total' => $total, 'html' => $html];
    }

    private function getListKyThanhToanTienNha($apms)
    {
        $result = [];
        foreach ($apms as $apm) {
            $ngayDenHan = [$apm->start_date];
            $date = date_create($apm->start_date);
            $endDate = date_create($apm->end_date);
            while ($date <= $endDate) {
                date_modify($date, '+'.$apm->ky_thanh_toan.' months');
                $ngayDenHan[] = date_format($date, 'Y-m-d');
            }
            $result[$apm->id] = $ngayDenHan;
        }

        return $result;
    }

    public function getHtmlPermissions($columnName, $columnValue)
    {
        $perData = [];
        if(!empty($columnValue)) {
            $perData = json_decode($columnValue);
        }
        $result = '';
        $tblParent = app('EntityCommon')->getRowsByConditions('tables', ['parent_id' => 0]);
        foreach($tblParent as $p) {
            $checked = '';
            if(in_array($p->id, $perData)) {
                $checked = 'checked="checked"';
            }
            $result .= '<div class="col-md-6">
                            <div class="mda-list-item-text">
                                <label class="_point"><input '.$checked.' name="'.$columnName.'[]" type="checkbox" value="'.$p->id.'"> '.$p->display_name.'</label>
                            </div>';
            
            $tblSub = app('EntityCommon')->getRowsByConditions('tables', ['parent_id' => $p->id]);
            if (!empty($tblSub)) {
                $result .= '</ul>';
                foreach ($tblSub as $s) {
                    $checked = '';
                    if(in_array($s->id, $perData)) {
                        $checked = 'checked="checked"';
                    }
                    $result .= '<li><label class="_point"><input '.$checked.' name="'.$columnName.'[]" type="checkbox" value="'.$s->id.'"> '. $s->display_name. '</label></li>';
                }
                $result .= '</ul>';
            }

            $result .= '</div>';
        }
        return $result;
    }
}
