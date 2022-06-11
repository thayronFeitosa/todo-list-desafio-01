import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { useState } from "react";
import ClipboardText from "./assets/Clipboard.svg";

function App() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<number>(0);

  function handleChangeInput(handleChangeInput: any) {
    const newTask = {
      id: Math.random() * (50 - 1 + 1),
      task: handleChangeInput,
      isConcluded: false,
    };

    setTasks([...tasks, newTask]);
    onCompleteTask();
  }

  function onCompleteTask() {
    setTasksCompleted(0);
  }

  return (
    <div className="App">
      <Header />
      <Input handleChangeInput={handleChangeInput} />
      <div className={styles.container}>
        <div className={styles.historyTasks}>
          <div className={styles.createdTasks}>
            <p> Tarefas criadas</p>
            <p className={styles.resultStatusTasks}>{tasks.length}</p>
          </div>

          <div className={styles.concludedTasks}>
            <p> Concluídas</p>
            <p className={styles.resultStatusTasks}>{tasksCompleted}</p>
          </div>
        </div>

        <span className={styles.line}></span>

        {tasks.length === 0 ? (
          <div className={styles.containerTask}>
            <div className={styles.notAlreadyExistsTasks}>
              <img src={ClipboardText} alt="Clipboard" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <div>asdfasdf</div>
        )}
      </div>
    </div>
  );
}

export default App;
