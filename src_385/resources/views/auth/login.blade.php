
@extends('layouts.auth')

@section('content')
<div class="title_frm">
    <b>THÔNG TIN ĐĂNG NHẬP</b>
</div>
<form action="{{ route('loginAdmin') }}" method="post" targer="main" id="form-login" name="frm">
    {{ csrf_field() }}
    <div class="form-group form-group">
        <label for="exampleInputEmail1">Tên Đăng nhập</label>
        <input class="form-control" id="username" name="username" type="text" style=" font-weight:bold;">
        <span id="error-username" class="_red"></span>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Mật Khẩu</label>
        <input class="form-control" id="password" name="password" type="password" >
        <span id="error-password" class="_red"></span>
    </div>
    <div class="col-xs-12 ">
        <div class="row text-ceter">
            <span class="loading _red"></span>
            <br/>
            <button onclick="login()" type="button" class="btn btn-default btn-sm btn-primary" style="padding: 5px 25px">Đăng nhập</button>
        </div>
    </div>
</form>

<script>
    function checkLoading() {
        load = $("#_loading");
        if (load.hasClass("_hidden")) {
            load.removeClass("_hidden");
        } else {
            load.addClass("_hidden");
        }
    }
    function login() {
        let isError = false;
        if(!$('#username').val()) {
            $('#error-username').html('Vui lòng nhập tên đăng nhập');
            isError = true;
        }
        if(!$('#password').val()) {
            $('#error-password').html('Vui lòng nhập mật khẩu');
            isError = true;
        }
        if(isError) {
            return;
        }
        $('#error-username').html('');
        $('#error-password').html('');
        checkLoading();
        $('#form-login')
            .ajaxForm({
            target: '.loading',
            delegation: true,
            dataType: 'text',
            success: function(result) {
                console.log(result);
                if (result === 'success') {
                    window.location.replace("/admin");
                } else {
                    checkLoading();
                    $('.loading').html(result);
                }
            },
            error: function(error) {
                console.log(error);
                checkLoading();
                $('.loading').html('Có lỗi xảy ra, vui lòng kiểm tra lại đường truyền và thử lại');
            },
        }).submit();
    }
</script>
@endSection
