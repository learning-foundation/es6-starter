"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.user = "vserpa";
    _this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    _this.admin = {
      name: "Vinicius",
      age: "29",
      address: {
        city: "Campinas",
        state: "SP"
      }
    };
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUser",
    value: function showUser() {
      console.log(this.user);
    }
  }, {
    key: "showAdmin",
    value: function showAdmin() {
      var _this$admin = this.admin,
          name = _this$admin.name,
          age = _this$admin.age,
          city = _this$admin.address.city;
      console.log(name, age, city);
    }
  }, {
    key: "showArray",
    value: function showArray() {
      var newArr = this.arr.map(function (item, index) {
        return item * index;
      });
      console.log(newArr);
    }
  }, {
    key: "showArrayReduced",
    value: function showArrayReduced() {
      var sum = this.arr.reduce(function (total, next) {
        return total + next;
      });
      console.log(sum);
    }
  }, {
    key: "showArrayFiltered",
    value: function showArrayFiltered() {
      var filtered = this.arr.filter(function (item) {
        return item % 2 === 0;
      });
      console.log(filtered);
    }
  }, {
    key: "showArrayFound",
    value: function showArrayFound() {
      var found = this.arr.find(function (item) {
        return item === 4;
      });
      console.log(found);
    }
  }, {
    key: "showArrayWithArrowFunction",
    value: function showArrayWithArrowFunction() {
      var newArr = this.arr.map(function (item) {
        return item * 2;
      });
      console.log(newArr);
    }
  }], [{
    key: "sum",
    value: function sum(a, b) {
      console.log("static method called");
      var c = a + b;
      return c;
    }
  }, {
    key: "sumDefault",
    value: function sumDefault() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      console.log("static method called");
      return a + b;
    }
  }]);

  return TodoList;
}(List);

var MyList = new TodoList();

document.getElementById("newtodo").onclick = function () {
  MyList.add("new todo");
  console.log(TodoList.sum(2, 3));
  console.log(TodoList.sumDefault(1));
  MyList.showUser();
  MyList.showAdmin();
  MyList.showArray();
  MyList.showArrayReduced();
  MyList.showArrayFiltered();
  MyList.showArrayFound();
  MyList.showArrayWithArrowFunction();
};
