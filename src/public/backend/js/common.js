
var loading = '<div class="loader-inner ball-pulse"><div></div><div></div><div></div></div>';

function submitForm(classLoading, classForm, classReload) {
    $(classLoading).html(loading);
    $(classForm).ajaxForm({
        target: classLoading,
        delegation: true,
        dataType: 'script',
        success: function (result) {
            var data = $.parseJSON(result);
            console.log(result + '111');
            if (data[0] === 'success') {
                if(data[1] == 'reload') {
                    location.reload();
                } else {
                    console.log(data[1]);
                    $(classLoading).html(data[1]);
                }
                //$('#myModal').modal('hide');
            } else {
                $(classLoading).html(data[1]);
            }
        }
    }).submit();

}

function reload(classLoad, url) {
    $(classLoad).html(loading);
    $.ajax({
        url: url,
        data: {
            reload: 1
        },
        success: function (data) {
            $(classLoad).html(data);
        }
    });
}

function updateSoftOrder(tname) {
    $('.status-update').html(loading);
    $.ajax({
        type: "get",
        url: "/admin/update-sort-order",
        data: {
            json: $('#nestable-output').html(),
            tname: tname
        },
        success: function (data) {
            $('.status-update').html(data);
        }
    });
}

function deleteRow(deleteAPI, urlReload, classReload) {
    swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this item',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
    },
        function () {
            $.ajax({
                type: "get",
                url: deleteAPI,
                success: function (data) {
                    if (data === 'success') {
                        if (!classReload) {
                            classReload = '#nestable';
                        }
                        swal('Deleted!', 'Your category has been deleted.', 'success');
                        reload(classReload, urlReload);
                    }
                }
            });
        });
}


function loadPopupLarge(url) {
    $('.popup-content').html(loading);
    $.ajax({
        type: "get",
        url: url,
        success: function (data) {
            $('.popup-content').html(data);
        }
    });
}

function editCategory() {
    $('.edit-category-result').html(loading);
    $(".category-form").ajaxForm({
        target: '.edit-category-result',
        success: function (data) {
            //            loadContent('#nestable', '/admin/category/content-lst-cate');
            location.reload();
            $('.bs-modal-lg').modal('toggle');
        }
    }).submit();
}

function loadContent(classLoad, url) {
    $(classLoad).html(loading);
    $.ajax({
        url: url,
        success: function (data) {
            $(classLoad).html(data);
        }
    });
}

function addHtml(typeElement, classCopy, classPaste) {
    if (typeElement === 'form') {
        $(classPaste).html($(classCopy).html());
    } else {
        $(classPaste).html($(classCopy).html());
    }
}

function addHtml2Editor(classCopy, classEditor) {
    $('.main-editor').html('');
    $('.main-editor').html('<textarea class="summernote" name="footer"> ' + $(classCopy).html() + ' </textarea>');
    $('.summernote').each(function () {
        $(this).summernote({
            height: 380
        });
    });
    $(classEditor).val('');
}

function deleteRow(deleteAPI, urlReload, classReload) {
    swal({
        title: 'Bạn chắc chắn xóa item này?',
        text: 'Item này sẽ bị xóa hoàn toàn, bạn sẽ không thể backup lại!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Xóa',
        closeOnConfirm: false
    },
        function () {
            $.ajax({
                type: "get",
                url: deleteAPI,
                success: function (data) {
                    if (data === 'success') {
                        swal('Deleted!', 'Xóa data thành công.', 'success');
                        location.reload();
                    }
                }
            });
        });
}


function YNconfirm(url, msg) {

    if (window.confirm(msg)) {
        redirectUrl(url);
        return true;
    }
    else {
        return false;
    }
};

function changeStt(_this, id) {
    var classLoad = '#result-' + id;
    $(classLoad).html(loading);
    $.ajax({
        url: "/admin/update-stt",
        data: {
            id: id,
            sortOrder: $(_this).val()
        },
        success: function (data) {
            $(classLoad).html('<span style="color:#23c85e;font-weight:normal">Success</span>');
            setTimeout(function () {
                $(classLoad).fadeOut('fast');
            }, 3000); // <-- time in milliseconds

        }
    });
}