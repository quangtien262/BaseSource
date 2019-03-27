webpackJsonp([64],{

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("462a74f9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b218cd7\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b218cd7\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("62323cf2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bd317c3\",\"scoped\":true,\"hasInlineConfig\":true}!./product_details.scss", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bd317c3\",\"scoped\":true,\"hasInlineConfig\":true}!./product_details.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.pr_font1[data-v-6bd317c3] {\r\n  font-size: 14px;\n}\n.pr_font2[data-v-6bd317c3] {\r\n  font-size: 14px;\n}\n.space_li li[data-v-6bd317c3] {\r\n  margin-bottom: 15px;\n}\n.space_li li[data-v-6bd317c3] {\r\n  list-style: none;\r\n  padding-left: 10px;\n}\n.space_li>li>i[data-v-6bd317c3] {\r\n  margin-top: 0px !important;\r\n  font-size: 18px;\r\n  color: #337ab7;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_product_details_preview__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_product_details_preview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_product_details_preview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_product_details_preview_details__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_product_details_preview_details___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_product_details_preview_details__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_product_details_preview_description__ = __webpack_require__(1178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_product_details_preview_description___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_product_details_preview_description__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_product_details_preview_categories__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_product_details_preview_categories___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_product_details_preview_categories__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // ===Component name
    name: "product_details",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {
        preview: __WEBPACK_IMPORTED_MODULE_0__components_product_details_preview___default.a,
        previewDetails: __WEBPACK_IMPORTED_MODULE_1__components_product_details_preview_details___default.a,
        previewDescription: __WEBPACK_IMPORTED_MODULE_2__components_product_details_preview_description___default.a,
        previewCategories: __WEBPACK_IMPORTED_MODULE_3__components_product_details_preview_categories___default.a
    },
    // ====component Data properties
    data: function data() {
        return {
            preview: {
                thumb: __webpack_require__(944),
                large: __webpack_require__(944),
                thumbs: [__webpack_require__(948), __webpack_require__(948), __webpack_require__(948)]
            },
            details: {},
            features: {}
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

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1095)
  __webpack_require__(1095)
  __webpack_require__(1165)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1167)
/* template */
var __vue_template__ = __webpack_require__(1172)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b218cd7"
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
Component.options.__file = "resources\\assets\\components\\pages\\e-commerce\\components\\product_details\\preview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b218cd7", Component.options)
  } else {
    hotAPI.reload("data-v-0b218cd7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{-webkit-animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation:a 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__spinner:after{-webkit-animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation:a 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@-webkit-keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}\n@keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}", ""]);

// exports


/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1166);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("19079f7a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b218cd7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./preview.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b218cd7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./preview.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n#preview[data-v-0b218cd7] {\r\n    position: absolute;\r\n    left: 85%;\r\n    top: 5%;\n}\n.slide-preview[data-v-0b218cd7] {\r\n    max-height: 100px;\n}\n.small_img[data-v-0b218cd7]{\r\n    border:none !important;\r\n    background-color: #fff !important;\n}\n.small_img[data-v-0b218cd7]:hover{\r\n    background-color: #fff !important;\n}\n.right_modal[data-v-0b218cd7] {\r\n    margin-top: 20px;\n}\n@media(max-width: 320px) {\n#preview[data-v-0b218cd7] {\r\n        position: absolute;\r\n        left: 5%;\r\n        top: 105%;\n}\n}\n@media (max-width: 768px){\n#preview[data-v-0b218cd7]{\r\n        left:77%;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_slider_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_js_Magnifier_js__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_js_Event_js__ = __webpack_require__(1169);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__webpack_require__(1170);

/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "product_preview",
    // ===Props passed to component
    props: {
        thumb: {
            required: true
        },
        thumbs: {
            required: true,
            type: Array
        },
        large: {
            required: true
        }
    },
    // ===Components used by this component
    components: {
        vueSlider: __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default.a
    },
    // ====component Data properties
    data: function data() {
        return {
            value2: [20, 50],
            value: null,
            multi_value: null,
            object_value: null,
            value_search: null
        };
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {
        var evt = new __WEBPACK_IMPORTED_MODULE_3_assets_js_Event_js__["a" /* default */]();
        var m = new __WEBPACK_IMPORTED_MODULE_2_assets_js_Magnifier_js__["a" /* default */](evt);
        m.attach({
            thumb: '#thumb',
            large: this.large,
            largeWrapper: 'preview'
        });
    },

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {
        openPictureModal: function openPictureModal(ref) {
            this.$refs.pictureModal[ref].show();
        },
        addTag: function addTag(newTag) {
            var tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
            };
            this.object_options.push(tag);
            this.tag_value.push(tag);
        }
    }
});

/***/ }),

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Magnifier.js is a Javascript library enabling magnifying glass effect on an images.
 *
 * Features
 *
 * Zoom in / out functionality using mouse wheel
 * Setting options via Javascript or data attributes
 * Magnified image can be displayed in the lens itself or outside of it in a wrapper
 * Attachment to multiple images with single call
 * Attachment of user defined functions for thumbnail entering, moving and leaving and image zooming events
 * Display loading text while the large image is being loaded, and switch to lens once its loaded
 *
 * Magnifier.js uses Event.js as a cross-browser event handling wrapper, which is available at
 * Github and JSClasses.org:
 *
 * Github - https://github.com/mark-rolich/Event.js
 * JS Classes - http://www.jsclasses.org/package/212-JavaScript-Handle-events-in-a-browser-independent-manner.html
 *
 * Works in Chrome, Firefox, Safari, IE 7, 8, 9 & 10.
 *
 * @author Mark Rolich <mark.rolich@gmail.com>
 */
