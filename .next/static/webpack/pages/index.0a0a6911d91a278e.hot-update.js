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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGallery\": function() { return /* binding */ useGallery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_compound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/compound-component */ \"./components/compound-component.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction cn() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction useGallery(images) {\n    var _this = this;\n    console.log(images);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Porps component\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                        children: images && images.map(function(image) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlurImage, {\n                                image: image.download_url,\n                                author: image.author,\n                                id: image.id\n                            }, image.id, false, {\n                                fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Compound component\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                        children: images && images.map(function(param) {\n                            var author = param.author, download_url = param.download_url, height = param.height, id = param.id, url = param.url, width = param.width;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compound_component__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                                image: download_url,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compound_component__WEBPACK_IMPORTED_MODULE_3__.Card.Image, {\n                                        alt: author,\n                                        src: download_url\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compound_component__WEBPACK_IMPORTED_MODULE_3__.Card.Id, {\n                                        children: id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compound_component__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {\n                                        children: \"descripcion\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compound_component__WEBPACK_IMPORTED_MODULE_3__.Card.Author, {\n                                        onMouseEnter: function() {\n                                            return console.log(\"asdf\");\n                                        },\n                                        children: author\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\nfunction BlurImage(param) {\n    var image = param.image, author = param.author, id = param.id, _description = param.description, description = _description === void 0 ? \"kjasbdviasbv\" : _description;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref[0], setLoading = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: image,\n            className: \"group\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: author,\n                        src: image,\n                        layout: \"fill\",\n                        objectFit: \"cover\",\n                        className: cn(\"duration-700 ease-in-out group-hover:opacity-75\", isLoading ? \"scale-110 blur-2xl grayscale\" : \"scale-100 blur-0 grayscale-0\"),\n                        onLoadingComplete: function() {\n                            return setLoading(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this),\n                id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"mt-4 text-sm text-gray-700\",\n                    children: id\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 20\n                }, this),\n                description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 29\n                }, this),\n                author && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-1 text-lg font-medium text-gray-900\",\n                    children: author\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(BlurImage, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = BlurImage;\nvar _c;\n$RefreshReg$(_c, \"BlurImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxHQUFJaEMsR0FBYyxHQUFsQjtJQUU1QixxQkFDSTtrQkFFQSw0RUFBQ2lDLEdBQUM7WUFBQ0MsSUFBSSxFQUFFbEIsS0FBSztZQUFFSCxTQUFTLEVBQUMsT0FBTzs7OEJBQzdCLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsaUdBQWlHOzhCQUM1Ryw0RUFBQ1osbURBQUs7d0JBQ0Z1QixHQUFHLEVBQUVMLE1BQU07d0JBQ1hNLEdBQUcsRUFBRVQsS0FBSzt3QkFDVm1CLE1BQU0sRUFBQyxNQUFNO3dCQUNiQyxTQUFTLEVBQUMsT0FBTzt3QkFDakJ2QixTQUFTLEVBQUVWLEVBQUUsQ0FDVCxpREFBaUQsRUFDakQ0QixTQUFTLEdBQ0gsOEJBQThCLEdBQzlCLDhCQUE4QixDQUN2Qzt3QkFDRE0saUJBQWlCLEVBQUU7bUNBQU1MLFVBQVUsQ0FBQyxLQUFLLENBQUM7eUJBQUE7Ozs7OzRCQUM1Qzs7Ozs7d0JBQ0E7Z0JBQ0xaLEVBQUUsa0JBQUksOERBQUNrQixJQUFFO29CQUFDekIsU0FBUyxFQUFDLDRCQUE0Qjs4QkFBRU8sRUFBRTs7Ozs7d0JBQU07Z0JBQzFEVSxXQUFXLGtCQUFJLDhEQUFDUyxRQUFNOzhCQUFFVCxXQUFXOzs7Ozt3QkFBVTtnQkFDN0NYLE1BQU0sa0JBQUksOERBQUNxQixHQUFDO29CQUFDM0IsU0FBUyxFQUFDLHdDQUF3Qzs4QkFBRU0sTUFBTTs7Ozs7d0JBQUs7Ozs7OztnQkFDN0U7cUJBQ0QsQ0FDTjtBQUNMLENBQUM7R0E1QlFGLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VHYWxsZXJ5LnRzeD85YzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb3VuZC1jb21wb25lbnQnO1xuXG5mdW5jdGlvbiBjbiguLi5jbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcbn1cblxudHlwZSBJbWFnZSA9IHtcbiAgICBpZDogbnVtYmVyXG4gICAgYXV0aG9yOiBzdHJpbmdcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgICB1cmw6IHN0cmluZ1xuICAgIGRvd25sb2FkX3VybDogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYWxsZXJ5KGltYWdlczogSW1hZ2VbXSkge1xuICAgIGNvbnNvbGUubG9nKGltYWdlcyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gXG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LThcIj4gICAgXG4gICAgICAgIDxoMT5Qb3JwcyBjb21wb25lbnQ8L2gxPiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XG4gICAgICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubWFwKChpbWFnZTogSW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJsdXJJbWFnZSBrZXk9e2ltYWdlLmlkfSBpbWFnZT17aW1hZ2UuZG93bmxvYWRfdXJsfSBhdXRob3I9e2ltYWdlLmF1dGhvcn0gaWQ9e2ltYWdlLmlkfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIHB5LTE2IHB4LTQgc206cHktMjQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOFwiPiAgICAgICAgXG4gICAgICAgIDxoMT5Db21wb3VuZCBjb21wb25lbnQ8L2gxPiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xMCBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcCgoe2F1dGhvciwgZG93bmxvYWRfdXJsLCBoZWlnaHQsIGlkLCB1cmwsIHdpZHRofTogSW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtpZH0gaW1hZ2U9e2Rvd25sb2FkX3VybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWFnZSBhbHQ9e2F1dGhvcn0gc3JjPXtkb3dubG9hZF91cmx9PjwvQ2FyZC5JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLklkPntpZH08L0NhcmQuSWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5kZXNjcmlwY2lvbjwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkF1dGhvciBvbk1vdXNlRW50ZXI9eygpID0+IGNvbnNvbGUubG9nKFwiYXNkZlwiKX0+e2F1dGhvcn08L0NhcmQuQXV0aG9yPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEJsdXJJbWFnZSh7IGltYWdlLCBhdXRob3IsIGlkLCBkZXNjcmlwdGlvbiA9ICdramFzYmR2aWFzYnYnIH06IHsgaW1hZ2U6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGlkOiBudW1iZXIsIGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7LyogPGgxPkNvbXBvdW5kIGNvbXBvbmVudDwvaDE+ICovfVxuICAgICAgICA8YSBocmVmPXtpbWFnZX0gY2xhc3NOYW1lPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXctMSBhc3BlY3QtaC0xIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy1ncmF5LTIwMCB4bDphc3BlY3Qtdy03IHhsOmFzcGVjdC1oLThcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3J9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgICAgICAnZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOm9wYWNpdHktNzUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnc2NhbGUtMTEwIGJsdXItMnhsIGdyYXlzY2FsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzY2FsZS0xMDAgYmx1ci0wIGdyYXlzY2FsZS0wJ1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZT17KCkgPT4gc2V0TG9hZGluZyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lkICYmIDxoMyBjbGFzc05hbWU9XCJtdC00IHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPntpZH08L2gzPn1cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8c3Ryb25nPntkZXNjcmlwdGlvbn08L3N0cm9uZz59XG4gICAgICAgICAgICB7YXV0aG9yICYmIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2F1dGhvcn08L3A+fVxuICAgICAgICA8L2E+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsIkNhcmQiLCJjbiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInVzZUdhbGxlcnkiLCJpbWFnZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpbWFnZSIsIkJsdXJJbWFnZSIsImRvd25sb2FkX3VybCIsImF1dGhvciIsImlkIiwiaGVpZ2h0IiwidXJsIiwid2lkdGgiLCJhbHQiLCJzcmMiLCJJZCIsIkRlc2NyaXB0aW9uIiwiQXV0aG9yIiwib25Nb3VzZUVudGVyIiwiZGVzY3JpcHRpb24iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiYSIsImhyZWYiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImgzIiwic3Ryb25nIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/useGallery.tsx\n"));

/***/ })

});