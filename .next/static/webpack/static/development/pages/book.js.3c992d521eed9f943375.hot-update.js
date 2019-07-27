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
      if (!this.props.user) {
        next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push('/');
      }

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
      }, ".bottomNav{display:".concat(this.props.user ? null : 'none', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL3BhZ2VzL2Jvb2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0QyQixBQUlVLHFDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL3BhZ2VzL2Jvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJvb2tHeW0sIGZldGNoR3ltc1JlcXVlc3QsIHN1Ym1pdEd5bUJvb2tpbmcsIGdldEJvb2tlZFRpbWVzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9neW0tYWN0aW9ucy5qcydcbmltcG9ydCB7YXV0aExpc3RlbmVyfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VzZXItYWN0aW9ucydcbmltcG9ydCBMb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2cnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbidcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jbGFzcyBCb29rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vZGFsT3BlbjogZmFsc2UsXG4gICAgICBzZWxlY3RlZEd5bToge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudXNlcikge1xuICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25GZXRjaEd5bXNSZXF1ZXN0KCk7XG4gIH1cblxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc01vZGFsT3BlbjogIXRoaXMuc3RhdGUuaXNNb2RhbE9wZW5cbiAgICB9KVxuICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+Qm9va2luZyBQYWdlPC9wPlxuICAgICAgICB7dGhpcy5wcm9wcy51c2VyID9cbiAgICAgICAgICB0aGlzLnByb3BzLmd5bXMgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ3ltcy5tYXAoKGd5bSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TG9nIFxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtneW19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2Jvb2tpbmcnXG4gICAgICAgICAgICAgICAgICAgIGtleT17Z3ltLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbD17dGhpcy5vcGVuTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIGNob29zZUd5bT17dGhpcy5wcm9wcy5vbkJvb2tHeW19XG4gICAgICAgICAgICAgICAgICAgIGdldEJvb2tlZFRpbWVzPXt0aGlzLnByb3BzLm9uR2V0Qm9va2VkVGltZXN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIDpcbiAgICAgICAgPExvZ2luIC8+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUuaXNNb2RhbE9wZW4gJiYgPE1vZGFsIG1vZGFsU3RhdGU9e3RoaXMuc3RhdGUuaXNNb2RhbE9wZW59IG1vZGFsQWN0aW9uPXt0aGlzLm9wZW5Nb2RhbH0gZGF0YT17dGhpcy5wcm9wcy5neW19XG4gICAgICAgIHVzZXI9e3RoaXMucHJvcHMudXNlcn1cbiAgICAgICAgc3VibWl0R3ltQm9va2luZz17dGhpcy5wcm9wcy5vblN1Ym1pdEd5bUJvb2tpbmd9XG4gICAgICAgIGJvb2tlZFRpbWVzPXt0aGlzLnByb3BzLmJvb2tlZFRpbWVzfSB0eXBlPVwiYm9va2luZ1wiLz59XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLmJvdHRvbU5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMucHJvcHMudXNlciA/IG51bGwgOiAnbm9uZSd9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuY29uc3QgZ3ltU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgc3RhdGUgPT4gc3RhdGUuZ3ltcyxcbiAgZ3ltcyA9PiBneW1zXG4pXG5cbmNvbnN0IGJvb2tlZEd5bVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHN0YXRlID0+IHN0YXRlLmd5bSxcbiAgZ3ltID0+IGd5bVxuKVxuXG5jb25zdCB1c2VyU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgc3RhdGUgPT4gc3RhdGUudXNlcixcbiAgdXNlciA9PiB1c2VyXG4pXG5cbmNvbnN0IGJvb2tlZFRpbWVzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgc3RhdGUgPT4gc3RhdGUuYm9va2VkVGltZXMsXG4gIGJvb2tlZFRpbWVzID0+IGJvb2tlZFRpbWVzXG4pXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBneW1TZWxlY3RvcixcbiAgYm9va2VkR3ltU2VsZWN0b3IsXG4gIHVzZXJTZWxlY3RvcixcbiAgYm9va2VkVGltZXNTZWxlY3RvcixcbiAgKGd5bXMsIGd5bSwgdXNlciwgYm9va2VkVGltZXMpID0+ICh7XG4gICAgZ3ltcyxcbiAgICBneW0sXG4gICAgdXNlcixcbiAgICBib29rZWRUaW1lc1xuICB9KVxuKTtcblxuY29uc3QgbWFwQWN0aW9uc1RvUHJvcHMgPSB7XG4gIG9uQm9va0d5bTogYm9va0d5bSxcbiAgb25GZXRjaEd5bXNSZXF1ZXN0OiBmZXRjaEd5bXNSZXF1ZXN0LFxuICBvblN1Ym1pdEd5bUJvb2tpbmc6IHN1Ym1pdEd5bUJvb2tpbmcsXG4gIG9uR2V0Qm9va2VkVGltZXM6IGdldEJvb2tlZFRpbWVzLFxuICBvbkF1dGhMaXN0ZW5lcjogYXV0aExpc3RlbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwQWN0aW9uc1RvUHJvcHMpKEJvb2spKTsiXX0= */\n/*@ sourceURL=/Users/codychoi/Desktop/meshn/pages/book.js */")));
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
//# sourceMappingURL=book.js.3c992d521eed9f943375.hot-update.js.map