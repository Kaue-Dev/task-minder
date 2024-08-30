import { Task } from "../../interfaces/Task"
import { TasksListItem } from "./TasksListItem";
import styles from "./TasksListStyles.module.scss"

interface TasksListProps {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}

export const TasksList = ({ tasks, setTasks }: TasksListProps) => {
  return (
    <section className={styles.tasksListContainer}>
      <h2>Tasks to be completed</h2>
      <ul className={styles.tasksList}>
        {tasks.map((task) => (
          <TasksListItem {...task} className={styles.tasksListItem} />
        ))}
      </ul>
    </section>
  );
};
