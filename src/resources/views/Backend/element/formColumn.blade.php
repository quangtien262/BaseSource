
    @if($col->type_edit == 'text')
        <div class="col-md-6">
            <br/>
            <label>{{ $col->display_name or $col->name }}</label>
            <input name="{{ $col->name or '' }}" value="{{ $data[$col->name] or '' }}" class="form-control" type="text" placeholder=""/>
        </div>
    @elseif($col->type_edit == 'textarea')
        <div class="col-md-8">
            <br/>
            <label>{{ $col->display_name or $col->name }}</label>
            <textarea name="{{ $col->name or '' }}" class="form-control">{{ $data[$col->name] or '' }}</textarea>
        </div>
    @elseif($col->type_edit == 'select')
        <div class="col-md-6">
            <br/>
            <label>{{ $col->display_name or $col->name }}</label>
            @if(isset($data[$col->name]))
              {!! app('ClassTables')->getHtmlSelectForTable($col->name, $col->select_table_id, $data[$col->name]) !!}
            @endif
        </div>
    @elseif($col->type_edit == 'summoner')
        <div class="col-md-8">
            <br/>
            <label>{{ $col->display_name or $col->name }}</label>
            <textarea name="{{ $col->name or '' }}" class="summernote">{{ $data[$col->name] or '' }}</textarea>
        </div>
    @elseif($col->type_edit == 'selects')
        <div class="col-md-6">
            <br/>
            <label>{{ $col->display_name or $col->name }}</label>
            {!! app('ClassTables')->getHtmlSelectForTable($col->name, $col->select_table_id, $data[$col->name] ? $data[$col->name]:0, true) !!}
        </div>
    @elseif($col->type_edit == 'select2')
        <span>select2</span>
    @elseif($col->type_edit == 'selects2')
        <span>selects2</span>
    @elseif($col->type_edit == 'ckeditor')
        <span>ckeditor</span>
    @elseif($col->type_edit == 'image_laravel')
        <label>{{ $col->display_name or $col->name }}</label>
        <div class="input-group">
            <span class="input-group-btn">
                <a data-input="thumbnail" data-preview="holder1" class="btn btn-primary lfm">
                    <i class="fa fa-picture-o"></i> Chọn ảnh
                </a>
            </span>
            <input id="thumbnail" 
                class="form-control" 
                type="text" 
                name="{{ $col->name or '' }}" 
                value="{{ $data[$col->name] or '' }}" />
        </div>
        @if(!empty($data[$col->name]))
            <img id="holder1" src="{{ $data[$col->name] }}" style="margin-top:15px;max-height:100px;"/>
        @else
            <img id="holder1" style="margin-top:15px;max-height:100px;"/>
        @endif
    @elseif($col->type_edit == 'images_laravel')
        <span>image_laravel</span>
    @elseif($col->type_edit == 'image')
        <span>image</span>
    @elseif($col->type_edit == 'images')
        <span>images</span>
    @elseif($col->type_edit == 'file')
        <span>file</span>
    @elseif($col->type_edit == 'files')
        <span>files</span>
    @elseif($col->type_edit == 'date')
        <div class="col-md-6">
            <br/>
            <label>{{ $col->display_name or $col->name }}</label>
            <input name="{{ $col->name or '' }}" value="{{ $data[$col->name] or '' }}" class="form-control datepicker-1" type="text" placeholder="{{ $data[$col->display_name] or '' }}"/>
        </div>
    @endif
