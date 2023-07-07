"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/compound-component.tsx":
/*!*******************************************!*\
  !*** ./components/compound-component.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_without_properties.mjs */ \"./node_modules/@swc/helpers/src/_object_without_properties.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction cn() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Card(param) {\n    var children = param.children, image = param.image;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: image,\n        className: \"group\",\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\components\\\\compound-component.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = Card;\nfunction CardImage(param) {\n    var alt = param.alt, src = param.src;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setLoading = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            alt: alt,\n            src: src,\n            layout: \"fill\",\n            objectFit: \"cover\",\n            className: cn(\"duration-700 ease-in-out group-hover:opacity-75\", isLoading ? \"scale-110 blur-2xl grayscale\" : \"scale-100 blur-0 grayscale-0\"),\n            onLoadingComplete: function() {\n                return setLoading(false);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\components\\\\compound-component.tsx\",\n            lineNumber: 21,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\components\\\\compound-component.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(CardImage, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c1 = CardImage;\nfunction CardId(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: \"mt-4 text-sm text-gray-700\",\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\components\\\\compound-component.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_c2 = CardId;\nfunction CardDescription(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\components\\\\compound-component.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c3 = CardDescription;\nfunction CardAuthor(_param) {\n    var children = _param.children, rest = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_param, [\n        \"children\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        className: \"mt-1 text-lg font-medium text-red-900\"\n    }, rest), {\n        children: children\n    }), void 0, false, {\n        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\components\\\\compound-component.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_c4 = CardAuthor;\nCard.Image = CardImage;\nCard.Id = CardId;\nCard.Description = CardDescription;\nCard.Author = CardAuthor;\n // export { Card, CardImage, CardId, CardDescription, CardAuthor }\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CardImage\");\n$RefreshReg$(_c2, \"CardId\");\n$RefreshReg$(_c3, \"CardDescription\");\n$RefreshReg$(_c4, \"CardAuthor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdOLGVBQWU7QUFDbENqQixJQUFJLENBQUN3QixNQUFNLEdBQUdMLFVBQVU7QUFFWCxDQUNiLGtFQUFrRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbXBvdW5kLWNvbXBvbmVudC50c3g/YmFjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdHlwZSBSZWFjdE5vZGUsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gY24oLi4uY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZCh7IGNoaWxkcmVuLCBpbWFnZSB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUsIGltYWdlOiBzdHJpbmcgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgaHJlZj17aW1hZ2V9IGNsYXNzTmFtZT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhcmRJbWFnZSh7IGFsdCwgc3JjIH06IHsgYWx0OiBzdHJpbmcsIHNyYzogc3RyaW5nIH0pIHtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktMjAwIHhsOmFzcGVjdC13LTcgeGw6YXNwZWN0LWgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkdXJhdGlvbi03MDAgZWFzZS1pbi1vdXQgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnc2NhbGUtMTEwIGJsdXItMnhsIGdyYXlzY2FsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NjYWxlLTEwMCBibHVyLTAgZ3JheXNjYWxlLTAnXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZT17KCkgPT4gc2V0TG9hZGluZyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZElkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+e2NoaWxkcmVufTwvaDM+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhcmREZXNjcmlwdGlvbih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdHJvbmc+e2NoaWxkcmVufTwvc3Ryb25nPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDYXJkQXV0aG9yKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0gJiBPbWl0PEhUTUxBdHRyaWJ1dGVzPEhUTUxQYXJhZ3JhcGhFbGVtZW50PiwgJyc+KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LXJlZC05MDBcIiB7Li4ucmVzdH0+e2NoaWxkcmVufTwvcD5cclxuICAgIClcclxufVxyXG5cclxuQ2FyZC5JbWFnZSA9IENhcmRJbWFnZVxyXG5DYXJkLklkID0gQ2FyZElkXHJcbkNhcmQuRGVzY3JpcHRpb24gPSBDYXJkRGVzY3JpcHRpb25cclxuQ2FyZC5BdXRob3IgPSBDYXJkQXV0aG9yXHJcblxyXG5leHBvcnQge0NhcmR9XHJcbi8vIGV4cG9ydCB7IENhcmQsIENhcmRJbWFnZSwgQ2FyZElkLCBDYXJkRGVzY3JpcHRpb24sIENhcmRBdXRob3IgfSJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiY24iLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJDYXJkIiwiY2hpbGRyZW4iLCJpbWFnZSIsImEiLCJocmVmIiwiY2xhc3NOYW1lIiwiQ2FyZEltYWdlIiwiYWx0Iiwic3JjIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImRpdiIsImxheW91dCIsIm9iamVjdEZpdCIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiQ2FyZElkIiwiaDMiLCJDYXJkRGVzY3JpcHRpb24iLCJzdHJvbmciLCJDYXJkQXV0aG9yIiwicmVzdCIsInAiLCJJZCIsIkRlc2NyaXB0aW9uIiwiQXV0aG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/compound-component.tsx\n"));

/***/ })

});