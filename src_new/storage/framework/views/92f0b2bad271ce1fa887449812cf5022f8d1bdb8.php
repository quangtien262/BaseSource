<?php $__env->startSection('title'); ?>
CATEGORY MANAGEMENT
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumb'); ?>
CATEGORY MANAGEMENT
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
    <div class="js-nestable-action">
        <a data-action="expand-all" class="btn btn-default btn-sm mr-sm">mở rộng</a>
        <a data-action="collapse-all" class="btn btn-default btn-sm">Thu gọn</a>
        <!--<a class="btn btn-primary btn-sm" onclick="updateSequenceCategory()">Cập nhật lại thứ tự danh mục</a>-->
        <a class="btn btn-primary btn-sm" onclick="updateSoftOrder('<?php echo e(\TblName::CATEGORY); ?>')">Cập nhật lại thứ tự danh mục</a>
        <a class="btn btn-primary btn-sm" onclick="loadPopupLarge('<?php echo e(route('editCategory',[0])); ?>?type=<?php echo e(isset($_GET['type']) ? $_GET['type']:''); ?>')" data-toggle="modal" data-target=".bs-modal-lg">Thêm mới</a>
        <a class="btn btn-primary btn-sm" onclick="loadContent('#nestable', '<?php echo e(url('admin/category/content-lst-cate')); ?>')">Reload</a>

        <div class="btn-group mb-sm">
            <button type="button" data-toggle="dropdown" 
                    class="btn dropdown-toggle ripple btn-info" 
                    aria-expanded="false">
                <?php echo e(!empty($_GET['typeShow']) ? unserialize(ROUTE_NAME)[$_GET['typeShow']]:'Chọn loại category'); ?>

                <span class="caret"></span>
                <span class="md-ripple" style="width: 0px; height: 0px; margin-top: -27.5px; margin-left: -27.5px;"></span></button>
            <ul role="menu" class="dropdown-menu">
                <?php $__currentLoopData = unserialize(ROUTE_NAME); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php if(!empty($_GET['typeShow']) && $_GET['typeShow'] == $key): ?>
                    <li><b><?php echo e($value); ?></b></li>
                    <?php else: ?>
                        <li><a href="?typeShow=<?php echo e($key); ?>"><?php echo e($value); ?></a></li>
                    <?php endif; ?>
                    
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </div>


        <div class="loader-primary _success status-update"></div>
        <div class="row">
            <div class="col-md-6">
                <div id="nestable" class="dd">
                    <?php echo $htmlListCategory; ?>

                </div>
                <div id="nestable-output" class="well hidden"></div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('Backend.Layouts.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>