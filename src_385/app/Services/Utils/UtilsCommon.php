<?php

namespace App\Services\Utils;

class UtilsCommon
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

    public function uploadBase64($directoryUpload, $base64)
    {
        $pathUpload = '';
        if (!file_exists($directoryUpload)) {
            mkdir($directoryUpload, 0777, true);
        }
        $fileType = mime_content_type($base64);
        if (substr($fileType, 0, 5) == 'image') {
            $fileName = self::generateRandomString().'-'.time().'.'.str_replace('image/', '', $fileType);
            $pathUpload = $directoryUpload.'/'.$fileName;
            self::base64ToImage($base64, $pathUpload);
        }

        return $pathUpload;
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

    public function createModel($tableName, $modelName)
    {
        $myfile = fopen('../app/Model/'.$modelName.'.php', 'w') or die('Unable to open file!');
        $txt = '<?php
                namespace App\Model;
                use Illuminate\Database\Eloquent\Model;
                class '.$modelName.' extends Model {
                    protected $table = "'.$tableName.'";
                }   
                ';
        fwrite($myfile, $txt);
        fclose($myfile);
    }

    public function checkExistModel($modelName = '')
    {
        if (!empty($modelName)) {
            $fileName = '../app/Model/'.$modelName.'.php';
            if (file_exists($fileName)) {
                return true;
            }
        }

        return false;
    }

    public function xEditTable($tableId, $col, $data)
    {
        $htmlResult = '';
        $type = !empty($col->type_edit) ? $col->type_edit : '';
        $link = route('editCurrentColumn', [$col->name, $tableId, $data['id']]);
        $prepend = '';
        $source = '';
        $dataType = $type;
        if ($type == 'select' || $type == 'select2') {
            $dataType = 'select';
            $prepend = $col->display_name;
            $source = app('ClassTables')->getObjectJavascriptFromTable($col->select_table_id, $col->conditions);
        }
        switch ($type) {
            case 'select':
                $value = app('EntityCommon')->getColNameById($col->select_table_id, $data[$col->name]);
                break;
            case 'select2':
                $value = app('EntityCommon')->getColNameById($col->select_table_id, $data[$col->name]);
                break;

            case 'date':
                $value = !empty($data[$col->name]) ? date('d/m/Y', strtotime($data[$col->name])) : '';
                break;

            default:
                // default is text
                $value = $data[$col->name];
                break;
        }
        $htmlResult = '
            <a id="'.$col->name.$data['id'].'"
                data-pk="1" 
                class="editable editable-'.$dataType.'"
                data-url="'.$link.'"
                data-type="'.$dataType.'" 
                data-prepend="'.$prepend.'"
                data-source="'.$source.'"
                data-title="'.$col->name.'">'.
            $value.
            '</a>';

        return $htmlResult;
    }

    public function getHtmlComment($tableCommentId, $colName, $dataId)
    {
        $htmlResult = '';
        $columnNamecomment = 'content';
        $userAuth = \Auth::user();
        $tableComment = app('ClassTables')->getTable($tableCommentId);
        $tableColumn = app('ClassTables')->getCurrentColumnByTableIdAndName($tableCommentId, $columnNamecomment);
        $commentData = app('EntityCommon')->getRowsByConditions($tableComment->name, [$colName => $dataId], 0, ['id', 'desc']);
        // var_dump($tableColumn);
        // echo 'xxxxxxxxxxx<br>';
        $dataDecode = json_decode(json_encode($commentData), true);

        $link = route('formRow', [$tableCommentId, 0]);
        $param = '&user_id='.$userAuth->id.'&'.$colName.'='.$dataId;
        $addComment = '
            <p class="add-comment">
                <a onclick="loadDataPopup(\''.$link.'\', \''.$param.'\')" data-toggle="modal" data-target=".bs-modal-lg">'.
            'ThêmGhiChú'.
            '</a>
            </p>';
        if (empty($commentData)) {
            return $addComment;
        }

        $user = app('EntityCommon')->getDataById(TBL_USERS, 0);
        foreach ($dataDecode as $comment) {
            $user = app('EntityCommon')->getDataById(TBL_USERS, $comment['user_id']);
            if (!empty($user)) {
                // echo $tableCommentId ;
                // echo  $tableColumn ;
                // echo 'commmm';
                // print_r($comment);
                $htmlResult .= '
                <p class="list-comment">
                    <b>'.(!empty($user) ? $user->fullname : '').': </b>'.
                    self::xEditTable($tableCommentId, $tableColumn, $comment).
                '</p>';
            }
        }
        $htmlResult .= $addComment;

        return $htmlResult;
    }

    public function getHtmlImageById($tableId, $dataId)
    {
        $htmlResult = "<div class='main-img-in-list'><div class='item-img-in-list'>";
        $folder = "imgs/{$tableId}/$dataId/image";
        if (file_exists($folder)) {
            $dir = scandir($folder);
            // print_r($dir);
            foreach ($dir as $index => $fileName) {
                if ($index == 0 || $index == 1) {
                    continue;
                }
                $filePath = "/{$folder}/{$fileName}";
                $htmlResult .=
                    '<a href="'.$filePath.'" data-gallery="" title="Unsplash images" class="card-item">
                        <img src="'.$filePath.'"/>
                    </a>';
            }
            // echo $htmlResult;
        }
        $htmlResult .= '</div></div>';

        return $htmlResult;
    }

    public function emptyFolder($folder)
    {
        $files = glob($folder); // get all file names
        foreach ($files as $file) { // iterate files
            if (is_file($file)) {
                unlink($file);
            } // delete file
        }
    }

    public function uploadFiles($path, $file)
    {
        if (!empty($file)) {
            $file->move($path, $file->getClientOriginalName());
        }
    }

    public function showColumnInput($col, $checkColumnInList = true, $th = true)
    {
        $result = '';
        if ($col->table_link) {
            if (!empty($col->table_link)) {
                $result .= '<th class="main_th">'.
                app('EntityCommon')->getHtmlTitleTblLink($col->table_link, 'addNews').
                '</th>';

                return $result;
            }
        }
        if ($th) {
            $result .= '<th class="'.$col->class.'">';
        }
        if ($checkColumnInList && !empty($col->add_column_in_list)) {
            $result .= '<ul class="sub-col">';
            foreach (json_decode($col->add_column_in_list, true) as $k => $v) {
                // $currenColumn = app('ClassTables')->getCurrentColumnByTableIdAndName($col->table_id, $k);
                // $result .= '<li>';
                // $result .= self::showColumnInput($currenColumn, false, false);
                // $result .= '</li>';
            }
            $result .= '</ul>';

            return $result;
        }

        if ($col->type_edit == 'date') {
            $result .= '<input class="datepicker01" autocomplete="off" type="text" name="'.$col->name.'" placeholder="'.$col->display_name.'"/>';
        } elseif ($col->type_edit == 'select') {
            $result .= app('ClassTables')->getHtmlSelectForTable($col->name, $col->select_table_id, '', false, $col->conditions);
        } elseif ($col->type_edit == 'images_no_db') {
            $result .= '<div class="file-field">
                            <div class="btn btn-primary btn-sm float-left">
                                <span>Chọn file</span>
                                <input type="file" multiple name="'.$col->name.'[]" />
                            </div>
                        </div>';
        } else {
            $result .= '<input class="" type="text" name="'.$col->name.'" placeholder="'.$col->display_name.'"/>';
        }

        if ($th) {
            $result .= '</th>';
        }

        return $result;
    }

    public function getHeaderOfExcel($header, $columns)
    {
        foreach ($columns as $col) {
            if ($col->edit == 1) {
                $header[] = $col->display_name;
            }
            //sub
            if (!empty($col->config_add_sub_table)) {
                $subTbl = json_decode($col->config_add_sub_table, true);
                $subCol = app('ClassTables')->getColumnByTableId($subTbl['table_id']);
                $header = self::getHeaderOfExcel($header, $subCol);
            }
        }

        return $header;
    }

    public function getDataOfExcel($data, $columns)
    {
        foreach ($columns as $col) {
            if ($col->edit == 1) {
                $data[] = $col->display_name;
            }
            //sub
            if (!empty($col->config_add_sub_table)) {
                $subTbl = json_decode($col->config_add_sub_table, true);
                $subCol = app('ClassTables')->getColumnByTableId($subTbl['table_id']);
                $data = self::getHeaderOfExcel($data, $subCol);
            }
        }

        return $data;
    }

    public function export2Excel($table, $columns, $rowsQuery)
    {
        $rows = json_decode(json_encode($rowsQuery), true);
        $sheetData = [];
        //add header 2 data
        $header = ['STT'];
        $header = app('UtilsCommon')->getHeaderOfExcel($header, $columns);

        $sheetData[] = $header;
        //add all row 2 data
        foreach ($rows as $index => $row) {
            $item = [];
            foreach ($columns as $col) {
                if (!empty($col->edit)) {
                    if ($col->type_edit == 'select' && !empty($col->select_table_id)) {
                        $tbl = app('ClassTables')->getTable($col->select_table_id);
                        $r = app('EntityCommon')->getDataById($tbl->name, $row[$col->name]);
                        if (!empty($r)) {
                            $item[] = $r->name;
                        } else {
                            $item[] = '';
                        }
                    } else {
                        $item[] = $row[$col->name];
                    }
                }
            }
            $sheetData[] = $item;
        }
        \Excel::create($table->display_name, function ($excel) use ($sheetData) {
            $excel->sheet('data', function ($sheet) use ($sheetData) {
                // Won't auto generate heading columns
                $sheet->fromArray($sheetData, null, 'A1', false, false);

                //config header
                $sheet->row(1, function ($row) {
                    // call cell manipulation methods
                    $row->setBackground('#247cba');
                    $row->setFontColor('#ffffff');
                    $row->setFontWeight('bold');
                });
                $sheet->setAutoSize(true);
            });
        })->export('xls');
    }

    public function inputFastEdit($col, $value, $tableId, $dataId)
    {
        $html = '<div class="item-fast-edit">';
        if (in_array($col->type_edit, ['text', 'number'])) {
            $html .= '<input class="_hidden input-fast-edit" 
                        element-update="#'.$col->name.$dataId.'"
                        onchange="updateInput(this)" 
                        type="'.$col->type_edit.'" 
                        name="'.$col->name.'" 
                        value="'.$value.'" 
                        table-id="'.$tableId.'" 
                        data-id="'.$dataId.'" />';
        } elseif (in_array($col->type_edit, ['textarea'])) {
            $html .= '<textarea class="_hidden input-fast-edit"
                        element-update="#'.$col->name.$dataId.'"
                        onchange="updateInput(this)" 
                        name="'.$col->name.'" 
                        value="'.$value.'" 
                        table-id="'.$tableId.'" 
                        data-id="'.$dataId.'">'.$value.'</textarea>';
        } elseif (in_array($col->type_edit, ['select', 'select2'])) {
            //todo: add class update
            $html .= app('ClassTables')->getHtmlSelectTableFastEdit($col->name, $col->select_table_id, $value, $dataId, $tableId);
        } elseif (in_array($col->type_edit, ['date'])) {
            $html .= '<input class="_hidden input-fast-edit form-control datepicker01"
                        autocomplete="false"
                        onchange="updateInput(this)" 
                        element-update="#'.$col->name.$dataId.'"
                        name="'.$col->name.'"
                        value="'.($value == '0000-00-00' ? '' : $value).'" 
                        table-id="'.$tableId.'" 
                        data-id="'.$dataId.'"
                        type="text"/>';
        }
        $html .= '</div>';

        return $html;
    }

    public function exportHangVe2Excel($request)
    {
        $rows = json_decode(json_encode($rowsQuery), true);
        $sheetData = [];
        //add header 2 data
        $header = ['STT'];
        $header = app('UtilsCommon')->getHeaderOfExcel($header, $columns);

        $sheetData[] = $header;
        //add all row 2 data
        foreach ($rows as $index => $row) {
            $item = [];
            foreach ($columns as $col) {
                if (!empty($col->edit)) {
                    if ($col->type_edit == 'select' && !empty($col->select_table_id)) {
                        $tbl = app('ClassTables')->getTable($col->select_table_id);
                        $r = app('EntityCommon')->getDataById($tbl->name, $row[$col->name]);
                        if (!empty($r)) {
                            $item[] = $r->name;
                        } else {
                            $item[] = '';
                        }
                    } else {
                        $item[] = $row[$col->name];
                    }
                }
            }
            $sheetData[] = $item;
        }
        \Excel::create($table->display_name, function ($excel) use ($sheetData) {
            $excel->sheet('data', function ($sheet) use ($sheetData) {
                // Won't auto generate heading columns
                $sheet->fromArray($sheetData, null, 'A1', false, false);

                //config header
                $sheet->row(1, function ($row) {
                    // call cell manipulation methods
                    $row->setBackground('#247cba');
                    $row->setFontColor('#ffffff');
                    $row->setFontWeight('bold');
                });
                $sheet->setAutoSize(true);
            });
        })->export('xls');
    }
}
