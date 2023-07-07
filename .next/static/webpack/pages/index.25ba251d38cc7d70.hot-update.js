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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGallery\": function() { return /* binding */ useGallery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/compoundComponent */ \"./components/compoundComponent.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction cn() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\n/**\n * Componente que renderiza un Card que contiene la imagen, el autor y el id de la imagen\n * @param props\n * @returns component\n */ function CardImageProps(param) {\n    var image = param.image, author = param.author, id = param.id, _description = param.description, description = _description === void 0 ? \"bla bla bla\" : _description;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref[0], setLoading = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: image,\n            className: \"group\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: author,\n                        src: image,\n                        layout: \"fill\",\n                        objectFit: \"cover\",\n                        className: cn(\"duration-700 ease-in-out group-hover:opacity-75\", isLoading ? \"scale-110 blur-2xl grayscale\" : \"scale-100 blur-0 grayscale-0\"),\n                        onLoadingComplete: function() {\n                            return setLoading(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this),\n                id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"mt-4 text-sm text-gray-700\",\n                    children: id\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 20\n                }, this),\n                author && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-1 text-lg font-medium text-gray-900\",\n                    children: author\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 24\n                }, this),\n                description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 29\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CardImageProps, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = CardImageProps;\nfunction useGallery(images) {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-1 text-xl font-medium text-blue-500\",\n                    children: \"Props component\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                    children: images && images.map(function(image) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardImageProps, {\n                            image: image.download_url,\n                            author: image.author,\n                            id: image.id\n                        }, image.id, false, {\n                            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-1 text-xl font-medium text-blue-500\",\n                    children: \"Compound component\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                    children: images.map(function(param) {\n                        var id = param.id, author = param.author, download_url = param.download_url, height = param.height, url = param.url, width = param.width;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            image: download_url,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Image, {\n                                    alt: author,\n                                    src: download_url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Id, {\n                                    children: id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Author, {\n                                    onMouseEnter: function() {\n                                        return console.log(\"hola on mouse enter\");\n                                    },\n                                    children: author\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compoundComponent__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {\n                                    children: generarDescripcionAleatoria\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, id, true, {\n                            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\useGallery.tsx\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\nfunction generarDescripcionAleatoria() {\n    var palabras = [\n        \"Lorem\",\n        \"ipsum\",\n        \"dolor\",\n        \"sit\",\n        \"amet\",\n        \"consectetur\",\n        \"adipiscing\",\n        \"elit\",\n        \"sed\",\n        \"do\",\n        \"eiusmod\",\n        \"tempor\",\n        \"incididunt\",\n        \"ut\",\n        \"labore\",\n        \"et\",\n        \"dolore\",\n        \"magna\",\n        \"aliqua\"\n    ];\n    var longitud = Math.floor(Math.random() * 6) + 5; // Longitud de 5 a 10 palabras\n    var descripcion = [];\n    for(var i = 0; i < longitud; i++){\n        var indice = Math.floor(Math.random() * palabras.length);\n        descripcion.push(palabras[indice]);\n    }\n    return descripcion.join(\" \");\n}\nvar _c;\n$RefreshReg$(_c, \"CardImageProps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7UUFBRSxJQUFJO1FBQUUsUUFBUTtRQUFFLE9BQU87UUFBRSxRQUFRO0tBQ2hFO0lBRUQsSUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsOEJBQThCO0lBQ2xGLElBQU1DLFdBQVcsR0FBRyxFQUFFO0lBRXRCLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTCxRQUFRLEVBQUVLLENBQUMsRUFBRSxDQUFFO1FBQ2pDLElBQU1DLE1BQU0sR0FBR0wsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdKLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDO1FBQzFESCxXQUFXLENBQUNJLElBQUksQ0FBQ1QsUUFBUSxDQUFDTyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFPRixXQUFXLENBQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VHYWxsZXJ5LnRzeD85YzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb3VuZENvbXBvbmVudCc7XG5cbmZ1bmN0aW9uIGNuKC4uLmNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxufVxuXG50eXBlIEltYWdlID0ge1xuICAgIGlkOiBudW1iZXJcbiAgICBhdXRob3I6IHN0cmluZ1xuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIHVybDogc3RyaW5nXG4gICAgZG93bmxvYWRfdXJsOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBDb21wb25lbnRlIHF1ZSByZW5kZXJpemEgdW4gQ2FyZCBxdWUgY29udGllbmUgbGEgaW1hZ2VuLCBlbCBhdXRvciB5IGVsIGlkIGRlIGxhIGltYWdlblxuICogQHBhcmFtIHByb3BzXG4gKiBAcmV0dXJucyBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gQ2FyZEltYWdlUHJvcHMoeyBpbWFnZSwgYXV0aG9yLCBpZCwgZGVzY3JpcHRpb24gPSAnYmxhIGJsYSBibGEnIH06IHsgaW1hZ2U6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGlkOiBudW1iZXIsIGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gICAgICAgIFxuICAgICAgICA8YSBocmVmPXtpbWFnZX0gY2xhc3NOYW1lPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXctMSBhc3BlY3QtaC0xIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy1ncmF5LTIwMCB4bDphc3BlY3Qtdy03IHhsOmFzcGVjdC1oLThcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3J9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgICAgICAnZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOm9wYWNpdHktNzUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnc2NhbGUtMTEwIGJsdXItMnhsIGdyYXlzY2FsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzY2FsZS0xMDAgYmx1ci0wIGdyYXlzY2FsZS0wJ1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZT17KCkgPT4gc2V0TG9hZGluZyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lkICYmIDxoMyBjbGFzc05hbWU9XCJtdC00IHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPntpZH08L2gzPn0gICAgICAgICAgIFxuICAgICAgICAgICAge2F1dGhvciAmJiA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPnthdXRob3J9PC9wPn1cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8c3Ryb25nPntkZXNjcmlwdGlvbn08L3N0cm9uZz59XG4gICAgICAgIDwvYT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYWxsZXJ5KGltYWdlczogSW1hZ2VbXSkgeyAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LThcIj4gICAgXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J210LTEgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWJsdWUtNTAwJz5Qcm9wcyBjb21wb25lbnQ8L2gxPiAgICAgICAgICAgICAgXG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxuICAgICAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcCgoaW1hZ2U6IEltYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2VQcm9wcyBrZXk9e2ltYWdlLmlkfSBpbWFnZT17aW1hZ2UuZG93bmxvYWRfdXJsfSBhdXRob3I9e2ltYWdlLmF1dGhvcn0gaWQ9e2ltYWdlLmlkfSAvPlxuICAgICAgICAgICAgICAgICkpfSAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbXQtMSB0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtYmx1ZS01MDAnPkNvbXBvdW5kIGNvbXBvbmVudDwvaDE+ICAgICAgICBcbiAgICAgICAgICAgIDxicj48L2JyPiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XG4gICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHtpZCwgYXV0aG9yLCBkb3dubG9hZF91cmwsIGhlaWdodCwgdXJsLCB3aWR0aH06IEltYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aWR9IGltYWdlPXtkb3dubG9hZF91cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1hZ2UgYWx0PXthdXRob3J9IHNyYz17ZG93bmxvYWRfdXJsfT48L0NhcmQuSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JZD57aWR9PC9DYXJkLklkPiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQXV0aG9yIG9uTW91c2VFbnRlcj17KCkgPT4gY29uc29sZS5sb2coXCJob2xhIG9uIG1vdXNlIGVudGVyXCIpfT57YXV0aG9yfTwvQ2FyZC5BdXRob3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj57Z2VuZXJhckRlc2NyaXBjaW9uQWxlYXRvcmlhfTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5cblxuZnVuY3Rpb24gZ2VuZXJhckRlc2NyaXBjaW9uQWxlYXRvcmlhKCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFsYWJyYXMgPSBbXG4gICAgICAnTG9yZW0nLCAnaXBzdW0nLCAnZG9sb3InLCAnc2l0JywgJ2FtZXQnLCAnY29uc2VjdGV0dXInLFxuICAgICAgJ2FkaXBpc2NpbmcnLCAnZWxpdCcsICdzZWQnLCAnZG8nLCAnZWl1c21vZCcsICd0ZW1wb3InLFxuICAgICAgJ2luY2lkaWR1bnQnLCAndXQnLCAnbGFib3JlJywgJ2V0JywgJ2RvbG9yZScsICdtYWduYScsICdhbGlxdWEnXG4gICAgXTtcbiAgXG4gICAgY29uc3QgbG9uZ2l0dWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDU7IC8vIExvbmdpdHVkIGRlIDUgYSAxMCBwYWxhYnJhc1xuICAgIGNvbnN0IGRlc2NyaXBjaW9uID0gW107XG4gIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9uZ2l0dWQ7IGkrKykge1xuICAgICAgY29uc3QgaW5kaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGFsYWJyYXMubGVuZ3RoKTtcbiAgICAgIGRlc2NyaXBjaW9uLnB1c2gocGFsYWJyYXNbaW5kaWNlXSk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gZGVzY3JpcGNpb24uam9pbignICcpO1xuICB9Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJDYXJkIiwiY24iLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJDYXJkSW1hZ2VQcm9wcyIsImltYWdlIiwiYXV0aG9yIiwiaWQiLCJkZXNjcmlwdGlvbiIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJhIiwiaHJlZiIsImNsYXNzTmFtZSIsImRpdiIsImFsdCIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaDMiLCJwIiwic3Ryb25nIiwidXNlR2FsbGVyeSIsImltYWdlcyIsImgxIiwiYnIiLCJtYXAiLCJkb3dubG9hZF91cmwiLCJoZWlnaHQiLCJ1cmwiLCJ3aWR0aCIsIklkIiwiQXV0aG9yIiwib25Nb3VzZUVudGVyIiwiY29uc29sZSIsImxvZyIsIkRlc2NyaXB0aW9uIiwiZ2VuZXJhckRlc2NyaXBjaW9uQWxlYXRvcmlhIiwicGFsYWJyYXMiLCJsb25naXR1ZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRlc2NyaXBjaW9uIiwiaSIsImluZGljZSIsImxlbmd0aCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/useGallery.tsx\n"));

/***/ })

});