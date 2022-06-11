import { Check, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface ITaskProps {
  task: string;
  id: number;
  isComplete?: boolean;
  onCompleteTask: (id: number) => void;
  onDestroyTask: (id: number) => void;
}

export function Task({
  task,
  isComplete = false,
  onCompleteTask,
  id,
  onDestroyTask,
}: ITaskProps) {
  function handleCompleteTask() {
    onCompleteTask(id);
  }

  function handleDeleteTask() {
    onDestroyTask(id);
  }

  return (
    <div className={styles.container}>
      <div>
        <button
          className={!isComplete ? styles.circle : styles.isComplete}
          onClick={!isComplete ? handleCompleteTask : () => {}}
        >
          {!isComplete ? <Circle /> : <Check />}
        </button>
      </div>
      <p className={isComplete ? styles.concludedTasks : styles.taskParagraph}>{task}</p>

      <button className={styles.trash} onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
