module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AuthorQuiz.css":
/*!****************************!*\
  !*** ./src/AuthorQuiz.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/AuthorQuiz.tsx":
/*!****************************!*\
  !*** ./src/AuthorQuiz.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_display_Display_Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/display/Display.Components */ "./src/components/display/Display.Components.tsx");
/* harmony import */ var _AuthorQuiz_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthorQuiz.css */ "./src/AuthorQuiz.css");
/* harmony import */ var _AuthorQuiz_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AuthorQuiz_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Grimma\\Desktop\\GItProjectsVSCodeLab42\\author-quiz\\src\\AuthorQuiz.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const mapStateToProps = state => {
  return {
    turnData: state.turnData,
    highlight: state.highlight
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAnswerSelected: answer => {
      dispatch({
        type: 'ANSWER_SELECTED',
        answer
      });
    },
    onContinue: () => {
      dispatch({
        type: 'CONTINUE'
      });
    }
  };
};

const AuthorQuiz = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(({
  turnData,
  highlight,
  onAnswerSelected,
  onContinue
}) => {
  return __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_components_display_Display_Components__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(_components_display_Display_Components__WEBPACK_IMPORTED_MODULE_3__["Turn"], _extends({}, turnData, {
    highlight: highlight,
    onAnswerSelected: onAnswerSelected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), __jsx(_components_display_Display_Components__WEBPACK_IMPORTED_MODULE_3__["Continue"], {
    show: highlight === 'correct',
    onContinue: onContinue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/add",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Add an Author")), __jsx(_components_display_Display_Components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (AuthorQuiz);

/***/ }),

/***/ "./src/bootstrap.min.css":
/*!*******************************!*\
  !*** ./src/bootstrap.min.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/display/Display.Components.tsx":
/*!*******************************************************!*\
  !*** ./src/components/display/Display.Components.tsx ***!
  \*******************************************************/
/*! exports provided: Hero, Book, Turn, Continue, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_components_Diplay_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.components/Diplay.Hero */ "./src/components/display/display.components/Diplay.Hero.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _display_components_Diplay_Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _display_components_Display_Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.components/Display.Book */ "./src/components/display/display.components/Display.Book.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _display_components_Display_Book__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _display_components_Display_Turn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.components/Display.Turn */ "./src/components/display/display.components/Display.Turn.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Turn", function() { return _display_components_Display_Turn__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _display_components_Display_Continue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display.components/Display.Continue */ "./src/components/display/display.components/Display.Continue.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Continue", function() { return _display_components_Display_Continue__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _display_components_Display_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display.components/Display.Footer */ "./src/components/display/display.components/Display.Footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _display_components_Display_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bootstrap.min.css */ "./src/bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);








/***/ }),

/***/ "./src/components/display/display.components/Diplay.Hero.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/display/display.components/Diplay.Hero.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bootstrap.min.css */ "./src/bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Grimma\\Desktop\\GItProjectsVSCodeLab42\\author-quiz\\src\\components\\display\\display.components\\Diplay.Hero.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Hero = () => {
  return __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jumbotron col-10 offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Auhtor Quiz"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Select the book written by:")));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/display/display.components/Display.Book.tsx":
/*!********************************************************************!*\
  !*** ./src/components/display/display.components/Display.Book.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bootstrap.min.css */ "./src/bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Grimma\\Desktop\\GItProjectsVSCodeLab42\\author-quiz\\src\\components\\display\\display.components\\Display.Book.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Book = ({
  title,
  onClick
}) => {
  return __jsx("div", {
    className: "answer",
    onClick: () => {
      onClick(title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Book);

/***/ }),

/***/ "./src/components/display/display.components/Display.Continue.tsx":
/*!************************************************************************!*\
  !*** ./src/components/display/display.components/Display.Continue.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bootstrap.min.css */ "./src/bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Grimma\\Desktop\\GItProjectsVSCodeLab42\\author-quiz\\src\\components\\display\\display.components\\Display.Continue.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Continue = ({
  show,
  onContinue
}) => {
  return __jsx("div", {
    className: "row container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, show ? __jsx("div", {
    className: "col-11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("button", {
    className: "btn btn-primary btn-lg float-right",
    onClick: onContinue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Continue")) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Continue);

/***/ }),

/***/ "./src/components/display/display.components/Display.Footer.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/display/display.components/Display.Footer.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bootstrap.min.css */ "./src/bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Grimma\\Desktop\\GItProjectsVSCodeLab42\\author-quiz\\src\\components\\display\\display.components\\Display.Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  return __jsx("div", {
    id: "footer",
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("p", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "All images are from ", __jsx("a", {
    href: "https://commons.wikimedia.org/wiki/Main_Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Wikimedia Commons"), " and are in public domain.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/display/display.components/Display.Turn.tsx":
/*!********************************************************************!*\
  !*** ./src/components/display/display.components/Display.Turn.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Display_Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display.Book */ "./src/components/display/display.components/Display.Book.tsx");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bootstrap.min.css */ "./src/bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Grimma\\Desktop\\GItProjectsVSCodeLab42\\author-quiz\\src\\components\\display\\display.components\\Display.Turn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Turn = ({
  author,
  books,
  highlight,
  onAnswerSelected
}) => {
  const highlightToBackgroundColor = {
    'none': '',
    'correct': 'lightGreen',
    'wrong': 'pink'
  };
  return __jsx("div", {
    className: "row turn",
    style: {
      backgroundColor: highlightToBackgroundColor[highlight]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-4 offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("img", {
    src: author.imageUrl,
    className: "authorimage",
    alt: "Author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, books.map(title => __jsx(_Display_Book__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    key: title,
    onClick: onAnswerSelected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Turn);

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthorQuiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AuthorQuiz */ "./src/AuthorQuiz.tsx");
/* harmony import */ var _AuthorQuiz_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AuthorQuiz.css */ "./src/AuthorQuiz.css");
/* harmony import */ var _AuthorQuiz_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AuthorQuiz_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map