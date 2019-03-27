<section id="promo-banners" class="clearfix">
    <div class="container">
        <div class="promo-slider">
            <div class="cate-on-slide">
                <div class="cycle-slideshow"
                     data-cycle-slides="> div"
                     data-cycle-timeout="5000"
                     data-cycle-prev=".cate-on-slide .cycle-prev"
                     data-cycle-next=".cate-on-slide .cycle-next"
                     data-cycle-fx="scrollHorz"
                     data-cycle-loader="wait"
                     data-cycle-pager=".cycle-pager"
                     data-cycle-swipe="true">
                      <?php 
                        $slide = app('ClassBlock')->getBlockByType('slide');
                     ?>
                    
                    <?php $__currentLoopData = $slide; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $s): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div>
                        <a href="<?php echo e($s->link); ?>" data-id="5184">
                            <img class="hidden-sm hidden-xs" src="<?php echo e($s->image); ?>">
                            <img class="img-responsive visible-sm visible-xs" src="<?php echo e($s->image); ?>">
                        </a>
                    </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
                <a href="#" class="cycle-prev"><span class="icon-arr-left"></span></a>
                <a href="#" class="cycle-next"><span class="icon-arr-right"></span></a>
                <div class="cycle-pager"></div>
            </div>
        </div>
    </div>
</section>