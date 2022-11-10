import { useEffect, useState } from 'react'
import Form from './components/Form'
import './App.css'
import ToDo from './components/ToDo'
import Card from './components/Card'
import axios from 'axios'

function App() {
  const tasks = []

  const [allTasks, setAllTasks] = useState(tasks)
  const [taskSelected, setTaskSelected] = useState(null)

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = () => {
    axios
      .get('http://todos-crud.academlo.tech/todos/')
      .then((res) => setAllTasks(res.data))
  }

  const addTask = (object) => {
    axios
      .post('http://todos-crud.academlo.tech/todos/', object)
      .then(() => getTasks())
  }

  const deleteTask = (id) => {
    axios
      .delete(`http://todos-crud.academlo.tech/todos/${id}/`)
      .then(() => getTasks())
  }

  const select = (task) => {
    setTaskSelected(task)
  }

  const update = (task) => {
    axios
      .put(`http://todos-crud.academlo.tech/todos/${taskSelected.id}/`, task)
      .then(() => getTasks())
      .catch((error) => console.log(error.response.data))
    setTaskSelected(null)
  }

  const upper = (str) => {
    return str.replace(str[0], str[0].toUpperCase())
  }

  return (
    <div className='App bg-gradient-to-br from-slate-500 via-slate-700 to-slate-900 h-screen flex items-center justify-center'>
      <Card>
        <div className='flex flex-col md:flex-row w-full h-full relative'>
          <Form
            addTask={addTask}
            selected={select}
            taskSelected={taskSelected}
            update={update}
            upper={upper}
          />
          <ToDo allTasks={allTasks} deleteTask={deleteTask} select={select} />
        </div>
      </Card>
    </div>
  )
}

export default App
