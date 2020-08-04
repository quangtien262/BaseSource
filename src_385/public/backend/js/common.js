var loading = '<div class="loader-inner ball-pulse"><div></div><div></div><div></div></div>';
// alert(document.URL);
function checkLoading() {
  load = $("#_loading");
  if (load.hasClass("_hidden")) {
    load.removeClass("_hidden");
  } else {
    load.addClass("_hidden");
  }
}

function loadDataPopup(url, param = "") {
  checkLoading();
  url += "?popup=1" + param;
  $.ajax({
    type: "get",
    url: url,
    success: function(data) {
      checkLoading();
      $(".popup-content").html(data);
    }
  });
}

function submitForm(classLoading, classForm, classReload) {
  $(classLoading).html(loading);
  $(classForm)
    .ajaxForm({
      target: classLoading,
      delegation: true,
      dataType: 'script',
      success: function(result) {
        var data = $.parseJSON(result);
        if (data[0] === 'success') {
          if (data[1] == 'reload') {
            location.reload();
          } else {
            console.log(data[1]);
            $(classLoading).html(data[1]);
          }
          //$('#myModal').modal('hide');
        } else {
          $(classLoading).html(data[1]);
        }
      },
    })
    .submit();
}

function ajaxSubmitForm(
  classLoading = "#main-sub-content",
  classForm = ".form-ajax",
  classReload = "#main-sub-content",
  urlReload = "",
  addParam = {}
) {
  checkLoading();
  $(classForm)
    .ajaxForm({
      target: classLoading,
      headers: { "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content") },
      delegation: true,
      dataType: "text",
      data: addParam,
      success: function(result) {
        if (urlReload) {
          location.reload();
          // reload(classReload, urlReload);
        } else {
          if ($(".bs-modal-lg").attr("style") && $(".bs-modal-lg").attr("style") != "display: none;") {
            $(".bs-modal-lg").modal("toggle");
          }
          reload();
        }
        checkLoading();
      }
    })
    .submit();
}

function reload(url = "", classLoad = "#main-sub-content", showLoading = true) {
  if (!$(classLoad).length) {
    return;
  }
  if (showLoading) {
    checkLoading();
  }

  if (!url) {
    url = document.URL;
  }
  $.ajax({
    url: url,
    data: {
      reload: 1
    },
    success: function(data) {
      $(classLoad).html(data);
      // checkLoading();
      $("#_loading").addClass("_hidden");
    }
  });
}

function updateSoftOrder(tname) {
  $(".status-update").html(loading);
  $.ajax({
    type: "get",
    url: "/admin/update-sort-order",
    data: {
      json: $("#nestable-output").html(),
      tname: tname
    },
    success: function(data) {
      $(".status-update").html(data);
    }
  });
}

function deleteRow(deleteAPI, urlReload, classReload) {
  swal(
    {
      title: "Are you sure?",
      text: "You will not be able to recover this item",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    },
    function() {
      $.ajax({
        type: "get",
        url: deleteAPI,
        success: function(data) {
          if (data === "success") {
            if (!classReload) {
              classReload = "#nestable";
            }
            swal("Deleted!", "Your category has been deleted.", "success");
            reload(urlReload, classReload);
          }
        }
      });
    }
  );
}

function loadPopupLarge(url) {
  // $('.popup-content').html(loading);
  checkLoading();
  $.ajax({
    type: "get",
    url: url,
    success: function(data) {
      checkLoading();
      $(".popup-content").html(data);
    }
  });
}

function editCategory() {
  $(".edit-category-result").html(loading);
  checkLoading();
  $(".category-form")
    .ajaxForm({
      target: ".edit-category-result",
      success: function(data) {
        checkLoading();
        //            loadContent('#nestable', '/admin/category/content-lst-cate');
        location.reload();
        $(".bs-modal-lg").modal("toggle");
      }
    })
    .submit();
}