var Magnifier = function Magnifier(evt, options) {
    "use strict";

    var gOptions = options || {},
        curThumb = null,
        curData = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        lensW: 0,
        lensH: 0,
        lensBgX: 0,
        lensBgY: 0,
        largeW: 0,
        largeH: 0,
        largeL: 0,
        largeT: 0,
        zoom: 2,
        zoomMin: 1.1,
        zoomMax: 5,
        mode: 'outside',
        largeWrapperId: gOptions.largeWrapper !== undefined ? gOptions.largeWrapper.id || null : null,
        status: 0,
        zoomAttached: false,
        zoomable: gOptions.zoomable !== undefined ? gOptions.zoomable : false,
        onthumbenter: gOptions.onthumbenter !== undefined ? gOptions.onthumbenter : null,
        onthumbmove: gOptions.onthumbmove !== undefined ? gOptions.onthumbmove : null,
        onthumbleave: gOptions.onthumbleave !== undefined ? gOptions.onthumbleave : null,
        onzoom: gOptions.onzoom !== undefined ? gOptions.onzoom : null
    },
        pos = {
        t: 0,
        l: 0,
        x: 0,
        y: 0
    },
        gId = 0,
        status = 0,
        curIdx = '',
        curLens = null,
        curLarge = null,
        gZoom = gOptions.zoom !== undefined ? gOptions.zoom : curData.zoom,
        gZoomMin = gOptions.zoomMin !== undefined ? gOptions.zoomMin : curData.zoomMin,
        gZoomMax = gOptions.zoomMax !== undefined ? gOptions.zoomMax : curData.zoomMax,
        gMode = gOptions.mode || curData.mode,
        data = {},
        inBounds = false,
        isOverThumb = 0,
        getElementsByClass = function getElementsByClass(className) {
        var list = [],
            elements = null,
            len = 0,
            pattern = '',
            i = 0,
            j = 0;

        if (document.getElementsByClassName) {
            list = document.getElementsByClassName(className);
        } else {
            elements = document.getElementsByTagName('*');
            len = elements.length;
            pattern = new RegExp("(^|\\s)" + className + "(\\s|$)");

            for (i, j; i < len; i += 1) {
                if (pattern.test(elements[i].className)) {
                    list[j] = elements[i];
                    j += 1;
                }
            }
        }

        return list;
    },
        $ = function $(selector) {
        var idx = '',
            type = selector.charAt(0),
            result = null;

        if (type === '#' || type === '.') {
            idx = selector.substr(1, selector.length);
        }

        if (idx !== '') {
            switch (type) {
                case '#':
                    result = document.getElementById(idx);
                    break;
                case '.':
                    result = getElementsByClass(idx);
                    break;
            }
        }

        return result;
    },
        createLens = function createLens(thumb, idx) {
        var lens = document.createElement('div');

        lens.id = idx + '-lens';
        lens.className = 'magnifier-loader';

        thumb.parentNode.appendChild(lens);
    },
        updateLensOnZoom = function updateLensOnZoom() {
        curLens.style.left = pos.l + 'px';
        curLens.style.top = pos.t + 'px';
        curLens.style.width = curData.lensW + 'px';
        curLens.style.height = curData.lensH + 'px';
        curLens.style.backgroundPosition = '-' + curData.lensBgX + 'px -' + curData.lensBgY + 'px';

        curLarge.style.left = '-' + curData.largeL + 'px';
        curLarge.style.top = '-' + curData.largeT + 'px';
        curLarge.style.width = curData.largeW + 'px';
        curLarge.style.height = curData.largeH + 'px';
    },
        updateLensOnLoad = function updateLensOnLoad(idx, thumb, large, largeWrapper) {
        var lens = $('#' + idx + '-lens'),
            textWrapper = null;

        if (data[idx].status === 1) {
            textWrapper = document.createElement('div');
            textWrapper.className = 'magnifier-loader-text';
            lens.className = 'magnifier-loader hidden';

            textWrapper.appendChild(document.createTextNode('Loading...'));
            lens.appendChild(textWrapper);
        } else if (data[idx].status === 2) {
            lens.className = 'magnifier-lens hidden';
            lens.removeChild(lens.childNodes[0]);
            lens.style.background = 'url(' + thumb.src + ') no-repeat 0 0 scroll';

            large.id = idx + '-large';
            large.style.width = data[idx].largeW + 'px';
            large.style.height = data[idx].largeH + 'px';
            large.className = 'magnifier-large hidden';

            if (data[idx].mode === 'inside') {
                lens.appendChild(large);
            } else {
                largeWrapper.appendChild(large);
            }
        }

        lens.style.width = data[idx].lensW + 'px';
        lens.style.height = data[idx].lensH + 'px';
    },
        getMousePos = function getMousePos() {
        var xPos = pos.x - curData.x,
            yPos = pos.y - curData.y,
            t = 0,
            l = 0;

        inBounds = xPos < 0 || yPos < 0 || xPos > curData.w || yPos > curData.h ? false : true;

        l = xPos - curData.lensW / 2;
        t = yPos - curData.lensH / 2;

        if (curData.mode !== 'inside') {
            if (xPos < curData.lensW / 2) {
                l = 0;
            }

            if (yPos < curData.lensH / 2) {
                t = 0;
            }

            if (xPos - curData.w + curData.lensW / 2 > 0) {
                l = curData.w - (curData.lensW + 2);
            }

            if (yPos - curData.h + curData.lensH / 2 > 0) {
                t = curData.h - (curData.lensH + 2);
            }
        }

        pos.l = Math.round(l);
        pos.t = Math.round(t);

        curData.lensBgX = pos.l + 1;
        curData.lensBgY = pos.t + 1;

        if (curData.mode === 'inside') {
            curData.largeL = Math.round(xPos * (curData.zoom - curData.lensW / curData.w));
            curData.largeT = Math.round(yPos * (curData.zoom - curData.lensH / curData.h));
        } else {
            curData.largeL = Math.round(curData.lensBgX * curData.zoom * (curData.largeWrapperW / curData.w));
            curData.largeT = Math.round(curData.lensBgY * curData.zoom * (curData.largeWrapperH / curData.h));
        }
    },
        zoomInOut = function zoomInOut(e) {
        var delta = e.wheelDelta > 0 || e.detail < 0 ? 0.1 : -0.1,
            handler = curData.onzoom,
            multiplier = 1,
            w = 0,
            h = 0;

        if (e.preventDefault) {
            e.preventDefault();
        }

        e.returnValue = false;

        curData.zoom = Math.round((curData.zoom + delta) * 10) / 10;

        if (curData.zoom >= curData.zoomMax) {
            curData.zoom = curData.zoomMax;
        } else if (curData.zoom >= curData.zoomMin) {
            curData.lensW = Math.round(curData.w / curData.zoom);
            curData.lensH = Math.round(curData.h / curData.zoom);

            if (curData.mode === 'inside') {
                w = curData.w;
                h = curData.h;
            } else {
                w = curData.largeWrapperW;
                h = curData.largeWrapperH;
                multiplier = curData.largeWrapperW / curData.w;
            }

            curData.largeW = Math.round(curData.zoom * w);
            curData.largeH = Math.round(curData.zoom * h);

            getMousePos();
            updateLensOnZoom();

            if (handler !== null) {
                handler({
                    thumb: curThumb,
                    lens: curLens,
                    large: curLarge,
                    x: pos.x,
                    y: pos.y,
                    zoom: Math.round(curData.zoom * multiplier * 10) / 10,
                    w: curData.lensW,
                    h: curData.lensH
                });
            }
        } else {
            curData.zoom = curData.zoomMin;
        }
    },
        onThumbEnter = function onThumbEnter() {
        curData = data[curIdx];
        curLens = $('#' + curIdx + '-lens');

        if (curData.status === 2) {
            curLens.className = 'magnifier-lens';

            if (curData.zoomAttached === false) {
                if (curData.zoomable !== undefined && curData.zoomable === true) {
                    evt.attach('mousewheel', curLens, zoomInOut);

                    if (window.addEventListener) {
                        curLens.addEventListener('DOMMouseScroll', function (e) {
                            zoomInOut(e);
                        });
                    }
                }

                curData.zoomAttached = true;
            }

            curLarge = $('#' + curIdx + '-large');
            curLarge.className = 'magnifier-large';
        } else if (curData.status === 1) {
            curLens.className = 'magnifier-loader';
        }
    },
        onThumbLeave = function onThumbLeave() {
        if (curData.status > 0) {
            var handler = curData.onthumbleave;

            if (handler !== null) {
                handler({
                    thumb: curThumb,
                    lens: curLens,
                    large: curLarge,
                    x: pos.x,
                    y: pos.y
                });
            }

            if (curLens.className.indexOf('hidden') === -1) {
                curLens.className += ' hidden';
                curThumb.className = curData.thumbCssClass;

                if (curLarge !== null) {
                    curLarge.className += ' hidden';
                }
            }
        }
    },
        move = function move() {
        if (status !== curData.status) {
            onThumbEnter();
        }

        if (curData.status > 0) {
            curThumb.className = curData.thumbCssClass + ' opaque';

            if (curData.status === 1) {
                curLens.className = 'magnifier-loader';
            } else if (curData.status === 2) {
                curLens.className = 'magnifier-lens';
                curLarge.className = 'magnifier-large';
                curLarge.style.left = '-' + curData.largeL + 'px';
                curLarge.style.top = '-' + curData.largeT + 'px';
            }

            curLens.style.left = pos.l + 'px';
            curLens.style.top = pos.t + 'px';
            curLens.style.backgroundPosition = '-' + curData.lensBgX + 'px -' + curData.lensBgY + 'px';

            var handler = curData.onthumbmove;

            if (handler !== null) {
                handler({
                    thumb: curThumb,
                    lens: curLens,
                    large: curLarge,
                    x: pos.x,
                    y: pos.y
                });
            }
        }

        status = curData.status;
    },
        setThumbData = function setThumbData(thumb, thumbData) {
        var thumbBounds = thumb.getBoundingClientRect(),
            w = 0,
            h = 0;

        thumbData.x = thumbBounds.left;
        thumbData.y = thumbBounds.top;
        thumbData.w = Math.round(thumbBounds.right - thumbData.x);
        thumbData.h = Math.round(thumbBounds.bottom - thumbData.y);

        thumbData.lensW = Math.round(thumbData.w / thumbData.zoom);
        thumbData.lensH = Math.round(thumbData.h / thumbData.zoom);

        if (thumbData.mode === 'inside') {
            w = thumbData.w;
            h = thumbData.h;
        } else {
            w = thumbData.largeWrapperW;
            h = thumbData.largeWrapperH;
        }

        thumbData.largeW = Math.round(thumbData.zoom * w);
        thumbData.largeH = Math.round(thumbData.zoom * h);
    };

    this.attach = function (options) {
        if (options.thumb === undefined) {
            throw {
                name: 'Magnifier error',
                message: 'Please set thumbnail',
                toString: function toString() {
                    return this.name + ": " + this.message;
                }
            };
        }

        var thumb = $(options.thumb),
            i = 0;

        if (thumb.length !== undefined) {
            for (i; i < thumb.length; i += 1) {
                options.thumb = thumb[i];
                this.set(options);
            }
        } else {
            options.thumb = thumb;
            this.set(options);
        }
    };

    this.setThumb = function (thumb) {
        curThumb = thumb;
    };

    this.set = function (options) {
        if (data[options.thumb.id] !== undefined) {
            curThumb = options.thumb;
            return false;
        }

        var thumbObj = new Image(),
            largeObj = new Image(),
            thumb = options.thumb,
            idx = thumb.id,
            zoomable = null,
            largeUrl = null,
            largeWrapper = $('#' + options.largeWrapper) || $('#' + thumb.getAttribute('data-large-img-wrapper')) || $('#' + curData.largeWrapperId),
            zoom = options.zoom || thumb.getAttribute('data-zoom') || gZoom,
            zoomMin = options.zoomMin || thumb.getAttribute('data-zoom-min') || gZoomMin,
            zoomMax = options.zoomMax || thumb.getAttribute('data-zoom-max') || gZoomMax,
            mode = options.mode || thumb.getAttribute('data-mode') || gMode,
            onthumbenter = options.onthumbenter !== undefined ? options.onthumbenter : curData.onthumbenter,
            onthumbleave = options.onthumbleave !== undefined ? options.onthumbleave : curData.onthumbleave,
            onthumbmove = options.onthumbmove !== undefined ? options.onthumbmove : curData.onthumbmove,
            onzoom = options.onzoom !== undefined ? options.onzoom : curData.onzoom;

        if (options.large === undefined) {
            largeUrl = options.thumb.getAttribute('data-large-img-url') !== null ? options.thumb.getAttribute('data-large-img-url') : options.thumb.src;
        } else {
            largeUrl = options.large;
        }

        if (largeWrapper === null && mode !== 'inside') {
            throw {
                name: 'Magnifier error',
                message: 'Please specify large image wrapper DOM element',
                toString: function toString() {
                    return this.name + ": " + this.message;
                }
            };
        }

        if (options.zoomable !== undefined) {
            zoomable = options.zoomable;
        } else if (thumb.getAttribute('data-zoomable') !== null) {
            zoomable = thumb.getAttribute('data-zoomable') === 'true';
        } else if (curData.zoomable !== undefined) {
            zoomable = curData.zoomable;
        }

        if (thumb.id === '') {
            idx = thumb.id = 'magnifier-item-' + gId;
            gId += 1;
        }

        createLens(thumb, idx);

        data[idx] = {
            zoom: zoom,
            zoomMin: zoomMin,
            zoomMax: zoomMax,
            mode: mode,
            zoomable: zoomable,
            thumbCssClass: thumb.className,
            zoomAttached: false,
            status: 0,
            largeUrl: largeUrl,
            largeWrapperId: mode === 'outside' ? largeWrapper.id : null,
            largeWrapperW: mode === 'outside' ? largeWrapper.offsetWidth : null,
            largeWrapperH: mode === 'outside' ? largeWrapper.offsetHeight : null,
            onzoom: onzoom,
            onthumbenter: onthumbenter,
            onthumbleave: onthumbleave,
            onthumbmove: onthumbmove
        };

        evt.attach('mouseover', thumb, function (e, src) {
            if (curData.status !== 0) {
                onThumbLeave();
            }

            curIdx = src.id;
            curThumb = src;

            onThumbEnter(src);

            setThumbData(curThumb, curData);

            pos.x = e.clientX;
            pos.y = e.clientY;

            getMousePos();
            move();

            var handler = curData.onthumbenter;

            if (handler !== null) {
                handler({
                    thumb: curThumb,
                    lens: curLens,
                    large: curLarge,
                    x: pos.x,
                    y: pos.y
                });
            }
        }, false);

        evt.attach('mousemove', thumb, function (e, src) {
            isOverThumb = 1;
        });

        evt.attach('load', thumbObj, function () {
            data[idx].status = 1;

            setThumbData(thumb, data[idx]);
            updateLensOnLoad(idx);

            evt.attach('load', largeObj, function () {
                data[idx].status = 2;
                updateLensOnLoad(idx, thumb, largeObj, largeWrapper);
            });

            largeObj.src = data[idx].largeUrl;
        });

        thumbObj.src = thumb.src;
    };

    evt.attach('mousemove', document, function (e) {
        pos.x = e.clientX;
        pos.y = e.clientY;

        getMousePos();

        if (inBounds === true) {
            move();
        } else {
            if (isOverThumb !== 0) {
                onThumbLeave();
            }

            isOverThumb = 0;
        }
    }, false);

    evt.attach('scroll', window, function () {
        if (curThumb !== null) {
            setThumbData(curThumb, curData);
        }
    });
};

