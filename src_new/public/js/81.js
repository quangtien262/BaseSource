webpackJsonp([81],{

/***/ 1316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("40285ef3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08f5206e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vscroll.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08f5206e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vscroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1317:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.valid_align[data-v-08f5206e] {\r\n    height: 35px\n}\npre[data-v-08f5206e] {\r\n    display: block;\r\n    padding: 9.5px;\r\n    margin: 0 0 10px;\r\n    font-size: 13px;\r\n    line-height: 1.42857;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue__);
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
    name: "vscroll_demo",
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue___default.a
    },
    data: function data() {
        return {
            bar_color: "#428bca",
            height: "300px",
            bar_width: "10px",
            visible: false
        };
    },

    methods: {
        scrolltotop: function scrolltotop() {
            this.$refs.scroll.scrolltotop();
        },
        scrolltobottom: function scrolltobottom() {
            this.$refs.scroll.scrolltobottom();
        }
    }
});

/***/ }),

/***/ 1319:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        {
          staticClass: "bg-default-card",
          attrs: { header: "vscroll", "header-tag": "h4" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("p", [_vm._v("Available props")]),
              _vm._v(" "),
              _c("pre", [
                _vm._v(
                  '"Height","min-height","max-height","color","bar-width","alwaysvisible"'
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Bar Color (Any valid css color)")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bar_color,
                      expression: "bar_color"
                    }
                  ],
                  staticClass: "form-control valid_align",
                  attrs: { type: "color", placeholder: "Any valid css color" },
                  domProps: { value: _vm.bar_color },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.bar_color = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Height")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.height,
                      expression: "height"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Height of container" },
                  domProps: { value: _vm.height },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.height = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Bar Width")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bar_width,
                      expression: "bar_width"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "width of bar" },
                  domProps: { value: _vm.bar_width },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.bar_width = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 mt-5 mb-4" }, [
              _c("div", [
                _c("label", { staticClass: "custom-control custom-checkbox" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.visible,
                        expression: "visible"
                      }
                    ],
                    staticClass: "custom-control-input",
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.visible)
                        ? _vm._i(_vm.visible, null) > -1
                        : _vm.visible
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.visible,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.visible = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.visible = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.visible = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass:
                      "custom-control-indicator custom_checkbox_primary"
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "custom-control-description" }, [
                    _vm._v("Always visible")
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-scroll",
            {
              ref: "scroll",
              attrs: {
                height: _vm.height,
                color: _vm.bar_color,
                "max-height": "100%",
                "min-height": "120px",
                "bar-width": _vm.bar_width,
                alwaysvisible: _vm.visible
              }
            },
            [
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "text-center mt-4 mb-3" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: { click: _vm.scrolltotop }
              },
              [_vm._v("Scroll to top")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: { click: _vm.scrolltobottom }
              },
              [_vm._v("Scroll to bottom")]
            )
          ])
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-08f5206e", module.exports)
  }
}

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1316)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1318)
/* template */
var __vue_template__ = __webpack_require__(1319)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08f5206e"
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
Component.options.__file = "resources\\assets\\components\\pages\\vscroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08f5206e", Component.options)
  } else {
    hotAPI.reload("data-v-08f5206e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(816)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(818)
/* template */
var __vue_template__ = __webpack_require__(819)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources\\assets\\components\\plugins\\scroll\\vScroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-367359e2", Component.options)
  } else {
    hotAPI.reload("data-v-367359e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(817);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("4fb4bea6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-367359e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-367359e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.ss-wrapper {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    z-index: 1;\r\n    float: left;\n}\n.ss-content {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0 18px 0 0;\r\n    position: relative;\r\n    right: -18px;\r\n    overflow: auto;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\n}\n.ss-scroll {\r\n    position: relative;\r\n    background: rgba(0, 0, 0, 0.1);\r\n    width: 9px;\r\n    border-radius: 4px;\r\n    top: 0;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    -webkit-transition: opacity 0.25s linear;\r\n    transition: opacity 0.25s linear;\n}\n.ss-hidden {\r\n    display: none;\n}\n.ss-container:hover .ss-scroll,\r\n.ss-scroll.ss-grabbed,\r\n.ss-scroll.visible {\r\n    opacity: 1;\n}\n.ss-grabbed {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 818:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        height: null,
        minHeight: null,
        maxHeight: null,
        color: null,
        barWidth: null,
        alwaysvisible: Boolean
    },
    mounted: function mounted() {
        this.dragDealer();
        this.moveBar();
    },
    data: function data() {
        return {
            scrollRatio: 0,
            grabbed: false
        };
    },

    methods: {
        // Mouse drag handler
        dragDealer: function dragDealer() {
            var _this = this;

            var t = this;
            var lastPageY;
            this.$refs.bar.addEventListener('mousedown', function (e) {
                lastPageY = e.pageY;
                _this.grabbed = true;
                document.body.classList.add('ss-grabbed');
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stop);
                return false;

                function drag(e) {
                    var delta = e.pageY - lastPageY;
                    lastPageY = e.pageY;
                    t.$refs.content.scrollTop += delta / t.scrollRatio;
                }

                function stop() {
                    t.grabbed = false;
                    document.body.classList.remove('ss-grabbed');
                    document.removeEventListener('mousemove', drag);
                    document.removeEventListener('mouseup', stop);
                }
            });
        },
        moveBar: function moveBar() {
            var content = this.$refs.content;
            var bar = this.$refs.bar;
            var totalHeight = content.scrollHeight,
                ownHeight = content.clientHeight;
            this.scrollRatio = ownHeight / totalHeight;
            // Hide scrollbar if no scrolling is possible
            if (this.scrollRatio >= 1) {
                bar.classList.add('ss-hidden');
            } else {
                bar.classList.remove('ss-hidden');
                bar.style.cssText = 'height:' + this.scrollRatio * 100 + '%; top:' + content.scrollTop / totalHeight * 100 + '%;right:-' + (this.$refs.vscroll.clientWidth - bar.clientWidth) + 'px;background-color:' + this.color + ';width:' + this.barWidth;
            }
        },
        scrolltotop: function scrolltotop() {
            this.$refs.content.scrollTop = 0;
        },
        scrolltobottom: function scrolltobottom() {
            this.$refs.content.scrollTop = this.$refs.content.scrollHeight;
        }
    }
});

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "vscroll",
      staticClass: "ss-container",
      style: {
        height: _vm.height,
        "min-height": _vm.minHeight,
        "max-height": _vm.maxHeight
      }
    },
    [
      _c("div", { ref: "wrapper", staticClass: "ss-wrapper" }, [
        _c(
          "div",
          {
            ref: "content",
            staticClass: "ss-content",
            on: { scroll: _vm.moveBar, mouseenter: _vm.moveBar }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", {
        ref: "bar",
        staticClass: "ss-scroll",
        class: { "ss-grabbed": _vm.grabbed, visible: _vm.alwaysvisible }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-367359e2", module.exports)
  }
}

/***/ })

});