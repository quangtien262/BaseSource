webpackJsonp([100],{

/***/ 1267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "cards",
    components: {},
    data: function data() {
        return {
            tabIndex: null,
            tabs: [],
            tabCounter: 0
        };
    },

    methods: {
        closeTab: function closeTab(x) {
            for (var i = 0; i < this.tabs.length; i++) {
                if (this.tabs[i] === x) {
                    this.tabs.splice(i, 1);
                }
            }
        },
        newTab: function newTab() {
            if (this.tabCounter < 4) {
                this.tabs.push(this.tabCounter++);
            }
        }
    }
});

/***/ }),

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "mb-1 mt-4 pt-1 bg-primary",
                attrs: { variant: "primary" }
              },
              [
                _c("h5", { staticClass: "text-white" }, [
                  _vm._v(" Card Primary")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticClass: "mb-1 pt-2 bg-danger",
                attrs: { variant: "danger" }
              },
              [_c("h5", { staticClass: "text-white" }, [_vm._v("Card Danger")])]
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticClass: "mb-1 pt-2 bg-warning",
                attrs: { variant: "warning" }
              },
              [
                _c("h5", { staticClass: "text-white" }, [
                  _vm._v("Card Warning")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticClass: "mb-5 pt-2 bg-success",
                attrs: { variant: "success" }
              },
              [
                _c("h5", { staticClass: "text-white" }, [
                  _vm._v("Card Success")
                ])
              ]
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
                staticClass: " bg-success-card mb-3 mt-4",
                attrs: {
                  header: "Card Header & Footer",
                  "header-tag": "h4",
                  title: "Main Title",
                  "sub-title": "Card subtitle",
                  "show-footer": ""
                }
              },
              [
                _c("p", [
                  _vm._v(
                    "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "mt-2",
                    attrs: { slot: "footer" },
                    slot: "footer"
                  },
                  [
                    _vm._v(
                      "\n                    Last updated 3 mins ago\n                "
                    )
                  ]
                )
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
          { staticClass: "col-lg-12" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-info-card",
                attrs: { header: "Card Alignments", "header-tag": "h4" }
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
                          staticClass: "mb-2 mt-2 bg-primary-card",
                          attrs: {
                            header: "Card Left",
                            "header-tag": "h4",
                            align: "left"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                            "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-4" },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-2 mt-2 bg-danger-card",
                          attrs: {
                            header: "Card center",
                            "header-tag": "h4",
                            align: "center"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Ipsum.\n                            "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-4" },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-2 mt-2 bg-warning-card",
                          attrs: {
                            header: "Card Right",
                            "header-tag": "h4",
                            align: "right"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Ipsum.\n                            "
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
      ]),
      _vm._v(" "),
      _c(
        "b-card",
        {
          staticClass: "bg-danger-card",
          attrs: { "header-tag": "h4", header: "Cards with Different Tabs" }
        },
        [
          _c("div", { staticClass: "row " }, [
            _c(
              "div",
              { staticClass: "col-lg-12" },
              [
                _c(
                  "b-tabs",
                  [
                    _c("b-tab", { attrs: { title: "First tab", active: "" } }, [
                      _c("p", { staticClass: "mt-4" }, [
                        _vm._v(
                          " I'm the first fading tab Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-tab", { attrs: { title: "Second tab" } }, [
                      _c("p", { staticClass: "mt-4" }, [
                        _vm._v(
                          " I'm the Second fading tab Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-tab", { attrs: { title: "Third tab" } }, [
                      _c("p", { staticClass: "mt-4" }, [
                        _vm._v(
                          " I'm the Third fading tab Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                        "
                        )
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12" },
          [
            _c(
              "b-card",
              {
                staticClass: "mb-5 mt-2 bg-info-card",
                attrs: { header: "Cards With Content", "header-tag": "h4" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-5 mt-4",
                          attrs: {
                            header: "Card Header",
                            "header-tag": "h4",
                            title: "Main Title"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                            "
                            )
                          ])
                        ]
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
                          staticClass: "mb-3 mt-4",
                          attrs: { title: "Main Title", "show-footer": "" }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "mt-3",
                              attrs: { slot: "footer" },
                              slot: "footer"
                            },
                            [
                              _vm._v(
                                "\n                    Last updated 3 mins ago\n               "
                              )
                            ]
                          )
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
                staticClass: "mb-5  bg-success-card",
                attrs: {
                  "show-footer": "",
                  header: "Card With image",
                  "header-tag": "h4"
                }
              },
              [
                _c("img", {
                  staticClass: "img-fluid ",
                  attrs: { src: __webpack_require__(933) }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "pt-3",
                    attrs: { slot: "footer" },
                    slot: "footer"
                  },
                  [
                    _vm._v(
                      "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting\n                "
                    )
                  ]
                )
              ]
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
                staticClass: "mb-5 bg-info text-white",
                attrs: {
                  header: "Card",
                  "header-tag": "h4",
                  variant: "info",
                  title: "Main Title"
                }
              },
              [
                _c("p", { staticClass: "text-white" }, [
                  _vm._v(
                    "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-white" }, [
                  _vm._v(
                    "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-white" }, [
                  _vm._v(
                    "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                "
                  )
                ])
              ]
            )
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-2b8f870c", module.exports)
  }
}

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1267)
/* template */
var __vue_template__ = __webpack_require__(1268)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\components\\pages\\card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b8f870c", Component.options)
  } else {
    hotAPI.reload("data-v-2b8f870c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 933:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/headsset.jpg?245c36115c3940ba33b2dfb593d9a40c";

/***/ })

});