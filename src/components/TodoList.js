import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <TodoListBlock>
      {todoList.map((item) => {
        return (
          <TodoItem
            text={item.text}
            key={item.id}
            todoList={todoList}
            setTodoList={setTodoList}
            id={item.id}
            done={item.done}
          />
        );
      })}
    </TodoListBlock>
  );
};

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
export default TodoList;
