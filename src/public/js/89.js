webpackJsonp([89],{

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1270);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("120892cc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23572cf2\",\"scoped\":false,\"hasInlineConfig\":true}!./hover.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23572cf2\",\"scoped\":false,\"hasInlineConfig\":true}!./hover.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Hover.css (http://ianlunn.github.io/Hover/)\r\n * Version: 2.2.1\r\n * Author: Ian Lunn @IanLunn\r\n * Author URL: http://ianlunn.co.uk/\r\n * Github: https://github.com/IanLunn/Hover\r\n\r\n * Hover.css Copyright Ian Lunn 2017. Generated with Sass.\r\n */\r\n/* 2D TRANSITIONS */\r\n/* Grow */\n.hvr-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\n}\r\n\r\n/* Shrink */\n.hvr-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-shrink:hover, .hvr-shrink:focus, .hvr-shrink:active {\r\n  -webkit-transform: scale(0.9);\r\n  transform: scale(0.9);\n}\r\n\r\n/* Pulse */\n@-webkit-keyframes hvr-pulse {\n25% {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\n}\n75% {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\n}\n}\n@keyframes hvr-pulse {\n25% {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\n}\n75% {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\n}\n}\n.hvr-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active {\r\n  -webkit-animation-name: hvr-pulse;\r\n  animation-name: hvr-pulse;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\n}\r\n\r\n/* Pulse Grow */\n@-webkit-keyframes hvr-pulse-grow {\nto {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\n}\n}\n@keyframes hvr-pulse-grow {\nto {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\n}\n}\n.hvr-pulse-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active {\r\n  -webkit-animation-name: hvr-pulse-grow;\r\n  animation-name: hvr-pulse-grow;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n  animation-direction: alternate;\n}\r\n\r\n/* Pulse Shrink */\n@-webkit-keyframes hvr-pulse-shrink {\nto {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\n}\n}\n@keyframes hvr-pulse-shrink {\nto {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\n}\n}\n.hvr-pulse-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-pulse-shrink:hover, .hvr-pulse-shrink:focus, .hvr-pulse-shrink:active {\r\n  -webkit-animation-name: hvr-pulse-shrink;\r\n  animation-name: hvr-pulse-shrink;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n  animation-direction: alternate;\n}\r\n\r\n/* Push */\n@-webkit-keyframes hvr-push {\n50% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\n}\n100% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\n}\n}\n@keyframes hvr-push {\n50% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\n}\n100% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\n}\n}\n.hvr-push {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-push:hover, .hvr-push:focus, .hvr-push:active {\r\n  -webkit-animation-name: hvr-push;\r\n  animation-name: hvr-push;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Pop */\n@-webkit-keyframes hvr-pop {\n50% {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\n}\n}\n@keyframes hvr-pop {\n50% {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\n}\n}\n.hvr-pop {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-pop:hover, .hvr-pop:focus, .hvr-pop:active {\r\n  -webkit-animation-name: hvr-pop;\r\n  animation-name: hvr-pop;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Bounce In */\n.hvr-bounce-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\r\n\r\n/* Bounce Out */\n.hvr-bounce-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-out:hover, .hvr-bounce-out:focus, .hvr-bounce-out:active {\r\n  -webkit-transform: scale(0.8);\r\n  transform: scale(0.8);\r\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\r\n\r\n/* Rotate */\n.hvr-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-rotate:hover, .hvr-rotate:focus, .hvr-rotate:active {\r\n  -webkit-transform: rotate(4deg);\r\n  transform: rotate(4deg);\n}\r\n\r\n/* Grow Rotate */\n.hvr-grow-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-grow-rotate:hover, .hvr-grow-rotate:focus, .hvr-grow-rotate:active {\r\n  -webkit-transform: scale(1.1) rotate(4deg);\r\n  transform: scale(1.1) rotate(4deg);\n}\r\n\r\n/* Float */\n.hvr-float {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-float:hover, .hvr-float:focus, .hvr-float:active {\r\n  -webkit-transform: translateY(-8px);\r\n  transform: translateY(-8px);\n}\r\n\r\n/* Sink */\n.hvr-sink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sink:hover, .hvr-sink:focus, .hvr-sink:active {\r\n  -webkit-transform: translateY(8px);\r\n  transform: translateY(8px);\n}\r\n\r\n/* Bob */\n@-webkit-keyframes hvr-bob {\n0% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\n}\n50% {\r\n    -webkit-transform: translateY(-4px);\r\n    transform: translateY(-4px);\n}\n100% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\n}\n}\n@keyframes hvr-bob {\n0% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\n}\n50% {\r\n    -webkit-transform: translateY(-4px);\r\n    transform: translateY(-4px);\n}\n100% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\n}\n}\n@-webkit-keyframes hvr-bob-float {\n100% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\n}\n}\n@keyframes hvr-bob-float {\n100% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\n}\n}\n.hvr-bob {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {\r\n  -webkit-animation-name: hvr-bob-float, hvr-bob;\r\n  animation-name: hvr-bob-float, hvr-bob;\r\n  -webkit-animation-duration: .3s, 1.5s;\r\n  animation-duration: .3s, 1.5s;\r\n  -webkit-animation-delay: 0s, .3s;\r\n  animation-delay: 0s, .3s;\r\n  -webkit-animation-timing-function: ease-out, ease-in-out;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  -webkit-animation-iteration-count: 1, infinite;\r\n  animation-iteration-count: 1, infinite;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-direction: normal, alternate;\r\n  animation-direction: normal, alternate;\n}\r\n\r\n/* Hang */\n@-webkit-keyframes hvr-hang {\n0% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\n}\n50% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\n}\n100% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\n}\n}\n@keyframes hvr-hang {\n0% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\n}\n50% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\n}\n100% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\n}\n}\n@-webkit-keyframes hvr-hang-sink {\n100% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\n}\n}\n@keyframes hvr-hang-sink {\n100% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\n}\n}\n.hvr-hang {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-hang:hover, .hvr-hang:focus, .hvr-hang:active {\r\n  -webkit-animation-name: hvr-hang-sink, hvr-hang;\r\n  animation-name: hvr-hang-sink, hvr-hang;\r\n  -webkit-animation-duration: .3s, 1.5s;\r\n  animation-duration: .3s, 1.5s;\r\n  -webkit-animation-delay: 0s, .3s;\r\n  animation-delay: 0s, .3s;\r\n  -webkit-animation-timing-function: ease-out, ease-in-out;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  -webkit-animation-iteration-count: 1, infinite;\r\n  animation-iteration-count: 1, infinite;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-direction: normal, alternate;\r\n  animation-direction: normal, alternate;\n}\r\n\r\n/* Skew */\n.hvr-skew {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-skew:hover, .hvr-skew:focus, .hvr-skew:active {\r\n  -webkit-transform: skew(-10deg);\r\n  transform: skew(-10deg);\n}\r\n\r\n/* Skew Forward */\n.hvr-skew-forward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\n}\n.hvr-skew-forward:hover, .hvr-skew-forward:focus, .hvr-skew-forward:active {\r\n  -webkit-transform: skew(-10deg);\r\n  transform: skew(-10deg);\n}\r\n\r\n/* Skew Backward */\n.hvr-skew-backward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\n}\n.hvr-skew-backward:hover, .hvr-skew-backward:focus, .hvr-skew-backward:active {\r\n  -webkit-transform: skew(10deg);\r\n  transform: skew(10deg);\n}\r\n\r\n/* Wobble Vertical */\n@-webkit-keyframes hvr-wobble-vertical {\n16.65% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\n}\n33.3% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n49.95% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\n}\n66.6% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\n}\n83.25% {\r\n    -webkit-transform: translateY(1px);\r\n    transform: translateY(1px);\n}\n100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\n}\n}\n@keyframes hvr-wobble-vertical {\n16.65% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\n}\n33.3% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n49.95% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\n}\n66.6% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\n}\n83.25% {\r\n    -webkit-transform: translateY(1px);\r\n    transform: translateY(1px);\n}\n100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\n}\n}\n.hvr-wobble-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {\r\n  -webkit-animation-name: hvr-wobble-vertical;\r\n  animation-name: hvr-wobble-vertical;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble Horizontal */\n@-webkit-keyframes hvr-wobble-horizontal {\n16.65% {\r\n    -webkit-transform: translateX(8px);\r\n    transform: translateX(8px);\n}\n33.3% {\r\n    -webkit-transform: translateX(-6px);\r\n    transform: translateX(-6px);\n}\n49.95% {\r\n    -webkit-transform: translateX(4px);\r\n    transform: translateX(4px);\n}\n66.6% {\r\n    -webkit-transform: translateX(-2px);\r\n    transform: translateX(-2px);\n}\n83.25% {\r\n    -webkit-transform: translateX(1px);\r\n    transform: translateX(1px);\n}\n100% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\n}\n}\n@keyframes hvr-wobble-horizontal {\n16.65% {\r\n    -webkit-transform: translateX(8px);\r\n    transform: translateX(8px);\n}\n33.3% {\r\n    -webkit-transform: translateX(-6px);\r\n    transform: translateX(-6px);\n}\n49.95% {\r\n    -webkit-transform: translateX(4px);\r\n    transform: translateX(4px);\n}\n66.6% {\r\n    -webkit-transform: translateX(-2px);\r\n    transform: translateX(-2px);\n}\n83.25% {\r\n    -webkit-transform: translateX(1px);\r\n    transform: translateX(1px);\n}\n100% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\n}\n}\n.hvr-wobble-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active {\r\n  -webkit-animation-name: hvr-wobble-horizontal;\r\n  animation-name: hvr-wobble-horizontal;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble To Bottom Right */\n@-webkit-keyframes hvr-wobble-to-bottom-right {\n16.65% {\r\n    -webkit-transform: translate(8px, 8px);\r\n    transform: translate(8px, 8px);\n}\n33.3% {\r\n    -webkit-transform: translate(-6px, -6px);\r\n    transform: translate(-6px, -6px);\n}\n49.95% {\r\n    -webkit-transform: translate(4px, 4px);\r\n    transform: translate(4px, 4px);\n}\n66.6% {\r\n    -webkit-transform: translate(-2px, -2px);\r\n    transform: translate(-2px, -2px);\n}\n83.25% {\r\n    -webkit-transform: translate(1px, 1px);\r\n    transform: translate(1px, 1px);\n}\n100% {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\n}\n}\n@keyframes hvr-wobble-to-bottom-right {\n16.65% {\r\n    -webkit-transform: translate(8px, 8px);\r\n    transform: translate(8px, 8px);\n}\n33.3% {\r\n    -webkit-transform: translate(-6px, -6px);\r\n    transform: translate(-6px, -6px);\n}\n49.95% {\r\n    -webkit-transform: translate(4px, 4px);\r\n    transform: translate(4px, 4px);\n}\n66.6% {\r\n    -webkit-transform: translate(-2px, -2px);\r\n    transform: translate(-2px, -2px);\n}\n83.25% {\r\n    -webkit-transform: translate(1px, 1px);\r\n    transform: translate(1px, 1px);\n}\n100% {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\n}\n}\n.hvr-wobble-to-bottom-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-wobble-to-bottom-right:hover, .hvr-wobble-to-bottom-right:focus, .hvr-wobble-to-bottom-right:active {\r\n  -webkit-animation-name: hvr-wobble-to-bottom-right;\r\n  animation-name: hvr-wobble-to-bottom-right;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble To Top Right */\n@-webkit-keyframes hvr-wobble-to-top-right {\n16.65% {\r\n    -webkit-transform: translate(8px, -8px);\r\n    transform: translate(8px, -8px);\n}\n33.3% {\r\n    -webkit-transform: translate(-6px, 6px);\r\n    transform: translate(-6px, 6px);\n}\n49.95% {\r\n    -webkit-transform: translate(4px, -4px);\r\n    transform: translate(4px, -4px);\n}\n66.6% {\r\n    -webkit-transform: translate(-2px, 2px);\r\n    transform: translate(-2px, 2px);\n}\n83.25% {\r\n    -webkit-transform: translate(1px, -1px);\r\n    transform: translate(1px, -1px);\n}\n100% {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\n}\n}\n@keyframes hvr-wobble-to-top-right {\n16.65% {\r\n    -webkit-transform: translate(8px, -8px);\r\n    transform: translate(8px, -8px);\n}\n33.3% {\r\n    -webkit-transform: translate(-6px, 6px);\r\n    transform: translate(-6px, 6px);\n}\n49.95% {\r\n    -webkit-transform: translate(4px, -4px);\r\n    transform: translate(4px, -4px);\n}\n66.6% {\r\n    -webkit-transform: translate(-2px, 2px);\r\n    transform: translate(-2px, 2px);\n}\n83.25% {\r\n    -webkit-transform: translate(1px, -1px);\r\n    transform: translate(1px, -1px);\n}\n100% {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\n}\n}\n.hvr-wobble-to-top-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-wobble-to-top-right:hover, .hvr-wobble-to-top-right:focus, .hvr-wobble-to-top-right:active {\r\n  -webkit-animation-name: hvr-wobble-to-top-right;\r\n  animation-name: hvr-wobble-to-top-right;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble Top */\n@-webkit-keyframes hvr-wobble-top {\n16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\n}\n33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\n}\n49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\n}\n66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\n}\n83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\n}\n100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\n}\n}\n@keyframes hvr-wobble-top {\n16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\n}\n33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\n}\n49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\n}\n66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\n}\n83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\n}\n100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\n}\n}\n.hvr-wobble-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\n}\n.hvr-wobble-top:hover, .hvr-wobble-top:focus, .hvr-wobble-top:active {\r\n  -webkit-animation-name: hvr-wobble-top;\r\n  animation-name: hvr-wobble-top;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble Bottom */\n@-webkit-keyframes hvr-wobble-bottom {\n16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\n}\n33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\n}\n49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\n}\n66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\n}\n83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\n}\n100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\n}\n}\n@keyframes hvr-wobble-bottom {\n16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\n}\n33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\n}\n49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\n}\n66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\n}\n83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\n}\n100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\n}\n}\n.hvr-wobble-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transform-origin: 100% 0;\r\n  transform-origin: 100% 0;\n}\n.hvr-wobble-bottom:hover, .hvr-wobble-bottom:focus, .hvr-wobble-bottom:active {\r\n  -webkit-animation-name: hvr-wobble-bottom;\r\n  animation-name: hvr-wobble-bottom;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble Skew */\n@-webkit-keyframes hvr-wobble-skew {\n16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\n}\n33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\n}\n49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\n}\n66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\n}\n83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\n}\n100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\n}\n}\n@keyframes hvr-wobble-skew {\n16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\n}\n33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\n}\n49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\n}\n66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\n}\n83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\n}\n100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\n}\n}\n.hvr-wobble-skew {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-wobble-skew:hover, .hvr-wobble-skew:focus, .hvr-wobble-skew:active {\r\n  -webkit-animation-name: hvr-wobble-skew;\r\n  animation-name: hvr-wobble-skew;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Buzz */\n@-webkit-keyframes hvr-buzz {\n50% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n100% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n}\n@keyframes hvr-buzz {\n50% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n100% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n}\n.hvr-buzz {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-buzz:hover, .hvr-buzz:focus, .hvr-buzz:active {\r\n  -webkit-animation-name: hvr-buzz;\r\n  animation-name: hvr-buzz;\r\n  -webkit-animation-duration: 0.15s;\r\n  animation-duration: 0.15s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\n}\r\n\r\n/* Buzz Out */\n@-webkit-keyframes hvr-buzz-out {\n10% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n20% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n30% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n40% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n50% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\n}\n60% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n70% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\n}\n80% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n90% {\r\n    -webkit-transform: translateX(1px) rotate(0);\r\n    transform: translateX(1px) rotate(0);\n}\n100% {\r\n    -webkit-transform: translateX(-1px) rotate(0);\r\n    transform: translateX(-1px) rotate(0);\n}\n}\n@keyframes hvr-buzz-out {\n10% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n20% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n30% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n40% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n50% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\n}\n60% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n70% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\n}\n80% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n90% {\r\n    -webkit-transform: translateX(1px) rotate(0);\r\n    transform: translateX(1px) rotate(0);\n}\n100% {\r\n    -webkit-transform: translateX(-1px) rotate(0);\r\n    transform: translateX(-1px) rotate(0);\n}\n}\n.hvr-buzz-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\n}\n.hvr-buzz-out:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active {\r\n  -webkit-animation-name: hvr-buzz-out;\r\n  animation-name: hvr-buzz-out;\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Forward */\n.hvr-forward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-forward:hover, .hvr-forward:focus, .hvr-forward:active {\r\n  -webkit-transform: translateX(8px);\r\n  transform: translateX(8px);\n}\r\n\r\n/* Backward */\n.hvr-backward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-backward:hover, .hvr-backward:focus, .hvr-backward:active {\r\n  -webkit-transform: translateX(-8px);\r\n  transform: translateX(-8px);\n}\r\n\r\n/* BACKGROUND TRANSITIONS */\r\n/* Fade */\n.hvr-fade {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  overflow: hidden;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: color, background-color;\r\n  transition-property: color, background-color;\n}\n.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {\r\n  background-color: #2098D1;\r\n  color: white;\n}\r\n\r\n/* Back Pulse */\n@-webkit-keyframes hvr-back-pulse {\n50% {\r\n    background-color: rgba(32, 152, 209, 0.75);\n}\n}\n@keyframes hvr-back-pulse {\n50% {\r\n    background-color: rgba(32, 152, 209, 0.75);\n}\n}\n.hvr-back-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  overflow: hidden;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-property: color, background-color;\r\n  transition-property: color, background-color;\n}\n.hvr-back-pulse:hover, .hvr-back-pulse:focus, .hvr-back-pulse:active {\r\n  -webkit-animation-name: hvr-back-pulse;\r\n  animation-name: hvr-back-pulse;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-delay: 0.5s;\r\n  animation-delay: 0.5s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  background-color: #2098D1;\r\n  background-color: #2098d1;\r\n  color: white;\n}\r\n\r\n/* Sweep To Right */\n.hvr-sweep-to-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 0 50%;\r\n  transform-origin: 0 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {\r\n  color: white;\n}\n.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\n}\r\n\r\n/* Sweep To Left */\n.hvr-sweep-to-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 100% 50%;\r\n  transform-origin: 100% 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-left:hover, .hvr-sweep-to-left:focus, .hvr-sweep-to-left:active {\r\n  color: white;\n}\n.hvr-sweep-to-left:hover:before, .hvr-sweep-to-left:focus:before, .hvr-sweep-to-left:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\n}\r\n\r\n/* Sweep To Bottom */\n.hvr-sweep-to-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-bottom:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50% 0;\r\n  transform-origin: 50% 0;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-bottom:hover, .hvr-sweep-to-bottom:focus, .hvr-sweep-to-bottom:active {\r\n  color: white;\n}\n.hvr-sweep-to-bottom:hover:before, .hvr-sweep-to-bottom:focus:before, .hvr-sweep-to-bottom:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\n}\r\n\r\n/* Sweep To Top */\n.hvr-sweep-to-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-top:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50% 100%;\r\n  transform-origin: 50% 100%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-top:hover, .hvr-sweep-to-top:focus, .hvr-sweep-to-top:active {\r\n  color: white;\n}\n.hvr-sweep-to-top:hover:before, .hvr-sweep-to-top:focus:before, .hvr-sweep-to-top:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\n}\r\n\r\n/* Bounce To Right */\n.hvr-bounce-to-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 0 50%;\r\n  transform-origin: 0 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-right:hover, .hvr-bounce-to-right:focus, .hvr-bounce-to-right:active {\r\n  color: white;\n}\n.hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Bounce To Left */\n.hvr-bounce-to-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 100% 50%;\r\n  transform-origin: 100% 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-left:hover, .hvr-bounce-to-left:focus, .hvr-bounce-to-left:active {\r\n  color: white;\n}\n.hvr-bounce-to-left:hover:before, .hvr-bounce-to-left:focus:before, .hvr-bounce-to-left:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Bounce To Bottom */\n.hvr-bounce-to-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-bottom:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50% 0;\r\n  transform-origin: 50% 0;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-bottom:hover, .hvr-bounce-to-bottom:focus, .hvr-bounce-to-bottom:active {\r\n  color: white;\n}\n.hvr-bounce-to-bottom:hover:before, .hvr-bounce-to-bottom:focus:before, .hvr-bounce-to-bottom:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\r\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Bounce To Top */\n.hvr-bounce-to-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-top:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50% 100%;\r\n  transform-origin: 50% 100%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-top:hover, .hvr-bounce-to-top:focus, .hvr-bounce-to-top:active {\r\n  color: white;\n}\n.hvr-bounce-to-top:hover:before, .hvr-bounce-to-top:focus:before, .hvr-bounce-to-top:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\r\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Radial Out */\n.hvr-radial-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\r\n  background: #e1e1e1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-radial-out:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  border-radius: 100%;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {\r\n  color: white;\n}\n.hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before {\r\n  -webkit-transform: scale(2);\r\n  transform: scale(2);\n}\r\n\r\n/* Radial In */\n.hvr-radial-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\r\n  background: #2098D1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-radial-in:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #e1e1e1;\r\n  border-radius: 100%;\r\n  -webkit-transform: scale(2);\r\n  transform: scale(2);\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-radial-in:hover, .hvr-radial-in:focus, .hvr-radial-in:active {\r\n  color: white;\n}\n.hvr-radial-in:hover:before, .hvr-radial-in:focus:before, .hvr-radial-in:active:before {\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\n}\r\n\r\n/* Rectangle In */\n.hvr-rectangle-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  background: #2098D1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-rectangle-in:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #e1e1e1;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-rectangle-in:hover, .hvr-rectangle-in:focus, .hvr-rectangle-in:active {\r\n  color: white;\n}\n.hvr-rectangle-in:hover:before, .hvr-rectangle-in:focus:before, .hvr-rectangle-in:active:before {\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\n}\r\n\r\n/* Rectangle Out */\n.hvr-rectangle-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  background: #e1e1e1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-rectangle-out:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-rectangle-out:hover, .hvr-rectangle-out:focus, .hvr-rectangle-out:active {\r\n  color: white;\n}\n.hvr-rectangle-out:hover:before, .hvr-rectangle-out:focus:before, .hvr-rectangle-out:active:before {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\n}\r\n\r\n/* Shutter In Horizontal */\n.hvr-shutter-in-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  background: #2098D1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-shutter-in-horizontal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #e1e1e1;\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-in-horizontal:hover, .hvr-shutter-in-horizontal:focus, .hvr-shutter-in-horizontal:active {\r\n  color: white;\n}\n.hvr-shutter-in-horizontal:hover:before, .hvr-shutter-in-horizontal:focus:before, .hvr-shutter-in-horizontal:active:before {\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\n}\r\n\r\n/* Shutter Out Horizontal */\n.hvr-shutter-out-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  background: #e1e1e1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-shutter-out-horizontal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {\r\n  color: white;\n}\n.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\n}\r\n\r\n/* Shutter In Vertical */\n.hvr-shutter-in-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  background: #2098D1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-shutter-in-vertical:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #e1e1e1;\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-in-vertical:hover, .hvr-shutter-in-vertical:focus, .hvr-shutter-in-vertical:active {\r\n  color: white;\n}\n.hvr-shutter-in-vertical:hover:before, .hvr-shutter-in-vertical:focus:before, .hvr-shutter-in-vertical:active:before {\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\n}\r\n\r\n/* Shutter Out Vertical */\n.hvr-shutter-out-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  background: #e1e1e1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-shutter-out-vertical:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #2098D1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-out-vertical:hover, .hvr-shutter-out-vertical:focus, .hvr-shutter-out-vertical:active {\r\n  color: white;\n}\n.hvr-shutter-out-vertical:hover:before, .hvr-shutter-out-vertical:focus:before, .hvr-shutter-out-vertical:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\n}\r\n\r\n/* BORDER TRANSITIONS */\r\n/* Border Fade */\n.hvr-border-fade {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  -webkit-transition-property: -webkit-box-shadow;\r\n  transition-property: -webkit-box-shadow;\r\n  transition-property: box-shadow;\r\n  transition-property: box-shadow, -webkit-box-shadow;\r\n  -webkit-box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px transparent;\r\n          box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px transparent;\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-border-fade:hover, .hvr-border-fade:focus, .hvr-border-fade:active {\r\n  -webkit-box-shadow: inset 0 0 0 4px #2098D1, 0 0 1px transparent;\r\n          box-shadow: inset 0 0 0 4px #2098D1, 0 0 1px transparent;\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\r\n\r\n/* Hollow */\n.hvr-hollow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: background;\r\n  transition-property: background;\r\n  -webkit-box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px transparent;\r\n          box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px transparent;\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-hollow:hover, .hvr-hollow:focus, .hvr-hollow:active {\r\n  background: none;\n}\r\n\r\n/* Trim */\n.hvr-trim {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-trim:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: white solid 4px;\r\n  top: 4px;\r\n  left: 4px;\r\n  right: 4px;\r\n  bottom: 4px;\r\n  opacity: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: opacity;\r\n  transition-property: opacity;\n}\n.hvr-trim:hover:before, .hvr-trim:focus:before, .hvr-trim:active:before {\r\n  opacity: 1;\n}\r\n\r\n/* Ripple Out */\n@-webkit-keyframes hvr-ripple-out {\n100% {\r\n    top: -12px;\r\n    right: -12px;\r\n    bottom: -12px;\r\n    left: -12px;\r\n    opacity: 0;\n}\n}\n@keyframes hvr-ripple-out {\n100% {\r\n    top: -12px;\r\n    right: -12px;\r\n    bottom: -12px;\r\n    left: -12px;\r\n    opacity: 0;\n}\n}\n.hvr-ripple-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-ripple-out:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 6px;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\n}\n.hvr-ripple-out:hover:before, .hvr-ripple-out:focus:before, .hvr-ripple-out:active:before {\r\n  -webkit-animation-name: hvr-ripple-out;\r\n  animation-name: hvr-ripple-out;\n}\r\n\r\n/* Ripple In */\n@-webkit-keyframes hvr-ripple-in {\n100% {\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    opacity: 1;\n}\n}\n@keyframes hvr-ripple-in {\n100% {\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    opacity: 1;\n}\n}\n.hvr-ripple-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-ripple-in:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: -12px;\r\n  right: -12px;\r\n  bottom: -12px;\r\n  left: -12px;\r\n  opacity: 0;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\n}\n.hvr-ripple-in:hover:before, .hvr-ripple-in:focus:before, .hvr-ripple-in:active:before {\r\n  -webkit-animation-name: hvr-ripple-in;\r\n  animation-name: hvr-ripple-in;\n}\r\n\r\n/* Outline Out */\n.hvr-outline-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-outline-out:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: top, right, bottom, left;\r\n  transition-property: top, right, bottom, left;\n}\n.hvr-outline-out:hover:before, .hvr-outline-out:focus:before, .hvr-outline-out:active:before {\r\n  top: -8px;\r\n  right: -8px;\r\n  bottom: -8px;\r\n  left: -8px;\n}\r\n\r\n/* Outline In */\n.hvr-outline-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-outline-in:before {\r\n  pointer-events: none;\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: -16px;\r\n  right: -16px;\r\n  bottom: -16px;\r\n  left: -16px;\r\n  opacity: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: top, right, bottom, left;\r\n  transition-property: top, right, bottom, left;\n}\n.hvr-outline-in:hover:before, .hvr-outline-in:focus:before, .hvr-outline-in:active:before {\r\n  top: -8px;\r\n  right: -8px;\r\n  bottom: -8px;\r\n  left: -8px;\r\n  opacity: 1;\n}\r\n\r\n/* Round Corners */\n.hvr-round-corners {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: border-radius;\r\n  transition-property: border-radius;\n}\n.hvr-round-corners:hover, .hvr-round-corners:focus, .hvr-round-corners:active {\r\n  border-radius: 1em;\n}\r\n\r\n/* Underline From Left */\n.hvr-underline-from-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-underline-from-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 100%;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  -webkit-transition-property: right;\r\n  transition-property: right;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {\r\n  right: 0;\n}\r\n\r\n/* Underline From Center */\n.hvr-underline-from-center {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-underline-from-center:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 50%;\r\n  right: 50%;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  -webkit-transition-property: left, right;\r\n  transition-property: left, right;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {\r\n  left: 0;\r\n  right: 0;\n}\r\n\r\n/* Underline From Right */\n.hvr-underline-from-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-underline-from-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 100%;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  -webkit-transition-property: left;\r\n  transition-property: left;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-right:hover:before, .hvr-underline-from-right:focus:before, .hvr-underline-from-right:active:before {\r\n  left: 0;\n}\r\n\r\n/* Overline From Left */\n.hvr-overline-from-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-overline-from-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 100%;\r\n  top: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  -webkit-transition-property: right;\r\n  transition-property: right;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-left:hover:before, .hvr-overline-from-left:focus:before, .hvr-overline-from-left:active:before {\r\n  right: 0;\n}\r\n\r\n/* Overline From Center */\n.hvr-overline-from-center {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-overline-from-center:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 50%;\r\n  right: 50%;\r\n  top: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  -webkit-transition-property: left, right;\r\n  transition-property: left, right;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {\r\n  left: 0;\r\n  right: 0;\n}\r\n\r\n/* Overline From Right */\n.hvr-overline-from-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-overline-from-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 100%;\r\n  right: 0;\r\n  top: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  -webkit-transition-property: left;\r\n  transition-property: left;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-right:hover:before, .hvr-overline-from-right:focus:before, .hvr-overline-from-right:active:before {\r\n  left: 0;\n}\r\n\r\n/* Reveal */\n.hvr-reveal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-reveal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-color: #2098D1;\r\n  border-style: solid;\r\n  border-width: 0;\r\n  -webkit-transition-property: border-width;\r\n  transition-property: border-width;\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-reveal:hover:before, .hvr-reveal:focus:before, .hvr-reveal:active:before {\r\n  -webkit-transform: translateY(0);\r\n  transform: translateY(0);\r\n  border-width: 4px;\n}\r\n\r\n/* Underline Reveal */\n.hvr-underline-reveal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-underline-reveal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  -webkit-transform: translateY(4px);\r\n  transform: translateY(4px);\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-underline-reveal:hover:before, .hvr-underline-reveal:focus:before, .hvr-underline-reveal:active:before {\r\n  -webkit-transform: translateY(0);\r\n  transform: translateY(0);\n}\r\n\r\n/* Overline Reveal */\n.hvr-overline-reveal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-overline-reveal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  -webkit-transform: translateY(-4px);\r\n  transform: translateY(-4px);\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-overline-reveal:hover:before, .hvr-overline-reveal:focus:before, .hvr-overline-reveal:active:before {\r\n  -webkit-transform: translateY(0);\r\n  transform: translateY(0);\n}\r\n\r\n/* SHADOW/GLOW TRANSITIONS */\r\n/* Glow */\n.hvr-glow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  -webkit-transition-property: -webkit-box-shadow;\r\n  transition-property: -webkit-box-shadow;\r\n  transition-property: box-shadow;\r\n  transition-property: box-shadow, -webkit-box-shadow;\n}\n.hvr-glow:hover, .hvr-glow:focus, .hvr-glow:active {\r\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\r\n          box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n}\r\n\r\n/* Shadow */\n.hvr-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  -webkit-transition-property: -webkit-box-shadow;\r\n  transition-property: -webkit-box-shadow;\r\n  transition-property: box-shadow;\r\n  transition-property: box-shadow, -webkit-box-shadow;\n}\n.hvr-shadow:hover, .hvr-shadow:focus, .hvr-shadow:active {\r\n  -webkit-box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\r\n          box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\n}\r\n\r\n/* Grow Shadow */\n.hvr-grow-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow, transform;\r\n  -webkit-transition-property: -webkit-box-shadow, -webkit-transform;\r\n  transition-property: -webkit-box-shadow, -webkit-transform;\r\n  transition-property: box-shadow, transform;\r\n  transition-property: box-shadow, transform, -webkit-box-shadow, -webkit-transform;\n}\n.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {\r\n  -webkit-box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\r\n          box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\n}\r\n\r\n/* Box Shadow Outset */\n.hvr-box-shadow-outset {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  -webkit-transition-property: -webkit-box-shadow;\r\n  transition-property: -webkit-box-shadow;\r\n  transition-property: box-shadow;\r\n  transition-property: box-shadow, -webkit-box-shadow;\n}\n.hvr-box-shadow-outset:hover, .hvr-box-shadow-outset:focus, .hvr-box-shadow-outset:active {\r\n  -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);\r\n          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);\n}\r\n\r\n/* Box Shadow Inset */\n.hvr-box-shadow-inset {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  -webkit-transition-property: -webkit-box-shadow;\r\n  transition-property: -webkit-box-shadow;\r\n  transition-property: box-shadow;\r\n  transition-property: box-shadow, -webkit-box-shadow;\r\n  -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px transparent;\r\n          box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px transparent;\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-box-shadow-inset:hover, .hvr-box-shadow-inset:focus, .hvr-box-shadow-inset:active {\r\n  -webkit-box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px transparent;\r\n          box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px transparent;\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\r\n\r\n/* Float Shadow */\n.hvr-float-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-float-shadow:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  top: 100%;\r\n  left: 5%;\r\n  height: 10px;\r\n  width: 90%;\r\n  opacity: 0;\r\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, transparent 80%);\r\n  /* W3C */\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform, opacity;\r\n  -webkit-transition-property: opacity, -webkit-transform;\r\n  transition-property: opacity, -webkit-transform;\r\n  transition-property: transform, opacity;\r\n  transition-property: transform, opacity, -webkit-transform;\n}\n.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {\r\n  -webkit-transform: translateY(-5px);\r\n  transform: translateY(-5px);\r\n  /* move the element up by 5px */\n}\n.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(5px);\r\n  transform: translateY(5px);\r\n  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */\n}\r\n\r\n/* Shadow Radial */\n.hvr-shadow-radial {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-shadow-radial:before, .hvr-shadow-radial:after {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  left: 0;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  background-repeat: no-repeat;\r\n  height: 5px;\r\n  opacity: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: opacity;\r\n  transition-property: opacity;\n}\n.hvr-shadow-radial:before {\r\n  bottom: 100%;\r\n  background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, transparent 80%);\n}\n.hvr-shadow-radial:after {\r\n  top: 100%;\r\n  background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, transparent 80%);\n}\n.hvr-shadow-radial:hover:before, .hvr-shadow-radial:focus:before, .hvr-shadow-radial:active:before, .hvr-shadow-radial:hover:after, .hvr-shadow-radial:focus:after, .hvr-shadow-radial:active:after {\r\n  opacity: 1;\n}\r\n\r\n/* SPEECH BUBBLES */\r\n/* Bubble Top */\n.hvr-bubble-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-bubble-top:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  left: calc(50% - 10px);\r\n  top: 0;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #e1e1e1 transparent;\n}\n.hvr-bubble-top:hover:before, .hvr-bubble-top:focus:before, .hvr-bubble-top:active:before {\r\n  -webkit-transform: translateY(-10px);\r\n  transform: translateY(-10px);\n}\r\n\r\n/* Bubble Right */\n.hvr-bubble-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-bubble-right:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  top: calc(50% - 10px);\r\n  right: 0;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #e1e1e1;\n}\n.hvr-bubble-right:hover:before, .hvr-bubble-right:focus:before, .hvr-bubble-right:active:before {\r\n  -webkit-transform: translateX(10px);\r\n  transform: translateX(10px);\n}\r\n\r\n/* Bubble Bottom */\n.hvr-bubble-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-bubble-bottom:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  left: calc(50% - 10px);\r\n  bottom: 0;\r\n  border-width: 10px 10px 0 10px;\r\n  border-color: #e1e1e1 transparent transparent transparent;\n}\n.hvr-bubble-bottom:hover:before, .hvr-bubble-bottom:focus:before, .hvr-bubble-bottom:active:before {\r\n  -webkit-transform: translateY(10px);\r\n  transform: translateY(10px);\n}\r\n\r\n/* Bubble Left */\n.hvr-bubble-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-bubble-left:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  top: calc(50% - 10px);\r\n  left: 0;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent #e1e1e1 transparent transparent;\n}\n.hvr-bubble-left:hover:before, .hvr-bubble-left:focus:before, .hvr-bubble-left:active:before {\r\n  -webkit-transform: translateX(-10px);\r\n  transform: translateX(-10px);\n}\r\n\r\n/* Bubble Float Top */\n.hvr-bubble-float-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-top:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  left: calc(50% - 10px);\r\n  top: 0;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #e1e1e1 transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-top:hover, .hvr-bubble-float-top:focus, .hvr-bubble-float-top:active {\r\n  -webkit-transform: translateY(10px);\r\n  transform: translateY(10px);\n}\n.hvr-bubble-float-top:hover:before, .hvr-bubble-float-top:focus:before, .hvr-bubble-float-top:active:before {\r\n  -webkit-transform: translateY(-10px);\r\n  transform: translateY(-10px);\n}\r\n\r\n/* Bubble Float Right */\n.hvr-bubble-float-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-right:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: calc(50% - 10px);\r\n  right: 0;\r\n  content: '';\r\n  border-style: solid;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #e1e1e1;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-right:hover, .hvr-bubble-float-right:focus, .hvr-bubble-float-right:active {\r\n  -webkit-transform: translateX(-10px);\r\n  transform: translateX(-10px);\n}\n.hvr-bubble-float-right:hover:before, .hvr-bubble-float-right:focus:before, .hvr-bubble-float-right:active:before {\r\n  -webkit-transform: translateX(10px);\r\n  transform: translateX(10px);\n}\r\n\r\n/* Bubble Float Bottom */\n.hvr-bubble-float-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-bottom:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  left: calc(50% - 10px);\r\n  bottom: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 0 10px;\r\n  border-color: #e1e1e1 transparent transparent transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-bottom:hover, .hvr-bubble-float-bottom:focus, .hvr-bubble-float-bottom:active {\r\n  -webkit-transform: translateY(-10px);\r\n  transform: translateY(-10px);\n}\n.hvr-bubble-float-bottom:hover:before, .hvr-bubble-float-bottom:focus:before, .hvr-bubble-float-bottom:active:before {\r\n  -webkit-transform: translateY(10px);\r\n  transform: translateY(10px);\n}\r\n\r\n/* Bubble Float Left */\n.hvr-bubble-float-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-left:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  top: calc(50% - 10px);\r\n  left: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent #e1e1e1 transparent transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-left:hover, .hvr-bubble-float-left:focus, .hvr-bubble-float-left:active {\r\n  -webkit-transform: translateX(10px);\r\n  transform: translateX(10px);\n}\n.hvr-bubble-float-left:hover:before, .hvr-bubble-float-left:focus:before, .hvr-bubble-float-left:active:before {\r\n  -webkit-transform: translateX(-10px);\r\n  transform: translateX(-10px);\n}\r\n\r\n/* ICONS */\r\n/* Icon Back */\n.hvr-icon-back {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-left: 2.2em;\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\n}\n.hvr-icon-back:before {\r\n  content: \"\\F137\";\r\n  position: absolute;\r\n  left: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-back:hover:before, .hvr-icon-back:focus:before, .hvr-icon-back:active:before {\r\n  -webkit-transform: translateX(-4px);\r\n  transform: translateX(-4px);\n}\r\n\r\n/* Icon Forward */\n.hvr-icon-forward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\n}\n.hvr-icon-forward:before {\r\n  content: \"\\F138\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-forward:hover:before, .hvr-icon-forward:focus:before, .hvr-icon-forward:active:before {\r\n  -webkit-transform: translateX(4px);\r\n  transform: translateX(4px);\n}\r\n\r\n/* Icon Down */\n@-webkit-keyframes hvr-icon-down {\n0%,\r\n\t50%,\r\n\t100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\n}\n25%,\r\n\t75% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n}\n@keyframes hvr-icon-down {\n0%,\r\n\t50%,\r\n\t100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\n}\n25%,\r\n\t75% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n}\r\n/* Icon Down */\n.hvr-icon-down {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-down:before {\r\n  content: \"\\F01A\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-down:hover:before, .hvr-icon-down:focus:before, .hvr-icon-down:active:before {\r\n  -webkit-animation-name: hvr-icon-down;\r\n  animation-name: hvr-icon-down;\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\n}\r\n\r\n/* Icon Up */\n@-webkit-keyframes hvr-icon-up {\n0%,\r\n\t50%,\r\n\t100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\n}\n25%,\r\n\t75% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n}\n@keyframes hvr-icon-up {\n0%,\r\n\t50%,\r\n\t100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\n}\n25%,\r\n\t75% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n}\r\n/* Icon Up */\n.hvr-icon-up {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-up:before {\r\n  content: \"\\F01B\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-up:hover:before, .hvr-icon-up:focus:before, .hvr-icon-up:active:before {\r\n  -webkit-animation-name: hvr-icon-up;\r\n  animation-name: hvr-icon-up;\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\n}\r\n\r\n/* Icon Spin */\n.hvr-icon-spin {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-spin:before {\r\n  content: \"\\F021\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transition-duration: 1s;\r\n  transition-duration: 1s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-in-out;\r\n  transition-timing-function: ease-in-out;\n}\n.hvr-icon-spin:hover:before, .hvr-icon-spin:focus:before, .hvr-icon-spin:active:before {\r\n  -webkit-transform: rotate(360deg);\r\n  transform: rotate(360deg);\n}\r\n\r\n/* Icon Drop */\n@-webkit-keyframes hvr-icon-drop {\n0% {\r\n    opacity: 0;\n}\n50% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-100%);\r\n    transform: translateY(-100%);\n}\n51%,\r\n\t100% {\r\n    opacity: 1;\n}\n}\n@keyframes hvr-icon-drop {\n0% {\r\n    opacity: 0;\n}\n50% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-100%);\r\n    transform: translateY(-100%);\n}\n51%,\r\n\t100% {\r\n    opacity: 1;\n}\n}\r\n/* Icon Drop */\n.hvr-icon-drop {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-drop:before {\r\n  content: \"\\F041\";\r\n  position: absolute;\r\n  right: 1em;\r\n  opacity: 1;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-drop:hover:before, .hvr-icon-drop:focus:before, .hvr-icon-drop:active:before {\r\n  opacity: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-animation-name: hvr-icon-drop;\r\n  animation-name: hvr-icon-drop;\r\n  -webkit-animation-duration: 0.5s;\r\n  animation-duration: 0.5s;\r\n  -webkit-animation-delay: 0.3s;\r\n  animation-delay: 0.3s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Icon Fade */\n.hvr-icon-fade {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-fade:before {\r\n  content: \"\\F00C\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\n}\n.hvr-icon-fade:hover:before, .hvr-icon-fade:focus:before, .hvr-icon-fade:active:before {\r\n  color: #0F9E5E;\n}\r\n\r\n/* Icon Float Away */\n@-webkit-keyframes hvr-icon-float-away {\n0% {\r\n    opacity: 1;\n}\n100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-1em);\r\n    transform: translateY(-1em);\n}\n}\n@keyframes hvr-icon-float-away {\n0% {\r\n    opacity: 1;\n}\n100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-1em);\r\n    transform: translateY(-1em);\n}\n}\r\n/* Icon Float Away */\n.hvr-icon-float-away {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-float-away:before, .hvr-icon-float-away:after {\r\n  content: \"\\F055\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\n}\n.hvr-icon-float-away:after {\r\n  opacity: 0;\r\n  -webkit-animation-duration: 0.5s;\r\n  animation-duration: 0.5s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\n}\n.hvr-icon-float-away:hover:after, .hvr-icon-float-away:focus:after, .hvr-icon-float-away:active:after {\r\n  -webkit-animation-name: hvr-icon-float-away;\r\n  animation-name: hvr-icon-float-away;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\n}\r\n\r\n/* Icon Sink Away */\n@-webkit-keyframes hvr-icon-sink-away {\n0% {\r\n    opacity: 1;\n}\n100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(1em);\r\n    transform: translateY(1em);\n}\n}\n@keyframes hvr-icon-sink-away {\n0% {\r\n    opacity: 1;\n}\n100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(1em);\r\n    transform: translateY(1em);\n}\n}\r\n/* Icon Sink Away */\n.hvr-icon-sink-away {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-sink-away:before, .hvr-icon-sink-away:after {\r\n  content: \"\\F056\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-sink-away:after {\r\n  opacity: 0;\r\n  -webkit-animation-duration: 0.5s;\r\n  animation-duration: 0.5s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\n}\n.hvr-icon-sink-away:hover:after, .hvr-icon-sink-away:focus:after, .hvr-icon-sink-away:active:after {\r\n  -webkit-animation-name: hvr-icon-sink-away;\r\n  animation-name: hvr-icon-sink-away;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\n}\r\n\r\n/* Icon Grow */\n.hvr-icon-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-grow:before {\r\n  content: \"\\F118\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-grow:hover:before, .hvr-icon-grow:focus:before, .hvr-icon-grow:active:before {\r\n  -webkit-transform: scale(1.3) translateZ(0);\r\n  transform: scale(1.3) translateZ(0);\n}\r\n\r\n/* Icon Shrink */\n.hvr-icon-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-shrink:before {\r\n  content: \"\\F119\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-shrink:hover:before, .hvr-icon-shrink:focus:before, .hvr-icon-shrink:active:before {\r\n  -webkit-transform: scale(0.8);\r\n  transform: scale(0.8);\n}\r\n\r\n/* Icon Pulse */\n@-webkit-keyframes hvr-icon-pulse {\n25% {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\n}\n75% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\n}\n}\n@keyframes hvr-icon-pulse {\n25% {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\n}\n75% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\n}\n}\n.hvr-icon-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-pulse:before {\r\n  content: \"\\F015\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse:hover:before, .hvr-icon-pulse:focus:before, .hvr-icon-pulse:active:before {\r\n  -webkit-animation-name: hvr-icon-pulse;\r\n  animation-name: hvr-icon-pulse;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\n}\r\n\r\n/* Icon Pulse Grow */\n@-webkit-keyframes hvr-icon-pulse-grow {\nto {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\n}\n}\n@keyframes hvr-icon-pulse-grow {\nto {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\n}\n}\n.hvr-icon-pulse-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-pulse-grow:before {\r\n  content: \"\\F015\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse-grow:hover:before, .hvr-icon-pulse-grow:focus:before, .hvr-icon-pulse-grow:active:before {\r\n  -webkit-animation-name: hvr-icon-pulse-grow;\r\n  animation-name: hvr-icon-pulse-grow;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n  animation-direction: alternate;\n}\r\n\r\n/* Icon Pulse Shrink */\n@-webkit-keyframes hvr-icon-pulse-shrink {\nto {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\n}\n}\n@keyframes hvr-icon-pulse-shrink {\nto {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\n}\n}\n.hvr-icon-pulse-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\n}\n.hvr-icon-pulse-shrink:before {\r\n  content: \"\\F015\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse-shrink:hover:before, .hvr-icon-pulse-shrink:focus:before, .hvr-icon-pulse-shrink:active:before {\r\n  -webkit-animation-name: hvr-icon-pulse-shrink;\r\n  animation-name: hvr-icon-pulse-shrink;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n  animation-direction: alternate;\n}\r\n\r\n/* Icon Push */\n@-webkit-keyframes hvr-icon-push {\n50% {\r\n    -webkit-transform: scale(0.5);\r\n    transform: scale(0.5);\n}\n}\n@keyframes hvr-icon-push {\n50% {\r\n    -webkit-transform: scale(0.5);\r\n    transform: scale(0.5);\n}\n}\n.hvr-icon-push {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-push:before {\r\n  content: \"\\F006\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-push:hover:before, .hvr-icon-push:focus:before, .hvr-icon-push:active:before {\r\n  -webkit-animation-name: hvr-icon-push;\r\n  animation-name: hvr-icon-push;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Icon Pop */\n@-webkit-keyframes hvr-icon-pop {\n50% {\r\n    -webkit-transform: scale(1.5);\r\n    transform: scale(1.5);\n}\n}\n@keyframes hvr-icon-pop {\n50% {\r\n    -webkit-transform: scale(1.5);\r\n    transform: scale(1.5);\n}\n}\n.hvr-icon-pop {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-pop:before {\r\n  content: \"\\F005\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pop:hover:before, .hvr-icon-pop:focus:before, .hvr-icon-pop:active:before {\r\n  -webkit-animation-name: hvr-icon-pop;\r\n  animation-name: hvr-icon-pop;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Icon Bounce */\n.hvr-icon-bounce {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-bounce:before {\r\n  content: \"\\F087\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-bounce:hover:before, .hvr-icon-bounce:focus:before, .hvr-icon-bounce:active:before {\r\n  -webkit-transform: scale(1.5);\r\n  transform: scale(1.5);\r\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\r\n\r\n/* Icon Rotate */\n.hvr-icon-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-rotate:before {\r\n  content: \"\\F0C6\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-rotate:hover:before, .hvr-icon-rotate:focus:before, .hvr-icon-rotate:active:before {\r\n  -webkit-transform: rotate(20deg);\r\n  transform: rotate(20deg);\n}\r\n\r\n/* Icon Grow Rotate */\n.hvr-icon-grow-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-grow-rotate:before {\r\n  content: \"\\F095\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-grow-rotate:hover:before, .hvr-icon-grow-rotate:focus:before, .hvr-icon-grow-rotate:active:before {\r\n  -webkit-transform: scale(1.5) rotate(12deg);\r\n  transform: scale(1.5) rotate(12deg);\n}\r\n\r\n/* Icon Float */\n.hvr-icon-float {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-float:before {\r\n  content: \"\\F01B\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-float:hover:before, .hvr-icon-float:focus:before, .hvr-icon-float:active:before {\r\n  -webkit-transform: translateY(-4px);\r\n  transform: translateY(-4px);\n}\r\n\r\n/* Icon Sink */\n.hvr-icon-sink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-sink:before {\r\n  content: \"\\F01A\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-sink:hover:before, .hvr-icon-sink:focus:before, .hvr-icon-sink:active:before {\r\n  -webkit-transform: translateY(4px);\r\n  transform: translateY(4px);\n}\r\n\r\n/* Icon Bob */\n@-webkit-keyframes hvr-icon-bob {\n0% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n50% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\n}\n100% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n}\n@keyframes hvr-icon-bob {\n0% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n50% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\n}\n100% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n}\n@-webkit-keyframes hvr-icon-bob-float {\n100% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n}\n@keyframes hvr-icon-bob-float {\n100% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\n}\n}\n.hvr-icon-bob {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-bob:before {\r\n  content: \"\\F077\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-bob:hover:before, .hvr-icon-bob:focus:before, .hvr-icon-bob:active:before {\r\n  -webkit-animation-name: hvr-icon-bob-float, hvr-icon-bob;\r\n  animation-name: hvr-icon-bob-float, hvr-icon-bob;\r\n  -webkit-animation-duration: .3s, 1.5s;\r\n  animation-duration: .3s, 1.5s;\r\n  -webkit-animation-delay: 0s, .3s;\r\n  animation-delay: 0s, .3s;\r\n  -webkit-animation-timing-function: ease-out, ease-in-out;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  -webkit-animation-iteration-count: 1, infinite;\r\n  animation-iteration-count: 1, infinite;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-direction: normal, alternate;\r\n  animation-direction: normal, alternate;\n}\r\n\r\n/* Icon Hang */\n@-webkit-keyframes hvr-icon-hang {\n0% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n50% {\r\n    -webkit-transform: translateY(2px);\r\n    transform: translateY(2px);\n}\n100% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n}\n@keyframes hvr-icon-hang {\n0% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n50% {\r\n    -webkit-transform: translateY(2px);\r\n    transform: translateY(2px);\n}\n100% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n}\n@-webkit-keyframes hvr-icon-hang-sink {\n100% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n}\n@keyframes hvr-icon-hang-sink {\n100% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n}\n.hvr-icon-hang {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-hang:before {\r\n  content: \"\\F078\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-hang:hover:before, .hvr-icon-hang:focus:before, .hvr-icon-hang:active:before {\r\n  -webkit-animation-name: hvr-icon-hang-sink, hvr-icon-hang;\r\n  animation-name: hvr-icon-hang-sink, hvr-icon-hang;\r\n  -webkit-animation-duration: .3s, 1.5s;\r\n  animation-duration: .3s, 1.5s;\r\n  -webkit-animation-delay: 0s, .3s;\r\n  animation-delay: 0s, .3s;\r\n  -webkit-animation-timing-function: ease-out, ease-in-out;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  -webkit-animation-iteration-count: 1, infinite;\r\n  animation-iteration-count: 1, infinite;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-direction: normal, alternate;\r\n  animation-direction: normal, alternate;\n}\r\n\r\n/* Icon Wobble Horizontal */\n@-webkit-keyframes hvr-icon-wobble-horizontal {\n16.65% {\r\n    -webkit-transform: translateX(6px);\r\n    transform: translateX(6px);\n}\n33.3% {\r\n    -webkit-transform: translateX(-5px);\r\n    transform: translateX(-5px);\n}\n49.95% {\r\n    -webkit-transform: translateX(4px);\r\n    transform: translateX(4px);\n}\n66.6% {\r\n    -webkit-transform: translateX(-2px);\r\n    transform: translateX(-2px);\n}\n83.25% {\r\n    -webkit-transform: translateX(1px);\r\n    transform: translateX(1px);\n}\n100% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\n}\n}\n@keyframes hvr-icon-wobble-horizontal {\n16.65% {\r\n    -webkit-transform: translateX(6px);\r\n    transform: translateX(6px);\n}\n33.3% {\r\n    -webkit-transform: translateX(-5px);\r\n    transform: translateX(-5px);\n}\n49.95% {\r\n    -webkit-transform: translateX(4px);\r\n    transform: translateX(4px);\n}\n66.6% {\r\n    -webkit-transform: translateX(-2px);\r\n    transform: translateX(-2px);\n}\n83.25% {\r\n    -webkit-transform: translateX(1px);\r\n    transform: translateX(1px);\n}\n100% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\n}\n}\n.hvr-icon-wobble-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-wobble-horizontal:before {\r\n  content: \"\\F061\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-wobble-horizontal:hover:before, .hvr-icon-wobble-horizontal:focus:before, .hvr-icon-wobble-horizontal:active:before {\r\n  -webkit-animation-name: hvr-icon-wobble-horizontal;\r\n  animation-name: hvr-icon-wobble-horizontal;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Icon Wobble Vertical */\n@-webkit-keyframes hvr-icon-wobble-vertical {\n16.65% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n33.3% {\r\n    -webkit-transform: translateY(-5px);\r\n    transform: translateY(-5px);\n}\n49.95% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\n}\n66.6% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\n}\n83.25% {\r\n    -webkit-transform: translateY(1px);\r\n    transform: translateY(1px);\n}\n100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\n}\n}\n@keyframes hvr-icon-wobble-vertical {\n16.65% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\n}\n33.3% {\r\n    -webkit-transform: translateY(-5px);\r\n    transform: translateY(-5px);\n}\n49.95% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\n}\n66.6% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\n}\n83.25% {\r\n    -webkit-transform: translateY(1px);\r\n    transform: translateY(1px);\n}\n100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\n}\n}\n.hvr-icon-wobble-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-wobble-vertical:before {\r\n  content: \"\\F062\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-wobble-vertical:hover:before, .hvr-icon-wobble-vertical:focus:before, .hvr-icon-wobble-vertical:active:before {\r\n  -webkit-animation-name: hvr-icon-wobble-vertical;\r\n  animation-name: hvr-icon-wobble-vertical;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Icon Buzz */\n@-webkit-keyframes hvr-icon-buzz {\n50% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n100% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n}\n@keyframes hvr-icon-buzz {\n50% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n100% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n}\n.hvr-icon-buzz {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-buzz:before {\r\n  content: \"\\F017\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-buzz:hover:before, .hvr-icon-buzz:focus:before, .hvr-icon-buzz:active:before {\r\n  -webkit-animation-name: hvr-icon-buzz;\r\n  animation-name: hvr-icon-buzz;\r\n  -webkit-animation-duration: 0.15s;\r\n  animation-duration: 0.15s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\n}\r\n\r\n/* Icon Buzz Out */\n@-webkit-keyframes hvr-icon-buzz-out {\n10% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n20% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n30% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n40% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n50% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\n}\n60% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n70% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\n}\n80% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n90% {\r\n    -webkit-transform: translateX(1px) rotate(0);\r\n    transform: translateX(1px) rotate(0);\n}\n100% {\r\n    -webkit-transform: translateX(-1px) rotate(0);\r\n    transform: translateX(-1px) rotate(0);\n}\n}\n@keyframes hvr-icon-buzz-out {\n10% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n20% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n30% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\n}\n40% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n50% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\n}\n60% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n70% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\n}\n80% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n90% {\r\n    -webkit-transform: translateX(1px) rotate(0);\r\n    transform: translateX(1px) rotate(0);\n}\n100% {\r\n    -webkit-transform: translateX(-1px) rotate(0);\r\n    transform: translateX(-1px) rotate(0);\n}\n}\n.hvr-icon-buzz-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-buzz-out:before {\r\n  content: \"\\F023\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\n}\n.hvr-icon-buzz-out:hover:before, .hvr-icon-buzz-out:focus:before, .hvr-icon-buzz-out:active:before {\r\n  -webkit-animation-name: hvr-icon-buzz-out;\r\n  animation-name: hvr-icon-buzz-out;\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* CURLS */\r\n/* Curl Top Left */\n.hvr-curl-top-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-curl-top-left:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  top: 0;\r\n  left: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(135deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');\r\n  /*For IE7-8-9*/\r\n  z-index: 1000;\r\n  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: width, height;\r\n  transition-property: width, height;\n}\n.hvr-curl-top-left:hover:before, .hvr-curl-top-left:focus:before, .hvr-curl-top-left:active:before {\r\n  width: 25px;\r\n  height: 25px;\n}\r\n\r\n/* Curl Top Right */\n.hvr-curl-top-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-curl-top-right:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  top: 0;\r\n  right: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(225deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\r\n  -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);\r\n          box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: width, height;\r\n  transition-property: width, height;\n}\n.hvr-curl-top-right:hover:before, .hvr-curl-top-right:focus:before, .hvr-curl-top-right:active:before {\r\n  width: 25px;\r\n  height: 25px;\n}\r\n\r\n/* Curl Bottom Right */\n.hvr-curl-bottom-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-curl-bottom-right:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(315deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\r\n  -webkit-box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4);\r\n          box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: width, height;\r\n  transition-property: width, height;\n}\n.hvr-curl-bottom-right:hover:before, .hvr-curl-bottom-right:focus:before, .hvr-curl-bottom-right:active:before {\r\n  width: 25px;\r\n  height: 25px;\n}\r\n\r\n/* Curl Bottom Left */\n.hvr-curl-bottom-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\n}\n.hvr-curl-bottom-left:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(45deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\r\n  -webkit-box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: width, height;\r\n  transition-property: width, height;\n}\n.hvr-curl-bottom-left:hover:before, .hvr-curl-bottom-left:focus:before, .hvr-curl-bottom-left:active:before {\r\n  width: 25px;\r\n  height: 25px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1271:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1272);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("e24fb672", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23572cf2\",\"scoped\":true,\"hasInlineConfig\":true}!./button.css", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23572cf2\",\"scoped\":true,\"hasInlineConfig\":true}!./button.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.btn_rounded[data-v-23572cf2] {\r\n    border-radius: 50px;\n}\n.effects .btn[data-v-23572cf2] {\r\n    margin: .4em;\r\n    padding: 1em;\r\n    cursor: pointer;\r\n    background: #dcdcdc;\r\n    text-decoration: none;\r\n    color: #333;\n}\n.iconsbtn .btn[data-v-23572cf2] {\r\n    padding-right: 3em;\n}\n.btn[data-v-23572cf2] {\r\n    cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ 1273:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "buttons",
    components: {},
    mounted: function mounted() {},
    data: function data() {
        return {};
    },

    methods: {}
});

