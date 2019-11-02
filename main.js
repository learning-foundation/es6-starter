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
    this.user = 'vserpa';
  }

  showUser() {
    console.log(this.user);
  }

  static sum(a, b) {    
    console.log('static method called');
    const c = a + b;
    return c;
  }
}

var MyList = new TodoList();

document.getElementById('newtodo').onclick = function() {
  MyList.add('new todo');
  console.log(TodoList.sum(5, 18));
  MyList.showUser();
}