import React from 'react'

const ToDo = ({ allTasks, deleteTask, select }) => {
  return (
    <div className='text-zinc-100 text-left p-8 w-full flex items-center justify-center '>
      {/* <h1 className='text-3xl'>To Do</h1> */}
      <ul className='grid md:grid-cols-2  p-1 w-full h-full gap-10 overflow-y-auto '>
        {allTasks.map((task) => (
          <li
            key={task.id}
            className='h-60 bg-gray-500 rounded-sm py-4 px-6 transition-all duration-1000 relative'
          >
            <h2 className='text-2xl py-2 border-b-[1px]'>{task.title}</h2>
            <div className='mt-4'>
              <div className='h-24 overflow-auto'>
                <p>{task.description}</p>
              </div>
              {task.isCompleted ? (
                <p className='absolute bottom-4 text-2xl text-green-500 left-4'>
                  <i className='fa-regular fa-circle-check'></i>
                </p>
              ) : (
                <p className='absolute bottom-4 text-2xl  left-4'>
                  <i className='text-red-500 fa-regular fa-circle-check'></i>
                </p>
              )}
            </div>
            <button
              className='text-gray-700 font-bold text-2xl absolute right-4 bottom-4'
              onClick={() => deleteTask(task.id)}
            >
              <i className='fa-solid fa-ban'></i>
            </button>
            <button
              className='absolute  bottom-4 left-1/2 text-2xl text-amber-600'
              onClick={() => select(task)}
            >
              <i className='fa-regular fa-pen-to-square'></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo
