$(document).ready(function() {

    //checkbox
    var $chkboxes = $('.chkbox');
    var lastChecked = null;
    $chkboxes.click(function(e) {
        if (!lastChecked) {
            lastChecked = this;
            return;
        }

        if (e.shiftKey) {
            console.log('shi');
            var start = $chkboxes.index(this);
            var end = $chkboxes.index(lastChecked);

            $chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', lastChecked.checked);
        }

        lastChecked = this;
    });

    // $('.btn-add-express, .btn-delete, .btn-export').click(function(e) {
    //     classLoading = "#main-sub-content";
    //     classForm = ".form-ajax";
    //     classReload = "#main-sub-content";
    //     urlReload = "";
    //     let form = '.form-option';
    //     let addParam = {};
    //     if($(this).hasClass('btn-add-express')) {
    //         form = '.form-add-express';
    //     } else if($(this).hasClass('btn-delete')) {
    //         addParam = {btnDelete:1};
    //     } else if($(this).hasClass('btn-export')) {
    //         addParam = {btnExport:1};
    //     }
        
    //     console.log('formxxxxxxxxxxxx', $( form ).serialize() );
    //     checkLoading();
    //     $(form)
    //       .ajaxForm({
    //         target: classLoading,
    //         headers: { "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content") },
    //         delegation: true,
    //         dataType: "text",
    //         data: addParam,
    //         success: function(result) {
    //           if (urlReload) {
    //             reload(classReload, urlReload);
    //           } else {
    //             if ($(".bs-modal-lg").attr("style") && $(".bs-modal-lg").attr("style") != "display: none;") {
    //               $(".bs-modal-lg").modal("toggle");
    //             }
    //             reload();
    //           }
    //           checkLoading();
    //         }
    //       })
    //       .submit();
    // });
});