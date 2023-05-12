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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-entities */ \"./node_modules/html-entities/lib/index.js\");\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Edit() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [ed, setEd] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [ingrediants, setIngrediants] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        const query = router.query.id;\n        fetch(\"http://localhost:8000/api/recepi/\".concat(query), {\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            }\n        }).then((response)=>response.json()).then((data)=>{\n            setEd(data);\n            console.log(ed.title);\n            setTitle(ed.title);\n            let x = (0,html_entities__WEBPACK_IMPORTED_MODULE_4__.decode)(ed.content);\n            setContent(x);\n            setIngrediants(ed.ingrediants);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, [\n        3\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const token = localStorage.getItem(\"token\");\n        const encodedContent = (0,html_entities__WEBPACK_IMPORTED_MODULE_4__.encode)(content);\n        const arrIng = ingrediants;\n        console.log(arrIng);\n        await fetch(\"http://localhost:8000/api/recepi/\".concat(router.query.id), {\n            method: \"PUT\",\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            },\n            body: JSON.stringify({\n                title,\n                content: encodedContent,\n                ingrediants: arrIng\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(\"Success:\", data);\n            // handle success response here\n            router.push(\"/\");\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        // handle error response here\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"btn btn-dark mb-4\",\n                children: \"Back to Home\"\n            }, void 0, false, {\n                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                lineNumber: 73,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Title\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"mt-2 form-control\",\n                                type: \"text\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 79,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 77,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Content\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                rows: \"10\",\n                                className: \"mt-2 form-control\",\n                                type: \"text\",\n                                value: content,\n                                onChange: (e)=>setContent(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 83,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 81,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mb-4 w-100 form-label\",\n                        children: [\n                            \"Ingrediants\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"my-2 form-control\",\n                                type: \"text\",\n                                value: ingrediants,\n                                onChange: (e)=>setIngrediants(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                                lineNumber: 89,\n                                columnNumber: 5\n                            }, this),\n                            \"Each ingrediants are separated by commas ','\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 87,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-dark\",\n                        children: \"Regsiter\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                        lineNumber: 92,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\mern\\\\food\\\\front\\\\pages\\\\edit\\\\[id].js\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Edit, \"jVuKnDmBkfuwg/LhBo/w7JWT2hg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7OzRCQUF3QjswQ0FFekMsOERBQUNJO2dDQUFNSixXQUFVO2dDQUFvQkssTUFBSztnQ0FBT0MsT0FBT25DO2dDQUFhb0MsVUFBVSxDQUFDakIsSUFBSWxCLGVBQWVrQixFQUFFa0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7NEJBQUs7Ozs7Ozs7a0NBR3RILDhEQUFDSzt3QkFBT04sTUFBSzt3QkFBU0wsV0FBVTtrQ0FBZTs7Ozs7Ozs7Ozs7Ozs7QUFRbkQ7R0E3RlNyQzs7UUFFS0wsa0RBQVNBOzs7S0FGZEs7QUErRlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC9baWRdLmpzP2E3MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICB7ZW5jb2RlLCBkZWNvZGV9ICBmcm9tICdodG1sLWVudGl0aWVzJztcclxuXHJcblxyXG5mdW5jdGlvbiBFZGl0KCl7XHJcblx0XHJcblx0Y29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IFtlZCwgc2V0RWRdPXVzZVN0YXRlKCk7XHJcblx0XHJcblx0Y29uc3QgW3RpdGxlLCBzZXRUaXRsZV09dXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XT11c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2luZ3JlZGlhbnRzLCBzZXRJbmdyZWRpYW50c109dXNlU3RhdGUoJycpO1xyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKT0+e1xyXG5cdCAgY29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgY29uc3QgcXVlcnk9cm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9yZWNlcGkvJHtxdWVyeX1gLHtcclxuXHRcdCAgaGVhZGVyczp7XHJcblx0XHRcdCAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0ICB9XHJcblx0ICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSk9PntcclxuXHRcdFx0c2V0RWQoZGF0YSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVkLnRpdGxlKTtcclxuXHRcdCAgIFx0c2V0VGl0bGUoZWQudGl0bGUpO1xyXG5cdFx0XHRsZXQgeD1kZWNvZGUoZWQuY29udGVudCk7XHJcblx0XHRcdHNldENvbnRlbnQoeCk7XHJcblx0XHRcdHNldEluZ3JlZGlhbnRzKGVkLmluZ3JlZGlhbnRzKTtcclxuXHRcdFx0XHJcblx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdCAgXHJcblx0XHQgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cdCAgfSk7XHQgIFxyXG5cdH0sWzNdKTtcclxuXHRcclxuXHRjb25zdCBoYW5kbGVTdWJtaXQ9YXN5bmMoZSk9PntcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHRva2VuPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcblx0XHRjb25zdCBlbmNvZGVkQ29udGVudD1lbmNvZGUoY29udGVudCk7XHJcblx0XHRjb25zdCBhcnJJbmc9aW5ncmVkaWFudHM7XHJcblx0XHRjb25zb2xlLmxvZyhhcnJJbmcpO1xyXG5cdFx0YXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcmVjZXBpLyR7cm91dGVyLnF1ZXJ5LmlkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOntcclxuXHRcdFx0J0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0fSxcclxuXHRcdCBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgY29udGVudDplbmNvZGVkQ29udGVudCxcclxuXHRcdGluZ3JlZGlhbnRzOmFyckluZyxcclxuICAgICAgIFxyXG4gICAgICB9KSxcclxuXHRcdH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgZGF0YSk7XHJcbiAgICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3MgcmVzcG9uc2UgaGVyZVxyXG5cdFx0cm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAvLyBoYW5kbGUgZXJyb3IgcmVzcG9uc2UgaGVyZVxyXG4gICAgICB9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0cmV0dXJuKFxyXG5cdCAgPD5cclxuXHQgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBtYi00XCI+QmFjayB0byBIb21lPC9MaW5rPiAgIFxyXG5cdCBcclxuXHJcblx0ICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0ICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTQgdy0xMDAgZm9ybS1sYWJlbFwiPlxyXG5cdFx0ICAgICBUaXRsZVxyXG5cdFx0XHQgPGlucHV0IGNsYXNzTmFtZT1cIm10LTIgZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSk9PnNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHRcdCAgPC9sYWJlbD5cclxuXHRcdCAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTQgdy0xMDAgZm9ybS1sYWJlbFwiPlxyXG5cdFx0ICAgICBDb250ZW50XHJcblx0XHRcdCA8dGV4dGFyZWEgcm93cz0nMTAnIGNsYXNzTmFtZT1cIm10LTIgZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17Y29udGVudH0gb25DaGFuZ2U9eyhlKT0+c2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9ID5cclxuXHRcdFx0IFxyXG5cdFx0XHQgPC90ZXh0YXJlYT5cclxuXHRcdCAgPC9sYWJlbD5cclxuXHRcdCAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTQgdy0xMDAgZm9ybS1sYWJlbFwiPlxyXG5cdFx0ICAgICBJbmdyZWRpYW50c1xyXG5cdFx0XHQgPGlucHV0IGNsYXNzTmFtZT1cIm15LTIgZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5ncmVkaWFudHN9IG9uQ2hhbmdlPXsoZSk9PnNldEluZ3JlZGlhbnRzKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHRcdCAgICAgRWFjaCBpbmdyZWRpYW50cyBhcmUgc2VwYXJhdGVkIGJ5IGNvbW1hcyAnLCdcclxuXHRcdCAgPC9sYWJlbD5cclxuXHRcdCAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCI+UmVnc2l0ZXI8L2J1dHRvbj5cclxuXHQgICA8L2Zvcm0+XHJcblx0IFxyXG5cdCAgIFxyXG5cclxuXHQgICBcclxuXHQgIDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdDsiXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZW5jb2RlIiwiZGVjb2RlIiwiRWRpdCIsInJvdXRlciIsImVkIiwic2V0RWQiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpbmdyZWRpYW50cyIsInNldEluZ3JlZGlhbnRzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicXVlcnkiLCJpZCIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIngiLCJjYXRjaCIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW5jb2RlZENvbnRlbnQiLCJhcnJJbmciLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJocmVmIiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/edit/[id].js\n"));

/***/ })

});