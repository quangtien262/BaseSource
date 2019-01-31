<?php

namespace App\Services\Utils;

class ClassHelper {

    public function getNewsByCategory($cid) {
        $result = '';
        $conditionsNews = [
            \TblName::NEWS_DATA . '.language' => 'vi',
        ];
        $order = [\TblName::NEWS . '.id', 'desc'];

        $subCategoryID = app('ClassCategory')->getSubCategoryID($cid);
        if (!empty($subCategoryID)) {
            $whereInConditionsNews = ['category_id' => $subCategoryID];
        } else {
            $whereInConditionsNews = [];
        }
        $listNews = app('ClassTbl')->getDatasTblByConditions(\TblName::NEWS, $conditionsNews, 3, $order, $whereInConditionsNews);
        
        $idx = 0;
        foreach($listNews as $news) {
            if($idx == 0) {
                $link = route('detailNews',[$news->sluggable, $news->tid]);
                $date = date('d/m/Y', strtotime($news->updated_at));
                $result .= '<div class="img-marketing">
                                <a href="'.$link.'">
                                    <img class="lazyload-category-big" data-src="'.$news->image.'" />
                                </a>
                            </div>
                            <div class="title-marketing">
                                <a href="'.$link.'">
                                    <div class="title-marketing-except">
                                        <div class="title-marketing-except-f">
                                            <b>'.$news->title.'</b>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="time-category">
                                <span class="glyphicon glyphicon-calendar"></span>
                                <b>'.$date.'</b>
                            </div>
                            <div class="description-marketing">
                                <a href="2017/12/19/ra-mat-biet-thu-mau-vinhomes-imperia-tai-hai-phong/index.html">
                                    <div class="description-marketing-excerpt">
                                        '.$news->summary.'
                                    </div>
                                </a>
                            </div>';
            }
            
            if($idx == 2) {
                $result .= '<div class="wrap-child-marketing">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-6 wrap-col-child">
                                        <div class="img-child-marketing">
                                            <a href="'.$link.'">
                                                <img class="lazyload-category-noral content-image-nonal" data-src="'.$news->image.'" />
                                            </a>
                                        </div>
                                        <div class="title-child-marketing">
                                            <a href="'.$link.'">
                                                <div class="title-marketing-except">
                                                    <b>'.$news->title.'</b>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="time-category">
                                            <span class="glyphicon glyphicon-calendar"></span><b>19/12/2017</b>
                                        </div>
                                        <div class="description-child-marketing">
                                            <a href="'.$link.'">
                                                <div class="description-child-except"> '.$news->summary.'</div>
                                            </a>
                                        </div>
                                    </div>';
            }
            
            if($idx == 3) {
                $result .= '<div class="col-md-6 col-sm-6 col-xs-6 wrap-col-child">
                                <div class="img-child-marketing">
                                    <a href="'.$link.'">
                                        <img class="lazyload-category-noral content-image-nonal" data-src="'.$news->image.'" />
                                    </a>
                                </div>
                                <div class="title-child-marketing">
                                    <a href="'.$link.'">
                                        <div class="title-marketing-except">
                                            <b>'.$news->title.'</b>
                                        </div>
                                    </a>
                                </div>
                                <div class="time-category">
                                    <span class="glyphicon glyphicon-calendar"></span><b>19/12/2017</b>
                                </div>
                                <div class="description-child-marketing">
                                    <a href="'.$link.'">
                                        <div class="description-child-except"> '.$news->summary.'</div>
                                    </a>
                                </div>
                            </div>
                        </div>
					</div>';
            }
            $idx++;
        }
        
        if($idx == 3) {
            $result .= '</div></div>';
        }

        return $result;
    }

}
