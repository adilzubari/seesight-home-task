/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"thirteen\": \"Home_thirteen__cMI_k\",\n\t\"rotate\": \"Home_rotate____XsI\",\n\t\"content\": \"Home_content__Zy02X\",\n\t\"vercelLogo\": \"Home_vercelLogo__dtSk9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21ldGFzay8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/MjU0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJjZW50ZXJcIjogXCJIb21lX2NlbnRlcl9fNEJGZ0NcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiLFxuXHRcInRoaXJ0ZWVuXCI6IFwiSG9tZV90aGlydGVlbl9fY01JX2tcIixcblx0XCJyb3RhdGVcIjogXCJIb21lX3JvdGF0ZV9fX19Yc0lcIixcblx0XCJjb250ZW50XCI6IFwiSG9tZV9jb250ZW50X19aeTAyWFwiLFxuXHRcInZlcmNlbExvZ29cIjogXCJIb21lX3ZlcmNlbExvZ29fX2R0U2s5XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./hooks/useGraphQL.ts":
/*!*****************************!*\
  !*** ./hooks/useGraphQL.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UseGraphQL)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction UseGraphQL() {\n    const endpoint = \"http://localhost:5000/graphql\";\n    const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(endpoint);\n    const createUser = async (firstName, lastName, email, password)=>{\n        const mutation = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\r\n      mutation AddUser(\r\n        $firstName: String!\r\n        $lastName: String!\r\n        $email: String!\r\n        $password: String!\r\n      ) {\r\n        createUser(\r\n          object: {\r\n            title: $firstName\r\n            lastName: $lastName\r\n            email: $email\r\n            password: $password\r\n          }\r\n        ) {\r\n          firstName\r\n          lastName\r\n          email\r\n          password\r\n        }\r\n      }\r\n    `;\n        const variables = {\n            firstName,\n            lastName,\n            email,\n            password\n        };\n        const data = await graphQLClient.request(mutation, variables);\n        console.log(data);\n    };\n    const updateUser = ()=>{};\n    const getUsers = async ()=>{\n        const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\r\n      query {\r\n        getAllUsers {\r\n          email\r\n        }\r\n      }\r\n    `;\n        const data = await graphQLClient.request(query);\n        console.log(\"=>\", data);\n        return [];\n    };\n    return {\n        createUser,\n        updateUser,\n        getUsers\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VHcmFwaFFMLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxRDtBQUV0QyxTQUFTRSxhQUFhO0lBQ25DLE1BQU1DLFdBQVc7SUFFakIsTUFBTUMsZ0JBQWdCLElBQUlKLDBEQUFhQSxDQUFDRztJQUV4QyxNQUFNRSxhQUFhLE9BQ2pCQyxXQUNBQyxVQUNBQyxPQUNBQyxXQUNHO1FBQ0gsTUFBTUMsV0FBV1QsZ0RBQUcsQ0FBQztRQXVCckIsTUFBTVU7WUFDSkw7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtRQUNBLE1BQU1HO1FBQ05FLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZDtJQUVBLE1BQU1JLGFBQWEsSUFBTSxDQUFDO0lBRTFCLE1BQU1DLFdBQVc7UUFDZixNQUFNQyxRQUFRakIsR0FBRyxDQUFDO1FBUWxCO1FBQ0FhO1FBRUEsT0FBTyxFQUFFO0lBQ1g7SUFFQSxPQUFPO1FBQUVUO1FBQVlXO1FBQVlDO0lBQVM7QUFDNUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWV0YXNrLy4vaG9va3MvdXNlR3JhcGhRTC50cz9kOGJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxDbGllbnQsIGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZUdyYXBoUUwoKSB7XHJcbiAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ncmFwaHFsXCIgYXMgc3RyaW5nO1xyXG5cclxuICBjb25zdCBncmFwaFFMQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoZW5kcG9pbnQpO1xyXG5cclxuICBjb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKFxyXG4gICAgZmlyc3ROYW1lOiBTdHJpbmcsXHJcbiAgICBsYXN0TmFtZTogU3RyaW5nLFxyXG4gICAgZW1haWw6IFN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBTdHJpbmdcclxuICApID0+IHtcclxuICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsYFxyXG4gICAgICBtdXRhdGlvbiBBZGRVc2VyKFxyXG4gICAgICAgICRmaXJzdE5hbWU6IFN0cmluZyFcclxuICAgICAgICAkbGFzdE5hbWU6IFN0cmluZyFcclxuICAgICAgICAkZW1haWw6IFN0cmluZyFcclxuICAgICAgICAkcGFzc3dvcmQ6IFN0cmluZyFcclxuICAgICAgKSB7XHJcbiAgICAgICAgY3JlYXRlVXNlcihcclxuICAgICAgICAgIG9iamVjdDoge1xyXG4gICAgICAgICAgICB0aXRsZTogJGZpcnN0TmFtZVxyXG4gICAgICAgICAgICBsYXN0TmFtZTogJGxhc3ROYW1lXHJcbiAgICAgICAgICAgIGVtYWlsOiAkZW1haWxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZmlyc3ROYW1lXHJcbiAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcclxuICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBncmFwaFFMQ2xpZW50LnJlcXVlc3QobXV0YXRpb24sIHZhcmlhYmxlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICBnZXRBbGxVc2VycyB7XHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhRTENsaWVudC5yZXF1ZXN0KHF1ZXJ5KTtcclxuICAgIGNvbnNvbGUubG9nKFwiPT5cIiwgZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGNyZWF0ZVVzZXIsIHVwZGF0ZVVzZXIsIGdldFVzZXJzIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIkdyYXBoUUxDbGllbnQiLCJncWwiLCJVc2VHcmFwaFFMIiwiZW5kcG9pbnQiLCJncmFwaFFMQ2xpZW50IiwiY3JlYXRlVXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIm11dGF0aW9uIiwidmFyaWFibGVzIiwiZGF0YSIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlVXNlciIsImdldFVzZXJzIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useGraphQL.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGraphQL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGraphQL */ \"./hooks/useGraphQL.ts\");\n// import Head from \"next/head\";\n\n\n\n\n\nfunction Home({ list  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(list);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Users\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\seesight\\\\hometask\\\\pages\\\\index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                value: \"+ Create new user\",\n                                onClick: ()=>router.push(\"/create\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\seesight\\\\hometask\\\\pages\\\\index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\seesight\\\\hometask\\\\pages\\\\index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\seesight\\\\hometask\\\\pages\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                 false ? 0 : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/0\",\n                        children: \"asdasd@gmail.com\"\n                    }, 0, false, {\n                        fileName: \"D:\\\\seesight\\\\hometask\\\\pages\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\seesight\\\\hometask\\\\pages\\\\index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\seesight\\\\hometask\\\\pages\\\\index.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\nasync function getStaticProps() {\n    let LIST = [];\n    const { getUsers  } = (0,_hooks_useGraphQL__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    LIST = [\n        ...await getUsers()\n    ];\n    return {\n        props: {\n            list: LIST\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQWdDO0FBQ2hDO0FBTU1BO0FBSnlDO0FBQ1A7QUFDSztBQVE5QixTQUFTSSxLQUFLLEVBQUVDLEtBQUksRUFBUSxFQUFFO0lBQzNDLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QkssUUFBUUMsR0FBRyxDQUFDSDtJQUNaLHFCQUNFO2tCQUNFLDRFQUFDSTtZQUFLQyxXQUFXVCxxRUFBVzs7OEJBQzFCLDhEQUFDVTtvQkFBSUQsV0FBV1QsNEVBQWtCOztzQ0FDaEMsOERBQUNZO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNGO3NDQUNDLDRFQUFDRztnQ0FDQ0MsTUFBTTtnQ0FDTkMsT0FBTztnQ0FDUEMsU0FBUyxJQUFNWCxPQUFPWSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXpCekMsTUE2QjhDLEdBQ3BDYixrQkFFQSw4REFBQ007b0JBQUlXLE9BQU87d0JBQUVDLFFBQVE7b0JBQU87OEJBQzNCLDRFQUFDQzt3QkFBVUMsTUFBSztrQ0FBSzt1QkFBYjs7Ozs7Ozs7O3dCQUlYOzs7Ozs7OztBQUlULENBQUM7QUFFTSxlQUFlQyxpQkFBaUI7SUFDckMsSUFBSUMsT0FBTyxFQUFFO0lBRWIsTUFBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR3pCLDZEQUFVQTtJQUMvQndCLE9BQU87V0FBSyxNQUFNQztLQUFZO0lBRTlCLE9BQU87UUFDTEMsT0FBTztZQUNMeEIsTUFBTXNCO1FBQ1I7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21ldGFzay8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwiQG5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFVzZUdyYXBoUUwgZnJvbSBcIi4uL2hvb2tzL3VzZUdyYXBoUUxcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5pbnRlcmZhY2UgTGlzdCB7XG4gIGxpc3Q6IFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgbGlzdCB9OiBMaXN0KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxwPlVzZXJzPC9wPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT17XCJidXR0b25cIn1cbiAgICAgICAgICAgICAgdmFsdWU9e1wiKyBDcmVhdGUgbmV3IHVzZXJcIn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvY3JlYXRlXCIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyAoXG4gICAgICAgICAgbGlzdC5tYXAoKHsgZW1haWwgfSwgaW5kZXgpID0+IDxwIGtleT17aW5kZXh9PntlbWFpbH08L3A+KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgIDxhIGtleT17MH0gaHJlZj1cIi8wXCI+XG4gICAgICAgICAgICAgIGFzZGFzZEBnbWFpbC5jb21cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBsZXQgTElTVCA9IFtdIGFzIEFycmF5PE9iamVjdD47XG5cbiAgY29uc3QgeyBnZXRVc2VycyB9ID0gVXNlR3JhcGhRTCgpO1xuICBMSVNUID0gWy4uLihhd2FpdCBnZXRVc2VycygpKV07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbGlzdDogTElTVCxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwic3R5bGVzIiwidXNlUm91dGVyIiwiVXNlR3JhcGhRTCIsIkhvbWUiLCJsaXN0Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJkZXNjcmlwdGlvbiIsInAiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJwdXNoIiwibWFwIiwiZW1haWwiLCJpbmRleCIsInN0eWxlIiwiaGVpZ2h0IiwiYSIsImhyZWYiLCJnZXRTdGF0aWNQcm9wcyIsIkxJU1QiLCJnZXRVc2VycyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();