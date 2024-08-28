"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/stairs.jsx":
/*!****************************!*\
  !*** ./src/app/stairs.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"(app-pages-browser)/./node_modules/next/node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _mo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mo.css */ \"(app-pages-browser)/./src/app/mo.css\");\n\n\n\n\n\nfunction Stairs() {\n    var _this = this;\n    var animation = {\n        initial: {\n            top: \"0%\"\n        },\n        animate: {\n            top: \"200%\"\n        },\n        exit: {\n            top: [\n                \"200%\",\n                \"0%\"\n            ]\n        }\n    };\n    var reverseIndex = function(index) {\n        var total = 12;\n        return total - index - 1;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__._)(Array(12)).map(function(_, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                variants: animation,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    duration: .3,\n                    ease: \"easeInOut\",\n                    delay: reverseIndex(index) * .6\n                },\n                className: \"full\"\n            }, index, false, {\n                fileName: \"C:\\\\cv\\\\youtube\\\\yousef26\\\\src\\\\app\\\\stairs.jsx\",\n                lineNumber: 24,\n                columnNumber: 21\n            }, _this);\n        })\n    }, void 0, false);\n}\n_c = Stairs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stairs);\nvar _c;\n$RefreshReg$(_c, \"Stairs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3RhaXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDcUM7QUFDN0M7QUFDakIsU0FBU0k7O0lBQ0wsSUFBTUMsWUFBWTtRQUNkQyxTQUFTO1lBQ0xDLEtBQUs7UUFDVDtRQUNBTixTQUFTO1lBQ0xNLEtBQUs7UUFDVDtRQUNBQyxNQUFNO1lBQ0ZELEtBQUs7Z0JBQUM7Z0JBQVE7YUFBSztRQUN2QjtJQUNKO0lBQ0EsSUFBTUUsZUFBZSxTQUFDQztRQUNsQixJQUFJQyxRQUFRO1FBQ1osT0FBT0EsUUFBUUQsUUFBUTtJQUMzQjtJQUNBLHFCQUNJO2tCQUNLLG9FQUFJRSxNQUFNLEtBQUtDLEdBQUcsQ0FBQyxTQUFDQyxHQUFHSjtZQUNwQixxQkFDSSw4REFBQ1IsaURBQU1BLENBQUNhLEdBQUc7Z0JBRVBDLFVBQVVYO2dCQUNWQyxTQUFRO2dCQUNSTCxTQUFRO2dCQUNSTyxNQUFLO2dCQUNMUyxZQUFZO29CQUNSQyxVQUFVO29CQUNWQyxNQUFNO29CQUNOQyxPQUFPWCxhQUFhQyxTQUFPO2dCQUMvQjtnQkFDQVcsV0FBVTtlQVZMWDs7Ozs7UUFjakI7O0FBR1o7S0F0Q1NOO0FBd0NULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3RhaXJzLmpzeD8wYTBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYW5pbWF0ZSwgbW90aW9uLCByZXZlcnNlRWFzaW5nIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IFwiLi9tby5jc3NcIlxyXG5mdW5jdGlvbiBTdGFpcnMoKSB7XHJcbiAgICBjb25zdCBhbmltYXRpb24gPSB7XHJcbiAgICAgICAgaW5pdGlhbDoge1xyXG4gICAgICAgICAgICB0b3A6IFwiMCVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICB0b3A6IFwiMjAwJVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGl0OiB7XHJcbiAgICAgICAgICAgIHRvcDogW1wiMjAwJVwiLCBcIjAlXCJdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmV2ZXJzZUluZGV4ID0gKGluZGV4KT0+e1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDEyXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsIC0gaW5kZXggLSAxXHJcbiAgICB9IFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Wy4uLkFycmF5KDEyKV0ubWFwKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17YW5pbWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPSdpbml0aWFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPSdhbmltYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0PSdleGl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogLjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiAnZWFzZUluT3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiByZXZlcnNlSW5kZXgoaW5kZXgpKi42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZnVsbCdcclxuICAgICAgICAgICAgICAgICAgICA+PC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhaXJzXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImFuaW1hdGUiLCJtb3Rpb24iLCJyZXZlcnNlRWFzaW5nIiwiU3RhaXJzIiwiYW5pbWF0aW9uIiwiaW5pdGlhbCIsInRvcCIsImV4aXQiLCJyZXZlcnNlSW5kZXgiLCJpbmRleCIsInRvdGFsIiwiQXJyYXkiLCJtYXAiLCJfIiwiZGl2IiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZGVsYXkiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/stairs.jsx\n"));

/***/ })

});