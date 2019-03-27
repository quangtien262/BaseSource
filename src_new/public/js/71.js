webpackJsonp([71],{

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1333);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("55a1122c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53ab56a0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./api.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53ab56a0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./api.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.link_font[data-v-53ab56a0]{\n    font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_widgets_weather_weather_vue__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_widgets_weather_weather_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_widgets_weather_weather_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_echarts_v3_src_full_js__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zrender_lib_vml_vml__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zrender_lib_vml_vml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_zrender_lib_vml_vml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_zrender_lib_graphic_LinearGradient__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_zrender_lib_graphic_LinearGradient___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_zrender_lib_graphic_LinearGradient__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_plugins_DataTable_DataTable_vue__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_plugins_DataTable_DataTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_plugins_DataTable_DataTable_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






//data tables
//    import Vue from 'vue';

var unsub = void 0;
/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "API",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {
        weather: __WEBPACK_IMPORTED_MODULE_1_components_widgets_weather_weather_vue___default.a, IEcharts: __WEBPACK_IMPORTED_MODULE_2_vue_echarts_v3_src_full_js__["default"], datatable: __WEBPACK_IMPORTED_MODULE_5_components_plugins_DataTable_DataTable_vue___default.a
    },
    data: function data() {
        return {
            serverdata: [],
            instances: [],
            loading: false,
            ajaxloading: false,
            //=========AJAX linechart start=======
            serverline: {
                tooltip: {},
                grid: {
                    top: 10,
                    bottom: 35,
                    right: '7%'
                },
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#46a092'
                        }
                    },
                    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#46a092'
                        }
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: false,
                        interval: 'auto',
                        inside: false,
                        length: 5
                    }
                },
                series: [{
                    name: 'item 1',
                    type: 'line',
                    symbolSize: 5,
                    data: [],
                    color: '#46a092'
                }, {
                    name: 'item 2',
                    type: 'line',
                    symbolSize: 5,
                    data: [],
                    color: '#46a092'
                }]
            },
            //=========AJAX linechart end=========

            //===========user_list data table======
            tableData: [],
            columndata: [{
                label: 'ID',
                field: 'id',
                numeric: true,
                html: false
            }, {
                label: 'Name',
                field: 'name',
                numeric: false,
                html: false
            }, {
                label: 'Email',
                field: 'email',
                numeric: false,
                html: false
            }, {
                label: 'Age',
                field: 'age',
                numeric: true,
                html: false
            }, {
                label: 'Status',
                field: 'status',
                numeric: false,
                html: false
            }, {
                label: 'Actions',
                field: 'action',
                numeric: false,
                html: true
            }],
            //===========AJAX chart data start=========
            ajaxbar: {
                grid: {
                    top: 25,
                    bottom: 40,
                    right: '7%'
                },
                xAxis: {
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisLabel: {
                        inside: false,
                        textStyle: {
                            color: '#000'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    }
                },
                series: [{
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#6f8dd5'
                        }
                    },
                    data: []
                }]
            },
            //===========AJAX chart data end=========
            //==========AJAX pie chart data start=====
            ajaxpie: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: []
                },
                series: [{
                    name: 'Source',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '50%'],
                    data: [],
                    color: ['#d69292', '#8599c1', '#4f699c', '#8fa9dc', '#d4ab6e']

                }]
            }
            //==========AJAX pie chart data end=====
        };
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {
        var _this = this;

        unsub = this.$store.subscribe(function (mutation, state) {
            if (mutation.type == "left_menu") {
                _this.instances.forEach(function (item, index) {
                    setTimeout(function () {
                        item.resize();
                    });
                });
            }
        });
        axios.get("http://www.filltext.com/?rows=2&chartdata={numberArray|7,50}").then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                _this.serverline.series[i].data = response.data[i].chartdata;
            }
            _this.ajaxloading = false;
        }).catch(function (error) {});
        axios.get("http://www.filltext.com/?rows=20&id={index}&name={firstName}~{lastName}&email={email}&age={numberRange|20,60}&status=[%22Activated%22,%22Deactivated%22]").then(function (response) {
            _this.tableData = response.data;
            _this.tableData.forEach(function (item, index) {
                _this.$set(item, "action", "<a class='btn btn-info text-white' href='#/edit_user?" + index + "'>Edit</a>");
            });
        }).catch(function (error) {});
        axios.get("http://www.filltext.com/?rows=1&chartdata={numberArray|12,100}").then(function (response) {
            _this.ajaxbar.series[0].data = response.data[0].chartdata;
            _this.ajaxloading = false;
        }).catch(function (error) {});
        axios.get("http://www.filltext.com/?rows=5&value={number|50}&name={usState|abbr}").then(function (response) {
            _this.ajaxpie.series[0].data = response.data;
            response.data.forEach(function (item, index) {
                _this.ajaxpie.legend.data.push(item.name);
            });
            _this.ajaxloading = false;
        }).catch(function (error) {});
    },

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {
        onReady: function onReady(instance) {
            this.instances.push(instance);
        }
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        unsub();
        next();
    }
});

/***/ }),

