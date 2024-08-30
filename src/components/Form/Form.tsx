import { Label } from "./Label";
import { Input } from "./Input";
import { PrimaryButton } from "../Button/PrimaryButton";
import { Icon } from "../Icon/Icon";

import styles from "./FormStyles.module.scss";

export const Form = () => {
  return (
    <form className={styles.formContainer}>
      <Label htmlFor="task" className={styles.formLabel}>
        <span className={styles.textAndIcon}>
          Add your new task <Icon name="BookText" />
        </span>
        <Input
          type="text"
          name="task"
          id="task"
          placeholder="What task do you need to do?"
          required
          className={styles.textTypeInput}
        />
      </Label>

      <Label htmlFor="taskTime" className={styles.formLabel}>
        <span className={styles.textAndIcon}>
          How long will it take? <Icon name="Clock" />
        </span>
        <Input
          type="time"
          name="taskTime"
          id="taskTime"
          step="1"
          min="00:00:00"
          max="08:00:00"
          required
          className={styles.timeTypeInput}
        />
      </Label>

      <PrimaryButton fullWidth>
        Create <Icon name="Plus" />
      </PrimaryButton>
    </form>
  );
};
