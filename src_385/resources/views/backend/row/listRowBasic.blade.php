@extends('layouts.backend')

@section('script')
<script src="/backend/js/choose-multiple-checkbox.js"></script>
{{-- <script>
    $('.table-responsive').css('max-height', ($(window ).height() * 0.9));
</script> --}}

<script>
    $('.panel-heading').removeClass('_hidden');
</script>
@endsection

@section('content')

<section>
        
    <div class="container-fluid">
        <div class="card">
            <div class="card-body table-responsive">
                <div class="panel-heading ">
                    <h4>{{$table->display_name}}</h4>
                    <form action="" method="get" class="form-search ">
                        <div class="row">
                            @php $isSearch = false; @endphp
                            @if(!empty($columns))
                                @foreach($columns as $col)
                                    @if($col->add2search == 1)
                                        @php $isSearch = true; @endphp
                                        @include('backend.element.formSearchColumn')
                                    @endif
                                @endforeach
                            @endif

                            <div class="col-xs-6 col-sm-3">
                                @if($isSearch)
                                    <br/>
                                    <br/>
                                    <button type="submit" class="btn btn-primary btn-left">
                                        <i class="ion-ios-search-strong"></i>
                                        Tìm kiếm
                                    </button>
                                @endif
                            </div>
                        </div>
                    </form>
                   
                    @if($table->have_insert_all == 1)
                        <div class="clean">
                            <br/>
                            <br/>
                            <hr/>
                        </div>
                        <div class="row">
                            <form action="{{ route('updateMultipleData') }}" method="POST" class="_left">
                                {{ csrf_field()}}
                                <button type="submit" class="btn btn-warning" title="Cập nhật tất cả theo Điều Kiện search hiện tại">
                                    Cập nhật tất cả theo ĐK search hiện tại
                                </button> 
                                <button type="bottom" class="btn btn-primary">
                                    Cập nhật data đã chọn
                                </button> 
                                <input type="hidden" name="tbl" value="{{ $table->name }}"/>
                                @if(!empty($_GET)) 
                                    @foreach ($_GET as $key => $val)
                                        <input type="hidden" name="{{ $key }}" value="{{ $val }}"/>
                                    @endforeach
                                @endif
                                <select id="collumn-id" name="collumn" onchange="loadValueType(this)" required>
                                    <option value=""> Chọn column cần update </option>
                                    @foreach($columns as $col)
                                        @if($col->edit == 1)
                                            <option value="{{ $col->id }}">{{ $col->display_name }}</option>
                                        @endif
                                    @endforeach
                                </select>
                                <span class="load-value-type"></span>
                            </form>
                        </div>
                    @endif

                    <div class="clean"><hr/></div>
                    {{-- tien_chi_tieu --}}
                    @if($table->name == 'tien_chi_tieu')
                        <a class="btn btn-success" href="{{ route('generateHoaDon') }}" onclick="return checkConfirm('Xác nhận thanh toán hoá đơn')">
                            Thanh toán hoá đơn
                        </a>
                    @endif
                    {{-- tien_phong --}}
                    @if($table->name == TIEN_PHONG)
                        <form action="{{ route('generateTienPhong') }}" method="POST" class="_right">
                            &nbsp;
                            {{ csrf_field()}}
                            <button class="btn btn-success" onclick="return checkConfirm('Xác nhận tính tiền phòng')">
                                {{-- <i class="ion-arrow-down-a"></i> --}}
                                Tính tiền phòng
                            </button> 
                            <select name="month">
                                <option>Tháng</option>
                                @for($i = 1; $i <= 12; $i++)
                                    <option {{ $i == date('m') ? 'selected':'' }} value="{{ $i }}"> {{ $i }} </option>
                                @endfor
                            </select>
                            <input type="number" name="year" value="{{ date('Y') }}"/>

                        </form>
                    @endif

                    {{-- thống kê --}}
                    @if($table->name == THONG_KE_DONG_TIEN)
                        <a class="btn btn-success" href="{{ route('thongKeDongTien') }}">
                            Thống kê
                        </a>
                    @endif
                    
                    @if($table->name == THONG_KE_KHAU_HAO)
                    <form action="{{ route('thongKeKhauHao') }}" method="post">
                        {{ csrf_field()}}
                        <button type="submit" class="btn btn-success">
                            Thống kê
                        </button>
                        <input name="khau_hao_do" type="number" placeholder="TG Khấu hao đồ"/>
                        <input name="khau_hao_other" type="number" placeholder="TG Khấu hao khác"/>
                    </form>
                    @endif

                    @if($table->have_add_new == 1)
                        @if($table->form_data_type == 1)
                            <a class="btn btn-success btn-right" href="{{ route('formRow', [$tableId, 0]) }}">
                                <i class="ion-plus-circled"></i>
                                Thêm mới
                            </a>
                        @elseif($table->form_data_type == 2)
                            <a class="btn btn-success btn-right" 
                                onclick="loadDataPopup('{{ route('formRow', [$tableId, 0]) }}')"data-toggle="modal" data-target=".bs-modal-lg">
                                <i class="ion-plus-circled"></i>
                                Thêm mới
                            </a>
                        @endif
                    @endif

                    @if($table->export == 1)
                        <a target="_new" class="btn btn-success btn-right" href="{{ route('export2Excel', [$tableId]) }}">
                            <i class="ion-arrow-up-a"></i>
                            Xuất toàn bộ dữ liệu ra file excel
                        </a>
                    @endif

                    @if($table->import == 1)
                        <a class="btn btn-success btn-right" onclick="loadDataPopup('{{ route('import2Excel', [$tableId]) }}')" data-toggle="modal" data-target="#myModal">
                            <i class="ion-arrow-down-a"></i>
                            Nhập dữ liệu từ file excel
                        </a>  
                    @endif
                    @if($table->is_edit_express == 1)
                        <a class="btn btn-success btn-right  btn-sm">
                            <label class="checkbox checkbox-inline btn-checkbox">
                                <input onClick="checkFastEdit(this)" id="inlineCheckbox1" type="checkbox" value="option1">
                                Sửa nhanh
                            </label>
                        </a> 
                    @endif

                    @if($table->name == SO_DIEN)
                        <a href="{{ route('generateSodien') }}" class="btn btn-success btn-right">
                            Tự động tạo số điện theo dữ liệu của tháng trước
                        </a> 
                    @endif

                    </div>
                </div>
                <div>
                    <section>
                        @if(!empty($table->table_tab))
                            @include('backend.row.tabName')
                        @endif
                        <div id="myTabContent" class="tab-content text-center">
                            <div id="home" role="tabpanel" aria-labelledby="home-tab" class="tab-pane fade active in">
                                <div id="output"></div>
                                @if($table->name == "tien_chi_tieu")
                                    <a href="?isShow=1">Xem thống kê chi tiết</a>
                                    @if(!empty($_GET['isShow']))
                                        <div class="thongke">
                                            <ul>
                                                {!! app('EntityCommon')->thongKeTienChiTieu() !!}
                                                <li><a href="?isShow=0">Ẩn thống kê chi tiết</a></li>
                                            </ul>
                                        </div>
                                    @endif
                                @endif
                                <table class="table-datatable table table-striped table table-bordered mv-lg fix-tbl-basic">
                                    @if($table->is_add_express == 1)
                                        @include('backend.row.addExpress')
                                    @endif
                                    <form method="POST" class="form-option" action="{{ route('listOption') }}">
                                        {{ csrf_field()}}
                                        @include('backend.row.rowHeader')
                                        <tbody id="main-sub-content">
                                            @include('backend.row.listRow')
                                        </tbody>
                                    </form>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
                <table class="table-datatable table table-striped table-hover mv-lg">
                    <tr>
                        <td>{!! $dataQuery->render() !!}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</section>
@if(isset($_GET['reload']) && $_GET['reload'] == 1)
    <script src="/backend/js/choose-multiple-checkbox.js"></script>
    @include('backend.element.scriptReload') 
@endif

@endsection
