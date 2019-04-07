<?php $__env->startSection('content'); ?>

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-heading">
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
                    <div class="row">
                        <br/>
                        <button type="submit" class="btn btn-primary _left" style="margin-left: 10px">
                            <i class="ion-ios-search-strong"></i>
                            Tìm kiếm
                        </button>
                        <a class="btn btn-primary _right" href="<?php echo e(route('formRow', [$tableId, 0])); ?>" style="margin-right: 10px">
                            <i class="ion-plus-circled"></i>
                            Thêm mới
                        </a>
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
                                    <td>
                                        <?php if(in_array($col->type_edit, ['image_laravel', 'images_laravel', 'image'. 'images'])): ?>
                                            <img style="width:70px" src="<?php echo e($data[$col->name]); ?>"/>
                                        <?php else: ?>
                                            <?php echo e($data[$col->name]); ?>

                                        <?php endif; ?>
                                    </td>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <td>
                                <a href="<?php echo e(route('formRow', [$tableId, $data['id']])); ?>" class="btn btn-sm btn-success">
                                    <i class="ion-edit"></i>
                                    Edit
                                </a>
                                <a href="<?php echo e(route('deleteRow', [$tableId, $data['id']])); ?>" class="btn btn-sm btn-default">
                                    <i class="ion-trash-a"></i>
                                    Delete
                                </a>
                            </td>
                        </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </tbody>
                </table>
                <table class="table-datatable table table-striped table-hover mv-lg">
                    <tr>
                        <td><?php echo $dataQuery->render();; ?></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</section>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.backend', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>