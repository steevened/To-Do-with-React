import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import ToDo from './components/ToDo'
import Card from './components/Card'

function App() {
  const tasks = []

  const [allTasks, setAllTasks] = useState(tasks)

  const addTask = (object) => {
    setAllTasks([...allTasks, object])
  }

  const deleteTask = (id) => {
    const filterTasks = allTasks.filter((task) => task.id !== id)

    setAllTasks(filterTasks)
  }
  return (
    <div className='App bg-gradient-to-br from-slate-500 via-slate-700 to-slate-900 h-screen flex items-center justify-center'>
      <Card>
        <div className='flex'>
          <Form addTask={addTask} />
          <ToDo allTasks={allTasks} deleteTask={deleteTask} />
        </div>
      </Card>
    </div>
  )
}

export default App
