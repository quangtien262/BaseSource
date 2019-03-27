<?php $__env->startSection('content'); ?>

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-heading">
                <p><a href="<?php echo e(route('editDataTbl', [$tableId, 0])); ?>">add New</a></p>
                <form action="" method="get">
                  <div class="row">
                      <?php  $isSearch = false;  ?>
                      <?php if(!empty($columns)): ?>
                          <?php $__currentLoopData = $columns; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $col): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                              <?php if($col->add2search == 1): ?>
                                  <?php  $isSearch = true;  ?>
                                  <?php echo $__env->make('backend.element.formSearchColumn', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                              <?php endif; ?>
                          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                      <?php endif; ?>
                  </div>
                  <?php if($isSearch): ?>
                    <div class="row" style="text-align:center">
                      <input type="submit" value="Tìm kiếm" class="btn btn-primary"/>
                    </div>
                  <?php endif; ?>
                </form>
            </div>
            <div class="card-body">
                <table class="table-datatable table table-striped table-hover mv-lg">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <?php $__currentLoopData = $columns; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $col): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php if($col->show_in_list == 1): ?>
                                    <th><?php echo e($col->display_name); ?></th>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <th class="sort-numeric">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $__currentLoopData = $datas; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr class="gradeX">
                            <td><?php echo e($index + 1); ?></td>
                            <?php $__currentLoopData = $columns; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $col): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php if($col->show_in_list == 1): ?>
                                    <td><?php echo e($col->show_in_list == 1 ? $data[$col->name]:''); ?></td>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <td>
                                <a href="<?php echo e(route('editDataTbl', [$tableId, $data['id']])); ?>" class="btn btn-sm btn-success">Edit</a>
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