import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms.tsx";
import CreateToDo from "./CreateToDo.tsx";
import ToDo from "./Todo.tsx";

function ToDoList() {
    const toDos = useRecoilValue(toDoState);
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <ul>
                {toDos.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo}/>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;