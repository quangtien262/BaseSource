<?php $__env->startSection('title'); ?>
EDIT PRODUCT
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumb'); ?>
EDIT PRODUCT
<?php $__env->stopSection(); ?>

<?php $__env->startSection('avatar'); ?>
    <?php if($user->avatar != ''): ?>
        <a href="">
            <img src="<?php echo e(url($user->avatar)); ?>" alt="Profile" class="img-circle thumb64">
        </a>
        <div class="mt">Welcome, <?php echo e($user->username); ?></div>
    <?php endif; ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scriptAddon'); ?>
<!-- Summernote-->
<script src="<?php echo e(url('vendor/summernote/dist/summernote.js')); ?>"></script>

<script>
	var route_prefix = "<?php echo e(url(config('lfm.prefix'))); ?>";

	<?php echo \File::get(base_path('vendor/unisharp/laravel-filemanager/public/js/lfm.js')); ?>


	$('.lfm').filemanager('image', {prefix: route_prefix});
</script>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container container-lg">
    <div class="card">
        <!--        <div class="card-heading">
                    <div class="card-title">Form edit product</div>
                </div>-->
        <form id="form-register" name="registerForm" 
              novalidate="" 
              class="form-validate" 
              method="post" 
              action="<?php echo e(route('editProduct',[$pid])); ?>"
              enctype="multipart/form-data">
            <?php echo e(csrf_field()); ?>

            <input type="hidden" name="type" value="product" />
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                            <div class="mda-form-control">
                                <input name="name"
                                       value="<?php echo e(isset($product['vi']->name) ? $product['vi']->name : ''); ?>"
                                       required="" 
                                       tabindex="0" 
                                       aria-required="true" 
                                       aria-invalid="true" 
                                       class="form-control">
                                <div class="mda-form-control-line"></div>
                                <label>Nhập tên sản phẩm</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                            <div class="mda-form-control">
                                <input name="maker"
                                       value="<?php echo e(isset($product['vi']->maker) ? $product['vi']->maker : ''); ?>"
                                       required="" 
                                       tabindex="0" 
                                       aria-required="true" 
                                       aria-invalid="true" 
                                       class="form-control">
                                <div class="mda-form-control-line"></div>
                                <label>Mã SP</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="mda-form-group">
                            <div class="mda-form-control">
                                <select name="category_id" class="form-control" required="">
                                    <option value="">&nbsp; Select category</option>
                                    <?php echo $category; ?>

                            </select>
                            <div class="mda-form-control-line"></div>
                            <label>Chọn danh mục</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                        <div class="mda-form-control">
                            <input name="price" 
                                   value="<?php echo e(isset($product['vi']->price) ? $product['vi']->price : ''); ?>"
                                   required="" 
                                   tabindex="0" 
                                   aria-required="true" 
                                   aria-invalid="true" 
                                   class="form-control">
                            <div class="mda-form-control-line"></div>
                            <label>Giá bán</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                        <div class="mda-form-control">
                            <input name="price_promotion" 
                                   value="<?php echo e(isset($product['vi']->price_promotion) ? $product['vi']->price_promotion : ''); ?>"
                                   tabindex="0" 
                                   aria-required="true" 
                                   aria-invalid="true" 
                                   class="form-control">
                            <div class="mda-form-control-line"></div>
                            <label>Giá khuyến mại</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 _hidden">
                    <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                        <div class="mda-form-control">
                            <input name="color" 
                                   value="<?php echo e(isset($product['vi']->color) ? $product['vi']->color : ''); ?>"
                                   required="" 
                                   tabindex="0" 
                                   aria-required="true" 
                                   aria-invalid="true" 
                                   class="form-control">
                            <div class="mda-form-control-line"></div>
                            <label>Màu sắc</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 _hidden">
                    <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                        <div class="mda-form-control">
                            <input name="baohanh" 
                                   value="<?php echo e(isset($product['vi']->baohanh) ? $product['vi']->baohanh : ''); ?>"
                                   tabindex="0" 
                                   aria-required="true" 
                                   aria-invalid="true" 
                                   class="form-control">
                            <div class="mda-form-control-line"></div>
                            <label>Bảo hành:</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row _hidden">
                <div class="col-sm-6">
                    <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                        <div class="mda-form-control">
                            <input name="tinhtrang" 
                                   value="<?php echo e(isset($product['vi']->tinhtrang) ? $product['vi']->tinhtrang : ''); ?>"
                                   required="" 
                                   tabindex="0" 
                                   aria-required="true" 
                                   aria-invalid="true" 
                                   class="form-control">
                            <div class="mda-form-control-line"></div>
                            <label>Trạng thái</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                        <div class="mda-form-control">
                            <select name="active">
                                <option value="0" selected="selected">Hiển thị sản phẩm này</option>
                                <option value="1">Ẩn Sản phẩm này</option>
                            </select>
                            <div class="mda-form-control-line"></div>
                            <label>Tùy chọn:</label>
                        </div>
                    </div>
                </div>
            </div>
                
            <div class="row">
                <?php for($i=0; $i<=20; $i++): ?>
                <?php 
                if (!empty($imgs[$i])) {
                    $hiddenClass01 = 'img_active';
                } else {
                    if ($i > 1) {
                        $hiddenClass01 = '_hidden img_hidden';
                    } else {
                        $hiddenClass01 = 'img_active';
                    }
                }
                 ?>
                    <div class="col-md-6 <?php echo e($hiddenClass01); ?>">
                        <label>Hình ảnh <?php echo e($i+1); ?> (tỷ lệ chuẩn 1000x500 (px))</label>
                        <div class="input-group">
                            <span class="input-group-btn">
                                <a data-input="thumbnail_21_<?php echo e($i); ?>" data-preview="holder_21_<?php echo e($i); ?>" class="btn btn-primary lfm">
                                    <i class="fa fa-picture-o"></i> Chọn ảnh
                                </a>
                            </span>
                            <input id="thumbnail_21_<?php echo e($i); ?>" 
                                   class="form-control" type="text" 
                                   name="img[<?php echo e($i); ?>]" 
                                   value="<?php echo e(isset($imgs[$i]) ? $imgs[$i] : ''); ?>"/>
                        </div>
                        <img id="holder_21_<?php echo e($i); ?>" src="<?php echo e(isset($imgs[$i]) ? $imgs[$i] : ''); ?>" class="img-landingpage-01"/>
                    </div>
                <?php endfor; ?>
            </div>
            
            <div class="row">
                <p><a onclick="addItemTemplate('.img_hidden', 'img_active', 'img_hidden')">Thêm hình ảnh</a></p>
            </div>    
            
                
            <div class="container-fluid">
                <label>Mô tả về sản phẩm</label>
                <textarea class="summernote" name="summary"><?php echo e(isset($product['vi']->summary) ? $product['vi']->summary : ''); ?></textarea>
            </div>
            <div class="container-fluid">
                <label>Nội dung</label>
                <textarea class="summernote" name="content"><?php echo e(isset($product['vi']->content) ? $product['vi']->content : ''); ?></textarea>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                        <div class="mda-form-control">
                            <textarea name="keyword" 
                                      rows="4" 
                                      aria-multiline="true" 
                                      tabindex="0" 
                                      aria-invalid="false" 
                                      class="form-control"><?php echo e(isset($product['vi']->keyword) ? $product['vi']->keyword : ''); ?></textarea>
                            <div class="mda-form-control-line"></div>
                            <label>[SEO] Keyword</label>
                        </div>
                        <span class="mda-form-msg">Keyword should be a maximum of 155 characters long.</span>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="mda-form-group mb <?php echo e(isset($product['vi']->id) ? '' : 'float-label'); ?>">
                        <div class="mda-form-control">
                            <textarea name="description" 
                                      rows="4" 
                                      aria-multiline="true" 
                                      tabindex="0" 
                                      aria-invalid="false" 
                                      class="form-control"><?php echo e(isset($product['vi']->description) ? $product['vi']->description : ''); ?></textarea>
                            <div class="mda-form-control-line"></div>
                            <label>[SEO] Descrption</label>
                        </div>
                        <span class="mda-form-msg">Descrption should be a maximum of 70-150 characters long.</span>
                    </div>
                </div>
            </div>
            <div class="clearfix">
                <div class="pull-left">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="submit" class="btn btn-default">Close</button>
                </div>
                <br/>
            </div>
        </div>
    </form>
</div>
</div>


<?php $__env->stopSection(); ?>
<?php echo $__env->make('Backend.Layouts.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>