const TodoItem = ({
  todo = {
    done: true,
    title: 'Buy milk',
    status: 'COMPLETED'
  }
  }) =>
  {
  return(
        <li key={todo}>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;
