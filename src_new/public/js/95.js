webpackJsonp([95],{

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1258);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("0122e924", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7b91d118\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form_elements.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7b91d118\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form_elements.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n#color[data-v-7b91d118] {\r\n    height: 35px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1259:
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "formelements",
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1260:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "mb-2 bg-default-card",
              attrs: { header: "Form Elements", "header-tag": "h4" }
            },
            [
              _c("div", [
                _c(
                  "form",
                  { staticClass: "form-horizontal", attrs: { method: "" } },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Text:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "text",
                                placeholder: "Some value"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "input_Email" }
                            },
                            [_vm._v("Email:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "email",
                                id: "input_Email",
                                placeholder: "Email"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "input_Password" }
                            },
                            [_vm._v("Password:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "input_Password",
                                placeholder: "Password"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Disabled:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "text1",
                                placeholder: "Disabled input",
                                disabled: ""
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Readonly:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "text2",
                                placeholder: "Read only",
                                readonly: ""
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-3 control-label",
                              attrs: { for: "example-select" }
                            },
                            [_vm._v("Select:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c(
                              "select",
                              {
                                staticClass: "form-control",
                                attrs: {
                                  id: "example-select",
                                  name: "example-select",
                                  size: "1"
                                }
                              },
                              [
                                _c("option", { attrs: { value: "0" } }, [
                                  _vm._v(
                                    "\n                                                Please select\n                                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("Bootstrap")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("CSS")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v("JavaScript")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "4" } }, [
                                  _vm._v("HTML")
                                ])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text_area" }
                            },
                            [_vm._v("Text area:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("textarea", {
                              staticClass: "form-control resize_vertical",
                              attrs: {
                                rows: "4",
                                id: "text_area",
                                placeholder: "Postal Address"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Maxlength:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                maxlength: "5",
                                id: "text3",
                                placeholder: "Maxlength is five"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Color:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "color",
                                name: "color",
                                id: "color",
                                value: "#428bca"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Range:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "range",
                                name: "range",
                                id: "range",
                                value: "50"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Url:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "url",
                                name: "url",
                                value: "http://www.example.com/",
                                id: "url"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Search:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "search",
                                id: "search",
                                placeholder: "Search value"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-3",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Number:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                id: "number",
                                placeholder: "Enter value"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-2",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Date:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  id: "date",
                                  value: "yyyy-mm-dd",
                                  "aria-selected": "true"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-2",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Time:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "time",
                                  id: "time",
                                  value: "14:38:00"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-2",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Datetime:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "datetime-local",
                                  id: "datetime",
                                  value: "yyyy-mm-dd T14:38:00"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-2",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Week:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "week",
                                  id: "week",
                                  value: "2017-W28"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-2 control-label",
                              attrs: { for: "example-multiple-select2" }
                            },
                            [_vm._v("Multiple:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c(
                                "select",
                                {
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "example-multiple-select2",
                                    name: "example-multiple-select",
                                    size: "5",
                                    multiple: ""
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v("Option #1")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "2" } }, [
                                    _vm._v("Option #2")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "3" } }, [
                                    _vm._v("Option #3")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "4" } }, [
                                    _vm._v("Option #4")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "5" } }, [
                                    _vm._v("Option #5")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "6" } }, [
                                    _vm._v("Option #6")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "7" } }, [
                                    _vm._v("Option #7")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "8" } }, [
                                    _vm._v("Option #8")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "9" } }, [
                                    _vm._v("Option #9")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "10" } }, [
                                    _vm._v("Option #10")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c("div", { staticClass: "col-md-2" }, [
                            _c(
                              "label",
                              {
                                staticClass: "control-label",
                                attrs: { for: "text_area" }
                              },
                              [_vm._v("Dropdowns")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8" }, [
                            _c("div", { staticClass: "input-group" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "input-group-btn form_elemntsdropdown"
                                },
                                [
                                  _c(
                                    "b-dropdown",
                                    { attrs: { text: "Action" } },
                                    [
                                      _c("b-dropdown-header", [
                                        _vm._v("This is a heading")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item", [_vm._v("Action")]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item", [
                                        _vm._v("Another action")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-divider"),
                                      _vm._v(" "),
                                      _c("b-dropdown-item", [
                                        _vm._v("Something else here...")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "text" }
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "input-group mt-3 drp_align" },
                              [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: { type: "text" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "input-group-btn form_elemntsdropdown"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      { attrs: { text: "Action" } },
                                      [
                                        _c("b-dropdown-header", [
                                          _vm._v("This is a heading")
                                        ]),
                                        _vm._v(" "),
                                        _c("b-dropdown-item", [
                                          _vm._v("Action")
                                        ]),
                                        _vm._v(" "),
                                        _c("b-dropdown-item", [
                                          _vm._v("Another action")
                                        ]),
                                        _vm._v(" "),
                                        _c("b-dropdown-divider"),
                                        _vm._v(" "),
                                        _c("b-dropdown-item", [
                                          _vm._v("Something else here...")
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            { staticClass: "control-label col-md-2" },
                            [_vm._v("Radios:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c("div", { staticClass: "radio" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control custom-radio"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "custom-control-input",
                                      attrs: {
                                        id: "radioStacked1",
                                        name: "radio-stacked",
                                        type: "radio"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", {
                                      staticClass:
                                        "custom-control-indicator custom_checkbox_info"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "custom-control-description"
                                      },
                                      [_vm._v("Normal")]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "radio" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control custom-radio"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "custom-control-input",
                                      attrs: {
                                        id: "radioStacked1",
                                        name: "radio-stacked",
                                        type: "radio",
                                        checked: ""
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", {
                                      staticClass:
                                        "custom-control-indicator custom_checkbox_info"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "custom-control-description"
                                      },
                                      [_vm._v("Checked")]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "radio" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control custom-radio"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "custom-control-input",
                                      attrs: {
                                        id: "radioStacked1",
                                        name: "radio-stacked",
                                        type: "radio",
                                        disabled: ""
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", {
                                      staticClass: "custom-control-indicator"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "custom-control-description"
                                      },
                                      [_vm._v("Disabled")]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            { staticClass: "control-label col-md-2" },
                            [_vm._v("Checkbox:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: " col-md-8 col-md-offset-2" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control custom-checkbox"
                                },
                                [
                                  _c("input", {
                                    staticClass: "custom-control-input",
                                    attrs: { type: "checkbox" }
                                  }),
                                  _vm._v(" "),
                                  _c("span", {
                                    staticClass: "custom-control-indicator"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "custom-control-description"
                                    },
                                    [_vm._v("Normal")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "checkbox" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "custom-control custom-checkbox"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "custom-control-input",
                                      attrs: { type: "checkbox", checked: "" }
                                    }),
                                    _vm._v(" "),
                                    _c("span", {
                                      staticClass: "custom-control-indicator"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "custom-control-description"
                                      },
                                      [_vm._v("Checked")]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "checkbox" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "custom-control custom-checkbox"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "custom-control-input",
                                      attrs: { type: "checkbox", disabled: "" }
                                    }),
                                    _vm._v(" "),
                                    _c("span", {
                                      staticClass: "custom-control-indicator"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "custom-control-description"
                                      },
                                      [_vm._v("Disabled")]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group p-10 form-actions" },
                          [
                            _c(
                              "div",
                              { staticClass: "col-md-offset-4 col-md-8" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: { type: "button" }
                                  },
                                  [
                                    _vm._v(
                                      "Submit\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-effect-ripple btn-secondary  reset_btn1",
                                    attrs: { type: "reset" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Reset\n                                        "
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ]
                )
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
    require("vue-hot-reload-api")      .rerender("data-v-7b91d118", module.exports)
  }
}

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1257)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1259)
/* template */
var __vue_template__ = __webpack_require__(1260)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b91d118"
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
Component.options.__file = "resources\\assets\\components\\pages\\form_elements.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b91d118", Component.options)
  } else {
    hotAPI.reload("data-v-7b91d118", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});