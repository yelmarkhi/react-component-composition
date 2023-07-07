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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_gallerySlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/gallerySlice */ \"./pages/redux/gallerySlice.ts\");\n/* harmony import */ var _useGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useGallery */ \"./pages/useGallery.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var pictures = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.gallery.pictures;\n    });\n    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.gallery.status;\n    });\n    var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.gallery.error;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var galleryHook = (0,_useGallery__WEBPACK_IMPORTED_MODULE_4__.useGallery)(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch((0,_redux_gallerySlice__WEBPACK_IMPORTED_MODULE_3__.fetchImages)());\n        setData(pictures);\n    }, [\n        dispatch,\n        pictures\n    ]);\n    // Renderiza el contenido según el estado de la solicitud fetch\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        role: \"status\",\n                        className: \"space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        }, void 0, false);\n    } else if (status === \"failed\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error al obtener las im\\xe1genes: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\index.tsx\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: galleryHook\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yelmarkhi\\\\Desktop\\\\gallery-main\\\\pages\\\\index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qcwBhjhU3GJtqochDFiDxozqQWs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        _useGallery__WEBPACK_IMPORTED_MODULE_4__.useGallery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // import Image from 'next/image'\n // import { useState, useEffect } from 'react'\n // import axios from 'axios';\n // import { useGallery } from './useGallery';\n // export async function getStaticProps() {\n //   try {\n //     const response = await axios.get('/api');\n //     const images = response.data;\n //     return {\n //       props: {\n //         images: images,\n //       },\n //     };\n //   } catch (error) {\n //     console.error('Error al obtener las imágenes:', error);\n //     return {\n //       props: {\n //         images: [],\n //       },\n //     };\n //   }\n // }\n // export default function MyComponent({ images }: { images: any[] }) {\n //   return (\n //     <div>\n //       {useGallery(images)}\n //     </div>\n //   );\n // }\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBdUQ7QUFDWDtBQUNPO0FBRVQ7QUFZMUMsU0FBU00sSUFBSSxHQUFJOztJQUNmLElBQU1DLFFBQVEsR0FBZ0JOLHdEQUFXLEVBQUU7SUFDM0MsSUFBTU8sUUFBUSxHQUFHUix3REFBVyxDQUFDLFNBQUNTLEtBQWdCO2VBQUtBLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRixRQUFRO0tBQUEsQ0FBQztJQUMxRSxJQUFNRyxNQUFNLEdBQUdYLHdEQUFXLENBQUMsU0FBQ1MsS0FBZ0I7ZUFBS0EsS0FBSyxDQUFDQyxPQUFPLENBQUNDLE1BQU07S0FBQSxDQUFDO0lBQ3RFLElBQU1DLEtBQUssR0FBR1osd0RBQVcsQ0FBQyxTQUFDUyxLQUFnQjtlQUFLQSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0UsS0FBSztLQUFBLENBQUM7SUFDcEUsSUFBd0JULEdBQXFCLEdBQXJCQSwrQ0FBUSxDQUFVLEVBQUUsQ0FBQyxFQUF0Q1UsSUFBSSxHQUFhVixHQUFxQixHQUFsQyxFQUFFVyxPQUFPLEdBQUlYLEdBQXFCLEdBQXpCO0lBRXBCLElBQU1ZLFdBQVcsR0FBR1YsdURBQVUsQ0FBQ1EsSUFBSSxDQUFFO0lBQ3JDWCxnREFBUyxDQUFDLFdBQU07UUFDZEssUUFBUSxDQUFDSCxnRUFBVyxFQUFFLENBQUMsQ0FBQztRQUN4QlUsT0FBTyxDQUFDTixRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDLEVBQUU7UUFBQ0QsUUFBUTtRQUFFQyxRQUFRO0tBQUMsQ0FBQyxDQUFDO0lBRXpCLCtEQUErRDtJQUMvRCxJQUFJRyxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3hCLHFCQUFPO3NCQUNMLDRFQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0VBQW9FOzBCQUNuRiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDJGQUEyRjs4QkFDeEcsNEVBQUNELEtBQUc7d0JBQUNFLElBQUksRUFBQyxRQUFRO3dCQUFDRCxTQUFTLEVBQUMsMkVBQTJFO2tDQUN0Ryw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLDJGQUEyRjs7Ozs7Z0NBQ3BHOzs7Ozs0QkFDRjs7Ozs7d0JBQ0Y7Ozs7O29CQUNGO3lCQUNQLENBQUM7SUFDRixPQUNLLElBQUlOLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDNUIscUJBQU8sOERBQUNLLEtBQUc7O2dCQUFDLG9DQUErQjtnQkFBQ0osS0FBSzs7Ozs7O2dCQUFPLENBQUM7SUFDM0QsQ0FBQztJQUVELHFCQUNFLDhEQUFDSSxLQUFHO2tCQUNERCxXQUFXOzs7OztZQUNSLENBQ047QUFFSixDQUFDO0dBcENRVCxJQUFJOztRQUNtQkwsb0RBQVc7UUFDeEJELG9EQUFXO1FBQ2JBLG9EQUFXO1FBQ1pBLG9EQUFXO1FBR0xLLG1EQUFVOzs7QUFQdkJDLEtBQUFBLElBQUk7QUFzQ2IsK0RBQWVBLElBQUksRUFBQyxDQUlwQixpQ0FBaUM7Q0FDakMsOENBQThDO0NBQzlDLDZCQUE2QjtDQUM3Qiw2Q0FBNkM7Q0FFN0MsMkNBQTJDO0NBQzNDLFVBQVU7Q0FDVixnREFBZ0Q7Q0FDaEQsb0NBQW9DO0NBQ3BDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsMEJBQTBCO0NBQzFCLFdBQVc7Q0FDWCxTQUFTO0NBQ1Qsc0JBQXNCO0NBQ3RCLDhEQUE4RDtDQUM5RCxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsU0FBUztDQUNULE1BQU07Q0FDTixJQUFJO0NBR0osdUVBQXVFO0NBQ3ZFLGFBQWE7Q0FDYixZQUFZO0NBQ1osNkJBQTZCO0NBQzdCLGFBQWE7Q0FDYixPQUFPO0NBQ1AsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmV0Y2hJbWFnZXMgfSBmcm9tICcuL3JlZHV4L2dhbGxlcnlTbGljZSc7XG5pbXBvcnQgeyBSb290U3RhdGUsIEFwcERpc3BhdGNoIH0gZnJvbSAnLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyB1c2VHYWxsZXJ5IH0gZnJvbSAnLi91c2VHYWxsZXJ5JztcblxuaW50ZXJmYWNlIEltYWdlIHtcbiAgaWQ6IG51bWJlcjtcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB1cmw6IHN0cmluZztcbiAgZG93bmxvYWRfdXJsOiBzdHJpbmc7XG59XG5cblxuZnVuY3Rpb24gSG9tZSgpICB7XG4gIGNvbnN0IGRpc3BhdGNoOiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHBpY3R1cmVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmdhbGxlcnkucGljdHVyZXMpO1xuICBjb25zdCBzdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZ2FsbGVyeS5zdGF0dXMpO1xuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5nYWxsZXJ5LmVycm9yKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SW1hZ2VbXT4oW10pO1xuICBcbiAgY29uc3QgZ2FsbGVyeUhvb2sgPSB1c2VHYWxsZXJ5KGRhdGEgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoSW1hZ2VzKCkpO1xuICAgIHNldERhdGEocGljdHVyZXMpO1xuICB9LCBbZGlzcGF0Y2gsIHBpY3R1cmVzXSk7XG5cbiAgLy8gUmVuZGVyaXphIGVsIGNvbnRlbmlkbyBzZWfDum4gZWwgZXN0YWRvIGRlIGxhIHNvbGljaXR1ZCBmZXRjaFxuICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgcHktMTYgcHgtNCBzbTpweS0yNCBzbTpweC02IGxnOm1heC13LTd4bCBsZzpweC04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+ICAgICAgICAgICAgXG4gICAgICAgIDxkaXYgcm9sZT1cInN0YXR1c1wiIGNsYXNzTmFtZT1cInNwYWNlLXktOCBhbmltYXRlLXB1bHNlIG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTggbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTQ4IGJnLWdyYXktMzAwIHJvdW5kZWQgc206dy05NiBkYXJrOmJnLWdyYXktNzAwXCI+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC8+O1xuICB9XG4gIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvciBhbCBvYnRlbmVyIGxhcyBpbcOhZ2VuZXM6IHtlcnJvcn08L2Rpdj47XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj4gICAgICAgICAgICAgIFxuICAgICAge2dhbGxlcnlIb29rfSAgICBcbiAgICA8L2Rpdj5cbiAgKTsgIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBpbXBvcnQgeyB1c2VHYWxsZXJ5IH0gZnJvbSAnLi91c2VHYWxsZXJ5JztcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpJyk7XG4vLyAgICAgY29uc3QgaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgaW1hZ2VzOiBpbWFnZXMsXG4vLyAgICAgICB9LFxuLy8gICAgIH07XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgb2J0ZW5lciBsYXMgaW3DoWdlbmVzOicsIGVycm9yKTtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgaW1hZ2VzOiBbXSxcbi8vICAgICAgIH0sXG4vLyAgICAgfTtcbi8vICAgfVxuLy8gfVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15Q29tcG9uZW50KHsgaW1hZ2VzIH06IHsgaW1hZ2VzOiBhbnlbXSB9KSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIHt1c2VHYWxsZXJ5KGltYWdlcyl9XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hJbWFnZXMiLCJ1c2VHYWxsZXJ5IiwiSG9tZSIsImRpc3BhdGNoIiwicGljdHVyZXMiLCJzdGF0ZSIsImdhbGxlcnkiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJzZXREYXRhIiwiZ2FsbGVyeUhvb2siLCJkaXYiLCJjbGFzc05hbWUiLCJyb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});