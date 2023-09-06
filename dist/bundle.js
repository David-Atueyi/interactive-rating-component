/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gettingTheHtmlElems */ \"./src/gettingTheHtmlElems.ts\");\n\n///\nconst handleRatingNumOne = (event) => {\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.displayRatingNumElem.innerHTML = \"1\";\n};\nconst handleRatingNumTwo = (event) => {\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.displayRatingNumElem.innerHTML = \"2\";\n};\nconst handleRatingNumThree = (event) => {\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.displayRatingNumElem.innerHTML = \"3\";\n};\nconst handleRatingNumFour = (event) => {\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.displayRatingNumElem.innerHTML = \"4\";\n};\nconst handleRatingNumFive = (event) => {\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.displayRatingNumElem.innerHTML = \"5\";\n};\n// handling light mode\nconst handleLightMode = (event) => {\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.containerElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.containerElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.containerElem.classList.toggle(\"container_light_mode\");\n    //\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.lightModeElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.lightModeElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.lightModeElem.classList.toggle(\"icon_star_light_mode\");\n    //\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.h2Elem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.h2Elem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.h2Elem.forEach((h2) => h2.classList.toggle(\"h2_light_mode\"));\n    //\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.paragraphElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.paragraphElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.paragraphElem.forEach((para) => para.classList.toggle(\"p_light_mode\"));\n    //\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumElems.forEach((rating) => rating.classList.toggle(\"rating_num_light_mode\"));\n    //\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.firstRatingPageView === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.firstRatingPageView === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.firstRatingPageView.classList.toggle(\"first_child_light_mode\");\n    //\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.secondRatingPageView === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.secondRatingPageView === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.secondRatingPageView.classList.toggle(\"first_child_light_mode\");\n    //\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.submitButtonElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.submitButtonElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.submitButtonElem.classList.toggle(\"submit_light_mode\");\n    //\n    _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.displayRatingElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.displayRatingElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.displayRatingElem.classList.toggle(\"display_rating_light_mode\");\n};\n//handling the submit\nconst handleSubmitBtn = (event) => {\n    if (_gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.displayRatingNumElem.innerHTML === \"\") {\n        alert(\"please select a rating\");\n    }\n    else {\n        _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.firstRatingPageView === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.firstRatingPageView === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.firstRatingPageView.classList.toggle(\"first_child_second_style\");\n        _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.secondRatingPageView === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.secondRatingPageView === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.secondRatingPageView.classList.toggle(\"second_child_second_style\");\n    }\n};\n//event listeners\n_gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.lightModeElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.lightModeElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.lightModeElem.addEventListener(\"click\", handleLightMode);\n_gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.submitButtonElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.submitButtonElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.submitButtonElem.addEventListener(\"click\", handleSubmitBtn);\n_gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumOneElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumOneElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumOneElem.addEventListener(\"click\", handleRatingNumOne);\n_gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumTwoElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumTwoElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumTwoElem.addEventListener(\"click\", handleRatingNumTwo);\n_gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumThreeElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumThreeElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumThreeElem.addEventListener(\"click\", handleRatingNumThree);\n_gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumFourElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumFourElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumFourElem.addEventListener(\"click\", handleRatingNumFour);\n_gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumFiveElem === null || _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumFiveElem === void 0 ? void 0 : _gettingTheHtmlElems__WEBPACK_IMPORTED_MODULE_0__.ratingNumFiveElem.addEventListener(\"click\", handleRatingNumFive);\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/app.ts?");

/***/ }),

/***/ "./src/gettingTheHtmlElems.ts":
/*!************************************!*\
  !*** ./src/gettingTheHtmlElems.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containerElem: () => (/* binding */ containerElem),\n/* harmony export */   displayRatingElem: () => (/* binding */ displayRatingElem),\n/* harmony export */   displayRatingNumElem: () => (/* binding */ displayRatingNumElem),\n/* harmony export */   firstRatingPageView: () => (/* binding */ firstRatingPageView),\n/* harmony export */   h2Elem: () => (/* binding */ h2Elem),\n/* harmony export */   lightModeElem: () => (/* binding */ lightModeElem),\n/* harmony export */   paragraphElem: () => (/* binding */ paragraphElem),\n/* harmony export */   ratingNumElems: () => (/* binding */ ratingNumElems),\n/* harmony export */   ratingNumFiveElem: () => (/* binding */ ratingNumFiveElem),\n/* harmony export */   ratingNumFourElem: () => (/* binding */ ratingNumFourElem),\n/* harmony export */   ratingNumOneElem: () => (/* binding */ ratingNumOneElem),\n/* harmony export */   ratingNumThreeElem: () => (/* binding */ ratingNumThreeElem),\n/* harmony export */   ratingNumTwoElem: () => (/* binding */ ratingNumTwoElem),\n/* harmony export */   secondRatingPageView: () => (/* binding */ secondRatingPageView),\n/* harmony export */   submitButtonElem: () => (/* binding */ submitButtonElem)\n/* harmony export */ });\n//getting the html elements\nconst containerElem = document.querySelector(\".container\");\n//\nconst h2Elem = document.querySelectorAll(\"h2\");\n//\nconst paragraphElem = document.querySelectorAll(\"p\");\n//\nconst lightModeElem = document.querySelector(\".icon_star\");\n//\nconst firstRatingPageView = document.querySelector(\".first_child\");\n//\nconst ratingNumElems = document.querySelectorAll(\".rating_num\");\n//\nconst ratingNumOneElem = document.querySelector(\".rating_num_one\");\n//\nconst ratingNumTwoElem = document.querySelector(\".rating_num_two\");\n//\nconst ratingNumThreeElem = document.querySelector(\".rating_num_three\");\n//\nconst ratingNumFourElem = document.querySelector(\".rating_num_four\");\n//\nconst ratingNumFiveElem = document.querySelector(\".rating_num_five\");\n//\nconst secondRatingPageView = document.querySelector(\".second_child\");\n//\nconst submitButtonElem = document.querySelector(\".submit\");\n//\nconst displayRatingElem = document.querySelector(\".display_rating\");\n//\nconst displayRatingNumElem = document.querySelector(\"span\");\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/gettingTheHtmlElems.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;