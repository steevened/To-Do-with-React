import React, { useEffect, useState } from 'react'
import ToDo from './ToDo'

const Form = ({ addTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

  const [date, setDate] = useState(null)
  const [hour, setHour] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date())
      setHour(date?.getHours().toLocaleString())
      setMinutes(date?.getMinutes().toLocaleString())
      setSeconds(date?.getSeconds().toLocaleString())
    }, 1000)
  })

  const submit = (e) => {
    e.preventDefault()
    const info = {
      id: Date.now(),
      title,
      description,
      isCompleted,
    }

    addTask(info)
    setTitle('')
    setDescription('')
  }

  return (
    <div className='py-4 px-5 w-80 border-r-[1px] border-gray-600 top-0 bottom-0 absolute bg-gray-900/25 text-neutral-200'>
      <div className='flex flex-col gap-2 mb-4'>
        <h1 className=' text-center  text-4xl'>To Do App</h1>
        <h2 className='text-center text-lg'>{`${hour < 10 ? 0 + hour : hour}:${
          minutes < 10 ? 0 + minutes : minutes
        }:${seconds < 10 ? 0 + seconds : seconds}`}</h2>
      </div>

      <form onSubmit={submit}>
        <div className='flex flex-col gap-y-5'>
          <div className='w-full'>
            <input
              className='w-full bg-gray-800 rounded-sm focus:bg-gray-700 focus:outline-none border-[1px] border-gray-600 py-2 px-4'
              placeholder='Task Title'
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='w-full'>
            <textarea
              className='w-full bg-gray-800 rounded-sm focus:bg-gray-700  border-[1px] border-gray-600 py-2 px-4 focus:outline-none focus-border-none'
              id='description'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols='10'
              rows='3'
            ></textarea>
          </div>
        </div>

        <div className=' flex justify-between mt-4 items-center'>
          <input
            type='checkbox'
            className='form-check-input bg-gray-300 checked:bg-sky-500 focus:outline-none active:animate-ping active:outline-none w-5 h-5 active:border-none focus:border-none border-none outline-none appearance-none rounded-full text-sky-200'
            id='isCompleted'
            value={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <button className='text-sky-100 font-medium bg-sky-500 hover:bg-sky-700 transition-colors px-4 py-1 rounded-md shadow-lg shadow-gray-900 hover:text-white'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form