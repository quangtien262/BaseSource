webpackJsonp([103],{

/***/ 1551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_echarts_v3_src_full_js__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_chart_map__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_chart_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_echarts_lib_chart_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_lib_chart_treemap__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_lib_chart_treemap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_echarts_lib_chart_treemap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_echarts_lib_chart_graph__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_echarts_lib_chart_graph___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_echarts_lib_chart_graph__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_echarts_lib_chart_gauge__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_echarts_lib_chart_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_echarts_lib_chart_gauge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_echarts_lib_chart_funnel__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_echarts_lib_chart_funnel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_echarts_lib_chart_funnel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_lib_chart_parallel__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_lib_chart_parallel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_echarts_lib_chart_parallel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_echarts_lib_chart_sankey__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_echarts_lib_chart_sankey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_echarts_lib_chart_sankey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_echarts_lib_chart_boxplot__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_echarts_lib_chart_boxplot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_echarts_lib_chart_boxplot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_echarts_lib_component_graphic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_echarts_lib_component_graphic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_echarts_lib_component_graphic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_echarts_lib_component_grid__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_echarts_lib_component_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_echarts_lib_component_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_echarts_lib_component_legend__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_echarts_lib_component_legend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_echarts_lib_component_legend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_echarts_lib_component_tooltip__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_echarts_lib_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_echarts_lib_component_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_echarts_lib_component_title__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_echarts_lib_component_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_echarts_lib_component_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_echarts_lib_component_dataZoom__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_echarts_lib_component_dataZoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_echarts_lib_component_dataZoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_echarts_lib_component_visualMap__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_echarts_lib_component_visualMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_echarts_lib_component_visualMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_echarts_lib_component_markPoint__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_echarts_lib_component_markPoint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_echarts_lib_component_markPoint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_echarts_lib_component_markLine__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_echarts_lib_component_markLine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_echarts_lib_component_markLine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_echarts_lib_component_markArea__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_echarts_lib_component_markArea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_echarts_lib_component_markArea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_echarts_lib_component_timeline__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_echarts_lib_component_timeline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_echarts_lib_component_timeline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_echarts_lib_component_toolbox__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_echarts_lib_component_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_echarts_lib_component_toolbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_zrender_lib_vml_vml__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_zrender_lib_vml_vml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_zrender_lib_vml_vml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_zrender_lib_graphic_LinearGradient__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_zrender_lib_graphic_LinearGradient___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_zrender_lib_graphic_LinearGradient__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//uncomment below line to import all charts at once
// import IEcharts from 'vue-echarts-v3';
//use only necessary charts to reduce size of package


// import 'echarts/lib/chart/bar';

// import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';










// import 'echarts/lib/chart/candlestick';
// import 'echarts/lib/chart/effectScatter';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/heatmap';






// import 'echarts/lib/component/polar';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/parallel';
// import 'echarts/lib/component/singleAxis';
// import 'echarts/lib/component/brush';















var unsub;
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "echarts",
    components: {
        IEcharts: __WEBPACK_IMPORTED_MODULE_1_vue_echarts_v3_src_full_js__["default"]
    },
    data: function data() {
        return {
            serverdata: [],
            instances: [],
            loading: false,
            ajaxloading: true,
            //================line chart data start======
            line: {
                tooltip: {},
                grid: {
                    top: 10,
                    bottom: 35,
                    right: '7%'
                },
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#4d8a77'
                        }
                    },
                    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#4d8a77'
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
                    data: [8, 13, 10, 25, 20, 27, 38],
                    color: '#4d8a77'
                }, {
                    name: 'item 2',
                    type: 'line',
                    symbolSize: 5,
                    data: [11, 9, 6, 16, 19, 19, 33],
                    color: '#4d8a77'

                }]
            },
            //================line chart data end======
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
            //=======stacked line chart start==========
            stackedline: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#ccc'
                        }
                    }
                },
                legend: {
                    data: ['A', 'B', 'C', 'D', 'E']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {
                            title: "Save"
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: 'A',
                    type: 'line',
                    stack: 'A',
                    areaStyle: {
                        normal: {}
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                }, {
                    name: 'B',
                    type: 'line',
                    stack: 'B',
                    areaStyle: {
                        normal: {}
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                }, {
                    name: 'C',
                    type: 'line',
                    stack: 'C',
                    areaStyle: {
                        normal: {}
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                }, {
                    name: 'D',
                    type: 'line',
                    stack: 'D',
                    areaStyle: {
                        normal: {}
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                }, {
                    name: 'E',
                    type: 'line',
                    stack: 'E',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {
                        normal: {}
                    },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }]
            },
            //=======stacked line chart end==========
            //=======pointers line chart start============
            pointers: {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['A', 'B']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: [{
                    name: 'A',
                    type: 'line',

                    data: [11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [{
                            type: 'max',
                            name: 'max'
                        }, {
                            type: 'min',
                            name: 'min'
                        }]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: 'average'
                        }]
                    }
                }, {
                    name: 'B',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [{
                            name: 'week',
                            value: -2,
                            xAxis: 1,
                            yAxis: -1.5
                        }]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: 'average'
                        }, [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: 'max'
                                }
                            },
                            type: 'max',
                            name: 'max'
                        }]]
                    }
                }]
            },
            //=======pointers line chart end============
            // ======area chart start================
            area_chart: {
                title: {
                    text: '',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['A', 'B', 'C']
                },

                calculable: true,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wen', 'Thr', 'Fri', 'Sat', 'Sun']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: 'A',
                    type: 'line',
                    smooth: true,

                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color: '#e29e9f'
                            }
                        }
                    },
                    data: [10, 12, 21, 54, 260, 830, 710]
                }, {
                    name: 'B',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color: '#8db4b7'
                            }
                        }
                    },
                    data: [30, 182, 434, 791, 390, 30, 10]
                }, {
                    name: 'C',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color: '#82a779'
                            }
                        }
                    },
                    data: [1320, 1132, 601, 234, 120, 90, 20]
                }]
            },
            // =============area chart end==========
            // =================dischart Start==========
            dischart: {
                tooltip: {
                    trigger: 'axis'
                },

                dataZoom: {
                    show: true,
                    realtime: true,
                    y: 36,
                    height: 20,
                    start: 40,
                    end: 60
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: function () {
                        var list = [];
                        var n = 0;
                        while (n++ < 150) {
                            list.push(n);
                        }
                        return list;
                    }()
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: 'dz',
                    type: 'line',
                    data: function () {
                        var list = [];
                        for (var i = 1; i <= 150; i++) {
                            list.push(Math.round(Math.random() * 30));
                        }
                        return list;
                    }()
                }],
                calculable: false
            }
        };
    },

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
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        unsub();next();
    },

    methods: {
        onReady: function onReady(instance) {
            this.instances.push(instance);
        }
    }
});

