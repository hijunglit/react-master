import { createGlobalStyle } from 'styled-components';
import ToDoList from "./components/ToDoList.tsx";

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
