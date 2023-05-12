"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/edit/[id]",{

/***/ "./pages/edit/[id].js":
/*!****************************!*\
  !*** ./pages/edit/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-entities */ \"./node_modules/html-entities/lib/index.js\");\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Edit() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [ed, setEd] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const arr = [];\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [ingrediants, setIngrediants] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        const query = router.query.id;\n        fetch(\"http://localhost:8000/api/recepi/\".concat(query), {\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            }\n        }).then((response)=>response.json()).then((data)=>{\n            setEd(data);\n            arr.push(data.title);\n            arr.push(data.content);\n            arr.push(data.ingrediants);\n            console.log(arr);\n        }).catch((error)=>{\n            router.push(\"/login\");\n        });\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const token = localStorage.getItem(\"token\");\n        const encodedContent = (0,html_entities__WEBPACK_IMPORTED_MODULE_4__.encode)(content);\n        const arrIng = ingrediants;\n        console.log(arrIng);\n        await fetch(\"http://localhost:8000/api/recepi/\".concat(router.query.id), {\n            method: \"PUT\",\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            },\n            body: JSON.stringify({\n                title,\n                content: encodedContent,\n                ingrediants: arrIng\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(\"Success:\", data);\n            // handle success response here\n            router.push(\"/\");\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        // handle error response here\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"btn btn-dark mb-4\",\n                children: \"Back to Home\"\n            }, void 0, false, {\n                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                lineNumber: 73,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Title\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"mt-2 form-control\",\n                                type: \"text\",\n                                value: arr[0],\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 79,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 77,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Content\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                rows: \"10\",\n                                className: \"mt-2 form-control\",\n                                type: \"text\",\n                                value: content,\n                                onChange: (e)=>setContent(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 83,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 81,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Ingrediants\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"my-2 form-control\",\n                                type: \"text\",\n                                value: ingrediants,\n                                onChange: (e)=>setIngrediants(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 89,\n                                columnNumber: 5\n                            }, this),\n                            \"Each ingrediants are separated by commas ','\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 87,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-dark\",\n                        children: \"Regsiter\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 92,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Edit, \"jVuKnDmBkfuwg/LhBo/w7JWT2hg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztrQ0FJdEgsOERBQUNIO3dCQUFNSCxXQUFVOzs0QkFBd0I7MENBRXpDLDhEQUFDSTtnQ0FBTUosV0FBVTtnQ0FBb0JLLE1BQUs7Z0NBQU9DLE9BQU9sQztnQ0FBYW1DLFVBQVUsQ0FBQ2hCLElBQUlsQixlQUFla0IsRUFBRWlCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzRCQUFLOzs7Ozs7O2tDQUd0SCw4REFBQ0s7d0JBQU9OLE1BQUs7d0JBQVNMLFdBQVU7a0NBQWU7Ozs7Ozs7Ozs7Ozs7O0FBUW5EO0dBN0ZTckM7O1FBRUtMLGtEQUFTQTs7O0tBRmRLO0FBK0ZULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VkaXQvW2lkXS5qcz9hNzIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAge2VuY29kZSwgZGVjb2RlfSAgZnJvbSAnaHRtbC1lbnRpdGllcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gRWRpdCgpe1xyXG5cdFxyXG5cdGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuXHRcclxuXHRcclxuXHRjb25zdCBbZWQsIHNldEVkXT11c2VTdGF0ZSgpO1xyXG5cdFxyXG5cdGNvbnN0IGFycj1bXTtcclxuXHRcclxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXT11c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdPXVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbaW5ncmVkaWFudHMsIHNldEluZ3JlZGlhbnRzXT11c2VTdGF0ZSgnJyk7XHJcblx0XHJcblx0dXNlRWZmZWN0KCgpPT57XHJcblx0ICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICBjb25zdCBxdWVyeT1yb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2VwaS8ke3F1ZXJ5fWAse1xyXG5cdFx0ICBoZWFkZXJzOntcclxuXHRcdFx0ICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcblx0XHQgIH1cclxuXHQgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKT0+e1xyXG5cdFx0XHRzZXRFZChkYXRhKTtcclxuYXJyLnB1c2goZGF0YS50aXRsZSk7XHJcbmFyci5wdXNoKGRhdGEuY29udGVudCk7XHJcbmFyci5wdXNoKGRhdGEuaW5ncmVkaWFudHMpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhhcnIpO1xyXG5cdFx0fSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHQgIFxyXG5cdFx0ICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG5cdCAgfSk7XHQgIFxyXG5cdH0sW10pO1xyXG5cdFxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdD1hc3luYyhlKT0+e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHRcdGNvbnN0IGVuY29kZWRDb250ZW50PWVuY29kZShjb250ZW50KTtcclxuXHRcdGNvbnN0IGFyckluZz1pbmdyZWRpYW50cztcclxuXHRcdGNvbnNvbGUubG9nKGFyckluZyk7XHJcblx0XHRhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9yZWNlcGkvJHtyb3V0ZXIucXVlcnkuaWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6e1xyXG5cdFx0XHQnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcblx0XHR9LFxyXG5cdFx0IGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBjb250ZW50OmVuY29kZWRDb250ZW50LFxyXG5cdFx0aW5ncmVkaWFudHM6YXJySW5nLFxyXG4gICAgICAgXHJcbiAgICAgIH0pLFxyXG5cdFx0fSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCBkYXRhKTtcclxuICAgICAgICAvLyBoYW5kbGUgc3VjY2VzcyByZXNwb25zZSBoZXJlXHJcblx0XHRyb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIC8vIGhhbmRsZSBlcnJvciByZXNwb25zZSBoZXJlXHJcbiAgICAgIH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcclxuXHRyZXR1cm4oXHJcblx0ICA8PlxyXG5cdCAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIG1iLTRcIj5CYWNrIHRvIEhvbWU8L0xpbms+ICAgXHJcblx0IFxyXG5cclxuXHQgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHQgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItNCB3LTEwMCBmb3JtLWxhYmVsXCI+XHJcblx0XHQgICAgIFRpdGxlXHJcblx0XHRcdCA8aW5wdXQgY2xhc3NOYW1lPVwibXQtMiBmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXthcnJbMF19IG9uQ2hhbmdlPXsoZSk9PnNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHRcdCAgPC9sYWJlbD5cclxuXHRcdCAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTQgdy0xMDAgZm9ybS1sYWJlbFwiPlxyXG5cdFx0ICAgICBDb250ZW50XHJcblx0XHRcdCA8dGV4dGFyZWEgcm93cz0nMTAnIGNsYXNzTmFtZT1cIm10LTIgZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17Y29udGVudH0gb25DaGFuZ2U9eyhlKT0+c2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9ID5cclxuXHRcdFx0IFxyXG5cdFx0XHQgPC90ZXh0YXJlYT5cclxuXHRcdCAgPC9sYWJlbD5cclxuXHRcdCAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTQgdy0xMDAgZm9ybS1sYWJlbFwiPlxyXG5cdFx0ICAgICBJbmdyZWRpYW50c1xyXG5cdFx0XHQgPGlucHV0IGNsYXNzTmFtZT1cIm15LTIgZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5ncmVkaWFudHN9IG9uQ2hhbmdlPXsoZSk9PnNldEluZ3JlZGlhbnRzKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHRcdCAgICAgRWFjaCBpbmdyZWRpYW50cyBhcmUgc2VwYXJhdGVkIGJ5IGNvbW1hcyAnLCdcclxuXHRcdCAgPC9sYWJlbD5cclxuXHRcdCAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCI+UmVnc2l0ZXI8L2J1dHRvbj5cclxuXHQgICA8L2Zvcm0+XHJcblx0IFxyXG5cdCAgIFxyXG5cclxuXHQgICBcclxuXHQgIDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdDsiXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZW5jb2RlIiwiZGVjb2RlIiwiRWRpdCIsInJvdXRlciIsImVkIiwic2V0RWQiLCJhcnIiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpbmdyZWRpYW50cyIsInNldEluZ3JlZGlhbnRzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicXVlcnkiLCJpZCIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW5jb2RlZENvbnRlbnQiLCJhcnJJbmciLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhyZWYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/edit/[id].js\n"));

/***/ })

});