/* harmony default export */ __webpack_exports__["a"] = (Magnifier);

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Unifies event handling across browsers
 *
 * - Allows registering and unregistering of event handlers
 * - Injects event object and involved DOM element to listener
 *
 * @author Mark Rolich <mark.rolich@gmail.com>
 */
var Event = function Event() {
    "use strict";

    this.attach = function (evtName, element, listener, capture) {
        var evt = '',
            useCapture = capture === undefined ? true : capture,
            handler = null;

        if (window.addEventListener === undefined) {
            evt = 'on' + evtName;
            handler = function handler(evt, listener) {
                element.attachEvent(evt, listener);
                return listener;
            };
        } else {
            evt = evtName;
            handler = function handler(evt, listener, useCapture) {
                element.addEventListener(evt, listener, useCapture);
                return listener;
            };
        }

        return handler.apply(element, [evt, function (ev) {
            var e = ev || event,
                src = e.srcElement || e.target;

            listener(e, src);
        }, useCapture]);
    };

    this.detach = function (evtName, element, listener, capture) {
        var evt = '',
            useCapture = capture === undefined ? true : capture;

        if (window.removeEventListener === undefined) {
            evt = 'on' + evtName;
            element.detachEvent(evt, listener);
        } else {
            evt = evtName;
            element.removeEventListener(evt, listener, useCapture);
        }
    };

    this.stop = function (evt) {
        evt.cancelBubble = true;

        if (evt.stopPropagation) {
            evt.stopPropagation();
        }
    };

    this.prevent = function (evt) {
        if (evt.preventDefault) {
            evt.preventDefault();
        } else {
            evt.returnValue = false;
        }
    };
};

