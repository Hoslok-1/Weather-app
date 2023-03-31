/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "img\n{\n    border-radius: 4px;\n}\n\nbody{\n    background-color: #5CDB95;\n    color:#edf5e1\n}\n\n#fahrenheit\n{\n    font-size: larger;\n}\n\n#container\n{\n    display: flex;\n    flex-direction: column;\n    margin-top: 8%;\n    gap: 100px;\n}\n\n#input-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:15px;\n}\n\n#other-info\n{\n    display: flex;\n    gap:20%;\n}\n\n#metrics\n{ \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    margin-left: 20%;\n    column-gap:40%;\n    grid-template-rows: auto;\n    width: 50%;\n    grid-template-areas: \n    \"header .\"\n    \"main main\"\n    \"footer footer\"\n}\n\n#temperature\n{\n    font-size: 40px;\n}\n\n#location\n{\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n}\n\n#location-header\n{\n    font-size: 230%;\n}\n\n#input-form\n{\n    width:60%\n}\n\n#gif-info\n{\n    display: flex;\n    max-width: 200px;\n    max-height: 200px;\n    margin-right: 25%;\n}\n\n.underline\n{\n    text-decoration: underline;\n    text-decoration-color:black ;\n}\n\n#location-info\n{\n    grid-area: header;\n    font-size:x-large;\n    font-weight: bold;\n    width: max-content;\n}\n\n#feels_like\n{\n    grid-area: main;\n    margin-left: 60%;\n    font-size: large;\n\n}\n\n#humidity\n{\n    grid-area: main;\n    font-size: large;\n}\n\n\n#uv\n{\n    grid-area: footer;\n    font-size: large;\n\n}\n\n#wind_speed\n{\n    grid-area:footer;\n    font-size: large;\n    margin-left: 60%;\n}\n\n.footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #379683;\n    color: white;\n    text-align: center;\n}\n\n\n.reload-gif\n{\n    height:30px;\n    width:30px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 55px;\n    height: 25px;\n}\n  \n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n  \n  /* The slider */\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 17px;\n    width: 21px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \ninput:checked + .slider {\n    background-color: #2196F3;\n}\n  \ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n  \ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n  \n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n\n.button-74{\n    background-color: #05386b;\n    border: 2px solid #edf5e1;\n    border-radius: 30px;\n    box-shadow: #edf5e1 4px 4px 0 0;\n    color: #edf5e1;\n    cursor: pointer;\n    display: inline-block;\n    font-weight: 600;\n    font-size: 18px;\n    padding: 0 18px;\n    line-height: 50px;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n\n.button-74:hover {\n  background-color: #5CDB95;\n}\n\n.button-74:active {\n  box-shadow: #5CDB95 2px 2px 0 0;\n  transform: translate(2px, 2px);\n}\n\n@media (min-width: 768px) {\n  .button-74 {\n    min-width: 120px;\n    padding: 0 25px;\n  }\n}\n\n.button-75{\n    background-color: #05386b;\n    border: 2px solid #edf5e1;\n    border-radius: 5px;\n    box-shadow: #edf5e1 4px 4px 0 0;\n    color: #edf5e1;\n    cursor: pointer;\n    height: 30px;\n    display: inline-block;\n    font-weight: 600;\n    padding:2px;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n\n.button-75:hover {\n  background-color: #5CDB95;\n}\n\n.button-75:active {\n  box-shadow: #5CDB95 2px 2px 0 0;\n  transform: translate(2px, 2px);\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB;AACJ;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,UAAU;AACd;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;;IAEI,aAAa;IACb,OAAO;AACX;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,cAAc;IACd,wBAAwB;IACxB,UAAU;IACV;;;;AAIJ;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI;AACJ;;AAEA;;IAEI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;;IAEI,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;;IAEI,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;;AAEpB;;AAEA;;IAEI,eAAe;IACf,gBAAgB;AACpB;;;AAGA;;IAEI,iBAAiB;IACjB,gBAAgB;;AAEpB;;AAEA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,OAAO;IACP,SAAS;IACT,WAAW;IACX,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;;IAEI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,QAAQ;IACR,SAAS;AACb;;EAEE,eAAe;AACjB;IACI,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,+BAA+B;IAC/B,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,yBAAyB;IACzB,0BAA0B;AAC9B;;;AAGA;EACE,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;AAChC;;AAEA;EACE;IACE,gBAAgB;IAChB,eAAe;EACjB;AACF;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,+BAA+B;IAC/B,cAAc;IACd,eAAe;IACf,YAAY;IACZ,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,yBAAyB;IACzB,0BAA0B;AAC9B;;;AAGA;EACE,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;AAChC","sourcesContent":["img\n{\n    border-radius: 4px;\n}\n\nbody{\n    background-color: #5CDB95;\n    color:#edf5e1\n}\n\n#fahrenheit\n{\n    font-size: larger;\n}\n\n#container\n{\n    display: flex;\n    flex-direction: column;\n    margin-top: 8%;\n    gap: 100px;\n}\n\n#input-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:15px;\n}\n\n#other-info\n{\n    display: flex;\n    gap:20%;\n}\n\n#metrics\n{ \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    margin-left: 20%;\n    column-gap:40%;\n    grid-template-rows: auto;\n    width: 50%;\n    grid-template-areas: \n    \"header .\"\n    \"main main\"\n    \"footer footer\"\n}\n\n#temperature\n{\n    font-size: 40px;\n}\n\n#location\n{\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n}\n\n#location-header\n{\n    font-size: 230%;\n}\n\n#input-form\n{\n    width:60%\n}\n\n#gif-info\n{\n    display: flex;\n    max-width: 200px;\n    max-height: 200px;\n    margin-right: 25%;\n}\n\n.underline\n{\n    text-decoration: underline;\n    text-decoration-color:black ;\n}\n\n#location-info\n{\n    grid-area: header;\n    font-size:x-large;\n    font-weight: bold;\n    width: max-content;\n}\n\n#feels_like\n{\n    grid-area: main;\n    margin-left: 60%;\n    font-size: large;\n\n}\n\n#humidity\n{\n    grid-area: main;\n    font-size: large;\n}\n\n\n#uv\n{\n    grid-area: footer;\n    font-size: large;\n\n}\n\n#wind_speed\n{\n    grid-area:footer;\n    font-size: large;\n    margin-left: 60%;\n}\n\n.footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #379683;\n    color: white;\n    text-align: center;\n}\n\n\n.reload-gif\n{\n    height:30px;\n    width:30px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 55px;\n    height: 25px;\n}\n  \n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n  \n  /* The slider */\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 17px;\n    width: 21px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \ninput:checked + .slider {\n    background-color: #2196F3;\n}\n  \ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n  \ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n  \n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n\n.button-74{\n    background-color: #05386b;\n    border: 2px solid #edf5e1;\n    border-radius: 30px;\n    box-shadow: #edf5e1 4px 4px 0 0;\n    color: #edf5e1;\n    cursor: pointer;\n    display: inline-block;\n    font-weight: 600;\n    font-size: 18px;\n    padding: 0 18px;\n    line-height: 50px;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n\n.button-74:hover {\n  background-color: #5CDB95;\n}\n\n.button-74:active {\n  box-shadow: #5CDB95 2px 2px 0 0;\n  transform: translate(2px, 2px);\n}\n\n@media (min-width: 768px) {\n  .button-74 {\n    min-width: 120px;\n    padding: 0 25px;\n  }\n}\n\n.button-75{\n    background-color: #05386b;\n    border: 2px solid #edf5e1;\n    border-radius: 5px;\n    box-shadow: #edf5e1 4px 4px 0 0;\n    color: #edf5e1;\n    cursor: pointer;\n    height: 30px;\n    display: inline-block;\n    font-weight: 600;\n    padding:2px;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n\n.button-75:hover {\n  background-color: #5CDB95;\n}\n\n.button-75:active {\n  box-shadow: #5CDB95 2px 2px 0 0;\n  transform: translate(2px, 2px);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
const submitBtn = document.getElementById('submit-btn');
const locationField = document.getElementById('location');
const locationHeader = document.getElementById('location-header');
const fahrenheitCheckbox = document.getElementById('fahrenheit-check');
const temperatureField = document.getElementById('temperature');
const feelsLikeField = document.getElementById('feels_like');
const humidityField = document.getElementById('humidity');
const uvField = document.getElementById('uv');
const windSpeedField = document.getElementById('wind_speed');
const locationInfoField = document.getElementById('location-info');
const gifInfo = document.getElementById('gif-info');
let reloadGifBtn = document.createElement('button');
const gifImg = document.querySelector('img');
let APIdataJSON; //holds the weather data
let APIdataJSON2; // holds the gif data
function initialFill() {
    getAPI("bangalore");
}
function startProcess() {
    console.log("Process started");
    resetFields();
    let location = locationField.value;
    getAPI(location);
}
function getAPI(location) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let apiWeatherData = yield fetch(`https://api.weatherapi.com/v1/current.json?key=f21b6dec13a145ae94a61506231903&q=${location}`);
            APIdataJSON = yield apiWeatherData.json();
            fillFields(APIdataJSON);
            let gifSearchTerm = APIdataJSON.current.condition['text'] + ' weather';
            let apiGif = yield fetch(`https://api.giphy.com/v1/gifs/translate?api_key=O24GqLvTGeS7X6KDPpAAxbiGD1q8JfQN&s=${gifSearchTerm}`);
            APIdataJSON2 = yield apiGif.json();
            fillGif(APIdataJSON2);
        }
        catch (err) {
            temperatureField.textContent = "Location not found";
        }
    });
}
function fillFields(data) {
    console.log(data);
    if (fahrenheitCheckbox.checked) {
        temperatureField.textContent = data.current.temp_f + "°F";
        feelsLikeField.textContent = "Feels Like: " + data.current.feelslike_f + "°F";
    }
    else {
        temperatureField.textContent = data.current.temp_c + "°C";
        feelsLikeField.textContent = "Feels Like: " + data.current.feelslike_c + "°C";
    }
    locationInfoField.textContent = data.location.region + "," + data.location.country;
    humidityField.textContent = "Humidity: " + data.current.humidity;
    uvField.textContent = "UV: " + data.current.uv;
    locationHeader.textContent = data.location.name;
    windSpeedField.textContent = "Wind Speed: " + data.current.wind_kph + " kph";
}
function changeTemp() {
    var _a;
    if ((temperatureField === null || temperatureField === void 0 ? void 0 : temperatureField.textContent) != undefined) {
        let last = ((_a = temperatureField === null || temperatureField === void 0 ? void 0 : temperatureField.textContent) === null || _a === void 0 ? void 0 : _a.charAt((temperatureField === null || temperatureField === void 0 ? void 0 : temperatureField.textContent.length) - 1));
        if (last == "C") {
            temperatureField.textContent = APIdataJSON.current.temp_f + "°F";
            feelsLikeField.textContent = "Feels Like: " + APIdataJSON.current.feelslike_f + "°F";
        }
        else {
            temperatureField.textContent = APIdataJSON.current.temp_c + "°C";
            feelsLikeField.textContent = "Feels Like: " + APIdataJSON.current.feelslike_c + "°C";
        }
    }
}
function fillGif(gifData) {
    gifImg.src = gifData.data.images.original.url;
    reloadGifBtn.textContent = "↻";
    reloadGifBtn.className = "reload-gif";
    reloadGifBtn.className = "button-75";
    gifInfo === null || gifInfo === void 0 ? void 0 : gifInfo.appendChild(reloadGifBtn);
    reloadGifBtn.addEventListener('click', changeGif);
}
function changeGif() {
    return __awaiter(this, void 0, void 0, function* () {
        let gifSearchTerm = APIdataJSON.current.condition['text'];
        let apiData = yield fetch(`https://api.giphy.com/v1/gifs/translate?api_key=O24GqLvTGeS7X6KDPpAAxbiGD1q8JfQN&s=${gifSearchTerm}`);
        let JSONdata = yield apiData.json();
        gifImg.src = JSONdata.data.images.original.url;
    });
}
function resetFields() {
    temperatureField.textContent = "";
    feelsLikeField.textContent = "";
    locationInfoField.textContent = "";
    humidityField.textContent = "";
    uvField.textContent = "";
    locationHeader.textContent = "";
    windSpeedField.textContent = "";
    gifImg.src = "";
    reloadGifBtn.remove();
}
initialFill();
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', startProcess);
fahrenheitCheckbox === null || fahrenheitCheckbox === void 0 ? void 0 : fahrenheitCheckbox.addEventListener('change', changeTemp);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdJQUFnSSxTQUFTO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBLDJIQUEySCxjQUFjO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3SEFBd0gsY0FBYztBQUN0STtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQy9HQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaW1nXFxue1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Q0RCOTU7XFxuICAgIGNvbG9yOiNlZGY1ZTFcXG59XFxuXFxuI2ZhaHJlbmhlaXRcXG57XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4jY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiA4JTtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuI2lucHV0LWNvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjE1cHg7XFxufVxcblxcbiNvdGhlci1pbmZvXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MjAlO1xcbn1cXG5cXG4jbWV0cmljc1xcbnsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG4gICAgY29sdW1uLWdhcDo0MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgLlxcXCJcXG4gICAgXFxcIm1haW4gbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiXFxufVxcblxcbiN0ZW1wZXJhdHVyZVxcbntcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4jbG9jYXRpb25cXG57XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNsb2NhdGlvbi1oZWFkZXJcXG57XFxuICAgIGZvbnQtc2l6ZTogMjMwJTtcXG59XFxuXFxuI2lucHV0LWZvcm1cXG57XFxuICAgIHdpZHRoOjYwJVxcbn1cXG5cXG4jZ2lmLWluZm9cXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcXG59XFxuXFxuLnVuZGVybGluZVxcbntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjpibGFjayA7XFxufVxcblxcbiNsb2NhdGlvbi1pbmZvXFxue1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNmZWVsc19saWtlXFxue1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxufVxcblxcbiNodW1pZGl0eVxcbntcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG5cXG4jdXZcXG57XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcblxcbn1cXG5cXG4jd2luZF9zcGVlZFxcbntcXG4gICAgZ3JpZC1hcmVhOmZvb3RlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3OTY4MztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5yZWxvYWQtZ2lmXFxue1xcbiAgICBoZWlnaHQ6MzBweDtcXG4gICAgd2lkdGg6MzBweDtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4gIFxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG4gIFxcbiAgLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG4gIFxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAxN3B4O1xcbiAgICB3aWR0aDogMjFweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcbiAgXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbn1cXG4gIFxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG59XFxuICBcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG4gIFxcbi5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG4gIFxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5cXG4uYnV0dG9uLTc0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUzODZiO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWRmNWUxO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAjZWRmNWUxIDRweCA0cHggMCAwO1xcbiAgICBjb2xvcjogI2VkZjVlMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuXFxuLmJ1dHRvbi03NDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNEQjk1O1xcbn1cXG5cXG4uYnV0dG9uLTc0OmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAjNUNEQjk1IDJweCAycHggMCAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5idXR0b24tNzQge1xcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgICBwYWRkaW5nOiAwIDI1cHg7XFxuICB9XFxufVxcblxcbi5idXR0b24tNzV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTM4NmI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZGY1ZTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogI2VkZjVlMSA0cHggNHB4IDAgMDtcXG4gICAgY29sb3I6ICNlZGY1ZTE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6MnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuXFxuLmJ1dHRvbi03NTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNEQjk1O1xcbn1cXG5cXG4uYnV0dG9uLTc1OmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAjNUNEQjk1IDJweCAycHggMCAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsT0FBTztBQUNYOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWOzs7O0FBSUo7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBOztJQUVJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7QUFFcEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0E7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUdBOztJQUVJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0VBRUUsZUFBZTtBQUNqQjtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImltZ1xcbntcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNEQjk1O1xcbiAgICBjb2xvcjojZWRmNWUxXFxufVxcblxcbiNmYWhyZW5oZWl0XFxue1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuI2NvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogOCU7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbiNpbnB1dC1jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoxNXB4O1xcbn1cXG5cXG4jb3RoZXItaW5mb1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjIwJTtcXG59XFxuXFxuI21ldHJpY3NcXG57IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxuICAgIGNvbHVtbi1nYXA6NDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIC5cXFwiXFxuICAgIFxcXCJtYWluIG1haW5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIlxcbn1cXG5cXG4jdGVtcGVyYXR1cmVcXG57XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuI2xvY2F0aW9uXFxue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jbG9jYXRpb24taGVhZGVyXFxue1xcbiAgICBmb250LXNpemU6IDIzMCU7XFxufVxcblxcbiNpbnB1dC1mb3JtXFxue1xcbiAgICB3aWR0aDo2MCVcXG59XFxuXFxuI2dpZi1pbmZvXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XFxufVxcblxcbi51bmRlcmxpbmVcXG57XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6YmxhY2sgO1xcbn1cXG5cXG4jbG9jYXRpb24taW5mb1xcbntcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jZmVlbHNfbGlrZVxcbntcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcblxcbn1cXG5cXG4jaHVtaWRpdHlcXG57XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuXFxuI3V2XFxue1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG59XFxuXFxuI3dpbmRfc3BlZWRcXG57XFxuICAgIGdyaWQtYXJlYTpmb290ZXI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzk2ODM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ucmVsb2FkLWdpZlxcbntcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIHdpZHRoOjMwcHg7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDU1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuICBcXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuICBcXG4gIC8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuICBcXG4uc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgd2lkdGg6IDIxcHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG4gIFxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXG59XFxuICBcXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxufVxcbiAgXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuICBcXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuICBcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuXFxuLmJ1dHRvbi03NHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1Mzg2YjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VkZjVlMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm94LXNoYWRvdzogI2VkZjVlMSA0cHggNHB4IDAgMDtcXG4gICAgY29sb3I6ICNlZGY1ZTE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDAgMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcblxcbi5idXR0b24tNzQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDREI5NTtcXG59XFxuXFxuLmJ1dHRvbi03NDphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogIzVDREI5NSAycHggMnB4IDAgMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuYnV0dG9uLTc0IHtcXG4gICAgbWluLXdpZHRoOiAxMjBweDtcXG4gICAgcGFkZGluZzogMCAyNXB4O1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uLTc1e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUzODZiO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWRmNWUxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6ICNlZGY1ZTEgNHB4IDRweCAwIDA7XFxuICAgIGNvbG9yOiAjZWRmNWUxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOjJweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcblxcbi5idXR0b24tNzU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDREI5NTtcXG59XFxuXFxuLmJ1dHRvbi03NTphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogIzVDREI5NSAycHggMnB4IDAgMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9zdHlsZXMvaW5kZXguY3NzXCIpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcbmNvbnN0IGxvY2F0aW9uRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbmNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLWhlYWRlcicpO1xuY29uc3QgZmFocmVuaGVpdENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhaHJlbmhlaXQtY2hlY2snKTtcbmNvbnN0IHRlbXBlcmF0dXJlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKTtcbmNvbnN0IGZlZWxzTGlrZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzX2xpa2UnKTtcbmNvbnN0IGh1bWlkaXR5RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcbmNvbnN0IHV2RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXYnKTtcbmNvbnN0IHdpbmRTcGVlZEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRfc3BlZWQnKTtcbmNvbnN0IGxvY2F0aW9uSW5mb0ZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLWluZm8nKTtcbmNvbnN0IGdpZkluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lmLWluZm8nKTtcbmxldCByZWxvYWRHaWZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGdpZkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xubGV0IEFQSWRhdGFKU09OOyAvL2hvbGRzIHRoZSB3ZWF0aGVyIGRhdGFcbmxldCBBUElkYXRhSlNPTjI7IC8vIGhvbGRzIHRoZSBnaWYgZGF0YVxuZnVuY3Rpb24gaW5pdGlhbEZpbGwoKSB7XG4gICAgZ2V0QVBJKFwiYmFuZ2Fsb3JlXCIpO1xufVxuZnVuY3Rpb24gc3RhcnRQcm9jZXNzKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUHJvY2VzcyBzdGFydGVkXCIpO1xuICAgIHJlc2V0RmllbGRzKCk7XG4gICAgbGV0IGxvY2F0aW9uID0gbG9jYXRpb25GaWVsZC52YWx1ZTtcbiAgICBnZXRBUEkobG9jYXRpb24pO1xufVxuZnVuY3Rpb24gZ2V0QVBJKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBhcGlXZWF0aGVyRGF0YSA9IHlpZWxkIGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWYyMWI2ZGVjMTNhMTQ1YWU5NGE2MTUwNjIzMTkwMyZxPSR7bG9jYXRpb259YCk7XG4gICAgICAgICAgICBBUElkYXRhSlNPTiA9IHlpZWxkIGFwaVdlYXRoZXJEYXRhLmpzb24oKTtcbiAgICAgICAgICAgIGZpbGxGaWVsZHMoQVBJZGF0YUpTT04pO1xuICAgICAgICAgICAgbGV0IGdpZlNlYXJjaFRlcm0gPSBBUElkYXRhSlNPTi5jdXJyZW50LmNvbmRpdGlvblsndGV4dCddICsgJyB3ZWF0aGVyJztcbiAgICAgICAgICAgIGxldCBhcGlHaWYgPSB5aWVsZCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9TzI0R3FMdlRHZVM3WDZLRFBwQUF4YmlHRDFxOEpmUU4mcz0ke2dpZlNlYXJjaFRlcm19YCk7XG4gICAgICAgICAgICBBUElkYXRhSlNPTjIgPSB5aWVsZCBhcGlHaWYuanNvbigpO1xuICAgICAgICAgICAgZmlsbEdpZihBUElkYXRhSlNPTjIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlRmllbGQudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIG5vdCBmb3VuZFwiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaWxsRmllbGRzKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBpZiAoZmFocmVuaGVpdENoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgdGVtcGVyYXR1cmVGaWVsZC50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2YgKyBcIsKwRlwiO1xuICAgICAgICBmZWVsc0xpa2VGaWVsZC50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZTogXCIgKyBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YgKyBcIsKwRlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGVtcGVyYXR1cmVGaWVsZC50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2MgKyBcIsKwQ1wiO1xuICAgICAgICBmZWVsc0xpa2VGaWVsZC50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZTogXCIgKyBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyBcIsKwQ1wiO1xuICAgIH1cbiAgICBsb2NhdGlvbkluZm9GaWVsZC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ucmVnaW9uICsgXCIsXCIgKyBkYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgaHVtaWRpdHlGaWVsZC50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHk6IFwiICsgZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICAgIHV2RmllbGQudGV4dENvbnRlbnQgPSBcIlVWOiBcIiArIGRhdGEuY3VycmVudC51djtcbiAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcbiAgICB3aW5kU3BlZWRGaWVsZC50ZXh0Q29udGVudCA9IFwiV2luZCBTcGVlZDogXCIgKyBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIjtcbn1cbmZ1bmN0aW9uIGNoYW5nZVRlbXAoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICgodGVtcGVyYXR1cmVGaWVsZCA9PT0gbnVsbCB8fCB0ZW1wZXJhdHVyZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZW1wZXJhdHVyZUZpZWxkLnRleHRDb250ZW50KSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGxhc3QgPSAoKF9hID0gdGVtcGVyYXR1cmVGaWVsZCA9PT0gbnVsbCB8fCB0ZW1wZXJhdHVyZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZW1wZXJhdHVyZUZpZWxkLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhckF0KCh0ZW1wZXJhdHVyZUZpZWxkID09PSBudWxsIHx8IHRlbXBlcmF0dXJlRmllbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRlbXBlcmF0dXJlRmllbGQudGV4dENvbnRlbnQubGVuZ3RoKSAtIDEpKTtcbiAgICAgICAgaWYgKGxhc3QgPT0gXCJDXCIpIHtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlRmllbGQudGV4dENvbnRlbnQgPSBBUElkYXRhSlNPTi5jdXJyZW50LnRlbXBfZiArIFwiwrBGXCI7XG4gICAgICAgICAgICBmZWVsc0xpa2VGaWVsZC50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZTogXCIgKyBBUElkYXRhSlNPTi5jdXJyZW50LmZlZWxzbGlrZV9mICsgXCLCsEZcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlRmllbGQudGV4dENvbnRlbnQgPSBBUElkYXRhSlNPTi5jdXJyZW50LnRlbXBfYyArIFwiwrBDXCI7XG4gICAgICAgICAgICBmZWVsc0xpa2VGaWVsZC50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZTogXCIgKyBBUElkYXRhSlNPTi5jdXJyZW50LmZlZWxzbGlrZV9jICsgXCLCsENcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGZpbGxHaWYoZ2lmRGF0YSkge1xuICAgIGdpZkltZy5zcmMgPSBnaWZEYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICByZWxvYWRHaWZCdG4udGV4dENvbnRlbnQgPSBcIuKGu1wiO1xuICAgIHJlbG9hZEdpZkJ0bi5jbGFzc05hbWUgPSBcInJlbG9hZC1naWZcIjtcbiAgICByZWxvYWRHaWZCdG4uY2xhc3NOYW1lID0gXCJidXR0b24tNzVcIjtcbiAgICBnaWZJbmZvID09PSBudWxsIHx8IGdpZkluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdpZkluZm8uYXBwZW5kQ2hpbGQocmVsb2FkR2lmQnRuKTtcbiAgICByZWxvYWRHaWZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VHaWYpO1xufVxuZnVuY3Rpb24gY2hhbmdlR2lmKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBnaWZTZWFyY2hUZXJtID0gQVBJZGF0YUpTT04uY3VycmVudC5jb25kaXRpb25bJ3RleHQnXTtcbiAgICAgICAgbGV0IGFwaURhdGEgPSB5aWVsZCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9TzI0R3FMdlRHZVM3WDZLRFBwQUF4YmlHRDFxOEpmUU4mcz0ke2dpZlNlYXJjaFRlcm19YCk7XG4gICAgICAgIGxldCBKU09OZGF0YSA9IHlpZWxkIGFwaURhdGEuanNvbigpO1xuICAgICAgICBnaWZJbWcuc3JjID0gSlNPTmRhdGEuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVzZXRGaWVsZHMoKSB7XG4gICAgdGVtcGVyYXR1cmVGaWVsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZmVlbHNMaWtlRmllbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGxvY2F0aW9uSW5mb0ZpZWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBodW1pZGl0eUZpZWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB1dkZpZWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgd2luZFNwZWVkRmllbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGdpZkltZy5zcmMgPSBcIlwiO1xuICAgIHJlbG9hZEdpZkJ0bi5yZW1vdmUoKTtcbn1cbmluaXRpYWxGaWxsKCk7XG5zdWJtaXRCdG4gPT09IG51bGwgfHwgc3VibWl0QnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydFByb2Nlc3MpO1xuZmFocmVuaGVpdENoZWNrYm94ID09PSBudWxsIHx8IGZhaHJlbmhlaXRDaGVja2JveCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmFocmVuaGVpdENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVRlbXApO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=