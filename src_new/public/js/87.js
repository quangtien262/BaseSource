webpackJsonp([87],{

/***/ 1594:
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

__webpack_require__(1595);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "ContactUs",
    mounted: function mounted() {
        this.fill_word();
    },
    data: function data() {
        return {
            lorem: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Duis vestibulum tincidunt turpis Etiam eget eleifend elit In et vestibulum ipsum Donec eu convallis urna Pellentesque sit amet accumsan leo Aliquam elementum justo turpis mollis maximus libero faucibus non Vivamus et eros libero',
            words: [],
            items: ['Sakura', 'Sunflower', 'Rose'],
            input: 'Hello',
            effect: 'bounceDown'
        };
    },

    methods: {
        fill_word: function fill_word() {
            this.words = this.lorem.split(' ');
        },

        addItem: function addItem() {
            if (!this.input) {
                return;
            }

            this.items.splice(0, 0, this.input);
            this.input = this.words.shift();

            if (!this.words.length) {
                this.words = this.lorem.split(' ');
            }
        },
        reset: function reset() {
            this.items = [];
        }
    },

    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1595:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1596);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(784)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./vue2-animate.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./vue2-animate.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";/*!\n * vue2-animate v1.0.4\n * (c) 2016 Simon Asika\n * Released under the MIT License.\n * Documentation: https://github.com/asika32764/vue2-animate\n */.bounce-enter-active,.bounce-leave-active,.bounceDown-enter-active,.bounceDown-leave-active,.bounceIn,.bounceInDown,.bounceInLeft,.bounceInRight,.bounceInUp,.bounceLeft-enter-active,.bounceLeft-leave-active,.bounceOut,.bounceOutDown,.bounceOutLeft,.bounceOutRight,.bounceOutUp,.bounceRight-enter-active,.bounceRight-leave-active,.bounceUp-enter-active,.bounceUp-leave-active,.fade-enter-active,.fade-leave-active,.fadeDown-enter-active,.fadeDown-leave-active,.fadeDownBig-enter-active,.fadeDownBig-leave-active,.fadeIn,.fadeInDown,.fadeInDownBig,.fadeInLeft,.fadeInLeftBig,.fadeInRight,.fadeInRightBig,.fadeInUp,.fadeInUpBig,.fadeLeft-enter-active,.fadeLeft-leave-active,.fadeLeftBig-enter-active,.fadeLeftBig-leave-active,.fadeOut,.fadeOutDown,.fadeOutDownBig,.fadeOutLeft,.fadeOutLeftBig,.fadeOutRight,.fadeOutRightBig,.fadeOutUp,.fadeOutUpBig,.fadeRight-enter-active,.fadeRight-leave-active,.fadeRightBig-enter-active,.fadeRightBig-leave-active,.fadeUp-enter-active,.fadeUp-leave-active,.fadeUpBig-enter-active,.fadeUpBig-leave-active,.rotateDownLeft-enter-active,.rotateDownLeft-leave-active,.rotateDownRight-enter-active,.rotateDownRight-leave-active,.rotateInDownLeft,.rotateInDownRight,.rotateInUpLeft,.rotateInUpRight,.rotateOutDownLeft,.rotateOutDownRight,.rotateOutUpLeft,.rotateOutUpRight,.rotateUpLeft-enter-active,.rotateUpLeft-leave-active,.rotateUpRight-enter-active,.rotateUpRight-leave-active,.slide-enter-active,.slide-leave-active,.slideDown-enter-active,.slideDown-leave-active,.slideIn,.slideInDown,.slideInLeft,.slideInRight,.slideInUp,.slideLeft-enter-active,.slideLeft-leave-active,.slideOut,.slideOutDown,.slideOutLeft,.slideOutRight,.slideOutUp,.slideRight-enter-active,.slideRight-leave-active,.slideUp-enter-active,.slideUp-leave-active,.zoom-enter-active,.zoom-leave-active,.zoomDown-enter-active,.zoomDown-leave-active,.zoomIn,.zoomInDown,.zoomInLeft,.zoomInRight,.zoomInUp,.zoomLeft-enter-active,.zoomLeft-leave-active,.zoomOut,.zoomOutDown,.zoomOutLeft,.zoomOutRight,.zoomOutUp,.zoomRight-enter-active,.zoomRight-leave-active,.zoomUp-enter-active,.zoomUp-leave-active{animation-duration:1s;animation-fill-mode:both}@keyframes bounceIn{20%,40%,60%,80%,from,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}@keyframes bounceInDown{60%,75%,90%,from,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes bounceInLeft{60%,75%,90%,from,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes bounceInRight{60%,75%,90%,from,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}from{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes bounceInUp{60%,75%,90%,from,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}from{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translate3d(0,0,0)}}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}.bounce-enter-active,.bounceIn{animation-name:bounceIn}.bounce-leave-active,.bounceOut{animation-name:bounceOut}.bounceInUp,.bounceUp-enter-active{animation-name:bounceInUp}.bounceOutUp,.bounceUp-leave-active{animation-name:bounceOutUp}.bounceInRight,.bounceRight-enter-active{animation-name:bounceInRight}.bounceOutRight,.bounceRight-leave-active{animation-name:bounceOutRight}.bounceInLeft,.bounceLeft-enter-active{animation-name:bounceInLeft}.bounceLeft-leave-active,.bounceOutLeft{animation-name:bounceOutLeft}.bounceDown-enter-active,.bounceInDown{animation-name:bounceInDown}.bounceDown-leave-active,.bounceOutDown{animation-name:bounceOutDown}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}@keyframes fadeOutDown{from{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}@keyframes fadeInDownBig{from{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:none}}@keyframes fadeOutDownBig{from{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes fadeInLeft{from{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:none}}@keyframes fadeOutLeft{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}@keyframes fadeInLeftBig{from{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:none}}@keyframes fadeOutLeftBig{from{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes fadeInRight{from{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:none}}@keyframes fadeOutRight{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}@keyframes fadeInRightBig{from{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:none}}@keyframes fadeOutRightBig{from{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}@keyframes fadeInUpBig{from{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:none}}@keyframes fadeOutUp{from{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.fade-enter-active,.fadeIn{animation-name:fadeIn}.fade-leave-active,.fadeOut{animation-name:fadeOut}.fadeInUpBig,.fadeUpBig-enter-active{animation-name:fadeInUpBig}.fadeOutUpBig,.fadeUpBig-leave-active{animation-name:fadeOutUpBig}.fadeInUp,.fadeUp-enter-active{animation-name:fadeInUp}.fadeOutUp,.fadeUp-leave-active{animation-name:fadeOutUp}.fadeInRightBig,.fadeRightBig-enter-active{animation-name:fadeInRightBig}.fadeOutRightBig,.fadeRightBig-leave-active{animation-name:fadeOutRightBig}.fadeInRight,.fadeRight-enter-active{animation-name:fadeInRight}.fadeOutRight,.fadeRight-leave-active{animation-name:fadeOutRight}.fadeInLeftBig,.fadeLeftBig-enter-active{animation-name:fadeInLeftBig}.fadeLeftBig-leave-active,.fadeOutLeftBig{animation-name:fadeOutLeftBig}.fadeInLeft,.fadeLeft-enter-active{animation-name:fadeInLeft}.fadeLeft-leave-active,.fadeOutLeft{animation-name:fadeOutLeft}.fadeDownBig-enter-active,.fadeInDownBig{animation-name:fadeInDownBig}.fadeDownBig-leave-active,.fadeOutDownBig{animation-name:fadeOutDownBig}.fadeDown-enter-active,.fadeInDown{animation-name:fadeInDown}.fadeDown-leave-active,.fadeOutDown{animation-name:fadeOutDown}@keyframes rotateIn{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}to{transform-origin:center;transform:none;opacity:1}}@keyframes rotateOut{from{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}@keyframes rotateInDownLeft{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}@keyframes rotateOutDownLeft{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}@keyframes rotateInDownRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}@keyframes rotateOutDownRight{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}@keyframes rotateInUpLeft{from{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}@keyframes rotateOutUpLeft{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}@keyframes rotateInUpRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}@keyframes rotateOutUpRight{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}.rotate-enter-active,.rotate-leave-active,.rotateIn,.rotateOut{animation-duration:1s;animation-fill-mode:both}.rotate-enter-active,.rotateIn{animation-name:rotateIn}.rotate-leave-active,.rotateOut{animation-name:rotateOut}.rotateInUpRight,.rotateUpRight-enter-active{animation-name:rotateInUpRight}.rotateOutUpRight,.rotateUpRight-leave-active{animation-name:rotateOutUpRight}.rotateInUpLeft,.rotateUpLeft-enter-active{animation-name:rotateInUpLeft}.rotateOutUpLeft,.rotateUpLeft-leave-active{animation-name:rotateOutUpLeft}.rotateDownRight-enter-active,.rotateInDownRight{animation-name:rotateInDownRight}.rotateDownRight-leave-active,.rotateOutDownRight{animation-name:rotateOutDownRight}.rotateDownLeft-enter-active,.rotateInDownLeft{animation-name:rotateInDownLeft}.rotateDownLeft-leave-active,.rotateOutDownLeft{animation-name:rotateOutDownLeft}@keyframes slideInDown{from{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}@keyframes slideOutDown{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}@keyframes slideInLeft{from{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}@keyframes slideOutLeft{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}@keyframes slideInRight{from{transform:translate3d(100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}@keyframes slideOutRight{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}@keyframes slideInUp{from{transform:translate3d(0,100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}@keyframes slideOutUp{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}.slide-enter-active,.slideIn{animation-name:slideIn}.slide-leave-active,.slideOut{animation-name:slideOut}.slideInUp,.slideUp-enter-active{animation-name:slideInUp}.slideOutUp,.slideUp-leave-active{animation-name:slideOutUp}.slideInRight,.slideRight-enter-active{animation-name:slideInRight}.slideOutRight,.slideRight-leave-active{animation-name:slideOutRight}.slideInLeft,.slideLeft-enter-active{animation-name:slideInLeft}.slideLeft-leave-active,.slideOutLeft{animation-name:slideOutLeft}.slideDown-enter-active,.slideInDown{animation-name:slideInDown}.slideDown-leave-active,.slideOutDown{animation-name:slideOutDown}@keyframes zoomIn{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomOut{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomInDown{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}@keyframes zoomInRight{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}@keyframes zoomInUp{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoom-enter-active,.zoomIn{animation-name:zoomIn}.zoom-leave-active,.zoomOut{animation-name:zoomOut}.zoomInUp,.zoomUp-enter-active{animation-name:zoomInUp}.zoomOutUp,.zoomUp-leave-active{animation-name:zoomOutUp}.zoomInRight,.zoomRight-enter-active{animation-name:zoomInRight}.zoomOutRight,.zoomRight-leave-active{animation-name:zoomOutRight}.zoomInLeft,.zoomLeft-enter-active{animation-name:zoomInLeft}.zoomLeft-leave-active,.zoomOutLeft{animation-name:zoomOutLeft}.zoomDown-enter-active,.zoomInDown{animation-name:zoomInDown}.zoomDown-leave-active,.zoomOutDown{animation-name:zoomOutDown}", ""]);