/* harmony default export */ __webpack_exports__["a"] = (Event);

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1171);
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./magnifier.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./magnifier.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, ".magnifier-thumb-wrapper {\r\n    position: relative;\r\n    display: block;\r\n    top: 0;\r\n    left: 0\r\n}\r\n\r\n.magnifier-lens {\r\n    position: absolute;\r\n    border: solid 1px #ccc;\r\n    z-index: 1000;\r\n    top: 0;\r\n    left: 0;\r\n    overflow: hidden\r\n}\r\n\r\n.magnifier-loader {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border: solid 1px #ccc;\r\n    color: #fff;\r\n    text-align: center;\r\n    background: transparent;\r\n    background: rgba(50, 50, 50, 0.5);\r\n    z-index: 1000;\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F323232,endColorstr=#7F323232)\";\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F323232,endColorstr=#7F323232)\r\n}\r\n\r\n.magnifier-loader-text {\r\n    font: 13px Arial;\r\n    margin-top: 10px\r\n}\r\n\r\n.magnifier-large {\r\n    position: absolute;\r\n    z-index: 100\r\n}\r\n\r\n.magnifier-preview {\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 150px;\r\n    position: relative;\r\n    overflow: hidden\r\n}\r\n\r\n.magnifier-preview img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0\r\n}\r\n\r\n.opaque {\r\n    opacity: .5;\r\n    filter: alpha(opacity=50);\r\n    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\r\n}\r\n\r\n.hidden {\r\n    display: none\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-12 col-md-12 text-center right_modal ml-5" },
          [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.thumbs, function(image, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-lg-3 col-md-3 col-12" },
                  [
                    _c(
                      "b-btn",
                      {
                        staticClass: "mb-3 small_img",
                        on: {
                          click: function($event) {
                            _vm.openPictureModal(index)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid slide-preview",
                          attrs: {
                            src: __webpack_require__(915),
                            alt: "phone image"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "pictureModal",
                        refInFor: true,
                        attrs: { title: "Modal" }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: __webpack_require__(915),
                            alt: "small phone image missing"
                          }
                        })
                      ]
                    )
                  ],
                  1
                )
              })
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-12  mt-5" }, [
      _c("div", { staticClass: "row" }, [
        _c("a", { staticClass: "magnifier-thumb-wrapper mx-auto" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: {
              id: "thumb",
              src: __webpack_require__(944),
              alt: "Mobile image"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "magnifier-preview",
          staticStyle: { width: "200px", height: "303px" },
          attrs: { id: "preview" }
        })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b218cd7", module.exports)
  }
}

/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1174)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1176)
/* template */
var __vue_template__ = __webpack_require__(1177)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f3c5854c"
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
Component.options.__file = "resources\\assets\\components\\pages\\e-commerce\\components\\product_details\\preview_details.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3c5854c", Component.options)
  } else {
    hotAPI.reload("data-v-f3c5854c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("f5d1dffc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3c5854c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview_details.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3c5854c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview_details.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.first_head_text[data-v-f3c5854c]{\n    font-size: 16px;\n    color: #8799a3;\n}\n.head_text[data-v-f3c5854c]{\n    font-weight: bold;\n    font-size: 32px;\n}\n.star_icon[data-v-f3c5854c]{\n    font-size: 14px;\n    color:#ffd500;\n}\n.review_text[data-v-f3c5854c]{\n    color: #4fc1e9;\n    font-size: 14px;\n}\n.about_item[data-v-f3c5854c]{\n    font-size: 16px;\n}\n.del_text[data-v-f3c5854c]{\n    font-size: 20px;\n    font-weight: 700;\n    color: #8799a3;\n}\n.original_price[data-v-f3c5854c]{\n    font-size: 28px;\n    font-weight: 800;\n    color:#16AF81;\n}\n.size_text[data-v-f3c5854c]{\n    font-size: 14px;\n}\n.siz_btn[data-v-f3c5854c] {\n    background: none;\n    border: none;\n    border-radius: 50%;\n    width: 40px;\n    height: 41px;\n    color: #8799a3;\n    -webkit-box-shadow: 0 15px 145px 10px rgba(0, 0, 0, 0.15);\n            box-shadow: 0 15px 145px 10px rgba(0, 0, 0, 0.15);\n    font-size: 14px;\n    padding: 10px 5px;\n    cursor: pointer;\n}\n.siz_btn[data-v-f3c5854c]:focus, .product_description .siz_btn.active[data-v-f3c5854c] {\n    outline: none;\n    background: #8799a3;\n    color: #fff;\n}\n.siz_btn[data-v-f3c5854c]:hover {\n    background: #8799a3;\n    color: #fff;\n}\n.add_cart[data-v-f3c5854c]{\n    border-radius: 20px;\n    font-size: 14px;\n    padding: 11px 22px;\n}\n.tag_text[data-v-f3c5854c]{\n    font-size: 15px;\n    font-weight: 700;\n}\n.social_icons[data-v-f3c5854c]{\n    font-size: 16px;\n    color: #8799a3;\n}\n.fashion_text[data-v-f3c5854c]{\n    font-size: 14px;\n    color: #8799a3;\n}\n@media (max-width: 325px) {\n.siz_btn[data-v-f3c5854c]{\n        width: 35px;\n        height: 35px;\n        padding: 6px 5px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1176:
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

//    import Vue from "vue";
/* harmony default export */ __webpack_exports__["default"] = ({
        // ===Component name
        name: "privew_details",
        // ===Props passed to component
        props: {},
        // ===Components used by this component
        components: {},
        // ====component Data properties
        data: function data() {
                return {};
        },

        // ===Code to be executed when Component is mounted
        mounted: function mounted() {},

        // ===Computed properties for the component
        computed: {},
        // ===Component methods
        methods: {}
});

/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-12 col-lg-12 col-md-12 col-12" }, [
      _c("div", { staticClass: "first_head_text mt-4" }, [_vm._v("Clothes")]),
      _vm._v(" "),
      _c("div", { staticClass: "head_text" }, [_vm._v("Men's Polo T-shirt")]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-2" }, [
        _c("span", [
          _c("i", { staticClass: "fa fa-star star_icon" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star star_icon" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star star_icon" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star star_icon" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-half-o star_icon" })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "review_text ml-4" }, [
          _vm._v("Read 3 more reviews")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "about_item mt-4" }, [
        _vm._v(
          "\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Ipsum has been the industry's standard\n        "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-4" }, [
        _c("span", { staticClass: "del_text" }, [
          _c("del", [_vm._v("$99.99")])
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "original_price ml-3" }, [_vm._v("$69.00")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-4" }, [
        _c("span", { staticClass: "size_text" }, [_c("b", [_vm._v("Size")])]),
        _vm._v(" "),
        _c("span", { staticClass: "ml-sm-3" }, [
          _c(
            "button",
            { staticClass: "btn-md siz_btn", attrs: { type: "button" } },
            [_vm._v("S")]
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn-md siz_btn", attrs: { type: "button" } },
            [_vm._v("M")]
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn-md siz_btn", attrs: { type: "button" } },
            [_vm._v("L")]
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn-md siz_btn", attrs: { type: "button" } },
            [_vm._v("XL")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 mt-5 mb-4" }, [
        _c("button", { staticClass: "btn btn-primary btn-lg add_cart" }, [
          _vm._v("ADD TO CART")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-3 mb-3" }, [_c("hr")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-sm-2 col-lg-3 tag_text" }, [
            _vm._v("Tags")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-10 col-lg-9 fashion_text" }, [
            _vm._v("T-shirt, Clothes , Fashion, Shop")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-lg-3 col-sm-2 tag_text mt-3" }, [
            _vm._v("Share")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-lg-9 col-sm-10 mt-3" }, [
            _c(
              "a",
              { staticClass: "social_icons mr-3", attrs: { href: "#" } },
              [_c("i", { staticClass: " fa fa-facebook" })]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "social_icons mr-3", attrs: { href: "#" } },
              [_c("i", { staticClass: "fa fa-google-plus" })]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "social_icons mr-3", attrs: { href: "#" } },
              [_c("i", { staticClass: "fa fa-twitter" })]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "social_icons mr-3", attrs: { href: "#" } },
              [_c("i", { staticClass: "fa fa-linkedin" })]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f3c5854c", module.exports)
  }
}

/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1179)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1181)
/* template */
var __vue_template__ = __webpack_require__(1182)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01a5a214"
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
Component.options.__file = "resources\\assets\\components\\pages\\e-commerce\\components\\product_details\\preview_description.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01a5a214", Component.options)
  } else {
    hotAPI.reload("data-v-01a5a214", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1180);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("73f48918", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a5a214\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview_description.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a5a214\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview_description.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.star_icon[data-v-01a5a214]{\n    font-size: 14px;\n    color:#ffd500;\n}\n.additional_heading[data-v-01a5a214]{\n    font-size: 16px;\n    font-weight: bold;\n    color:#337ab7 ;\n}\n.item_head[data-v-01a5a214]{\n    font-weight:700;\n}\n.cir_img[data-v-01a5a214]{\n    width: 50px;\n    height:50px;\n}\n.date_year[data-v-01a5a214]{\n    font-size: 14px;\n    color: #8799a3;\n}\n", ""]);

// exports


/***/ }),

/***/ 1181:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "preview_description",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {},
    // ====component Data properties
    data: function data() {
        return {};
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {},

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {}
});

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "col-12 mt-5" },
      [
        _c("b-card", [
          _c("div", { staticClass: "additional_heading  mb-4" }, [
            _vm._v("Description")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "align-content-round" }, [
            _vm._v(
              "\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged\n            "
            )
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12" },
      [
        _c("b-card", [
          _c("div", { staticClass: "align-content-round" }, [
            _c("div", { staticClass: "additional_heading  mb-4" }, [
              _vm._v("Additional Information")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-4 mt-2 item_head" }, [
                _vm._v("Material:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-8 mt-2 pl-sm-3 pl-4" }, [
                _vm._v("Cutton")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 mt-2 item_head" }, [
                _vm._v("Sleve type:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-8 mt-2" }, [_vm._v("Half Sleeve")]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 mt-2 item_head" }, [
                _vm._v("Neck  type:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-8 mt-2" }, [_vm._v("Polo")]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 mt-2 item_head" }, [
                _vm._v("Fit type:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-8 mt-2" }, [
                _vm._v("Regular type")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 mt-2 item_head" }, [
                _vm._v("Color:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-8 mt-2" }, [
                _vm._v("Black , Brown , white")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 mt-2 item_head" }, [
                _vm._v("Sleve type:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-8 mt-2" }, [_vm._v("Half Sleeve")])
            ])
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12" },
      [
        _c("b-card", [
          _c("div", { staticClass: "additional_heading  mb-4" }, [
            _vm._v("Reviews (3)")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "align-content-round" },
            [
              _c("b-media", { staticClass: "mt-4" }, [
                _c("img", {
                  staticClass: "rounded-circle cir_img mr-2",
                  attrs: {
                    slot: "aside",
                    src: __webpack_require__(793),
                    alt: "image missing"
                  },
                  slot: "aside"
                }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-9" }, [
                    _c("h5", { staticClass: "mt-1" }, [
                      _c("b", [_vm._v("Charis Perter")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "date_year mb-2" }, [
                      _vm._v("Sep.28, 2016 ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-12" }, [
                    _c("div", [
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star-half-o star_icon" })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\n                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis\n                        in faucibus.\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("b-media", { staticClass: "mt-4" }, [
                _c("img", {
                  staticClass: "rounded-circle cir_img mr-2",
                  attrs: {
                    slot: "aside",
                    src: __webpack_require__(790),
                    alt: "image missing"
                  },
                  slot: "aside"
                }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-9" }, [
                    _c("h5", { staticClass: "mt-1" }, [
                      _c("b", [_vm._v("John Corner")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "date_year mb-2" }, [
                      _vm._v("Oct.02, 2016 ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-12" }, [
                    _c("div", [
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star-half-o star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star-o star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star-o star_icon" })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\n                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis\n                        in faucibus.\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("b-media", { staticClass: "mt-4" }, [
                _c("img", {
                  staticClass: "rounded-circle cir_img mr-2",
                  attrs: {
                    slot: "aside",
                    src: __webpack_require__(810),
                    alt: "image missing"
                  },
                  slot: "aside"
                }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-9" }, [
                    _c("h5", { staticClass: "mt-1" }, [
                      _c("b", [_vm._v("Lucis flowers")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "date_year mb-2" }, [
                      _vm._v("Oct.21, 2016 ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-12" }, [
                    _c("div", [
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star star_icon" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-star-half-o star_icon" })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\n                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis\n                        in faucibus.\n                    "
                  )
                ])
              ])
            ],
            1
          )
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-01a5a214", module.exports)
  }
}

/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1184)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1186)
/* template */
var __vue_template__ = __webpack_require__(1187)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3c829134"
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
Component.options.__file = "resources\\assets\\components\\pages\\e-commerce\\components\\product_details\\preview_categories.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c829134", Component.options)
  } else {
    hotAPI.reload("data-v-3c829134", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1185);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("049b030e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c829134\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview_categories.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c829134\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview_categories.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.cata_text[data-v-3c829134]{\n    color: rgba(37, 37, 37, 255);\n    font-weight: bold;\n}\n.hvr_clr:hover .hvr_text [data-v-3c829134], .hvr_clr:hover .caret_clr[data-v-3c829134]{\n    color: #8799a3;\n}\n.caret_clr[data-v-3c829134]{\n    color: #337ab7;\n}\n.catag_inr_text[data-v-3c829134]{\n    font-size:16px;\n}\n.hvr_img[data-v-3c829134]:hover{\n    cursor: pointer;\n}\n.all_btn[data-v-3c829134]:hover{\n    background-color: #337ab7;\n    color: #fff;\n}\n.all_btn[data-v-3c829134]{\n    background-color: #fff;\n    border: 1px solid #eee;\n    border-radius: 27px;\n    padding: 7px 20px;\n    color:  rgba(135, 153, 163, 255);\n    font-weight: 400 !important;\n    font-size: 12px;\n}\n.f-s-10[data-v-3c829134]{\n    font-size:10px;\n    color: #fcd846;\n}\n.hrv_text:hover .item_text[data-v-3c829134]{\n    color: #8799a3;\n}\n.hrv_text:hover .hvr_img[data-v-3c829134]{\n    opacity: 0.5;\n}\n.hvr_img[data-v-3c829134]:hover{\n    cursor: pointer;\n}\n.item_text[data-v-3c829134]{\n    font-size: 14px;\n    color: #252525;\n    font-weight: 700;\n}\n.pri_clr[data-v-3c829134]{\n    font-size: 14px;\n    color: rgba(57, 181, 74, 255);\n    font-weight: 700;\n}\n", ""]);

// exports


/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_slider_component__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // ===Component name
    name: "preview_categories",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {
        vueSlider: __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default.a
    },
    // ====component Data properties
    data: function data() {
        return {
            value2: [20, 50],
            value: null,
            multi_value: null,
            object_value: null,
            value_search: null
        };
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {},

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {
        openPictureModal: function openPictureModal(ref) {
            this.$refs.pictureModal[ref].show();
        },
        addTag: function addTag(newTag) {
            var tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
            };
            this.object_options.push(tag);
            this.tag_value.push(tag);
        }
    }
});

/***/ }),

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "col-12 mb-5" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12 mt-5" },
          [
            _c("b-card", { staticClass: "round_box" }, [
              _c("div", [
                _c(
                  "h4",
                  {
                    staticClass: "cata_text mt-2 ml-2 mb-3",
                    attrs: { title: "click on below the cart styles" }
                  },
                  [_vm._v("Categories")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "row hvr_clr mt-3" }, [
                    _c("div", { staticClass: "col-2 text-right" }, [
                      _c("i", {
                        staticClass: "fa fa-caret-right caret_clr hvr_text"
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-10 text-left catag_inr_text hvr_text"
                      },
                      [
                        _c(
                          "a",
                          { staticClass: "cart_style", attrs: { href: "#" } },
                          [_vm._v(" Accessories (68)")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row hvr_clr mt-2" }, [
                    _c("div", { staticClass: "col-2 text-right hvr_text" }, [
                      _c("i", {
                        staticClass: "fa fa-caret-right caret_clr hvr_text"
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-10 text-left catag_inr_text hvr_text"
                      },
                      [
                        _c(
                          "a",
                          { staticClass: "cart_style", attrs: { href: "#" } },
                          [_vm._v(" Clothing (36)")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row hvr_clr mt-2" }, [
                    _c("div", { staticClass: "col-2 text-right hvr_text" }, [
                      _c("i", {
                        staticClass: "fa fa-caret-right caret_clr hvr_text"
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-10 text-left catag_inr_text hvr_text"
                      },
                      [
                        _c(
                          "a",
                          { staticClass: "cart_style", attrs: { href: "#" } },
                          [_vm._v(" Things (29)")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row hvr_clr mt-2" }, [
                    _c("div", { staticClass: "col-2 text-right hvr_text" }, [
                      _c("i", {
                        staticClass: "fa fa-caret-right caret_clr hvr_text"
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-10 text-left catag_inr_text hvr_text"
                      },
                      [
                        _c(
                          "a",
                          { staticClass: "cart_style", attrs: { href: "#" } },
                          [_vm._v(" Polygraphy (20)")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row hvr_clr mt-2" }, [
                    _c("div", { staticClass: "col-2 text-right hvr_text" }, [
                      _c("i", {
                        staticClass: "fa fa-caret-right caret_clr hvr_text"
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-10 text-left catag_inr_text hvr_text"
                      },
                      [
                        _c(
                          "a",
                          { staticClass: "cart_style", attrs: { href: "#" } },
                          [_vm._v("Other (7)")]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12  mt-4" },
          [
            _c("b-card", { staticClass: "range_box" }, [
              _c("h4", { staticClass: "cata_text mt-3 ml-3" }, [
                _vm._v("Filter by price ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "ml-3" },
                [
                  _c("h5", { staticClass: "mt-5" }, [
                    _vm._v("Price Range" + _vm._s(_vm.value2))
                  ]),
                  _vm._v(" "),
                  _c("vue-slider", {
                    staticClass: "mt-5 mb-5 range_space",
                    attrs: { range: true },
                    model: {
                      value: _vm.value2,
                      callback: function($$v) {
                        _vm.value2 = $$v
                      },
                      expression: "value2"
                    }
                  })
                ],
                1
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 mt-4" },
              [
                _c("b-card", { staticClass: "round_box" }, [
                  _c("div", [
                    _c("h4", { staticClass: "cata_text mt-3 ml-2" }, [
                      _vm._v("Popular Items ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-5 hrv_text" }, [
                    _c("div", { staticClass: "col-6 mt-2 hvr_img" }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          src: __webpack_require__(945),
                          alt: "images missing"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-half-o f-s-10" })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "item_text" }, [
                        _vm._v("Men's Polo T-shirt")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "pri_clr" }, [_vm._v("$269.00")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row hrv_text" }, [
                    _c("div", { staticClass: "col-6 mt-2 hvr_img" }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          src: __webpack_require__(946),
                          alt: "images missing"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o f-s-10" })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "item_text" }, [
                        _vm._v("Modern Fabric Bag")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "pri_clr" }, [_vm._v("$28.99")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row hrv_text" }, [
                    _c("div", { staticClass: "col-6 mt-2 hvr_img" }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          src: __webpack_require__(947),
                          alt: "images missing"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star f-s-10" }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "fa fa-star-half-empty f-s-10"
                          }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-half-o f-s-10" })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "item_text" }, [
                        _vm._v("Desk Calendar")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "pri_clr" }, [_vm._v("$8.99")])
                    ])
                  ])
                ])
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 mt-4" },
              [
                _c("b-card", { staticClass: "round_box" }, [
                  _c("div", [
                    _c("h4", { staticClass: "cata_text mt-3 mb-4 ml-2" }, [
                      _vm._v("Popular Tags")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-12 mt-3" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm all_btn",
                            attrs: { type: "button" }
                          },
                          [_vm._v("Mock-Ups")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-12 mt-3" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm all_btn",
                            attrs: { type: "button" }
                          },
                          [_vm._v("UI")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-12 mt-3" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm all_btn",
                            attrs: { type: "button" }
                          },
                          [_vm._v("Websites")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-12 mt-3" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm all_btn",
                            attrs: { type: "button" }
                          },
                          [_vm._v("brand")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-8 mt-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm all_btn",
                          attrs: { type: "button" }
                        },
                        [_vm._v("PSD Templates")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-12 mt-3" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm all_btn",
                            attrs: { type: "button" }
                          },
                          [_vm._v("Websites")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-12 mt-3" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm all_btn",
                            attrs: { type: "button" }
                          },
                          [_vm._v("brand")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-8 mt-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm all_btn",
                          attrs: { type: "button" }
                        },
                        [_vm._v("PSD Templates")]
                      )
                    ])
                  ])
                ])
              ],
              1
            )
          ])
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-3c829134", module.exports)
  }
}

/***/ }),

/***/ 1188:
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
          _c("b-card", [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-xl-9 col-lg-12 col-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-xl-6 col-lg-6 col-md-12 col-12" },
                      [
                        _c("preview", {
                          attrs: {
                            thumb: _vm.preview.thumb,
                            large: _vm.preview.large,
                            thumbs: _vm.preview.thumbs
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-xl-6 col-lg-6 col-md-12 col-12" },
                      [_c("preview-details")],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [_c("preview-description")],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xl-3 col-md-6 col-lg-12" },
                  [_c("preview-categories")],
                  1
                )
              ])
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-6bd317c3", module.exports)
  }
}

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1160)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1162)
/* template */
var __vue_template__ = __webpack_require__(1188)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6bd317c3"
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
Component.options.__file = "resources\\assets\\components\\pages\\e-commerce\\product_details.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bd317c3", Component.options)
  } else {
    hotAPI.reload("data-v-6bd317c3", Component.options)
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


/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar3.jpg?7e593f7330076b4b89e96f89b9396c0a";

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar2.jpg?2a26dff9723fa354fe9cb39a4f4529e6";

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar1.jpg?2d4968bd8ec1519b0535ba849643dd1c";

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("vue-slider-component",[],e):"object"==typeof exports?exports["vue-slider-component"]=e():t["vue-slider-component"]=e()}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,i){i(7);var s=i(5)(i(1),i(6),null,null);t.exports=s.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"VueSliderComponent",data:function(){return{flag:!1,size:0,currentValue:0,currentSlider:0,isComponentExists:!0}},props:{width:{type:[Number,String],default:"auto"},height:{type:[Number,String],default:6},data:{type:Array,default:null},dotSize:{type:Number,default:16},dotWidth:{type:Number,required:!1},dotHeight:{type:Number,required:!1},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1},show:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},piecewise:{type:Boolean,default:!1},tooltip:{type:[String,Boolean],default:"always"},eventType:{type:String,default:"auto"},direction:{type:String,default:"horizontal"},reverse:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},clickable:{type:Boolean,default:!0},speed:{type:Number,default:.5},realTime:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!1},value:{type:[String,Number,Array,Object],default:0},piecewiseLabel:{type:Boolean,default:!1},debug:{type:Boolean,default:!0},sliderStyle:[Array,Object,Function],tooltipDir:[Array,String],formatter:[String,Function],piecewiseStyle:Object,piecewiseActiveStyle:Object,processStyle:Object,bgStyle:Object,tooltipStyle:[Array,Object,Function],labelStyle:Object,labelActiveStyle:Object},computed:{dotWidthVal:function(){return"number"==typeof this.dotWidth?this.dotWidth:this.dotSize},dotHeightVal:function(){return"number"==typeof this.dotHeight?this.dotHeight:this.dotSize},flowDirection:function(){return"vue-slider-"+this.direction+(this.reverse?"-reverse":"")},tooltipDirection:function(){var t=this.tooltipDir||("vertical"===this.direction?"left":"top");return Array.isArray(t)?this.isRange?t:t[1]:this.isRange?[t,t]:t},tooltipStatus:function(){return"hover"===this.tooltip&&this.flag?"vue-slider-always":this.tooltip?"vue-slider-"+this.tooltip:""},tooltipClass:function(){return["vue-slider-tooltip-"+this.tooltipDirection,"vue-slider-tooltip"]},isDisabled:function(){return"none"===this.eventType||this.disabled},disabledClass:function(){return this.disabled?"vue-slider-disabled":""},isRange:function(){return Array.isArray(this.value)},slider:function(){return this.isRange?[this.$refs.dot0,this.$refs.dot1]:this.$refs.dot},minimum:function(){return this.data?0:this.min},val:{get:function(){return this.data?this.isRange?[this.data[this.currentValue[0]],this.data[this.currentValue[1]]]:this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data)if(this.isRange){var e=this.data.indexOf(t[0]),i=this.data.indexOf(t[1]);e>-1&&i>-1&&(this.currentValue=[e,i])}else{var s=this.data.indexOf(t);s>-1&&(this.currentValue=s)}else this.currentValue=t}},currentIndex:function(){return this.isRange?this.data?this.currentValue:[(this.currentValue[0]-this.minimum)/this.spacing,(this.currentValue[1]-this.minimum)/this.spacing]:(this.currentValue-this.minimum)/this.spacing},indexRange:function(){return this.isRange?this.currentIndex:[0,this.currentIndex]},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t=(""+this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(Math.floor((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&this.printError("[VueSlider error]: Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return this.isRange?[(this.currentValue[0]-this.minimum)/this.spacing*this.gap,(this.currentValue[1]-this.minimum)/this.spacing*this.gap]:(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return this.isRange?[[0,this.position[1]],[this.position[0],this.size]]:[0,this.size]},valueLimit:function(){return this.isRange?[[this.minimum,this.currentValue[1]],[this.currentValue[0],this.maximum]]:[this.minimum,this.maximum]},wrapStyles:function(){return"vertical"===this.direction?{height:"number"==typeof this.height?this.height+"px":this.height,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}:{width:"number"==typeof this.width?this.width+"px":this.width,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}},sliderStyles:function(){return Array.isArray(this.sliderStyle)?this.isRange?this.sliderStyle:this.sliderStyle[1]:"function"==typeof this.sliderStyle?this.sliderStyle(this.val,this.currentIndex):this.isRange?[this.sliderStyle,this.sliderStyle]:this.sliderStyle},tooltipStyles:function(){return Array.isArray(this.tooltipStyle)?this.isRange?this.tooltipStyle:this.tooltipStyle[1]:"function"==typeof this.tooltipStyle?this.tooltipStyle(this.val,this.currentIndex):this.isRange?[this.tooltipStyle,this.tooltipStyle]:this.tooltipStyle},elemStyles:function(){return"vertical"===this.direction?{width:this.width+"px",height:"100%"}:{height:this.height+"px"}},dotStyles:function(){return"vertical"===this.direction?{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",left:-(this.dotWidthVal-this.width)/2+"px"}:{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",top:-(this.dotHeightVal-this.height)/2+"px"}},piecewiseDotStyle:function(){return"vertical"===this.direction?{width:this.width+"px",height:this.width+"px"}:{width:this.height+"px",height:this.height+"px"}},piecewiseDotWrap:function(){if(!this.piecewise&&!this.piecewiseLabel)return!1;for(var t=[],e=0;e<=this.total;e++){var i="vertical"===this.direction?{bottom:this.gap*e-this.width/2+"px",left:0}:{left:this.gap*e-this.height/2+"px",top:0},s=this.reverse?this.total-e:e,r=this.data?this.data[s]:this.spacing*s+this.min;t.push({style:i,label:this.formatter?this.formatting(r):r,inRange:s>=this.indexRange[0]&&s<=this.indexRange[1]})}return t}},watch:{value:function(t){this.flag||this.setValue(t,!0)},max:function(t){if(t<this.min)return this.printError("[VueSlider error]: The maximum value can not be less than the minimum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},min:function(t){if(t>this.max)return this.printError("[VueSlider error]: The minimum value can not be greater than the maximum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},show:function(t){var e=this;t&&!this.size&&this.$nextTick(function(){e.refresh()})}},methods:{bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}),document.addEventListener("touchend",this.moveEnd,{passive:!1}),document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd),window.addEventListener("resize",this.refresh)},unbindEvents:function(){window.removeEventListener("resize",this.refresh),document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd),document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd)},formatting:function(t){return"string"==typeof this.formatter?this.formatter.replace(/\{value\}/,t):this.formatter(t)},getPos:function(t){return this.realTime&&this.getStaticData(),"vertical"===this.direction?this.reverse?t.pageY-this.offset:this.size-(t.pageY-this.offset):this.reverse?this.size-(t.clientX-this.offset):t.clientX-this.offset},wrapClick:function(t){if(this.isDisabled||!this.clickable)return!1;var e=this.getPos(t);this.isRange&&(this.currentSlider=e>(this.position[1]-this.position[0])/2+this.position[0]?1:0),this.setValueOnPos(e)},moveStart:function(t,e){if(this.stopPropagation&&t.stopPropagation(),this.isDisabled)return!1;this.isRange&&(this.currentSlider=e),this.flag=!0,this.$emit("drag-start",this)},moving:function(t){if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;t.preventDefault(),t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),this.setValueOnPos(this.getPos(t),!0)},moveEnd:function(t){if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;this.$emit("drag-end",this),this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(),this.flag=!1,this.setPosition()},setValueOnPos:function(t,e){var i=this.isRange?this.limit[this.currentSlider]:this.limit,s=this.isRange?this.valueLimit[this.currentSlider]:this.valueLimit;if(t>=i[0]&&t<=i[1]){this.setTransform(t);var r=(Math.round(t/this.gap)*(this.spacing*this.multiple)+this.minimum*this.multiple)/this.multiple;this.setCurrentValue(r,e)}else t<i[0]?(this.setTransform(i[0]),this.setCurrentValue(s[0]),1===this.currentSlider&&(this.currentSlider=0)):(this.setTransform(i[1]),this.setCurrentValue(s[1]),0===this.currentSlider&&(this.currentSlider=1))},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e){if(t<this.minimum||t>this.maximum)return!1;this.isRange?this.isDiff(this.currentValue[this.currentSlider],t)&&(this.currentValue.splice(this.currentSlider,1,t),this.lazy&&this.flag||this.syncValue()):this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag||this.syncValue()),e||this.setPosition()},setIndex:function(t){if(Array.isArray(t)&&this.isRange){var e=void 0;e=this.data?[this.data[t[0]],this.data[t[1]]]:[this.spacing*t[0]+this.minimum,this.spacing*t[1]+this.minimum],this.setValue(e)}else t=this.spacing*t+this.minimum,this.isRange&&(this.currentSlider=t>(this.currentValue[1]-this.currentValue[0])/2+this.currentValue[0]?1:0),this.setCurrentValue(t)},setValue:function(t,e,i){var s=this;if(this.isDiff(this.val,t)){var r=this.limitValue(t);this.val=this.isRange?r.concat():r,this.syncValue(e)}this.$nextTick(function(){return s.setPosition(i)})},setPosition:function(t){this.flag||this.setTransitionTime(void 0===t?this.speed:t),this.isRange?(this.currentSlider=0,this.setTransform(this.position[this.currentSlider]),this.currentSlider=1,this.setTransform(this.position[this.currentSlider])):this.setTransform(this.position),this.flag||this.setTransitionTime(0)},setTransform:function(t){var e=("vertical"===this.direction?this.dotHeightVal/2-t:t-this.dotWidthVal/2)*(this.reverse?-1:1),i="vertical"===this.direction?"translateY("+e+"px)":"translateX("+e+"px)",s=(0===this.currentSlider?this.position[1]-t:t-this.position[0])+"px",r=(0===this.currentSlider?t:this.position[0])+"px";this.isRange?(this.slider[this.currentSlider].style.transform=i,this.slider[this.currentSlider].style.WebkitTransform=i,this.slider[this.currentSlider].style.msTransform=i,"vertical"===this.direction?(this.$refs.process.style.height=s,this.$refs.process.style[this.reverse?"top":"bottom"]=r):(this.$refs.process.style.width=s,this.$refs.process.style[this.reverse?"right":"left"]=r)):(this.slider.style.transform=i,this.slider.style.WebkitTransform=i,this.slider.style.msTransform=i,"vertical"===this.direction?(this.$refs.process.style.height=t+"px",this.$refs.process.style[this.reverse?"top":"bottom"]=0):(this.$refs.process.style.width=t+"px",this.$refs.process.style[this.reverse?"right":"left"]=0))},setTransitionTime:function(t){if(t||this.$refs.process.offsetWidth,this.isRange){for(var e=0;e<this.slider.length;e++)this.slider[e].style.transitionDuration=t+"s",this.slider[e].style.WebkitTransitionDuration=t+"s";this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"}else this.slider.style.transitionDuration=t+"s",this.slider.style.WebkitTransitionDuration=t+"s",this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"},limitValue:function(t){var e=this;if(this.data)return t;var i=function(i){return i<e.min?(e.printError("[VueSlider warn]: The value of the slider is "+t+", the minimum value is "+e.min+", the value of this slider can not be less than the minimum value"),e.min):i>e.max?(e.printError("[VueSlider warn]: The value of the slider is "+t+", the maximum value is "+e.max+", the value of this slider can not be greater than the maximum value"),e.max):i};return this.isRange?t.map(function(t){return i(t)}):i(t)},syncValue:function(t){var e=this.isRange?this.val.concat():this.val;this.$emit("input",e),t||this.$emit("callback",e)},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size="vertical"===this.direction?this.$refs.elem.offsetHeight:this.$refs.elem.offsetWidth,this.offset="vertical"===this.direction?this.$refs.elem.getBoundingClientRect().top+window.pageYOffset||document.documentElement.scrollTop:this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.setPosition())},printError:function(t){this.debug&&console.error(t)}},mounted:function(){var t=this;if(this.isComponentExists=!0,"undefined"==typeof window||"undefined"==typeof document)return this.printError("[VueSlider error]: window or document is undefined, can not be initialization.");this.$nextTick(function(){t.isComponentExists&&(t.getStaticData(),t.setValue(t.limitValue(t.value),!0,0),t.bindEvents())})},beforeDestroy:function(){this.isComponentExists=!1,this.unbindEvents()}}},function(t,e,i){"use strict";var s=i(0);t.exports=s},function(t,e,i){e=t.exports=i(4)(),e.push([t.i,'.vue-slider-component{position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-slider-component.vue-slider-disabled{opacity:.5;cursor:not-allowed}.vue-slider-component.vue-slider-has-label{margin-bottom:15px}.vue-slider-component.vue-slider-disabled .vue-slider-dot{cursor:not-allowed}.vue-slider-component .vue-slider{position:relative;display:block;border-radius:15px;background-color:#ccc}.vue-slider-component .vue-slider:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slider-component .vue-slider-process{position:absolute;border-radius:15px;background-color:#3498db;transition:all 0s;z-index:1}.vue-slider-component.vue-slider-horizontal .vue-slider-process{width:0;height:100%;top:0;left:0;will-change:width}.vue-slider-component.vue-slider-vertical .vue-slider-process{width:100%;height:0;bottom:0;left:0;will-change:height}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process{width:0;height:100%;top:0;right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process{width:100%;height:0;top:0;left:0}.vue-slider-component .vue-slider-dot{position:absolute;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32);transition:all 0s;will-change:transform;cursor:pointer;z-index:3}.vue-slider-component.vue-slider-horizontal .vue-slider-dot{left:0}.vue-slider-component.vue-slider-vertical .vue-slider-dot{bottom:0}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot{right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot{top:0}.vue-slider-component .vue-slider-tooltip-wrap{display:none;position:absolute;z-index:9}.vue-slider-component .vue-slider-tooltip{display:block;font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #3498db;background-color:#3498db}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top{top:-9px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom{bottom:-9px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left{top:50%;left:-9px;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right{top:50%;right:-9px;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip:before{content:"";position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-top-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:before{content:"";position:absolute;top:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-bottom-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip:before{content:"";position:absolute;top:50%;right:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-left-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip:before{content:"";position:absolute;top:50%;left:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-right-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap{display:block}.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap{display:block!important}.vue-slider-component .vue-slider-piecewise{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none}.vue-slider-component .vue-slider-piecewise-item{position:absolute;width:8px;height:8px}.vue-slider-component .vue-slider-piecewise-dot{position:absolute;left:50%;top:50%;width:100%;height:100%;display:inline-block;background-color:rgba(0,0,0,.16);border-radius:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:2;transition:all .3s}.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot,.vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot{visibility:hidden}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label{position:absolute;display:inline-block;top:100%;left:50%;white-space:nowrap;font-size:12px;color:#333;-webkit-transform:translate(-50%,8px);transform:translate(-50%,8px);visibility:visible}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label{position:absolute;display:inline-block;top:50%;left:100%;white-space:nowrap;font-size:12px;color:#333;-webkit-transform:translate(8px,-50%);transform:translate(8px,-50%);visibility:visible}.vue-slider-component .vue-slider-sr-only{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},r=0;r<this.length;r++){var n=this[r][0];"number"==typeof n&&(s[n]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&s[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e){t.exports=function(t,e,i,s){var r,n=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,n=t.default);var l="function"==typeof n?n.options:n;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),s){var a=Object.create(l.computed||null);Object.keys(s).forEach(function(t){var e=s[t];a[t]=function(){return e}}),l.computed=a}return{esModule:r,exports:n,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"wrap",class:["vue-slider-component",t.flowDirection,t.disabledClass,{"vue-slider-has-label":t.piecewiseLabel}],style:t.wrapStyles,on:{click:t.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slider",style:[t.elemStyles,t.bgStyle],attrs:{"aria-hidden":"true"}},[t.isRange?[i("div",{ref:"dot0",class:[t.tooltipStatus,"vue-slider-dot"],style:[t.dotStyles,t.sliderStyles[0]],on:{mousedown:function(e){t.moveStart(e,0)},touchstart:function(e){t.moveStart(e,0)}}},[i("span",{class:["vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[0]},[t._v(t._s(t.formatter?t.formatting(t.val[0]):t.val[0]))])],{value:t.val[0],index:0})],2)]),t._v(" "),i("div",{ref:"dot1",class:[t.tooltipStatus,"vue-slider-dot"],style:[t.dotStyles,t.sliderStyles[1]],on:{mousedown:function(e){t.moveStart(e,1)},touchstart:function(e){t.moveStart(e,1)}}},[i("span",{class:["vue-slider-tooltip-"+t.tooltipDirection[1],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[1]},[t._v(t._s(t.formatter?t.formatting(t.val[1]):t.val[1]))])],{value:t.val[1],index:1})],2)])]:[i("div",{ref:"dot",class:[t.tooltipStatus,"vue-slider-dot"],style:[t.dotStyles,t.sliderStyles],on:{mousedown:t.moveStart,touchstart:t.moveStart}},[i("span",{class:["vue-slider-tooltip-"+t.tooltipDirection,"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles},[t._v(t._s(t.formatter?t.formatting(t.val):t.val))])],{value:t.val})],2)])],t._v(" "),i("ul",{staticClass:"vue-slider-piecewise"},t._l(t.piecewiseDotWrap,function(e,s){return i("li",{key:s,staticClass:"vue-slider-piecewise-item",style:[t.piecewiseDotStyle,e.style]},[t._t("piecewise",[t.piecewise?i("span",{staticClass:"vue-slider-piecewise-dot",style:[t.piecewiseStyle,e.inRange?t.piecewiseActiveStyle:null]}):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:e.inRange}),t._v(" "),t._t("label",[t.piecewiseLabel?i("span",{staticClass:"vue-slider-piecewise-label",style:[t.labelStyle,e.inRange?t.labelActiveStyle:null]},[t._v("\n            "+t._s(e.label)+"\n          ")]):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:e.inRange})],2)})),t._v(" "),i("div",{ref:"process",staticClass:"vue-slider-process",style:t.processStyle})],2),t._v(" "),t.isRange||t.data?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"vue-slider-sr-only",attrs:{type:"range",min:t.min,max:t.max},domProps:{value:t.val},on:{__r:function(e){t.val=e.target.value}}})])},staticRenderFns:[]}},function(t,e,i){var s=i(3);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(8)("743d98f5",s,!0)},function(t,e,i){function s(t){for(var e=0;e<t.length;e++){var i=t[e],s=h[i.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](i.parts[r]);for(;r<i.parts.length;r++)s.parts.push(n(i.parts[r]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{for(var o=[],r=0;r<i.parts.length;r++)o.push(n(i.parts[r]));h[i.id]={id:i.id,refs:1,parts:o}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function n(t){var e,i,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(f)return v;s.parentNode.removeChild(s)}if(m){var n=c++;s=p||(p=r()),e=o.bind(null,s,n,!1),i=o.bind(null,s,n,!0)}else s=r(),e=l.bind(null,s),i=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else i()}}function o(t,e,i,s){var r=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var n=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(n,o[e]):t.appendChild(n)}}function l(t,e){var i=e.css,s=e.media,r=e.sourceMap;if(s&&t.setAttribute("media",s),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=i(9),h={},d=a&&(document.head||document.getElementsByTagName("head")[0]),p=null,c=0,f=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){f=i;var r=u(t,e);return s(r),function(e){for(var i=[],n=0;n<r.length;n++){var o=r[n],l=h[o.id];l.refs--,i.push(l)}e?(r=u(t,e),s(r)):r=[];for(var n=0;n<i.length;n++){var l=i[n];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete h[l.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],s={},r=0;r<e.length;r++){var n=e[r],o=n[0],l=n[1],a=n[2],u=n[3],h={id:t+":"+r,css:l,media:a,sourceMap:u};s[o]?s[o].parts.push(h):i.push(s[o]={id:o,parts:[h]})}return i}}])});

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/T-shirt.png?3c9ddea3f154e52f45c0707f33371cc0";

/***/ }),

/***/ 944:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/polo.jpg?049e5aafc9c55943b235fa7673333e64";

/***/ }),

/***/ 945:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/shirt70x70.png?db425cd33e825cbd271c1973b4148f91";

/***/ }),

/***/ 946:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/bag70x70.png?4379c13fdeaa7484c0d10aa2934fdf1b";

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/desk70x70.png?9de1721434aa024ce189a9b9ab4b5a90";

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/183x338_1.png?231f774fb081748f5b4ceff4837e105e";

/***/ })

});