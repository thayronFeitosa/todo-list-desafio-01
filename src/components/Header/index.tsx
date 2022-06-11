import styles from "./Header.module.css";
import rocket from "../../assets/rocket.svg";

export function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.todo}>
        <img src={rocket} alt="rocket" /> <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </h1>
    </div>
  );
}