/***/ }),

/***/ 1552:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-6 mb-3" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-primary-card",
              attrs: { header: "Basic Line chart", "header-tag": "h4" }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "350px" } },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.line, loading: _vm.loading },
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
        { staticClass: "col-lg-6 mb-3" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-success-card",
              attrs: { header: "AJAX Line chart", "header-tag": "h4" }
            },
            [
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
        { staticClass: "col-lg-12 mb-3" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-primary-card",
              attrs: { header: "Stacked Area chart", "header-tag": "h4" }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "350px" } },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.stackedline, loading: _vm.loading },
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
        { staticClass: "col-lg-12 mb-3" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-success-card",
              attrs: { header: "Line chart with Pointers", "header-tag": "h4" }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "350px" } },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.pointers, loading: _vm.loading },
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
        { staticClass: "col-lg-12 mb-3" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-info-card",
              attrs: {
                header: "Data Area Control Line Chart",
                "header-tag": "h4"
              }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "400px" } },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.dischart, loading: _vm.loading },
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
        { staticClass: "col-lg-12 mb-3" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-info-card",
              attrs: { header: " Area  Chart", "header-tag": "h4" }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "400px" } },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.area_chart, loading: _vm.loading },
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
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bc95e166", module.exports)
  }
}

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1551)
/* template */
var __vue_template__ = __webpack_require__(1552)
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
Component.options.__file = "resources\\assets\\components\\pages\\e_linecharts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bc95e166", Component.options)
  } else {
    hotAPI.reload("data-v-bc95e166", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});