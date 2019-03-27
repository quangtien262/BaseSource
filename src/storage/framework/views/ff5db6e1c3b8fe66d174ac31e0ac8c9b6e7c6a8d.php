<?php
$menuJson = file_get_contents(JSON_MENU_FILE);
$menuArr = json_decode($menuJson, true);
?>
<ul>
    <li>
        <a href="<?php echo e(url('admin')); ?>" class="ripple">
            <span class="nav-icon">
                <img src="" data-svg-replace="<?php echo e(url('backend/img/icons/aperture.svg')); ?>" alt="MenuItem" class="hidden">
            </span>
            <span>Admin home page</span>
        </a>
    </li>
    <?php $__currentLoopData = $menuArr['Menu']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $menu): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <li>
        <a href="<?php echo e(!empty($menu['routeName']) ?  url(route($menu['routeName'])):'#'); ?><?php echo e(!empty($menu['param'])?$menu['param']:''); ?>" class="ripple">
            <?php if(count($menu['subMenu']) >0 ): ?>
            <span class="pull-right nav-caret">
                <em class="ion-ios-arrow-right"></em>
            </span>
            <?php endif; ?>
            <span class="pull-right nav-label"></span>
            <span class="nav-icon">
                <img src="" data-svg-replace="<?php echo e(url('backend/img/icons/navicon.svg')); ?>" alt="MenuItem" class="hidden">
            </span>
            <span><?php echo e($menu['name']); ?></span>
        </a>
        <?php if(count($menu['subMenu']) >0 ): ?>
        <ul class="sidebar-subnav">
            <?php $__currentLoopData = $menu['subMenu']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $sub): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <li>
                <a href="<?php echo e(!empty($sub['routeName']) ?  url(route($sub['routeName'])):'#'); ?><?php echo e(!empty($sub['param'])?$sub['param']:''); ?>" 
				   class="ripple">
                    <span class="pull-right nav-label"></span>
                    <span><?php echo e($sub['name']); ?></span>
                </a>
            </li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
        <?php endif; ?>
    </li>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</ul>
