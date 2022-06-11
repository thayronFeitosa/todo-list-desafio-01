import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./Input.module.css";

interface IInputrops {
  placeholder?: string;
  handleChangeInput: (valor:any) => void;
}

const defaultValueLabel = "Adicione uma nova tarefa";

export function Input({ placeholder = defaultValueLabel, handleChangeInput }: IInputrops) {
  const [valueInput, setValueInput] = useState('');

  function handleChangeInputFunction(event: ChangeEvent<HTMLInputElement>) {
    setValueInput(event.target.value);
  }

  function onSubmit() {
    handleChangeInput(valueInput);
  }

  return (
    <>
      <div className={styles.container}>
        <input type="text" placeholder={placeholder} onChange={handleChangeInputFunction} />
        <button onClick={onSubmit}>
          Criar <PlusCircle size={22} />
        </button>
      </div>
    </>
  );
}
