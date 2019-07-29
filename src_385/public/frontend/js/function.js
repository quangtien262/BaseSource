
function submitForm(form) {
    let formElement = $(form);
    let result = $('.result');
    result.html('<img style="width:100px" src="/frontend/image/loading.gif"/><em class="_success"> Đang xác thực dữ liệu....</em>');
    $.ajax({
        url: formElement.attr('action'),
        data: formElement.serialize(),
        type: 'post',
        success: function(response) {
            if(response == 'success') {
                location.reload();
            } else {
                result.html(response);
            }
        },
        error: function(response) {
            result.html('errr');
        },
    });
}


function loadUrl(url, e) {
    const result = $(e);
    result.html('<img style="width:200px" src="/imgs/loading.gif"/><em class="_success"> Đang tải dữ liệu....</em>');
    window.location.href = "#main-tab";
    $.ajax({
        url: url,
        type: 'get',
        success: function(response) {
            result.html(response);
        },
        error: function(response) {
            result.html('errr');
        },
    });
}
