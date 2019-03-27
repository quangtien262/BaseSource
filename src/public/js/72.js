webpackJsonp([72],{

/***/ 1341:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1342);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("998a9fa2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4062f0c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4062f0c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.chat[data-v-4062f0c2] {\n  min-height: calc(100vh - 140px);\n  height: calc(100vh - 140px);\n  overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 1343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_widgets_chat_component_chat_large_vue__ = __webpack_require__(1344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_widgets_chat_component_chat_large_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_widgets_chat_component_chat_large_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_js_chat_data__ = __webpack_require__(943);
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "chat_page",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {
        chat: __WEBPACK_IMPORTED_MODULE_1_components_widgets_chat_component_chat_large_vue___default.a
    },
    // ===component Data properties
    data: function data() {
        return {
            chat: __WEBPACK_IMPORTED_MODULE_2_assets_js_chat_data__["a" /* default */]
        };
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {},

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {}
});

/***/ }),

/***/ 1344:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1345)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1347)
/* template */
var __vue_template__ = __webpack_require__(1348)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f745706"
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
Component.options.__file = "resources\\assets\\components\\widgets\\chat_component\\chat-large.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f745706", Component.options)
  } else {
    hotAPI.reload("data-v-5f745706", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("63fe130f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f745706\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-large.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f745706\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-large.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.desc-img[data-v-5f745706] {\n  height: 40px;\n  width: 40px;\n}\n.chat_block[data-v-5f745706] {\n  border-bottom: 1px solid #f4f2f2;\n}\n.chatalign[data-v-5f745706] {\n  background-color: #fff !important;\n  height: 100%;\n}\n.chatalign ul[data-v-5f745706] {\n    padding: 0;\n}\n.converstion_back[data-v-5f745706] {\n  height: 100%;\n  overflow: hidden;\n  background: #fff !important;\n  border: 1px solid #d8d6d6;\n}\n.converstion_back ul[data-v-5f745706] {\n    padding: 0;\n}\n.converstion_back > .chat_header[data-v-5f745706] {\n    background-color: #7388c6;\n    padding: 4px;\n    font-size: 20px;\n    font-weight: 500;\n}\n.received div p[data-v-5f745706],\n.sent div p[data-v-5f745706] {\n  -webkit-box-shadow: 6px 6px 21px -6px rgba(0, 0, 0, 0.75) !important;\n          box-shadow: 6px 6px 21px -6px rgba(0, 0, 0, 0.75) !important;\n  border-radius: 3px;\n  display: inline-block;\n  padding: 11px 12px;\n  position: relative;\n}\n.sent > div[data-v-5f745706] {\n  text-align: right;\n}\n.sent > div p[data-v-5f745706] {\n    background-color: #fff;\n    border-bottom-right-radius: 25px 35px;\n    border-top-left-radius: 25px 35px;\n}\n.received > div[data-v-5f745706] {\n  text-align: left;\n}\n.received > div > p[data-v-5f745706] {\n    background-color: #dbf2fa;\n    border-bottom-left-radius: 25px 35px;\n    border-top-right-radius: 25px 35px;\n}\n.chat_input[data-v-5f745706] {\n  padding: 5px;\n  border: none;\n  width: 100%;\n  border-top: 1px solid #eee;\n}\n.chat_input[data-v-5f745706]:focus {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n.chat_content[data-v-5f745706] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.send-btn[data-v-5f745706] {\n  border-radius: 0;\n}\n.status-online[data-v-5f745706] {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  background-color: #63c17f;\n  position: relative;\n  top: 40px;\n  left: -8px;\n  border: 2px solid #fff;\n}\n.person_name[data-v-5f745706]:before {\n  content: ' \\25CF';\n  font-size: 21px;\n  position: relative;\n  top: -11px;\n  left: -27px;\n  color: #63c17f;\n}\n.profile[data-v-5f745706] {\n  padding-bottom: 15px;\n  border: none;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #FFFFFF;\n}\n", ""]);

// exports


/***/ }),

