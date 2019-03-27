<div class="footer-top">
    <div class="container">
        <div class="row">
            <div class="visible-xs visible-sm">
                <div class="hotline">
                    <span class="hotline__text">HOTLINE&nbsp;</span>
                    <span class="hotline__number"><?php echo e($config->phone); ?></span>
                </div>
            </div>
            <div class="col-md-8">
                <?php echo app('ClassBlock')->getHtmlLinkFooter(); ?>

                
                <div class="col-md-4 col-b-left">
                    <ul>
                        <li>
                            <img style="width: 100%" src="<?php echo e($config->video_home); ?>">
                            <p>link vào mã QR code chia sẻ.</p>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="col-md-4 location">
                <?php 
                    $contact = app('ClassBlock')->getBlockByType('contact');
                 ?>
                
                <?php $__currentLoopData = $contact; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $idx => $ct): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <p><?php echo $ct->name; ?></p>
                    <?php echo $ct->description; ?>

                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <span>Hotline:  <a href="tel:<?php echo e($config->phone); ?>"><?php echo e($config->phone); ?></a></span>

                <span>Email: <a href="mailto:<?php echo e($config->email); ?>"><?php echo e($config->email); ?></a></span>

            </div>
        </div>
    </div>
</div>

<div class="footer-bottom ">
    <div class="container">
        <div class="col-md-10">
            <br>
            <?php echo $config->description_product; ?>

        </div>
    </div>
</div>