/***/ }),

/***/ 1274:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-deafult-card",
              attrs: { header: "Basic Buttons", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Primary")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Default")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Success")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info mt-3 text-white",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Info")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-warning mt-3 text-white",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Warning")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger mt-3 text-white",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Danger")]
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
              staticClass: "bg-default-card",
              attrs: { header: "Outline buttons", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Primary")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Default")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-success mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Success")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-info mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Info")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-warning mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Warning")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-danger mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Danger")]
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
              staticClass: "bg-default-card",
              attrs: { header: "Rounded Buttons", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-primary btn_width btn_rounded mt-3 ",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Primary\n                    ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-secondary btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Default\n                    ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-success btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Success\n                    ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-info btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [
                    _vm._v(
                      "\n                        Info\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-warning btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Warning\n                    ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-danger btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [
                    _vm._v(
                      "\n                        Danger\n                    "
                    )
                  ]
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
              staticClass: "bg-default-card effects",
              attrs: { header: "Curls", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-curl-top-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Curl Top Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-curl-top-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Curl Top Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-curl-bottom-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Curl Bottom Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-curl-bottom-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Curl Bottom Left")]
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
              staticClass: "bg-primary-card effects",
              attrs: { header: "2D Transitions", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-grow",
                  attrs: { type: "button" }
                },
                [_vm._v("Grow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shrink",
                  attrs: { type: "button" }
                },
                [_vm._v("Shrink")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-pulse",
                  attrs: { type: "button" }
                },
                [_vm._v("Pulse")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-pulse-grow",
                  attrs: { type: "button" }
                },
                [_vm._v("Pulse Grow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-pulse-shrink",
                  attrs: { type: "button" }
                },
                [_vm._v("Pulse Shrink")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-push",
                  attrs: { type: "button" }
                },
                [_vm._v("Push")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-pop",
                  attrs: { type: "button" }
                },
                [_vm._v("Pop")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-in",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce In")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-out",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce Out")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-rotate",
                  attrs: { type: "button" }
                },
                [_vm._v("Rotate")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-grow-rotate",
                  attrs: { type: "button" }
                },
                [_vm._v("Grow Rotate")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-float",
                  attrs: { type: "button" }
                },
                [_vm._v("Float")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sink",
                  attrs: { type: "button" }
                },
                [_vm._v("Sink")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bob",
                  attrs: { type: "button" }
                },
                [_vm._v("Bob")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-hang",
                  attrs: { type: "button" }
                },
                [_vm._v("Hang")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-skew",
                  attrs: { type: "button" }
                },
                [_vm._v("Skew")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-skew-forward",
                  attrs: { type: "button" }
                },
                [_vm._v("Skew Forward")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-skew-backward",
                  attrs: { type: "button" }
                },
                [_vm._v("Skew Backward")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-horizontal",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Horizontal")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-vertical",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Vertical")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-to-bottom-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble To Bottom Right\n                ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-to-top-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble To Top Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-top",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-bottom",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-skew",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Skew")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-buzz",
                  attrs: { type: "button" }
                },
                [_vm._v("Buzz")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-buzz-out",
                  attrs: { type: "button" }
                },
                [_vm._v("Buzz Out")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-forward",
                  attrs: { type: "button" }
                },
                [_vm._v("Forward")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-backward",
                  attrs: { type: "button" }
                },
                [_vm._v("Backward")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6 " },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-info-card effects",
              attrs: { header: "Border Transitions", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-border-fade",
                  attrs: { type: "button" }
                },
                [_vm._v("Border Fade")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-round-corners",
                  attrs: { type: "button" }
                },
                [_vm._v("Round Corners")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-underline-from-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Underline From Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-underline-from-center",
                  attrs: { type: "button" }
                },
                [_vm._v("Underline From Center\n                ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-underline-from-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Underline From Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-reveal",
                  attrs: { type: "button" }
                },
                [_vm._v("Reveal")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-underline-reveal",
                  attrs: { type: "button" }
                },
                [_vm._v("Underline Reveal")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-overline-reveal",
                  attrs: { type: "button" }
                },
                [_vm._v("Overline Reveal")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-overline-from-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Overline From Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-overline-from-center",
                  attrs: { type: "button" }
                },
                [_vm._v("Overline From Center")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-overline-from-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Overline From Right")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6 " },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-success-card effects",
              attrs: { header: "Background Transitions", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sweep-to-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Sweep To Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sweep-to-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Sweep To Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sweep-to-bottom",
                  attrs: { type: "button" }
                },
                [_vm._v("Sweep To Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sweep-to-top",
                  attrs: { type: "button" }
                },
                [_vm._v("Sweep To Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-to-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce To Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-to-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce To Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-to-bottom",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce To Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-to-top",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce To Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-radial-out",
                  attrs: { type: "button" }
                },
                [_vm._v("Radial Out")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-rectangle-out",
                  attrs: { type: "button" }
                },
                [_vm._v("Rectangle Out")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shutter-out-horizontal",
                  attrs: { type: "button" }
                },
                [_vm._v("Shutter Out Horizontal\n                ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shutter-out-vertical",
                  attrs: { type: "button" }
                },
                [_vm._v("Shutter Out Vertical")]
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
              staticClass: "bg-warning-card effects",
              attrs: { header: "Speech Bubbles", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-top mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-right mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-float-bottom mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Float Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-bottom mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-left mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-float-right mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Float Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-float-top mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Float Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-float-left mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Float Left")]
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
              staticClass: "bg-danger-card effects",
              attrs: {
                header: "Shadow and Glow Transitions",
                "header-tag": "h4"
              }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shadow",
                  attrs: { type: "button" }
                },
                [_vm._v("Shadow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-grow-shadow",
                  attrs: { type: "button" }
                },
                [_vm._v("Grow Shadow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-float-shadow",
                  attrs: { type: "button" }
                },
                [_vm._v("Float Shadow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-glow",
                  attrs: { type: "button" }
                },
                [_vm._v("Glow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shadow-radial",
                  attrs: { type: "button" }
                },
                [_vm._v("Shadow Radial")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-box-shadow-outset",
                  attrs: { type: "button" }
                },
                [_vm._v("Box Shadow Outset")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-box-shadow-inset",
                  attrs: { type: "button" }
                },
                [_vm._v("Box Shadow Inset")]
              )
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
              staticClass: "bg-default-card",
              attrs: { header: "Buttons Sizes", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-sm mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Small button")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary btn-sm mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Small button")]
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
              staticClass: "bg-default-card",
              attrs: { header: "Normal Buttons ", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-md mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Normal button")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary btn-md mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Normal button")]
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
              staticClass: "bg-default-card",
              attrs: { header: "Large Buttons", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-lg mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Large button")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary btn-lg mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Large button")]
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
    require("vue-hot-reload-api")      .rerender("data-v-23572cf2", module.exports)
  }
}

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1269)
  __webpack_require__(1271)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1273)
/* template */
var __vue_template__ = __webpack_require__(1274)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-23572cf2"
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
Component.options.__file = "resources\\assets\\components\\pages\\buttons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23572cf2", Component.options)
  } else {
    hotAPI.reload("data-v-23572cf2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});