import React, { Component } from 'react';
import shortid from 'shortid';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoList/TodoEditor';
import TodoFilter from './components/TodoList/TodoFilter';

// быстро создать класс - emmet 'cc'
class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo1', completed: false },
      { id: 'id-2', text: 'Todo2', completed: true },
      { id: 'id-3', text: 'Todo3', completed: false },
      { id: 'id-4', text: 'Todo4', completed: true },
    ],
    filter: '',
  };

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

export default App;
