import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { useState } from "react";
import ClipboardText from "./assets/Clipboard.svg";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<number>(0);
  const [tasksCreated, setTasksCreated] = useState<number>(0);

  function handleChangeInput(handleChangeInput: any) {
    const newTask = {
      id: Math.random() * (50 - 1 + 1),
      task: handleChangeInput,
      isConcluded: false,
    };

    setTasks([...tasks, newTask]);
    setTasksCreated(tasksCreated + 1);
  }

  function onCompleteTask(id: number) {
    const statusTasks = tasks.map((item) =>
      item.id === id ? { ...item, isConcluded: !item.isConcluded } : item
    );

    setTasks(statusTasks);
    setTasksCompleted(tasksCompleted + 1);
  }

  function onDestroyTask(id: number) {
    const filter = tasks.filter((task) => task.id !== id);
    setTasks(filter);
  }

  return (
    <div className="App">
      <Header />
      <Input handleChangeInput={handleChangeInput} />
      <div className={styles.container}>
        <div className={styles.historyTasks}>
          <div className={styles.createdTasks}>
            <p> Tarefas criadas</p>
            <p className={styles.resultStatusTasks}>{tasksCreated}</p>
          </div>

          <div className={styles.concludedTasks}>
            <p> Concluídas</p>
            <p className={styles.resultStatusTasks}>{tasksCompleted}</p>
          </div>
        </div>

        {tasks.length === 0 ? (
          <>
            <span className={styles.line}></span>
            <div className={styles.containerTask}>
              <div className={styles.notAlreadyExistsTasks}>
                <img src={ClipboardText} alt="Clipboard" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {tasks.map((task) => {
              return (
                <Task
                  task={task.task}
                  id={task.id}
                  key={task.id}
                  isComplete={task.isConcluded}
                  onCompleteTask={onCompleteTask}
                  onDestroyTask={onDestroyTask}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
