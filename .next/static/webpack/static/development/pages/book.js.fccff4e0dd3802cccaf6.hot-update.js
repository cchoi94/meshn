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
      if (!this.props.onAuthListener()) {
        next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push('/');
      }

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
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3951505156", [this.props.user ? null : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
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
            lineNumber: 46
          },
          __self: this
        });
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
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
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3951505156",
        dynamic: [this.props.user ? null : 'none'],
        __self: this
      }, ".bottomNav{display:".concat(this.props.user ? null : 'none', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL3BhZ2VzL2Jvb2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0QyQixBQUlVLHFDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL3BhZ2VzL2Jvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJvb2tHeW0sIGZldGNoR3ltc1JlcXVlc3QsIHN1Ym1pdEd5bUJvb2tpbmcsIGdldEJvb2tlZFRpbWVzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9neW0tYWN0aW9ucy5qcydcbmltcG9ydCB7YXV0aExpc3RlbmVyfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VzZXItYWN0aW9ucydcbmltcG9ydCBMb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2cnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbidcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jbGFzcyBCb29rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vZGFsT3BlbjogZmFsc2UsXG4gICAgICBzZWxlY3RlZEd5bToge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMub25BdXRoTGlzdGVuZXIoKSkge1xuICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm9uQXV0aExpc3RlbmVyKCkpXG4gICAgdGhpcy5wcm9wcy5vbkZldGNoR3ltc1JlcXVlc3QoKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzTW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5pc01vZGFsT3BlblxuICAgIH0pXG4gICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5Cb29raW5nIFBhZ2U8L3A+XG4gICAgICAgIHt0aGlzLnByb3BzLnVzZXIgP1xuICAgICAgICAgIHRoaXMucHJvcHMuZ3ltcyAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5neW1zLm1hcCgoZ3ltLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMb2cgXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2d5bX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nYm9va2luZydcbiAgICAgICAgICAgICAgICAgICAga2V5PXtneW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsPXt0aGlzLm9wZW5Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgY2hvb3NlR3ltPXt0aGlzLnByb3BzLm9uQm9va0d5bX1cbiAgICAgICAgICAgICAgICAgICAgZ2V0Qm9va2VkVGltZXM9e3RoaXMucHJvcHMub25HZXRCb29rZWRUaW1lc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgOlxuICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5pc01vZGFsT3BlbiAmJiA8TW9kYWwgbW9kYWxTdGF0ZT17dGhpcy5zdGF0ZS5pc01vZGFsT3Blbn0gbW9kYWxBY3Rpb249e3RoaXMub3Blbk1vZGFsfSBkYXRhPXt0aGlzLnByb3BzLmd5bX1cbiAgICAgICAgdXNlcj17dGhpcy5wcm9wcy51c2VyfVxuICAgICAgICBzdWJtaXRHeW1Cb29raW5nPXt0aGlzLnByb3BzLm9uU3VibWl0R3ltQm9va2luZ31cbiAgICAgICAgYm9va2VkVGltZXM9e3RoaXMucHJvcHMuYm9va2VkVGltZXN9IHR5cGU9XCJib29raW5nXCIvPn1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuYm90dG9tTmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5wcm9wcy51c2VyID8gbnVsbCA6ICdub25lJ31cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5jb25zdCBneW1TZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzdGF0ZSA9PiBzdGF0ZS5neW1zLFxuICBneW1zID0+IGd5bXNcbilcblxuY29uc3QgYm9va2VkR3ltU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgc3RhdGUgPT4gc3RhdGUuZ3ltLFxuICBneW0gPT4gZ3ltXG4pXG5cbmNvbnN0IHVzZXJTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzdGF0ZSA9PiBzdGF0ZS51c2VyLFxuICB1c2VyID0+IHVzZXJcbilcblxuY29uc3QgYm9va2VkVGltZXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzdGF0ZSA9PiBzdGF0ZS5ib29rZWRUaW1lcyxcbiAgYm9va2VkVGltZXMgPT4gYm9va2VkVGltZXNcbilcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU2VsZWN0b3IoXG4gIGd5bVNlbGVjdG9yLFxuICBib29rZWRHeW1TZWxlY3RvcixcbiAgdXNlclNlbGVjdG9yLFxuICBib29rZWRUaW1lc1NlbGVjdG9yLFxuICAoZ3ltcywgZ3ltLCB1c2VyLCBib29rZWRUaW1lcykgPT4gKHtcbiAgICBneW1zLFxuICAgIGd5bSxcbiAgICB1c2VyLFxuICAgIGJvb2tlZFRpbWVzXG4gIH0pXG4pO1xuXG5jb25zdCBtYXBBY3Rpb25zVG9Qcm9wcyA9IHtcbiAgb25Cb29rR3ltOiBib29rR3ltLFxuICBvbkZldGNoR3ltc1JlcXVlc3Q6IGZldGNoR3ltc1JlcXVlc3QsXG4gIG9uU3VibWl0R3ltQm9va2luZzogc3VibWl0R3ltQm9va2luZyxcbiAgb25HZXRCb29rZWRUaW1lczogZ2V0Qm9va2VkVGltZXMsXG4gIG9uQXV0aExpc3RlbmVyOiBhdXRoTGlzdGVuZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBBY3Rpb25zVG9Qcm9wcykoQm9vaykpOyJdfQ== */\n/*@ sourceURL=/Users/codychoi/Desktop/meshn/pages/book.js */")));
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
//# sourceMappingURL=book.js.fccff4e0dd3802cccaf6.hot-update.js.map