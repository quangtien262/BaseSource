<?php $__env->startSection('script'); ?>
    <script src="<?php echo e(url('vendor/summernote/dist/summernote.js')); ?>"></script>

    <script>
        var route_prefix = "<?php echo e(url(config('lfm.prefix'))); ?>";

        <?php echo \File::get(base_path('vendor/unisharp/laravel-filemanager/public/js/lfm.js')); ?>


        $('.lfm').filemanager('image', {prefix: route_prefix});

        var fileNames = [];
        function readFile() {
            
            if (this.files) {
                let length = this.files.length;
                for(i = 0; i < length; i++) {
                    this.files[i];
                    if(fileNames.indexOf(this.files[i].name) >= 0) {
                        continue;
                    }
                    fileNames.push(this.files[i].name);
                    var FR= new FileReader();
                    FR.addEventListener("load", function(e) {
                        let htmlImage = '<div class="item-images">' +
                                '<img src="' + e.target.result + '"/>' +
                                '<textarea class="_hidden" name="_images[]">'+e.target.result+'</textarea>' +
                                '<input type="hidden" value="base64" name="_images_type[]"/>' +
                            '</div>';
                        document.getElementById("result_up_images").innerHTML += htmlImage;
                    }); 
                    FR.readAsDataURL( this.files[i] );
                }
            }
        }

        document.getElementById("images").addEventListener("change", readFile);
        
    </script>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <!-- START row-->
                <div class="row">
                    <div class="col-md-12">
                        <form class="form-validate form-horizontal" id="form-tables" method="post" action="" enctype="multipart/form-data">
                            <?php echo e(csrf_field()); ?>

                            <input type="hidden" name="table_id" value="<?php echo e(isset($tableId) ? $tableId : 0); ?>"/>
                            <fieldset class="b0">
                                <legend>
                                    Table Name
                                    <button class="btn btn-default" style="float: right" type="button">Back</button>
                                    <?php if(!empty($tableId)): ?>
                                    <button class="btn btn-primary" style="float: right" type="submit" name="add_table">Edit table</button>
                                    <?php else: ?>
                                    <button class="btn btn-primary" style="float: right" type="submit" name="edit_table">Add Table</button>
                                    <?php endif; ?>
                                </legend>
                            </fieldset>
                            <fieldset class="b0">
                                <div class="row">
                                    <?php $__currentLoopData = $columns; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $col): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <?php if($col->edit == 1): ?>
                                            <?php echo $__env->make('backend.element.formColumn', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3 center-block">
                                        <br/>
                                        <?php if(empty($dataId)): ?>
                                            <button class="btn btn-primary" type="submit" name="add_field">Thêm mới</button>
                                        <?php else: ?>
                                            <button class="btn btn-primary" type="submit" name="edit_field">Cập nhật</button>
                                        <?php endif; ?>
                                        <a href="<?php echo e(route('listDataTbl', [$tableId])); ?>" class="btn btn-default" type="button">Hủy</a>
                                    </div>
                                </div>
                            </fieldset>
                        </form> 
                        <hr>
                        <!-- END panel-->

                    </div>
                </div>
                <!-- END row-->
            </div>
        </div>
    </div>
        
</section>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.backend', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>