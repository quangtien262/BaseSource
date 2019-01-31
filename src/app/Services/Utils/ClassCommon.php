<?php

namespace App\Services\Utils;

class ClassCommon {

    public function formatText($string, $ext = '') {
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
    
    public static function _utf8ToAscii($str) {
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
    
    public function mapIdAndNameTbl($arr,$id, $name) {
        $result = [];
        foreach($arr as $val) {
            $result[$val->$id] = $val->$name;
        }
        return $result;
    }
	
	 public static function dirToArray($dir) {

        $result = [];
        
        if (file_exists($dir)) 
            $cdir = scandir($dir);
        if (!empty($cdir)) {
            foreach ($cdir as $key => $value) {
                if (!in_array($value, array(".", ".."))) {
                    $result[] = $dir . '/' . $value;
                }
            }
        }
        return $result;
    }
    
    public function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
