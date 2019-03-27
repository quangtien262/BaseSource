<?php $__env->startSection('title'); ?>

PRODUCT MANAGEMENT

<?php $__env->stopSection(); ?>



<?php $__env->startSection('breadcrumb'); ?>

PRODUCT MANAGEMENT

<?php $__env->stopSection(); ?>



<?php $__env->startSection('avatar'); ?>

<?php if($user->avatar != ''): ?>

<a href="">

    <img src="<?php echo e(url($user->avatar)); ?>" alt="Profile" class="img-circle thumb64">

</a>

<div class="mt">Welcome, <?php echo e($user->username); ?></div>

<?php endif; ?>

<?php $__env->stopSection(); ?>



<?php $__env->startSection('content'); ?>

<div class="container-fluid">

    <div class="card">

        <div class="card-heading">

            <div class="row">

                <div class="col-xs-6 col-md-4">

                    <a href="/admin/product/edit/0" class="btn btn-primary">Add new</a>

                </div>



                <div class="col-xs-12 col-sm-6 col-md-8 main-form-search">

                    <div class="main-form-search">

                        <form id="form-user_v1" action="" name="form-user_v1">

                            

                            <select name="cate" >

                                <option value="">Choose category</option>

                                <?php echo $htmlSelectCategory; ?>


                            </select>

                            <div class="typeahead__container">

                                <div class="typeahead__field">

                                    <span class="typeahead__query">

                                        <input style="font-size: 1.5em; height: 2.44em" class="js-typeahead-user_v1" name="q" type="search" placeholder="Tìm kiếm nhanh theo từ khóa" autocomplete="off">

                                    </span>

                                    <span class="typeahead__button">

                                        <button type="submit">

                                            <i style="font-size: 2em" class="typeahead__search-icon"></i>

                                        </button>

                                    </span>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

        <div class="table-responsive">

            <table class="table table-striped">

                <thead>

                    <tr>

                        <th>#</th>
                        
                        <th>STT</th>

                        <th>Hình ảnh</th>

                        <th>Tên SP</th>

                        <th>Giá bán</th>

                        <th>option</th>

                    </tr>

                </thead>.

                <tbody>

                    <?php $idx = 0 ?>

                    <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                    <?php $idx++ ?>

                    <tr>

                        <td><?php echo e($idx); ?></td>
                        
                        <td>
                            <input style="width: 50px" 
                                   type="text" 
                                   onchange="changeStt(this, '<?php echo e($product->pId); ?>')" 
                                   value="<?php echo e($product->sort_order); ?>">
                            <label id="result-<?php echo e($product->pId); ?>"></label>
                        </td>

                        <td>

                            <?php if(isset($product->image) && $product->image != ''): ?>

                            <img class="list_img_pro" src="<?php echo e($product->image); ?>" />

                            <?php endif; ?>

                        </td>

                        <td><?php echo e($product->name); ?></td>

                        <td><?php echo e($product->price); ?></td>

                        <td>

                            <a href="<?php echo e(url('admin/product/edit/'.$product->pId)); ?>"><i data-pack="default" class="ion-edit"></i></a>

                            &nbsp;

                            <a onclick="YNconfirm('<?php echo e(url('admin/product/delete/'.$product->pId)); ?>', 'Bạn xác nhận xóa SP này')"><i data-pack="default" class="ion-trash-a"></i></a>

                        </td>

                    </tr>

                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                    <tr>

                        <td colspan="6"><?php echo $products->render(); ?></td>

                    </tr>

                </tbody>

            </table>

        </div>

    </div>

</div>

<!-- END row-->







<?php $__env->stopSection(); ?>
<?php echo $__env->make('Backend.Layouts.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>