import { Task } from "../../interfaces/Task";

interface TasksListItemProps extends Task {
  className: string;
}

export const TasksListItem = ({ className, ...taskProps }: TasksListItemProps) => {
  return (
    <li key={taskProps.id} className={className}>
      <h4>{taskProps.title}</h4>
      <span>{taskProps.time}</span>
    </li>
  );
};
