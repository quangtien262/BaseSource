webpackJsonp([92],{

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1329);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("97ab334c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32142999\",\"scoped\":true,\"hasInlineConfig\":true}!./custom_typo.css", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32142999\",\"scoped\":true,\"hasInlineConfig\":true}!./custom_typo.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.typo-heading h1[data-v-32142999],\r\n.typo-heading h2[data-v-32142999],\r\n.typo-heading h3[data-v-32142999],\r\n.typo-heading h4[data-v-32142999],\r\n.typo-heading h5[data-v-32142999],\r\n.typo-heading h6[data-v-32142999]{\r\n    color : #777;\n}\n.p-l-25[data-v-32142999] {\r\n    padding-left : 25px;\n}\n.styled-ul[data-v-32142999] {\r\n list-style: disc;\n}\n.styled-ul li ul[data-v-32142999] {\r\n    list-style-type: circle;\n}\n.list-lineheight li[data-v-32142999] {\r\n    line-height: 20px;\n}\nmark[data-v-32142999] {\r\n    background-color: #FFCE56;\n}\nblockquote[data-v-32142999] {\r\n    font-size: 14px;\r\n    background-color: rgba(34, 131, 191, .1);\r\n    border-left: 5px solid rgba(34, 131, 191, .7);\n}\n.blockquote-reverse[data-v-32142999], blockquote.pull-right[data-v-32142999] {\r\n    border-right  : 5px solid rgba(34, 131, 191, .7);\n}\nblockquote footer[data-v-32142999] {\r\n    color: #999;\n}\n@media (min-width: 768px){\n.dl-horizontal dd[data-v-32142999] {\r\n        margin-left: 180px;\n}\n.dl-horizontal dt[data-v-32142999]  {\r\n    float: left;\r\n    width: 160px;\r\n    clear: left;\r\n    text-align: right;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\n}\n}", ""]);

// exports


/***/ }),

