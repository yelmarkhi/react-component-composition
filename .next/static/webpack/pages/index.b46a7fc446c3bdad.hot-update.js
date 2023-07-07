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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGallery\": function() { return /* binding */ useGallery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/compoundComponent */ \"./components/compoundComponent.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction cn() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\n/**\n * Componente que renderiza un Card que contiene la imagen, el autor y el id de la imagen\n * @param props\n * @returns component\n */ function CardImageProps(param) {\n    var image = param.image, author = param.author, id = param.id, _description = param.description, description = _description === void 0 ? \"bla bla bla\" : _description;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref[0], setLoading = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: image,\n            className: \"group\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: author,\n                        src: image,\n                        layout: \"fill\",\n                        objectFit: \"cover\",\n                        className: cn(\"duration-700 ease-in-out group-hover:opacity-75\", isLoading ? \"scale-110 blur-2xl grayscale\" : \"scale-100 blur-0 grayscale-0\"),\n                        onLoadingComplete: function() {\n                            return setLoading(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this),\n                id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"mt-4 text-sm text-gray-700\",\n                    children: id\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 20\n                }, this),\n                author && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-1 text-lg font-medium text-gray-900\",\n                    children: author\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 24\n                }, this),\n                description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 29\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CardImageProps, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = CardImageProps;\n/**\n * hook que renderiza un componente que contiene los componentes por porps/ y los componentes por composicion por cachetos\n * @param images \n * @returns componente Card\n */ function useGallery(images) {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-1 text-xl font-medium text-blue-500\",\n                    children: \"Compound component\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                    children: [\n                        images.map(function(param) {\n                            var id = param.id, author = param.author, download_url = param.download_url, height = param.height, url = param.url, width = param.width;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                                image: download_url,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Image, {\n                                        alt: author,\n                                        src: download_url\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Id, {\n                                        children: id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Author, {\n                                        onMouseEnter: function() {\n                                            return console.log(\"hola on mouse enter\");\n                                        },\n                                        children: author\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {\n                                        children: \"descripcion\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"height : \",\n                                            height,\n                                            \" px\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"width : \",\n                                            width,\n                                            \" px\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, _this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mt-1 text-xl font-medium text-blue-500\",\n                            children: \"Props component\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                            children: images && images.map(function(image) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardImageProps, {\n                                    image: image.download_url,\n                                    author: image.author,\n                                    id: image.id\n                                }, image.id, false, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 21\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\nvar _c;\n$RefreshReg$(_c, \"CardImageProps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3g/OWM0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcG91bmRDb21wb25lbnQnO1xuXG5mdW5jdGlvbiBjbiguLi5jbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcbn1cblxudHlwZSBJbWFnZSA9IHtcbiAgICBpZDogbnVtYmVyXG4gICAgYXV0aG9yOiBzdHJpbmdcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgICB1cmw6IHN0cmluZ1xuICAgIGRvd25sb2FkX3VybDogc3RyaW5nXG59XG5cbi8qKlxuICogQ29tcG9uZW50ZSBxdWUgcmVuZGVyaXphIHVuIENhcmQgcXVlIGNvbnRpZW5lIGxhIGltYWdlbiwgZWwgYXV0b3IgeSBlbCBpZCBkZSBsYSBpbWFnZW5cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIENhcmRJbWFnZVByb3BzKHsgaW1hZ2UsIGF1dGhvciwgaWQsIGRlc2NyaXB0aW9uID0gJ2JsYSBibGEgYmxhJyB9OiB7IGltYWdlOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBpZDogbnVtYmVyLCBkZXNjcmlwdGlvbj86IHN0cmluZyB9KSB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+ICAgICAgICBcbiAgICAgICAgPGEgaHJlZj17aW1hZ2V9IGNsYXNzTmFtZT1cImdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC13LTEgYXNwZWN0LWgtMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctZ3JheS0yMDAgeGw6YXNwZWN0LXctNyB4bDphc3BlY3QtaC04XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2R1cmF0aW9uLTcwMCBlYXNlLWluLW91dCBncm91cC1ob3ZlcjpvcGFjaXR5LTc1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3NjYWxlLTExMCBibHVyLTJ4bCBncmF5c2NhbGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2NhbGUtMTAwIGJsdXItMCBncmF5c2NhbGUtMCdcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGU9eygpID0+IHNldExvYWRpbmcoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpZCAmJiA8aDMgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj57aWR9PC9oMz59ICAgICAgICAgICBcbiAgICAgICAgICAgIHthdXRob3IgJiYgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57YXV0aG9yfTwvcD59XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPHN0cm9uZz57ZGVzY3JpcHRpb259PC9zdHJvbmc+fVxuICAgICAgICA8L2E+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuLyoqXG4gKiBob29rIHF1ZSByZW5kZXJpemEgdW4gY29tcG9uZW50ZSBxdWUgY29udGllbmUgbG9zIGNvbXBvbmVudGVzIHBvciBwb3Jwcy8geSBsb3MgY29tcG9uZW50ZXMgcG9yIGNvbXBvc2ljaW9uIHBvciBjYWNoZXRvc1xuICogQHBhcmFtIGltYWdlcyBcbiAqIEByZXR1cm5zIGNvbXBvbmVudGUgQ2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FsbGVyeShpbWFnZXM6IEltYWdlW10pIHsgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgcHktMTYgcHgtNCBzbTpweS0yNCBzbTpweC02IGxnOm1heC13LTd4bCBsZzpweC04XCI+ICAgIFxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtdC0xIHRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ibHVlLTUwMCc+Q29tcG91bmQgY29tcG9uZW50PC9oMT4gICAgICAgIFxuICAgICAgICAgICAgPGJyPjwvYnI+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xMCBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgoe2lkLCBhdXRob3IsIGRvd25sb2FkX3VybCwgaGVpZ2h0LCB1cmwsIHdpZHRofTogSW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtpZH0gaW1hZ2U9e2Rvd25sb2FkX3VybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWFnZSBhbHQ9e2F1dGhvcn0gc3JjPXtkb3dubG9hZF91cmx9PjwvQ2FyZC5JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLklkPntpZH08L0NhcmQuSWQ+ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5BdXRob3Igb25Nb3VzZUVudGVyPXsoKSA9PiBjb25zb2xlLmxvZyhcImhvbGEgb24gbW91c2UgZW50ZXJcIil9PnthdXRob3J9PC9DYXJkLkF1dGhvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPmRlc2NyaXBjaW9uPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5oZWlnaHQgOiB7aGVpZ2h0fSBweDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj53aWR0aCA6IHt3aWR0aH0gcHg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpfVxuPGJyPjwvYnI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J210LTEgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWJsdWUtNTAwJz5Qcm9wcyBjb21wb25lbnQ8L2gxPiAgICAgICAgICAgICAgXG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxuICAgICAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcCgoaW1hZ2U6IEltYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2VQcm9wcyBrZXk9e2ltYWdlLmlkfSBpbWFnZT17aW1hZ2UuZG93bmxvYWRfdXJsfSBhdXRob3I9e2ltYWdlLmF1dGhvcn0gaWQ9e2ltYWdlLmlkfSAvPlxuICAgICAgICAgICAgICAgICkpfSAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwiQ2FyZCIsImNuIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiQ2FyZEltYWdlUHJvcHMiLCJpbWFnZSIsImF1dGhvciIsImlkIiwiZGVzY3JpcHRpb24iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiYSIsImhyZWYiLCJjbGFzc05hbWUiLCJkaXYiLCJhbHQiLCJzcmMiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImgzIiwicCIsInN0cm9uZyIsInVzZUdhbGxlcnkiLCJpbWFnZXMiLCJoMSIsImJyIiwibWFwIiwiZG93bmxvYWRfdXJsIiwiaGVpZ2h0IiwidXJsIiwid2lkdGgiLCJJZCIsIkF1dGhvciIsIm9uTW91c2VFbnRlciIsImNvbnNvbGUiLCJsb2ciLCJEZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/useGallery.tsx\n"));

/***/ })

});