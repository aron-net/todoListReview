"use strict";
(self["webpackChunktodolistreview"] = self["webpackChunktodolistreview"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Space Grotesk', sans-serif;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-color: rgba(243, 173, 75, 0.845);\r\n  background-blend-mode: soft-light;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  color: #545862;\r\n  height: 100vh;\r\n}\r\n\r\n#todo-list,\r\n#hero {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 80%;\r\n  background-color: rgb(247, 247, 248);\r\n  box-shadow: 5px 10px 8px rgba(202, 67, 29, 0.492);\r\n}\r\n\r\n#todo-list {\r\n  max-height: 80%;\r\n}\r\n\r\n#hero {\r\n  background: none;\r\n  box-shadow: none;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#hero h1 {\r\n  font-family: 'Darker Grotesque', sans-serif;\r\n  color: rgb(219, 45, 67);\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n}\r\n\r\n#todo-list a {\r\n  border: none;\r\n  padding: 1rem 1.3rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\r\n  color: transparent;\r\n  font-weight: 600;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.icon {\r\n  fill: rgba(152, 152, 152, 1);\r\n  cursor: pointer;\r\n}\r\n\r\n#header,\r\n#add-task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n#add-task input {\r\n  background-color: rgb(247, 247, 248);\r\n  width: 90%;\r\n  outline: none;\r\n  border: none;\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n}\r\n\r\n#add-icon svg {\r\n  fill: rgb(231, 104, 56);\r\n}\r\n\r\n#header h2 {\r\n  font-family: 'Darker Grotesque', sans-serif;\r\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  font-style: italic;\r\n  width: 70%;\r\n}\r\n\r\n#sync {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#sync svg {\r\n  fill: rgb(219, 45, 67);\r\n}\r\n\r\n#sync svg:hover {\r\n  fill: #57d131;\r\n}\r\n\r\ni[class^=\"fa\"] {\r\n  color: rgba(152, 152, 152, 1);\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  display: none;\r\n}\r\n\r\n.fa-ellipsis-vertical.show {\r\n  display: block;\r\n}\r\n\r\n.fa-trash-can {\r\n  display: none;\r\n}\r\n\r\n.fa-trash-can.show {\r\n  display: block;\r\n}\r\n\r\n#task-list {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n  max-height: 350px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.8rem 1.3rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.task.active {\r\n  background-color: #28df99;\r\n}\r\n\r\n.task-d {\r\n  width: 90%;\r\n  background-color: rgb(247, 247, 248);\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n  padding-left: 0.8rem;\r\n}\r\n\r\n.task-d.active {\r\n  background-color: #28df99;\r\n}\r\n\r\n.task-d.cross {\r\n  text-decoration: line-through;\r\n  width: 87.1%;\r\n  background-color: transparent;\r\n}\r\n\r\n#clear-all {\r\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  #todo-list,\r\n  #hero {\r\n    width: 50%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;EACxC,mDAA2B;EAC3B,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,2CAA2C;EAC3C,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,oCAAoC;EACpC,iDAAiD;AACnD;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,2CAA2C;EAC3C,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;EACrB,iHAAiH;EACjH,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,eAAe;EACf,4CAA4C;AAC9C;;AAEA;EACE,oCAAoC;EACpC,UAAU;EACV,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2CAA2C;EAC3C,iHAAiH;EACjH,2BAA2B;EAC3B,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,oCAAoC;EACpC,aAAa;EACb,YAAY;EACZ,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,iHAAiH;EACjH,2BAA2B;EAC3B,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE;;IAEE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@900&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Space Grotesk', sans-serif;\r\n  background: url('./bg.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-color: rgba(243, 173, 75, 0.845);\r\n  background-blend-mode: soft-light;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  color: #545862;\r\n  height: 100vh;\r\n}\r\n\r\n#todo-list,\r\n#hero {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 80%;\r\n  background-color: rgb(247, 247, 248);\r\n  box-shadow: 5px 10px 8px rgba(202, 67, 29, 0.492);\r\n}\r\n\r\n#todo-list {\r\n  max-height: 80%;\r\n}\r\n\r\n#hero {\r\n  background: none;\r\n  box-shadow: none;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#hero h1 {\r\n  font-family: 'Darker Grotesque', sans-serif;\r\n  color: rgb(219, 45, 67);\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n}\r\n\r\n#todo-list a {\r\n  border: none;\r\n  padding: 1rem 1.3rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\r\n  color: transparent;\r\n  font-weight: 600;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.icon {\r\n  fill: rgba(152, 152, 152, 1);\r\n  cursor: pointer;\r\n}\r\n\r\n#header,\r\n#add-task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n#add-task input {\r\n  background-color: rgb(247, 247, 248);\r\n  width: 90%;\r\n  outline: none;\r\n  border: none;\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n}\r\n\r\n#add-icon svg {\r\n  fill: rgb(231, 104, 56);\r\n}\r\n\r\n#header h2 {\r\n  font-family: 'Darker Grotesque', sans-serif;\r\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  font-style: italic;\r\n  width: 70%;\r\n}\r\n\r\n#sync {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#sync svg {\r\n  fill: rgb(219, 45, 67);\r\n}\r\n\r\n#sync svg:hover {\r\n  fill: #57d131;\r\n}\r\n\r\ni[class^=\"fa\"] {\r\n  color: rgba(152, 152, 152, 1);\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  display: none;\r\n}\r\n\r\n.fa-ellipsis-vertical.show {\r\n  display: block;\r\n}\r\n\r\n.fa-trash-can {\r\n  display: none;\r\n}\r\n\r\n.fa-trash-can.show {\r\n  display: block;\r\n}\r\n\r\n#task-list {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n  max-height: 350px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.8rem 1.3rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.task.active {\r\n  background-color: #28df99;\r\n}\r\n\r\n.task-d {\r\n  width: 90%;\r\n  background-color: rgb(247, 247, 248);\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n  padding-left: 0.8rem;\r\n}\r\n\r\n.task-d.active {\r\n  background-color: #28df99;\r\n}\r\n\r\n.task-d.cross {\r\n  text-decoration: line-through;\r\n  width: 87.1%;\r\n  background-color: transparent;\r\n}\r\n\r\n#clear-all {\r\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  #todo-list,\r\n  #hero {\r\n    width: 50%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/local-storage.js */ "./src/modules/local-storage.js");
/* harmony import */ var _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userInterface.js */ "./src/modules/userInterface.js");
/* harmony import */ var _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/taskarr.js */ "./src/modules/taskarr.js");
/* harmony import */ var _modules_removeTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/removeTask.js */ "./src/modules/removeTask.js");
/* harmony import */ var _modules_addtask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addtask.js */ "./src/modules/addtask.js");
/* harmony import */ var _modules_clearAll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clearAll.js */ "./src/modules/clearAll.js");








