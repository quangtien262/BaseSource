<?php $__env->startSection('content'); ?>

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-heading">
                <a href="<?php echo e(route('editDataTbl', [$tableId, 0])); ?>">add New</a>
                <hr/>
            </div>
            <div class="card-body">
                <div class="row">
				    <div class="col-md-6">
				        <div class="dd" id="nestable">
				            <?php echo $htmlListDragDrop; ?>

				        </div>
				        <p>Output</p>
				        <div class="well" id="nestable-output"></div>
				    </div>
				</div>
            </div>
        </div>
    </div>
</section>


<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.backend', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>