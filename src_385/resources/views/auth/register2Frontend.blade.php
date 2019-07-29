
<div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title" id="myModalLabel">Đăng ký thành viên</h4>
</div>
<form class="form-horizontal form-login" method="post" action="{{ route('register2Frontend') }}">
    {{ csrf_field() }}
    <div class="modal-body">
        <div class="form-group">
            <div class="col-md-4">
                <label class="label-input">Họ và tên</label>
            </div>
            <div class="col-md-8 item-input">
                <input required type="text" class="form-control" name="name" placeholder="Họ và tên">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-4">
                <label class="label-input">Địa chỉ Email</label>
            </div>
            <div class="col-md-8 item-input">
                <input required type="email" class="form-control" name="email" placeholder="Địa chỉ Email">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-4">
                <label class="label-input">Tên đăng nhập</label>
            </div>
            <div class="col-md-8 item-input">
                <input required type="text" class="form-control" name="username" placeholder="Tên đăng nhập">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-4">
                <label class="label-input">Mật khẩu</label>
            </div>
            <div class="col-md-8 item-input">
                <input required type="password" class="form-control" name="password" placeholder="Mật khẩu ">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-4">
                <label class="label-input">Xác nhận mật khẩu</label>
            </div>
            <div class="col-md-8 item-input">
                <input required type="password" class="form-control" name="password_confirm">
            </div>
        </div>
        
        <div class="form-group">
                <div class="col-md-4">
                    <label class="label-input">Địa chỉ</label>
                </div>
                <div class="col-md-8 item-input">
                    <textarea class="address form-control" name="address"></textarea>
                </div>
            </div>
        <p class="_red result"></p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
        <button type="button" class="btn btn-primary" onclick="submitForm('.form-login')">Đăng Ký</button>
        
    </div>
</form>