function loadContent(classLoad, url) {
  $(classLoad).html(loading);
  checkLoading();
  $.ajax({
    url: url,
    success: function(data) {
      checkLoading();
      $(classLoad).html(data);
    }
  });
}

function addHtml(typeElement, classCopy, classPaste) {
  if (typeElement === "form") {
    $(classPaste).html($(classCopy).html());
  } else {
    $(classPaste).html($(classCopy).html());
  }
}

function addHtml2Editor(classCopy, classEditor) {
  $(".main-editor").html("");
  $(".main-editor").html('<textarea class="summernote" name="footer"> ' + $(classCopy).html() + " </textarea>");
  $(".summernote").each(function() {
    $(this).summernote({
      height: 380
    });
  });
  $(classEditor).val("");
}

function deleteRow(deleteAPI, urlReload, classReload) {
  swal(
    {
      title: "Bạn chắc chắn xóa item này?",
      text: "Item này sẽ bị xóa hoàn toàn, bạn sẽ không thể backup lại!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Xóa",
      closeOnConfirm: false
    },
    function() {
      $.ajax({
        type: "get",
        url: deleteAPI,
        success: function(data) {
          if (data === "success") {
            swal("Deleted!", "Xóa data thành công.", "success");
            location.reload();
          }
        }
      });
    }
  );
}

function YNconfirm(url, msg) {
  if (window.confirm(msg)) {
    redirectUrl(url);
    return true;
  } else {
    return false;
  }
}

function changeStt(_this, id) {
  var classLoad = "#result-" + id;
  $(classLoad).html(loading);
  checkLoading();
  $.ajax({
    url: "/admin/update-stt",
    data: {
      id: id,
      sortOrder: $(_this).val()
    },
    success: function(data) {
      checkLoading();
      $(classLoad).html('<span style="color:#23c85e;font-weight:normal">Success</span>');
      setTimeout(function() {
        $(classLoad).fadeOut("fast");
      }, 3000); // <-- time in milliseconds
    }
  });
}

function deleteImage(_this) {
  $(_this)
    .parent(".item-images")
    .remove();
}

function addNewTab() {
  const tabIndex = +$("#tabIndex").val();
  const nextIndex = tabIndex + 1;
  $("#tabIndex").val(nextIndex);
  const content = $("#tab-1").html();
  $("#myTabContent").append(
    '<div class="tab-pane fade" id="tab-' +
      nextIndex +
      '" role="tabpanel" aria-labelledby="profile-tab">' +
      content +
      "</div>"
  );
  $("#tab-" + nextIndex + " input").val("");
  $("#tab-" + nextIndex + " textarea").html("");
  $("#tab-" + nextIndex + " img").attr("src", "");
  $("#tab-" + nextIndex + " .btn-thumbnail-block").attr("data-input", "thumbnail-block-" + nextIndex);
  $("#tab-" + nextIndex + " .btn-thumbnail-block").attr("data-preview", "holder-block-" + nextIndex);
  $("#tab-" + nextIndex + " .input-thumbnail-block").attr("id", "thumbnail-block-" + nextIndex);
  $("#tab-" + nextIndex + " .holder-block").attr("id", "holder-block-" + nextIndex);
  $("#myTabs").append(
    '<li role="presentation">' +
      '<a onclick="openTab(this)" id="profile-tab" href="#tab-' +
      nextIndex +
      '" role="tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">Tab ' +
      nextIndex +
      "</a>" +
      "</li>"
  );
  let route_prefix = "/laravel-filemanager"; //laravel-filemanager

  (function($) {
    $.fn.filemanager = function(type, options) {
      type = type || "file";

      this.on("click", function(e) {
        let route_prefix = options && options.prefix ? options.prefix : "/laravel-filemanager";
        localStorage.setItem("target_input", $(this).data("input"));
        localStorage.setItem("target_preview", $(this).data("preview"));
        window.open(route_prefix + "?type=" + type, "FileManager", "width=900,height=600");
        window.SetUrl = function(url, file_path) {
          //set the value of the desired input to image url
          let target_input = $("#" + localStorage.getItem("target_input"));
          target_input.val(file_path).trigger("change");

          //set or change the preview image src
          let target_preview = $("#" + localStorage.getItem("target_preview"));
          target_preview.attr("src", url).trigger("change");
        };
        return false;
      });
    };
  })(jQuery);

  $(".lfm").filemanager("image", { prefix: route_prefix });
}