const syncIcon = document.getElementById('sync');

syncIcon.addEventListener('click', () => {
  _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach((task) => { task.completed = true; });
  const completed = _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].filter((task) => task.completed === true);
  completed.forEach((task) => (0,_modules_removeTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])(task));
});

const addInput = document.getElementById('add');

document.addEventListener('DOMContentLoaded', () => {
  _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.getTasks(_modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach((task) => { task.completed = false; });
  _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayTaks(_modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

const addIcon = document.getElementById('add-icon');

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && addInput.value) {
    (0,_modules_addtask_js__WEBPACK_IMPORTED_MODULE_5__["default"])(addInput.value);
    e.preventDefault();
    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});

addIcon.addEventListener('click', (e) => {
  if (e.key === 'Enter' && addInput.value) {
    (0,_modules_addtask_js__WEBPACK_IMPORTED_MODULE_5__["default"])(addInput.value);
    e.preventDefault();
    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});

const clearAll = document.getElementById('clear-all');

clearAll.addEventListener('click', () => {
  (0,_modules_clearAll_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

/***/ }),

/***/ "./src/modules/addtask.js":
/*!********************************!*\
  !*** ./src/modules/addtask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskel.js */ "./src/modules/taskel.js");
/* harmony import */ var _userInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface.js */ "./src/modules/userInterface.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.js */ "./src/modules/local-storage.js");
/* harmony import */ var _taskarr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskarr.js */ "./src/modules/taskarr.js");





const addNewTask = (value) => {
  const task = new _taskel_js__WEBPACK_IMPORTED_MODULE_0__["default"](value, false, _taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].length + 1);
  _taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].push(task);
  _userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(task);
  _local_storage_js__WEBPACK_IMPORTED_MODULE_2__.addTask(_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTask);


/***/ }),

