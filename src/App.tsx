import { useState } from "react"

import { Task } from "./interfaces/Task"

import styles from "./styles/App.module.css"

import { Form } from "./components/Form/Form"
import { TasksList } from "./components/TasksList/TasksList"
import { Timer } from "./components/Timer/Timer"

export const App = () => {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'React.js',
      time: '02:00:00'
    },
    {
      id: 2,
      title: 'Typescript',
      time: '01:00:00'
    }
  ])

  return (
    <main className={styles.mainContainer}>
      <Form />

      <TasksList 
        tasks={tasks}
        setTasks={setTasks}
      />

      <Timer />
    </main>
  )
}
