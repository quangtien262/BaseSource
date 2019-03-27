webpackJsonp([99],{

/***/ 1309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mini_toastr__ = __webpack_require__(1310);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



__WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].init();

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'notification',
    data: function data() {
        return {
            switchVal: true,
            types: ['error', 'warn', 'info', 'success'],
            title: 'Your title',
            msg: 'Your message',
            type: 'error'
        };
    },
    created: function created() {
        __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].setIcon('error', 'i', {
            'class': 'fa fa-times'
        });
        __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].setIcon('warn', 'i', {
            'class': 'fa fa-exclamation-triangle'
        });
        __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].setIcon('info', 'i', {
            'class': 'fa fa-info-circle'
        });
        __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].setIcon('success', 'i', {
            'class': 'fa fa-arrow-circle-o-down'
        });
        this.successMsg();
    },

    methods: {
        successMsg: function successMsg() {
            __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].success("Some success msg", "Success title");
        },
        infoMsg: function infoMsg() {
            __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].info("Some info msg", "Note title");
        },
        warnMsg: function warnMsg() {
            __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].warn("Some waqrning msg", "Warning");
        },
        errorMsg: function errorMsg() {
            __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].error("Some error msg", "Error");
        },
        dynamicMsg: function dynamicMsg() {
            __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */][this.type](this.msg, this.title);
        }
    }
});

/***/ }),

/***/ 1310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fadeOut */
/* unused harmony export flatten */
/* unused harmony export makeCss */
/* unused harmony export appendStyles */
/* unused harmony export makeNode */
/* unused harmony export createIcon */
/* unused harmony export addElem */
/* unused harmony export getTypeClass */
function fadeOut (element, cb) {
  if (element.style.opacity && element.style.opacity > 0.05) {
    element.style.opacity = element.style.opacity - 0.05
  } else if (element.style.opacity && element.style.opacity <= 0.1) {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
      if (cb) cb()
    }
  } else {
    element.style.opacity = 0.9
  }
  setTimeout(() => fadeOut.apply(this, [element, cb]), 1000 / 30
  )
}

const LIB_NAME = 'mini-toastr'
/* unused harmony export LIB_NAME */


const ERROR = 'error'
/* unused harmony export ERROR */

const WARN = 'warn'
/* unused harmony export WARN */

const SUCCESS = 'success'
/* unused harmony export SUCCESS */

const INFO = 'info'
/* unused harmony export INFO */

const CONTAINER_CLASS = LIB_NAME
/* unused harmony export CONTAINER_CLASS */

const NOTIFICATION_CLASS = `${LIB_NAME}__notification`
/* unused harmony export NOTIFICATION_CLASS */

const TITLE_CLASS = `${LIB_NAME}-notification__title`
/* unused harmony export TITLE_CLASS */

const ICON_CLASS = `${LIB_NAME}-notification__icon`
/* unused harmony export ICON_CLASS */

const MESSAGE_CLASS = `${LIB_NAME}-notification__message`
/* unused harmony export MESSAGE_CLASS */

const ERROR_CLASS = `-${ERROR}`
/* unused harmony export ERROR_CLASS */

const WARN_CLASS = `-${WARN}`
/* unused harmony export WARN_CLASS */

const SUCCESS_CLASS = `-${SUCCESS}`
/* unused harmony export SUCCESS_CLASS */

const INFO_CLASS = `-${INFO}`
/* unused harmony export INFO_CLASS */

const DEFAULT_TIMEOUT = 3000
/* unused harmony export DEFAULT_TIMEOUT */



function flatten (obj, into, prefix) {
  into = into || {}
  prefix = prefix || ''

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      const prop = obj[k]
      if (prop && typeof prop === 'object' && !(prop instanceof Date || prop instanceof RegExp)) {
        flatten(prop, into, prefix + k + ' ')
      } else {
        if (into[prefix] && typeof into[prefix] === 'object') {
          into[prefix][k] = prop
        } else {
          into[prefix] = {}
          into[prefix][k] = prop
        }
      }
    }
  }

  return into
}

