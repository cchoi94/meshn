webpackHotUpdate("static/development/pages/book.js",{

/***/ "./pages/book.js":
/*!***********************!*\
  !*** ./pages/book.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_gym_actions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/gym-actions.js */ "./redux/actions/gym-actions.js");
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/user-actions */ "./redux/actions/user-actions.js");
/* harmony import */ var _components_Log__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Log */ "./components/Log.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "/Users/codychoi/Desktop/meshn/pages/book.js";












var Book =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Book, _React$Component);

  function Book(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Book);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Book).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openModal", function () {
      _this.setState({
        isModalOpen: !_this.state.isModalOpen
      });
    });

    _this.state = {
      isModalOpen: false,
      selectedGym: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Book, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // if (!this.props.onAuthListener()) {
      //   Router.push('/')
      // }
      console.log(this.props.onAuthListener());
      this.props.onFetchGymsRequest();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3951505156", [this.props.user ? null : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3951505156", [this.props.user ? null : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Booking Page"), this.props.user ? this.props.gyms && this.props.gyms.map(function (gym, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Log__WEBPACK_IMPORTED_MODULE_14__["default"], {
          data: gym,
          type: "booking",
          key: gym.name,
          openModal: _this2.openModal,
          chooseGym: _this2.props.onBookGym,
          getBookedTimes: _this2.props.onGetBookedTimes,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), this.state.isModalOpen && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
        modalState: this.state.isModalOpen,
        modalAction: this.openModal,
        data: this.props.gym,
        user: this.props.user,
        submitGymBooking: this.props.onSubmitGymBooking,
        bookedTimes: this.props.bookedTimes,
        type: "booking",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3951505156",
        dynamic: [this.props.user ? null : 'none'],
        __self: this
      }, ".bottomNav{display:".concat(this.props.user ? null : 'none', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL3BhZ2VzL2Jvb2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0UyQixBQUlVLHFDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL3BhZ2VzL2Jvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJvb2tHeW0sIGZldGNoR3ltc1JlcXVlc3QsIHN1Ym1pdEd5bUJvb2tpbmcsIGdldEJvb2tlZFRpbWVzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9neW0tYWN0aW9ucy5qcydcbmltcG9ydCB7YXV0aExpc3RlbmVyfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VzZXItYWN0aW9ucydcbmltcG9ydCBMb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2cnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbidcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jbGFzcyBCb29rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vZGFsT3BlbjogZmFsc2UsXG4gICAgICBzZWxlY3RlZEd5bToge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBpZiAoIXRoaXMucHJvcHMub25BdXRoTGlzdGVuZXIoKSkge1xuICAgIC8vICAgUm91dGVyLnB1c2goJy8nKVxuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm9uQXV0aExpc3RlbmVyKCkpXG5cbiAgICB0aGlzLnByb3BzLm9uRmV0Y2hHeW1zUmVxdWVzdCgpO1xuICB9XG5cbiAgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNNb2RhbE9wZW46ICF0aGlzLnN0YXRlLmlzTW9kYWxPcGVuXG4gICAgfSlcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkJvb2tpbmcgUGFnZTwvcD5cbiAgICAgICAge3RoaXMucHJvcHMudXNlciA/XG4gICAgICAgICAgdGhpcy5wcm9wcy5neW1zICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmd5bXMubWFwKChneW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExvZyBcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Z3ltfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdib29raW5nJ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2d5bS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWw9e3RoaXMub3Blbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBjaG9vc2VHeW09e3RoaXMucHJvcHMub25Cb29rR3ltfVxuICAgICAgICAgICAgICAgICAgICBnZXRCb29rZWRUaW1lcz17dGhpcy5wcm9wcy5vbkdldEJvb2tlZFRpbWVzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICA6XG4gICAgICAgIDxMb2dpbiAvPlxuICAgICAgICB9XG4gICAgICAgIHt0aGlzLnN0YXRlLmlzTW9kYWxPcGVuICYmIDxNb2RhbCBtb2RhbFN0YXRlPXt0aGlzLnN0YXRlLmlzTW9kYWxPcGVufSBtb2RhbEFjdGlvbj17dGhpcy5vcGVuTW9kYWx9IGRhdGE9e3RoaXMucHJvcHMuZ3ltfVxuICAgICAgICB1c2VyPXt0aGlzLnByb3BzLnVzZXJ9XG4gICAgICAgIHN1Ym1pdEd5bUJvb2tpbmc9e3RoaXMucHJvcHMub25TdWJtaXRHeW1Cb29raW5nfVxuICAgICAgICBib29rZWRUaW1lcz17dGhpcy5wcm9wcy5ib29rZWRUaW1lc30gdHlwZT1cImJvb2tpbmdcIi8+fVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5ib3R0b21OYXYge1xuICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnByb3BzLnVzZXIgPyBudWxsIDogJ25vbmUnfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmNvbnN0IGd5bVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHN0YXRlID0+IHN0YXRlLmd5bXMsXG4gIGd5bXMgPT4gZ3ltc1xuKVxuXG5jb25zdCBib29rZWRHeW1TZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzdGF0ZSA9PiBzdGF0ZS5neW0sXG4gIGd5bSA9PiBneW1cbilcblxuY29uc3QgdXNlclNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHN0YXRlID0+IHN0YXRlLnVzZXIsXG4gIHVzZXIgPT4gdXNlclxuKVxuXG5jb25zdCBib29rZWRUaW1lc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHN0YXRlID0+IHN0YXRlLmJvb2tlZFRpbWVzLFxuICBib29rZWRUaW1lcyA9PiBib29rZWRUaW1lc1xuKVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgZ3ltU2VsZWN0b3IsXG4gIGJvb2tlZEd5bVNlbGVjdG9yLFxuICB1c2VyU2VsZWN0b3IsXG4gIGJvb2tlZFRpbWVzU2VsZWN0b3IsXG4gIChneW1zLCBneW0sIHVzZXIsIGJvb2tlZFRpbWVzKSA9PiAoe1xuICAgIGd5bXMsXG4gICAgZ3ltLFxuICAgIHVzZXIsXG4gICAgYm9va2VkVGltZXNcbiAgfSlcbik7XG5cbmNvbnN0IG1hcEFjdGlvbnNUb1Byb3BzID0ge1xuICBvbkJvb2tHeW06IGJvb2tHeW0sXG4gIG9uRmV0Y2hHeW1zUmVxdWVzdDogZmV0Y2hHeW1zUmVxdWVzdCxcbiAgb25TdWJtaXRHeW1Cb29raW5nOiBzdWJtaXRHeW1Cb29raW5nLFxuICBvbkdldEJvb2tlZFRpbWVzOiBnZXRCb29rZWRUaW1lcyxcbiAgb25BdXRoTGlzdGVuZXI6IGF1dGhMaXN0ZW5lclxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShCb29rKSk7Il19 */\n/*@ sourceURL=/Users/codychoi/Desktop/meshn/pages/book.js */")));
    }
  }]);

  return Book;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var gymSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_10__["createSelector"])(function (state) {
  return state.gyms;
}, function (gyms) {
  return gyms;
});
var bookedGymSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_10__["createSelector"])(function (state) {
  return state.gym;
}, function (gym) {
  return gym;
});
var userSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_10__["createSelector"])(function (state) {
  return state.user;
}, function (user) {
  return user;
});
var bookedTimesSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_10__["createSelector"])(function (state) {
  return state.bookedTimes;
}, function (bookedTimes) {
  return bookedTimes;
});
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_10__["createSelector"])(gymSelector, bookedGymSelector, userSelector, bookedTimesSelector, function (gyms, gym, user, bookedTimes) {
  return {
    gyms: gyms,
    gym: gym,
    user: user,
    bookedTimes: bookedTimes
  };
});
var mapActionsToProps = {
  onBookGym: _redux_actions_gym_actions_js__WEBPACK_IMPORTED_MODULE_12__["bookGym"],
  onFetchGymsRequest: _redux_actions_gym_actions_js__WEBPACK_IMPORTED_MODULE_12__["fetchGymsRequest"],
  onSubmitGymBooking: _redux_actions_gym_actions_js__WEBPACK_IMPORTED_MODULE_12__["submitGymBooking"],
  onGetBookedTimes: _redux_actions_gym_actions_js__WEBPACK_IMPORTED_MODULE_12__["getBookedTimes"],
  onAuthListener: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_13__["authListener"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapActionsToProps)(Book)));

/***/ })

})
//# sourceMappingURL=book.js.d41595f3f7ed2daa7826.hot-update.js.map