/***/ "./src/modules/changeDesc.js":
/*!***********************************!*\
  !*** ./src/modules/changeDesc.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskarr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskarr.js */ "./src/modules/taskarr.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ "./src/modules/local-storage.js");



const changeDesc = (input, taskel, el) => {
  taskel.classList.toggle('active');
  input.classList.toggle('active');
  input.addEventListener('keypress', (e) => {
    input.value = e.target.value;
    input.classList.toggle('active');
    taskel.classList.toggle('active');
    _taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"][el.index - 1].description = input.value;
    _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeDesc);

/***/ }),

/***/ "./src/modules/checkTask.js":
/*!**********************************!*\
  !*** ./src/modules/checkTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.js */ "./src/modules/local-storage.js");
/* harmony import */ var _taskarr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskarr.js */ "./src/modules/taskarr.js");



const checkTask = (dots, taskDesc, task, trashIcon, el) => {
  dots.classList.toggle('show');
  trashIcon.classList.toggle('show');
  taskDesc.classList.toggle('cross');
  task.classList.toggle('active');
  if (el.completed === false) {
    el.completed = true;
  } else {
    el.completed = false;
  }
  _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.addTask(_taskarr_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTask);


/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask.js */ "./src/modules/removeTask.js");


const filterAll = (arr) => {
  const remain = arr;
  const completed = remain.filter((task) => task.completed === true);
  completed.forEach((task) => (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterAll);


/***/ }),

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "getTasks": () => (/* binding */ getTasks)
/* harmony export */ });
const getTasks = (tasks) => tasks.push(...JSON.parse(localStorage.getItem('tasks')));

const addTask = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};




/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskarr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskarr.js */ "./src/modules/taskarr.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ "./src/modules/local-storage.js");



const removeTask = (obj) => {
  const trashIcon = document.querySelectorAll('.fa-trash-can');
  const trashArr = Array.from(trashIcon);
  if (obj.completed === true) {
    trashArr[obj.index - 1].parentElement.remove();

    _taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"].splice(obj.index - 1, 1);
    for (let i = 0; i < _taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"].length; i += 1) {
      _taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].index = i + 1;
    }
  }
  _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);


/***/ }),

/***/ "./src/modules/taskarr.js":
/*!********************************!*\
  !*** ./src/modules/taskarr.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskArr = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskArr);

/***/ }),

/***/ "./src/modules/taskel.js":
/*!*******************************!*\
  !*** ./src/modules/taskel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

/***/ }),

/***/ "./src/modules/userInterface.js":
/*!**************************************!*\
  !*** ./src/modules/userInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIDisplay)
/* harmony export */ });
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask.js */ "./src/modules/removeTask.js");
/* harmony import */ var _changeDesc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeDesc.js */ "./src/modules/changeDesc.js");
/* harmony import */ var _checkTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkTask.js */ "./src/modules/checkTask.js");




