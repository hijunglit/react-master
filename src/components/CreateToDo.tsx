import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((odlToDos) => [
            { text: toDo, id: Date.now(), category },
            ...odlToDos,
        ]);
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {
                ...register("toDo", {
                    required: "Please write a To Do",
                })}
                placeholder='write a to do'
            />
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;