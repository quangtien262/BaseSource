webpackJsonp([86],{

/***/ 1322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1323);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("790c9810", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e99c4c8\",\"scoped\":false,\"hasInlineConfig\":true}!./wenk.css", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e99c4c8\",\"scoped\":false,\"hasInlineConfig\":true}!./wenk.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n[data-wenk]{position:relative\n}\n[data-wenk]:after{position:absolute;font-size:13px;border-radius:.4rem;content:attr(data-wenk);padding:.8rem;background-color:hsla(0,0%,7%,.8);-webkit-box-shadow:0 0 14px rgba(0,0,0,.1);box-shadow:0 0 14px rgba(0,0,0,.1);color:#fff;line-height:20px;line-height:1.25rem;text-align:left;z-index:1;pointer-events:none;display:block;opacity:0;visibility:hidden;-webkit-transition:all .3s;transition:all .3s;bottom:100%;left:50%;-webkit-transform:translate(-50%,10px);transform:translate(-50%,10px);white-space:pre;width:auto\n}\n[data-wenk]:hover{overflow:visible\n}\n[data-wenk]:hover:after{display:block;opacity:1;visibility:visible;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)\n}\n[data-wenk].wenk--bottom:after,[data-wenk][data-wenk-pos=bottom]:after{bottom:auto;top:100%;left:50%;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)\n}\n[data-wenk].wenk--bottom:hover:after,[data-wenk][data-wenk-pos=bottom]:hover:after{-webkit-transform:translate(-50%,10px);transform:translate(-50%,10px)\n}\n[data-wenk].wenk--left:after,[data-wenk][data-wenk-pos=left]:after{bottom:auto;left:auto;top:50%;right:100%;-webkit-transform:translate(10px,-50%);transform:translate(10px,-50%)\n}\n[data-wenk].wenk--left:hover:after,[data-wenk][data-wenk-pos=left]:hover:after{-webkit-transform:translate(-10px,-50%);transform:translate(-10px,-50%)\n}\n[data-wenk].wenk--right:after,[data-wenk][data-wenk-pos=right]:after{bottom:auto;top:50%;left:100%;-webkit-transform:translate(-10px,-50%);transform:translate(-10px,-50%)\n}\n[data-wenk].wenk--right:hover:after,[data-wenk][data-wenk-pos=right]:hover:after{-webkit-transform:translate(10px,-50%);transform:translate(10px,-50%)\n}\n[data-wenk].wenk-length--small:after,[data-wenk][data-wenk-length=small]:after{white-space:normal;width:80px\n}\n[data-wenk].wenk-length--medium:after,[data-wenk][data-wenk-length=medium]:after{white-space:normal;width:150px\n}\n[data-wenk].wenk-length--large:after,[data-wenk][data-wenk-length=large]:after{white-space:normal;width:260px\n}\n[data-wenk].wenk-length--fit:after,[data-wenk][data-wenk-length=fit]:after{white-space:normal;width:100%\n}\n[data-wenk].wenk-align--right:after,[data-wenk][data-wenk-align=right]:after{text-align:right\n}\n[data-wenk].wenk-align--center:after,[data-wenk][data-wenk-align=center]:after{text-align:center\n}\n[data-wenk=\"\"]:after{visibility:hidden!important\n}", ""]);

// exports


/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1325);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("3aa1b9f8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e99c4c8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./ui_elements.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e99c4c8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./ui_elements.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.wenkborder[data-v-5e99c4c8] {\r\n    border: 1px solid #ccc;\r\n    padding: 3px 12px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    cursor: default;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 1326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            placements: ['top', 'right', 'left', 'bottom'],
            color: ['primary', 'danger', 'success', 'warning'],
            currentPage: 2,
            currentPage2: 4,
            currentpage3: 5,
            items1: [{
                text: 'Home',
                link: '#'
            }, {
                text: 'Manage',
                link: '#'
            }, {
                text: 'picker',
                active: true
            }],
            items2: [{
                text: 'Dashboard',
                link: '#'
            }, {
                text: 'Tables',
                link: '#'
            }, {
                text: 'Data tables',
                active: true
            }],
            items3: [{
                text: 'Dashboard',
                link: '#'
            }, {
                text: 'Charts',
                link: '#'
            }, {
                text: 'Float Charts',
                active: true
            }],
            progress1counter1: 10,
            progress1counter2: 30,
            progress1counter3: 45,
            progress1counter4: 50,
            progress1counter5: 80,
            progress2counter1: 20,
            progress2counter2: 40,
            progress2counter3: 60,
            progress2counter4: 75,
            progress2counter5: 90,
            showDismissibleAlert: true
        };
    },

    methods: {}

});

