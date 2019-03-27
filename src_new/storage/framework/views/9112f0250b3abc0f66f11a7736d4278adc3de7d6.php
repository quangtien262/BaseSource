<?php $__env->startSection('title'); ?>
home page
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumb'); ?>
HOME
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
home
<?php $__env->stopSection(); ?>
<?php echo $__env->make('Backend.Layouts.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>