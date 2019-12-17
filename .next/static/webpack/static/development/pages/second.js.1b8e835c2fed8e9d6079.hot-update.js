webpackHotUpdate("static\\development\\pages\\second.js",{

/***/ "./src/pages/second.js":
/*!*****************************!*\
  !*** ./src/pages/second.js ***!
  \*****************************/
/*! exports provided: initGA, logPageView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
var _jsxFileName = "D:\\Danar-Fold\\google-analytics\\ga-integration\\src\\pages\\second.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const initGA = () => {
  console.log("init GA");
  react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].initialize("UA-154580794-1");
};
const logPageView = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].pageview(window.location.pathname);
  console.log(window.location.pathname);
};

class second extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "second"), "Welcome to Next.js!", __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "This second index page"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(second));

/***/ })

})
//# sourceMappingURL=second.js.1b8e835c2fed8e9d6079.hot-update.js.map