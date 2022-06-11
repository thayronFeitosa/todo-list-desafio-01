import { PlusCircle } from "phosphor-react";
import styles from './Input.module.css';

interface IInputrops {
    placeholder?: string;
}

const defaultValueLabel = "Adicione uma nova tarefa";

export function Input({ placeholder = defaultValueLabel }: IInputrops) {
  return (
    <div className={styles.container} >
      <input type="text" placeholder={placeholder} />
      <button>Criar <PlusCircle size={22}/></button>
    </div>
  );
}
