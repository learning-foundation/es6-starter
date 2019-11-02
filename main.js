class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push('new todo');
    console.log(this.todos);
  }
}

const MyList = new TodoList();

document.getElementById('newtodo').onclick = function() {
  MyList.addTodo();
}