/***/ 1330:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "typography",
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-6" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-12" },
            [
              _c(
                "b-card",
                {
                  staticClass: "bg-success-card",
                  attrs: { header: "Headings", "header-tag": "h4" }
                },
                [
                  _c("div", { staticClass: "typo-heading mb-5" }, [
                    _c("h1", [_c("b", [_vm._v(" Heading 1")])]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                      )
                    ]),
                    _vm._v(" "),
                    _c("h2", [_c("b", [_vm._v("Heading 2")])]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Distinctio eveniet id in maiores officiis qui sequi."
                      )
                    ]),
                    _vm._v(" "),
                    _c("h3", [_c("b", [_vm._v(" Heading 3")])]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Animi assumenda consequuntur error, et, ex illum."
                      )
                    ]),
                    _vm._v(" "),
                    _c("h4", [_c("b", [_vm._v("Heading 4")])]),
                    _vm._v(" "),
                    _c("p", [_vm._v(" Cum delectus deleniti doloremque.")]),
                    _vm._v(" "),
                    _c("h5", [_c("b", [_vm._v("Heading 5")])]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Sint sit veritatis, vero! Nulla, quibusdam, recusandae."
                      )
                    ]),
                    _vm._v(" "),
                    _c("h6", [_c("b", [_vm._v("Heading 6")])]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Incidunt libero nisi nostrum omnis quaerat quibusdam."
                      )
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-12" },
            [
              _c(
                "b-card",
                {
                  staticClass: "bg-info-card",
                  attrs: { header: "Blockquotes", "header-tag": "h4" }
                },
                [
                  _c("blockquote", { staticClass: "blockquote" }, [
                    _c("p", { staticClass: "mb-0 ml-3" }, [
                      _vm._v(
                        "I am blockquoted for varying the content from another source within your document.\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("The "),
                    _c("code", [_vm._v(".blockquote text-right")]),
                    _vm._v(" class gives the right-aligned blockquote.")
                  ]),
                  _vm._v(" "),
                  _c("blockquote", { staticClass: "blockquote text-center" }, [
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "I am blockquoted for varying the content from another source within your document."
                      )
                    ]),
                    _vm._v(" "),
                    _c("footer", { staticClass: "blockquote-footer" }, [
                      _vm._v("Someone famous in\n                            "),
                      _c("cite", { attrs: { title: "Source Title" } }, [
                        _vm._v("Source Title\n                            ")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("The "),
                    _c("code", [
                      _vm._v('<footer class="blockquote text-center">')
                    ]),
                    _vm._v(
                      " adds the source name for Identification.\n                    "
                    )
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-12" },
            [
              _c(
                "b-card",
                {
                  staticClass: "bg-primary-card",
                  attrs: {
                    header: "Contextual text colors",
                    "header-tag": "h4"
                  }
                },
                [
                  _c("p", { staticClass: "text-default" }, [
                    _vm._v("I am the default colored text.")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-primary" }, [
                    _vm._v("I am the text with the Primary color.")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-success" }, [
                    _vm._v("I am with the color text-success.")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-warning" }, [
                    _vm._v("I am the text with the warning color.")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-info" }, [
                    _vm._v("I am the Primary color with text-info.")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-danger" }, [
                    _vm._v("Text-danger colored text.")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-12" },
            [
              _c(
                "b-card",
                {
                  staticClass: "bg-danger-card",
                  attrs: { header: "  Inline elements", "header-tag": "h4" }
                },
                [
                  _c("p", [
                    _c("mark", [_vm._v("I am")]),
                    _vm._v("\n                        highlighted with the "),
                    _c("code", [_vm._v("mark")]),
                    _vm._v(" tag.\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("del", [
                      _vm._v(
                        "I am striked using del tag to be treated as deleted text."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("ins", [
                      _vm._v(
                        "This line of text is an addition to the document."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("small", [
                      _vm._v(
                        "This line of text is meant to be treated as small than usual."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("strong", [
                      _vm._v("This line rendered as bold text with "),
                      _c("code", [_vm._v("strong")]),
                      _vm._v(" tag.")
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-12" },
            [
              _c(
                "b-card",
                {
                  staticClass: "bg-success-card",
                  attrs: {
                    header: "Horizontal Description",
                    "header-tag": "h4"
                  }
                },
                [
                  _c("div", { staticClass: "box-body" }, [
                    _c("dl", { staticClass: "dl-horizontal" }, [
                      _c("dt", [
                        _vm._v(
                          "\n                                Description lists\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          "\n                                A description list is perfect for defining terms.\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Question")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          "\n                                Vestibulum id ligula porta felis euismod semper eget lacinia odio.\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [
                        _vm._v(
                          "\n                                Progress bar\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          "\n                                Etiam porta sem malesuada magna mollis euismod.\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Answer")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          "\n                                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, justo.\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [
                        _vm._v(
                          "\n                                Description lists\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          "\n                                A description list is perfect for defining terms.\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Question")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          "\n                                Vestibulum id ligula porta felis euismod semper.\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Answer")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          "\n                                Fusce dapibus, tellus ac cursus commodo, tortor, justo sit amet risus.\n                            "
                        )
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-4" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-info-card",
              attrs: { header: "Unstyled List", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "box-body" }, [
                _c("ul", { staticClass: "list-unstyled list-lineheight" }, [
                  _c("li", [
                    _vm._v(
                      "\n                            Lorem ipsum dolor sit amet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Facilisis in pretium nisl aliquet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Nulla volutpat aliquam velit\n                            "
                    ),
                    _c("ul", [
                      _c("li", [
                        _vm._v(
                          "\n                                    Phasellus iaculis\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Sodales ultricies\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Ac tristique libero\n                                "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Faucibus porta lacus fringilla vel\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Aenean sit amet erat nunc\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Eget porttitor lorem\n                        "
                    )
                  ])
                ])
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
              staticClass: "bg-success-card",
              attrs: { header: "Unordered List", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "box-body" }, [
                _c("ul", { staticClass: "styled-ul p-l-25 list-lineheight" }, [
                  _c("li", [
                    _vm._v(
                      "\n                            Lorem ipsum dolor sit amet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Consectetur adipiscing elit\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Integer molestie lorem at massa\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Nulla volutpat aliquam velit\n                            "
                    ),
                    _c("ul", [
                      _c("li", [
                        _vm._v(
                          "\n                                    Phasellus iaculis\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Purus sodales ultr\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Ac tristique libero\n                                "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Faucibus porta lacus fringilla vel\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Aenean sit amet erat nunc\n                        "
                    )
                  ])
                ])
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
              staticClass: "bg-danger-card",
              attrs: { header: "Ordered List", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "box-body" }, [
                _c("ol", { staticClass: "p-l-25 list-lineheight" }, [
                  _c("li", [
                    _vm._v(
                      "\n                            Consectetur adipiscing elit\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Integer molestie lorem at massa\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Facilisis in pretium nisl aliquet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Nulla volutpat aliquam velit\n                            "
                    ),
                    _c("ol", [
                      _c("li", [
                        _vm._v(
                          "\n                                    Phasellus iaculis\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Vestibulum laoreet\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Ac tristique libero\n                                "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Faucibus porta lacus fringilla vel\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Eget porttitor lorem\n                        "
                    )
                  ])
                ])
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32142999", module.exports)
  }
}

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1328)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1330)
/* template */
var __vue_template__ = __webpack_require__(1331)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-32142999"
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
Component.options.__file = "resources\\assets\\components\\pages\\typography.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32142999", Component.options)
  } else {
    hotAPI.reload("data-v-32142999", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});