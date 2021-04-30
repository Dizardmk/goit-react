import styles from './Todo.module.css';

const TodoList = ({ todos, onDeleteTodo, completedTodo }) => (
  <ul className={styles.todoList}>
    {todos.map(({ id, text, completed }) => (
      <li className={styles.item} key={id}>
        <p className={styles.text}>
          <span>{completed ? '+' : '-'}</span>
          {text}
        </p>
        <button className={styles.button} onClick={() => onDeleteTodo(id)}>
          Удалить
        </button>
      </li>
    ))}
    <p>Общее количество todo: {todos.length}</p>
    <p>Всего выполненых todo: {completedTodo}</p>
  </ul>
);

export default TodoList;