/***/ 1335:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-lg-12 m-bt-remv" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-primary-card",
            attrs: { header: "Weather", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "mb-3 link_font" }, [
              _vm._v("\n           API Served from"),
              _c(
                "a",
                {
                  attrs: { href: "https://openweathermap.org/api?ref=jyostna" }
                },
                [_vm._v(" openweathermap.org")]
              )
            ]),
            _vm._v(" "),
            _c("weather", { attrs: { id: "5128638" } })
          ],
          1
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
            staticClass: "bg-primary-card",
            attrs: { header: "Basic Client Table", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "mb-3 link_font" }, [
              _vm._v("\n                API Served from"),
              _c("a", { attrs: { href: "http://www.filltext.com/" } }, [
                _vm._v(" filltext.com")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("datatable", {
                  attrs: {
                    title: "Registered Users",
                    rows: _vm.tableData,
                    columns: _vm.columndata
                  }
                })
              ],
              1
            )
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
            attrs: { header: "AJAX Bar chart", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "mb-3 link_font" }, [
              _vm._v("\n                API Served from"),
              _c("a", { attrs: { href: "http://www.filltext.com/" } }, [
                _vm._v(" filltext.com")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { height: "350px" } },
              [
                _c("IEcharts", {
                  attrs: { option: _vm.ajaxbar, loading: _vm.ajaxloading },
                  on: { ready: _vm.onReady }
                })
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-6 col-xs-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-success-card",
            attrs: { header: "AJAX Line chart", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "mb-3 link_font" }, [
              _vm._v("\n                 API Served from"),
              _c("a", { attrs: { href: "http://www.filltext.com/" } }, [
                _vm._v(" filltext.com")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { height: "350px" } },
              [
                _c("IEcharts", {
                  attrs: { option: _vm.serverline, loading: _vm.ajaxloading },
                  on: { ready: _vm.onReady }
                })
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-6 col-xs-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-warning-card",
            attrs: { header: "AJAX Pie chart", "header-tag": "h4" }
          },
          [
            _c("h3", { staticClass: "card-title" }),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3 link_font" }, [
              _vm._v("\n                API Served from"),
              _c("a", { attrs: { href: "http://www.filltext.com/" } }, [
                _vm._v(" filltext.com")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { height: "350px" } },
              [
                _c("IEcharts", {
                  attrs: { option: _vm.ajaxpie, loading: _vm.ajaxloading },
                  on: { ready: _vm.onReady }
                })
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-53ab56a0", module.exports)
  }
}

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1332)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1334)
/* template */
var __vue_template__ = __webpack_require__(1335)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-53ab56a0"
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
Component.options.__file = "resources\\assets\\components\\pages\\api.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53ab56a0", Component.options)
  } else {
    hotAPI.reload("data-v-53ab56a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(834)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(836)
/* template */
var __vue_template__ = __webpack_require__(838)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-062cef64"
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
Component.options.__file = "resources\\assets\\components\\plugins\\DataTable\\DataTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-062cef64", Component.options)
  } else {
    hotAPI.reload("data-v-062cef64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(835);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("25474e38", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-062cef64\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-062cef64\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.pagination[data-v-062cef64] {\n    margin-top: 12px;\n}\n.sortable[data-v-062cef64] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fuse_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        title: {
            default: ""
        },
        columns: {
            required: true
        },
        rows: {
            required: true
        },
        perPage: {
            default: 10
        },
        sortable: {
            default: true
        },
        paginate: {
            default: true
        },
        exportable: {
            default: true
        },
        pagelen: {
            type: Array,
            default: function _default() {
                return [5, 10, 20, 50];
            }
        }
    },

    data: function data() {
        return {
            currentPage: 1,
            currentPerPage: this.perPage,
            sortColumn: -1,
            sortType: 'asc',
            searchInput: ''
        };
    },
    mounted: function mounted() {
        this.sort(0);
    },

    methods: {
        nextPage: function nextPage() {
            if (this.processedRows.length > this.currentPerPage * this.currentPage && this.currentPerPage != -1) ++this.currentPage;
        },
        previousPage: function previousPage() {
            if (this.currentPage > 1) --this.currentPage;
        },
        sort: function sort(index) {
            if (!this.sortable) {
                return;
            }
            if (this.sortColumn === index) {
                this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortType = 'asc';
                this.sortColumn = index;
            }
        },
        click: function click(row, index) {
            this.$emit("rowClick", row, index);
        },
        exportExcel: function exportExcel() {
            var mimeType = 'data:application/vnd.ms-excel';
            var html = this.renderTable().replace(/ /g, '%20');

            var d = new Date();

            var dummy = document.createElement('a');
            dummy.href = mimeType + ', ' + html;
            dummy.download = this.title.toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() + '.xls';
            dummy.click();
        },
        renderTable: function renderTable() {
            var table = '<table><thead>';

            table += '<tr>';
            for (var i = 0; i < this.columns.length; i++) {
                var column = this.columns[i];
                table += '<th>';
                table += column.label;
                table += '</th>';
            }
            table += '</tr>';

            table += '</thead><tbody>';

            for (var i = 0; i < this.rows.length; i++) {
                var row = this.rows[i];
                table += '<tr>';
                for (var j = 0; j < this.columns.length; j++) {
                    var _column = this.columns[j];
                    table += '<td>';
                    table += this.collect(row, _column.field);
                    table += '</td>';
                }
                table += '</tr>';
            }

            table += '</tbody></table>';

            return table;
        },
        dig: function dig(obj, selector) {
            var result = obj;
            var splitter = selector.split('.');
            for (var i = 0; i < splitter.length; i++) {
                if (typeof result === 'undefined') return undefined;else result = result[splitter[i]];
            }return result;
        },
        collect: function collect(obj, field) {
            if (typeof field === 'function') return field(obj);else if (typeof field === 'string') return this.dig(obj, field);else return undefined;
        }
    },

    computed: {
        processedRows: function processedRows() {
            var _this = this;

            var computedRows = this.rows;

            if (this.sortable !== false) {
                computedRows = computedRows.sort(function (x, y) {
                    if (!_this.columns[_this.sortColumn]) {
                        return 0;
                    }

                    var cook = function cook(x) {
                        x = _this.collect(x, _this.columns[_this.sortColumn].field);
                        if (typeof x === 'string') {
                            x = x.toLowerCase();
                            if (_this.columns[_this.sortColumn].numeric) x = x.indexOf('.') >= 0 ? parseFloat(x) : parseInt(x);
                        }
                        return x;
                    };

                    x = cook(x);
                    y = cook(y);

                    return (x < y ? -1 : x > y ? 1 : 0) * (_this.sortType === 'desc' ? -1 : 1);
                });
            }

            if (this.searchInput) {
                computedRows = new __WEBPACK_IMPORTED_MODULE_0_fuse_js___default.a(computedRows, {
                    keys: this.columns.map(function (c) {
                        return c.field;
                    })
                }).search(this.searchInput);
            }
            return computedRows;
        },
        paginated: function paginated() {
            var paginatedRows = this.processedRows;
            if (this.paginate && this.currentPerPage != -1) {
                paginatedRows = paginatedRows.slice((this.currentPage - 1) * this.currentPerPage, this.currentPage * this.currentPerPage);
            }
            return paginatedRows;
        }
    },
    watch: {
        currentPerPage: function currentPerPage() {
            this.currentPage = 1;
            this.paginated;
        },
        searchInput: function searchInput() {
            this.currentPage = 1;
            this.paginated;
        }
    }
});

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Fuse", [], factory);
	else if(typeof exports === 'object')
		exports["Fuse"] = factory();
	else
		root["Fuse"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var totalScore = 0;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            totalScore += nScore;
          }
        }

        results[i].score = bestScore === 1 ? totalScore / scoreLen : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      this._log('\n\nOutput:\n\n', JSON.stringify(results));

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card p-3" }, [
    _c("div", { staticClass: "table-header" }, [
      _c("h4", { staticClass: "table-title text-center mt-3" }, [
        _vm._v(_vm._s(_vm.title))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "text-left" }, [
      _c("div", { attrs: { id: "search-input-container" } }, [
        _c("label", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchInput,
                expression: "searchInput"
              }
            ],
            staticClass: "form-control mb-2",
            attrs: {
              type: "search",
              id: "search-input",
              placeholder: "Search data"
            },
            domProps: { value: _vm.searchInput },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchInput = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "actions float-right pr-4 mb-3" }, [
          this.exportable
            ? _c(
                "a",
                {
                  staticClass: "btn btn-info text-white",
                  attrs: {
                    href: "javascript:undefined",
                    title: "export excel"
                  },
                  on: { click: _vm.exportExcel }
                },
                [_c("i", { staticClass: "fa fa-download" })]
              )
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-responsive" }, [
      _c("table", { ref: "table", staticClass: "table" }, [
        _c("thead", [
          _c(
            "tr",
            [
              _vm._l(_vm.columns, function(column, index) {
                return _c(
                  "th",
                  {
                    key: index,
                    class:
                      (_vm.sortable ? "sortable" : "") +
                      (_vm.sortColumn === index
                        ? _vm.sortType === "desc"
                          ? " sorting-desc"
                          : " sorting-asc"
                        : ""),
                    style: { width: column.width ? column.width : "auto" },
                    on: {
                      click: function($event) {
                        _vm.sort(index)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(column.label) +
                        "\n                        "
                    ),
                    _c("i", {
                      staticClass: "fa float-right",
                      class:
                        _vm.sortColumn === index
                          ? _vm.sortType === "desc"
                            ? " fa fa-angle-down"
                            : " fa fa-angle-up"
                          : ""
                    })
                  ]
                )
              }),
              _vm._v(" "),
              _vm._t("thead-tr")
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.paginated, function(row, index) {
            return _c(
              "tr",
              {
                key: index,
                on: {
                  click: function($event) {
                    _vm.click(row, index)
                  }
                }
              },
              [
                _vm._l(_vm.columns, function(column, index) {
                  return [
                    !column.html
                      ? _c(
                          "td",
                          {
                            key: index,
                            class: column.numeric ? "numeric" : ""
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.collect(row, column.field)) +
                                "\n                        "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    column.html
                      ? _c("td", {
                          key: index,
                          class: column.numeric ? "numeric" : "",
                          domProps: {
                            innerHTML: _vm._s(_vm.collect(row, column.field))
                          }
                        })
                      : _vm._e()
                  ]
                }),
                _vm._v(" "),
                _vm._t("tbody-tr", null, { row: row })
              ],
              2
            )
          })
        )
      ])
    ]),
    _vm._v(" "),
    _vm.paginate
      ? _c("div", { staticClass: "table-footer" }, [
          _c("div", { staticClass: "datatable-length float-left pl-3" }, [
            _c("span", [_vm._v("Rows per page:")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.currentPerPage,
                    expression: "currentPerPage"
                  }
                ],
                staticClass: "custom-select",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.currentPerPage = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _vm._l(_vm.pagelen, function(len) {
                  return _c("option", { key: len, domProps: { value: len } }, [
                    _vm._v(_vm._s(len))
                  ])
                }),
                _vm._v(" "),
                _c("option", { attrs: { value: "-1" } }, [_vm._v("All")])
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "datatable-info  pb-2 mt-3" }, [
              _c("span", [_vm._v("Showing ")]),
              _vm._v(
                " " +
                  _vm._s(
                    (_vm.currentPage - 1) * _vm.currentPerPage
                      ? (_vm.currentPage - 1) * _vm.currentPerPage
                      : 1
                  ) +
                  " -" +
                  _vm._s(
                    _vm.currentPerPage == -1
                      ? _vm.processedRows.length
                      : Math.min(
                          _vm.processedRows.length,
                          _vm.currentPerPage * _vm.currentPage
                        )
                  ) +
                  " of " +
                  _vm._s(_vm.processedRows.length) +
                  "\n                "
              ),
              _c("span", [_vm._v("records")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "float-right" }, [
            _c("ul", { staticClass: "pagination" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "btn link",
                    attrs: { href: "javascript:undefined", tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.previousPage($event)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-angle-left" })]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "btn link",
                    attrs: { href: "javascript:undefined", tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.nextPage($event)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-angle-right" })]
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-062cef64", module.exports)
  }
}

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/weathernew.jpg?9cb297ebc24b752abb4d45c5dcbccff3";

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(935)
  __webpack_require__(938)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(940)
/* template */
var __vue_template__ = __webpack_require__(942)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-758bec7d"
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
Component.options.__file = "resources\\assets\\components\\widgets\\weather\\weather.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-758bec7d", Component.options)
  } else {
    hotAPI.reload("data-v-758bec7d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(936);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("e595ecd8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-758bec7d\",\"scoped\":false,\"hasInlineConfig\":true}!./weather-icons.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-758bec7d\",\"scoped\":false,\"hasInlineConfig\":true}!./weather-icons.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(225);
exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "/*!\n *  Weather Icons 2.0\n *  Updated August 1, 2015\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n *//*!\n *  Weather Icons 2.0\n *  Updated August 1, 2015\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n */\n@font-face{font-family:weathericons;src:url(" + escape(__webpack_require__(937)) + ") format('woff');font-weight:400;font-style:normal\n}\n.wi{display:inline-block;font-family:weathericons;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale\n}\n.wi-fw{text-align:center;width:1.4em\n}\n.wi-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);transform:rotate(90deg)\n}\n.wi-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.wi-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);transform:rotate(270deg)\n}\n.wi-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1,1);transform:scale(-1,1)\n}\n.wi-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1,-1);transform:scale(1,-1)\n}\n.wi-day-sunny:before{content:\"\\F00D\"\n}\n.wi-day-cloudy:before{content:\"\\F002\"\n}\n.wi-day-cloudy-gusts:before{content:\"\\F000\"\n}\n.wi-day-cloudy-windy:before{content:\"\\F001\"\n}\n.wi-day-fog:before{content:\"\\F003\"\n}\n.wi-day-hail:before{content:\"\\F004\"\n}\n.wi-day-haze:before{content:\"\\F0B6\"\n}\n.wi-day-lightning:before{content:\"\\F005\"\n}\n.wi-day-rain:before{content:\"\\F008\"\n}\n.wi-day-rain-mix:before{content:\"\\F006\"\n}\n.wi-day-rain-wind:before{content:\"\\F007\"\n}\n.wi-day-showers:before{content:\"\\F009\"\n}\n.wi-day-sleet:before{content:\"\\F0B2\"\n}\n.wi-day-sleet-storm:before{content:\"\\F068\"\n}\n.wi-day-snow:before{content:\"\\F00A\"\n}\n.wi-day-snow-thunderstorm:before{content:\"\\F06B\"\n}\n.wi-day-snow-wind:before{content:\"\\F065\"\n}\n.wi-day-sprinkle:before{content:\"\\F00B\"\n}\n.wi-day-storm-showers:before{content:\"\\F00E\"\n}\n.wi-day-sunny-overcast:before{content:\"\\F00C\"\n}\n.wi-day-thunderstorm:before{content:\"\\F010\"\n}\n.wi-day-windy:before{content:\"\\F085\"\n}\n.wi-solar-eclipse:before{content:\"\\F06E\"\n}\n.wi-hot:before{content:\"\\F072\"\n}\n.wi-day-cloudy-high:before{content:\"\\F07D\"\n}\n.wi-day-light-wind:before{content:\"\\F0C4\"\n}\n.wi-night-clear:before{content:\"\\F02E\"\n}\n.wi-night-alt-cloudy:before{content:\"\\F086\"\n}\n.wi-night-alt-cloudy-gusts:before{content:\"\\F022\"\n}\n.wi-night-alt-cloudy-windy:before{content:\"\\F023\"\n}\n.wi-night-alt-hail:before{content:\"\\F024\"\n}\n.wi-night-alt-lightning:before{content:\"\\F025\"\n}\n.wi-night-alt-rain:before{content:\"\\F028\"\n}\n.wi-night-alt-rain-mix:before{content:\"\\F026\"\n}\n.wi-night-alt-rain-wind:before{content:\"\\F027\"\n}\n.wi-night-alt-showers:before{content:\"\\F029\"\n}\n.wi-night-alt-sleet:before{content:\"\\F0B4\"\n}\n.wi-night-alt-sleet-storm:before{content:\"\\F06A\"\n}\n.wi-night-alt-snow:before{content:\"\\F02A\"\n}\n.wi-night-alt-snow-thunderstorm:before{content:\"\\F06D\"\n}\n.wi-night-alt-snow-wind:before{content:\"\\F067\"\n}\n.wi-night-alt-sprinkle:before{content:\"\\F02B\"\n}\n.wi-night-alt-storm-showers:before{content:\"\\F02C\"\n}\n.wi-night-alt-thunderstorm:before{content:\"\\F02D\"\n}\n.wi-night-cloudy:before{content:\"\\F031\"\n}\n.wi-night-cloudy-gusts:before{content:\"\\F02F\"\n}\n.wi-night-cloudy-windy:before{content:\"\\F030\"\n}\n.wi-night-fog:before{content:\"\\F04A\"\n}\n.wi-night-hail:before{content:\"\\F032\"\n}\n.wi-night-lightning:before{content:\"\\F033\"\n}\n.wi-night-partly-cloudy:before{content:\"\\F083\"\n}\n.wi-night-rain:before{content:\"\\F036\"\n}\n.wi-night-rain-mix:before{content:\"\\F034\"\n}\n.wi-night-rain-wind:before{content:\"\\F035\"\n}\n.wi-night-showers:before{content:\"\\F037\"\n}\n.wi-night-sleet:before{content:\"\\F0B3\"\n}\n.wi-night-sleet-storm:before{content:\"\\F069\"\n}\n.wi-night-snow:before{content:\"\\F038\"\n}\n.wi-night-snow-thunderstorm:before{content:\"\\F06C\"\n}\n.wi-night-snow-wind:before{content:\"\\F066\"\n}\n.wi-night-sprinkle:before{content:\"\\F039\"\n}\n.wi-night-storm-showers:before{content:\"\\F03A\"\n}\n.wi-night-thunderstorm:before{content:\"\\F03B\"\n}\n.wi-lunar-eclipse:before{content:\"\\F070\"\n}\n.wi-stars:before{content:\"\\F077\"\n}\n.wi-storm-showers:before{content:\"\\F01D\"\n}\n.wi-thunderstorm:before{content:\"\\F01E\"\n}\n.wi-night-alt-cloudy-high:before{content:\"\\F07E\"\n}\n.wi-night-cloudy-high:before{content:\"\\F080\"\n}\n.wi-night-alt-partly-cloudy:before{content:\"\\F081\"\n}\n.wi-cloud:before{content:\"\\F041\"\n}\n.wi-cloudy:before{content:\"\\F013\"\n}\n.wi-cloudy-gusts:before{content:\"\\F011\"\n}\n.wi-cloudy-windy:before{content:\"\\F012\"\n}\n.wi-fog:before{content:\"\\F014\"\n}\n.wi-hail:before{content:\"\\F015\"\n}\n.wi-rain:before{content:\"\\F019\"\n}\n.wi-rain-mix:before{content:\"\\F017\"\n}\n.wi-rain-wind:before{content:\"\\F018\"\n}\n.wi-showers:before{content:\"\\F01A\"\n}\n.wi-sleet:before{content:\"\\F0B5\"\n}\n.wi-snow:before{content:\"\\F01B\"\n}\n.wi-sprinkle:before{content:\"\\F01C\"\n}\n.wi-storm-showers:before{content:\"\\F01D\"\n}\n.wi-thunderstorm:before{content:\"\\F01E\"\n}\n.wi-snow-wind:before{content:\"\\F064\"\n}\n.wi-snow:before{content:\"\\F01B\"\n}\n.wi-smog:before{content:\"\\F074\"\n}\n.wi-smoke:before{content:\"\\F062\"\n}\n.wi-lightning:before{content:\"\\F016\"\n}\n.wi-raindrops:before{content:\"\\F04E\"\n}\n.wi-raindrop:before{content:\"\\F078\"\n}\n.wi-dust:before{content:\"\\F063\"\n}\n.wi-snowflake-cold:before{content:\"\\F076\"\n}\n.wi-windy:before{content:\"\\F021\"\n}\n.wi-strong-wind:before{content:\"\\F050\"\n}\n.wi-sandstorm:before{content:\"\\F082\"\n}\n.wi-earthquake:before{content:\"\\F0C6\"\n}\n.wi-fire:before{content:\"\\F0C7\"\n}\n.wi-flood:before{content:\"\\F07C\"\n}\n.wi-meteor:before{content:\"\\F071\"\n}\n.wi-tsunami:before{content:\"\\F0C5\"\n}\n.wi-volcano:before{content:\"\\F0C8\"\n}\n.wi-hurricane:before{content:\"\\F073\"\n}\n.wi-tornado:before{content:\"\\F056\"\n}\n.wi-small-craft-advisory:before{content:\"\\F0CC\"\n}\n.wi-gale-warning:before{content:\"\\F0CD\"\n}\n.wi-storm-warning:before{content:\"\\F0CE\"\n}\n.wi-hurricane-warning:before{content:\"\\F0CF\"\n}\n.wi-wind-direction:before{content:\"\\F0B1\"\n}\n.wi-alien:before{content:\"\\F075\"\n}\n.wi-celsius:before{content:\"\\F03C\"\n}\n.wi-fahrenheit:before{content:\"\\F045\"\n}\n.wi-degrees:before{content:\"\\F042\"\n}\n.wi-thermometer:before{content:\"\\F055\"\n}\n.wi-thermometer-exterior:before{content:\"\\F053\"\n}\n.wi-thermometer-internal:before{content:\"\\F054\"\n}\n.wi-cloud-down:before{content:\"\\F03D\"\n}\n.wi-cloud-up:before{content:\"\\F040\"\n}\n.wi-cloud-refresh:before{content:\"\\F03E\"\n}\n.wi-horizon:before{content:\"\\F047\"\n}\n.wi-horizon-alt:before{content:\"\\F046\"\n}\n.wi-sunrise:before{content:\"\\F051\"\n}\n.wi-sunset:before{content:\"\\F052\"\n}\n.wi-moonrise:before{content:\"\\F0C9\"\n}\n.wi-moonset:before{content:\"\\F0CA\"\n}\n.wi-refresh:before{content:\"\\F04C\"\n}\n.wi-refresh-alt:before{content:\"\\F04B\"\n}\n.wi-umbrella:before{content:\"\\F084\"\n}\n.wi-barometer:before{content:\"\\F079\"\n}\n.wi-humidity:before{content:\"\\F07A\"\n}\n.wi-na:before{content:\"\\F07B\"\n}\n.wi-train:before{content:\"\\F0CB\"\n}\n.wi-moon-new:before{content:\"\\F095\"\n}\n.wi-moon-waxing-crescent-1:before{content:\"\\F096\"\n}\n.wi-moon-waxing-crescent-2:before{content:\"\\F097\"\n}\n.wi-moon-waxing-crescent-3:before{content:\"\\F098\"\n}\n.wi-moon-waxing-crescent-4:before{content:\"\\F099\"\n}\n.wi-moon-waxing-crescent-5:before{content:\"\\F09A\"\n}\n.wi-moon-waxing-crescent-6:before{content:\"\\F09B\"\n}\n.wi-moon-first-quarter:before{content:\"\\F09C\"\n}\n.wi-moon-waxing-gibbous-1:before{content:\"\\F09D\"\n}\n.wi-moon-waxing-gibbous-2:before{content:\"\\F09E\"\n}\n.wi-moon-waxing-gibbous-3:before{content:\"\\F09F\"\n}\n.wi-moon-waxing-gibbous-4:before{content:\"\\F0A0\"\n}\n.wi-moon-waxing-gibbous-5:before{content:\"\\F0A1\"\n}\n.wi-moon-waxing-gibbous-6:before{content:\"\\F0A2\"\n}\n.wi-moon-full:before{content:\"\\F0A3\"\n}\n.wi-moon-waning-gibbous-1:before{content:\"\\F0A4\"\n}\n.wi-moon-waning-gibbous-2:before{content:\"\\F0A5\"\n}\n.wi-moon-waning-gibbous-3:before{content:\"\\F0A6\"\n}\n.wi-moon-waning-gibbous-4:before{content:\"\\F0A7\"\n}\n.wi-moon-waning-gibbous-5:before{content:\"\\F0A8\"\n}\n.wi-moon-waning-gibbous-6:before{content:\"\\F0A9\"\n}\n.wi-moon-third-quarter:before{content:\"\\F0AA\"\n}\n.wi-moon-waning-crescent-1:before{content:\"\\F0AB\"\n}\n.wi-moon-waning-crescent-2:before{content:\"\\F0AC\"\n}\n.wi-moon-waning-crescent-3:before{content:\"\\F0AD\"\n}\n.wi-moon-waning-crescent-4:before{content:\"\\F0AE\"\n}\n.wi-moon-waning-crescent-5:before{content:\"\\F0AF\"\n}\n.wi-moon-waning-crescent-6:before{content:\"\\F0B0\"\n}\n.wi-moon-alt-new:before{content:\"\\F0EB\"\n}\n.wi-moon-alt-waxing-crescent-1:before{content:\"\\F0D0\"\n}\n.wi-moon-alt-waxing-crescent-2:before{content:\"\\F0D1\"\n}\n.wi-moon-alt-waxing-crescent-3:before{content:\"\\F0D2\"\n}\n.wi-moon-alt-waxing-crescent-4:before{content:\"\\F0D3\"\n}\n.wi-moon-alt-waxing-crescent-5:before{content:\"\\F0D4\"\n}\n.wi-moon-alt-waxing-crescent-6:before{content:\"\\F0D5\"\n}\n.wi-moon-alt-first-quarter:before{content:\"\\F0D6\"\n}\n.wi-moon-alt-waxing-gibbous-1:before{content:\"\\F0D7\"\n}\n.wi-moon-alt-waxing-gibbous-2:before{content:\"\\F0D8\"\n}\n.wi-moon-alt-waxing-gibbous-3:before{content:\"\\F0D9\"\n}\n.wi-moon-alt-waxing-gibbous-4:before{content:\"\\F0DA\"\n}\n.wi-moon-alt-waxing-gibbous-5:before{content:\"\\F0DB\"\n}\n.wi-moon-alt-waxing-gibbous-6:before{content:\"\\F0DC\"\n}\n.wi-moon-alt-full:before{content:\"\\F0DD\"\n}\n.wi-moon-alt-waning-gibbous-1:before{content:\"\\F0DE\"\n}\n.wi-moon-alt-waning-gibbous-2:before{content:\"\\F0DF\"\n}\n.wi-moon-alt-waning-gibbous-3:before{content:\"\\F0E0\"\n}\n.wi-moon-alt-waning-gibbous-4:before{content:\"\\F0E1\"\n}\n.wi-moon-alt-waning-gibbous-5:before{content:\"\\F0E2\"\n}\n.wi-moon-alt-waning-gibbous-6:before{content:\"\\F0E3\"\n}\n.wi-moon-alt-third-quarter:before{content:\"\\F0E4\"\n}\n.wi-moon-alt-waning-crescent-1:before{content:\"\\F0E5\"\n}\n.wi-moon-alt-waning-crescent-2:before{content:\"\\F0E6\"\n}\n.wi-moon-alt-waning-crescent-3:before{content:\"\\F0E7\"\n}\n.wi-moon-alt-waning-crescent-4:before{content:\"\\F0E8\"\n}\n.wi-moon-alt-waning-crescent-5:before{content:\"\\F0E9\"\n}\n.wi-moon-alt-waning-crescent-6:before{content:\"\\F0EA\"\n}\n.wi-moon-0:before{content:\"\\F095\"\n}\n.wi-moon-1:before{content:\"\\F096\"\n}\n.wi-moon-2:before{content:\"\\F097\"\n}\n.wi-moon-3:before{content:\"\\F098\"\n}\n.wi-moon-4:before{content:\"\\F099\"\n}\n.wi-moon-5:before{content:\"\\F09A\"\n}\n.wi-moon-6:before{content:\"\\F09B\"\n}\n.wi-moon-7:before{content:\"\\F09C\"\n}\n.wi-moon-8:before{content:\"\\F09D\"\n}\n.wi-moon-9:before{content:\"\\F09E\"\n}\n.wi-moon-10:before{content:\"\\F09F\"\n}\n.wi-moon-11:before{content:\"\\F0A0\"\n}\n.wi-moon-12:before{content:\"\\F0A1\"\n}\n.wi-moon-13:before{content:\"\\F0A2\"\n}\n.wi-moon-14:before{content:\"\\F0A3\"\n}\n.wi-moon-15:before{content:\"\\F0A4\"\n}\n.wi-moon-16:before{content:\"\\F0A5\"\n}\n.wi-moon-17:before{content:\"\\F0A6\"\n}\n.wi-moon-18:before{content:\"\\F0A7\"\n}\n.wi-moon-19:before{content:\"\\F0A8\"\n}\n.wi-moon-20:before{content:\"\\F0A9\"\n}\n.wi-moon-21:before{content:\"\\F0AA\"\n}\n.wi-moon-22:before{content:\"\\F0AB\"\n}\n.wi-moon-23:before{content:\"\\F0AC\"\n}\n.wi-moon-24:before{content:\"\\F0AD\"\n}\n.wi-moon-25:before{content:\"\\F0AE\"\n}\n.wi-moon-26:before{content:\"\\F0AF\"\n}\n.wi-moon-27:before{content:\"\\F0B0\"\n}\n.wi-time-1:before{content:\"\\F08A\"\n}\n.wi-time-2:before{content:\"\\F08B\"\n}\n.wi-time-3:before{content:\"\\F08C\"\n}\n.wi-time-4:before{content:\"\\F08D\"\n}\n.wi-time-5:before{content:\"\\F08E\"\n}\n.wi-time-6:before{content:\"\\F08F\"\n}\n.wi-time-7:before{content:\"\\F090\"\n}\n.wi-time-8:before{content:\"\\F091\"\n}\n.wi-time-9:before{content:\"\\F092\"\n}\n.wi-time-10:before{content:\"\\F093\"\n}\n.wi-time-11:before{content:\"\\F094\"\n}\n.wi-time-12:before{content:\"\\F089\"\n}\n.wi-direction-up:before{content:\"\\F058\"\n}\n.wi-direction-up-right:before{content:\"\\F057\"\n}\n.wi-direction-right:before{content:\"\\F04D\"\n}\n.wi-direction-down-right:before{content:\"\\F088\"\n}\n.wi-direction-down:before{content:\"\\F044\"\n}\n.wi-direction-down-left:before{content:\"\\F043\"\n}\n.wi-direction-left:before{content:\"\\F048\"\n}\n.wi-direction-up-left:before{content:\"\\F087\"\n}\n.wi-wind-beaufort-0:before{content:\"\\F0B7\"\n}\n.wi-wind-beaufort-1:before{content:\"\\F0B8\"\n}\n.wi-wind-beaufort-2:before{content:\"\\F0B9\"\n}\n.wi-wind-beaufort-3:before{content:\"\\F0BA\"\n}\n.wi-wind-beaufort-4:before{content:\"\\F0BB\"\n}\n.wi-wind-beaufort-5:before{content:\"\\F0BC\"\n}\n.wi-wind-beaufort-6:before{content:\"\\F0BD\"\n}\n.wi-wind-beaufort-7:before{content:\"\\F0BE\"\n}\n.wi-wind-beaufort-8:before{content:\"\\F0BF\"\n}\n.wi-wind-beaufort-9:before{content:\"\\F0C0\"\n}\n.wi-wind-beaufort-10:before{content:\"\\F0C1\"\n}\n.wi-wind-beaufort-11:before{content:\"\\F0C2\"\n}\n.wi-wind-beaufort-12:before{content:\"\\F0C3\"\n}\n.wi-yahoo-0:before{content:\"\\F056\"\n}\n.wi-yahoo-1:before{content:\"\\F00E\"\n}\n.wi-yahoo-2:before{content:\"\\F073\"\n}\n.wi-yahoo-3:before{content:\"\\F01E\"\n}\n.wi-yahoo-4:before{content:\"\\F01E\"\n}\n.wi-yahoo-5:before{content:\"\\F017\"\n}\n.wi-yahoo-6:before{content:\"\\F017\"\n}\n.wi-yahoo-7:before{content:\"\\F017\"\n}\n.wi-yahoo-8:before{content:\"\\F015\"\n}\n.wi-yahoo-9:before{content:\"\\F01A\"\n}\n.wi-yahoo-10:before{content:\"\\F015\"\n}\n.wi-yahoo-11:before{content:\"\\F01A\"\n}\n.wi-yahoo-12:before{content:\"\\F01A\"\n}\n.wi-yahoo-13:before{content:\"\\F01B\"\n}\n.wi-yahoo-14:before{content:\"\\F00A\"\n}\n.wi-yahoo-15:before{content:\"\\F064\"\n}\n.wi-yahoo-16:before{content:\"\\F01B\"\n}\n.wi-yahoo-17:before{content:\"\\F015\"\n}\n.wi-yahoo-18:before{content:\"\\F017\"\n}\n.wi-yahoo-19:before{content:\"\\F063\"\n}\n.wi-yahoo-20:before{content:\"\\F014\"\n}\n.wi-yahoo-21:before{content:\"\\F021\"\n}\n.wi-yahoo-22:before{content:\"\\F062\"\n}\n.wi-yahoo-23:before{content:\"\\F050\"\n}\n.wi-yahoo-24:before{content:\"\\F050\"\n}\n.wi-yahoo-25:before{content:\"\\F076\"\n}\n.wi-yahoo-26:before{content:\"\\F013\"\n}\n.wi-yahoo-27:before{content:\"\\F031\"\n}\n.wi-yahoo-28:before{content:\"\\F002\"\n}\n.wi-yahoo-29:before{content:\"\\F031\"\n}\n.wi-yahoo-30:before{content:\"\\F002\"\n}\n.wi-yahoo-31:before{content:\"\\F02E\"\n}\n.wi-yahoo-32:before{content:\"\\F00D\"\n}\n.wi-yahoo-33:before{content:\"\\F083\"\n}\n.wi-yahoo-34:before{content:\"\\F00C\"\n}\n.wi-yahoo-35:before{content:\"\\F017\"\n}\n.wi-yahoo-36:before{content:\"\\F072\"\n}\n.wi-yahoo-37:before{content:\"\\F00E\"\n}\n.wi-yahoo-38:before{content:\"\\F00E\"\n}\n.wi-yahoo-39:before{content:\"\\F00E\"\n}\n.wi-yahoo-40:before{content:\"\\F01A\"\n}\n.wi-yahoo-41:before{content:\"\\F064\"\n}\n.wi-yahoo-42:before{content:\"\\F01B\"\n}\n.wi-yahoo-43:before{content:\"\\F064\"\n}\n.wi-yahoo-44:before{content:\"\\F00C\"\n}\n.wi-yahoo-45:before{content:\"\\F00E\"\n}\n.wi-yahoo-46:before{content:\"\\F01B\"\n}\n.wi-yahoo-47:before{content:\"\\F00E\"\n}\n.wi-yahoo-3200:before{content:\"\\F077\"\n}\n.wi-forecast-io-clear-day:before{content:\"\\F00D\"\n}\n.wi-forecast-io-clear-night:before{content:\"\\F02E\"\n}\n.wi-forecast-io-rain:before{content:\"\\F019\"\n}\n.wi-forecast-io-snow:before{content:\"\\F01B\"\n}\n.wi-forecast-io-sleet:before{content:\"\\F0B5\"\n}\n.wi-forecast-io-wind:before{content:\"\\F050\"\n}\n.wi-forecast-io-fog:before{content:\"\\F014\"\n}\n.wi-forecast-io-cloudy:before{content:\"\\F013\"\n}\n.wi-forecast-io-partly-cloudy-day:before{content:\"\\F002\"\n}\n.wi-forecast-io-partly-cloudy-night:before{content:\"\\F031\"\n}\n.wi-forecast-io-hail:before{content:\"\\F015\"\n}\n.wi-forecast-io-thunderstorm:before{content:\"\\F01E\"\n}\n.wi-forecast-io-tornado:before{content:\"\\F056\"\n}\n.wi-wmo4680-00:before,.wi-wmo4680-0:before{content:\"\\F055\"\n}\n.wi-wmo4680-01:before,.wi-wmo4680-1:before{content:\"\\F013\"\n}\n.wi-wmo4680-02:before,.wi-wmo4680-2:before{content:\"\\F055\"\n}\n.wi-wmo4680-03:before,.wi-wmo4680-3:before{content:\"\\F013\"\n}\n.wi-wmo4680-04:before,.wi-wmo4680-4:before{content:\"\\F014\"\n}\n.wi-wmo4680-05:before,.wi-wmo4680-5:before{content:\"\\F014\"\n}\n.wi-wmo4680-10:before{content:\"\\F014\"\n}\n.wi-wmo4680-11:before{content:\"\\F014\"\n}\n.wi-wmo4680-12:before{content:\"\\F016\"\n}\n.wi-wmo4680-18:before{content:\"\\F050\"\n}\n.wi-wmo4680-20:before{content:\"\\F014\"\n}\n.wi-wmo4680-21:before{content:\"\\F017\"\n}\n.wi-wmo4680-22:before{content:\"\\F017\"\n}\n.wi-wmo4680-23:before{content:\"\\F019\"\n}\n.wi-wmo4680-24:before{content:\"\\F01B\"\n}\n.wi-wmo4680-25:before{content:\"\\F015\"\n}\n.wi-wmo4680-26:before{content:\"\\F01E\"\n}\n.wi-wmo4680-27:before{content:\"\\F063\"\n}\n.wi-wmo4680-28:before{content:\"\\F063\"\n}\n.wi-wmo4680-29:before{content:\"\\F063\"\n}\n.wi-wmo4680-30:before{content:\"\\F014\"\n}\n.wi-wmo4680-31:before{content:\"\\F014\"\n}\n.wi-wmo4680-32:before{content:\"\\F014\"\n}\n.wi-wmo4680-33:before{content:\"\\F014\"\n}\n.wi-wmo4680-34:before{content:\"\\F014\"\n}\n.wi-wmo4680-35:before{content:\"\\F014\"\n}\n.wi-wmo4680-40:before{content:\"\\F017\"\n}\n.wi-wmo4680-41:before{content:\"\\F01C\"\n}\n.wi-wmo4680-42:before{content:\"\\F019\"\n}\n.wi-wmo4680-43:before{content:\"\\F01C\"\n}\n.wi-wmo4680-44:before{content:\"\\F019\"\n}\n.wi-wmo4680-45:before{content:\"\\F015\"\n}\n.wi-wmo4680-46:before{content:\"\\F015\"\n}\n.wi-wmo4680-47:before{content:\"\\F01B\"\n}\n.wi-wmo4680-48:before{content:\"\\F01B\"\n}\n.wi-wmo4680-50:before{content:\"\\F01C\"\n}\n.wi-wmo4680-51:before{content:\"\\F01C\"\n}\n.wi-wmo4680-52:before{content:\"\\F019\"\n}\n.wi-wmo4680-53:before{content:\"\\F019\"\n}\n.wi-wmo4680-54:before{content:\"\\F076\"\n}\n.wi-wmo4680-55:before{content:\"\\F076\"\n}\n.wi-wmo4680-56:before{content:\"\\F076\"\n}\n.wi-wmo4680-57:before{content:\"\\F01C\"\n}\n.wi-wmo4680-58:before{content:\"\\F019\"\n}\n.wi-wmo4680-60:before{content:\"\\F01C\"\n}\n.wi-wmo4680-61:before{content:\"\\F01C\"\n}\n.wi-wmo4680-62:before{content:\"\\F019\"\n}\n.wi-wmo4680-63:before{content:\"\\F019\"\n}\n.wi-wmo4680-64:before{content:\"\\F015\"\n}\n.wi-wmo4680-65:before{content:\"\\F015\"\n}\n.wi-wmo4680-66:before{content:\"\\F015\"\n}\n.wi-wmo4680-67:before{content:\"\\F017\"\n}\n.wi-wmo4680-68:before{content:\"\\F017\"\n}\n.wi-wmo4680-70:before{content:\"\\F01B\"\n}\n.wi-wmo4680-71:before{content:\"\\F01B\"\n}\n.wi-wmo4680-72:before{content:\"\\F01B\"\n}\n.wi-wmo4680-73:before{content:\"\\F01B\"\n}\n.wi-wmo4680-74:before{content:\"\\F076\"\n}\n.wi-wmo4680-75:before{content:\"\\F076\"\n}\n.wi-wmo4680-76:before{content:\"\\F076\"\n}\n.wi-wmo4680-77:before{content:\"\\F01B\"\n}\n.wi-wmo4680-78:before{content:\"\\F076\"\n}\n.wi-wmo4680-80:before{content:\"\\F019\"\n}\n.wi-wmo4680-81:before{content:\"\\F01C\"\n}\n.wi-wmo4680-82:before{content:\"\\F019\"\n}\n.wi-wmo4680-83:before{content:\"\\F019\"\n}\n.wi-wmo4680-84:before{content:\"\\F01D\"\n}\n.wi-wmo4680-85:before{content:\"\\F017\"\n}\n.wi-wmo4680-86:before{content:\"\\F017\"\n}\n.wi-wmo4680-87:before{content:\"\\F017\"\n}\n.wi-wmo4680-89:before{content:\"\\F015\"\n}\n.wi-wmo4680-90:before{content:\"\\F016\"\n}\n.wi-wmo4680-91:before{content:\"\\F01D\"\n}\n.wi-wmo4680-92:before{content:\"\\F01E\"\n}\n.wi-wmo4680-93:before{content:\"\\F01E\"\n}\n.wi-wmo4680-94:before{content:\"\\F016\"\n}\n.wi-wmo4680-95:before{content:\"\\F01E\"\n}\n.wi-wmo4680-96:before{content:\"\\F01E\"\n}\n.wi-wmo4680-99:before{content:\"\\F056\"\n}\n.wi-owm-200:before{content:\"\\F01E\"\n}\n.wi-owm-201:before{content:\"\\F01E\"\n}\n.wi-owm-202:before{content:\"\\F01E\"\n}\n.wi-owm-210:before{content:\"\\F016\"\n}\n.wi-owm-211:before{content:\"\\F016\"\n}\n.wi-owm-212:before{content:\"\\F016\"\n}\n.wi-owm-221:before{content:\"\\F016\"\n}\n.wi-owm-230:before{content:\"\\F01E\"\n}\n.wi-owm-231:before{content:\"\\F01E\"\n}\n.wi-owm-232:before{content:\"\\F01E\"\n}\n.wi-owm-300:before{content:\"\\F01C\"\n}\n.wi-owm-301:before{content:\"\\F01C\"\n}\n.wi-owm-302:before{content:\"\\F019\"\n}\n.wi-owm-310:before{content:\"\\F017\"\n}\n.wi-owm-311:before{content:\"\\F019\"\n}\n.wi-owm-312:before{content:\"\\F019\"\n}\n.wi-owm-313:before{content:\"\\F01A\"\n}\n.wi-owm-314:before{content:\"\\F019\"\n}\n.wi-owm-321:before{content:\"\\F01C\"\n}\n.wi-owm-500:before{content:\"\\F01C\"\n}\n.wi-owm-501:before{content:\"\\F019\"\n}\n.wi-owm-502:before{content:\"\\F019\"\n}\n.wi-owm-503:before{content:\"\\F019\"\n}\n.wi-owm-504:before{content:\"\\F019\"\n}\n.wi-owm-511:before{content:\"\\F017\"\n}\n.wi-owm-520:before{content:\"\\F01A\"\n}\n.wi-owm-521:before{content:\"\\F01A\"\n}\n.wi-owm-522:before{content:\"\\F01A\"\n}\n.wi-owm-531:before{content:\"\\F01D\"\n}\n.wi-owm-600:before{content:\"\\F01B\"\n}\n.wi-owm-601:before{content:\"\\F01B\"\n}\n.wi-owm-602:before{content:\"\\F0B5\"\n}\n.wi-owm-611:before{content:\"\\F017\"\n}\n.wi-owm-612:before{content:\"\\F017\"\n}\n.wi-owm-615:before{content:\"\\F017\"\n}\n.wi-owm-616:before{content:\"\\F017\"\n}\n.wi-owm-620:before{content:\"\\F017\"\n}\n.wi-owm-621:before{content:\"\\F01B\"\n}\n.wi-owm-622:before{content:\"\\F01B\"\n}\n.wi-owm-701:before{content:\"\\F01A\"\n}\n.wi-owm-711:before{content:\"\\F062\"\n}\n.wi-owm-721:before{content:\"\\F0B6\"\n}\n.wi-owm-731:before{content:\"\\F063\"\n}\n.wi-owm-741:before{content:\"\\F014\"\n}\n.wi-owm-761:before{content:\"\\F063\"\n}\n.wi-owm-762:before{content:\"\\F063\"\n}\n.wi-owm-771:before{content:\"\\F011\"\n}\n.wi-owm-781:before{content:\"\\F056\"\n}\n.wi-owm-800:before{content:\"\\F00D\"\n}\n.wi-owm-801:before{content:\"\\F011\"\n}\n.wi-owm-802:before{content:\"\\F011\"\n}\n.wi-owm-803:before{content:\"\\F012\"\n}\n.wi-owm-804:before{content:\"\\F013\"\n}\n.wi-owm-900:before{content:\"\\F056\"\n}\n.wi-owm-901:before{content:\"\\F01D\"\n}\n.wi-owm-902:before{content:\"\\F073\"\n}\n.wi-owm-903:before{content:\"\\F076\"\n}\n.wi-owm-904:before{content:\"\\F072\"\n}\n.wi-owm-905:before{content:\"\\F021\"\n}\n.wi-owm-906:before{content:\"\\F015\"\n}\n.wi-owm-957:before{content:\"\\F050\"\n}\n.wi-owm-day-200:before{content:\"\\F010\"\n}\n.wi-owm-day-201:before{content:\"\\F010\"\n}\n.wi-owm-day-202:before{content:\"\\F010\"\n}\n.wi-owm-day-210:before{content:\"\\F005\"\n}\n.wi-owm-day-211:before{content:\"\\F005\"\n}\n.wi-owm-day-212:before{content:\"\\F005\"\n}\n.wi-owm-day-221:before{content:\"\\F005\"\n}\n.wi-owm-day-230:before{content:\"\\F010\"\n}\n.wi-owm-day-231:before{content:\"\\F010\"\n}\n.wi-owm-day-232:before{content:\"\\F010\"\n}\n.wi-owm-day-300:before{content:\"\\F00B\"\n}\n.wi-owm-day-301:before{content:\"\\F00B\"\n}\n.wi-owm-day-302:before{content:\"\\F008\"\n}\n.wi-owm-day-310:before{content:\"\\F008\"\n}\n.wi-owm-day-311:before{content:\"\\F008\"\n}\n.wi-owm-day-312:before{content:\"\\F008\"\n}\n.wi-owm-day-313:before{content:\"\\F008\"\n}\n.wi-owm-day-314:before{content:\"\\F008\"\n}\n.wi-owm-day-321:before{content:\"\\F00B\"\n}\n.wi-owm-day-500:before{content:\"\\F00B\"\n}\n.wi-owm-day-501:before{content:\"\\F008\"\n}\n.wi-owm-day-502:before{content:\"\\F008\"\n}\n.wi-owm-day-503:before{content:\"\\F008\"\n}\n.wi-owm-day-504:before{content:\"\\F008\"\n}\n.wi-owm-day-511:before{content:\"\\F006\"\n}\n.wi-owm-day-520:before{content:\"\\F009\"\n}\n.wi-owm-day-521:before{content:\"\\F009\"\n}\n.wi-owm-day-522:before{content:\"\\F009\"\n}\n.wi-owm-day-531:before{content:\"\\F00E\"\n}\n.wi-owm-day-600:before{content:\"\\F00A\"\n}\n.wi-owm-day-601:before{content:\"\\F0B2\"\n}\n.wi-owm-day-602:before{content:\"\\F00A\"\n}\n.wi-owm-day-611:before{content:\"\\F006\"\n}\n.wi-owm-day-612:before{content:\"\\F006\"\n}\n.wi-owm-day-615:before{content:\"\\F006\"\n}\n.wi-owm-day-616:before{content:\"\\F006\"\n}\n.wi-owm-day-620:before{content:\"\\F006\"\n}\n.wi-owm-day-621:before{content:\"\\F00A\"\n}\n.wi-owm-day-622:before{content:\"\\F00A\"\n}\n.wi-owm-day-701:before{content:\"\\F009\"\n}\n.wi-owm-day-711:before{content:\"\\F062\"\n}\n.wi-owm-day-721:before{content:\"\\F0B6\"\n}\n.wi-owm-day-731:before{content:\"\\F063\"\n}\n.wi-owm-day-741:before{content:\"\\F003\"\n}\n.wi-owm-day-761:before{content:\"\\F063\"\n}\n.wi-owm-day-762:before{content:\"\\F063\"\n}\n.wi-owm-day-781:before{content:\"\\F056\"\n}\n.wi-owm-day-800:before{content:\"\\F00D\"\n}\n.wi-owm-day-801:before{content:\"\\F000\"\n}\n.wi-owm-day-802:before{content:\"\\F000\"\n}\n.wi-owm-day-803:before{content:\"\\F000\"\n}\n.wi-owm-day-804:before{content:\"\\F00C\"\n}\n.wi-owm-day-900:before{content:\"\\F056\"\n}\n.wi-owm-day-902:before{content:\"\\F073\"\n}\n.wi-owm-day-903:before{content:\"\\F076\"\n}\n.wi-owm-day-904:before{content:\"\\F072\"\n}\n.wi-owm-day-906:before{content:\"\\F004\"\n}\n.wi-owm-day-957:before{content:\"\\F050\"\n}\n.wi-owm-night-200:before{content:\"\\F02D\"\n}\n.wi-owm-night-201:before{content:\"\\F02D\"\n}\n.wi-owm-night-202:before{content:\"\\F02D\"\n}\n.wi-owm-night-210:before{content:\"\\F025\"\n}\n.wi-owm-night-211:before{content:\"\\F025\"\n}\n.wi-owm-night-212:before{content:\"\\F025\"\n}\n.wi-owm-night-221:before{content:\"\\F025\"\n}\n.wi-owm-night-230:before{content:\"\\F02D\"\n}\n.wi-owm-night-231:before{content:\"\\F02D\"\n}\n.wi-owm-night-232:before{content:\"\\F02D\"\n}\n.wi-owm-night-300:before{content:\"\\F02B\"\n}\n.wi-owm-night-301:before{content:\"\\F02B\"\n}\n.wi-owm-night-302:before{content:\"\\F028\"\n}\n.wi-owm-night-310:before{content:\"\\F028\"\n}\n.wi-owm-night-311:before{content:\"\\F028\"\n}\n.wi-owm-night-312:before{content:\"\\F028\"\n}\n.wi-owm-night-313:before{content:\"\\F028\"\n}\n.wi-owm-night-314:before{content:\"\\F028\"\n}\n.wi-owm-night-321:before{content:\"\\F02B\"\n}\n.wi-owm-night-500:before{content:\"\\F02B\"\n}\n.wi-owm-night-501:before{content:\"\\F028\"\n}\n.wi-owm-night-502:before{content:\"\\F028\"\n}\n.wi-owm-night-503:before{content:\"\\F028\"\n}\n.wi-owm-night-504:before{content:\"\\F028\"\n}\n.wi-owm-night-511:before{content:\"\\F026\"\n}\n.wi-owm-night-520:before{content:\"\\F029\"\n}\n.wi-owm-night-521:before{content:\"\\F029\"\n}\n.wi-owm-night-522:before{content:\"\\F029\"\n}\n.wi-owm-night-531:before{content:\"\\F02C\"\n}\n.wi-owm-night-600:before{content:\"\\F02A\"\n}\n.wi-owm-night-601:before{content:\"\\F0B4\"\n}\n.wi-owm-night-602:before{content:\"\\F02A\"\n}\n.wi-owm-night-611:before{content:\"\\F026\"\n}\n.wi-owm-night-612:before{content:\"\\F026\"\n}\n.wi-owm-night-615:before{content:\"\\F026\"\n}\n.wi-owm-night-616:before{content:\"\\F026\"\n}\n.wi-owm-night-620:before{content:\"\\F026\"\n}\n.wi-owm-night-621:before{content:\"\\F02A\"\n}\n.wi-owm-night-622:before{content:\"\\F02A\"\n}\n.wi-owm-night-701:before{content:\"\\F029\"\n}\n.wi-owm-night-711:before{content:\"\\F062\"\n}\n.wi-owm-night-721:before{content:\"\\F0B6\"\n}\n.wi-owm-night-731:before{content:\"\\F063\"\n}\n.wi-owm-night-741:before{content:\"\\F04A\"\n}\n.wi-owm-night-761:before{content:\"\\F063\"\n}\n.wi-owm-night-762:before{content:\"\\F063\"\n}\n.wi-owm-night-781:before{content:\"\\F056\"\n}\n.wi-owm-night-800:before{content:\"\\F02E\"\n}\n.wi-owm-night-801:before{content:\"\\F022\"\n}\n.wi-owm-night-802:before{content:\"\\F022\"\n}\n.wi-owm-night-803:before{content:\"\\F022\"\n}\n.wi-owm-night-804:before{content:\"\\F086\"\n}\n.wi-owm-night-900:before{content:\"\\F056\"\n}\n.wi-owm-night-902:before{content:\"\\F073\"\n}\n.wi-owm-night-903:before{content:\"\\F076\"\n}\n.wi-owm-night-904:before{content:\"\\F072\"\n}\n.wi-owm-night-906:before{content:\"\\F024\"\n}\n.wi-owm-night-957:before{content:\"\\F050\"\n}\n.wi-wu-chanceflurries:before{content:\"\\F064\"\n}\n.wi-wu-chancerain:before{content:\"\\F019\"\n}\n.wi-wu-chancesleat:before{content:\"\\F0B5\"\n}\n.wi-wu-chancesnow:before{content:\"\\F01B\"\n}\n.wi-wu-chancetstorms:before{content:\"\\F01E\"\n}\n.wi-wu-clear:before{content:\"\\F00D\"\n}\n.wi-wu-cloudy:before{content:\"\\F002\"\n}\n.wi-wu-flurries:before{content:\"\\F064\"\n}\n.wi-wu-hazy:before{content:\"\\F0B6\"\n}\n.wi-wu-mostlycloudy:before{content:\"\\F002\"\n}\n.wi-wu-mostlysunny:before{content:\"\\F00D\"\n}\n.wi-wu-partlycloudy:before{content:\"\\F002\"\n}\n.wi-wu-partlysunny:before{content:\"\\F00D\"\n}\n.wi-wu-rain:before{content:\"\\F01A\"\n}\n.wi-wu-sleat:before{content:\"\\F0B5\"\n}\n.wi-wu-snow:before{content:\"\\F01B\"\n}\n.wi-wu-sunny:before{content:\"\\F00D\"\n}\n.wi-wu-tstorms:before{content:\"\\F01E\"\n}\n.wi-wu-unknown:before{content:\"\\F00D\"\n}\n", ""]);

// exports


/***/ }),

/***/ 937:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/fonts/vendor/weathericons/weathericons-regular-webfont.woff?8cac70ebda3f23ce472110d9f21e8593";

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(939);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("5352b6b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-758bec7d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./weather.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-758bec7d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./weather.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(225);
exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*weather widget*/\n.weather-widget[data-v-758bec7d] {\n    background-image: url(" + escape(__webpack_require__(868)) + ");\n    background-size: cover;\n    color: #fff;\n    padding: 26px 0;\n    position: relative;\n    border-radius: 5px;\n}\n.weather-data .temperature[data-v-758bec7d] {\n    padding-top: 29px;\n    padding-left: 10%;\n}\n.weather-data .temperature h2 span[data-v-758bec7d] {\n    font-size: 60px;\n    margin-right: 40px;\n}\n.weather-data .temperature .icon[data-v-758bec7d] {\n    position: relative;\n    font-size: 82px;\n    z-index: 0;\n}\n.weather-data .temperature .location[data-v-758bec7d] {\n    font-size: 14px;\n    position: absolute;\n}\n.weather-footer[data-v-758bec7d] {\n    background: rgba(0, 0, 0, 0.4);\n    height: 100px;\n    bottom: 0;\n    width: 100%;\n    position: relative;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.weather-footer h5[data-v-758bec7d] {\n    color: #ccc;\n}\n.weather-footer i[data-v-758bec7d] {\n    font-size: 22px;\n    margin: 5px 0 8px 0;\n}\n.weather-footer p[data-v-758bec7d] {\n    font-size: 15px;\n}\n.weather-footer .popup[data-v-758bec7d] {\n    -webkit-transition: .1s ease-in-out;\n    transition: .1s ease-in-out;\n}\n.weather-footer .popup[data-v-758bec7d]:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n@media screen and (max-width: 768px) {\n.weather-data .temperature h2 span.pull-right[data-v-758bec7d] {\n        font-size: 45px;\n        margin-right: 20px;\n        margin-top: -15px;\n}\n.weather-data .temperature .icon[data-v-758bec7d] {\n        font-size: 40px;\n}\n.weather-widget[data-v-758bec7d] {\n        padding: 70px 0;\n}\n}\n/*weather widget ends*/\n", ""]);

// exports


/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_geolocator__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_geolocator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_geolocator__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumWait: 10000,
    maximumAge: 0, // disable cache
    desiredAccuracy: 30, // meters
    fallbackToIP: true
};
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        id: {
            type: String,
            default: "1269843"
        }
    },
    components: {},
    mounted: function mounted() {
        this.getLocation();
    },

    watch: {
        id: function id() {
            this.showdata();
        }
    },

    data: function data() {
        return {
            weather: {},
            cords: null,
            // ==get api key from http://openweathermap.org/api
            appid: this.$store.state.openWeather_key
        };
    },

    methods: {
        getLocation: function getLocation() {
            var x = this;
            __WEBPACK_IMPORTED_MODULE_0_geolocator___default.a.locate(options, function (err, location) {
                if (err) return console.log(err);
                x.cords = location;
                x.showdata();
            });
            this.showdata();
        },
        showdata: function showdata() {
            var _this = this;

            var getid = "id=" + this.id;
            if (this.cords) {
                var getcords = "lat=" + this.cords.coords.latitude + "&lon=" + this.cords.coords.longitude;
            }
            var getdata = getcords ? getcords : getid;
            axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?" + getdata + "&appid=" + this.appid + "&units=metric&cnt=7").then(function (response) {
                _this.weather = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getday: function getday(dt) {
            return new Date(dt * 1000).toString().split(" ")[0];
        }
    }
});

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("geolocator", [], factory);
	else if(typeof exports === 'object')
		exports["geolocator"] = factory();
	else
		root["geolocator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _toString = Object.prototype.toString;

/**
 * Simple utility methods; internally used within Geolocator core;
 * made publically accessible.
 * @type {Object}
 * @readonly
 *
 * @license MIT
 * @copyright 2016, Onur Yıldırım (onur@cutepilot.com)
 */
var utils = {
    noop: function noop() {},


    // ---------------------------
    // Validation
    // ---------------------------

    /**
     * Checks if the type of the given value is `String`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isString: function isString(value) {
        return typeof value === 'string';
    },
    isStringSet: function isStringSet(value) {
        return typeof value === 'string' && value.trim().length > 0;
    },


    /**
     * Checks if the type of the given value is `Number`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isNumber: function isNumber(value) {
        return typeof value === 'number';
    },


    /**
     * Checks if the type of the given value is an `Object` or `Function`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isObject: function isObject(value) {
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
        return Boolean(value) && (type === 'object' || type === 'function');
    },


    /**
     * Checks if the type of the given value is `Function`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isFunction: function isFunction(value) {
        return typeof value === 'function';
    },


    /**
     * Checks if the type of the given value is `Array`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isArray: function isArray(value) {
        return Boolean(value) && _toString.call(value) === '[object Array]';
    },


    /**
     * Checks if the given object is a non-empty `Array`.
     * @memberof utils
     *
     * @param {*} array - Object to be checked.
     * @returns {Boolean}
     */
    isFilledArray: function isFilledArray(array) {
        return utils.isArray(array) && array.length > 0;
    },


    /**
     * Checks if the given value is a plain `Object`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isPlainObject: function isPlainObject(value) {
        return Boolean(value) && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _toString.call(value) === '[object Object]';
    },


    /**
     * Checks if the given value is a `Date`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isDate: function isDate(value) {
        return Boolean(value) && _toString.call(value) === '[object Date]';
    },


    /**
     * Checks if the given object is a DOM element.
     * @memberof utils
     *
     * @param {Object} object - Object to be checked.
     * @returns {Boolean}
     */
    isElement: function isElement(object) {
        if (!object) return false;
        return object instanceof HTMLElement || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.nodeType === 1;
    },


    /**
     * Checks if the given object is a DOM node.
     * @memberof utils
     *
     * @param {Object} object - Object to be checked.
     * @returns {Boolean}
     */
    isNode: function isNode(object) {
        if (!object) return false;
        return object instanceof Node || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number';
    },


    /**
     * Checks if the given object is a jQuery instance.
     * This will still return `false` if the jQuery instance has no items.
     * @memberof utils
     *
     * @param {Object} object - Object to be checked.
     * @returns {Boolean}
     */
    isJQueryObject: function isJQueryObject(object) {
        if (!object) return false;
        return 'jQuery' in window && object instanceof window.jQuery && Boolean(object[0]);
        // http://api.jquery.com/jquery-2/
        // || (typeof object === 'object' && Boolean(object.jquery));
    },


    /**
     * Checks if the type of the given value is an HTML5 `PositionError`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isPositionError: function isPositionError(value) {
        return Boolean(value) && _toString.call(value) === '[object PositionError]';
    },


    /**
     * Checks if the given value is an instance of `Error` or HTML5 `PositionError`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isError: function isError(value) {
        return value instanceof Error || utils.isPositionError(value);
    },


    // ---------------------------
    // String
    // ---------------------------

    /**
     * Removes the query string portion from the given URL string.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the rest of the string.
     */
    removeQuery: function removeQuery(str) {
        return str.replace(/\?.*$/, '');
    },


    /**
     * Removes the protocol portion from the given URL string.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the rest of the string.
     */
    removeProtocol: function removeProtocol(str) {
        return str.replace(/^(.*:)?\/\//, '');
    },


    /**
     * Sets the protocol of the given URL.
     * @memberof utils
     *
     * @param {String} url
     *        The URL to be modified.
     * @param {Boolean} [https]
     *        Specifies whether to set the protocol to HTTPS.
     *        If omitted, current page protocol will be used.
     *
     * @returns {String} - The modified URL string.
     */
    setProtocol: function setProtocol(url, https) {
        var p = void 0;
        if (https === undefined || https === null) {
            p = window.location.protocol;
        } else {
            p = https ? 'https:' : 'http:';
        }
        url = utils.removeProtocol(url);
        return p + '//' + url;
    },


    /**
     * Removes both the leading and trailing dots from the given string.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the rest of the string.
     */
    trimDots: function trimDots(str) {
        return str.replace(/^\.+?(.*?)\.+?$/g, '$1');
    },


    /**
     * URL-Encodes the given string. Note that the encoding is done Google's
     * way; that is, spaces are replaced with `+` instead of `%20`.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the encoded string.
     */
    encodeURI: function encodeURI(str) {
        return encodeURIComponent(str).replace(/%20/g, '+');
    },


    /**
     * URL-Decodes the given string. This is the reverse of `utils.encodeURI()`;
     * so pluses (`+`) are replaced with spaces.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the decoded string.
     */
    decodeURI: function decodeURI(str) {
        return decodeURIComponent(str.replace(/\+/g, '%20'));
    },


    /**
     * Converts the given value to string.
     * `null` and `undefined` converts to empty string.
     * If value is a function, it's native `toString()` method is used.
     * Otherwise, value is coerced.
     * @memberof utils
     *
     * @param {*} value - String to be converted.
     * @returns {String} - Returns the result string.
     */
    toString: function toString(value) {
        if (value === null || value === undefined) return '';
        if (value.toString && utils.isFunction(value.toString)) {
            return value.toString();
        }
        return String(value);
    },


    /**
     * Generates a random string with the number of characters.
     * @memberof utils
     *
     * @param {Number} [len=1] - Length of the string.
     * @returns {String} - Returns a random string.
     */
    randomString: function randomString(len) {
        if (!len || !utils.isNumber(len)) len = 1;
        len = -Math.abs(len);
        return Math.random().toString(36).slice(len);
    },


    /**
     * Gets the abbreviation of the given phrase.
     * @memberof utils
     *
     * @param {String} str
     *        String to abbreviate.
     * @param {Object} [options]
     *        Abbreviation options.
     *     @param {Boolean} [options.upper=true]
     *            Whether to convert to upper-case.
     *     @param {Boolean} [options.dots=true]
     *            Whether to add dots after each abbreviation.
     *
     * @returns {String} - Returns the abbreviation of the given phrase.
     */
    abbr: function abbr(str, options) {
        options = utils.extend({
            upper: true,
            dots: true
        }, options);
        var d = options.dots ? '.' : '',
            s = str.match(/(\b\w)/gi).join(d) + d;
        return options.upper ? s.toUpperCase() : s;
    },


    /**
     * Builds URI parameters from the given object.
     * Note: This does not iterate deep objects.
     * @memberof utils
     *
     * @param {Object} obj - Object to be processed.
     * @param {Object} options - Parameterize options.
     *     @param {Boolean} [options.encode=true]
     *            Whether to encode URI components.
     *     @param {String} [options.operator="="]
     *     @param {String} [options.separator="&"]
     *     @param {Array} [options.include]
     *            Keys to be included in the output params. If defined,
     *            `options.exclude` is ignored.
     *     @param {Array} [options.exclude]
     *            Keys to be excluded from the output params.
     *
     * @returns {String} - URI parameters string.
     */
    params: function params(obj, options) {
        if (!utils.isPlainObject(obj) || Object.keys(obj).length === 0) {
            return '';
        }

        options = utils.extend({
            encode: true,
            operator: '=',
            separator: '&',
            include: undefined,
            exclude: undefined
        }, options);

        var params = [],
            inc = utils.isArray(options.include) ? options.include : null,
            exc = !inc && utils.isArray(options.exclude) ? options.exclude : null;
        utils.forIn(obj, function (value, key) {
            if ((!inc || inc.indexOf(key) >= 0) && (!exc || exc.indexOf(key) < 0)) {
                var v = utils.toString(value);
                v = options.encode ? utils.encodeURI(v) : v;
                var k = options.encode ? utils.encodeURI(key) : key;
                params.push(k + options.operator + v);
            }
        });

        return params.join(options.separator);
    },


    /**
     * Gets the object from the given object notation string.
     * @private
     *
     * @param {String} notation - Object notation.
     * @returns {*} - Any existing object.
     */
    notateGlobalObj: function notateGlobalObj(notation) {
        notation = utils.trimDots(notation);
        var levels = notation.split('.'),
            o = window;
        if (levels[0] === 'window' || levels[0] === 'document') {
            levels.shift();
        }
        levels.forEach(function (note) {
            o = o[note];
        });
        return o;
    },


    // ---------------------------
    // Object
    // ---------------------------

    /**
     * Iterates over own properties of an object invoking a callback for each
     * property.
     * @memberof utils
     *
     * @param {Object} obj
     *        Object to be processed.
     * @param {Function} callback
     *        Callback function with the following signature:
     *        `function (value, key, object) { ... }`.
     *        Explicitly returning `false` will exit the iteration early.
     * @returns {void}
     */
    forIn: function forIn(obj, callback) {
        var k = void 0;
        for (k in obj) {
            // if (obj.hasOwnProperty(k)) {} // Do this inside callback if needed.
            if (callback(obj[k], k, obj) === false) break;
        }
    },


    /**
     * Extends the given object with the specified sources.
     * Right most source overwrites the previous.
     * NOTE: This is not a full implementation. Use with caution.
     * @memberof utils
     *
     * @param {Object} destination
     *        Destionation Object that will be extended and holds the default
     *        values.
     * @param {...Object} sources
     *        Source objects to be merged.
     *
     * @returns {Object} - Returns the extended object.
     */
    extend: function extend(destination) {
        if (!utils.isObject(destination)) return {};
        var key = void 0,
            value = void 0;

        for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            sources[_key - 1] = arguments[_key];
        }

        sources.forEach(function (source) {
            for (key in source) {
                // eslint-disable-line
                value = source[key];
                if (utils.isArray(value)) {
                    destination[key] = value.concat();
                } else if (utils.isDate(value)) {
                    destination[key] = new Date(value);
                } else if (utils.isFunction(value)) {
                    // should be before object
                    destination[key] = value;
                } else if (utils.isObject(value)) {
                    destination[key] = utils.extend({}, value);
                } else {
                    destination[key] = value;
                }
            }
        });
        return destination;
    },


    /**
     * Clones the given object.
     * NOTE: This is not a full implementation. Use with caution.
     * @memberof utils
     *
     * @param {Object} obj
     *        Target Object to be cloned.
     * @param {Object|Array} [options]
     *        Clone options or array of keys to be cloned.
     *     @param {Array} [options.keys]
     *            Keys of the properties to be cloned.
     *     @param {Boolean} [options.own=true]
     *            Whether to clone own properties only. This is only effective
     *            if `keys` is not defined.
     *
     * @returns {Object} - Returns the cloned object.
     */
    clone: function clone(obj, options) {
        if (!obj) return {};

        if (utils.isArray(options)) {
            options = { keys: options };
        }
        options = utils.extend({
            keys: null,
            own: true
        }, options);

        var include = void 0,
            cloned = {};

        utils.forIn(obj, function (value, key) {
            include = options.keys ? options.keys.indexOf(key) >= 0 : options.own && obj.hasOwnProperty(key) || !options.own;
            if (include) {
                if (utils.isObject(value)) {
                    cloned[key] = utils.clone(value, options);
                } else {
                    cloned[key] = value;
                }
            }
        });
        return cloned;
    },


    /**
     *  Maps the values of the given object to a schema to re-structure a new
     *  object.
     *  @memberof utils
     *
     *  @param {Object} obj
     *         Original object to be mapped.
     *  @param {Object} schema
     *         Schema to be used to map the object.
     *
     *  @returns {Object} - Mapped object.
     */
    mapToSchema: function mapToSchema(obj, schema) {
        var mapped = {};
        utils.forIn(schema, function (value, key) {
            if (utils.isPlainObject(value)) {
                mapped[key] = utils.mapToSchema(obj, value);
            } else {
                mapped[key] = obj[value];
            }
        });
        return mapped;
    },


    // ---------------------------
    // Misc
    // ---------------------------

    /**
     * Safely parses the given JSON `String` into an `Object`.
     * The only difference from `JSON.parse()` is that this method does not
     * throw for invalid input. Instead, returns `null`.
     * @memberof utils
     *
     * @param {String} str - JSON string to be parsed
     * @returns {Object|null} - Returns the parsed `Object` or `null` if the
     * input is invalid.
     */
    safeJsonParse: function safeJsonParse(str) {
        var o = null;
        try {
            o = JSON.parse(str);
        } catch (e) {}
        return o;
    },


    /**
     * Gets a timestamp that is seconds or milliseconds since midnight,
     * January 1, 1970 UTC.
     * @memberof utils
     *
     * @param {Boolean} [seconds=false]
     *        Specifies whether seconds should be returned instead of
     *        milliseconds.
     *
     * @returns {Number} - Returns seconds or milliseconds since midnight,
     * January 1, 1970 UTC.
     */
    time: function time(seconds) {
        var ts = Date.now();
        return seconds ? parseInt(ts / 1000, 10) : ts;
    }
};

exports.default = utils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GOOGLE_MAPS_API_BASE = '//maps.googleapis.com/maps/api';

/**
 * This file only includes partial documentation about `geolocator` enumerations.
 * Note that these enumerations are mostly an aggregation of
 * {@link https://developers.google.com/maps/documentation/javascript|Google Maps API} constants.
 *
 * @private
 * @readonly
 */
var enums = Object.freeze({
  /**
   * Enumerates API endpoints used within Geolocator core.
   *
   * @enum {String}
   * @readonly
   * @private
   */
  URL: {
    /**
     *  Public IP retrieval (free) service.
     *  @type {String}
     *  @private
     */
    IP: '//api.ipify.org',
    /**
     *  Country SVG flags.
     *  e.g. <url>/tr.svg for Turkey flag.
     *  @type {String}
     *  @private
     */
    FLAG: '//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/',
    /**
     * Google Maps API bootstrap endpoint that loads all of the main
     * Javascript objects and symbols for use in the Maps API.
     * Some Maps API features are also available in self-contained
     * libraries which are not loaded unless you specifically request them.
     * See {@link https://developers.google.com/maps/documentation/javascript/libraries|details}.
     * @type {String}
     * @private
     */
    GOOGLE_MAPS_API: GOOGLE_MAPS_API_BASE + '/js',
    /**
     * Google Maps API Static Map endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_SATATIC_MAP: GOOGLE_MAPS_API_BASE + '/staticmap',
    /**
     * Google Geolocation API endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_GEOLOCATION: '//www.googleapis.com/geolocation/v1/geolocate',
    /**
     * Google Geocode API endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_GEOCODE: '//maps.googleapis.com/maps/api/geocode/json',
    /**
     * Google TimeZone API endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_TIMEZONE: '//maps.googleapis.com/maps/api/timezone/json',
    /**
     * Google Distance Matrix API endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_DISTANCE_MATRIX: '//maps.googleapis.com/maps/api/distancematrix/json'
  },
  /**
   * Enumerates Google map types.
   * @memberof! geolocator
   *
   * @enum {String}
   * @readonly
   */
  MapTypeId: {
    /**
     * Map type that displays a transparent layer of major streets on
     * satellite images.
     * @type {String}
     */
    HYBRID: 'hybrid',
    /**
     * Map type that displays a normal street map.
     * @type {String}
     */
    ROADMAP: 'roadmap',
    /**
     * Map type that displays satellite images.
     * @type {String}
     */
    SATELLITE: 'satellite',
    /**
     * Map type displays maps with physical features such as terrain and
     * vegetation.
     * @type {String}
     */
    TERRAIN: 'terrain'
  },
  /**
   * Enumerates Google location types.
   * @memberof! geolocator
   *
   * @enum {String}
   * @readonly
   */
  LocationType: {
    /**
     * Indicates that the returned result is a precise geocode for which
     * we have location information accurate down to street address
     * precision.
     * @type {String}
     */
    ROOFTOP: 'ROOFTOP',
    /**
     * Indicates that the returned result reflects an approximation
     * (usually on a road) interpolated between two precise points (such as
     * intersections). Interpolated results are generally returned when
     * rooftop geocodes are unavailable for a street address.
     * @type {String}
     */
    RANGE_INTERPOLATED: 'RANGE_INTERPOLATED',
    /**
     * Indicates that the returned result is the geometric center of a
     * result such as a polyline (for example, a street) or polygon
     * (region).
     * @type {String}
     */
    GEOMETRIC_CENTER: 'GEOMETRIC_CENTER',
    /**
     * Indicates that the returned result is approximate.
     * @type {String}
     */
    APPROXIMATE: 'APPROXIMATE'
  },
  /**
   * Enumerates Google travel modes.
   * @memberof! geolocator
   *
   * @enum {String}
   * @readonly
   */
  TravelMode: {
    /**
     * Indicates distance calculation using the road network.
     * @type {String}
     */
    DRIVING: 'DRIVING',
    /**
     * Requests distance calculation for walking via pedestrian paths &
     * sidewalks (where available).
     * @type {String}
     */
    WALKING: 'WALKING',
    /**
     * Requests distance calculation for bicycling via bicycle paths &
     * preferred streets (where available).
     * @type {String}
     */
    BICYCLING: 'BICYCLING',
    /**
     * Requests distance calculation via public transit routes (where
     * available). This value may only be specified if the request includes
     * an API key or a Google Maps APIs Premium Plan client ID. If you set
     * the mode to transit you can optionally specify either a
     * `departureTime` or an `arrivalTime`. If neither time is specified,
     * the `departureTime` defaults to now (that is, the departure time defaults
     * to the current time). You can also optionally include a `transitMode`
     * and/or a `transitRoutingPreference`.
     * @type {String}
     */
    TRANSIT: 'TRANSIT'
  },
  // /**
  //  * Enumerates Google route restrictions.
  //  * @memberof! geolocator
  //  *
  //  * @enum {String}
  //  * @readonly
  //  */
  // RouteRestriction: {
  //     TOLLS: 'tolls',
  //     HIGHWAYS: 'highways',
  //     FERRIES: 'ferries',
  //     INDOOR: 'indoor'
  // },
  /**
   * Enumerates Google unit systems.
   * @memberof! geolocator
   *
   * @enum {Number}
   * @readonly
   */
  UnitSystem: {
    /**
     * Distances in kilometers and meters.
     * @type {Number}
     */
    METRIC: 0,
    /**
     * Distances defined in miles and feet.
     * @type {Number}
     */
    IMPERIAL: 1
  },
  /**
   * Enumerates mobile radio types.
   * @memberof! geolocator
   *
   * @enum {String}
   * @readonly
   */
  RadioType: {
    /**
     * LTE (Long-Term Evolution) mobile radio type.
     * @type {String}
     */
    LTE: 'lte',
    /**
     * GSM (Global System for Mobile Communications) mobile radio type.
     * @type {String}
     */
    GSM: 'gsm',
    /**
     * CDMA (Code division multiple access) mobile radio access technology.
     * @type {String}
     */
    CDMA: 'cdma',
    /**
     * Wideband CDMA mobile radio access technology.
     * @type {String}
     */
    WCDMA: 'wcdma'
  },
  /**
   * Enumerates formulas/algorithms for calculating the distance between two
   * lat/lng points.
   * @memberof! geolocator
   *
   * @readonly
   * @enum {String}
   *
   * @todo {@link https://en.wikipedia.org/wiki/Vincenty%27s_formulae|Vincenty's Formula}
   */
  DistanceFormula: {
    /**
     * Haversine formula for calculating the distance between two lat/lng points
     * by relating the sides and angles of spherical triangles.
     * @see {@link http://en.wikipedia.org/wiki/Haversine_formula|Haversine_formula}.
     * @type {String}
     */
    HAVERSINE: 'haversine',
    /**
     * Formula based on the Pythagoras Theorem for calculating the
     * distance between two lat/lng points on a Equirectangular projection
     * to account for curvature of the longitude lines.
     * @see {@link https://en.wikipedia.org/wiki/Pythagorean_theorem|Pythagorean_theorem}
     * @type {String}
     */
    PYTHAGOREAN: 'pythagorean'
  },
  /**
   *  Enumerates the image formats used for getting static Google Map images.
   *  @memberof! geolocator
   *
   *  @readonly
   *  @enum {String}
   */
  ImageFormat: {
    /**
     *  Specifies the PNG image format.
     *  Same as `PNG_8`.
     *  @type {String}
     */
    PNG: 'png',
    /**
     *  Specifies the 8-bit PNG image format.
     *  Same as `PNG`.
     *  @type {String}
     */
    PNG_8: 'png8',
    /**
     *  Specifies the 32-bit PNG image format.
     *  @type {String}
     */
    PNG_32: 'png32',
    /**
     *  Specifies the GIF image format.
     *  @type {String}
     */
    GIF: 'gif',
    /**
     *  Specifies the JPEG compressed image format.
     *  @type {String}
     */
    JPG: 'jpg',
    /**
     *  Specifies a non-progressive JPEG compression image format.
     *  @type {String}
     */
    JPG_BASELINE: 'jpg-baseline'
  }
});

exports.default = enums;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Geolocator Error class that provides a common type of error object for the
 * various APIs implemented in Geolocator. All callbacks of Geolocator will
 * include an instance of this object as the first argument; if the
 * corresponding operation fails. Also all thrown errors will be an instance of
 * this object.
 *
 * This object can be publicly accessed via `geolocator.Error`.
 *
 * @extends Error
 */
var GeoError = function () {
    // extends Error (doesn't work with transpilers)

    /**
     * Costructs a new instance of `GeoError`.
     *
     * @param {String} [code="UNKNOWN_ERROR"]
     *        Any valid Geolocator Error code.
     *        See {@link #GeoError.Code|`GeoError.Code` enumeration} for
     *        possible values.
     * @param {String} [message]
     *        Error message. If omitted, this will be set to `code`.
     *
     * @returns {GeoError}
     *
     * @example
     * var GeoError = geolocator.Error,
     *     error = new GeoError(GeoError.Code.GEOLOCATION_NOT_SUPPORTED);
     * console.log(error.code); // "GEOLOCATION_NOT_SUPPORTED"
     * console.log(error instanceof GeoError); // true
     */
    function GeoError() {
        var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : GeoError.Code.UNKNOWN_ERROR;
        var message = arguments[1];

        _classCallCheck(this, GeoError);

        message = message || String(code);

        /**
         *  Gets the name of the Error object.
         *  This always returns `"GeoError"`.
         *  @name GeoError#name
         *  @type {String}
         */
        Object.defineProperty(this, 'name', {
            enumerable: false,
            writable: false,
            value: 'GeoError' // this.constructor.name
        });

        /**
         *  Gets the error code set for this instance.
         *  This will return one of
         *  {@link #GeoError.Code|`GeoError.Code` enumeration}.
         *  @name GeoError#code
         *  @type {String}
         */
        Object.defineProperty(this, 'code', {
            enumerable: false,
            writable: true,
            value: code
        });

        /**
         *  Gets the error message set for this instance.
         *  If no message is set, this will return the error code value.
         *  @name GeoError#message
         *  @type {String}
         */
        Object.defineProperty(this, 'message', {
            enumerable: false,
            writable: true,
            value: message
        });

        if (Error.hasOwnProperty('captureStackTrace')) {
            // V8
            Error.captureStackTrace(this, this.constructor);
        } else {
            /**
             *  Gets the error stack for this instance.
             *  @name GeoError#stack
             *  @type {String}
             */
            Object.defineProperty(this, 'stack', {
                enumerable: false,
                writable: false,
                value: new Error(message).stack
            });
        }
    }

    /**
     * Creates a new instance of `GeoError` from the given value.
     *
     * @param {*} [err]
     *        Value to be transformed. This is used to determine the proper
     *        error code for the created instance. If an `Error` or `Object` is
     *        passed, its `message` property is checked if it matches any of the
     *        valid error codes. If omitted or no match is found, error code
     *        `GeoError.Code.UNKNOWN_ERROR` will be used as default.
     *
     * @returns {GeoError}
     *
     * @example
     * var GeoError = geolocator.Error,
     * 	   error = GeoError.create();
     * console.log(error.code); // "UNKNOWN_ERROR"
     * error = GeoError.create(GeoError.Code.GEOLOCATION_NOT_SUPPORTED);
     * console.log(error.code); // "GEOLOCATION_NOT_SUPPORTED"
     */


    _createClass(GeoError, null, [{
        key: 'create',
        value: function create(err) {
            if (err instanceof GeoError) {
                return err;
            }

            var code = void 0,
                msg = void 0;

            if (_utils2.default.isPositionError(err) && err.code) {
                switch (err.code) {
                    case 1:
                        code = GeoError.Code.PERMISSION_DENIED;
                        break;
                    case 2:
                        code = GeoError.Code.POSITION_UNAVAILABLE;
                        break;
                    case 3:
                        code = GeoError.Code.TIMEOUT;
                        break;
                    default:
                        code = GeoError.Code.UNKNOWN_ERROR;
                        break;
                }
                return new GeoError(code, err.message || '');
            }

            if (typeof err === 'string') {
                code = msg = err;
            } else if ((typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object') {
                code = err.code || err.message;
                msg = err.message || err.code;
            }
            if (code && GeoError.isValidErrorCode(code)) {
                return new GeoError(code, msg);
            }

            return new GeoError(GeoError.Code.UNKNOWN_ERROR, msg);
        }

        /**
         * Creates a new instance of `GeoError` from the given response object.
         * Since Geolocator implements various Google APIs, we might receive
         * responses if different structures. For example, some APIs return a
         * response object with a `status:String` property (such as the TimeZone
         * API) and some return responses with an `error:Object` property. This
         * method will determine the correct reason or message and return a
         * consistent error object.
         *
         * @param {Object|String} response
         *        Response (Object) or status (String) to be transformed.
         * @param {String} [message=null]
         *        Error message.
         *
         * @returns {GeoError}
         *          `GeoError` instance if response contains an error. Otherwise,
         *          returns `null`.
         *
         * @example
         * var error = geolocator.Error.fromResponse(googleResponse);
         * console.log(error.code); // "GOOGLE_KEY_INVALID"
         */

    }, {
        key: 'fromResponse',
        value: function fromResponse(response) {
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            // example Google Geolocation API response:
            // https://developers.google.com/maps/documentation/geolocation/intro#errors
            // {
            //      "error": {
            //          "errors": [
            //              {
            //                  "domain": "global",
            //                  "reason": "parseError",
            //                  "message": "Parse Error",
            //              }
            //          ],
            //      "code": 400,
            //      "message": "Parse Error"
            //      }
            // }
            // example Google TimeZone API response:
            // {
            //     "status": "REQUEST_DENIED"
            // }

            if (!response) return new GeoError(GeoError.Code.INVALID_RESPONSE);

            var errCode = void 0;

            if (_utils2.default.isString(response)) {
                errCode = errorCodeFromStatus(response);
                if (errCode) return new GeoError(errCode, message || response);
            }

            if (!_utils2.default.isObject(response)) return null;

            var errMsg = response.error_message || response.errorMessage || response.error && response.error.message || '' || '';

            if (response.status) {
                errCode = errorCodeFromStatus(response.status);
                if (errCode) return new GeoError(errCode, errMsg || message || response.status);
            }

            if (response.error) {
                var reason = response.reason || response.error.reason;
                if (!reason) {
                    var errors = response.error.errors;
                    if (_utils2.default.isArray(errors) && errors.length > 0) {
                        reason = errors[0].reason; // get the first reason only
                        errMsg = errMsg || errors[0].message; // update errMsg
                    }
                }
                errCode = errorCodeFromReason(reason) || GeoError.Code.UNKNOWN_ERROR;
                return new GeoError(errCode, errMsg || reason || message);
            }

            if (errMsg) {
                errCode = errorCodeFromStatus(errMsg) || GeoError.Code.UNKNOWN_ERROR;
                return new GeoError(errCode, errMsg || message);
            }

            return null;
        }

        /**
         *  Checks whether the given value is an instance of `GeoError`.
         *
         *  @param {*} err - Object to be checked.
         *
         *  @returns {Boolean}
         */

    }, {
        key: 'isGeoError',
        value: function isGeoError(err) {
            return err instanceof GeoError;
        }

        /**
         *  Checks whether the given value is a valid Geolocator Error code.
         *
         *  @param {String} errorCode - Error code to be checked.
         *
         *  @returns {Boolean}
         */

    }, {
        key: 'isValidErrorCode',
        value: function isValidErrorCode(errorCode) {
            var prop = void 0;
            for (prop in GeoError.Code) {
                if (GeoError.Code.hasOwnProperty(prop) && errorCode === GeoError.Code[prop]) {
                    return true;
                }
            }
            return false;
        }
    }]);

    return GeoError;
}();

/**
 *  Gets the string representation of the error instance.
 *
 *  @returns {String}
 */


GeoError.prototype.toString = function () {
    var msg = this.code !== this.message ? ' (' + this.message + ')' : '';
    return this.name + ': ' + this.code + msg;
};

// `class x extends Error` doesn't work when using an ES6 transpiler, such as
// Babel, since subclasses must extend a class. With Babel 6, we need
// transform-builtin-extend plugin for this to work. So we're extending from
// Error the old way. Now, `err instanceof Error` also returns `true`.
if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(GeoError.prototype, Error.prototype);
} else {
    GeoError.prototype = Object.create(Error.prototype);
}

// ---------------------------
// ERROR CODES
// ---------------------------

/**
 *  Enumerates Geolocator error codes.
 *  This enumeration combines Google API status (error) codes, HTML5 Geolocation
 *  position error codes and other Geolocator-specific error codes.
 *  @enum {String}
 */
GeoError.Code = {
    /**
     *  Indicates that HTML5 Geolocation API is not supported by the browser.
     *  @type {String}
     */
    GEOLOCATION_NOT_SUPPORTED: 'GEOLOCATION_NOT_SUPPORTED',
    /**
     *  Indicates that Geolocation-IP source is not set or invalid.
     *  @type {String}
     */
    INVALID_GEO_IP_SOURCE: 'INVALID_GEO_IP_SOURCE',
    /**
     *  The acquisition of the geolocation information failed because the
     *  page didn't have the permission to do it.
     *  @type {String}
     */
    PERMISSION_DENIED: 'PERMISSION_DENIED',
    /**
     *  The acquisition of the geolocation failed because at least one
     *  internal source of position returned an internal error.
     *  @type {String}
     */
    POSITION_UNAVAILABLE: 'POSITION_UNAVAILABLE',
    /**
     *  The time allowed to acquire the geolocation, defined by
     *  PositionOptions.timeout information was reached before
     *  the information was obtained.
     *  @type {String}
     */
    TIMEOUT: 'TIMEOUT',
    /**
     * Indicates that the request had one or more invalid parameters.
     * @type {String}
     */
    INVALID_PARAMETERS: 'INVALID_PARAMETERS',
    /**
     * Indicates that the service returned invalid response.
     * @type {String}
     */
    INVALID_RESPONSE: 'INVALID_RESPONSE',
    /**
     * Generally indicates that the query (address, components or latlng)
     * is missing.
     * @type {String}
     */
    INVALID_REQUEST: 'INVALID_REQUEST',
    /**
     * Indicates that the request was denied by the service.
     * This will generally occur because of a missing API key or because the request
     * is sent over HTTP instead of HTTPS.
     * @type {String}
     */
    REQUEST_DENIED: 'REQUEST_DENIED',
    /**
     * Indicates that the request has failed.
     * This will generally occur because of an XHR error.
     * @type {String}
     */
    REQUEST_FAILED: 'REQUEST_FAILED',
    /**
     * Indicates that Google API could not be loaded.
     * @type {String}
     */
    GOOGLE_API_FAILED: 'GOOGLE_API_FAILED',
    /**
     * Indicates that you are over your Google API quota.
     * @type {String}
     */
    OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
    /**
     * Indicates that you've exceeded the requests per second per user limit that
     * you configured in the Google Developers Console. This limit should be
     * configured to prevent a single or small group of users from exhausting your
     * daily quota, while still allowing reasonable access to all users.
     * @type {String}
     */
    USER_RATE_LIMIT_EXCEEDED: 'USER_RATE_LIMIT_EXCEEDED',
    /**
     * Indicates that you've exceeded your daily limit for Google API(s).
     * @type {String}
     */
    DAILY_LIMIT_EXCEEDED: 'DAILY_LIMIT_EXCEEDED',
    /**
     * Indicates that your Google API key is not valid. Please ensure that you've
     * included the entire key, and that you've either purchased the API or have
     * enabled billing and activated the API to obtain the free quota.
     * @type {String}
     */
    GOOGLE_KEY_INVALID: 'GOOGLE_KEY_INVALID',
    /**
     * Indicates that maximum number of elements limit is exceeded. For
     * example, for the Distance Matrix API; occurs when the product of
     * origins and destinations exceeds the per-query limit.
     * @type {String}
     */
    MAX_ELEMENTS_EXCEEDED: 'MAX_ELEMENTS_EXCEEDED',
    /**
     * Indicates that the request contained more than 25 origins,
     * or more than 25 destinations.
     * @type {String}
     */
    MAX_DIMENSIONS_EXCEEDED: 'MAX_DIMENSIONS_EXCEEDED',
    /**
     * Indicates that the request contained more than allowed waypoints.
     * @type {String}
     */
    MAX_WAYPOINTS_EXCEEDED: 'MAX_WAYPOINTS_EXCEEDED',
    /**
     * Indicates that the request body is not valid JSON.
     * @type {String}
     */
    PARSE_ERROR: 'PARSE_ERROR',
    /**
     * Indicates that the requested resource could not be found.
     * Note that this also covers `ZERO_RESULTS`.
     * @type {String}
     */
    NOT_FOUND: 'NOT_FOUND',
    /**
     * Indicates that an internal error (such as XHR cross-domain, etc) has occured.
     * @type {String}
     */
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    /**
     * Indicates that an unknown error has occured.
     * @type {String}
     */
    UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

// ---------------------------
// HELPER METHODS
// ---------------------------

/**
 *  @private
 */
function errorCodeFromStatus(status) {
    if (!status) return GeoError.Code.INVALID_RESPONSE;
    if (status === 'OK') return null;
    if (status === 'ZERO_RESULTS') return GeoError.Code.NOT_FOUND;
    if (GeoError.Code.hasOwnProperty(status)) return status;
    return null;
}

/**
 *  Gets `GeoError.Code` from the given response error reason.
 *  @private
 *
 *  @param {String} reason
 *         Google response error reason.
 *
 *  @returns {String}
 */
function errorCodeFromReason(reason) {
    switch (reason) {
        case 'invalid':
            return GeoError.Code.INVALID_REQUEST;
        case 'dailyLimitExceeded':
            return GeoError.Code.DAILY_LIMIT_EXCEEDED;
        case 'keyInvalid':
            return GeoError.Code.GOOGLE_KEY_INVALID;
        case 'userRateLimitExceeded':
            return GeoError.Code.USER_RATE_LIMIT_EXCEEDED;
        case 'notFound':
            return GeoError.Code.NOT_FOUND;
        case 'parseError':
            return GeoError.Code.PARSE_ERROR;
        default:
            return null;
    }
}

// ---------------------------
// EXPORT
// ---------------------------

exports.default = GeoError;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utility for making `XMLHttpRequest` and `JSONP` requests.
 *
 * @license MIT
 * @copyright 2016, Onur Yıldırım (onur@cutepilot.com)
 */
var fetch = function () {
    function fetch() {
        _classCallCheck(this, fetch);
    }

    _createClass(fetch, null, [{
        key: 'jsonp',


        // https://html.spec.whatwg.org/multipage/scripting.html#script

        /**
         * Makes a JSONP (GET) request by injecting a script tag in the browser.
         * Note that using JSONP has some security implications. As JSONP is really
         * javascript, it can do everything else javascript can do, so you need to
         * trust the provider of the JSONP data.
         * @see https://en.wikipedia.org/wiki/JSONP
         * @memberof fetch
         *
         * @param {Object|String} options - Required. Either the URL string which
         *     will set other options to defaults or an options object with the
         *     following properties.
         *     @param {String} options.url
         *            Source URL to be called.
         *     @param {String} [options.type]
         *            The MIME type that identifies the scripting language of the
         *            code referenced within the script element.
         *            e.g. `"text/javascript"`
         *     @param {String} [options.charset]
         *            Indicates the character encoding of the external resource.
         *            e.g. `"utf-8"`.
         *     @param {Boolean} [options.async=true]
         *            Indicates whether or not to perform the operation
         *            asynchronously. See {@link http://caniuse.com/#feat=script-async|browser support}.
         *     @param {Boolean} [options.defer=false]
         *            Indicates whether the script should be executed when the page
         *            has finished parsing. See {@link http://caniuse.com/#feat=script-defer|browser support}.
         *     @param {String} [options.crossorigin]
         *            Indicates the CORS setting for the script element being
         *            injected. Note that this attribute is not widely supported.
         *            Valid values: `"anonymous"`, `"use-credentials"`.
         *            See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes|CORS settings}.
         *     @param {Number} [options.timeout=0]
         *            The number of milliseconds a request can take before
         *            automatically being terminated. `0` disables timeout.
         *     @param {Boolean} [options.clean=false]
         *            Whether to remove the loaded script from DOM when the
         *            operation ends. Note that the initial source might load
         *            additional sources which are not deteceted or removed. Only
         *            the initial source is removed.
         *     @param {Object} [options.params]
         *            Optional query parameters to be appended at the end of the URL.
         *            e.g. `{ key: "MY-KEY" }`
         *            You can also include the JSONP callback name parameter here
         *            but if you want the object to be passed to the callback
         *            argument of this method, use `options.callbackParam` to set
         *            the callback parameter.
         *     @param {String} [options.callbackParam]
         *            If the endpoint supports JSONP callbacks, you can set the
         *            callback parameter with this setting. This will enable a
         *            second `obj` argument in the callback of this method which is
         *            useful if the JSONP source invokes the callback with an
         *            argument.
         *     @param {String} [options.rootName]
         *            The name (or notation) of the object that the generated JSONP
         *            callback function should be assigned to. By default, this is
         *            the `window` object but you can set this to a custom object
         *            notation; for example, to prevent global namespace polution.
         *            Note that this root object has to be globally accessible for
         *            this to work. e.g. `"window.myObject"` (as string)
         * @param {Function} [callback]
         *        The callback function that will be executed when the script is
         *        loaded. This callback has the following signature:
         *        `function (err, obj) { ... }`. Note that the second argument
         *        `obj` will always be `undefined` if the source endpoint does not
         *        support JSONP callbacks or a callback param is not set explicitly
         *        via `options.callbackParam` (or if the source does not invoke the
         *        jsonp with an argument). However, the function will always execute
         *        when the script loads or an error occurs.
         *
         * @returns {void}
         *
         * @example
         * var opts1 = {
         * 	   url: 'some/api',
         * 	   callbackParam: 'jsonCallback',
         * 	   params: { key: 'MY-KEY' }
         * };
         * // This will load the following source:
         * // some/api?jsonCallback={auto-generated-fn-name}&key=MY-KEY
         * fetch.jsonp(opts1, function (err, obj) {
         * 	   console.log(obj); // some object
         * });
         *
         * var opts2 = {
         * 	   url: 'some/api',
         * 	   params: {
         * 		   key: 'MY-KEY',
         * 		   jsonCallback: 'my-fn-name'
         * 	   }
         * };
         * // This will load the following source:
         * // some/api?jsonCallback=my-fn-name&key=MY-KEY
         * fetch.jsonp(options, function (err, obj) {
         * 	   console.log(obj); // undefined
         * 	   // still executes, catch errors here
         * });
         * // JSON callback should be explicitly set.
         * window['my-fn-name'] = function (obj) {
         * 	   console.log(obj); // some object
         * };
         */
        value: function jsonp(options, callback) {
            var timeout = void 0;

            callback = _utils2.default.isFunction(callback) ? callback : _utils2.default.noop;

            if (_utils2.default.isString(options)) {
                options = { url: options };
            }

            if (_utils2.default.isPlainObject(options)) {
                options = _utils2.default.extend({
                    // type: undefined,
                    async: true,
                    defer: false,
                    // crossorigin: undefined,
                    timeout: 0,
                    params: {},
                    // callbackParam: undefined,
                    // rootName: undefined,
                    clean: true
                }, options);
            } else {
                return callback(new Error('No options or target URL is provided.'));
            }

            if (_utils2.default.isString(options.url) === false || options.url.trim() === '') {
                return callback(new Error('No target URL is provided.'));
            }

            var script = document.createElement('script'),
                cbParamSet = _utils2.default.isString(options.callbackParam) && options.callbackParam.trim() !== '',
                cbFnName = void 0,
                root = void 0,
                rootNameSet = _utils2.default.isString(options.rootName) && options.rootName !== 'window' && options.rootName !== 'document' && options.rootName.trim() !== '';

            if (cbParamSet) {
                cbFnName = '_jsonp_' + _utils2.default.randomString(10);
                options.params[options.callbackParam] = rootNameSet ? options.rootName + '.' + cbFnName : cbFnName;
            }
            var query = _utils2.default.params(options.params) || '',
                qMark = options.url.indexOf('?') >= 0 ? '&' : '?',
                url = query ? '' + options.url + qMark + query : options.url;
            // console.log(url);

            function execCb(err, timeUp, obj) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                if ((timeUp || options.clean) && script.parentNode) {
                    script.parentNode.removeChild(script);
                }
                // delete the jsonp callback function
                if (rootNameSet) {
                    delete root[cbFnName];
                }
                callback(err, obj);
            }

            if (cbFnName) {
                var fn = function fn(obj) {
                    execCb(null, false, obj);
                };
                root = rootNameSet
                // ? window[options.rootName][cbFnName] = fn;
                ? _utils2.default.notateGlobalObj(options.rootName) // if rootName is dot-notation.
                : window;
                root[cbFnName] = fn;
            } else if (script.readyState) {
                // IE < 11
                script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        execCb(null);
                    }
                };
            } else {
                // IE 11+
                script.onload = function () {
                    execCb(null);
                };
            }

            script.onerror = function (error) {
                var errMsg = 'Could not load source at ' + _utils2.default.removeQuery(options.url);
                if (error) {
                    errMsg += '\n' + (error.message || error);
                }
                execCb(new Error(errMsg));
            };

            if (options.type) {
                script.type = options.type;
            }
            if (options.charset) {
                script.charset = options.charset;
            }
            if (options.async) {
                script.async = true;
            }
            if (options.defer) {
                script.defer = true;
            }
            if (options.crossorigin) {
                script.crossorigin = options.crossorigin;
            }

            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);

            // Timeout
            if (_utils2.default.isNumber(options.timeout) && options.timeout > 0) {
                timeout = setTimeout(function () {
                    script.src = '';
                    execCb(new Error('Operation timed out.'), true);
                }, options.timeout);
            }
        }

        /**
         * Makes an XMLHttpRequest with the given parameters.
         * Note that `"Access-Control-Allow-Origin"` header should be present on
         * the requested resource. Otherwise, the request will not be allowed.
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest}.
         * @memberof fetch
         *
         * @param {Object|String} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object.
         *     @param {String} options.url
         *            Target URL to be called.
         *     @param {String} [options.method="GET"]
         *            HTTP method.
         *     @param {*} [options.data]
         *            Data to be sent with the request.
         *     @param {Number} [options.timeout]
         *            The number of milliseconds a request can take before
         *            automatically being terminated. `0` disables timeout.
         *     @param {Boolean} [options.withCredentials=false]
         *            Indicates whether or not cross-site Access-Control requests
         *            should be made using credentials such as cookies or
         *            authorization headers.
         *     @param {Boolean} [options.async=true]
         *            Indicating whether or not to perform the operation
         *            asynchronously. If this value is false, the `send()` method
         *            does not return until the response is received. If `true`,
         *            notification of a completed transaction is provided using
         *            event listeners. This must be `true` if the multipart
         *            attribute is `true`, or an exception will be thrown.
         *     @param {String} [options.mimeType]
         *            If set, overrides the MIME type returned by the server. This
         *            may be used, for example, to force a stream to be treated and
         *            parsed as `text/xml`, even if the server does not report it as
         *            such.
         *     @param {Object} [options.headers]
         *            Sets the HTTP request headers. Each key should be a header
         *            name with a value. e.g. `{ 'Content-Length': 50 }`. For
         *            security reasons, some headers cannot be set and can only be
         *            controlled by the user agent.
         *     @param {String} [options.username=""]
         *            User name to use for authentication purposes.
         *     @param {String} [options.password=""]
         *            Password to use for authentication purposes.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         *
         * @returns {void}
         */

    }, {
        key: 'xhr',
        value: function xhr(options, callback) {
            var xhr = void 0,
                err = void 0;

            if ('XMLHttpRequest' in window) {
                xhr = new XMLHttpRequest();
            } else {
                throw new Error('XMLHttpRequest is not supported!');
            }

            var hasCallback = _utils2.default.isFunction(callback);
            callback = hasCallback ? callback : _utils2.default.noop;

            if (_utils2.default.isString(options)) {
                options = { url: options };
            }

            if (_utils2.default.isPlainObject(options)) {
                options = _utils2.default.extend({
                    method: 'GET',
                    data: undefined,
                    async: true,
                    timeout: 0, // no timeout
                    withCredentials: false,
                    mimeType: undefined,
                    username: '',
                    password: ''
                }, options);
            } else {
                callback(new Error('No options or target URL is provided.'));
            }

            if (_utils2.default.isString(options.url) === false) {
                callback(new Error('No target URL is provided.'));
            }

            options.username = String(options.username);
            options.password = String(options.password);
            options.method = options.method.toUpperCase();
            if (options.method !== 'POST' && options.method !== 'PUT') {
                options.data = undefined;
            }
            // console.log(JSON.stringify(options));

            if (hasCallback) {
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === fetch.XHR_READY_STATE.DONE) {
                        if (xhr.status === 200) {
                            callback(null, xhr);
                        } else {
                            // let response = utils.safeJsonParse(xhr.responseText);
                            // if (response && response.error)
                            var crossDomain = xhr.status === 0 ? '. Make sure you have permission if this is a cross-domain request.' : '';
                            err = new Error('The request returned status: ' + xhr.status + crossDomain);
                            // console.log(xhr);
                            callback(err, xhr);
                        }
                    }
                };

                if (_utils2.default.isNumber(options.timeout) && options.timeout > 0) {
                    xhr.timeout = options.timeout;
                    xhr.ontimeout = function () {
                        // xhr.abort();
                        err = new Error('The request had timed out.');
                        callback(err, xhr);
                    };
                }
            }
            // console.log(options);
            xhr.open(options.method, options.url, options.async, options.username, options.password);

            // xhr.setRequestHeader() method should b called œafter open(), but
            // before send().
            if (_utils2.default.isPlainObject(options.headers)) {
                Object.keys(options.headers).forEach(function (key) {
                    var value = options.headers[key];
                    xhr.setRequestHeader(key, value);
                });
            }

            // xhr.overrideMimeType() method must be called before send().
            if (options.mimeType) {
                xhr.overrideMimeType(options.mimeType);
            }

            xhr.send(options.data);
        }

        /**
         * Alias of `fetch.xhr()` with request method set to `"GET"` by default.
         * @memberof fetch
         *
         * @param {Object} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object. See `fetch.xhr()` method options for
         *        details.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         * @returns {void}
         */

    }, {
        key: 'get',
        value: function get(options, callback) {
            return fetch.xhr(options, callback);
        }

        /**
         * Alias of `fetch.xhr()` with request method set to `"POST"` by default.
         * @memberof fetch
         *
         * @param {Object} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object. See `fetch.xhr()` method options for
         *        details.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         * @returns {void}
         */

    }, {
        key: 'post',
        value: function post(options, callback) {
            return _xhr('POST', options, callback);
        }

        /**
         * Alias of `fetch.xhr()` with request method set to `"PUT"` by default.
         * @memberof fetch
         *
         * @param {Object} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object. See `fetch.xhr()` method options for
         *        details.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         * @returns {void}
         */

    }, {
        key: 'put',
        value: function put(options, callback) {
            return _xhr('PUT', options, callback);
        }

        /**
         * Alias of `fetch.xhr()` with request method set to `"DELETE"` by default.
         * @memberof fetch
         *
         * @param {Object} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object. See `fetch.xhr()` method options for
         *        details.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         * @returns {void}
         */

    }, {
        key: 'delete',
        value: function _delete(options, callback) {
            return _xhr('DELETE', options, callback);
        }
    }]);

    return fetch;
}();

/**
 *  @private
 */


function _xhr(method, options, callback) {
    options = _utils2.default.isString(options) ? { url: options } : options || {};
    options.method = method;
    return fetch.xhr(options, callback);
}

/**
 * Enumerates `XMLHttpRequest` ready states.
 * Not to be confused with `script.readyState`.
 * @memberof fetch
 *
 * @enum {Number}
 */
fetch.XHR_READY_STATE = {
    /**
     * `xhr.open()` has not been called yet.
     * @type {Number}
     */
    UNSENT: 0,
    /**
     * `xhr.send()` has been called.
     * @type {Number}
     */
    OPENED: 1,
    /**
     * `xhr.send()` has been called, and headers and status are available.
     * @type {Number}
     */
    HEADERS_RECEIVED: 2,
    /**
     * Downloading; responseText holds partial data.
     * @type {Number}
     */
    LOADING: 3,
    /**
     * The operation is complete.
     * @type {Number}
     */
    DONE: 4
};

exports.default = fetch;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _fetch = __webpack_require__(3);

var _fetch2 = _interopRequireDefault(_fetch);

var _geo = __webpack_require__(5);

var _geo2 = _interopRequireDefault(_geo);

var _geo3 = __webpack_require__(2);

var _geo4 = _interopRequireDefault(_geo3);

var _geo5 = __webpack_require__(6);

var _geo6 = _interopRequireDefault(_geo5);

var _enums = __webpack_require__(1);

var _enums2 = _interopRequireDefault(_enums);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  Radius of earth in kilometers.
 *  @private
 *  @type {Number}
 */
var EARTH_RADIUS_KM = 6371;

/**
 *  Radius of earth in miles.
 *  @private
 *  @type {Number}
 */
var EARTH_RADIUS_MI = 3959;

/**
 *  Storage for Geolocator default configuration.
 *
 *  @readonly
 *  @private
 */
var defaultConfig = {
    language: 'en',
    https: true,
    google: {
        version: '3', // latest 3.x
        key: '',
        styles: null
    }
};

/**
 *  Geolocator library that provides methods for getting geo-location information,
 *  geocoding, address look-ups, distance & durations, timezone information and more...
 *  This library makes use of HTML5 position feautures, implements Google APIs
 *  and other services.
 *
 *  <b>Important Notes:</b>
 *
 *  Although some calls might work without a key, it is generally required by
 *  most {@link https://developers.google.com/maps/faq#using-google-maps-apis|Goolge APIs}
 *  (such as Time Zone API). To get a free (or premium) key,
 *  {@link https://developers.google.com/maps/documentation/javascript/|click here}.
 *  After getting a key, you can enable multiple APIs for it. Make sure you
 *  {@link https://console.developers.google.com|enable}
 *  all the APIs supported by Geolocator.
 *
 *  Note that browser API keys cannot have referer restrictions when used
 *  with some Google APIs.
 *
 *  Make sure your doctype is HTML5 and you're calling Geolocation APIs from an
 *  HTTPS page. Geolocation API is removed from unsecured origins in Chrome 50.
 *  Other browsers are expected to follow.
 *
 *  @license MIT
 *  @copyright 2016, Onur Yıldırım (onur@cutepilot.com)
 */

var geolocator = function () {
    function geolocator() {
        _classCallCheck(this, geolocator);
    }

    _createClass(geolocator, null, [{
        key: 'config',


        // ---------------------------
        // STATIC METHODS
        // ---------------------------

        /**
         *  Sets or gets the geolocator configuration object.
         *  Make sure you configure Geolocator before calling other methods that
         *  require a Google API key.
         *
         *  @param {Object} [options]
         *         Configuration object. If omitted, this method returns the current
         *         configuration.
         *      @param {String} [options.language="en"]
         *             Language to be used for API requests that supports language
         *             configurations. This is generally used for Google APIs.
         *             See {@link https://developers.google.com/maps/faq#languagesupport|supported languages}.
         *      @param {Boolean} [options.https=true]
         *             As Google recommends; using HTTPS encryption makes your site
         *             more secure, and more resistant to snooping or tampering.
         *             If set to `true`, the API calls are made over HTTPS, at all
         *             times. Setting to `false` will switch to HTTP (even if the
         *             page is on HTTPS). And if set to `null`, current protocol will
         *             be used. Note that some APIs might not work with HTTP such as
         *             Google Maps TimeZone API.
         *      @param {Object} [options.google]
         *             Google specific options.
         *          @param {String} [options.google.version="3"]
         *                 Google Maps API version to be used (with
         *                 `geolocator.createMap()`) method. The default version
         *                 value is tested and works with Geolocator. You can set a
         *                 greater value or the latest version number and it should
         *                 work; but it's not guaranteed. Find out the
         *                 {@link https://developers.google.com/maps/documentation/javascript/versions|latest version here}.
         *          @param {String} [options.google.key=""]
         *                 API key to be used with Google API calls. Although some
         *                 calls might work without a key, it is generally required
         *                 by most Goolge APIs. To get a free (or premium) key,
         *                 {@link https://developers.google.com/maps/documentation/javascript/|click here}.
         *          @param {Array} [options.google.styles]
         *                 An array of objects to customize the presentation of the
         *                 Google base maps, changing the visual display of such
         *                 elements as roads, parks, and built-up areas.
         *                 See {@link https://developers.google.com/maps/documentation/javascript/styling|Styling Maps}.
         *
         *  @returns {Object} - Returns the current or updated configuration object.
         *
         *  @example
         *  geolocator.config({
         *      language: "en",
         *      google: {
         *          version: "3",
         *          key: "YOUR-GOOGLE-API-KEY"
         *      }
         *  });
         */
        value: function config(options) {
            if (options) {
                geolocator._.config = _utils2.default.extend(defaultConfig, options);
            }
            return geolocator._.config;
        }

        /**
         *  Gets a static map image URL which can be embeded via an `<img />` tag
         *  on the page.
         *
         *  Note that, if `options.center` is set to an address (instead of
         *  coordinates) and `options.marker` is also set; we will need to geocode
         *  that address to get center coordinates for the marker.
         *  In this case, you must use the `callback` parameter to get the async
         *  result. Otherwise, this method will directly return a `String`.
         *
         *  Make sure you have enabled Static Maps API (and Geocoding API if
         *  `marker` is enabled) in your Google Developers console.
         *
         *  For interactive map, see {@link #geolocator.createMap|`geolocator.createMap()` method}.
         *
         *  @see {@link https://developers.google.com/maps/documentation/static-maps/intro|Static Maps}
         *  @see {@link https://developers.google.com/maps/documentation/static-maps/usage-limits|Usage Limits}
         *
         *  @param {Object} options
         *         Static map options.
         *         @param {String|Object} options.center
         *                Defines the center of the map and the location.
         *                Either an address `String` or an coordinates `Object` with
         *                `latitude:Number` and `longitude:Number` properties.
         *         @param {String} [options.mapTypeId="roadmap"]
         *                Type of the map to be created.
         *                See {@link #geolocator.MapTypeId|`geolocator.MapTypeId` enumeration}
         *                for possible values.
         *         @param {String|Object} [options.size="600x300"]
         *                Defines the size (in pixels) of the returned image.
         *                Either a string in `widthxheight` format or an Object
         *                with `width:Number` and `height:Number` properties.
         *         @param {Number} [options.scale=1]
         *                Affects the number of pixels that are returned. scale=2
         *                returns twice as many pixels as scale=1 while retaining
         *                the same coverage area and level of detail (i.e. the
         *                contents of the map don't change). Accepted values are 1,
         *                2 and 4 (4 is only available to Google Maps APIs Premium
         *                Plan customers.)
         *         @param {Number} [options.zoom=9]
         *                Zoom level to be set for the map.
         *         @param {String} [options.format=png]
         *                Defines the format of the resulting image.
         *                See {@link #geolocator.ImageFormat|`geolocator.ImageFormat` enumeration}
         *                for possible values.
         *         @param {Boolean|String} [options.marker=true]
         *                Specifies whether to add a marker to the center of the map.
         *                You can define the color of the marker by passing a color
         *                `String` instead of a `Boolean`. Color can be a predefined
         *                color from the set `red` (default), `black`, `brown`,
         *                `green`, `purple`, `yellow`, `blue`, `gray`, `orange` and
         *                `white`; or a HEX 24-bit color (e.g. `"0xFF0000"`).
         *                Note that marker will not be visible if `center` is set to
         *                a `String` address and you don't use the callback.
         *         @param {String} [options.region]
         *                Defines the appropriate borders to display, based on
         *                geo-political sensitivities. Accepts a region code
         *                specified as a two-character ccTLD (top-level domain)
         *                value. e.g. `"us"`.
         *         @param {Array} [options.styles]
         *                An array of objects to customize the presentation of the
         *                Google base maps, changing the visual display of such
         *                elements as roads, parks, and built-up areas.
         *                This will default to the global styles set via
         *                {@link #geolocator.config|`geolocator.config()` method}, if any.
         *                See {@link https://developers.google.com/maps/documentation/javascript/styling|Styling Maps}.
         *
         *  @param {Function} [callback]
         *         Callback function to be executed when the static map URL is built.
         *         This takes 2 arguments: `function (err, url) { ... }`.
         *         If omitted, this method will directly return the static map
         *         image URL; but (if enabled) the marker will not be visible if
         *         `options.center` is set to an address `String` instead of a
         *         coordinates `Object`.
         *
         *  @returns {String|void}
         *           If a callback is passed, this will return `void`.
         *           Otherwise, a `String` that represents the URL of the static map.
         *
         *  @example
         *  // Async example (with address and marker)
         *  var options = {
         *      center: "Los Angles, CA, US",
         *      mapTypeId: geolocator.MapTypeId.ROADMAP,
         *      size: "600x300",
         *      scale: 1,
         *      zoom: 5,
         *      marker: "0xFFCC00",
         *      format: geolocator.ImageFormat.PNG
         *  };
         *  geolocator.getStaticMap(options, function (err, url) {
         *      if (!err) {
         *          document.getElementById('my-img').src = url;
         *      }
         *  });
         *
         *  @example
         *  // Sync example (with coordinates)
         *  var options = {
         *      center: {
         *          longitude: 34.0522342,
         *          latitude: -118.2436849
         *      },
         *      mapTypeId: geolocator.MapTypeId.ROADMAP,
         *      size: "600x300",
         *      scale: 1,
         *      zoom: 5,
         *      marker: "0xFFCC00",
         *      format: geolocator.ImageFormat.PNG
         *  };
         *  document.getElementById('my-img').src = geolocator.getStaticMap(options);
         */

    }, {
        key: 'getStaticMap',
        value: function getStaticMap(options, callback) {
            if (!_utils2.default.isPlainObject(options) || !options.center) {
                throw new _geo4.default(_geo4.default.Code.INVALID_PARAMETERS, 'A center address or coordinates are required.');
            }

            if (_utils2.default.isString(options.center)) {
                return geolocator.geocode(options.center, function (err, location) {
                    if (err) callback(err);
                    options.center = location.coords;
                    callback(null, geolocator.getStaticMap(options));
                });
            }

            var conf = geolocator._.config;
            var opts = _utils2.default.extend({
                mapTypeId: _enums2.default.MapTypeId.ROADMAP,
                size: {
                    width: 600,
                    height: 300
                },
                scale: 1, // 1 | 2 | (4 for business customers of google maps)
                zoom: 9,
                marker: 'red',
                format: _enums2.default.ImageFormat.PNG,
                language: conf.language || 'en',
                region: null
            }, options);

            var center = _utils2.default.isPlainObject(opts.center) ? opts.center.latitude + ',' + opts.center.longitude : String(opts.center);

            var size = _utils2.default.isPlainObject(opts.size) ? opts.size.width + 'x' + opts.size.height : String(opts.size);

            var url = _enums2.default.URL.GOOGLE_SATATIC_MAP // not using utils.setProtocol() here
            + ('?center=' + center + '&maptype=' + opts.mapTypeId) + ('&size=' + size + '&scale=' + opts.scale + '&zoom=' + opts.zoom) + ('&format=' + opts.format + '&language=' + opts.language);

            if (opts.marker) {
                var color = _utils2.default.isString(opts.marker) ? opts.marker : 'red';
                url += '&markers=' + encodeURIComponent('color:' + color + '|' + center);
            }
            if (opts.region) url += '&region=' + opts.region;
            if (conf.google.key) url += '&key=' + conf.google.key;

            var styles = getStyles(opts);
            if (styles) url += '&' + _geo2.default.mapStylesToParams(styles);

            if (_utils2.default.isFunction(callback)) return callback(null, url);
            return url;
        }

        /**
         *  Creates an interactive Google Map within the given element.
         *  Make sure you have enabled Google Static Maps API in your Google Developers console.
         *  For static map, see {@link #geolocator.getStaticMap|`geolocator.getStaticMap()` method}.
         *  @see {@link https://developers.google.com/maps/documentation/javascript/reference|Google Maps JavaScript API}
         *  @see {@link https://developers.google.com/maps/documentation/javascript/usage|Usage Limits}
         *
         *  @param {Object|String|HTMLElement|Map} options
         *         Either map options object with the following properties or; the ID
         *         of a DOM element, or element itself which the map will be
         *         created within; or a previously created `google.maps.Map` instance.
         *         If a map instance is set, this only will apply the options without
         *         re-creating it.
         *      @param {String|HTMLElement|Map} options.element
         *             Either the ID of a DOM element or the element itself;
         *             which the map will be created within; or a previously created
         *             `google.maps.Map` instance. If a map instance is set, this
         *             only will apply the options without re-creating it.
         *      @param {Object} options.center
         *             Center coordinates for the map to be created.
         *          @param {Number} options.center.latitude
         *                 Latitude of the center point coordinates.
         *          @param {Number} options.center.longitude
         *                 Longitude of the center point coordinates.
         *      @param {String} [options.mapTypeId="roadmap"]
         *             Type of the map to be created.
         *             See {@link #geolocator.MapTypeId|`geolocator.MapTypeId` enumeration}
         *             for possible values.
         *      @param {String} [options.title]
         *             Title text to be displayed within an `InfoWindow`, when the
         *             marker is clicked. This only take effect if `marker` is
         *             enabled.
         *      @param {Boolean} [options.marker=true]
         *             Whether to place a marker at the given coordinates.
         *             If `title` is set, an `InfoWindow` will be opened when the
         *             marker is clicked.
         *      @param {Number} [options.zoom=9]
         *             Zoom level to be set for the map.
         *      @param {Array} [options.styles]
         *             An array of objects to customize the presentation of the
         *             Google base maps, changing the visual display of such
         *             elements as roads, parks, and built-up areas.
         *             This will default to the global styles set via
         *             {@link #geolocator.config|`geolocator.config` method}`, if any.
         *             See {@link https://developers.google.com/maps/documentation/javascript/styling|Styling Maps}.
         *
         *  @param {Function} callback
         *         Callback function to be executed when the map is created.
         *         This takes 2 arguments: `function (err, map) { ... }`.
         *         See {@link #geolocator~MapData|`geolocator~MapData` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      element: "my-map",
         *      center: {
         *          latitude: 48.8534100,
         *          longitude: 2.3488000
         *  	},
         *  	marker: true,
         *  	title: "Paris, France",
         *  	zoom: 12
         *  };
         *  geolocator.createMap(options, function (err, map) {
         *      if (map && map.infoWindow) {
         *          map.infoWindow.open(map.instance, map.marker);
         *      }
         *  });
         */

    }, {
        key: 'createMap',
        value: function createMap(options, callback) {
            // if options is not a plain object, consider element ID, `HTMLElement`,
            // `jQuery` instance or `google.maps.Map` instance.
            if (!_utils2.default.isPlainObject(options)) {
                options = { element: options };
            }

            options = _utils2.default.extend({
                element: null,
                mapTypeId: _enums2.default.MapTypeId.ROADMAP,
                title: undefined,
                marker: true,
                zoom: 9
            }, options);

            var e = options.element,
                elem = void 0;
            if (_utils2.default.isString(e)) {
                elem = document.getElementById(e);
            } else if (_utils2.default.isJQueryObject(e)) {
                elem = e[0];
            } else if (geolocator.isGoogleLoaded() && e instanceof google.maps.Map) {
                elem = e.getDiv();
            }

            if (!_utils2.default.isElement(elem) && !_utils2.default.isNode(elem)) {
                throw new _geo4.default(_geo4.default.Code.INVALID_PARAMETERS, 'A valid DOM element or element ID is required to create a map.');
            }

            if (!_utils2.default.isPlainObject(options.center) || !_utils2.default.isNumber(options.center.latitude) || !_utils2.default.isNumber(options.center.longitude)) {
                throw new _geo4.default(_geo4.default.Code.INVALID_PARAMETERS, 'Center coordinates are required to create a map.');
            }

            options.element = elem;

            var conf = geolocator._.config,
                key = conf.google.key;
            options.styles = getStyles(options);

            geolocator.ensureGoogleLoaded(key, function (err) {
                if (err) {
                    throw new _geo4.default(_geo4.default.Code.GOOGLE_API_FAILED, String(err.message || err));
                }

                var mapData = configCreateMap(options);
                callback(null, mapData);
            });
        }

        /**
         *  Locates the user's location via HTML5 geolocation. This may
         *  require/prompt for user's permission. If the permission is granted we'll
         *  get the most accurate location information. Otherwise, we'll fallback to
         *  locating via user's IP (if enabled).
         *
         *  For better accuracy, Geolocator implements a different approach than the
         *  `getCurrentPosition` API; which generally triggers before the device's
         *  GPS hardware can provide anything accurate. Thanks to
         *  {@link https://github.com/gwilson/getAccurateCurrentPosition#background|Greg Wilson}
         *  for the idea.
         *
         *  Also note that HTML5 Geolocation feature no more allows insecure origins.
         *  See {@link https://goo.gl/rStTGz|this} for more details.
         *  This means if you don't call this method from an HTTPS page, it will
         *  fail. And if `options.fallbackToIP` is enabled, this will locate by IP.
         *
         *  @param {Object} [options]
         *         HTML5 geo-location settings with some additional options.
         *      @param {Boolean} [options.enableHighAccuracy=true]
         *             Specifies whether the device should provide the most accurate
         *             position it can. Note that setting this to `true` might
         *             consume more CPU and/or battery power; and result in slower
         *             response times.
         *      @param {Number} [options.desiredAccuracy=30]
         *             Minimum accuracy desired, in meters. Position will not be
         *             returned until this is met, before the timeout. This only
         *             takes effect if `enableHighAccuracy` is set to `true`.
         *      @param {Number} [options.timeout=5000]
         *             HTML5 position timeout setting in milliseconds. Setting this
         *             to `Infinity` means that Geolocator won't return until the
         *             position is available.
         *      @param {Number} [options.maximumWait=10000]
         *             Maximum time to wait (in milliseconds) for the desired
         *             accuracy (which should be greater than `timeout`).
         *             This only takes effect if `enableHighAccuracy` is set to
         *             `true`.
         *      @param {Number} [options.maximumAge=0]
         *             HTML5 position maximum age. Indicates the maximum age in
         *             milliseconds of a possible cached position that is acceptable
         *             to return. `0` means, the device cannot use a cached position
         *             and must attempt to retrieve the real current position. If set
         *             to `Infinity` the device must return a cached position
         *             regardless of its age. Note that if `enableHighAccuracy` is
         *             set to `true`, `maximumAge` will be forced to `0`.
         *      @param {Function} [options.onProgress]
         *             If `enableHighAccuracy` is set to `true`, you can use this
         *             callback to check the progress of the location accuracy;
         *             while waiting for the final, best accurate location.
         *      @param {Boolean} [options.fallbackToIP=false]
         *             Specifies whether to fallback to IP geolocation if the HTML5
         *             geolocation fails (e.g. user rejection).
         *      @param {Boolean} [options.addressLookup=false]
         *             Specifies whether to run a reverse-geocode operation for the
         *             fetched coordinates to retrieve detailed address information.
         *             Note that this means an additional request which requires a
         *             Google API key to be set in the Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {Boolean} [options.timezone=false]
         *             Specifies whether to also fetch the time zone information for
         *             the receieved coordinates. Note that this means an additional
         *             request which requires a Google API key to be set in the
         *             Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      enableHighAccuracy: true,
         *      desiredAccuracy: 30,
         *      timeout: 5000,
         *      maximumWait: 10000,
         *      maximumAge: 0,
         *      fallbackToIP: true,
         *      addressLookup: true,
         *      timezone: true,
         *      map: "my-map",
         *      staticMap: true
         *  };
         *  geolocator.locate(options, function (err, location) {
         *      console.log(err || location);
         *  });
         *
         * @example
         *  // location result:
         *  {
         *      coords: {
         *          latitude: 37.4224764,
         *          longitude: -122.0842499,
         *          accuracy: 30,
         *          altitude: null,
         *          altitudeAccuracy: null,
         *          heading: null,
         *          speed: null
         *      },
         *      address: {
         *          commonName: "",
         *          street: "Amphitheatre Pkwy",
         *          route: "Amphitheatre Pkwy",
         *          streetNumber: "1600",
         *          neighborhood: "",
         *          town: "",
         *          city: "Mountain View",
         *          region: "Santa Clara County",
         *          state: "California",
         *          stateCode: "CA",
         *          postalCode: "94043",
         *          country: "United States",
         *          countryCode: "US"
         *      },
         *      formattedAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
         *      type: "ROOFTOP",
         *      placeId: "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
         *      timezone: {
         *          id: "America/Los_Angeles",
         *          name: "Pacific Standard Time",
         *          abbr: "PST",
         *          dstOffset: 0,
         *          rawOffset: -28800
         *      },
         *      flag: "//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/us.svg",
         *      map: {
         *          element: HTMLElement,
         *          instance: Object, // google.maps.Map
         *          marker: Object, // google.maps.Marker
         *          infoWindow: Object, // google.maps.InfoWindow
         *          options: Object // map options
         *      },
         *      staticMap: "//maps.googleapis.com/maps/api/staticmap?center=37.4224764,-122.0842499&maptype=roadmap&size=600x300&scale=1&zoom=9&format=png&language=en&markers=color%3Ared%7C37.4224764%2C2-122.0842499&key=YOUR-GOOGLE-API-KEY",
         *      timestamp: 1456795956380
         *  }
         */

    }, {
        key: 'locate',
        value: function locate(options, callback) {
            options = _utils2.default.extend({
                enableHighAccuracy: true,
                timeout: 5000,
                maximumWait: 10000,
                maximumAge: 0,
                desiredAccuracy: 30,
                onProgress: _utils2.default.noop,
                fallbackToIP: false,
                addressLookup: false,
                timezone: false,
                map: undefined,
                staticMap: false
            }, options);

            // force disable cache if high-accuracy is enabled
            if (options.enableHighAccuracy) options.maximumAge = 0;
            // set a min value for timeout
            if (options.timeout < 1000) options.timeout = 1000;
            // max wait should not be less than timeout
            if (options.maximumWait < options.timeout) options.maximumWait = options.timeout;

            // check options and Google key
            checkGoogleKey(options);

            var cb = callbackMap(options, callback);

            function fallbackToIP(error) {
                if (options.fallbackToIP) {
                    return geolocator.locateByIP(options, function (err, location) {
                        if (err) return cb(err, null);
                        return cb(null, location);
                    });
                }
                cb(error, null);
            }
            function onPositionReceived(location) {
                fetchAddressAndTimezone(location, options, cb);
            }
            function onPositionError(err) {
                err = _geo4.default.create(err);
                fallbackToIP(err);
            }

            if (geolocator.isGeolocationSupported()) {
                if (options.enableHighAccuracy) {
                    locateAccurate(options, onPositionReceived, onPositionError);
                } else {
                    navigator.geolocation.getCurrentPosition(onPositionReceived, onPositionError, options);
                }
            } else {
                var err = new _geo4.default(_geo4.default.Code.GEOLOCATION_NOT_SUPPORTED);
                fallbackToIP(err);
            }
        }

        /**
         *  Returns a location and accuracy radius based on information about cell
         *  towers and WiFi nodes that the mobile client can detect; via the Google
         *  Maps Geolocation API.
         *  @see {@link https://developers.google.com/maps/documentation/geolocation/intro|Google Maps Geolocation API}
         *  @see {@link https://developers.google.com/maps/documentation/geolocation/usage-limits|Usage Limits}
         *
         *  @param {Object} [options]
         *         Geolocation options.
         *      @param {Number} [options.homeMobileCountryCode]
         *             The mobile country code (MCC) for the device's home network.
         *      @param {Number} [options.homeMobileNetworkCode]
         *             The mobile network code (MNC) for the device's home network.
         *      @param {String} [options.radioType]
         *             The mobile radio type.
         *             See {@link #geolocator.RadioType|`geolocator.RadioType` enumeration}
         *             for possible values. While this field is optional, it should
         *             be included if a value is available, for more accurate results.
         *      @param {string} [options.carrier]
         *             The carrier name. e.g. "Vodafone"
         *      @param {Boolean} [options.fallbackToIP=false]
         *             Specifies whether to fallback to IP geolocation if wifi and
         *             cell tower signals are not available. Note that the IP address
         *             in the request header may not be the IP of the device. Set
         *             `fallbackToIP` to `false` to disable fall back.
         *      @param {Array} [options.cellTowers]
         *             An array of cell tower objects.
         *             See {@link https://developers.google.com/maps/documentation/geolocation/intro#cell_tower_object|Cell tower objects} for details.
         *      @param {Array} [options.wifiAccessPoints]
         *             An array of WiFi access point objects.
         *             See {@link https://developers.google.com/maps/documentation/geolocation/intro#wifi_access_point_object|WiFi access point objects} for details.
         *      @param {Boolean} [options.addressLookup=false]
         *             Specifies whether to run a reverse-geocode operation for the
         *             fetched coordinates to retrieve detailed address information.
         *             Note that this means an additional request which requires a
         *             Google API key to be set in the Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {Boolean} [options.timezone=false]
         *             Specifies whether to also fetch the time zone information for
         *             the receieved coordinates. Note that this means an additional
         *             request which requires a Google API key to be set in the
         *             Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *      @param {Boolean} [options.raw=false]
         *      	      Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      homeMobileCountryCode: 310,
         *      homeMobileNetworkCode: 410,
         *      carrier: 'Vodafone',
         *      radioType: geolocator.RadioType.GSM,
         *      fallbackToIP: true,
         *      addressLookup: false,
         *      timezone: false,
         *      map: "my-map",
         *      staticMap: false
         *  };
         *  geolocator.locateByMobile(options, function (err, location) {
         *      console.log(err || location);
         *  });
         */

    }, {
        key: 'locateByMobile',
        value: function locateByMobile(options, callback) {
            if (!_utils2.default.isPlainObject(options)) {
                throw new _geo4.default(_geo4.default.Code.INVALID_PARAMETERS);
            }

            var cb = callbackMap(options, callback);

            options = _utils2.default.extend({
                homeMobileCountryCode: undefined,
                homeMobileNetworkCode: undefined,
                radioType: undefined,
                carrier: undefined,
                fallbackToIP: false,
                cellTowers: undefined,
                wifiAccessPoints: undefined,
                addressLookup: false,
                timezone: false,
                map: undefined,
                raw: false
            }, options);

            options.considerIp = options.fallbackToIP;
            // check Google key
            checkGoogleKey();

            var conf = geolocator._.config,
                key = conf.google.key || '',
                url = _utils2.default.setProtocol(_enums2.default.URL.GOOGLE_GEOLOCATION, conf.https),
                xhrOpts = {
                url: url + '?key=' + key,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(options)
            };
            // console.log(xhrOpts.data);

            _fetch2.default.post(xhrOpts, function (err, xhr) {
                var response = getXHRResponse(err, xhr);
                if (_geo4.default.isGeoError(response)) return cb(response, null);

                response = options.raw ? response : {
                    coords: {
                        latitude: response.location.lat,
                        longitude: response.location.lng,
                        accuracy: response.accuracy
                    },
                    timestamp: _utils2.default.time()
                };

                fetchAddressAndTimezone(response, options, cb);

                // e.g. raw response
                // {
                //     "location": {
                //         "lat": 51.0,
                //         "lng": -0.1
                //     },
                //     "accuracy": 1200.4
                // }
            });
        }

        /**
         *  Locates the user's location by the client's IP.
         *
         *  This method uses FreeGeoIP's lookup service, by default.
         *  In order to change the source provider, you can use
         *  {@link #geolocator.setGeoIPSource|`geolocator.setGeoIPSource()` method}.
         *
         *  @param {Object} [options]
         *         Locate options.
         *      @param {Boolean} [options.addressLookup=false]
         *             Specifies whether to run a reverse-geocode operation for the
         *             fetched coordinates to retrieve detailed address information.
         *             Since no precise address can be fetched from an IP addres; you
         *             should only enable this if the Geo-IP Source returns no useful
         *             address information other than coordinates. Also, note that
         *             this means an additional request which requires a Google API
         *             key to be set in the Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {Boolean} [options.timezone=false]
         *             Specifies whether to also fetch the time zone information for
         *             the receieved coordinates. Note that this means an additional
         *             request which requires a Google API key to be set in the
         *             Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *  	addressLookup: true,
         *  	timezone: true,
         *  	map: "my-map",
         *  	staticMap: true
         *  };
         *  geolocator.locateByIP(options, function (err, location) {
         *  	console.log(err || location);
         *  });
         *
         *  @example
         *  // location result:
         *  {
         *      coords: {
         *          latitude: 41.0214,
         *          longitude: 28.9948,
         *      },
         *      address: {
         *          city: "Istanbul",
         *          region: "34",
         *          state: "34",
         *          country: "Turkey",
         *          countryCode: "TR"
         *      },
         *      formattedAddress: "Demirtaş, Tesviyeci Sk. No:7, 34134 Fatih/İstanbul, Turkey",
         *      type: "ROOFTOP",
         *      placeId: "ChIJ-ZRLfO25yhQRBi5YJxX80Q0",
         *      timezone: {
         *          id: "Europe/Istanbul",
         *          name: "Eastern European Summer Time",
         *          abbr: "EEST",
         *          dstOffset: 3600,
         *          rawOffset: 7200
         *      },
         *      flag: "//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/tr.svg",
         *      map: {
         *          element: HTMLElement,
         *          instance: Object, // google.maps.Map
         *          marker: Object, // google.maps.Marker
         *          infoWindow: Object, // google.maps.InfoWindow
         *          options: Object // map options
         *      },
         *      staticMap: "//maps.googleapis.com/maps/api/staticmap?center=41.0214,28.9948&maptype=roadmap&size=600x300&scale=1&zoom=9&format=png&language=en&markers=color%3Ared%7C41.0214%2C228.9948&key=YOUR-GOOGLE-API-KEY",
         *      provider: "freegeoip",
         *      timestamp: 1466216325223
         *  }
         */

    }, {
        key: 'locateByIP',
        value: function locateByIP(options, callback) {
            // passed source can be a string or object
            var source = geolocator._.geoIpSource;

            if (!_utils2.default.isPlainObject(source)) {
                throw new _geo4.default(_geo4.default.Code.INVALID_GEO_IP_SOURCE, 'Please set a valid Geo-IP Source via geolocator.setGeoIPSource(options).');
            }

            // check options and Google key
            checkGoogleKey(options || {});

            var jsonpOpts = {
                url: source.url,
                async: true,
                clean: true
                // params: {}
            };
            if (source.callbackParam) {
                jsonpOpts.callbackParam = source.callbackParam;
                jsonpOpts.rootName = 'geolocator._.cb';
            } else if (!source.globalVar) {
                throw new _geo4.default(_geo4.default.Code.INVALID_GEO_IP_SOURCE, 'Either callbackParam or globalVar should be set for Geo-IP source.');
            }
            return _fetch2.default.jsonp(jsonpOpts, function (err, response) {
                if (err) {
                    return callback(_geo4.default.create(err), null);
                }
                if (source.globalVar) {
                    if (window[source.globalVar]) {
                        response = _utils2.default.clone(window[source.globalVar]);
                        delete window[source.globalVar];
                    } else {
                        response = null;
                    }
                }
                if (!response) {
                    err = new _geo4.default(_geo4.default.Code.INVALID_RESPONSE);
                    return callback(err, null);
                }
                if (_utils2.default.isPlainObject(source.schema)) {
                    response = _utils2.default.mapToSchema(response, source.schema);
                }
                response.provider = source.provider || 'unknown';
                setLocationURLs(response, options);
                if (response.coords) {
                    response.coords.latitude = Number(response.coords.latitude);
                    response.coords.longitude = Number(response.coords.longitude);
                }
                var cb = callbackMap(options, callback);
                fetchAddressAndTimezone(response, options, cb);
            });
        }

        /**
         *  Sets the Geo-IP source to be used for fetching location information
         *  by user's IP; which is internally used by
         *  {@link #geolocator.locateByIP|`geolocator.locateByIP()` method}.
         *
         *  By default, Geolocator uses FreeGeoIP as the Geo-IP source provider.
         *  You can use this method to change this; or you can choose from
         *  ready-to-use
         *  {@link https://github.com/onury/geolocator/tree/master/src/geo-ip-sources|Geo-IP sources}.
         *
         *  @param {Object} options
         *         Geo-IP Source options.
         *      @param {String} [options.provider]
         *             Source or service provider's name.
         *      @param {String} options.url
         *             Source URL without the callback query parameter. The callback
         *             name (if supported) should be set via `options.callbackParam`.
         *             Also, make sure the service supports the protocol you use in
         *             the enums.URL. If it supports both HTTP and HTTPS, you can omit the
         *             protocol. In this case, it will be determined via Geolocator
         *             configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *             NOTE: Do not forget to include your API key in the query
         *             parameters of the URL, if you have one.
         *      @param {String} [options.callbackParam]
         *             If JSON callback is supported, pass the name of the callback
         *             parameter, defined by the provider.
         *      @param {Object} [options.globalVar]
         *             Set this instead of `options.callbackParam` if the service
         *             does not support JSON callbacks, but weirdly set a global
         *             variable in the document. For example, if the response is
         *             `Geo = { lat, lng }`, you should set this to `"Geo"`.
         *      @param {Object} [options.schema]
         *             Schema object to be used to re-structure the response returned
         *             from the service. Set the response object's keys as values of
         *             a custom object to map the format to the `location` object.
         *             For example; if the service returns a response like
         *             `{ lat: 40.112233, lng: 10.112233, otherProp: 'hello' }`.
         *             Then you should set the following schema:
         *             `{ coords: { latitude: 'lat', longitude: 'lng' } }`.
         *
         *  @return {geolocator}
         */

    }, {
        key: 'setGeoIPSource',
        value: function setGeoIPSource(options) {
            if (!_utils2.default.isPlainObject(options)) {
                throw new _geo4.default(_geo4.default.Code.INVALID_PARAMETERS, 'Geo-IP source options is invalid.');
            }
            if (!_utils2.default.isStringSet(options.url)) {
                throw new _geo4.default(_geo4.default.Code.INVALID_PARAMETERS, 'Geo-IP source should have a valid URI.');
            }
            // if (!utils.isStringSet(options.callbackParam) && !utils.isStringSet(options.globalVar)) {
            //     throw new GeoError(GeoError.Code.INVALID_PARAMETERS, 'No \'callbackParam\' or \'globalVar\' is provided for the Geo-IP Source options.');
            // }
            geolocator._.geoIpSource = Object.freeze(options);
        }

        /**
         *  Registers a handler for watching the user's location via HTML5
         *  geolocation; that is triggered each time the position of the device
         *  changes. This may require/prompt for user's permission.
         *
         *  @param {Object} [options]
         *         HTML5 geo-location settings.
         *      @param {Boolean} [options.enableHighAccuracy=true]
         *             Specifies whether the device should provide the most accurate
         *             position it can. Note that setting this to `true` might consume
         *             more CPU and/or battery power; and result in slower response
         *             times.
         *      @param {Number} [options.timeout=6000]
         *             HTML5 position timeout setting in milliseconds. Setting this
         *             to `Infinity` means that Geolocator won't return until the
         *             position is available.
         *      @param {Number} [options.maximumAge=0]
         *             HTML5 position maximum age. Indicates the maximum age in
         *             milliseconds of a possible cached position that is acceptable
         *             to return. `0` means, the device cannot use a cached position
         *             and must attempt to retrieve the real current position. If set
         *             to `Infinity` the device must return a cached position
         *             regardless of its age.
         *      @param {Boolean} [options.clearOnError=false]
         *             Specifies whether to clear the watcher on first error so that
         *             it does not execute any more callbacks.
         *      @param {Object} [options.target]
         *             Object that defines the target location and settings; that
         *             when the location is reached, the watcher will auto-clear
         *             itself and invoke the callback.
         *      @param {Number} options.target.latitude
         *             The `latitude` of the target location.
         *      @param {Number} options.target.longitude
         *             The `longitude` of the target location.
         *      @param {Number} [options.target.radius=0.5]
         *             The radius, in other words; the minimum distance (in
         *             kilometers or miles) to the target point that should be
         *             reached.
         *      @param {Number} [options.target.unitSystem=0]
         *             Unit system to be used for target radius.
         *             See {@link #geolocator.UnitSystem|`geolocator.UnitSystem` enumeration}
         *             for possible values.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         If `options.target` is set, `location` will also
         *         include a `targetReached:Boolean` property.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {GeoWatcher} - A watcher object that provides a
         *  `.clear(delay:Number, callback:Function)` method to clear the watcher
         *  when needed. Optional `delay` argument can be set (in milliseconds) to
         *  clear in a later time. Omitting this argument will clear the watcher
         *  immediately. You should always call this method, except if you've set up
         *  a target; which will auto-clear the watcher when reached.
         *
         *  @example
         *  // Watch my position for 5 minutes.
         *  var options = { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 };
         *  var watcher = geolocator.watch(options, function (err, location) {
         *      console.log(err || location);
         *  });
         *  console.log(watcher.id); // ID of the watcher
         *  watcher.clear(300000); // clear after 5 minutes.
         *
         *  @example
         *  // Watch my position until I'm 350 meters near Disneyland Park.
         *  options.target = {
         *      latitude: 33.8120918,
         *      longitude: -117.9233569,
         *      radius: 0.35,
         *      unitSystem: geolocator.UnitSystem.METRIC
         *  };
         *  watcher = geolocator.watch(options, function (err, location) {
         *      if (err) {
         *          console.log(err);
         *          return;
         *      }
         *      if (location.targetReached) {
         *          console.log(watcher.isCleared); // true
         *          console.log(watcher.cycle); // 15 — target reached after 15 cycles
         *      } else {
         *          console.log(watcher.isCleared); // false — watcher is active.
         *      }
         *  });
         */

    }, {
        key: 'watch',
        value: function watch(options, callback) {
            if (!geolocator.isGeolocationSupported()) {
                callback(new _geo4.default(_geo4.default.Code.GEOLOCATION_NOT_SUPPORTED), null);
                return {};
            }

            var watcher = void 0,
                target = void 0;

            options = _utils2.default.extend({
                enableHighAccuracy: true,
                timeout: 6000,
                maximumAge: 0,
                clearOnError: false
            }, options);

            if (_utils2.default.isPlainObject(options.target)) {
                target = _utils2.default.extend({
                    radius: 0.5,
                    unitSystem: geolocator.UnitSystem.METRIC
                }, options.target);
            }

            function onPositionChanged(location) {
                var pos = _utils2.default.clone(location, { own: false });
                if (target) {
                    var distance = geolocator.calcDistance({
                        from: location.coords,
                        to: target,
                        formula: geolocator.DistanceFormula.HAVERSINE,
                        unitSystem: target.unitSystem
                    });
                    pos.targetReached = distance <= target.radius;
                    if (watcher && pos.targetReached) {
                        watcher.clear(function () {
                            return callback(null, pos);
                        });
                    }
                }
                return callback(null, pos);
            }
            function onPositionError(err) {
                callback(_geo4.default.create(err), null);
            }
            return new _geo6.default(onPositionChanged, onPositionError, options);
        }

        /**
         *  Converts a given address (or address components) into geographic
         *  coordinates (i.e. latitude, longitude); and gets detailed address
         *  information.
         *  @see {@link https://developers.google.com/maps/documentation/geocoding/intro|Google Maps Geocoding API}
         *  @see {@link https://developers.google.com/maps/documentation/geocoding/usage-limits|Usage Limits}
         *
         *  @param {String|Object} options
         *         Either the address to geocode or geocoding options with the
         *         following properties.
         *      @param {String} options.address
         *             The street address to geocode, in the format used by the
         *             national postal service of the country concerned. Additional
         *             address elements such as business names and unit, suite or
         *             floor numbers should be avoided. Note that any address
         *             component (route, locality, administrativeArea, postalCode and
         *             country) should be specified either in address or the
         *             corresponding property - not both. Doing so may result in
         *             `ZERO_RESULTS`.
         *      @param {String} [options.route]
         *      	      Long or short name of a route.
         *      @param {String} [options.locality]
         *      	      Locality and sublocality of the location.
         *      @param {String} [options.administrativeArea]
         *      	      Administrative area of the location.
         *      @param {String} [options.postalCode]
         *      	      Postal code of the location.
         *      @param {String} [options.country]
         *      	      A country name or a two letter ISO 3166-1 country code.
         *      @param {String} [options.region]
         *      	      The region code, specified as a ccTLD ("top-level domain")
         *      	      two-character value. e.g.: `"fr"` for France.
         *      @param {Array|Object} [options.bounds]
         *      	      The bounding box of the viewport within which to bias geocode
         *      	      results more prominently. e.g.:
         *      	      `[ southwestLat:Number, southwestLng:Number, northeastLat:Number, northeastLng:Number ]`
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *      @param {Boolean} [options.raw=false]
         *      	      Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var address = '1600 Amphitheatre Parkway, CA';
         *  geolocator.geocode(address, function (err, location) {
         *      console.log(err || location);
         *  });
         *
         *  @example
         *  // location result:
         *  {
         *      coords: {
         *          latitude: 37.4224764,
         *          longitude: -122.0842499
         *      },
         *      address: {
         *          commonName: "",
         *          street: "Amphitheatre Pkwy",
         *          route: "Amphitheatre Pkwy",
         *          streetNumber: "1600",
         *          neighborhood: "",
         *          town: "",
         *          city: "Mountain View",
         *          region: "Santa Clara County",
         *          state: "California",
         *          stateCode: "CA",
         *          postalCode: "94043",
         *          country: "United States",
         *          countryCode: "US"
         *      },
         *      formattedAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
         *      type: "ROOFTOP",
         *      placeId: "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
         *      flag: "//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/us.svg",
         *      map: {
         *          element: HTMLElement,
         *          instance: Object, // google.maps.Map
         *          marker: Object, // google.maps.Marker
         *          infoWindow: Object, // google.maps.InfoWindow
         *          options: Object // map options
         *      },
         *      timestamp: 1456795956380
         *  }
         */

    }, {
        key: 'geocode',
        value: function geocode(options, callback) {
            _geocode(false, options, callback);
        }

        /**
         *  Converts the given geographic coordinates into a human-readable address
         *  information.
         *  @see {@link https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding|Google Maps (Reverse) Geocoding API}
         *  @see {@link https://developers.google.com/maps/documentation/geocoding/usage-limits|Usage Limits}
         *  @alias geolocator.addressLookup
         *
         *  @param {Object|String} options
         *         Either the `placeId` of the location or Reverse Geocoding options
         *         with the following properties.
         *      @param {Number} options.latitude
         *      Latitude of the target location.
         *      @param {Number} options.longitude
         *      Longitude of the target location.
         *      @param {String} [options.placeId]
         *             Required if `latitude` and `longitude` are omitted. The place
         *             ID of the place for which you wish to obtain the
         *             human-readable address. The place ID is a unique identifier
         *             that can be used with other Google APIs. Note that if
         *             `placeId` is set, `latitude` and `longitude` are ignored.
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *      @param {Boolean} [options.raw=false]
         *             Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var coords = {
         *      latitude: 37.4224764,
         *      longitude: -122.0842499
         *  };
         *
         *  geolocator.reverseGeocode(coords, function (err, location) {
         *      console.log(err || location);
         *  });
         *
         *  @example
         *  // location result:
         *  {
         *      coords: {
         *          latitude: 37.4224764,
         *          longitude: -122.0842499
         *      },
         *      address: {
         *          commonName: "",
         *          street: "Amphitheatre Pkwy",
         *          route: "Amphitheatre Pkwy",
         *          streetNumber: "1600",
         *          neighborhood: "",
         *          town: "",
         *          city: "Mountain View",
         *          region: "Santa Clara County",
         *          state: "California",
         *          stateCode: "CA",
         *          postalCode: "94043",
         *          country: "United States",
         *          countryCode: "US"
         *      },
         *      formattedAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
         *      type: "ROOFTOP",
         *      placeId: "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
         *      flag: "//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/us.svg",
         *      map: {
         *          element: HTMLElement,
         *          instance: Object, // google.maps.Map
         *          marker: Object, // google.maps.Marker
         *          infoWindow: Object, // google.maps.InfoWindow
         *          options: Object // map options
         *      },
         *      timestamp: 1456795956380
         *  }
         */

    }, {
        key: 'reverseGeocode',
        value: function reverseGeocode(options, callback) {
            _geocode(true, options, callback);
        }

        /**
         *  Alias for `geolocator.reverseGeocode`
         *  @private
         */

    }, {
        key: 'addressLookup',
        value: function addressLookup(options, callback) {
            geolocator.reverseGeocode(options, callback);
        }

        /**
         *  Gets timezone information for the given coordinates.
         *  Note: Google Browser API keys cannot have referer restrictions when used with this API.
         *  @see {@link https://developers.google.com/maps/documentation/timezone/intro|Google Maps TimeZone API}
         *  @see {@link https://developers.google.com/maps/documentation/timezone/usage-limits|Usage Limits}
         *
         *  @param {Object} options
         *         Time zone options.
         *      @param {Number} options.latitude
         *             Latitude of location.
         *      @param {Number} options.longitude
         *             Longitude of location.
         *      @param {Number} [options.timestamp=Date.now()]
         *             Specifies the desired time as seconds since midnight, January
         *             1, 1970 UTC. This is used to determine whether or not Daylight
         *             Savings should be applied.
         *      @param {Boolean} [options.raw=false]
         *             Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes, in
         *         the following signature: `function (err, timezone) { ... }`.
         *         See {@link #geolocator~TimeZone|`geolocator~TimeZone` type} for
         *         details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      latitude: 48.8534100,
         *      longitude: 2.3488000
         *  };
         *  geolocator.getTimeZone(options, function (err, timezone) {
         *      console.log(err || timezone);
         *  });
         *
         *  @example
         *  // timezone result:
         *  {
         *      id: "Europe/Paris",
         *      name: "Central European Standard Time",
         *      abbr: "CEST",
         *      dstOffset: 0,
         *      rawOffset: 3600,
         *      timestamp: 1455733120
         *  }
         */

    }, {
        key: 'getTimeZone',
        value: function getTimeZone(options, callback) {
            if (!_utils2.default.isPlainObject(options) || !_utils2.default.isNumber(options.latitude) || !_utils2.default.isNumber(options.longitude)) {
                throw new _geo4.default(_geo4.default.Code.INVALID_PARAMETERS);
            }

            checkGoogleKey();

            var conf = geolocator._.config;
            options = _utils2.default.extend({
                key: conf.google.key || '',
                language: conf.language || 'en',
                timestamp: _utils2.default.time(true),
                raw: false
            }, options);

            var url = _utils2.default.setProtocol(_enums2.default.URL.GOOGLE_TIMEZONE, conf.https),
                xhrOpts = {
                url: url + '?location=' + options.latitude + ',' + options.longitude + '&timestamp=' + options.timestamp + '&language=' + options.language + '&key=' + options.key
            };

            _fetch2.default.xhr(xhrOpts, function (err, xhr) {
                var response = getXHRResponse(err, xhr);
                if (_geo4.default.isGeoError(response)) return callback(response, null);

                response = options.raw ? response : {
                    id: response.timeZoneId,
                    name: response.timeZoneName,
                    abbr: _utils2.default.abbr(response.timeZoneName, { dots: false }),
                    dstOffset: response.dstOffset,
                    rawOffset: response.rawOffset,
                    timestamp: options.timestamp
                };
                callback(err, response);
            });
        }

        /**
         *  Gets the distance and duration values based on the recommended route
         *  between start and end points.
         *  @see {@link https://developers.google.com/maps/documentation/distance-matrix/intro|Google Maps Distance Matrix API}
         *  @see {@link https://developers.google.com/maps/documentation/distance-matrix/usage-limits|Usage Limits}
         *
         *  @param {Object} options
         *         Distance matrix options.
         *      @param {String|Object|Array} options.origins
         *             One or more addresses and/or an object of latitude/longitude
         *             values, from which to calculate distance and time. If you pass
         *             an address as a string, the service will geocode the string
         *             and convert it to a latitude/longitude coordinate to calculate
         *             distances. Following are valid examples:
         *  <pre><code>options.origins = 'London';
         *  options.origins = ['London', 'Paris'];
         *  options.origins = { latitude: 51.5085300, longitude: -0.1257400 };
         *  options.origins = [
         *      { latitude: 51.5085300, longitude: -0.1257400 },
         *      { latitude: 48.8534100, longitude: 2.3488000 }
         *  ];
         *  </code></pre>
         *      @param {String|Object|Array} options.destinations
         *             One or more addresses and/or an object of latitude/longitude
         *             values, from which to calculate distance and time. If you pass
         *             an address as a string, the service will geocode the string
         *             and convert it to a latitude/longitude coordinate to calculate
         *             distances.
         *      @param {String} [options.travelMode="DRIVING"]
         *             Type of routing requested.
         *             See {@link #geolocator.TravelMode|`geolocator.TravelMode` enumeration}
         *             for possible values.
         *      @param {Boolean} [options.avoidFerries]
         *             If true, instructs the Distance Matrix service to avoid
         *             ferries where possible.
         *      @param {Boolean} [options.avoidHighways]
         *             If true, instructs the Distance Matrix service to avoid
         *             highways where possible.
         *      @param {Boolean} [options.avoidTolls]
         *             If true, instructs the Distance Matrix service to avoid toll
         *             roads where possible.
         *      @param {Number} [options.unitSystem=0]
         *             Preferred unit system to use when displaying distance.
         *             See {@link #geolocator.UnitSystem|`geolocator.UnitSystem` enumeration}
         *             for possible values.
         *      @param {String} [options.region]
         *             Region code used as a bias for geocoding requests.
         *  @param {Boolean} [options.raw=false]
         *         Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes,
         *         in the following signature: `function (err, result) { ... }`
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      origins: [{ latitude: 51.5085300, longitude: -0.1257400 }],
         *      destinations: [{ latitude: 48.8534100, longitude: 2.3488000 }],
         *      travelMode: geolocator.TravelMode.DRIVING,
         *      unitSystem: geolocator.UnitSystem.METRIC
         *  };
         *  geolocator.getDistanceMatrix(options, function (err, result) {
         *      console.log(err || result);
         *  });
         *
         *  @example
         *  // result:
         *  [
         *  	{
         *  		from: "449 Duncannon St, London WC2R 0DZ, UK",
         *  		to: "1 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris-4E-Arrondissement, France",
         *  		distance: {
         *  			value: 475104,
         *  			text: "475 km"
         *  		},
         *  		duration: {
         *  			value: 20193,
         *  			text: "5 hours 37 mins"
         *  		},
         *  		fare: undefined,
         *  		timestamp: 1456795956380
         *  	}
         *  ]
         */

    }, {
        key: 'getDistanceMatrix',
        value: function getDistanceMatrix(options, callback) {
            checkGoogleKey();

            var key = geolocator._.config.google.key;
            geolocator.ensureGoogleLoaded(key, function (err) {
                if (err) {
                    throw new _geo4.default(_geo4.default.Code.GOOGLE_API_FAILED, String(err.message || err));
                }

                var o = options.origins || options.origin || options.from,
                    d = options.destinations || options.destination || options.to;
                if (!_utils2.default.isPlainObject(options) || invalidOriginOrDest(o) || invalidOriginOrDest(d)) {
                    throw new _geo4.default(_geo4.default.Code.INVALID_PARAMETERS);
                }
                options.origins = _geo2.default.toPointList(o);
                options.destinations = _geo2.default.toPointList(d);

                options = _utils2.default.extend({
                    travelMode: google.maps.TravelMode.DRIVING,
                    avoidFerries: undefined,
                    avoidHighways: undefined,
                    avoidTolls: undefined,
                    unitSystem: google.maps.UnitSystem.METRIC
                }, options);

                var service = new google.maps.DistanceMatrixService();
                service.getDistanceMatrix(options, function (response, status) {
                    var err = null;
                    if (status !== google.maps.DistanceMatrixStatus.OK) {
                        err = _geo4.default.fromResponse(status) || _geo4.default.fromResponse(response);
                        response = null;
                    } else {
                        response = options.raw ? response : _geo2.default.formatDistanceResults(response);
                    }
                    callback(err, response);
                });
            });
        }

        /**
         *  Calculates the distance between two geographic points.
         *
         *  @param {Object} options
         *         Calculation and display options.
         *      @param {Object} options.from
         *             Object containing the `latitude` and `longitude` of original
         *             location.
         *      @param {Object} options.to
         *             Object containing the `latitude` and `longitude` of destination.
         *      @param {String} [options.formula="haversine"]
         *             The algorithm or formula to calculate the distance.
         *             See {@link #geolocator.DistanceFormula|`geolocator.DistanceFormula` enumeration}.
         *      @param {Number} [options.unitSystem=0]
         *             Preferred unit system to use when displaying distance.
         *             See {@link #geolocator.UnitSystem|`geolocator.UnitSystem` enumeration}.
         *
         *  @returns {Number} - The calculated distance.
         *
         *  @example
         *  // Calculate distance from London to Paris.
         *  var result = geolocator.calcDistance({
         *      from: {
         *          latitude: 51.5085300,
         *          longitude: -0.1257400
         *      },
         *      to: {
         *          latitude: 48.8534100,
         *          longitude: 2.3488000
         *      },
         *      formula: geolocator.DistanceFormula.HAVERSINE,
         *      unitSystem: geolocator.UnitSystem.METRIC
         *  });
         *  // result: 366.41656039126093 (kilometers)
         */

    }, {
        key: 'calcDistance',
        value: function calcDistance(options) {
            options = _utils2.default.extend({
                formula: geolocator.DistanceFormula.HAVERSINE,
                unitSystem: geolocator.UnitSystem.METRIC
            }, options);

            var from = options.from,
                to = options.to,
                radius = options.unitSystem === geolocator.UnitSystem.METRIC ? EARTH_RADIUS_KM : EARTH_RADIUS_MI;

            if (options.formula === geolocator.DistanceFormula.HAVERSINE) {
                var dLat = geolocator.degToRad(to.latitude - from.latitude),
                    dLng = geolocator.degToRad(to.longitude - from.longitude),
                    a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(geolocator.degToRad(from.latitude)) * Math.cos(geolocator.degToRad(to.longitude)) * Math.sin(dLng / 2) * Math.sin(dLng / 2),
                    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return radius * c;
            }
            // geolocator.DistanceFormula.PYTHAGOREAN
            var latA = geolocator.degToRad(from.latitude),
                latB = geolocator.degToRad(to.latitude),
                lngA = geolocator.degToRad(from.longitude),
                lngB = geolocator.degToRad(to.longitude),
                x = (lngB - lngA) * Math.cos((latA + latB) / 2),
                y = latB - latA;
            return Math.sqrt(x * x + y * y) * radius;
        }

        /**
         *  Gets the current public IP of the client.
         *
         *  @param {Function} callback
         *         Callback function to be executed when the request completes, in
         *         the following signature: `function (err, result) { ... }`
         *
         *  @returns {void}
         *
         *  @example
         *  geolocator.getIP(function (err, result) {
         *      console.log(err || result);
         *  });
         *
         *  @example
         *  // result:
         *  {
         *      ip: "176.232.71.155",
         *      timestamp: 1457573683427
         *  }
         */

    }, {
        key: 'getIP',
        value: function getIP(callback) {
            var conf = geolocator._.config;

            var jsonpOpts = {
                url: _utils2.default.setProtocol(_enums2.default.URL.IP, conf.https),
                async: true,
                clean: true,
                params: {
                    format: 'jsonp'
                },
                callbackParam: 'callback',
                rootName: 'geolocator._.cb'
            };
            return _fetch2.default.jsonp(jsonpOpts, function (err, response) {
                if (err) {
                    return callback(_geo4.default.create(err), null);
                }
                if (!response) {
                    err = new _geo4.default(_geo4.default.Code.INVALID_RESPONSE);
                    return callback(err, null);
                }
                if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) === 'object') response.timestamp = _utils2.default.time();
                callback(null, response);
            });
        }

        /**
         *  Ensures Google Maps API is loaded. If not, this will load all of the
         *  main Javascript objects and symbols for use in the Maps API.
         *
         *  Note that, Google Maps API is loaded only when needed. For example,
         *  the DistanceMatrix API does not support Web Service requests and
         *  requires this API to be loaded. However, the TimeZone API requests are
         *  made throught the Web Service without requiring a `google` object
         *  within DOM.
         *
         *  Also note that this will not re-load the API if `google.maps` object
         *  already exists. In this case, the `callback` is still executed and
         *  no errors are passed.
         *
         *  You can use the following overload to omit the `key` argument altogether:
         *
         *  `geolocator.ensureGoogleLoaded(callback)`
         *
         *  @param {String} [key]
         *         Google API key.
         *  @param {Function} callback
         *         Callback function to be executed when the operation ends.
         *
         *  @returns {void}
         *
         *  @example
         *  geolocator.ensureGoogleLoaded(function (err) {
         *      if (err) return;
         *      console.log('google' in window); // true
         *  });
         */

    }, {
        key: 'ensureGoogleLoaded',
        value: function ensureGoogleLoaded(key, callback) {
            var k = void 0;
            if (_utils2.default.isFunction(key)) {
                callback = key;
            } else {
                k = key;
            }
            if (!geolocator.isGoogleLoaded()) {
                var jsonpOpts = {
                    url: _enums2.default.URL.GOOGLE_MAPS_API,
                    async: true,
                    callbackParam: 'callback',
                    params: {
                        key: k || ''
                        // callback: ''
                    },
                    rootName: 'geolocator._.cb'
                };
                return _fetch2.default.jsonp(jsonpOpts, callback);
            }
            callback();
        }

        /**
         *  Checks whether the Google Maps API is loaded.
         *
         *  @returns {Boolean} - Returns `true` if already loaded.
         */

    }, {
        key: 'isGoogleLoaded',
        value: function isGoogleLoaded() {
            return 'google' in window && google.maps;
        }

        /**
         *  Checks whether the type of the given object is an HTML5 `PositionError`.
         *
         *  @param {*} obj - Object to be checked.
         *  @return {Boolean}
         */

    }, {
        key: 'isPositionError',
        value: function isPositionError(obj) {
            return _utils2.default.isPositionError(obj);
        }

        /**
         *  Checks whether the given value is an instance of `GeoError`.
         *
         *  @param {*} obj - Object to be checked.
         *  @return {Boolean}
         */

    }, {
        key: 'isGeoError',
        value: function isGeoError(obj) {
            return _geo4.default.isGeoError(obj);
        }

        /**
         *  Checks whether HTML5 Geolocation API is supported.
         *
         *  @return {Boolean}
         */

    }, {
        key: 'isGeolocationSupported',
        value: function isGeolocationSupported() {
            return navigator && 'geolocation' in navigator;
        }

        /**
         *  Converts kilometers to miles.
         *
         *  @param {Number} km - Kilometers to be converted.
         *  @returns {Number} - Miles.
         */

    }, {
        key: 'kmToMi',
        value: function kmToMi(km) {
            return km * 0.621371;
        }

        /**
         *  Converts miles to kilometers.
         *
         *  @param {Number} mi - Miles to be converted.
         *  @returns {Number} - Kilometers.
         */

    }, {
        key: 'miToKm',
        value: function miToKm(mi) {
            return mi / 0.621371;
        }

        /**
         *  Converts degrees to radians.
         *
         *  @param {Number} deg - Degrees to be converted.
         *  @returns {Number} - Radians.
         */

    }, {
        key: 'degToRad',
        value: function degToRad(degrees) {
            return degrees * (Math.PI / 180);
        }

        /**
         *  Converts radians to degrees.
         *
         *  @param {Number} rad - Radians to be converted.
         *  @returns {Number} - Degrees.
         */

    }, {
        key: 'radToDeg',
        value: function radToDeg(radians) {
            return radians * (180 / Math.PI);
        }

        /**
         *  Converts decimal coordinates (either lat or lng) to degrees, minutes, seconds.
         *
         *  @param {Number} dec
         *         Decimals to be converted.
         *  @param {Boolean} [isLng=false]
         *         Indicates whether the given decimals is longitude.
         *
         *  @returns {String} - Degrees, minutes, seconds.
         */

    }, {
        key: 'decToDegMinSec',
        value: function decToDegMinSec(dec) {
            var isLng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // Degrees Latitude must be in the range of -90. to 90.
            // Degrees Longitude must be in the range of -180 to 180.
            // +Latitude is North, -Latitude is South
            // +Longitude is East, -Longitude is West
            var sign = dec < 0 ? -1 : 1,
                sn = dec < 0 ? 'S' : 'N',
                we = dec < 0 ? 'W' : 'E',
                nsew = !isLng ? sn : we,
                absValue = Math.abs(Math.round(dec * 1000000.0));
            return Math.floor(absValue / 1000000) * sign + '° ' + Math.floor((absValue / 1000000 - Math.floor(absValue / 1000000)) * 60) + '\' ' + Math.floor(((absValue / 1000000 - Math.floor(absValue / 1000000)) * 60 - Math.floor((absValue / 1000000 - Math.floor(absValue / 1000000)) * 60)) * 100000) * 60 / 100000 + '" ' + nsew;
        }
    }, {
        key: 'Error',


        // ---------------------------
        // PROPERTIES
        // ---------------------------

        /**
         *  Geolocator Error class that provides a common type of error object for
         *  the various APIs implemented in Geolocator. All callbacks of Geolocator
         *  will include an instance of this object as the first argument; if the
         *  corresponding operation fails. Also all thrown errors will be an instance
         *  of this object.
         *
         *  This object also enumerates
         *  {@link ?api=geolocator-error#GeoError.Code|Geolocator Error codes}.
         *
         *  @see {@link ?api=geolocator-error|`GeoError` documentation}
         *  @type {GeoError}
         *  @readonly
         */
        get: function get() {
            return _geo4.default;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'MapTypeId',
        get: function get() {
            return _enums2.default.MapTypeId;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'LocationType',
        get: function get() {
            return _enums2.default.LocationType;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'TravelMode',
        get: function get() {
            return _enums2.default.TravelMode;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'UnitSystem',
        get: function get() {
            return _enums2.default.UnitSystem;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'RadioType',
        get: function get() {
            return _enums2.default.RadioType;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'DistanceFormula',
        get: function get() {
            return _enums2.default.DistanceFormula;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'ImageFormat',
        get: function get() {
            return _enums2.default.ImageFormat;
        }
    }]);

    return geolocator;
}();

// ---------------------------
// HELPER METHODS
// ---------------------------

/**
 *  Used with distance matrix calls.
 *  @private
 */


function invalidOriginOrDest(value) {
    return !_utils2.default.isString(value) && !_utils2.default.isArray(value) && !_utils2.default.isPlainObject(value);
}

/**
 *  Check if XHR response is an error response and returns a `GeoError`.
 *  If not, returns the parsed response.
 *  @private
 *
 *  @param {Error} err
 *         XHR error.
 *  @param {Object} xhr
 *         XHR object to be checked.
 *
 *  @returns {GeoError|Object}
 */
function getXHRResponse(err, xhr) {
    if (err) return _geo4.default.create(err);
    if (!xhr) return new _geo4.default(_geo4.default.Code.REQUEST_FAILED);
    var response = _utils2.default.safeJsonParse(xhr.responseText);
    // Check if XHR response is an error response.
    // return response if not.
    return _geo4.default.fromResponse(response) || response;
}

/**
 *  Checks the given options and determines if Google key is required.
 *  Throws if key is required but not set or valid.
 *  @private
 *
 *  @param {Object} [options]
 *         Options to be checked. If `undefined`, directly checks Googke key.
 */
function checkGoogleKey(options) {
    if (!options || options.addressLookup || options.timezone || options.map || options.staticMap) {
        if (!geolocator._.config.google.key) {
            throw new _geo4.default(_geo4.default.Code.GOOGLE_KEY_INVALID, 'A Google API key is required but it\'s not set or valid.');
        }
    }
}

/**
 *  Checks and adds necessary properties to map options from the given location
 *  result object. This is used with methods that support `map` option; to
 *  create a map from the result coordinates; such as locate() method.
 *  @private
 *
 *  @param {Object|String} options
 *         Original options object.
 *  @param {Object} location
 *         Location result object.
 *
 *  @returns {Object} - Final map options object.
 */
function getMapOpts(mapOptions, location) {
    if (_utils2.default.isObject(mapOptions)) {
        mapOptions.center = location.coords;
    } else {
        mapOptions = {
            element: mapOptions,
            center: location.coords
        };
    }
    // this will enable infoWindow
    if (location.formattedAddress) {
        mapOptions.title = location.formattedAddress;
    }
    // if location has accuracy, (and zoom is not set) we can zoom in a bit more
    if (!mapOptions.zoom && location.coords && _utils2.default.isNumber(location.coords.accuracy) && location.coords.accuracy < 1500) {
        mapOptions.zoom = 15;
    }
    return mapOptions;
}

/**
 *  Checks the HTMLElement to see whether a previous map and related objects
 *  (marker, infoWindow) are created for it; by checking our private property
 *  `_geolocatorMapData`. If there is a map, this does not re-create it (which
 *  will break the map) but only re-adjust center, zoom and re-create the marker
 *  if needed. We use this approach bec. Google maps has no feature to destroy
 *  a map. This is considered a bug by Google developers.
 *  @private
 *
 *  @param {Object} options
 *         Options for creating a map.
 */
function configCreateMap(options) {
    var elem = options.element,

    // when geolocator creates a map, it will set a `_geolocatorMapData`
    // property on the element. So we can use this map instance later,
    // when the same HTMLElement is passed to create a map. So check if
    // we have it here.
    mapData = elem._geolocatorMapData,
        map = mapData && mapData.instance || null,
        marker = mapData && mapData.marker || null,
        infoWindow = mapData && mapData.infoWindow || null,
        center = new google.maps.LatLng(options.center.latitude, options.center.longitude),
        mapOptions = {
        mapTypeId: options.mapTypeId,
        center: center,
        zoom: options.zoom,
        styles: options.styles || null
    };

    // if we have a map, we'll just configure it. otherwise, we'll create
    // one.
    if (map) {
        map.setOptions(mapOptions);
    } else {
        map = new google.maps.Map(options.element, mapOptions);
    }

    // destroy marker and infoWindow if previously created for this element.
    if (infoWindow) infoWindow = null;
    if (marker && marker instanceof google.maps.Marker) {
        google.maps.event.clearInstanceListeners(marker);
        marker.setMap(null);
        marker = null;
    }

    // check the new options to see if we need to re-create a marker for
    // this.
    if (options.marker) {
        marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map
        });
        if (options.title) {
            infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(options.title);
            // infoWindow.open(map, marker);
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
        }
    }

    mapData = {
        element: elem,
        instance: map,
        marker: marker,
        infoWindow: infoWindow,
        options: mapOptions
    };
    // set the reference on the element for later use, if needed.
    elem._geolocatorMapData = mapData;
    return mapData;
}

/**
 *  Sets the `flag` and `staticMap` (if enabled) property of the given location.
 *  @private
 *
 *  @param {Object} location - Fetched location result.
 *  @param {Object} options - initial options.
 */
function setLocationURLs(location, options) {
    if (!location || !location.address) return;
    var cc = void 0,
        address = location.address;
    if (_utils2.default.isString(address.countryCode) && address.countryCode.length === 2) {
        cc = address.countryCode;
    } else if (_utils2.default.isString(address.country) && address.country.length === 2) {
        cc = address.country;
    }
    if (!cc) return;
    location.flag = _enums2.default.URL.FLAG + cc.toLowerCase() + '.svg';
    if (options.staticMap) {
        var opts = _utils2.default.isPlainObject(options.staticMap) ? _utils2.default.clone(options.staticMap) : {};
        opts.center = location.coords;
        location.staticMap = geolocator.getStaticMap(opts);
    }
}

/**
 *  Nests `createMap` callback within the given callback.
 *  @private
 *
 *  @param {Object} options
 *         Method options.
 *  @param {Function} callback
 *         Parent callback.
 *
 *  @returns {Function} - Nested callback.
 */
function callbackMap(options, callback) {
    return function cb(err, location) {
        if (err) return callback(_geo4.default.create(err), null);
        setLocationURLs(location, options);
        if (!options.map) return callback(null, location);
        options.map = getMapOpts(options.map, location);
        geolocator.createMap(options.map, function (error, map) {
            if (error) return callback(error, null);
            location.map = map;
            return callback(null, location);
        });
    };
}

/**
 *  Sends a geocode or reverse-geocode request with the given options.
 *  @private
 *
 *  @param {Boolean} reverse
 *         Whether to send reverse-geocode request.
 *  @param {Object} options
 *         Geocode options.
 *  @param {Function} callback
 *         Callback to be nested and executed with map callback.
 */
function _geocode(reverse, options, callback) {
    checkGoogleKey();
    _geo2.default.geocode(reverse, geolocator._.config, options, callbackMap(options, callback));
}

/**
 *  Runs both an address and a timezone look-up for the given location.
 *  @private
 *
 *  @param {Object} location
 *         Location object.
 *  @param {Object} options
 *         Method options.
 *  @param {Function} callback
 *         Parent callback.
 */
function fetchAddressAndTimezone(location, options, callback) {
    var loc = _utils2.default.clone(location, { own: false });
    if (!options.addressLookup && !options.timezone) {
        return callback(null, loc);
    }
    function getTZ(cb) {
        geolocator.getTimeZone(loc.coords, function (err, timezone) {
            if (err) {
                return cb(err, null);
            }
            delete timezone.timestamp;
            loc.timezone = timezone;
            loc.timestamp = _utils2.default.time(); // update timestamp
            cb(null, loc);
        });
    }
    if (options.addressLookup) {
        geolocator.reverseGeocode(loc.coords, function (err, result) {
            if (err) return callback(err, null);
            loc = _utils2.default.extend({}, result, loc);
            loc.address = result.address;
            loc.timestamp = _utils2.default.time(); // update timestamp
            if (!options.timezone) {
                callback(err, loc);
            } else {
                getTZ(callback);
            }
        });
    } else if (options.timezone) {
        getTZ(callback);
    } else {
        callback(null, loc);
    }
}

/**
 *  Gets the position with better accuracy.
 *  See https://github.com/gwilson/getAccurateCurrentPosition#background
 *  @private
 *
 *  @param {Object} options
 *         Locate options.
 *  @param {Function} onPositionReceived
 *         Success callback.
 *  @param {Function} onPositionError
 *         Error callback.
 */
function locateAccurate(options, onPositionReceived, onPositionError) {
    var loc = void 0,
        watcher = void 0,
        onProgress = !_utils2.default.isFunction(options.onProgress) ? _utils2.default.noop : options.onProgress;

    function complete() {
        if (!loc) {
            onPositionError(new _geo4.default(_geo4.default.Code.POSITION_UNAVAILABLE));
        } else {
            onPositionReceived(loc);
        }
    }

    watcher = geolocator.watch(options, function (err, location) {
        if (err) {
            return watcher.clear(function () {
                onPositionError(err);
            });
        }
        loc = location;
        // ignore the first event if not the only result; for more accuracy.
        if (watcher.cycle > 1 && loc.coords.accuracy <= options.desiredAccuracy) {
            watcher.clear(complete);
        } else {
            onProgress(loc);
        }
    });
    watcher.clear(options.maximumWait + 100, complete);
}

function getStyles(options) {
    var conf = geolocator._.config;
    return !_utils2.default.isFilledArray(options.styles) ? _utils2.default.isFilledArray(conf.google.styles) ? conf.google.styles : null : options.styles;
}

// ---------------------------
// INITIALIZE
// ---------------------------

/**
 *  @private
 *  @type {Object}
 */
geolocator._ = {
    config: _utils2.default.extend({}, defaultConfig),
    // Storage for global callbacks.
    cb: {}
};

// setting default Geo-IP source, FreeGeoIP
geolocator.setGeoIPSource({
    provider: 'freegeoip',
    url: 'https://freegeoip.net/json',
    callbackParam: 'callback',
    schema: {
        ip: 'ip',
        coords: {
            latitude: 'latitude',
            longitude: 'longitude'
        },
        address: {
            city: 'city',
            state: 'region_name',
            stateCode: 'region_code',
            postalCode: 'zip_code',
            countryCode: 'country_code',
            country: 'country_name',
            region: 'region_name'
        },
        timezone: {
            id: 'time_zone'
        }
    }
});

// ---------------------------
// EXPORT
// ---------------------------

exports.default = geolocator;

// ---------------------------
// ADDITIONAL DOCUMENTATION
// ---------------------------

/**
 *  `Coordinates` inner type that specifies the geographic position of the
 *  device. The position is expressed as a set of geographic coordinates
 *  together with information about heading and speed.
 *
 *  This is generally returned as part of the
 *  {@link ?api=geolocator#geolocator~Location|`Location` result object}.
 *
 *  @typedef geolocator~Coordinates
 *  @type Object
 *
 *  @property {Number} latitude
 *         Specifies the latitude estimate in decimal degrees. The value
 *         range is [-90.00, +90.00].
 *  @property {Number} longitude
 *         Specifies the longitude estimate in decimal degrees. The value
 *         range is [-180.00, +180.00].
 *  @property {Number} altitude
 *         Specifies the altitude estimate in meters above the WGS 84
 *         ellipsoid.
 *  @property {Number} accuracy
 *         Specifies the accuracy of the latitude and longitude estimates in
 *         meters.
 *  @property {Number} altitudeAccuracy
 *         Specifies the accuracy of the altitude estimate in meters.
 *  @property {Number} heading
 *         Specifies the device's current direction of movement in degrees
 *         counting clockwise relative to true north.
 *  @property {Number} speed
 *         Specifies the device's current ground speed in meters per second.
 */

/**
 *	`Address` inner type that specifies the address of the fetched location.
 *	The address is expressed as a set of political and locality components.
 *
 *  This is generally returned as part of the
 *  {@link ?api=geolocator#geolocator~Location|`Location` result object}.
 *
 *  @typedef geolocator~Address
 *  @type Object
 *
 *  @property {String} commonName
 *         Indicates a point of interest, a premise or colloquial area name for
 *         the fetched location, if any.
 *  @property {String} streetNumber
 *         Indicates the precise street number of the fetched location, if any.
 *  @property {String} street
 *         Indicates the street name of the fetched location, if any.
 *  @property {String} route
 *         Indicates the route name of the fetched location, if any.
 *  @property {String} neighborhood
 *         Indicates the neighborhood name of the fetched location, if any.
 *  @property {String} town
 *         Indictes the town of the fetched location, if any.
 *  @property {String} city
 *         Indicates the city of the fetched location.
 *  @property {String} region
 *         Indicates the political region name of the fetched location, if any.
 *  @property {String} postalCode
 *         Indicates the postal code of the fetched location, if any.
 *  @property {String} state
 *         Indicates the state of the fetched location, if any.
 *  @property {String} stateCode
 *         Indicates the state code of the fetched location, if any.
 *  @property {String} country
 *         Indicates the national political entity of the fetched location.
 *  @property {String} countryCode
 *         Indicates the ISO alpha-2 country code of the fetched location.
 */

/**
 *	`TimeZone` inner type that specifies time offset data for the fetched
 *	location on the surface of the earth.
 *
 *  This is generally returned as part of the
 *  {@link ?api=geolocator#geolocator~Location|`Location` result object}.
 *
 *  @typedef geolocator~TimeZone
 *  @type Object
 *
 *  @property {String} id
 *         The ID of the time zone, such as `"America/Los_Angeles"` or
 *         `"Australia/Sydney"`. These IDs are defined in the
 *         {@link http://www.iana.org/time-zones|IANA Time Zone Database},
 *         which is also available in searchable format in Wikipedia's
 *         {@link http://en.wikipedia.org/wiki/List_of_tz_database_time_zones|List of tz database time zones}.
 *  @property {String} name
 *         The long form name of the time zone. This field will be localized if
 *         the Geolocator `language` is configured. e.g. `"Pacific Daylight Time"`
 *         or `"Australian Eastern Daylight Time"`.
 *  @property {String} abbr
 *         The abbreviation of the time zone.
 *  @property {Number} dstOffset
 *         The offset for daylight-savings time in seconds. This will be zero
 *         if the time zone is not in Daylight Savings Time during the specified
 *         timestamp.
 *  @property {Number} rawOffset
 *         The offset from UTC (in seconds) for the given location. This does
 *         not take into effect daylight savings.
 */

/**
 *	`MapData` inner type that provides references to the components of a
 *	created Google Maps `Map` and the containing DOM element.
 *
 *  This is generally returned as part of the
 *  {@link ?api=geolocator#geolocator~Location|`Location` result object}.
 *
 *  @typedef geolocator~MapData
 *  @type Object
 *
 *  @property {HTMLElement} element
 *         DOM element which a (Google) map is created within.
 *  @property {google.maps.Map} instance
 *         Instance of a Google Maps `Map` object.
 *  @property {google.maps.Marker} marker
 *         Instance of a Google Maps `Marker` object, if any.
 *  @property {google.maps.InfoWindow} infoWindow
 *         Instance of a Google Maps `InfoWindow` object, if any.
 *  @property {Object} options
 *         Arbitrary object of applied map options.
 */

/**
 *	`Location` inner type that specifies geographic coordinates, address and
 *	time zone information for the fetched location.
 *
 *  This result object is passed to the callbacks of the corresponding
 *  asynchronous Geolocator methods (such as `.locate()` method), as the second
 *  argument. The contents of this object will differ for various  Geolocator
 *  methods, depending on the configured method options.
 *
 *  @typedef geolocator~Location
 *  @type Object
 *
 *  @property {Coordinates} coords
 *         Specifies the geographic location of the device. The location is
 *         expressed as a set of geographic coordinates together with
 *         information about heading and speed.
 *         See {@link #geolocator~Coordinates|`geolocator~Coordinates` type}
 *         for details.
 *  @property {Address} address
 *         Specifies the address of the fetched location. The address is
 *         expressed as a set of political and locality components.
 *         This property might be `undefined` if `addressLookup` option is not
 *         enabled for the corresponding method.
 *         See {@link #geolocator~Address|`geolocator~Address` type}
 *         for details.
 *  @property {String} formattedAddress
 *         The human-readable address of this location. Often this address is
 *         equivalent to the "postal address," which sometimes differs from
 *         country to country.
 *  @property {Boolean} targetReached
 *         Specifies whether the defined target coordinates is reached.
 *         This property is only available for
 *         {@link #geolocator.watch|`geolocator.watch()`} method when `target`
 *         option is defined.
 *  @property {String} type
 *         Type of the location. See
 *         {@link #geolcoator.LocationType|`geolcoator.LocationType` enumeration}
 *         for details.
 *  @property {String} placeId
 *         A unique identifier that can be used with other Google APIs.
 *  @property {String} flag
 *         URL of the country flag image, in SVG format. This property exists
 *         only if address information is available.
 *  @property {TimeZone} timezone
 *         Specifies time offset data for the fetched location on the surface of
 *         the earth. See {@link #geolocator~TimeZone|`geolocator~TimeZone` type}
 *         for details.
 *  @property {MapData} map
 *         Provides references to the components of a created Google Maps `Map`
 *         and the containing DOM element. See
 *         {@link #geolocator~MapData|`geolocator~MapData` type} for details.
 *  @property {String} staticMap
 *         URL of a static Google map image, for the location.
 *  @property {Number} timestamp
 *         Specifies the time when the location information was retrieved and
 *         the `Location` object created.
 */

/**
 *  `MapOptions` inner type that specifies options for the map to be created.
 *
 *  @typedef geolocator~MapOptions
 *  @type Object
 *
 *  @property {String|HTMLElement|Map} element
 *         Either the ID of a DOM element or the element itself;
 *         which the map will be created within; or a previously created
 *         `google.maps.Map` instance. If a map instance is set, this
 *         only will apply the options without re-creating it.
 *  @property {Object} center
 *         Center coordinates for the map to be created.
 *      @property {Number} center.latitude
 *             Latitude of the center point coordinates.
 *      @property {Number} center.longitude
 *             Longitude of the center point coordinates.
 *  @property {String} mapTypeId
 *         Type of the map to be created.
 *         See {@link #geolocator.MapTypeId|`geolocator.MapTypeId` enumeration}
 *         for possible values.
 *  @property {String} title
 *         Title text to be displayed within an `InfoWindow`, when the
 *         marker is clicked. This only take effect if `marker` is
 *         enabled.
 *  @property {Boolean} marker
 *         Whether to place a marker at the given coordinates.
 *         If `title` is set, an `InfoWindow` will be opened when the
 *         marker is clicked.
 *  @property {Number} zoom
 *             Zoom level to be set for the map.
 */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _fetch = __webpack_require__(3);

var _fetch2 = _interopRequireDefault(_fetch);

var _enums = __webpack_require__(1);

var _enums2 = _interopRequireDefault(_enums);

var _geo = __webpack_require__(2);

var _geo2 = _interopRequireDefault(_geo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Helper methods.
 *
 *  @license MIT
 *  @copyright 2016, Onur Yıldırım (onur@cutepilot.com)
 *  @type {Object}
 *  @private
 */
var geoHelper = {
    toGoogleCoords: function toGoogleCoords(coords) {
        return {
            lat: coords.lat || coords.latitude,
            lng: coords.lng || coords.longitude
        };
    },
    fromGoogleCoords: function fromGoogleCoords(coords) {
        return {
            latitude: coords.latitude || coords.lat,
            longitude: coords.longitude || coords.lng
        };
    },


    // used for distance matrix origins and destinations
    toPointList: function toPointList(arr) {
        arr = _utils2.default.isArray(arr) ? arr : [arr];
        return arr.map(function (o) {
            return _utils2.default.isString(o) ? o : geoHelper.toGoogleCoords(o);
        });
    },
    getGeocodeComps: function getGeocodeComps(comp) {
        return {
            route: comp.route,
            locality: comp.locality,
            administrative_area: comp.administrativeArea, // eslint-disable-line camelcase
            postal_code: comp.postalCode, // eslint-disable-line camelcase
            country: comp.country,
            region: comp.region
        };
    },


    // Geocode examples:
    // address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY
    // address=Winnetka&bounds=34.172684,-118.604794|34.236144,-118.500938&key=API_KEY
    // address=santa+cruz&components=country:ES&key=API_KEY
    // components=administrative_area:TX|country:US&key=API_KEY
    // Reverse Geocode examples:
    // latlng=40.714224,-73.961452&key=API_KEY
    // place_id=ChIJd8BlQ2BZwokRAFUEcm_qrcA&key=API_KEY
    buildGeocodeParams: function buildGeocodeParams(options, reverse) {
        var params = [],
            e = _utils2.default.encodeURI;

        if (reverse) {
            if (options.placeId) {
                params.push('place_id=' + options.placeId);
            } else if (options.latitude && options.longitude) {
                params.push('latlng=' + options.latitude + ',' + options.longitude);
            }
        } else {
            if (options.address) {
                params.push('address=' + e(options.address));
            }

            var geoComps = geoHelper.getGeocodeComps(options);
            geoComps = _utils2.default.params(geoComps, { operator: ':', separator: '|' });
            params.push('components=' + geoComps);

            var b = options.bounds;
            if (_utils2.default.isArray(b) && b.length === 4) {
                params.push('bounds=' + b[0] + ',' + b[1] + '|' + b[2] + ',' + b[3]);
            } else if (_utils2.default.isPlainObject(b) && Object.keys(b).length === 4) {
                params.push('bounds=' + b.southwestLat + ',' + b.southwestLng + '|' + b.northeastLat + ',' + b.northeastLng);
            }
        }

        params.push('language=' + options.language);
        params.push('key=' + options.key);
        return params.join('&');
    },


    // See https://developers.google.com/maps/documentation/geocoding/intro
    formatGeocodeResults: function formatGeocodeResults(results) {
        if (!_utils2.default.isArray(results) || results.length <= 0) {
            return {
                location: null,
                address: null,
                formattedAddress: '',
                type: null, // locationType
                placeId: ''
            };
        }

        var i = void 0,
            c = void 0,
            o = {},
            data = results[0],
            comps = data.address_components;

        for (i = 0; i < comps.length; i += 1) {
            c = comps[i];
            if (c.types && c.types.length > 0) {
                o[c.types[0]] = c.long_name;
                o[c.types[0] + '_s'] = c.short_name;
            }
        }

        var geometry = data.geometry;
        return {
            coords: geometry && geometry.location ? {
                latitude: geometry.location.lat,
                longitude: geometry.location.lng
            } : null,
            address: {
                commonName: o.point_of_interest || o.premise || o.subpremise || o.colloquial_area || '',
                streetNumber: o.street_number || '',
                street: o.administrative_area_level_4 || o.administrative_area_level_3 || o.route || '',
                route: o.route || '',
                neighborhood: o.neighborhood || o.administrative_area_level_5 || o.administrative_area_level_4 || '',
                town: o.sublocality || o.administrative_area_level_2 || '',
                city: o.locality || o.administrative_area_level_1 || '',
                region: o.administrative_area_level_2 || o.administrative_area_level_1 || '',
                postalCode: o.postal_code || '',
                state: o.administrative_area_level_1 || '',
                stateCode: o.administrative_area_level_1_s || '',
                country: o.country || '',
                countryCode: o.country_s || ''
            },
            formattedAddress: data.formatted_address,
            type: geometry.location_type || '',
            placeId: data.place_id,
            timestamp: _utils2.default.time()
        };
    },
    geocode: function geocode(reverse, conf, options, callback) {
        var opts = {};
        if (_utils2.default.isString(options)) {
            opts = {};
            var prop = reverse ? 'placeId' : 'address';
            opts[prop] = options;
        } else if (_utils2.default.isPlainObject(options)) {
            opts = options;
        } else {
            throw new _geo2.default(_geo2.default.Code.INVALID_PARAMETERS);
        }

        if (reverse) {
            var coordsSet = _utils2.default.isNumber(options.latitude) && _utils2.default.isNumber(options.longitude);
            if (!_utils2.default.isString(options.placeId) && !coordsSet) {
                throw new _geo2.default(_geo2.default.Code.INVALID_PARAMETERS);
            }
        }

        opts = _utils2.default.extend({
            key: conf.google.key || '',
            language: conf.language || 'en',
            raw: false
        }, opts);

        var query = geoHelper.buildGeocodeParams(opts, reverse),
            url = _utils2.default.setProtocol(_enums2.default.URL.GOOGLE_GEOCODE, conf.https),
            xhrOpts = {
            url: url + '?' + query
        };

        _fetch2.default.xhr(xhrOpts, function (err, xhr) {
            if (err) return callback(_geo2.default.create(err), null);

            var response = _utils2.default.safeJsonParse(xhr.responseText),
                gErr = _geo2.default.fromResponse(response);

            if (gErr) return callback(gErr, null);

            response = options.raw ? response : geoHelper.formatGeocodeResults(response.results);
            callback(null, response);
        });
    },


    // See https://developers.google.com/maps/documentation/distance-matrix/intro
    // Raw Result Example:
    // {
    //    "destination_addresses" : [ "San Francisco, CA, USA", "Victoria, BC, Canada" ],
    //    "origin_addresses" : [ "Vancouver, BC, Canada", "Seattle, WA, USA" ],
    //    "rows" : [
    //       {
    //          "elements" : [
    //             {
    //                "distance" : { "text" : "1,704 km", "value" : 1704324 },
    //                "duration" : { "text" : "3 days 19 hours", "value" : 327061
    //                },
    //                "status" : "OK"
    //             },
    //             {
    //                "distance" : { "text" : "138 km", "value" : 138295 },
    //                "duration" : { "text" : "6 hours 44 mins", "value" : 24236 },
    //                "status" : "OK"
    //             }
    //          ]
    //       },
    //       {
    //          "elements" : [
    //             {
    //                "distance" : { "text" : "1,452 km", "value" : 1451623 },
    //                "duration" : { "text" : "3 days 4 hours", "value" : 275062 },
    //                "status" : "OK"
    //             },
    //             {
    //                "distance" : { "text" : "146 km", "value" : 146496 },
    //                "duration" : { "text" : "2 hours 52 mins", "value" : 10324 },
    //                "status" : "OK"
    //             }
    //          ]
    //       }
    //    ],
    //    "status" : "OK"
    // }
    // Formatted to:

    formatDistanceResults: function formatDistanceResults(results) {
        if (!_utils2.default.isPlainObject(results)) {
            return null;
        }

        var arr = [],
            origins = results.originAddresses,
            dests = results.destinationAddresses,
            rows = results.rows;

        // [
        //     {
        //          from: 'Vancouver, BC, Canada',
        //          to: 'San Francisco, CA, USA',
        //          distance: { value: 1704107, text: "1,704 km" },
        //          duration: { value: 327025, text: "3 days 19 hours" },
        //          fare: { currency: "USD", value: 6, text: "$6.00" }
        //     },
        //     ...
        // ]

        var e = void 0;
        origins.forEach(function (origin, oIndex) {
            dests.forEach(function (dest, dIndex) {
                e = rows[oIndex].elements[dIndex];
                arr.push({
                    from: origin,
                    to: dest,
                    distance: e.distance,
                    duration: e.duration,
                    fare: e.fare,
                    timestamp: _utils2.default.time()
                });
            });
        });

        return arr;
    },


    // Converts a map-styles object in to static map styles (formatted query-string params).
    // See https://developers.google.com/maps/documentation/static-maps/styling
    mapStylesToParams: function mapStylesToParams(styles) {
        if (!styles) return '';
        if (!_utils2.default.isArray(styles)) styles = [styles];
        var result = [];
        styles.forEach(function (v, i, a) {
            var style = '';
            if (v.stylers) {
                // only if there is a styler object
                if (v.stylers.length > 0) {
                    // Needs to have a style rule to be valid.
                    style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
                    style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
                    v.stylers.forEach(function (val, i, a) {
                        var propName = Object.keys(val)[0],
                            propVal = val[propName].toString().replace('#', '0x');
                        style += propName + ':' + propVal + '|';
                    });
                }
            }
            result.push('style=' + encodeURIComponent(style));
        });
        return result.join('&');
    }
};

exports.default = geoHelper;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoWatcher = function () {
    function GeoWatcher(onChange, onError) {
        var _this = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, GeoWatcher);

        this.isCleared = false;
        this.cycle = 0;
        this._timer = null;
        this.id = navigator.geolocation.watchPosition(function (pos) {
            _this.cycle++;
            if (_utils2.default.isFunction(onChange)) onChange(pos);
        }, function (err) {
            _this.cycle++;
            if (_utils2.default.isFunction(onError)) onError(err);
            if (options.clearOnError) {
                _this.clear();
            }
        }, options);
    }

    _createClass(GeoWatcher, [{
        key: '_clear',
        value: function _clear() {
            navigator.geolocation.clearWatch(this.id);
            this.isCleared = true;
            this._timer = null;
        }
    }, {
        key: 'clear',
        value: function clear(delay, callback) {
            var _this2 = this;

            var d = _utils2.default.isNumber(delay) ? delay : 0,
                cb = _utils2.default.isFunction(callback) ? callback : _utils2.default.isFunction(delay) ? delay : null;
            // clear any previous timeout
            if (this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
            }
            // check if watcher is not cleared
            if (!this.isCleared) {
                if (d === 0) {
                    this._clear();
                    if (cb) cb();
                    return;
                }
                this._timer = setTimeout(function () {
                    _this2._clear();
                    if (cb) cb();
                }, d);
            }
        }
    }]);

    return GeoWatcher;
}();

// ---------------------------
// EXPORT
// ---------------------------

exports.default = GeoWatcher;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _geolocator = __webpack_require__(4);

var _geolocator2 = _interopRequireDefault(_geolocator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// See https://github.com/onury/geolocator/issues/42
if (typeof window !== 'undefined' && typeof window.geolocator === 'undefined') {
        window.geolocator = _geolocator2.default;
}

// export default geolocator;
// http://stackoverflow.com/a/33683495/112731
module.exports = _geolocator2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=geolocator.js.map

/***/ }),

/***/ 942:
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
          staticClass: "bg-primary-card weather-widget",
          attrs: { "header-tag": "h4" }
        },
        [
          _c("div", { staticClass: "row weather-data" }, [
            _c("div", { staticClass: "col-lg-12 temperature" }, [
              _c("h2", [
                _vm.weather.list
                  ? _c("i", {
                      staticClass: "wi icon",
                      class: "wi-owm-" + _vm.weather.list[0].weather[0].id
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.weather.list
                  ? _c("span", { staticClass: "pull-right" }, [
                      _vm._v(
                        _vm._s(_vm.weather.list[0].temp.day) +
                          "\n                        "
                      ),
                      _c("sup", [_c("sup", [_vm._v("o")])]),
                      _vm._v("c\n                        "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "location" }, [
                        _c("i", {
                          staticClass: "fa fa-map-marker text-default",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.weather.city.name) +
                            ", " +
                            _vm._s(_vm.weather.city.country)
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "weather-footer mt-5" }, [
              _vm.weather.list
                ? _c(
                    "div",
                    { staticClass: "row text-center mt-1" },
                    _vm._l(_vm.weather.list, function(day, index) {
                      return index > 0
                        ? _c(
                            "div",
                            { key: index, staticClass: "col-md-2 col-4 popup" },
                            [
                              _c("h5", [_vm._v(_vm._s(_vm.getday(day.dt)))]),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "wi",
                                class: "wi-owm-" + day.weather[0].id
                              }),
                              _vm._v(" "),
                              _c("p", [_vm._v(_vm._s(day.temp.day) + "°c")])
                            ]
                          )
                        : _vm._e()
                    })
                  )
                : _vm._e()
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-758bec7d", module.exports)
  }
}

/***/ })

});