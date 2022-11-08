import React from 'react'

const ToDo = ({ allTasks, deleteTask }) => {
  return (
    <div className='text-zinc-100 text-left'>
      {/* <h1 className='text-3xl'>To Do</h1> */}
      <ul>
        {allTasks.map((task) => (
          <li key={task.id}>
            <h2 className='text-2xl'>{task.title}</h2>
            <div>
              <p>Description: {task.description}</p>
              <p>Completed: {task.isCompleted.toString()}</p>
            </div>
            <button
              className='text-slate-100 font-bold bg-red-500 px-4 py-1 rounded-full'
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo
