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
}

var MyList = new TodoList();

document.getElementById('newtodo').onclick = function() {
  MyList.add('new todo 2');
  MyList.showUser();
}