function makeCss (obj) {
  const flat = flatten(obj)
  let str = JSON.stringify(flat, null, 2)
  str = str.replace(/"([^"]*)": {/g, '$1 {')
    .replace(/"([^"]*)"/g, '$1')
    .replace(/(\w*-?\w*): ([\w\d .#]*),?/g, '$1: $2;')
    .replace(/},/g, '}\n')
    .replace(/ &([.:])/g, '$1')

  str = str.substr(1, str.lastIndexOf('}') - 1)

  return str
}

function appendStyles (css) {
  let head = document.head || document.getElementsByTagName('head')[0]
  let styleElem = makeNode('style')
  styleElem.id = `${LIB_NAME}-styles`
  styleElem.type = 'text/css'

  if (styleElem.styleSheet) {
    styleElem.styleSheet.cssText = css
  } else {
    styleElem.appendChild(document.createTextNode(css))
  }

  head.appendChild(styleElem)
}

const config = {
  types: {ERROR, WARN, SUCCESS, INFO},
  animation: fadeOut,
  timeout: DEFAULT_TIMEOUT,
  icons: {},
  appendTarget: document.body,
  node: makeNode(),
  style: {
    [`.${CONTAINER_CLASS}`]: {
      position: 'fixed',
      'z-index': 99999,
      right: '12px',
      top: '12px'
    },
    [`.${NOTIFICATION_CLASS}`]: {
      cursor: 'pointer',
      padding: '12px 18px',
      margin: '0 0 6px 0',
      'background-color': '#000',
      opacity: 0.8,
      color: '#fff',
      'border-radius': '3px',
      'box-shadow': '#3c3b3b 0 0 12px',
      width: '300px',
      [`&.${ERROR_CLASS}`]: {
        'background-color': '#D5122B'
      },
      [`&.${WARN_CLASS}`]: {
        'background-color': '#F5AA1E'
      },
      [`&.${SUCCESS_CLASS}`]: {
        'background-color': '#7AC13E'
      },
      [`&.${INFO_CLASS}`]: {
        'background-color': '#4196E1'
      },
      '&:hover': {
        opacity: 1,
        'box-shadow': '#000 0 0 12px'
      }
    },
    [`.${TITLE_CLASS}`]: {
      'font-weight': '500'
    },
    [`.${MESSAGE_CLASS}`]: {
      display: 'inline-block',
      'vertical-align': 'middle',
      width: '240px',
      padding: '0 12px'
    }
  }
}
/* unused harmony export config */


function makeNode (type = 'div') {
  return document.createElement(type)
}

function createIcon (node, type, config) {
  const iconNode = makeNode(config.icons[type].nodeType)
  const attrs = config.icons[type].attrs

  for (const k in attrs) {
    if (attrs.hasOwnProperty(k)) {
      iconNode.setAttribute(k, attrs[k])
    }
  }

  node.appendChild(iconNode)
}

function addElem (node, text, className) {
  const elem = makeNode()
  elem.className = className
  elem.appendChild(document.createTextNode(text))
  node.appendChild(elem)
}

function getTypeClass (type) {
  if (type === SUCCESS) return SUCCESS_CLASS
  if (type === WARN) return WARN_CLASS
  if (type === ERROR) return ERROR_CLASS
  if (type === INFO) return INFO_CLASS

  return ''
}

const miniToastr = {
  config,
  isInitialised: false,
  showMessage (message, title, type, timeout, cb, overrideConf) {
    const config = {}
    Object.assign(config, this.config)
    Object.assign(config, overrideConf)

    const notificationElem = makeNode()
    notificationElem.className = `${NOTIFICATION_CLASS} ${getTypeClass(type)}`

    notificationElem.onclick = function () {
      config.animation(notificationElem, null)
    }

    if (title) addElem(notificationElem, title, TITLE_CLASS)
    if (config.icons[type]) createIcon(notificationElem, type, config)
    if (message) addElem(notificationElem, message, MESSAGE_CLASS)

    config.node.insertBefore(notificationElem, config.node.firstChild)
    setTimeout(() => config.animation(notificationElem, cb), timeout || config.timeout
    )

    if (cb) cb()
    return this
  },
  init (aConfig) {
    const newConfig = {}
    Object.assign(newConfig, config)
    Object.assign(newConfig, aConfig)
    this.config = newConfig

    const cssStr = makeCss(newConfig.style)
    appendStyles(cssStr)

    newConfig.node.id = CONTAINER_CLASS
    newConfig.node.className = CONTAINER_CLASS
    newConfig.appendTarget.appendChild(newConfig.node)

    Object.keys(newConfig.types).forEach(v => {
        this[newConfig.types[v]] = function (message, title, timeout, cb, config) {
          this.showMessage(message, title, newConfig.types[v], timeout, cb, config)
          return this
        }.bind(this)
      }
    )

    this.isInitialised = true;

    return this
  },
  setIcon (type, nodeType = 'i', attrs = []) {
    attrs.class = attrs.class ? attrs.class + ' ' + ICON_CLASS : ICON_CLASS

    this.config.icons[type] = {nodeType, attrs}
  }
}

/* harmony default export */ __webpack_exports__["a"] = (miniToastr);

/***/ }),