/***/ 1347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        list: {
            default: []
        }
    },
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue___default.a
    },
    mounted: function mounted() {},
    data: function data() {
        return {
            newmessage: '',
            selected_user_index: 0
        };
    },

    methods: {
        send_message: function send_message() {
            if (this.newmessage.trim() != "") {
                this.list[this.selected_user_index].messages.push({
                    msg: this.newmessage,
                    from: "me"
                });
                this.newmessage = "";
                this.$refs.message_scroller.scrolltobottom();
            }
        },
        show_chat: function show_chat(user, index) {
            var _this = this;

            this.selected_user_index = index;
            setTimeout(function () {
                _this.$refs.input.focus();
            }, 20);
        }
    }
});

/***/ }),

/***/ 1348:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-sm-4 col-md-4 mt-3" }, [
      _c(
        "div",
        { staticClass: "chatalign" },
        [
          _c(
            "v-scroll",
            { attrs: { height: "100%", color: "#ccc", "bar-width": "3px" } },
            [
              _c(
                "ul",
                _vm._l(_vm.list, function(user, index) {
                  return _c("li", { key: index, staticClass: "chat_block" }, [
                    _c(
                      "a",
                      {
                        attrs: { href: user.user },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.show_chat(user, index)
                          }
                        }
                      },
                      [
                        _c("article", { staticClass: "media" }, [
                          _c("a", { staticClass: "float-left desc-img mt-3" }, [
                            _c("img", {
                              staticClass: "img-fluid rounded-circle",
                              attrs: { src: user.image }
                            })
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "status-online  m-t-10" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "media-body pl-3 mb-1 mt-3 chat_content"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head text-success ",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v(_vm._s(user.user))]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _c("span", [_vm._v(_vm._s(user.status))])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "mt-4 text-muted" }, [
                            _vm._v("12.54")
                          ])
                        ])
                      ]
                    )
                  ])
                })
              )
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-4 col-md-5 mt-3" }, [
      _c(
        "div",
        { staticClass: "converstion_back" },
        [
          _c("div", { staticClass: "chat_header" }, [
            _c("span", { staticClass: "pl-4" }, [
              _c("img", {
                staticClass: "img-fluid rounded-circle desc-img ",
                attrs: { src: _vm.list[_vm.selected_user_index].image }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "pl-3 text-white person_name" }, [
              _vm._v(_vm._s(_vm.list[_vm.selected_user_index].user) + " ")
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-scroll",
            {
              ref: "message_scroller",
              attrs: {
                height: "calc(100% - 79px)",
                color: "#ccc",
                "bar-width": "3px"
              }
            },
            [
              _c(
                "ul",
                _vm._l(_vm.list[_vm.selected_user_index].messages, function(
                  item,
                  index
                ) {
                  return _c(
                    "li",
                    {
                      key: index,
                      class: [
                        { sent: item.from == "me" },
                        { received: item.from !== "me" }
                      ]
                    },
                    [_c("div", [_c("p", [_vm._v(_vm._s(item.msg))])])]
                  )
                })
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "input-group text-field" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newmessage,
                  expression: "newmessage"
                }
              ],
              ref: "input",
              staticClass: "chat_input form-control",
              attrs: { type: "text", placeholder: "New Message" },
              domProps: { value: _vm.newmessage },
              on: {
                keyup: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key)
                  ) {
                    return null
                  }
                  _vm.send_message($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.newmessage = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "input-group-btn" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success send-btn",
                  attrs: { type: "submit" },
                  on: { click: _vm.send_message }
                },
                [
                  _c("i", {
                    staticClass: "fa fa-paper-plane-o text-white",
                    attrs: { "aria-hidden": "true" }
                  })
                ]
              )
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-4 col-md-3 mt-3" }, [
      _c("div", { staticClass: "profile text-center" }, [
        _c("img", {
          staticClass: "rounded-circle img-fluid profile-thumb mb-3",
          attrs: {
            src: _vm.list[_vm.selected_user_index].image,
            alt: "User Image"
          }
        }),
        _vm._v(" "),
        _c("h4", { staticClass: "text-gray" }, [
          _vm._v(_vm._s(_vm.list[_vm.selected_user_index].user))
        ]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.list[_vm.selected_user_index].status))])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f745706", module.exports)
  }
}

/***/ }),

/***/ 1349:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("chat", { staticClass: "chat", attrs: { list: _vm.chat } })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4062f0c2", module.exports)
  }
}

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1341)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1343)
/* template */
var __vue_template__ = __webpack_require__(1349)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4062f0c2"
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
Component.options.__file = "resources\\assets\\components\\pages\\chat.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4062f0c2", Component.options)
  } else {
    hotAPI.reload("data-v-4062f0c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar3.jpg?7e593f7330076b4b89e96f89b9396c0a";

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar2.jpg?2a26dff9723fa354fe9cb39a4f4529e6";

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar4.jpg?25bf7926d4f4c50c95e027395f7019f6";

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

/***/ 812:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar5.jpg?83fc5fdfbe37fb37db7a2fe84cca6d6d";

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

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar.jpg?9ec1314ec47a05d978a1e1568daab7ec";

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var chat = [{
    user: "Rickey",
    image: __webpack_require__(793),
    status: "Lorem ipsum dolor sit ametm  elit.",
    messages: [{
        msg: "Hi",
        from: "me"
    }, {
        msg: "Good Morning",
        from: "me"
    }, {
        msg: "Have a Nice day",
        from: "you"
    }, {
        msg: "Hi ,How are you?",
        from: "me"
    }, {
        msg: " Morning",
        from: "you"
    }, {
        msg: "Have a Nice day",
        from: "me"
    }, {
        msg: "Hi ,How are you?",
        from: "You"
    }, {
        msg: "I am Fine",
        from: "me"
    }, {
        msg: "I am Good",
        from: "you"
    }]
}, {
    user: "Jenny",
    image: __webpack_require__(796),
    status: "Consec  ipsum  adipisicing.Lorem   elit.",
    messages: [{
        msg: "Hi,Good Morning",
        from: "me"
    }, {
        msg: "Have a Nice day",
        from: "you"
    }, {
        msg: "Hi ,How are you?",
        from: "me"
    }, {
        msg: " Morning",
        from: "you"
    }, {
        msg: "Have a Nice day",
        from: "me"
    }, {
        msg: "Hi ,How are you?",
        from: "You"
    }, {
        msg: "I am Fine",
        from: "me"
    }, {
        msg: "I am Good",
        from: "you"
    }]
}, {
    user: "David",
    image: __webpack_require__(790),
    status: "Lorem ipsum dolor ipsum dolor  elit",
    messages: [{
        msg: "Hi",
        from: "me"
    }, {
        msg: "Hello",
        from: "you"
    }, {
        msg: "What Are You Doing",
        from: "me"
    }, {
        msg: "Hello",
        from: "you"
    }, {
        msg: "What Are You Doing",
        from: "me"
    }, {
        msg: "I am Doing Somework",
        from: "you"
    }, {
        msg: "I am Doing Somework",
        from: "me"
    }]
}, {
    user: "Roysingh",
    image: __webpack_require__(812),
    status: "Dolor ipsum amet elitLorem ipsum ",
    messages: [{
        msg: "Hi",
        from: "me"
    }, {
        msg: "Hello",
        from: "you"
    }, {
        msg: "What Are You Doing",
        from: "me"
    }, {
        msg: "I am Doing Somework",
        from: "you"
    }]
}, {
    user: "Shasla",
    image: __webpack_require__(820),
    status: "Dolor ipsum dolor dolor elitLorem ",
    messages: [{
        msg: "Hi",
        from: "me"
    }, {
        msg: "Hello",
        from: "you"
    }, {
        msg: "What Are You Doing",
        from: "you"
    }, {
        msg: "I am Doing Somework",
        from: "me"
    }]
}];

/* harmony default export */ __webpack_exports__["a"] = (chat);

/***/ })

});