function openTab(e) {
  let href = $(e).attr("href");
  $(".tab-pane").hide();
  $(href).show();
}

function chooseAvatar(_this) {
  $(".hidden-avatar").val("0");
  $(_this)
    .children(".hidden-avatar")
    .val("1");
}

function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    // reader.onerror = reject;
    // reader.readAsArrayBuffer(file);
    reader.readAsDataURL(file);
  });
}

async function processFile(file) {
  try {
    let arrayBuffer = await readFileAsync(file);
    return arrayBuffer;
  } catch (err) {
    console.log(err);
  }
}

function updateMultipleImages(_this) {
  const dataId = $(_this).attr("data-id");
  const tblId = $(_this).attr("tbl-id");
  const fileType = $(_this).attr("file-type");
  var files = _this.files;
  var data = [];
  loading = true;
  console.log("start");
  checkLoading();
  $.each(files, function(index, file) {
    console.log(index + 1, files.length);
    if (files.length == index + 1) {
      console.log(index + 1, files.length);
      loading = false;
    }
    readFileAsync(file).then(contentBuffer => {
      uploadBase64(contentBuffer, tblId, dataId, fileType, loading);
    });
  });
}

function uploadBase64(base64, tblId, dataId, fileType = "image", loading = true) {
  $.ajax({
    headers: { "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content") },
    url: "/file/upload",
    type: "post",
    data: {
      fileType: fileType,
      type: "base64",
      file: base64,
      tblId: tblId,
      dataId: dataId
    },
    success: function(result) {
      console.log("result", result);
      if (!loading) {
        console.log("endloading");
        reload();
        $("#_loading").addClass("_hidden");
      }
      return true;
    },
    error: function(e) {
      console.log("e", e);
      $("#_loading").addClass("_hidden");
    }
  });
}

function updateInput(e) {
  const input = $(e);
  const type = input.attr('type');
  $.ajax({
    headers: { "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content") },
    url: '/tbl/update-current-row/' + input.attr('name') + '/' + input.attr('table-id') + '/' + input.attr('data-id'),
    type: "post",
    data: {
      value: input.val(),
    },
    success: function(result) {
      if(type && type == 'select') {
        if(input.val() === '0') {
          $(input.attr('element-update')).html('empty');
        } else {
          $(input.attr('element-update')).html(input.children("option:selected").text());
        }
      } else {
        $(input.attr('element-update')).html(input.val());
      }
      // $(input).notify('Lưu Thành công', 'success');
      $.notify('Lưu Thành công', 'success');
    },
    error: function(e) {
      $(input).notify('Lưu Thất bại, vui lòng refresh lại trình duyệt và thử lại', 'error');
      $("#_loading").addClass("_hidden");
    }
  });
}

function checkFastEdit(e) {
  const checkbox = $(e);
  if(checkbox.prop("checked") == true) {
      $('.input-fast-edit').show();
      $('.editable').hide();
  } else if(checkbox.prop("checked") == false) {
      $('.input-fast-edit').hide();
      $('.editable').show();
  }
}

function checkConfirm(msg) {
	if (!confirm(msg)) {
    return false;
  }
}

// load-value-type
function loadValueType(_this) {
  checkLoading();
	$.ajax({
    url: "/admin/load-input-by-col/" + $(_this).val(),
    success: function(data) {
      checkLoading();
      $('.load-value-type').html(data);
    }
  });
}