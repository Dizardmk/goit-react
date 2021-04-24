import React, { Component } from 'react';
import TodoList from './components/TodoList';

// быстро создать класс - emmet 'cc'
class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo1', completed: false },
      { id: 'id-2', text: 'Todo2', completed: true },
      { id: 'id-3', text: 'Todo3', completed: false },
      { id: 'id-4', text: 'Todo4', completed: true },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    // посчитать количество выполненых todo (вычисляемые значения)
    const completedTodo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          completedTodo={completedTodo}
        />
      </>
    );
  }
}

export default App;
