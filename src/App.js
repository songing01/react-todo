import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  const [todoList, setTodoList] = useState(() => {
    const localTodoList = localStorage.getItem("localTodoList");
    return localTodoList ? JSON.parse(localTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem("localTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <img
          src={
            "http://tong.visitkorea.or.kr/cms/resource/30/2488130_image2_1.jpg"
          }
          alt=""
        />
        <TodoHead />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <TodoCreate todoList={todoList} setTodoList={setTodoList} />
      </TodoTemplate>
    </>
  );
}

export default App;
