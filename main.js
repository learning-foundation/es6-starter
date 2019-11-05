class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.user = "vserpa";
    this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  showUser() {
    console.log(this.user);
  }

  showArray() {
    const newArr = this.arr.map(function(item, index) {
      return item * index;
    });
    console.log(newArr);
  }

  showArrayReduced() {
    const sum = this.arr.reduce(function(total, next) {
      return total + next;
    });
    console.log(sum);
  }

  showArrayFiltered() {
    const filtered = this.arr.filter(function(item) {
      return item % 2 === 0;
    });
    console.log(filtered);
  }

  showArrayFound() {
    const found = this.arr.find(function(item) {
      return item === 4;
    });
    console.log(found);
  }

  showArrayWithArrowFunction() {
    const newArr = this.arr.map(item => item * 2);
    console.log(newArr);
  }

  static sum(a, b) {
    console.log("static method called");
    const c = a + b;
    return c;
  }

  static sumDefault(a = 0, b = 0) {
    console.log("static method called");
    return a + b;
  }
}

var MyList = new TodoList();

document.getElementById("newtodo").onclick = function() {
  MyList.add("new todo");
  console.log(TodoList.sum(2, 3));
  console.log(TodoList.sumDefault(1));
  MyList.showUser();
  MyList.showArray();
  MyList.showArrayReduced();
  MyList.showArrayFiltered();
  MyList.showArrayFound();
  MyList.showArrayWithArrowFunction();
};
