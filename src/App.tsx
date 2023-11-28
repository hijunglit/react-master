import { createGlobalStyle } from 'styled-components';
import ToDoList from "./ToDoList.tsx";

const GlobalStyle = createGlobalStyle ``;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
