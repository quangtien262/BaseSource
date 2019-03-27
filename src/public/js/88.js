webpackJsonp([88],{

/***/ 1598:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1599);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("5ce6fa7a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22c63733\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./invoice.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22c63733\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./invoice.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n#printableArea[data-v-22c63733] {\r\n    border: 1px solid #ccc;\n}\n.card-header[data-v-22c63733] {\r\n    border-bottom: 1px solid #ccc;\n}\n.card-block[data-v-22c63733] {\r\n    padding: 25px;\n}\n.card-header span[data-v-22c63733] {\r\n    margin-top: -33px;\r\n    font-size: 18px;\n}\n.invoice_address[data-v-22c63733] {\r\n    margin: 10px 0;\n}\n.table[data-v-22c63733] {\r\n    table-layout: fixed;\r\n    border: 1px solid #ccc;\n}\n.table tbody > tr[data-v-22c63733] {\r\n    height: 50px;\n}\ntd[data-v-22c63733],\r\nth[data-v-22c63733] {\r\n    word-wrap: break-word;\n}\n.terms_conditions[data-v-22c63733] {\r\n    list-style: initial;\r\n    padding-left: 25px;\n}\n.table thead > tr > th[data-v-22c63733] {\r\n    padding: 10px 8px;\r\n    width: 80px;\r\n    background-color: #ccc;\n}\n.table thead > tr > th[data-v-22c63733]:nth-child(2) {\r\n    max-width: 180px;\n}\n.table-responsive > .table > tbody > tr > td[data-v-22c63733],\r\n.table-responsive > .table > tfoot > tr > td[data-v-22c63733] {\r\n    padding: 15px 8px;\r\n    white-space: normal;\n}\n@media screen and (min-width: 768px) {\n.invoice_address[data-v-22c63733] {\r\n        margin: 20px 0;\n}\n}\n@media print {\n.btn-section[data-v-22c63733] {\r\n        display: none !important;\n}\n.table-responsive[data-v-22c63733] {\r\n        display: inline-table;\r\n        width: 100%;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1600:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Invoice",
    mounted: function mounted() {},
    destroyed: function destroyed() {},
    methods: {
        printDiv: function printDiv() {
            window.print();
        }
    }
});

/***/ }),

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card", attrs: { id: "printableArea" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-block" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12" }, [
            _c("h4", [_c("Strong", [_vm._v("Terms and conditions:")])], 1),
            _vm._v(" "),
            _vm._m(2)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row btn-section" }, [
            _c("div", { staticClass: "col-lg-12 col-md-12 col-12" }, [
              _c("span", { staticClass: "float-right" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-responsive button-alignment btn-primary",
                    attrs: { type: "button", "data-toggle": "button" }
                  },
                  [
                    _c(
                      "span",
                      {
                        on: {
                          click: function($event) {
                            _vm.printDiv()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-print" }),
                        _vm._v("Print\n              ")
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [
        _c("img", {
          attrs: { src: __webpack_require__(1602), alt: "Company logo" }
        })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "float-right" }, [
        _c("strong", [_vm._v(" Invoice")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6 col-md-6 invoice_address" }, [
        _c("h4", [_vm._v("Invoice #26434/45/F1")]),
        _vm._v(" Order #346545\n                        "),
        _c("br"),
        _vm._v(" Date: 16/02/2017\n                    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 col-md-6 text-right invoice_address" }, [
        _c("h4", [
          _c("img", {
            attrs: {
              src: __webpack_require__(1603),
              alt: "invoice QR Code"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-md-6 invoice_address" }, [
        _c("h4", [_vm._v("Billing Details:")]),
        _vm._v(" "),
        _c("address", [
          _vm._v(
            "\n                            Lewis Doe\n                            "
          ),
          _c("br"),
          _vm._v(" 6889 Lunette Street\n                            "),
          _c("br"),
          _vm._v(" Melbourne,Austria\n                            "),
          _c("br"),
          _vm._v(" "),
          _c("strong", [_vm._v("Phone:")]),
          _vm._v("12-345-678\n                            "),
          _c("br"),
          _vm._v(" "),
          _c("strong", [_vm._v("Mail Id:")]),
          _vm._v(" Rad_Champ@yahoo.com\n                        ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-md-6 invoice_address text-right" }, [
        _c("div", { staticClass: "float-right" }, [
          _c("h4", [_vm._v("Invoice Info:")]),
          _vm._v(" "),
          _c("address", [
            _c("span", { staticClass: "visible-xs" }, [_vm._v("#6654-45")]),
            _vm._v(" Tom Percy\n                                "),
            _c("br"),
            _vm._v(" 3946 Penn Street\n                                "),
            _c("br"),
            _vm._v(" Ohio,USA\n                                "),
            _c("br"),
            _vm._v(" "),
            _c("strong", [_vm._v("Phone:")]),
            _vm._v(" 32-666-756\n                                "),
            _c("br"),
            _vm._v(" "),
            _c("strong", [_vm._v("Mail Id:")]),
            _vm._v(" Lucy_Maggi6@yahoo.com\n                            ")
          ]),
          _vm._v(" "),
          _c("span")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            {
              staticClass: "table table-striped",
              attrs: { id: "customtable" }
            },
            [
              _c("thead", [
                _c("tr", { staticClass: "bg-default" }, [
                  _c("th", [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", [_c("strong", [_vm._v("Item Name")])]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center" }, [
                    _c("strong", [_vm._v("Unit Cost")])
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center" }, [
                    _c("strong", [_vm._v("Quantity")])
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-right" }, [
                    _c("strong", [_vm._v("Total")])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("1")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Lorem Ipsum text")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [_vm._v("$1540")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [_vm._v("2")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("$3080")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("2")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Classical Latin literature")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [_vm._v("$220")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [_vm._v("1")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("$220")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("3")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("chunk of Lorem")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [_vm._v("$49")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [_vm._v("1")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("$49")])
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-12 text-right" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-9" }, [
            _c("p", [_c("strong", [_vm._v("Sub Total :")])])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c("p", [_c("strong", [_vm._v("$3349")])])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-9" }, [
            _c("p", [_c("strong", [_vm._v("Discount(12%) :")])])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c("p", [_c("strong", [_vm._v("(−) $402")])])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-9" }, [
            _c("p", [_c("strong", [_vm._v("Vat(7%) :")])])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c("p", [_c("strong", [_vm._v("(+) $235")])])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-9" }, [
            _c("p", [_c("strong", [_vm._v("Total :")])])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c("p", [_c("strong", [_vm._v("$3182")])])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "terms_conditions" }, [
      _c("li", [
        _vm._v(
          "An invoice must accompany products returned for warantty.\n                        "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Balance due within 10 days of invoice date,1.5% interest/month thereafter.\n                        "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "All goods returned for replacement/credit must be saleable condition with original packaging.\n                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-responsive button-alignment btn-success",
        attrs: { type: "button", "data-toggle": "button" }
      },
      [_c("i", { staticClass: "fa fa-usd" }), _vm._v(" Pay Now\n            ")]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-22c63733", module.exports)
  }
}

/***/ }),

/***/ 1602:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/vue-w_logo1.png?752dadf8a43f4c910a01b6078fb79395";

/***/ }),

/***/ 1603:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/invoice_code.jpg?fd1ce6d10dca6ecc3108168b729c37a6";

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1598)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1600)
/* template */
var __vue_template__ = __webpack_require__(1601)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-22c63733"
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
Component.options.__file = "resources\\assets\\components\\pages\\invoice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22c63733", Component.options)
  } else {
    hotAPI.reload("data-v-22c63733", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});