class UIDisplay {
  static createTask = (el) => {
    const task = document.createElement('li');
    task.classList.add('task');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('checkB');
    task.appendChild(checkBox);

    const taskDesc = document.createElement('input');
    taskDesc.classList.add('task-d');
    taskDesc.value = `${el.description}`;
    task.appendChild(taskDesc);

    const dots = document.createElement('i');
    dots.classList.add('fa-solid', 'fa-ellipsis-vertical', 'show');
    task.appendChild(dots);

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash-can');
    task.appendChild(trashIcon);

    checkBox.addEventListener('change', () => {
      (0,_checkTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dots, taskDesc, task, trashIcon, el);
    });

    taskDesc.addEventListener('click', () => {
      (0,_changeDesc_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDesc, task, el);
    });

    trashIcon.addEventListener('click', () => {
      (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
    });

    document.getElementById('task-list').appendChild(task);
  };

  static displayTaks(arr) {
    arr.forEach((el) => UIDisplay.createTask(el));
  }
}


/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ce99b3a954e5f432e17.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdHJldmlldy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RyZXZpZXcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0cmV2aWV3Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHJldmlldy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0cmV2aWV3Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0cmV2aWV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0cmV2aWV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHJldmlldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHJldmlldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHJldmlldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0cmV2aWV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RyZXZpZXcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RyZXZpZXcvLi9zcmMvbW9kdWxlcy9hZGR0YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0cmV2aWV3Ly4vc3JjL21vZHVsZXMvY2hhbmdlRGVzYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHJldmlldy8uL3NyYy9tb2R1bGVzL2NoZWNrVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHJldmlldy8uL3NyYy9tb2R1bGVzL2NsZWFyQWxsLmpzIiwid2VicGFjazovL3RvZG9saXN0cmV2aWV3Ly4vc3JjL21vZHVsZXMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHJldmlldy8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RyZXZpZXcvLi9zcmMvbW9kdWxlcy90YXNrYXJyLmpzIiwid2VicGFjazovL3RvZG9saXN0cmV2aWV3Ly4vc3JjL21vZHVsZXMvdGFza2VsLmpzIiwid2VicGFjazovL3RvZG9saXN0cmV2aWV3Ly4vc3JjL21vZHVsZXMvdXNlckludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYWNlK0dyb3Rlc2s6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhcmtlcitHcm90ZXNxdWU6d2dodEA5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAxNzMsIDc1LCAwLjg0NSk7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tbGlzdCxcXHJcXG4jaGVybyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0OCk7XFxyXFxuICBib3gtc2hhZG93OiA1cHggMTBweCA4cHggcmdiYSgyMDIsIDY3LCAyOSwgMC40OTIpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVybyBoMSB7XFxyXFxuICBmb250LWZhbWlseTogJ0RhcmtlciBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHJnYigyMTksIDQ1LCA2Nyk7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0IGEge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMXJlbSAxLjNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigxNjgsIDIsIDExMSksIHJnYigyMTksIDQ1LCA2NyksIHJnYigyMzEsIDEwNCwgNTYpLCByZ2IoMjU1LCAxNTMsIDApKTtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGZpbGw6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIsXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayBpbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0OCk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWljb24gc3ZnIHtcXHJcXG4gIGZpbGw6IHJnYigyMzEsIDEwNCwgNTYpO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIGgyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRGFya2VyIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigxNjgsIDIsIDExMSksIHJnYigyMTksIDQ1LCA2NyksIHJnYigyMzEsIDEwNCwgNTYpLCByZ2IoMjU1LCAxNTMsIDApKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbiNzeW5jIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3luYyBzdmcge1xcclxcbiAgZmlsbDogcmdiKDIxOSwgNDUsIDY3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3N5bmMgc3ZnOmhvdmVyIHtcXHJcXG4gIGZpbGw6ICM1N2QxMzE7XFxyXFxufVxcclxcblxcclxcbmlbY2xhc3NePVxcXCJmYVxcXCJdIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsLnNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5mYS10cmFzaC1jYW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRyYXNoLWNhbi5zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMC44cmVtIDEuM3JlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4ZGY5OTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDgpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkZjk5O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kLmNyb3NzIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgd2lkdGg6IDg3LjElO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1hbGwge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMTY4LCAyLCAxMTEpLCByZ2IoMjE5LCA0NSwgNjcpLCByZ2IoMjMxLCAxMDQsIDU2KSwgcmdiKDI1NSwgMTUzLCAwKSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICN0b2RvLWxpc3QsXFxyXFxuICAjaGVybyB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxtREFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMkNBQTJDO0VBQzNDLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUhBQWlIO0VBQ2pILGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGlIQUFpSDtFQUNqSCwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUhBQWlIO0VBQ2pILDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7O0lBRUUsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrR3JvdGVzazp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFya2VyK0dyb3Rlc3F1ZTp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYmcuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAxNzMsIDc1LCAwLjg0NSk7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tbGlzdCxcXHJcXG4jaGVybyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0OCk7XFxyXFxuICBib3gtc2hhZG93OiA1cHggMTBweCA4cHggcmdiYSgyMDIsIDY3LCAyOSwgMC40OTIpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVybyBoMSB7XFxyXFxuICBmb250LWZhbWlseTogJ0RhcmtlciBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHJnYigyMTksIDQ1LCA2Nyk7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0IGEge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMXJlbSAxLjNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigxNjgsIDIsIDExMSksIHJnYigyMTksIDQ1LCA2NyksIHJnYigyMzEsIDEwNCwgNTYpLCByZ2IoMjU1LCAxNTMsIDApKTtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGZpbGw6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIsXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayBpbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0OCk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWljb24gc3ZnIHtcXHJcXG4gIGZpbGw6IHJnYigyMzEsIDEwNCwgNTYpO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIGgyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRGFya2VyIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigxNjgsIDIsIDExMSksIHJnYigyMTksIDQ1LCA2NyksIHJnYigyMzEsIDEwNCwgNTYpLCByZ2IoMjU1LCAxNTMsIDApKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbiNzeW5jIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3luYyBzdmcge1xcclxcbiAgZmlsbDogcmdiKDIxOSwgNDUsIDY3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3N5bmMgc3ZnOmhvdmVyIHtcXHJcXG4gIGZpbGw6ICM1N2QxMzE7XFxyXFxufVxcclxcblxcclxcbmlbY2xhc3NePVxcXCJmYVxcXCJdIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsLnNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5mYS10cmFzaC1jYW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRyYXNoLWNhbi5zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMC44cmVtIDEuM3JlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4ZGY5OTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDgpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkZjk5O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kLmNyb3NzIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgd2lkdGg6IDg3LjElO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1hbGwge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMTY4LCAyLCAxMTEpLCByZ2IoMjE5LCA0NSwgNjcpLCByZ2IoMjMxLCAxMDQsIDU2KSwgcmdiKDI1NSwgMTUzLCAwKSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICN0b2RvLWxpc3QsXFxyXFxuICAjaGVybyB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICogYXMgU3RvcmUgZnJvbSAnLi9tb2R1bGVzL2xvY2FsLXN0b3JhZ2UuanMnO1xyXG5pbXBvcnQgVUlEaXNwbGF5IGZyb20gJy4vbW9kdWxlcy91c2VySW50ZXJmYWNlLmpzJztcclxuaW1wb3J0IHRhc2tBcnIgZnJvbSAnLi9tb2R1bGVzL3Rhc2thcnIuanMnO1xyXG5pbXBvcnQgcmVtb3ZlVGFzayBmcm9tICcuL21vZHVsZXMvcmVtb3ZlVGFzay5qcyc7XHJcbmltcG9ydCBhZGROZXdUYXNrIGZyb20gJy4vbW9kdWxlcy9hZGR0YXNrLmpzJztcclxuaW1wb3J0IGZpbHRlckFsbCBmcm9tICcuL21vZHVsZXMvY2xlYXJBbGwuanMnO1xyXG5cclxuY29uc3Qgc3luY0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYycpO1xyXG5cclxuc3luY0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgdGFza0Fyci5mb3JFYWNoKCh0YXNrKSA9PiB7IHRhc2suY29tcGxldGVkID0gdHJ1ZTsgfSk7XHJcbiAgY29uc3QgY29tcGxldGVkID0gdGFza0Fyci5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSB0cnVlKTtcclxuICBjb21wbGV0ZWQuZm9yRWFjaCgodGFzaykgPT4gcmVtb3ZlVGFzayh0YXNrKSk7XHJcbn0pO1xyXG5cclxuY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkJyk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIFN0b3JlLmdldFRhc2tzKHRhc2tBcnIpO1xyXG4gIHRhc2tBcnIuZm9yRWFjaCgodGFzaykgPT4geyB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlOyB9KTtcclxuICBTdG9yZS5hZGRUYXNrKHRhc2tBcnIpO1xyXG4gIFVJRGlzcGxheS5kaXNwbGF5VGFrcyh0YXNrQXJyKTtcclxufSk7XHJcblxyXG5jb25zdCBhZGRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1pY29uJyk7XHJcblxyXG5hZGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGFkZElucHV0LnZhbHVlKSB7XHJcbiAgICBhZGROZXdUYXNrKGFkZElucHV0LnZhbHVlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZElucHV0LnZhbHVlID0gJyc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBhZGRJbnB1dC52YWx1ZSkge1xyXG4gICAgYWRkTmV3VGFzayhhZGRJbnB1dC52YWx1ZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhZGRJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBjbGVhckFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1hbGwnKTtcclxuXHJcbmNsZWFyQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGZpbHRlckFsbCh0YXNrQXJyKTtcclxufSk7IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrZWwuanMnO1xyXG5pbXBvcnQgVUlEaXNwbGF5IGZyb20gJy4vdXNlckludGVyZmFjZS5qcyc7XHJcbmltcG9ydCAqIGFzIFN0b3JlIGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XHJcbmltcG9ydCB0YXNrQXJyIGZyb20gJy4vdGFza2Fyci5qcyc7XHJcblxyXG5jb25zdCBhZGROZXdUYXNrID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHZhbHVlLCBmYWxzZSwgdGFza0Fyci5sZW5ndGggKyAxKTtcclxuICB0YXNrQXJyLnB1c2godGFzayk7XHJcbiAgVUlEaXNwbGF5LmNyZWF0ZVRhc2sodGFzayk7XHJcbiAgU3RvcmUuYWRkVGFzayh0YXNrQXJyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZE5ld1Rhc2s7XHJcbiIsImltcG9ydCB0YXNrQXJyIGZyb20gJy4vdGFza2Fyci5qcyc7XHJcbmltcG9ydCAqIGFzIFN0b3JlIGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XHJcblxyXG5jb25zdCBjaGFuZ2VEZXNjID0gKGlucHV0LCB0YXNrZWwsIGVsKSA9PiB7XHJcbiAgdGFza2VsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIGlucHV0LnZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIHRhc2tlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIHRhc2tBcnJbZWwuaW5kZXggLSAxXS5kZXNjcmlwdGlvbiA9IGlucHV0LnZhbHVlO1xyXG4gICAgU3RvcmUuYWRkVGFzayh0YXNrQXJyKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYW5nZURlc2M7IiwiaW1wb3J0ICogYXMgU3RvcmUgZnJvbSAnLi9sb2NhbC1zdG9yYWdlLmpzJztcclxuaW1wb3J0IHRhc2tBcnIgZnJvbSAnLi90YXNrYXJyLmpzJztcclxuXHJcbmNvbnN0IGNoZWNrVGFzayA9IChkb3RzLCB0YXNrRGVzYywgdGFzaywgdHJhc2hJY29uLCBlbCkgPT4ge1xyXG4gIGRvdHMuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gIHRyYXNoSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgdGFza0Rlc2MuY2xhc3NMaXN0LnRvZ2dsZSgnY3Jvc3MnKTtcclxuICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIGlmIChlbC5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICBlbC5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgU3RvcmUuYWRkVGFzayh0YXNrQXJyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrVGFzaztcclxuIiwiaW1wb3J0IHJlbW92ZVRhc2sgZnJvbSAnLi9yZW1vdmVUYXNrLmpzJztcclxuXHJcbmNvbnN0IGZpbHRlckFsbCA9IChhcnIpID0+IHtcclxuICBjb25zdCByZW1haW4gPSBhcnI7XHJcbiAgY29uc3QgY29tcGxldGVkID0gcmVtYWluLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IHRydWUpO1xyXG4gIGNvbXBsZXRlZC5mb3JFYWNoKCh0YXNrKSA9PiByZW1vdmVUYXNrKHRhc2spKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlckFsbDtcclxuIiwiY29uc3QgZ2V0VGFza3MgPSAodGFza3MpID0+IHRhc2tzLnB1c2goLi4uSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkpO1xyXG5cclxuY29uc3QgYWRkVGFzayA9ICh0YXNrcykgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRUYXNrcywgYWRkVGFzayB9O1xyXG4iLCJpbXBvcnQgdGFza0FyciBmcm9tICcuL3Rhc2thcnIuanMnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UuanMnO1xyXG5cclxuY29uc3QgcmVtb3ZlVGFzayA9IChvYmopID0+IHtcclxuICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdHJhc2gtY2FuJyk7XHJcbiAgY29uc3QgdHJhc2hBcnIgPSBBcnJheS5mcm9tKHRyYXNoSWNvbik7XHJcbiAgaWYgKG9iai5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgIHRyYXNoQXJyW29iai5pbmRleCAtIDFdLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgdGFza0Fyci5zcGxpY2Uob2JqLmluZGV4IC0gMSwgMSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGFza0FycltpXS5pbmRleCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBTdG9yZS5hZGRUYXNrKHRhc2tBcnIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlVGFzaztcclxuIiwiY29uc3QgdGFza0FyciA9IFtdO1xyXG5leHBvcnQgZGVmYXVsdCB0YXNrQXJyOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICB9XHJcbn0iLCJpbXBvcnQgcmVtb3ZlVGFzayBmcm9tICcuL3JlbW92ZVRhc2suanMnO1xyXG5pbXBvcnQgY2hhbmdlRGVzYyBmcm9tICcuL2NoYW5nZURlc2MuanMnO1xyXG5pbXBvcnQgY2hlY2tUYXNrIGZyb20gJy4vY2hlY2tUYXNrLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRGlzcGxheSB7XHJcbiAgc3RhdGljIGNyZWF0ZVRhc2sgPSAoZWwpID0+IHtcclxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja0InKTtcclxuICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZCcpO1xyXG4gICAgdGFza0Rlc2MudmFsdWUgPSBgJHtlbC5kZXNjcmlwdGlvbn1gO1xyXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XHJcblxyXG4gICAgY29uc3QgZG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGRvdHMuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtZWxsaXBzaXMtdmVydGljYWwnLCAnc2hvdycpO1xyXG4gICAgdGFzay5hcHBlbmRDaGlsZChkb3RzKTtcclxuXHJcbiAgICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtdHJhc2gtY2FuJyk7XHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XHJcblxyXG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBjaGVja1Rhc2soZG90cywgdGFza0Rlc2MsIHRhc2ssIHRyYXNoSWNvbiwgZWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza0Rlc2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZURlc2ModGFza0Rlc2MsIHRhc2ssIGVsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcmVtb3ZlVGFzayhlbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JykuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRpc3BsYXlUYWtzKGFycikge1xyXG4gICAgYXJyLmZvckVhY2goKGVsKSA9PiBVSURpc3BsYXkuY3JlYXRlVGFzayhlbCkpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=