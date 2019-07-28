webpackHotUpdate("static/development/pages/book.js",{

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-calendar/dist/entry.nostyle */ "./node_modules/react-calendar/dist/entry.nostyle.js");
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _SelectDropDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SelectDropDown */ "./components/SelectDropDown.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_calendarModal_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/calendarModal.scss */ "./styles/calendarModal.scss");
/* harmony import */ var _styles_calendarModal_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_calendarModal_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);








var _jsxFileName = "/Users/codychoi/Desktop/meshn/components/Modal.js";









var SimpleModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SimpleModal, _React$Component);

  function SimpleModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SimpleModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SimpleModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onDisableTile", function (_ref) {
      var date = _ref.date,
          view = _ref.view;
      var currentYear = date.getFullYear();
      var currentMonth = date.getMonth();
      var disabledDaysArray = [];
      var disabledDates = [];
      var convertedTimesArray = [];
      var numberOfdaysInMonth = new Date(currentYear, currentMonth, 0).getDate();

      _this.props.data.fields.availability.arrayValue.values.forEach(function (timeSlot) {
        if (timeSlot.mapValue.fields.status.stringValue === 'closed') {
          disabledDaysArray.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(timeSlot.mapValue.fields.day_value.integerValue));
        }
      });

      for (var i = 1; i <= numberOfdaysInMonth + 2; i++) {
        if (disabledDaysArray.includes(new Date(currentYear, currentMonth, i).getDay())) {
          disabledDates.push(new Date(currentYear, currentMonth, i));
        }
      }

      _this.props.bookedTimes.forEach(function (bookedTimes) {
        convertedTimesArray.push(new Date(bookedTimes));
        disabledDates.concat(convertedTimesArray);
      });

      disabledDates = disabledDates.concat(convertedTimesArray);
      return view === 'month' && // Block day tiles only
      disabledDates.some(function (disabledDate) {
        return date.getFullYear() === disabledDate.getFullYear() && date.getMonth() === disabledDate.getMonth() && date.getDate() === disabledDate.getDate();
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onCalendarDateClick", function (day) {
      var selectedDateTimeSlots = [];

      _this.setState({
        isDateSelected: true,
        selectedDate: day,
        selectedDateTimeSlots: selectedDateTimeSlots
      });

      _this.props.data.fields.availability.arrayValue.values.forEach(function (timeSlot) {
        if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(timeSlot.mapValue.fields.day_value.integerValue) === day.getDay()) {
          selectedDateTimeSlots.push({
            startTime: moment__WEBPACK_IMPORTED_MODULE_13__(timeSlot.mapValue.fields.start_time.stringValue, 'HH:mm:ss').format('h:mm a'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_13__(timeSlot.mapValue.fields.end_time.stringValue, 'HH:mm:ss').format('h:mm a')
          });

          _this.setState({
            selectedDateTimeSlots: selectedDateTimeSlots
          });
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSelectedTimeslot", function (selectedTime) {
      var convertedSelectedTime = {};
      convertedSelectedTime.startTime = moment__WEBPACK_IMPORTED_MODULE_13__(selectedTime.startTime, 'HH:mm a').format('HH:mm:ss');
      convertedSelectedTime.endTime = moment__WEBPACK_IMPORTED_MODULE_13__(selectedTime.endTime, 'HH:mm a').format('HH:mm:ss');

      _this.setState({
        userSelectedTimeSlot: convertedSelectedTime
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onHandleBookingSubmit", function () {
      var postData = {};
      var gymDocId = '';

      var convertedDate = _this.state.selectedDate.toString().slice(0, 15);

      var convertedStartTime = moment__WEBPACK_IMPORTED_MODULE_13__(_this.state.userSelectedTimeSlot.startTime, 'HH:mm:ss').format('h:mm a');
      var convertedEndTime = moment__WEBPACK_IMPORTED_MODULE_13__(_this.state.userSelectedTimeSlot.endTime, 'HH:mm:ss').format('h:mm a');

      if (_this.state.userSelectedTimeSlot && _this.state.selectedDate && _this.props.user) {
        var decomposedNameArray = _this.props.data.name.split('/');

        sweetalert2__WEBPACK_IMPORTED_MODULE_15___default.a.fire({
          title: "Booking Confirmation",
          html: "Selected Day: ".concat(convertedDate, " </br> Selected Time ").concat(convertedStartTime, " - ").concat(convertedEndTime),
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Confirm it!',
          className: 'swal'
        }).then(function (result) {
          if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_15___default.a.fire('Booked!', 'Your event has been scheduled', 'success');
            gymDocId = decomposedNameArray.splice(decomposedNameArray.length - 1)[0];
            postData.user_email = {
              stringValue: _this.props.user.user_email
            };
            postData.selected_start_time = {
              stringValue: _this.state.userSelectedTimeSlot.startTime
            };
            postData.selected_end_time = {
              stringValue: _this.state.userSelectedTimeSlot.endTime
            };
            postData.selected_date = {
              stringValue: _this.state.selectedDate
            };
            postData.modified = {
              stringValue: new Date()
            };
            postData.gym_name = {
              stringValue: _this.props.data.fields.name.stringValue
            };
            postData.gym_location = {
              stringValue: _this.props.data.fields.location.stringValue
            };
            postData.gym_id = {
              stringValue: gymDocId
            };

            _this.props.modalAction();

            _this.props.submitGymBooking(postData);
          }
        });
      }
    });

    _this.state = {
      isDateSelected: false,
      selectedDate: null,
      selectedDateTimeSlots: [],
      userSelectedTimeSlot: null
    };
    return _this;
  } // onCalendarChange = (event) => {
  // console.log(event)
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SimpleModal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "modalContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, this.props.type === 'booking' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        "aria-labelledby": "simple-modal-title",
        "aria-describedby": "simple-modal-description",
        open: this.props.modalState,
        onClose: this.props.modalAction,
        className: "modalBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "modalContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, this.props.data && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Schedule with ", this.props.data.fields.name.stringValue), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onCalendarChange,
        tileClassName: "calTile",
        tileDisabled: this.onDisableTile,
        onClickDay: this.onCalendarDateClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), this.state.isDateSelected && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SelectDropDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
        data: this.state.selectedDateTimeSlots,
        type: 'booking:timeslots',
        onSelectedTimeslot: this.onSelectedTimeslot,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }))), this.state.userSelectedTimeSlot && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: this.onHandleBookingSubmit,
        fullWidth: true,
        disabled: !this.state.userSelectedTimeSlot,
        variant: "contained",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Book"))));
    }
  }]);

  return SimpleModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleModal);

/***/ })

})
//# sourceMappingURL=book.js.f56b51fc4db1c25f45bc.hot-update.js.map