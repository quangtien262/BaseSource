webpackJsonp([104],{

/***/ 1553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_echarts_v3_src_full_js__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_chart_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_chart_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_echarts_lib_chart_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_lib_component_dataZoom__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_lib_component_dataZoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_echarts_lib_component_dataZoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_echarts_lib_component_legend__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_echarts_lib_component_legend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_echarts_lib_component_legend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_echarts_lib_component_tooltip__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_echarts_lib_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_echarts_lib_component_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_echarts_lib_chart_effectScatter__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_echarts_lib_chart_effectScatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_echarts_lib_chart_effectScatter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_lib_component_title__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_lib_component_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_echarts_lib_component_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_echarts_lib_component_markPoint__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_echarts_lib_component_markPoint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_echarts_lib_component_markPoint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_echarts_lib_component_markLine__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_echarts_lib_component_markLine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_echarts_lib_component_markLine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_echarts_lib_component_timeline__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_echarts_lib_component_timeline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_echarts_lib_component_timeline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_echarts_lib_component_toolbox__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_echarts_lib_component_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_echarts_lib_component_toolbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_zrender_lib_vml_vml__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_zrender_lib_vml_vml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_zrender_lib_vml_vml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_zrender_lib_graphic_LinearGradient__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_zrender_lib_graphic_LinearGradient___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_zrender_lib_graphic_LinearGradient__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            //===========basic chart data start=========
            bar: {
                grid: {
                    top: 25,
                    bottom: 40,
                    right: '7%'
                },
                xAxis: {
                    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
                    axisLabel: {
                        inside: true,
                        textStyle: {
                            color: '#fff'
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
                            color: '#6ebabe'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149]
                }]
            },
            //===========basic chart data end=========
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
            //===========Negative chart data end=========
            negativebar: {
                color: ['#83b394', '#6f8dd5'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['A', 'B', 'C']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'value'
                }],
                yAxis: [{
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                }],
                series: [{
                    name: 'A',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [200, 170, 240, 244, 200, 220, 210]
                }, {
                    name: 'C',
                    type: 'bar',
                    stack: 'Total',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data: [320, 302, 341, 374, 390, 450, 420]
                }, {
                    name: 'B',
                    type: 'bar',
                    stack: 'Total',
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data: [-120, -132, -101, -134, -190, -230, -210]
                }]
            },
            //===========Negative chart data end=========
            //===========Stacked bar chart start===============
            stacked: {
                title: {

                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { //  Axis indicator, coordinate trigger effective
                        type: 'shadow' // The default is a straight line：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
                },

                calculable: true,
                xAxis: [{
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: 'A',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320]
                }, {
                    name: 'B',
                    type: 'bar',
                    stack: 'advertising',
                    data: [120, 132, 101, 134, 90, 230, 210]
                }, {
                    name: 'C',
                    type: 'bar',
                    stack: '',
                    data: [220, 182, 191, 234, 290, 330, 310]
                }, {
                    name: 'D',
                    type: 'bar',
                    stack: 'advertising',
                    data: [150, 232, 201, 154, 190, 330, 410]
                }, {
                    name: 'E',
                    type: 'bar',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine: {
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            }
                        },
                        data: [[{
                            type: 'min'
                        }, {
                            type: 'max'
                        }]]
                    }
                }, {
                    name: 'F',
                    type: 'bar',
                    barWidth: 5,
                    stack: 'search engine',
                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                }, {
                    name: 'G',
                    type: 'bar',
                    stack: 'search engine',
                    data: [120, 132, 101, 134, 290, 230, 220]
                }, {
                    name: 'H',
                    type: 'bar',
                    stack: 'search engine',
                    data: [60, 72, 71, 74, 190, 130, 110]
                }, {
                    name: 'I',
                    type: 'bar',
                    stack: 'search engine',
                    data: [62, 82, 91, 84, 109, 110, 120]
                }]
            },
            //===========Stacked bar chart end===============


            //========Colored bars chart Start===============

            colored: {
                title: {
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },

                calculable: true,
                grid: {
                    borderWidth: 0,
                    y: 80,
                    y2: 60
                },
                xAxis: [{
                    type: 'category',
                    show: false,
                    data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
                }],
                yAxis: [{
                    type: 'value',
                    show: false
                }],
                series: [{
                    name: 'ECharts Number of examples',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function color(params) {
                                // build a color map as your need.
                                var colorList = ['#c16989', '#a3ab60', '#d2bf6f', '#e6995b', '#4ca1ab', '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD', '#D7504B', '#dcba42', '#F4E001', '#F0809A', '#26C0C0'];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{b}\n{c}'
                            }
                        }
                    },
                    data: [12, 21, 10, 4, 12, 5, 6, 5, 25, 23, 7],
                    markPoint: {
                        tooltip: {
                            trigger: 'item',
                            backgroundColor: 'rgba(0,0,0,0)',
                            formatter: function formatter(params) {
                                return {};
                            }
                        },
                        data: [{
                            xAxis: 0,
                            y: 350,
                            name: 'Line',
                            symbolSize: 0

                        }, {
                            xAxis: 1,
                            y: 350,
                            name: 'Bar',
                            symbolSize: 0
                        }, {
                            xAxis: 2,
                            y: 350,
                            name: 'Scatter',
                            symbolSize: 0

                        }, {
                            xAxis: 3,
                            y: 350,
                            name: 'K',
                            symbolSize: 0
                        }, {
                            xAxis: 4,
                            y: 350,
                            name: 'Pie',
                            symbolSize: 0
                        }]
                    }
                }]
            },
            // ===============colored chart end============
            // ================mixed chart start===========
            mixed: {
                color: ['#cce5a1'],
                title: {
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['A', 'B']
                },

                dataZoom: {
                    show: false,
                    start: 0,
                    end: 100
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: true,
                    data: function () {
                        var now = new Date();
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                            now = new Date(now - 2000);
                        }
                        return res;
                    }()
                }, {
                    type: 'category',
                    boundaryGap: true,
                    data: function () {
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.push(len + 1);
                        }
                        return res;
                    }()
                }],
                yAxis: [{
                    type: 'value',
                    scale: true,
                    name: 'A',
                    boundaryGap: [0.2, 0.2]
                }, {
                    type: 'value',
                    scale: true,
                    name: 'B',
                    boundaryGap: [0.2, 0.2]
                }],
                series: [{
                    name: 'B',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: function () {
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.push(Math.round(Math.random() * 1000));
                        }
                        return res;
                    }()
                }, {
                    name: 'A',
                    type: 'line',
                    data: function () {
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                        }
                        return res;
                    }()
                }]
                // ================mixed chart end===========


            } };
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
        axios.get("http://www.filltext.com/?rows=1&chartdata={numberArray|12,100}").then(function (response) {
            _this.ajaxbar.series[0].data = response.data[0].chartdata;
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

/***/ 1554:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12 mb-3" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-success-card",
              attrs: { header: "Basic Bar chart", "header-tag": "h4" }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "350px" } },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.bar, loading: _vm.loading },
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
              attrs: { header: "AJAX Bar chart", "header-tag": "h4" }
            },
            [
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
        { staticClass: "col-lg-12 mb-3" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-success-card",
              attrs: { header: "Stacked Bar Chart", "header-tag": "h4" }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "350px" } },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.stacked, loading: _vm.loading },
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
              attrs: { header: "Colored Bars", "header-tag": "h4" }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "350px" } },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.colored, loading: _vm.loading },
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
              staticClass: "bg-warning-card",
              attrs: { header: "Negative Bar chart", "header-tag": "h4" }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "400px" } },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.negativebar, loading: _vm.loading },
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
              attrs: { header: "Mixed Chart", "header-tag": "h4" }
            },
            [
              _c(
                "div",
                { staticStyle: { height: "400px" } },
                [
                  _c("IEcharts", {
                    ref: "dynamicchart",
                    attrs: { option: _vm.mixed, loading: _vm.loading },
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
    require("vue-hot-reload-api")      .rerender("data-v-7e831b54", module.exports)
  }
}

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1553)
/* template */
var __vue_template__ = __webpack_require__(1554)
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
Component.options.__file = "resources\\assets\\components\\pages\\e_barcharts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e831b54", Component.options)
  } else {
    hotAPI.reload("data-v-7e831b54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});