// exports


/***/ }),

/***/ 1597:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-primary-card",
              attrs: { header: "Select an effect", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "row", attrs: { id: "demo" } }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.effect,
                            expression: "effect"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "effect" },
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
                            _vm.effect = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("optgroup", { attrs: { label: "Bounce" } }, [
                          _c("option", { attrs: { value: "bounce" } }, [
                            _vm._v("bounce")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bounceDown" } }, [
                            _vm._v("bounceDown")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bounceLeft" } }, [
                            _vm._v("bounceLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bounceRight" } }, [
                            _vm._v("bounceRight")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bounceUp" } }, [
                            _vm._v("bounceUp")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("optgroup", { attrs: { label: "Fade" } }, [
                          _c("option", { attrs: { value: "fade" } }, [
                            _vm._v("fade")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeDown" } }, [
                            _vm._v("fadeDown")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeDownBig" } }, [
                            _vm._v("fadeDownBig")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeLeft" } }, [
                            _vm._v("fadeLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeLeftBig" } }, [
                            _vm._v("fadeLeftBig")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeRight" } }, [
                            _vm._v("fadeRight")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeRightBig" } }, [
                            _vm._v("fadeRightBig")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeUp" } }, [
                            _vm._v("fadeUp")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeUpBig" } }, [
                            _vm._v("fadeUpBig")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("optgroup", { attrs: { label: "Rotate" } }, [
                          _c("option", { attrs: { value: "rotate" } }, [
                            _vm._v("rotate")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "rotateDownLeft" } }, [
                            _vm._v("rotateDownLeft")
                          ]),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { value: "rotateDownRight" } },
                            [_vm._v("rotateDownRight")]
                          ),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "rotateUpLeft" } }, [
                            _vm._v("rotateUpLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "rotateUpRight" } }, [
                            _vm._v("rotateUpRight")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("optgroup", { attrs: { label: "Slide" } }, [
                          _c("option", { attrs: { value: "slideDown" } }, [
                            _vm._v("slideDown")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "slideLeft" } }, [
                            _vm._v("slideLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "slideRight" } }, [
                            _vm._v("slideRight")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "slideUp" } }, [
                            _vm._v("slideUp")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("optgroup", { attrs: { label: "Zoom" } }, [
                          _c("option", { attrs: { value: "zoom" } }, [
                            _vm._v("zoom")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "zoomDown" } }, [
                            _vm._v("zoomDown")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "zoomLeft" } }, [
                            _vm._v("zoomLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "zoomRight" } }, [
                            _vm._v("zoomRight")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "zoomUp" } }, [
                            _vm._v("zoomUp")
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "code-sample" }, [
                    _c("pre", [
                      _c("code", [
                        _vm._v(
                          '<transition-group name="' +
                            _vm._s(_vm.effect) +
                            '" tag="ul" class="list-group">\n    <li v-for="(item, i) in items" class="list-group-item" v-bind:key="i">'
                        ),
                        _c("span", { pre: true }, [_vm._v("{{ item }}")]),
                        _vm._v("</li>\n</transition-group>")
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-12 mt-5",
                    attrs: { id: "demo-component" }
                  },
                  [
                    _c("h4", [_vm._v("Add some input")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-toolbar" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.input,
                              expression: "input"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.input },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.input = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "btn-group" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              attrs: { type: "button" },
                              on: { click: _vm.addItem }
                            },
                            [_vm._v("Add")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger text-white",
                              attrs: { type: "button" },
                              on: { click: _vm.reset }
                            },
                            [_vm._v("Reset")]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "list-box mt-5" },
                      [
                        _c(
                          "transition-group",
                          {
                            staticClass: "list-group",
                            attrs: { name: _vm.effect, tag: "ul" }
                          },
                          _vm._l(_vm.items, function(item, i) {
                            return _c(
                              "li",
                              { key: item, staticClass: "list-group-item" },
                              [_vm._v(_vm._s(item))]
                            )
                          })
                        )
                      ],
                      1
                    )
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
    require("vue-hot-reload-api")      .rerender("data-v-597a4b78", module.exports)
  }
}

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1594)
/* template */
var __vue_template__ = __webpack_require__(1597)
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
Component.options.__file = "resources\\assets\\components\\pages\\transitions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-597a4b78", Component.options)
  } else {
    hotAPI.reload("data-v-597a4b78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(785);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 785:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

});