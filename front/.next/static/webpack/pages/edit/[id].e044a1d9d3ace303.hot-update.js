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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-entities */ \"./node_modules/html-entities/lib/index.js\");\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Edit() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router.query.id);\n    const [ed, setEd] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [ingrediants, setIngrediants] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        fetch(\"http://localhost:8000/api/recepi/\".concat(router.query.id), {\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            }\n        }).then((response)=>response.json()).then((data)=>{\n            setEd(data);\n            setTitle(ed.title);\n            let x = (0,html_entities__WEBPACK_IMPORTED_MODULE_4__.decode)(ed.content);\n            setContent(x);\n            setIngrediants(ed.ingrediants);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const token = localStorage.getItem(\"token\");\n        const encodedContent = (0,html_entities__WEBPACK_IMPORTED_MODULE_4__.encode)(content);\n        const arrIng = ingrediants;\n        console.log(arrIng);\n        await fetch(\"http://localhost:8000/api/recepi/\".concat(router.query.id), {\n            method: \"PUT\",\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            },\n            body: JSON.stringify({\n                title,\n                content: encodedContent,\n                ingrediants: arrIng\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(\"Success:\", data);\n            // handle success response here\n            router.push(\"/\");\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        // handle error response here\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"btn btn-dark mb-4\",\n                children: \"Back to Home\"\n            }, void 0, false, {\n                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                lineNumber: 72,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Title\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"mt-2 form-control\",\n                                type: \"text\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 78,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 76,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Content\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                rows: \"10\",\n                                className: \"mt-2 form-control\",\n                                type: \"text\",\n                                value: content,\n                                onChange: (e)=>setContent(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 82,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Ingrediants\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"my-2 form-control\",\n                                type: \"text\",\n                                value: ingrediants,\n                                onChange: (e)=>setIngrediants(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 88,\n                                columnNumber: 5\n                            }, this),\n                            \"Each ingrediants are separated by commas ','\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 86,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-dark\",\n                        children: \"Regsiter\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 91,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                lineNumber: 75,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Edit, \"jVuKnDmBkfuwg/LhBo/w7JWT2hg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0I7MENBRXpDLDhEQUFDSTtnQ0FBTUosV0FBVTtnQ0FBb0JLLE1BQUs7Z0NBQU9DLE9BQU8vQjtnQ0FBYWdDLFVBQVUsQ0FBQ2pCLElBQUlkLGVBQWVjLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs0QkFBSzs7Ozs7OztrQ0FHdEgsOERBQUNLO3dCQUFPTixNQUFLO3dCQUFTTCxXQUFVO2tDQUFlOzs7Ozs7Ozs7Ozs7OztBQVFuRDtHQTVGU3JDOztRQUVLTCxrREFBU0E7OztLQUZkSztBQThGVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lZGl0L1tpZF0uanM/YTcyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgIHtlbmNvZGUsIGRlY29kZX0gIGZyb20gJ2h0bWwtZW50aXRpZXMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEVkaXQoKXtcclxuXHRcclxuXHRjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcblx0Y29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LmlkKTtcclxuXHRcclxuXHRjb25zdCBbZWQsIHNldEVkXT11c2VTdGF0ZSgpO1xyXG5cdFxyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdPXVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbY29udGVudCwgc2V0Q29udGVudF09dXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtpbmdyZWRpYW50cywgc2V0SW5ncmVkaWFudHNdPXVzZVN0YXRlKCcnKTtcclxuXHRcclxuXHR1c2VFZmZlY3QoKCk9PntcclxuXHQgIGNvbnN0IHRva2VuPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcblxyXG4gICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9yZWNlcGkvJHtyb3V0ZXIucXVlcnkuaWR9YCx7XHJcblx0XHQgIGhlYWRlcnM6e1xyXG5cdFx0XHQgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdCAgfVxyXG5cdCAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcblx0XHRcdHNldEVkKGRhdGEpO1xyXG5cdFx0ICAgXHRzZXRUaXRsZShlZC50aXRsZSk7XHJcblx0XHRcdGxldCB4PWRlY29kZShlZC5jb250ZW50KTtcclxuXHRcdFx0c2V0Q29udGVudCh4KTtcclxuXHRcdFx0c2V0SW5ncmVkaWFudHMoZWQuaW5ncmVkaWFudHMpO1xyXG5cdFx0XHRcclxuXHRcdH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0ICBcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdCAgfSk7XHQgIFxyXG5cdH0sW10pO1xyXG5cdFxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdD1hc3luYyhlKT0+e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHRcdGNvbnN0IGVuY29kZWRDb250ZW50PWVuY29kZShjb250ZW50KTtcclxuXHRcdGNvbnN0IGFyckluZz1pbmdyZWRpYW50cztcclxuXHRcdGNvbnNvbGUubG9nKGFyckluZyk7XHJcblx0XHRhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9yZWNlcGkvJHtyb3V0ZXIucXVlcnkuaWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6e1xyXG5cdFx0XHQnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcblx0XHR9LFxyXG5cdFx0IGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBjb250ZW50OmVuY29kZWRDb250ZW50LFxyXG5cdFx0aW5ncmVkaWFudHM6YXJySW5nLFxyXG4gICAgICAgXHJcbiAgICAgIH0pLFxyXG5cdFx0fSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCBkYXRhKTtcclxuICAgICAgICAvLyBoYW5kbGUgc3VjY2VzcyByZXNwb25zZSBoZXJlXHJcblx0XHRyb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIC8vIGhhbmRsZSBlcnJvciByZXNwb25zZSBoZXJlXHJcbiAgICAgIH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcclxuXHRyZXR1cm4oXHJcblx0ICA8PlxyXG5cdCAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIG1iLTRcIj5CYWNrIHRvIEhvbWU8L0xpbms+ICAgXHJcblx0IFxyXG5cclxuXHQgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHQgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItNCB3LTEwMCBmb3JtLWxhYmVsXCI+XHJcblx0XHQgICAgIFRpdGxlXHJcblx0XHRcdCA8aW5wdXQgY2xhc3NOYW1lPVwibXQtMiBmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9eyhlKT0+c2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cdFx0ICA8L2xhYmVsPlxyXG5cdFx0ICA8bGFiZWwgY2xhc3NOYW1lPVwibWItNCB3LTEwMCBmb3JtLWxhYmVsXCI+XHJcblx0XHQgICAgIENvbnRlbnRcclxuXHRcdFx0IDx0ZXh0YXJlYSByb3dzPScxMCcgY2xhc3NOYW1lPVwibXQtMiBmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtjb250ZW50fSBvbkNoYW5nZT17KGUpPT5zZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX0gPlxyXG5cdFx0XHQgXHJcblx0XHRcdCA8L3RleHRhcmVhPlxyXG5cdFx0ICA8L2xhYmVsPlxyXG5cdFx0ICA8bGFiZWwgY2xhc3NOYW1lPVwibWItNCB3LTEwMCBmb3JtLWxhYmVsXCI+XHJcblx0XHQgICAgIEluZ3JlZGlhbnRzXHJcblx0XHRcdCA8aW5wdXQgY2xhc3NOYW1lPVwibXktMiBmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbmdyZWRpYW50c30gb25DaGFuZ2U9eyhlKT0+c2V0SW5ncmVkaWFudHMoZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cdFx0ICAgICBFYWNoIGluZ3JlZGlhbnRzIGFyZSBzZXBhcmF0ZWQgYnkgY29tbWFzICcsJ1xyXG5cdFx0ICA8L2xhYmVsPlxyXG5cdFx0ICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIj5SZWdzaXRlcjwvYnV0dG9uPlxyXG5cdCAgIDwvZm9ybT5cclxuXHQgXHJcblx0ICAgXHJcblxyXG5cdCAgIFxyXG5cdCAgPC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0OyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJlbmNvZGUiLCJkZWNvZGUiLCJFZGl0Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJlZCIsInNldEVkIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaW5ncmVkaWFudHMiLCJzZXRJbmdyZWRpYW50cyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwieCIsImNhdGNoIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbmNvZGVkQ29udGVudCIsImFyckluZyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImhyZWYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/edit/[id].js\n"));

/***/ })

});