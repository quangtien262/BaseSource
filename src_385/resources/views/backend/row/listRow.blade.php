
    
        {{-- content --}}
        
            @foreach($datas as $index => $data)
            <tr class="gradeX">
                <td>
                    @if($table->have_delete == 1)
                        <div style="width:30px">
                            <input id="id_chk{{ ($index + 1) }}" class="chkbox" type="checkbox" name="rowId[]" value="{{ $data['id'] }}"/>
                            {{ ($index + 1) }}
                        </div>
                    @else 
                        <span>{{ ($index + 1) }}</span>
                    @endif
                </td>
                @foreach($columns as $col)
                    @if($col->show_in_list == 1)
                            {{-- type image --}}
                            @if(in_array($col->type_edit, ['image_laravel', 'images_laravel', 'image', 'images', 'images_no_db']))
                                <td>
                                    <div class="{{ $col->class or '' }}">
                                        @include('backend.element.row.imageInList')
                                    </div>
                                </td>
                            {{-- type comment --}}
                            @elseif($col->type_edit == 'comment')
                                <td>
                                    {!! app('UtilsCommon')->getHtmlComment($col->select_table_id, $col->column_name_map_to_comment , $data['id']) !!}
                                </td>
                            @else
                                {{-- sub column --}}
                                @if(!empty($col->table_link))
                                    <td class="{{ $col->class or '' }}">
                                        {!! app('EntityCommon')->getHtmlTblLink($col->table_link, $col->sub_column_name, $data['id']) !!}
                                    </td>
                                @else
                                    {{-- background --}}
                                    @php
                                        $background = '';
                                        if(!empty($col->bg_in_list) && $col->type_edit == 'select' && !empty($col->select_table_id)) {
                                            $tblColor = app('EntityCommon')->getCurrentTableDataByTablesId($col->select_table_id, $data[$col->name]);
                                            $background = !empty($tblColor->color) ? $tblColor->color : '';
                                        }
                                    @endphp

                                    <td class="{{ $col->class or '' }} {{ !empty($background) ? 'background':'' }}" style="background:{{ $background }}">
                                        
                                        @if(empty($col->add_column_in_list))
                                            {{-- show name --}}
                                            <div class="{{ $col->class or '' }}">
                                                {!! $col->fast_edit == '1' ? app('UtilsCommon')->xEditTable( $tableId, $col, $data) : $data[$col->name] !!}
                                            </div>
                                            
                                            {!! app('UtilsCommon')->inputFastEdit($col, $data[$col->name], $tableId, $data['id']) !!}

                                        @else 
                                            {{-- Hiển thị nhiều column trên 1 hàng --}}
                                            <ul class="sub-col">    
                                                @foreach(json_decode($col->add_column_in_list, true) as $k => $v)
                                                    @php $currenColumn = app('ClassTables')->getCurrentColumnByTableIdAndName($tableId, $k) @endphp  
                                                    <li>
                                                        <span>{{ $v }}:</span>
                                                        {!! $col->fast_edit == '1' ? app('UtilsCommon')->xEditTable( $tableId, $currenColumn, $data) : $data[$k] !!}
                                                        {!! app('UtilsCommon')->inputFastEdit($currenColumn, $data[$currenColumn->name],$tableId, $data['id']) !!}
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                        
                                        {{-- Thêm sub tbl --}}
                                        @if(!empty($col->config_add_sub_table))
                                            @php $subTbl = json_decode($col->config_add_sub_table, true) @endphp
                                            <p class="add-sub-tbl">
                                                <a onclick="loadDataPopup('{{ route('formRow', [$subTbl['table_id'], 0]) }}', '&{{ $subTbl['column'] }}={{ $data['id'] }}')" data-toggle="modal" data-target=".bs-modal-lg">
                                                    {{ $subTbl['title'] }}
                                                </a>
                                            </p>
                                        @endif
                                    </td>
                                @endif
                            @endif
                        </td>
                    @endif
                @endforeach

                @if($table->is_show_btn_edit == 1) 
                    <td>
                        @if($table->is_edit == 1)
                            
                            @if($table->form_data_type == 1)
                                <a href="{{ route('formRow', [$tableId, $data['id']]) }}" class="btn btn-sm btn-success">
                                    <i class="ion-edit"></i> Sửa
                                </a>
                            @else 
                                <a onclick="loadDataPopup('{{ route('formRow', [$tableId, $data['id']]) }}')" data-toggle="modal" data-target=".bs-modal-lg" class="btn btn-sm btn-success">
                                    <i class="ion-edit"></i> Sửa
                                </a>
                            @endif
                            
                        @endif
                        {{-- <a href="{{ route('deleteRow', [$tableId, $data['id']]) }}" class="btn btn-sm btn-default">
                            <i class="ion-trash-a"></i>
                            Xoá
                        </a> --}}
                    </td>
                @endif
            </tr>
            @endforeach

