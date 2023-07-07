"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/redux/gallerySlice.ts":
/*!*************************************!*\
  !*** ./pages/redux/gallerySlice.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchImages\": function() { return /* binding */ fetchImages; },\n/* harmony export */   \"galleryReducer\": function() { return /* binding */ galleryReducer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nvar initialState = {\n    pictures: [],\n    status: \"idle\",\n    error: null\n};\nvar fetchImages = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"gallery/fetchImages\", /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function() {\n    var response, error;\n    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n        switch(_state.label){\n            case 0:\n                _state.trys.push([\n                    0,\n                    2,\n                    ,\n                    3\n                ]);\n                return [\n                    4,\n                    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://picsum.photos/v2/list\")\n                ];\n            case 1:\n                response = _state.sent();\n                return [\n                    2,\n                    mock\n                ];\n            case 2:\n                error = _state.sent();\n                console.error(\"Error al obtener las im\\xe1genes:\", error);\n                return [\n                    2,\n                    []\n                ];\n            case 3:\n                return [\n                    2\n                ];\n        }\n    });\n}));\nvar gallerySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"gallery\",\n    initialState: initialState,\n    reducers: {},\n    extraReducers: function(builder) {\n        builder.addCase(fetchImages.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(fetchImages.fulfilled, function(state, action) {\n            state.status = \"succeeded\";\n            state.pictures = action.payload;\n        }).addCase(fetchImages.rejected, function(state, action) {\n            state.status = \"failed\";\n            state.error = action.error.message ? action.error.message : null;\n        });\n    }\n});\nvar mock = [\n    {\n        id: \"0\",\n        author: \"Alejandro Escamilla\",\n        width: 5000,\n        height: 3333,\n        url: \"https://unsplash.com/photos/yC-Yzbqy7PY\",\n        download_url: \"https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU\"\n    },\n    {\n        id: \"1\",\n        author: \"Alejandro Escamilla\",\n        width: 5000,\n        height: 3333,\n        url: \"https://unsplash.com/photos/LNRyGwIJr5c\",\n        download_url: \"https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4\"\n    }, \n];\nvar galleryReducer = gallerySlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWR1eC9nYWxsZXJ5U2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWdGO0FBQ3REO0FBUTFCLElBQU1HLFlBQVksR0FBaUI7SUFDakNDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFTSxJQUFNQyxXQUFXLEdBQUdOLGtFQUFnQixDQUFDLHFCQUFxQixnQkFBRSwrRkFBWTtRQUVyRU8sUUFBUSxFQUVQRixLQUFLOzs7Ozs7Ozs7O2dCQUZLOztvQkFBTUosaURBQVMsQ0FBQywrQkFBK0IsQ0FBQztrQkFBQTs7Z0JBQTNETSxRQUFRLEdBQUcsYUFBZ0Q7Z0JBQ2pFOztvQkFBT0UsSUFBSTtrQkFBQzs7Z0JBQ0xKLEtBQUs7Z0JBQ1pLLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLG1DQUFnQyxFQUFFQSxLQUFLLENBQUMsQ0FBQztnQkFDdkQ7OztrQkFBVTs7Ozs7OztBQUVkLENBQUMsRUFBQyxDQUFDO0FBRUgsSUFBTU0sWUFBWSxHQUFHWiw2REFBVyxDQUFDO0lBQy9CYSxJQUFJLEVBQUUsU0FBUztJQUNmVixZQUFZLEVBQVpBLFlBQVk7SUFDWlcsUUFBUSxFQUFFLEVBQUU7SUFDWkMsYUFBYSxFQUFFLFNBQUNDLE9BQU8sRUFBSztRQUMxQkEsT0FBTyxDQUNKQyxPQUFPLENBQUNWLFdBQVcsQ0FBQ1csT0FBTyxFQUFFLFNBQUNDLEtBQUssRUFBSztZQUN2Q0EsS0FBSyxDQUFDZCxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNEWSxPQUFPLENBQUNWLFdBQVcsQ0FBQ2EsU0FBUyxFQUFFLFNBQUNELEtBQUssRUFBRUUsTUFBNEIsRUFBSztZQUN2RUYsS0FBSyxDQUFDZCxNQUFNLEdBQUcsV0FBVyxDQUFDO1lBQzNCYyxLQUFLLENBQUNmLFFBQVEsR0FBR2lCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUNETCxPQUFPLENBQUNWLFdBQVcsQ0FBQ2dCLFFBQVEsRUFBRSxTQUFDSixLQUFLLEVBQUVFLE1BQU0sRUFBSztZQUNoREYsS0FBSyxDQUFDZCxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3hCYyxLQUFLLENBQUNiLEtBQUssR0FBR2UsTUFBTSxDQUFDZixLQUFLLENBQUNrQixPQUFPLEdBQUdILE1BQU0sQ0FBQ2YsS0FBSyxDQUFDa0IsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRixDQUFDO0FBRUYsSUFBTWQsSUFBSSxHQUFHO0lBQ1g7UUFDRWUsRUFBRSxFQUFFLEdBQUc7UUFDUEMsTUFBTSxFQUFFLHFCQUFxQjtRQUM3QkMsS0FBSyxFQUFFLElBQUk7UUFDWEMsTUFBTSxFQUFFLElBQUk7UUFDWkMsR0FBRyxFQUFFLHlDQUF5QztRQUM5Q0MsWUFBWSxFQUFFLGtHQUFrRztLQUNqSDtJQUNEO1FBQ0VMLEVBQUUsRUFBRSxHQUFHO1FBQ1BDLE1BQU0sRUFBRSxxQkFBcUI7UUFDN0JDLEtBQUssRUFBRSxJQUFJO1FBQ1hDLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLEdBQUcsRUFBRSx5Q0FBeUM7UUFDOUNDLFlBQVksRUFBRSxrR0FBa0c7S0FDakg7Q0FDRjtBQUVNLElBQU1DLGNBQWMsR0FBR25CLFlBQVksQ0FBQ29CLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWR1eC9nYWxsZXJ5U2xpY2UudHM/YmFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuaywgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW50ZXJmYWNlIEdhbGxlcnlTdGF0ZSB7XHJcbiAgcGljdHVyZXM6IGFueVtdO1xyXG4gIHN0YXR1czogJ2lkbGUnIHwgJ2xvYWRpbmcnIHwgJ3N1Y2NlZWRlZCcgfCAnZmFpbGVkJztcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBHYWxsZXJ5U3RhdGUgPSB7XHJcbiAgcGljdHVyZXM6IFtdLFxyXG4gIHN0YXR1czogJ2lkbGUnLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoSW1hZ2VzID0gY3JlYXRlQXN5bmNUaHVuaygnZ2FsbGVyeS9mZXRjaEltYWdlcycsIGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy92Mi9saXN0Jyk7XHJcbiAgICByZXR1cm4gbW9jaztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgb2J0ZW5lciBsYXMgaW3DoWdlbmVzOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgZ2FsbGVyeVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdnYWxsZXJ5JyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKGZldGNoSW1hZ2VzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZmV0Y2hJbWFnZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxhbnlbXT4pID0+IHtcclxuICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnc3VjY2VlZGVkJztcclxuICAgICAgICBzdGF0ZS5waWN0dXJlcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaEltYWdlcy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZmFpbGVkJztcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlID8gYWN0aW9uLmVycm9yLm1lc3NhZ2UgOiBudWxsO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IG1vY2sgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICcwJyxcclxuICAgIGF1dGhvcjogJ0FsZWphbmRybyBFc2NhbWlsbGEnLFxyXG4gICAgd2lkdGg6IDUwMDAsXHJcbiAgICBoZWlnaHQ6IDMzMzMsXHJcbiAgICB1cmw6ICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MveUMtWXpicXk3UFknLFxyXG4gICAgZG93bmxvYWRfdXJsOiAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8wLzUwMDAvMzMzMy5qcGc/aG1hYz1fajZnaFk1ZkNmU0Q2dHZ0Y1Y3NHpYaXZrSlNQSWZSOUI4dzM0WGVRbXZVJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICcxJyxcclxuICAgIGF1dGhvcjogJ0FsZWphbmRybyBFc2NhbWlsbGEnLFxyXG4gICAgd2lkdGg6IDUwMDAsXHJcbiAgICBoZWlnaHQ6IDMzMzMsXHJcbiAgICB1cmw6ICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvTE5SeUd3SUpyNWMnLFxyXG4gICAgZG93bmxvYWRfdXJsOiAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8xLzUwMDAvMzMzMy5qcGc/aG1hYz1Bc3YyRFUzckFfNUQxeFNlMjJ4Wks0N1dFQU4wd2pXZUZPaHpkMTN1alc0J1xyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBnYWxsZXJ5UmVkdWNlciA9IGdhbGxlcnlTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJwaWN0dXJlcyIsInN0YXR1cyIsImVycm9yIiwiZmV0Y2hJbWFnZXMiLCJyZXNwb25zZSIsImdldCIsIm1vY2siLCJjb25zb2xlIiwiZ2FsbGVyeVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwibWVzc2FnZSIsImlkIiwiYXV0aG9yIiwid2lkdGgiLCJoZWlnaHQiLCJ1cmwiLCJkb3dubG9hZF91cmwiLCJnYWxsZXJ5UmVkdWNlciIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/redux/gallerySlice.ts\n"));

/***/ })

});