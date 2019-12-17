webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: initGA, logPageView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./src/components/MyLayout.js");
/* harmony import */ var _components_pages_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pages/App */ "./src/components/pages/App.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
var _jsxFileName = "D:\\Danar-Fold\\google-analytics\\ga-integration\\src\\pages\\about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const initGA = () => {
  console.log("init GA");
  react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].initialize("UA-154580794-1");
};
const logPageView = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].pageview(window.location.pathname);
  console.log(window.location.search);
};

const aboutPageContent = __jsx(_components_pages_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
});

class about extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    initGA();
    logPageView();
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_components_pages_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ })

})
//# sourceMappingURL=about.js.d19a965f6dcb1f483f4a.hot-update.js.map