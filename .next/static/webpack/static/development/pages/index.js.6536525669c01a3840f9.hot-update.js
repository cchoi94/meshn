webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/reducers/booked-times-reducer.js":
/*!************************************************!*\
  !*** ./redux/reducers/booked-times-reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_gym_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/gym-actions */ "./redux/actions/gym-actions.js");


var bookedTimesReducer = function bookedTimesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_gym_actions__WEBPACK_IMPORTED_MODULE_0__["GYM_TIMES_BOOKED"]:
      return payload.bookedTimes;

    case _actions_gym_actions__WEBPACK_IMPORTED_MODULE_0__["USER_TIMES_BOOKED"]:
      return payload.bookedTimes;

    case _actions_gym_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_ERROR"]:
      return payload.error;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (bookedTimesReducer);

/***/ })

})
//# sourceMappingURL=index.js.6536525669c01a3840f9.hot-update.js.map