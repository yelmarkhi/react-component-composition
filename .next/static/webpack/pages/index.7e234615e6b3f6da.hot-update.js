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

/***/ "./pages/useGallery.tsx":
/*!******************************!*\
  !*** ./pages/useGallery.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGallery\": function() { return /* binding */ useGallery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/compoundComponent */ \"./components/compoundComponent.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction cn() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\n/**\n * Componente que renderiza un Card que contiene la imagen, el autor y el id de la imagen\n * @param props\n * @returns component\n */ function CardImageProps(param) {\n    var image = param.image, author = param.author, id = param.id, _description = param.description, description = _description === void 0 ? \"bla bla bla\" : _description;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref[0], setLoading = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: image,\n            className: \"group\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: author,\n                        src: image,\n                        layout: \"fill\",\n                        objectFit: \"cover\",\n                        className: cn(\"duration-700 ease-in-out group-hover:opacity-75\", isLoading ? \"scale-110 blur-2xl grayscale\" : \"scale-100 blur-0 grayscale-0\"),\n                        onLoadingComplete: function() {\n                            return setLoading(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this),\n                id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"mt-4 text-sm text-gray-700\",\n                    children: id\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 20\n                }, this),\n                author && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-1 text-lg font-medium text-gray-900\",\n                    children: author\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 24\n                }, this),\n                description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 29\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CardImageProps, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = CardImageProps;\n/**\n * hook que renderiza un componente que contiene los componentes por porps/ y los componentes por composicion por cachetos\n * @param images \n * @returns componente Card\n */ function useGallery(images) {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-1 text-xl font-medium text-blue-500\",\n                    children: \"Props component\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                    children: images && images.map(function(image) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardImageProps, {\n                            image: image.download_url,\n                            author: image.author,\n                            id: image.id\n                        }, image.id, false, {\n                            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-1 text-xl font-medium text-blue-500\",\n                    children: \"Compound component\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                    children: images.map(function(param) {\n                        var id = param.id, author = param.author, download_url = param.download_url, height = param.height, url = param.url, width = param.width;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            image: download_url,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Image, {\n                                    alt: author,\n                                    src: download_url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Id, {\n                                    children: id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Author, {\n                                    onMouseEnter: function() {\n                                        return console.log(\"hola on mouse enter\");\n                                    },\n                                    children: author\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {\n                                    children: \"descripcion\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"height : \",\n                                        height,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \" width : \",\n                                        width\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, id, true, {\n                            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\nvar _c;\n$RefreshReg$(_c, \"CardImageProps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBvdW5kQ29tcG9uZW50JztcblxuZnVuY3Rpb24gY24oLi4uY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG59XG5cbnR5cGUgSW1hZ2UgPSB7XG4gICAgaWQ6IG51bWJlclxuICAgIGF1dGhvcjogc3RyaW5nXG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWdodDogbnVtYmVyXG4gICAgdXJsOiBzdHJpbmdcbiAgICBkb3dubG9hZF91cmw6IHN0cmluZ1xufVxuXG4vKipcbiAqIENvbXBvbmVudGUgcXVlIHJlbmRlcml6YSB1biBDYXJkIHF1ZSBjb250aWVuZSBsYSBpbWFnZW4sIGVsIGF1dG9yIHkgZWwgaWQgZGUgbGEgaW1hZ2VuXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBDYXJkSW1hZ2VQcm9wcyh7IGltYWdlLCBhdXRob3IsIGlkLCBkZXNjcmlwdGlvbiA9ICdibGEgYmxhIGJsYScgfTogeyBpbWFnZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgaWQ6IG51bWJlciwgZGVzY3JpcHRpb24/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PiAgICAgICAgXG4gICAgICAgIDxhIGhyZWY9e2ltYWdlfSBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktMjAwIHhsOmFzcGVjdC13LTcgeGw6YXNwZWN0LWgtOFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkdXJhdGlvbi03MDAgZWFzZS1pbi1vdXQgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdzY2FsZS0xMTAgYmx1ci0yeGwgZ3JheXNjYWxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NjYWxlLTEwMCBibHVyLTAgZ3JheXNjYWxlLTAnXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlPXsoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aWQgJiYgPGgzIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+e2lkfTwvaDM+fSAgICAgICAgICAgXG4gICAgICAgICAgICB7YXV0aG9yICYmIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2F1dGhvcn08L3A+fVxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxzdHJvbmc+e2Rlc2NyaXB0aW9ufTwvc3Ryb25nPn1cbiAgICAgICAgPC9hPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbi8qKlxuICogaG9vayBxdWUgcmVuZGVyaXphIHVuIGNvbXBvbmVudGUgcXVlIGNvbnRpZW5lIGxvcyBjb21wb25lbnRlcyBwb3IgcG9ycHMvIHkgbG9zIGNvbXBvbmVudGVzIHBvciBjb21wb3NpY2lvbiBwb3IgY2FjaGV0b3NcbiAqIEBwYXJhbSBpbWFnZXMgXG4gKiBAcmV0dXJucyBjb21wb25lbnRlIENhcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbGxlcnkoaW1hZ2VzOiBJbWFnZVtdKSB7ICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+ICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIHB5LTE2IHB4LTQgc206cHktMjQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOFwiPiAgICBcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nbXQtMSB0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtYmx1ZS01MDAnPlByb3BzIGNvbXBvbmVudDwvaDE+ICAgICAgICAgICAgICBcbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XG4gICAgICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubWFwKChpbWFnZTogSW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZVByb3BzIGtleT17aW1hZ2UuaWR9IGltYWdlPXtpbWFnZS5kb3dubG9hZF91cmx9IGF1dGhvcj17aW1hZ2UuYXV0aG9yfSBpZD17aW1hZ2UuaWR9IC8+XG4gICAgICAgICAgICAgICAgKSl9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyPjwvYnI+XG5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtdC0xIHRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ibHVlLTUwMCc+Q29tcG91bmQgY29tcG9uZW50PC9oMT4gICAgICAgIFxuICAgICAgICAgICAgPGJyPjwvYnI+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xMCBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgoe2lkLCBhdXRob3IsIGRvd25sb2FkX3VybCwgaGVpZ2h0LCB1cmwsIHdpZHRofTogSW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtpZH0gaW1hZ2U9e2Rvd25sb2FkX3VybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWFnZSBhbHQ9e2F1dGhvcn0gc3JjPXtkb3dubG9hZF91cmx9PjwvQ2FyZC5JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLklkPntpZH08L0NhcmQuSWQ+ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5BdXRob3Igb25Nb3VzZUVudGVyPXsoKSA9PiBjb25zb2xlLmxvZyhcImhvbGEgb24gbW91c2UgZW50ZXJcIil9PnthdXRob3J9PC9DYXJkLkF1dGhvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPmRlc2NyaXBjaW9uPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5oZWlnaHQgOiB7aGVpZ2h0fSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IHdpZHRoIDoge3dpZHRofTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJDYXJkIiwiY24iLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJDYXJkSW1hZ2VQcm9wcyIsImltYWdlIiwiYXV0aG9yIiwiaWQiLCJkZXNjcmlwdGlvbiIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJhIiwiaHJlZiIsImNsYXNzTmFtZSIsImRpdiIsImFsdCIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaDMiLCJwIiwic3Ryb25nIiwidXNlR2FsbGVyeSIsImltYWdlcyIsImgxIiwiYnIiLCJtYXAiLCJkb3dubG9hZF91cmwiLCJoZWlnaHQiLCJ1cmwiLCJ3aWR0aCIsIklkIiwiQXV0aG9yIiwib25Nb3VzZUVudGVyIiwiY29uc29sZSIsImxvZyIsIkRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/useGallery.tsx\n"));

/***/ })

});