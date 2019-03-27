<?php $__env->startSection('content'); ?>

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-heading">
                <a href="<?php echo e(route('configTbl_edit', [0])); ?>">add New</a>
            </div>
            <div class="card-body">
                <table class="table-datatable table table-striped table-hover mv-lg">
                    <thead>
                        <tr>
                            <th>Table Name</th>
                            <th>Title</th>
                            <th>Edit</th>
                            <th class="sort-numeric">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $__currentLoopData = $tables; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $table): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <tr class="gradeX">
                                <td><?php echo e($table->name); ?></td>
                                <td><?php echo e($table->display_name); ?></td>
                                <td><?php echo e($table->is_edit == 1 ? 'Have Edit':'Not Edit'); ?></td>
                                <td>
                                    <a href="<?php echo e(route('configTbl_edit', [$table->id])); ?>" class="btn btn-sm btn-success">Edit</a>
                                    <a href="<?php echo e(route('deleteTable', ['table'=>$table->id])); ?>" class="btn btn-sm btn-default">Delete</a>
                                </td>
                            </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.backend', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>