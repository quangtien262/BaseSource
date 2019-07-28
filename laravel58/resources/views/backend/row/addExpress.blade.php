<form class="form-validate form-horizontal form-add-express" id="form-tables" 
        method="post" action="{{ route('formRow', [$tableId, 0]) }}"
        enctype="multipart/form-data">
        {{ csrf_field()}}
        @if(!empty($tabId))
            <input type="hidden" name="{{ $table->table_tab_map_column }}" value="{{ $tabId }}"/>
        @endif
        <thead>
                <tr class="tr-add-express">
                    <th>
                        <i data-pack="android" class="ion-android-person-add add-new"></i>
                    </th>
                    @php $idx = 1; @endphp
                    @foreach($columns as $col)
                        @if($col->show_in_list == 1)
                            @php $idx++; @endphp
                            {!! app('UtilsCommon')->showColumnInput($col) !!}
                        @endif
                    @endforeach
                </tr>
        </thead>
        <thead>
            <tr class="tr-add-express">
                <th colspan="{{ $idx }}">
                    <button type="submit"
                    {{-- onclick="ajaxSubmitForm('#main-sub-content','.form-add-express')"  --}}
                    class="btn btn-primary btn-add-express">
                    Thêm nhanh
                </button>
                </th>
            </tr>
        </thead>
    </form>
    
        