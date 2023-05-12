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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-entities */ \"./node_modules/html-entities/lib/index.js\");\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Edit() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(\"id is \" + router.query.id);\n    const [ed, setEd] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [ingrediants, setIngrediants] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        fetch(\"http://localhost:8000/api/recepi/\".concat(router.query.id), {\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            }\n        }).then((response)=>response.json()).then((data)=>{\n            setEd(data);\n            setTitle(ed.title);\n            let x = (0,html_entities__WEBPACK_IMPORTED_MODULE_4__.decode)(ed.content);\n            setContent(x);\n            setIngrediants(ed.ingrediants);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const token = localStorage.getItem(\"token\");\n        const encodedContent = (0,html_entities__WEBPACK_IMPORTED_MODULE_4__.encode)(content);\n        const arrIng = ingrediants;\n        console.log(arrIng);\n        await fetch(\"http://localhost:8000/api/recepi/\".concat(router.query.id), {\n            method: \"PUT\",\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            },\n            body: JSON.stringify({\n                title,\n                content: encodedContent,\n                ingrediants: arrIng\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(\"Success:\", data);\n            // handle success response here\n            router.push(\"/\");\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        // handle error response here\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"btn btn-dark mb-4\",\n                children: \"Back to Home\"\n            }, void 0, false, {\n                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                lineNumber: 72,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Title\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"mt-2 form-control\",\n                                type: \"text\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 78,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 76,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Content\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                rows: \"10\",\n                                className: \"mt-2 form-control\",\n                                type: \"text\",\n                                value: content,\n                                onChange: (e)=>setContent(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 82,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Ingrediants\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"my-2 form-control\",\n                                type: \"text\",\n                                value: ingrediants,\n                                onChange: (e)=>setIngrediants(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 88,\n                                columnNumber: 5\n                            }, this),\n                            \"Each ingrediants are separated by commas ','\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 86,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-dark\",\n                        children: \"Regsiter\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 91,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                lineNumber: 75,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Edit, \"jVuKnDmBkfuwg/LhBo/w7JWT2hg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUF3QjswQ0FFekMsOERBQUNJO2dDQUFNSixXQUFVO2dDQUFvQkssTUFBSztnQ0FBT0MsT0FBTy9CO2dDQUFhZ0MsVUFBVSxDQUFDakIsSUFBSWQsZUFBZWMsRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzRCQUFLOzs7Ozs7O2tDQUd0SCw4REFBQ0s7d0JBQU9OLE1BQUs7d0JBQVNMLFdBQVU7a0NBQWU7Ozs7Ozs7Ozs7Ozs7O0FBUW5EO0dBNUZTckM7O1FBRUtMLGtEQUFTQTs7O0tBRmRLO0FBOEZULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VkaXQvW2lkXS5qcz9hNzIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAge2VuY29kZSwgZGVjb2RlfSAgZnJvbSAnaHRtbC1lbnRpdGllcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gRWRpdCgpe1xyXG5cdFxyXG5cdGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuXHRjb25zb2xlLmxvZygnaWQgaXMgJytyb3V0ZXIucXVlcnkuaWQpO1xyXG5cdFxyXG5cdGNvbnN0IFtlZCwgc2V0RWRdPXVzZVN0YXRlKCk7XHJcblx0XHJcblx0Y29uc3QgW3RpdGxlLCBzZXRUaXRsZV09dXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XT11c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2luZ3JlZGlhbnRzLCBzZXRJbmdyZWRpYW50c109dXNlU3RhdGUoJycpO1xyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKT0+e1xyXG5cdCAgY29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2VwaS8ke3JvdXRlci5xdWVyeS5pZH1gLHtcclxuXHRcdCAgaGVhZGVyczp7XHJcblx0XHRcdCAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0ICB9XHJcblx0ICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSk9PntcclxuXHRcdFx0c2V0RWQoZGF0YSk7XHJcblx0XHQgICBcdHNldFRpdGxlKGVkLnRpdGxlKTtcclxuXHRcdFx0bGV0IHg9ZGVjb2RlKGVkLmNvbnRlbnQpO1xyXG5cdFx0XHRzZXRDb250ZW50KHgpO1xyXG5cdFx0XHRzZXRJbmdyZWRpYW50cyhlZC5pbmdyZWRpYW50cyk7XHJcblx0XHRcdFxyXG5cdFx0fSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHQgIFxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0ICB9KTtcdCAgXHJcblx0fSxbXSk7XHJcblx0XHJcblx0Y29uc3QgaGFuZGxlU3VibWl0PWFzeW5jKGUpPT57XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG5cdFx0Y29uc3QgZW5jb2RlZENvbnRlbnQ9ZW5jb2RlKGNvbnRlbnQpO1xyXG5cdFx0Y29uc3QgYXJySW5nPWluZ3JlZGlhbnRzO1xyXG5cdFx0Y29uc29sZS5sb2coYXJySW5nKTtcclxuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2VwaS8ke3JvdXRlci5xdWVyeS5pZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczp7XHJcblx0XHRcdCdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdH0sXHJcblx0XHQgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6ZW5jb2RlZENvbnRlbnQsXHJcblx0XHRpbmdyZWRpYW50czphcnJJbmcsXHJcbiAgICAgICBcclxuICAgICAgfSksXHJcblx0XHR9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIGRhdGEpO1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdWNjZXNzIHJlc3BvbnNlIGhlcmVcclxuXHRcdHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgLy8gaGFuZGxlIGVycm9yIHJlc3BvbnNlIGhlcmVcclxuICAgICAgfSk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdHJldHVybihcclxuXHQgIDw+XHJcblx0ICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgbWItNFwiPkJhY2sgdG8gSG9tZTwvTGluaz4gICBcclxuXHQgXHJcblxyXG5cdCAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cdCAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi00IHctMTAwIGZvcm0tbGFiZWxcIj5cclxuXHRcdCAgICAgVGl0bGVcclxuXHRcdFx0IDxpbnB1dCBjbGFzc05hbWU9XCJtdC0yIGZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpPT5zZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcblx0XHQgIDwvbGFiZWw+XHJcblx0XHQgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi00IHctMTAwIGZvcm0tbGFiZWxcIj5cclxuXHRcdCAgICAgQ29udGVudFxyXG5cdFx0XHQgPHRleHRhcmVhIHJvd3M9JzEwJyBjbGFzc05hbWU9XCJtdC0yIGZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2NvbnRlbnR9IG9uQ2hhbmdlPXsoZSk9PnNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfSA+XHJcblx0XHRcdCBcclxuXHRcdFx0IDwvdGV4dGFyZWE+XHJcblx0XHQgIDwvbGFiZWw+XHJcblx0XHQgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi00IHctMTAwIGZvcm0tbGFiZWxcIj5cclxuXHRcdCAgICAgSW5ncmVkaWFudHNcclxuXHRcdFx0IDxpbnB1dCBjbGFzc05hbWU9XCJteS0yIGZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2luZ3JlZGlhbnRzfSBvbkNoYW5nZT17KGUpPT5zZXRJbmdyZWRpYW50cyhlLnRhcmdldC52YWx1ZSl9IC8+XHJcblx0XHQgICAgIEVhY2ggaW5ncmVkaWFudHMgYXJlIHNlcGFyYXRlZCBieSBjb21tYXMgJywnXHJcblx0XHQgIDwvbGFiZWw+XHJcblx0XHQgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiPlJlZ3NpdGVyPC9idXR0b24+XHJcblx0ICAgPC9mb3JtPlxyXG5cdCBcclxuXHQgICBcclxuXHJcblx0ICAgXHJcblx0ICA8Lz5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXQ7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImVuY29kZSIsImRlY29kZSIsIkVkaXQiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpZCIsImVkIiwic2V0RWQiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpbmdyZWRpYW50cyIsInNldEluZ3JlZGlhbnRzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ4IiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVuY29kZWRDb250ZW50IiwiYXJySW5nIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiaHJlZiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/edit/[id].js\n"));

/***/ })

});