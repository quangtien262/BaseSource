{{ csrf_field()}}
<input type="hidden" name="tblName" value="{{ $table->name }}"/>
{{-- modal confirm delete --}}
<div tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" class="modal fade confirm-delete in">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Xác nhận xóa</h4>
            </div>
            <div class="modal-body">
                Sau khi xóa dữ liệu sẽ không thể backup lại được, bạn xác nhận chứ?
            </div>
            <div class="modal-footer">
                <button type="submit" 
                    class="btn-delete"
                    {{-- onclick="ajaxSubmitForm('#main-sub-content','.form-option', '#main-sub-content', '', {btnDelete:1})"  --}}
                    name="btnDelete" 
                    value="1" 
                    {{-- data-dismiss="modal" --}}
                    class="btn btn-warning">
                    Xóa liệu đã chọn
                </button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
            </div>
        </div>
    </div>
</div>
{{-- header --}}
<thead>
    <tr>
        <th>
            @if($table->have_delete == 1)
            <div class="btn-group mb-sm">
                <button type="button" data-toggle="dropdown" 
                    class="btn dropdown-toggle ripple btn-primary"
                    aria-expanded="false">
                    #<span class="caret"></span>
                    <span class="md-ripple" 
                        style="width: 0px; height: 0px; margin-top: -28.0025px; margin-left: -28.0025px;"></span>
                </button>
                <ul role="menu" class="dropdown-menu">
                    <li><a data-toggle="modal" data-target=".confirm-delete"><b>- </b>Xóa dữ liệu đã chọn</a></li>
                    <li>
                        <button type="submit"
                                class="btn-export" 
                                name="btnExport" 
                                value="1"
                                {{-- onclick="ajaxSubmitForm('#main-sub-content','.form-option', '#main-sub-content', '', {btnExport:1})"  --}}
                                class="btn-text btn-export2">
                            <b></b>Xuất ra file excel
                        </button>
                    </li>
                </ul>
            </div>
            @else 
                <span>STT</span>
            @endif
        </th>
        @foreach($columns as $col)
            @if($col->show_in_list == 1)
                @if(!empty($col->table_link))
                    <th class="main_th">
                        {!! app('EntityCommon')->getHtmlTitleTblLink($col->table_link) !!}
                    </th>
                @else
                    <th><div class="{{ $col->class or '' }}">{{ $col->display_name }}</div></th>
                @endif
            @endif
        @endforeach

        @if($table->is_show_btn_edit == 1) 
            <th class="sort-numeric">Tuỳ chọn</th>
        @endif
    </tr>
</thead>