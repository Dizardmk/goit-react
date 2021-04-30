import React, { Component } from 'react';
import shortid from 'shortid';
import TodoEditor from './TodoEditor';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

// быстро создать класс - emmet 'cc'
class Todo extends Component {
  state = {
    todos: [],
    filter: '',
  };

  /////////////////////////////////////////////////////
  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }
  componentWillUnmount() {}
  /////////////////////////////////////////////////////

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    // this.setState(prevState => ({
    //   todos: [todo, ...prevState.todos],
    // }));
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  getCompletedTodo = () => {
    const { todos } = this.state;
    // посчитать количество выполненых todo (вычисляемые значения)
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };
  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    // фильтруем todos
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const completedTodo = this.getCompletedTodo();
    const filteretTodos = this.getFilteredTodos();

    return (
      <>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoFilter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={filteretTodos}
          onDeleteTodo={this.deleteTodo}
          completedTodo={completedTodo}
        />
      </>
    );
  }
}

export default Todo;
