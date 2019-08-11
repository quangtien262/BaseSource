<?php

namespace App\Services\Entity;

use App\Model\Bds;

class ClassBDS
{
    public function getCategoryByConditions($conditions)
    {
        $categorys = Category::select([
            'category.id as cateId',
            'category.name as cateName',
            '__route.route_name as routeName',
            '__route.id as routeId',
        ])
            ->leftJoin('route', '__route.id', 'category.route_id')
            ->orderBy('category.sort_order', 'asc');
        foreach ($conditions as $key => $val) {
            $categorys = $categorys->where($key, $val);
        }
        $categorys = $categorys->get();
        return $categorys;
    }

}
