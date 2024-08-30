import { PrimaryButton } from "../Button/PrimaryButton"
import { Icon } from "../Icon/Icon"

import styles from "./TimerStyles.module.scss"

export const Timer = () => {
  return (
    <section className={styles.timerContainer}>
      <h2>Select a task and start</h2>
      <span className={styles.timerClock}>00:00:00</span>
      <div className={styles.controlsContainer}>
        <PrimaryButton fullWidth>
          Start
          <Icon name="Play" />
        </PrimaryButton>
        <PrimaryButton fullWidth>
          Pause
          <Icon name="Pause" />
        </PrimaryButton>
        <PrimaryButton fullWidth>
          Reset
          <Icon name="RotateCcw" />
        </PrimaryButton>
      </div>
    </section>
  )
}
