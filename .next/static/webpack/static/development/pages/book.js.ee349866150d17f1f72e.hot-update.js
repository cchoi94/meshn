webpackHotUpdate("static/development/pages/book.js",{

/***/ "./components/SelectDropDown.js":
/*!**************************************!*\
  !*** ./components/SelectDropDown.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSelect; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");



var _jsxFileName = "/Users/codychoi/Desktop/meshn/components/SelectDropDown.js";





function SimpleSelect(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    timeSlot: null
  }),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  function handleChange(event) {
    setValues(function (oldValues) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    });
    props.onSelectedTimeslot(event.target.value);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.type === 'booking:timeslots' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: handleChange,
    displayEmpty: true,
    value: values.timeSlot,
    name: "timeSlot",
    placeholder: "Select available timeslot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.data.map(function (timeSlot) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: timeSlot,
      value: timeSlot,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "".concat(timeSlot.startTime, " - ").concat(timeSlot.endTime));
  }))));
} // `${moment(timeSlot.mapValue.fields.start_time.stringValue, 'HH:mm:ss').format('h:mm a')} - ${moment(timeSlot.mapValue.fields.end_time.stringValue, 'HH:mm:ss').format('h:mm a')}`

/***/ })

})
//# sourceMappingURL=book.js.ee349866150d17f1f72e.hot-update.js.map