/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ui_font_family" },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-info-card",
                attrs: { header: "Breadcrumb", "header-tag": "h4" }
              },
              [
                _c("b-breadcrumb", {
                  staticClass: "breadcrumb1",
                  attrs: { items: _vm.items1 }
                }),
                _vm._v(" "),
                _c("b-breadcrumb", {
                  staticClass: "breadcrumb2",
                  attrs: { items: _vm.items2 }
                }),
                _vm._v(" "),
                _c("b-breadcrumb", {
                  staticClass: "breadcrumb3",
                  attrs: { items: _vm.items3 }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-warning-card",
                attrs: { header: "Pagination", "header-tag": "h4" }
              },
              [
                _c("b-pagination", {
                  attrs: { size: "sm", "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("b-pagination", {
                  staticClass: "mt-4",
                  attrs: {
                    size: "md",
                    "total-rows": 100,
                    variant: "primary",
                    "secondary-variant": "success",
                    "per-page": 10
                  },
                  model: {
                    value: _vm.currentPage2,
                    callback: function($$v) {
                      _vm.currentPage2 = $$v
                    },
                    expression: "currentPage2"
                  }
                }),
                _vm._v(" "),
                _c("b-pagination", {
                  staticClass: "mt-4",
                  attrs: { size: "lg", "total-rows": 100, "per-page": 5 },
                  model: {
                    value: _vm.currentpage3,
                    callback: function($$v) {
                      _vm.currentpage3 = $$v
                    },
                    expression: "currentpage3"
                  }
                }),
                _vm._v(" "),
                _c("br")
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-success-card",
                attrs: { header: "Wenk Tool Tips", "header-tag": "h4" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-4 text-center" }, [
                    _c("h4", [_vm._v("Tool tips different positions!")]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass: "wenkborder mt-3",
                          attrs: { "data-wenk": "Top" }
                        },
                        [_vm._v("Tool tip to the top!")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass: "wenkborder",
                          attrs: {
                            "data-wenk": "Right",
                            "data-wenk-pos": "right"
                          }
                        },
                        [_vm._v("Tool tip right")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass: "wenkborder",
                          attrs: {
                            "data-wenk": "Left",
                            "data-wenk-pos": "left"
                          }
                        },
                        [_vm._v("Tool tip  to the left!")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass: "wenkborder",
                          attrs: {
                            "data-wenk": " Bottom",
                            "data-wenk-pos": "bottom"
                          }
                        },
                        [_vm._v("Tool tip to the bottom!")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 text-center" }, [
                    _c("h4", [_vm._v("Tool tips different widths!")]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass: "wenk-length--small wenkborder mt-3",
                          attrs: { "data-wenk": "I'm small!" }
                        },
                        [_vm._v("Small Tool Tip!")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass: "wenk-length--medium wenkborder",
                          attrs: { "data-wenk": "I'm medium!" }
                        },
                        [_vm._v("Medium Tool Tip!")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass: "wenk-length--large wenkborder",
                          attrs: { "data-wenk": "I'm large!" }
                        },
                        [_vm._v("Large Tool Tip!")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass: "wenk-length--fit wenkborder",
                          attrs: { "data-wenk": "I fit!" }
                        },
                        [_vm._v("I fit just right!")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 text-center" }, [
                    _c("h4", [_vm._v("Tool tips  alignments!")]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass:
                            "wenk-align--left wenk-length--large wenkborder mt-3",
                          attrs: { "data-wenk": "I'm left!" }
                        },
                        [_vm._v("Left Tool Tip!")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass:
                            " wenk-align--right wenk-length--large wenkborder",
                          attrs: { "data-wenk": "I'm right!" }
                        },
                        [_vm._v("Right Tool Tip!")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass:
                            "wenk-align--center wenk-length--large wenkborder",
                          attrs: { "data-wenk": "I'm center!" }
                        },
                        [_vm._v("Center Tool Tip!")]
                      )
                    ])
                  ])
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-primary-card",
                attrs: { header: "Progressbars", "header-tag": "h4" }
              },
              [
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "primary", "hide-value": "" },
                  model: {
                    value: _vm.progress1counter1,
                    callback: function($$v) {
                      _vm.progress1counter1 = $$v
                    },
                    expression: "progress1counter1"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "info", "hide-value": "" },
                  model: {
                    value: _vm.progress1counter2,
                    callback: function($$v) {
                      _vm.progress1counter2 = $$v
                    },
                    expression: "progress1counter2"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "danger", "hide-value": "" },
                  model: {
                    value: _vm.progress1counter3,
                    callback: function($$v) {
                      _vm.progress1counter3 = $$v
                    },
                    expression: "progress1counter3"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "warning", "hide-value": "" },
                  model: {
                    value: _vm.progress1counter4,
                    callback: function($$v) {
                      _vm.progress1counter4 = $$v
                    },
                    expression: "progress1counter4"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "success", "hide-value": "" },
                  model: {
                    value: _vm.progress1counter5,
                    callback: function($$v) {
                      _vm.progress1counter5 = $$v
                    },
                    expression: "progress1counter5"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-info-card",
                attrs: { header: "Progressbar With Labels", "header-tag": "h4" }
              },
              [
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "primary", "show-value": "" },
                  model: {
                    value: _vm.progress1counter1,
                    callback: function($$v) {
                      _vm.progress1counter1 = $$v
                    },
                    expression: "progress1counter1"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "info", "show-value": "" },
                  model: {
                    value: _vm.progress1counter2,
                    callback: function($$v) {
                      _vm.progress1counter2 = $$v
                    },
                    expression: "progress1counter2"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "danger", "show-progress": "" },
                  model: {
                    value: _vm.progress1counter3,
                    callback: function($$v) {
                      _vm.progress1counter3 = $$v
                    },
                    expression: "progress1counter3"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "warning", "show-progress": "" },
                  model: {
                    value: _vm.progress1counter4,
                    callback: function($$v) {
                      _vm.progress1counter4 = $$v
                    },
                    expression: "progress1counter4"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "success", "show-progress": "" },
                  model: {
                    value: _vm.progress1counter5,
                    callback: function($$v) {
                      _vm.progress1counter5 = $$v
                    },
                    expression: "progress1counter5"
                  }
                })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-success-card",
                attrs: { header: "Animated Progressbars", "header-tag": "h4" }
              },
              [
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "primary", "hide-value": "", animated: "" },
                  model: {
                    value: _vm.progress2counter1,
                    callback: function($$v) {
                      _vm.progress2counter1 = $$v
                    },
                    expression: "progress2counter1"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "info", "hide-progress": "", animated: "" },
                  model: {
                    value: _vm.progress2counter2,
                    callback: function($$v) {
                      _vm.progress2counter2 = $$v
                    },
                    expression: "progress2counter2"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: {
                    variant: "danger",
                    "hide-progress": "",
                    animated: ""
                  },
                  model: {
                    value: _vm.progress2counter3,
                    callback: function($$v) {
                      _vm.progress2counter3 = $$v
                    },
                    expression: "progress2counter3"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: {
                    variant: "warning",
                    "hide-progress": "",
                    animated: ""
                  },
                  model: {
                    value: _vm.progress2counter4,
                    callback: function($$v) {
                      _vm.progress2counter4 = $$v
                    },
                    expression: "progress2counter4"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: {
                    variant: "success",
                    "hide-progress": "",
                    animated: ""
                  },
                  model: {
                    value: _vm.progress2counter5,
                    callback: function($$v) {
                      _vm.progress2counter5 = $$v
                    },
                    expression: "progress2counter5"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-danger-card",
                attrs: { header: "Striped  With Labels", "header-tag": "h4" }
              },
              [
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "primary", "show-value": "", striped: "" },
                  model: {
                    value: _vm.progress2counter1,
                    callback: function($$v) {
                      _vm.progress2counter1 = $$v
                    },
                    expression: "progress2counter1"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: { variant: "info", "show-value": "", striped: "" },
                  model: {
                    value: _vm.progress2counter2,
                    callback: function($$v) {
                      _vm.progress2counter2 = $$v
                    },
                    expression: "progress2counter2"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: {
                    variant: "danger",
                    "show-progress": "",
                    striped: ""
                  },
                  model: {
                    value: _vm.progress2counter3,
                    callback: function($$v) {
                      _vm.progress2counter3 = $$v
                    },
                    expression: "progress2counter3"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: {
                    variant: "warning",
                    "show-progress": "",
                    striped: ""
                  },
                  model: {
                    value: _vm.progress2counter4,
                    callback: function($$v) {
                      _vm.progress2counter4 = $$v
                    },
                    expression: "progress2counter4"
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-4",
                  attrs: {
                    variant: "success",
                    "show-progress": "",
                    striped: ""
                  },
                  model: {
                    value: _vm.progress2counter5,
                    callback: function($$v) {
                      _vm.progress2counter5 = $$v
                    },
                    expression: "progress2counter5"
                  }
                })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row " }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-warning-card",
                attrs: { header: "Alerts", "header-tag": "h4" }
              },
              [
                _c("b-alert", { attrs: { variant: "info", show: "" } }, [
                  _vm._v("\n                    Info Alert\n                ")
                ]),
                _vm._v(" "),
                _c("b-alert", { attrs: { variant: "danger", show: "" } }, [
                  _vm._v("\n                    Danger Alert\n                ")
                ]),
                _vm._v(" "),
                _c("b-alert", { attrs: { variant: "warning", show: "" } }, [
                  _vm._v(
                    "\n                    Warning Alert\n                "
                  )
                ]),
                _vm._v(" "),
                _c("b-alert", { attrs: { variant: "success", show: "" } }, [
                  _vm._v(
                    "\n                    Success Alert\n                "
                  )
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-primary-card",
                attrs: { header: "Dismissible Alerts", "header-tag": "h4" }
              },
              [
                _c(
                  "b-alert",
                  {
                    attrs: {
                      variant: "danger",
                      dismissible: "",
                      show: _vm.showDismissibleAlert
                    },
                    on: {
                      dismissed: function($event) {
                        _vm.showDismissibleAlert = false
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    Dismissible Alert!\n                "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticClass: "bg-info-card",
                attrs: { header: "Tool Tips", "header-tag": "h4" }
              },
              [
                _c("div", { staticClass: "row text-center" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-3 mt-3 mb-3" },
                    [
                      _c(
                        "b-btn",
                        {
                          directives: [
                            {
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.top",
                              modifiers: { hover: true, top: true }
                            }
                          ],
                          attrs: { title: "hi", variant: "outline-primary" }
                        },
                        [_vm._v("Top")]
                      ),
                      _vm._v(" "),
                      _c("b-tooltip", {
                        staticClass: "d-block",
                        attrs: { content: "bottom", placement: "bottom" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-3 mt-3 mb-3" },
                    [
                      _c(
                        "b-btn",
                        {
                          directives: [
                            {
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.bottom",
                              modifiers: { hover: true, bottom: true }
                            }
                          ],
                          attrs: {
                            title: "hi",
                            variant: "outline-info",
                            id: "bt1"
                          }
                        },
                        [_vm._v("bottom")]
                      ),
                      _vm._v(" "),
                      _c("b-tooltip", {
                        staticClass: "d-block",
                        attrs: {
                          content: "bottom",
                          placement: "bottom",
                          target: "bt1"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-3 mt-3 mb-3" },
                    [
                      _c(
                        "b-btn",
                        {
                          directives: [
                            {
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.left",
                              modifiers: { hover: true, left: true }
                            }
                          ],
                          attrs: {
                            title: "hi",
                            variant: "outline-success",
                            id: "bt1"
                          }
                        },
                        [_vm._v("left")]
                      ),
                      _vm._v(" "),
                      _c("b-tooltip", {
                        staticClass: "d-block",
                        attrs: {
                          content: "bottom",
                          placement: "bottom",
                          target: "bt1"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-3 mt-3 mb-3" },
                    [
                      _c(
                        "b-btn",
                        {
                          directives: [
                            {
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.right",
                              modifiers: { hover: true, right: true }
                            }
                          ],
                          attrs: { title: "hi", variant: "outline-danger" }
                        },
                        [_vm._v("right")]
                      ),
                      _vm._v(" "),
                      _c("b-tooltip", { staticClass: "d-block" })
                    ],
                    1
                  )
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-card",
        {
          staticClass: "bg-primary-card",
          attrs: { header: "Popovers", "header-tag": "h4" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-4" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "mt-1 bg-warning-card",
                    attrs: { header: "Placement", "header-tag": "h4" }
                  },
                  _vm._l(_vm.placements, function(placement, index) {
                    return _c(
                      "b-col",
                      {
                        key: index,
                        staticClass: "py-4 text-center",
                        attrs: { md: "10" }
                      },
                      [
                        _c(
                          "b-btn",
                          {
                            staticClass: "text-white",
                            attrs: {
                              id: "exPopover1-" + placement,
                              variant: _vm.color[index]
                            }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(placement) +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("b-popover", {
                          attrs: {
                            target: "exPopover1-" + placement,
                            placement: placement,
                            title: "Popover!",
                            triggers: "hover focus",
                            content: "Placement " + placement
                          }
                        })
                      ],
                      1
                    )
                  })
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-8" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "bg-success-card",
                    attrs: {
                      header: "Content via properties or Slots",
                      "header-tag": "h4"
                    }
                  },
                  [
                    _c(
                      "b-row",
                      [
                        _c(
                          "b-col",
                          {
                            staticClass: "py-4 text-center",
                            attrs: { md: "6" }
                          },
                          [
                            _c(
                              "b-btn",
                              {
                                staticClass: "text-white",
                                attrs: { id: "exPopover2", variant: "danger" }
                              },
                              [_vm._v("Using properties")]
                            ),
                            _vm._v(" "),
                            _c("b-popover", {
                              attrs: {
                                target: "exPopover2",
                                title: "Prop Examples",
                                triggers: "hover focus",
                                placement: "top",
                                content: "Embedding content"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          {
                            staticClass: "py-4 text-center",
                            attrs: { md: "6" }
                          },
                          [
                            _c(
                              "b-btn",
                              {
                                attrs: { id: "exPopover3", variant: "primary" }
                              },
                              [_vm._v("Using slots")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-popover",
                              {
                                attrs: {
                                  target: "exPopover3",
                                  placement: "top",
                                  triggers: "hover focus"
                                }
                              },
                              [
                                _c("template", { slot: "title" }, [
                                  _vm._v("Content ")
                                ]),
                                _vm._v(
                                  "\n                                Embedding "
                                ),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("using slots")
                                ]),
                                _vm._v(
                                  "\n                                 you\n                            "
                                )
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-col", {
                  staticClass: "py-4 text-center",
                  attrs: { md: "10", in: "", placements: "" }
                }),
                _vm._v(" "),
                _c(
                  "b-card",
                  {
                    staticClass: "mt-5 mb-5",
                    attrs: { header: "Delay", "header-tag": "h4" }
                  },
                  [
                    _c("div", { staticClass: "row mt-5 mb-4" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-4 my-1 text-center " },
                        [
                          _c(
                            "b-btn",
                            {
                              staticClass: "text-white",
                              attrs: { id: "exPopoverxyz", variant: "warning" }
                            },
                            [
                              _vm._v(
                                "\n                                1000ms\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("b-popover", {
                            staticClass: "d-block",
                            attrs: {
                              target: "exPopoverxyz",
                              triggers: "hover",
                              delay: "1000",
                              placement: "top",
                              content: "Sorry, I'm a little sleepy."
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 my-1 text-center" },
                        [
                          _c(
                            "b-btn",
                            { attrs: { id: "exPopover7", variant: "success" } },
                            [_vm._v("1000ms on show")]
                          ),
                          _vm._v(" "),
                          _c("b-popover", {
                            staticClass: "d-block",
                            attrs: {
                              delay: "1000",
                              target: "exPopover7",
                              hide: "0",
                              placement: "top",
                              content: "This will disappear right away!",
                              triggers: "hover"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 my-1 text-center" },
                        [
                          _c(
                            "b-btn",
                            { attrs: { id: "exPopver8", variant: "primary" } },
                            [_vm._v("1000ms on hide")]
                          ),
                          _vm._v(" "),
                          _c("b-popover", {
                            staticClass: "d-block",
                            attrs: {
                              show: false,
                              target: "exPopver8",
                              hide: "1000",
                              placement: "top",
                              content:
                                "This will disappear after a second's delay.",
                              triggers: "hover"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e99c4c8", module.exports)
  }
}

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1322)
  __webpack_require__(1324)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1326)
/* template */
var __vue_template__ = __webpack_require__(1327)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e99c4c8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\components\\pages\\ui_elements.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e99c4c8", Component.options)
  } else {
    hotAPI.reload("data-v-5e99c4c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});