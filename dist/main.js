/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/input */ \"./src/scripts/input.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n/* harmony import */ var _scripts_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/wheel */ \"./src/scripts/wheel.js\");\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  canvas.width = window.innerWidth / 1.2;\n  canvas.height = window.innerHeight / 1.3;\n  var oldWheel = new _scripts_wheel__WEBPACK_IMPORTED_MODULE_2__.default(245, 40, 18, 9.5, 8);\n  var newWheel = new _scripts_wheel__WEBPACK_IMPORTED_MODULE_2__.default(295, 40, 19, 10.5, 15);\n  var currentWheel = newWheel; // window.addEventListener(\"resize\", () => {\n  //     canvas.width = window.innerWidth/1.5;\n  //     canvas.height = window.innerHeight/1.3;\n  // });\n\n  ctx.strokeStyle = \"red\";\n  var oldWheelView = new _scripts_view__WEBPACK_IMPORTED_MODULE_1__.default(ctx, canvas, oldWheel);\n  ctx.strokeStyle = \"blue\";\n  var newWheelView = new _scripts_view__WEBPACK_IMPORTED_MODULE_1__.default(ctx, canvas, newWheel); // document.getElementById(\"test\").addEventListener(\"click\", function() {\n  //     console.log(newWheel);\n  //     newWheel.decTireWidth();\n  //     console.log(newWheel);\n  //     newWheelView.draw();\n  // });\n\n  document.addEventListener(\"keydown\", function (key) {\n    console.log(key.code);\n\n    if (key.code === \"Space\") {\n      if (currentWheel === newWheel) {\n        currentWheel = oldWheel;\n      } else {\n        currentWheel = newWheel;\n      }\n    }\n\n    if (key.code === \"ArrowUp\") {\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n      console.log(currentWheel);\n      currentWheel.decTireWidth();\n      console.log(currentWheel);\n      newWheelView.draw();\n      oldWheelView.draw();\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBRyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQzlDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUFKLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlUCxNQUFNLENBQUNRLFVBQVAsR0FBa0IsR0FBakM7QUFDQU4sRUFBQUEsTUFBTSxDQUFDTyxNQUFQLEdBQWdCVCxNQUFNLENBQUNVLFdBQVAsR0FBbUIsR0FBbkM7QUFFQSxNQUFJQyxRQUFRLEdBQUcsSUFBSVosbURBQUosQ0FBVSxHQUFWLEVBQWMsRUFBZCxFQUFpQixFQUFqQixFQUFvQixHQUFwQixFQUF3QixDQUF4QixDQUFmO0FBQ0EsTUFBSWEsUUFBUSxHQUFHLElBQUliLG1EQUFKLENBQVUsR0FBVixFQUFjLEVBQWQsRUFBaUIsRUFBakIsRUFBb0IsSUFBcEIsRUFBeUIsRUFBekIsQ0FBZjtBQUNBLE1BQUljLFlBQVksR0FBR0QsUUFBbkIsQ0FUOEMsQ0FXOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUFQLEVBQUFBLEdBQUcsQ0FBQ1MsV0FBSixHQUFrQixLQUFsQjtBQUNBLE1BQUlDLFlBQVksR0FBRyxJQUFJakIsa0RBQUosQ0FBU08sR0FBVCxFQUFjSCxNQUFkLEVBQXNCUyxRQUF0QixDQUFuQjtBQUNBTixFQUFBQSxHQUFHLENBQUNTLFdBQUosR0FBa0IsTUFBbEI7QUFDQSxNQUFJRSxZQUFZLEdBQUcsSUFBSWxCLGtEQUFKLENBQVNPLEdBQVQsRUFBY0gsTUFBZCxFQUFzQlUsUUFBdEIsQ0FBbkIsQ0FuQjhDLENBcUI5QztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFULEVBQUFBLFFBQVEsQ0FBQ0YsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQWdCLEdBQUcsRUFBSTtBQUN4Q0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7O0FBQ0EsUUFBSUgsR0FBRyxDQUFDRyxJQUFKLEtBQWEsT0FBakIsRUFBMEI7QUFDdEIsVUFBSVAsWUFBWSxLQUFLRCxRQUFyQixFQUErQjtBQUMzQkMsUUFBQUEsWUFBWSxHQUFHRixRQUFmO0FBQ0gsT0FGRCxNQUVPO0FBQ0hFLFFBQUFBLFlBQVksR0FBR0QsUUFBZjtBQUNIO0FBQ0o7O0FBQ0QsUUFBSUssR0FBRyxDQUFDRyxJQUFKLEtBQWEsU0FBakIsRUFBNEI7QUFDeEJmLE1BQUFBLEdBQUcsQ0FBQ2dCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CbkIsTUFBTSxDQUFDSyxLQUEzQixFQUFrQ0wsTUFBTSxDQUFDTyxNQUF6QztBQUNBUyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sWUFBWjtBQUNBQSxNQUFBQSxZQUFZLENBQUNTLFlBQWI7QUFDQUosTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLFlBQVo7QUFDQUcsTUFBQUEsWUFBWSxDQUFDTyxJQUFiO0FBQ0FSLE1BQUFBLFlBQVksQ0FBQ1EsSUFBYjtBQUNIO0FBQ0osR0FqQkQ7QUFtQkgsQ0FoREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oeXBlZml0bWVudC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tIFwiLi9zY3JpcHRzL2lucHV0XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiLi9zY3JpcHRzL3ZpZXdcIjtcbmltcG9ydCBXaGVlbCBmcm9tIFwiLi9zY3JpcHRzL3doZWVsXCJcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGgvMS4yO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMS4zO1xuICAgIFxuICAgIHZhciBvbGRXaGVlbCA9IG5ldyBXaGVlbCgyNDUsNDAsMTgsOS41LDgpO1xuICAgIHZhciBuZXdXaGVlbCA9IG5ldyBXaGVlbCgyOTUsNDAsMTksMTAuNSwxNSk7XG4gICAgdmFyIGN1cnJlbnRXaGVlbCA9IG5ld1doZWVsO1xuXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIC8vICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aC8xLjU7XG4gICAgLy8gICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMS4zO1xuICAgIC8vIH0pO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICB2YXIgb2xkV2hlZWxWaWV3ID0gbmV3IFZpZXcoY3R4LCBjYW52YXMsIG9sZFdoZWVsKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsdWVcIjtcbiAgICB2YXIgbmV3V2hlZWxWaWV3ID0gbmV3IFZpZXcoY3R4LCBjYW52YXMsIG5ld1doZWVsKTtcblxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAvLyAgICAgY29uc29sZS5sb2cobmV3V2hlZWwpO1xuICAgIC8vICAgICBuZXdXaGVlbC5kZWNUaXJlV2lkdGgoKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cobmV3V2hlZWwpO1xuICAgIC8vICAgICBuZXdXaGVlbFZpZXcuZHJhdygpO1xuICAgIC8vIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coa2V5LmNvZGUpO1xuICAgICAgICBpZiAoa2V5LmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRXaGVlbCA9PT0gbmV3V2hlZWwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50V2hlZWwgPSBvbGRXaGVlbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFdoZWVsID0gbmV3V2hlZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5jb2RlID09PSBcIkFycm93VXBcIikge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdoZWVsKTtcbiAgICAgICAgICAgIGN1cnJlbnRXaGVlbC5kZWNUaXJlV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXaGVlbCk7XG4gICAgICAgICAgICBuZXdXaGVlbFZpZXcuZHJhdygpO1xuICAgICAgICAgICAgb2xkV2hlZWxWaWV3LmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KTtcblxuXG5cblxuXG4iXSwibmFtZXMiOlsiSW5wdXQiLCJWaWV3IiwiV2hlZWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm9sZFdoZWVsIiwibmV3V2hlZWwiLCJjdXJyZW50V2hlZWwiLCJzdHJva2VTdHlsZSIsIm9sZFdoZWVsVmlldyIsIm5ld1doZWVsVmlldyIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiY2xlYXJSZWN0IiwiZGVjVGlyZVdpZHRoIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/input.js":
/*!******************************!*\
  !*** ./src/scripts/input.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar Input = function Input() {\n  _classCallCheck(this, Input);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbnB1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFBZUEsS0FBZjs7SUFFTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oeXBlZml0bWVudC8uL3NyYy9zY3JpcHRzL2lucHV0LmpzPzQ0ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG5cbmNsYXNzIElucHV0IHtcbiAgICBcbn0iXSwibmFtZXMiOlsiSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/input.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar View = /*#__PURE__*/function () {\n  function View(ctx, canvas, wheel) {\n    _classCallCheck(this, View);\n\n    this.ctx = ctx;\n    this.wheel = wheel;\n    this.canvas = canvas;\n    this.rimColor = this.ctx.strokeStyle;\n    this.draw();\n  }\n\n  _createClass(View, [{\n    key: \"draw\",\n    value: function draw() {\n      this.calculateRim();\n      this.calculateTire();\n      this.drawRim();\n      this.drawTire();\n    }\n  }, {\n    key: \"drawSuspension\",\n    value: function drawSuspension() {}\n  }, {\n    key: \"calculateRim\",\n    value: function calculateRim() {\n      this.centerX = this.canvas.width / 2 + this.wheel.rimOffset;\n      this.centerY = this.canvas.height / 2;\n      this.lengthX = this.wheel.rimWidth * 8;\n      this.lengthY = this.wheel.tireDiameter * 6;\n      this.leftX = this.centerX - this.lengthX;\n      this.rightX = this.centerX + this.lengthX;\n      this.topY = this.centerY - this.lengthY;\n      this.bottomY = this.centerY + this.lengthY;\n    }\n  }, {\n    key: \"drawRim\",\n    value: function drawRim() {\n      this.ctx.strokeStyle = this.rimColor;\n      this.ctx.beginPath(); // right\n\n      this.ctx.moveTo(this.rightX, this.topY);\n      this.ctx.lineTo(this.rightX, this.bottomY); // bottom\n\n      this.ctx.moveTo(this.rightX, this.bottomY);\n      this.ctx.lineTo(this.leftX, this.bottomY); // left\n\n      this.ctx.moveTo(this.leftX, this.bottomY);\n      this.ctx.lineTo(this.leftX, this.topY); // top\n\n      this.ctx.moveTo(this.leftX, this.topY);\n      this.ctx.lineTo(this.rightX, this.topY);\n      this.ctx.stroke();\n    }\n  }, {\n    key: \"calculateTire\",\n    value: function calculateTire() {\n      this.rimWidthMM = this.wheel.rimWidth * 25.4;\n\n      if (this.wheel.tireWidth - this.rimWidthMM > 10) {\n        this.leftXTire = this.leftX + (this.rimWidthMM - this.wheel.tireWidth) / 3;\n        this.rightXTire = this.rightX - (this.rimWidthMM - this.wheel.tireWidth) / 3;\n      } else {\n        this.leftXTire = this.leftX - (this.rimWidthMM - this.wheel.tireWidth) / 3;\n        this.rightXTire = this.rightX + (this.rimWidthMM - this.wheel.tireWidth) / 3;\n      }\n\n      this.topYTire = this.topY - this.wheel.tireProfile;\n      this.bottomYTire = this.bottomY + this.wheel.tireProfile;\n    }\n  }, {\n    key: \"drawTire\",\n    value: function drawTire() {\n      this.ctx.strokeStyle = \"black\"; // top tire\n\n      this.ctx.beginPath(); //left top of a rim\n\n      this.ctx.moveTo(this.leftX, this.topY); //left top of a tire\n\n      this.ctx.lineTo(this.leftXTire, this.topYTire); //left top to right top\n\n      this.ctx.bezierCurveTo(this.leftX, this.topY - this.wheel.tireProfile * 1.5, this.rightX, this.topY - this.wheel.tireProfile * 1.5, this.rightXTire, this.topYTire);\n      this.ctx.stroke();\n      this.ctx.beginPath(); // right top of a tire\n\n      this.ctx.moveTo(this.rightXTire, this.topYTire); // right top of a rim\n\n      this.ctx.lineTo(this.rightX, this.topY);\n      this.ctx.stroke(); // bottom tire\n\n      this.ctx.beginPath(); //left bottom of a rim\n\n      this.ctx.moveTo(this.leftX, this.bottomY); //left bottom of a tire\n\n      this.ctx.lineTo(this.leftXTire, this.bottomYTire); //left top to right top\n\n      this.ctx.bezierCurveTo(this.leftX, this.bottomY + this.wheel.tireProfile * 1.5, this.rightX, this.bottomY + this.wheel.tireProfile * 1.5, this.rightXTire, this.bottomYTire);\n      this.ctx.stroke();\n      this.ctx.beginPath(); // right bottom of a tire\n\n      this.ctx.moveTo(this.rightX, this.bottomY); // right bottom of a rim\n\n      this.ctx.lineTo(this.rightXTire, this.bottomYTire);\n      this.ctx.stroke();\n    }\n  }]);\n\n  return View;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL2h5cGVmaXRtZW50Ly4vc3JjL3NjcmlwdHMvdmlldy5qcz84MGMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzLCB3aGVlbCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy53aGVlbCA9IHdoZWVsO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5yaW1Db2xvciA9IHRoaXMuY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBkcmF3ICgpIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVSaW0oKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUaXJlKCk7XG4gICAgICAgIHRoaXMuZHJhd1JpbSgpO1xuICAgICAgICB0aGlzLmRyYXdUaXJlKCk7XG4gICAgfVxuXG4gICAgZHJhd1N1c3BlbnNpb24oKSB7XG5cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVSaW0oKSB7XG4gICAgICAgIHRoaXMuY2VudGVyWCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMiArIHRoaXMud2hlZWwucmltT2Zmc2V0O1xuICAgICAgICB0aGlzLmNlbnRlclkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmxlbmd0aFggPSB0aGlzLndoZWVsLnJpbVdpZHRoICogOCA7XG4gICAgICAgIHRoaXMubGVuZ3RoWSA9IHRoaXMud2hlZWwudGlyZURpYW1ldGVyICogNlxuICAgICAgICBcbiAgICAgICAgdGhpcy5sZWZ0WCA9IHRoaXMuY2VudGVyWCAtIHRoaXMubGVuZ3RoWDtcbiAgICAgICAgdGhpcy5yaWdodFggPSB0aGlzLmNlbnRlclggKyB0aGlzLmxlbmd0aFg7XG4gICAgICAgIHRoaXMudG9wWSA9IHRoaXMuY2VudGVyWSAtIHRoaXMubGVuZ3RoWTtcbiAgICAgICAgdGhpcy5ib3R0b21ZID0gdGhpcy5jZW50ZXJZICsgdGhpcy5sZW5ndGhZO1xuICAgIH1cblxuICAgIGRyYXdSaW0oKXtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnJpbUNvbG9yO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyBcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucmlnaHRYLCB0aGlzLnRvcFkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5yaWdodFgsIHRoaXMuYm90dG9tWSk7XG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5yaWdodFgsIHRoaXMuYm90dG9tWSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmxlZnRYLCB0aGlzLmJvdHRvbVkpO1xuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmxlZnRYLCB0aGlzLmJvdHRvbVkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5sZWZ0WCwgdGhpcy50b3BZKTtcbiAgICAgICAgLy8gdG9wXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmxlZnRYLCB0aGlzLnRvcFkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5yaWdodFgsIHRoaXMudG9wWSk7XG5cbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7ICAgIFxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVRpcmUoKSB7XG4gICAgICAgIHRoaXMucmltV2lkdGhNTSA9IHRoaXMud2hlZWwucmltV2lkdGggKiAyNS40O1xuXG4gICAgICAgIGlmICh0aGlzLndoZWVsLnRpcmVXaWR0aCAtIHRoaXMucmltV2lkdGhNTSA+IDEwKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRYVGlyZSA9IHRoaXMubGVmdFggKyAodGhpcy5yaW1XaWR0aE1NIC0gdGhpcy53aGVlbC50aXJlV2lkdGgpIC8zXG4gICAgICAgICAgICB0aGlzLnJpZ2h0WFRpcmUgPSB0aGlzLnJpZ2h0WCAgLSAodGhpcy5yaW1XaWR0aE1NIC0gdGhpcy53aGVlbC50aXJlV2lkdGgpIC8zXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRYVGlyZSA9IHRoaXMubGVmdFggLSAodGhpcy5yaW1XaWR0aE1NIC0gdGhpcy53aGVlbC50aXJlV2lkdGgpIC8zXG4gICAgICAgICAgICB0aGlzLnJpZ2h0WFRpcmUgPSB0aGlzLnJpZ2h0WCAgKyAodGhpcy5yaW1XaWR0aE1NIC0gdGhpcy53aGVlbC50aXJlV2lkdGgpIC8zXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvcFlUaXJlID0gdGhpcy50b3BZIC0gdGhpcy53aGVlbC50aXJlUHJvZmlsZTtcbiAgICAgICAgdGhpcy5ib3R0b21ZVGlyZSA9IHRoaXMuYm90dG9tWSArIHRoaXMud2hlZWwudGlyZVByb2ZpbGU7XG4gICAgfVxuXG4gICAgZHJhd1RpcmUoKSB7XG5cbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIC8vIHRvcCB0aXJlXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvL2xlZnQgdG9wIG9mIGEgcmltXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmxlZnRYLCB0aGlzLnRvcFkpO1xuICAgICAgICAvL2xlZnQgdG9wIG9mIGEgdGlyZVxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5sZWZ0WFRpcmUsIHRoaXMudG9wWVRpcmUpO1xuXG4gICAgICAgIC8vbGVmdCB0b3AgdG8gcmlnaHQgdG9wXG4gICAgICAgIHRoaXMuY3R4LmJlemllckN1cnZlVG8odGhpcy5sZWZ0WCwgdGhpcy50b3BZIC0gdGhpcy53aGVlbC50aXJlUHJvZmlsZSAqIDEuNSxcbiAgICAgICAgICAgIHRoaXMucmlnaHRYLCB0aGlzLnRvcFkgLSB0aGlzLndoZWVsLnRpcmVQcm9maWxlICogMS41LFxuICAgICAgICAgICAgdGhpcy5yaWdodFhUaXJlLCB0aGlzLnRvcFlUaXJlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyByaWdodCB0b3Agb2YgYSB0aXJlXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnJpZ2h0WFRpcmUsIHRoaXMudG9wWVRpcmUpO1xuICAgICAgICAvLyByaWdodCB0b3Agb2YgYSByaW1cbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucmlnaHRYLCB0aGlzLnRvcFkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAvLyBib3R0b20gdGlyZVxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy9sZWZ0IGJvdHRvbSBvZiBhIHJpbVxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5sZWZ0WCwgdGhpcy5ib3R0b21ZKTtcbiAgICAgICAgLy9sZWZ0IGJvdHRvbSBvZiBhIHRpcmVcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubGVmdFhUaXJlLCB0aGlzLmJvdHRvbVlUaXJlKTtcbiAgICAgICAgLy9sZWZ0IHRvcCB0byByaWdodCB0b3BcbiAgICAgICAgdGhpcy5jdHguYmV6aWVyQ3VydmVUbyh0aGlzLmxlZnRYLCB0aGlzLmJvdHRvbVkgKyB0aGlzLndoZWVsLnRpcmVQcm9maWxlICogMS41LFxuICAgICAgICAgICAgdGhpcy5yaWdodFgsIHRoaXMuYm90dG9tWSArIHRoaXMud2hlZWwudGlyZVByb2ZpbGUgKiAxLjUsXG4gICAgICAgICAgICB0aGlzLnJpZ2h0WFRpcmUsIHRoaXMuYm90dG9tWVRpcmUpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIHJpZ2h0IGJvdHRvbSBvZiBhIHRpcmVcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucmlnaHRYLCB0aGlzLmJvdHRvbVkpO1xuICAgICAgICAvLyByaWdodCBib3R0b20gb2YgYSByaW1cbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucmlnaHRYVGlyZSwgdGhpcy5ib3R0b21ZVGlyZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJWaWV3IiwiY3R4IiwiY2FudmFzIiwid2hlZWwiLCJyaW1Db2xvciIsInN0cm9rZVN0eWxlIiwiZHJhdyIsImNhbGN1bGF0ZVJpbSIsImNhbGN1bGF0ZVRpcmUiLCJkcmF3UmltIiwiZHJhd1RpcmUiLCJjZW50ZXJYIiwid2lkdGgiLCJyaW1PZmZzZXQiLCJjZW50ZXJZIiwiaGVpZ2h0IiwibGVuZ3RoWCIsInJpbVdpZHRoIiwibGVuZ3RoWSIsInRpcmVEaWFtZXRlciIsImxlZnRYIiwicmlnaHRYIiwidG9wWSIsImJvdHRvbVkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJyaW1XaWR0aE1NIiwidGlyZVdpZHRoIiwibGVmdFhUaXJlIiwicmlnaHRYVGlyZSIsInRvcFlUaXJlIiwidGlyZVByb2ZpbGUiLCJib3R0b21ZVGlyZSIsImJlemllckN1cnZlVG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

/***/ }),

/***/ "./src/scripts/wheel.js":
/*!******************************!*\
  !*** ./src/scripts/wheel.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Wheel; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Wheel = /*#__PURE__*/function () {\n  function Wheel(tireWidth, tireProfile, tireDiameter, rimWidth, rimOffset) {\n    _classCallCheck(this, Wheel);\n\n    this.tireWidth = tireWidth;\n    this.tireProfile = tireProfile;\n    this.tireDiameter = tireDiameter;\n    this.rimWidth = rimWidth;\n    this.rimOffset = rimOffset;\n  }\n\n  _createClass(Wheel, [{\n    key: \"incTireWidth\",\n    value: function incTireWidth() {\n      this.tireWidth += 5;\n    }\n  }, {\n    key: \"decTireWidth\",\n    value: function decTireWidth() {\n      this.tireWidth -= 5;\n    }\n  }, {\n    key: \"incTireProfile\",\n    value: function incTireProfile() {\n      this.tireProfile += 5;\n    }\n  }, {\n    key: \"decTireProfile\",\n    value: function decTireProfile() {\n      this.tireProfile -= 5;\n    }\n  }, {\n    key: \"incTireDiameter\",\n    value: function incTireDiameter() {\n      this.tireDiameter += 1;\n    }\n  }, {\n    key: \"decTireDiameter\",\n    value: function decTireDiameter() {\n      this.tireDiameter -= 1;\n    }\n  }, {\n    key: \"incRimWidth\",\n    value: function incRimWidth() {\n      this.RimWidth += 0.5;\n    }\n  }, {\n    key: \"decRimWidth\",\n    value: function decRimWidth() {\n      this.RimWidth -= 0.5;\n    }\n  }, {\n    key: \"incRimOffset\",\n    value: function incRimOffset() {\n      this.RimOffset += 1;\n    }\n  }, {\n    key: \"decRimOffset\",\n    value: function decRimOffset() {\n      this.RimOffset -= 1;\n    }\n  }]);\n\n  return Wheel;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93aGVlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQTtBQUNqQixpQkFBWUMsU0FBWixFQUF1QkMsV0FBdkIsRUFBb0NDLFlBQXBDLEVBQWtEQyxRQUFsRCxFQUE0REMsU0FBNUQsRUFBdUU7QUFBQTs7QUFDL0QsU0FBS0osU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOzs7O1dBRUwsd0JBQWdCO0FBQ1osV0FBS0osU0FBTCxJQUFrQixDQUFsQjtBQUNIOzs7V0FFRCx3QkFBZ0I7QUFDWixXQUFLQSxTQUFMLElBQWtCLENBQWxCO0FBQ0g7OztXQUVELDBCQUFrQjtBQUNkLFdBQUtDLFdBQUwsSUFBb0IsQ0FBcEI7QUFDSDs7O1dBRUQsMEJBQWtCO0FBQ2QsV0FBS0EsV0FBTCxJQUFvQixDQUFwQjtBQUNIOzs7V0FFRCwyQkFBbUI7QUFDZixXQUFLQyxZQUFMLElBQXFCLENBQXJCO0FBQ0g7OztXQUVELDJCQUFtQjtBQUNmLFdBQUtBLFlBQUwsSUFBcUIsQ0FBckI7QUFDSDs7O1dBRUQsdUJBQWU7QUFDWCxXQUFLRyxRQUFMLElBQWlCLEdBQWpCO0FBQ0g7OztXQUVELHVCQUFlO0FBQ1gsV0FBS0EsUUFBTCxJQUFpQixHQUFqQjtBQUNIOzs7V0FFRCx3QkFBZ0I7QUFDWixXQUFLQyxTQUFMLElBQWtCLENBQWxCO0FBQ0g7OztXQUVELHdCQUFnQjtBQUNaLFdBQUtBLFNBQUwsSUFBa0IsQ0FBbEI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2h5cGVmaXRtZW50Ly4vc3JjL3NjcmlwdHMvd2hlZWwuanM/ZTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaGVlbCB7XG4gICAgY29uc3RydWN0b3IodGlyZVdpZHRoLCB0aXJlUHJvZmlsZSwgdGlyZURpYW1ldGVyLCByaW1XaWR0aCwgcmltT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRpcmVXaWR0aCA9IHRpcmVXaWR0aDtcbiAgICAgICAgICAgIHRoaXMudGlyZVByb2ZpbGUgPSB0aXJlUHJvZmlsZTtcbiAgICAgICAgICAgIHRoaXMudGlyZURpYW1ldGVyID0gdGlyZURpYW1ldGVyO1xuICAgICAgICAgICAgdGhpcy5yaW1XaWR0aCA9IHJpbVdpZHRoO1xuICAgICAgICAgICAgdGhpcy5yaW1PZmZzZXQgPSByaW1PZmZzZXQ7XG4gICAgICAgIH1cbiAgICBcbiAgICBpbmNUaXJlV2lkdGggKCkge1xuICAgICAgICB0aGlzLnRpcmVXaWR0aCArPSA1O1xuICAgIH1cblxuICAgIGRlY1RpcmVXaWR0aCAoKSB7XG4gICAgICAgIHRoaXMudGlyZVdpZHRoIC09IDU7XG4gICAgfVxuXG4gICAgaW5jVGlyZVByb2ZpbGUgKCkge1xuICAgICAgICB0aGlzLnRpcmVQcm9maWxlICs9IDU7XG4gICAgfVxuXG4gICAgZGVjVGlyZVByb2ZpbGUgKCkge1xuICAgICAgICB0aGlzLnRpcmVQcm9maWxlIC09IDU7XG4gICAgfVxuXG4gICAgaW5jVGlyZURpYW1ldGVyICgpIHtcbiAgICAgICAgdGhpcy50aXJlRGlhbWV0ZXIgKz0gMTtcbiAgICB9XG5cbiAgICBkZWNUaXJlRGlhbWV0ZXIgKCkge1xuICAgICAgICB0aGlzLnRpcmVEaWFtZXRlciAtPSAxO1xuICAgIH1cblxuICAgIGluY1JpbVdpZHRoICgpIHtcbiAgICAgICAgdGhpcy5SaW1XaWR0aCArPSAwLjU7XG4gICAgfVxuXG4gICAgZGVjUmltV2lkdGggKCkge1xuICAgICAgICB0aGlzLlJpbVdpZHRoIC09IDAuNTtcbiAgICB9XG4gICAgXG4gICAgaW5jUmltT2Zmc2V0ICgpIHtcbiAgICAgICAgdGhpcy5SaW1PZmZzZXQgKz0gMTtcbiAgICB9XG5cbiAgICBkZWNSaW1PZmZzZXQgKCkge1xuICAgICAgICB0aGlzLlJpbU9mZnNldCAtPSAxO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiV2hlZWwiLCJ0aXJlV2lkdGgiLCJ0aXJlUHJvZmlsZSIsInRpcmVEaWFtZXRlciIsInJpbVdpZHRoIiwicmltT2Zmc2V0IiwiUmltV2lkdGgiLCJSaW1PZmZzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/wheel.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oeXBlZml0bWVudC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;