/***/ 1311:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12 col-sm-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-primary-card",
              attrs: { header: "Predefined Messages", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-6 col-sm-6" }, [
                  _c(
                    "button",
                    {
                      staticClass: "alert btn-success mt-sm-1",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.successMsg()
                        }
                      }
                    },
                    [
                      _c("strong", [_vm._v("Success!")]),
                      _vm._v(
                        " Your message has been sent successfully.\n                        "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-6 col-sm-6" }, [
                  _c(
                    "button",
                    {
                      staticClass: "alert btn-info mt-sm-1 text-white",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.infoMsg()
                        }
                      }
                    },
                    [
                      _c("strong", [_vm._v("Note!")]),
                      _vm._v(
                        " Please read the comments carefully.\n                        "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-6 col-sm-6" }, [
                  _c(
                    "button",
                    {
                      staticClass: "alert btn-warning  mt-sm-1 text-white",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.warnMsg()
                        }
                      }
                    },
                    [
                      _c("strong", [_vm._v("Warning!")]),
                      _vm._v(
                        " There was a problem with your network connection.\n                        "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-6 col-sm-6" }, [
                  _c(
                    "button",
                    {
                      staticClass: "text-white alert btn-danger mt-sm-1",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.errorMsg()
                        }
                      }
                    },
                    [
                      _c("strong", [_vm._v("Error!")]),
                      _vm._v(
                        " A problem has been occurred while submitting your data.\n                        "
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-3" }, [
      _c(
        "div",
        { staticClass: "col-lg-12 col-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-info-card",
              attrs: { header: "Dynamic Messages", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-7 offset-lg-3 col-12" }, [
                  _c("label", { attrs: { for: "title" } }, [_vm._v("Title:")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.title,
                          expression: "title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "title" },
                      domProps: { value: _vm.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.title = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "msg" } }, [_vm._v("Message:")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.msg,
                          expression: "msg"
                        }
                      ],
                      staticClass: "form-control resize_vertical",
                      attrs: { id: "msg", rows: "4" },
                      domProps: { value: _vm.msg },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.msg = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    _vm._l(_vm.types, function(t) {
                      return _c("div", [
                        _c(
                          "label",
                          { staticClass: "custom-control custom-radio" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.type,
                                  expression: "type"
                                }
                              ],
                              staticClass: "custom-control-input",
                              attrs: {
                                id: "radioStacked1",
                                name: "type",
                                type: "radio"
                              },
                              domProps: {
                                value: t,
                                checked: _vm._q(_vm.type, t)
                              },
                              on: {
                                change: function($event) {
                                  _vm.type = t
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", {
                              staticClass:
                                "custom-control-indicator custom_checkbox_primary"
                            }),
                            _vm._v(" "),
                            _c("span", { domProps: { textContent: _vm._s(t) } })
                          ]
                        )
                      ])
                    })
                  ),
                  _vm._v(" "),
                  _c("div", { attrs: { CLASS: "text-center" } }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info mt-3 text-white",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.dynamicMsg()
                          }
                        }
                      },
                      [_vm._v("Submit")]
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
    require("vue-hot-reload-api")      .rerender("data-v-c74dee24", module.exports)
  }
}

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1309)
/* template */
var __vue_template__ = __webpack_require__(1311)
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
Component.options.__file = "resources\\assets\\components\\pages\\notifications.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c74dee24", Component.options)
  } else {
    hotAPI.reload("data-v-c74dee24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});