@if($col->type_edit == 'image_laravel' || $col->type_edit == 'image')
    <img style="width:70px" src="{{ $data[$col->name] }}"/>
@elseif($col->type_edit == 'image_laravel')
@elseif($col->type_edit == 'images_laravel')
@elseif($col->type_edit == 'images_laravel')
@elseif($col->type_edit == 'images_no_db')
    {!! app('UtilsCommon')->getHtmlImageById($tableId, $data['id']) !!}
    <div class="file-field">
        <div class="btn btn-primary btn-sm float-left">
            <span>Chọn file</span>
            <input type="file">
        </div>
    </div>
    {{-- <input file-type="image" tbl-id="{{ $tableId }}" data-id="{{ $data['id'] }}"
         onchange="updateMultipleImages(this)" 
         type="file" 
         multiple 
         placeholder="Chọn file"/> --}}
@endif


