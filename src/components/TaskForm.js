import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useHistory, useParams } from 'react-router-dom'

export const TaskForm = () => {
    const history = useHistory()
    const params = useParams()
    const { tasks, addTask, updateTask } = useContext(GlobalContext)

    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
    })

    const handleChange = e => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(task.id) {
            updateTask(task)
        } else {
            addTask(task)
        }
        history.push('/')
    }

    useEffect(() => {
        const taskFound = tasks.find((task) => task.id === params.id);
        console.log(taskFound)
        if(taskFound) {
            setTask(taskFound)
        }
    }, [params.id, tasks])

    return (
        <div className='flex justify-center items-center h-3/4'>
            <form className='bg-gray-900 p-10' onSubmit={handleSubmit}>
                <h2 className='mb-7 text-3x1'>{task.id ? 'Edit a task' : 'A task'}</h2>
                <div className='mb-5'>
                    <input 
                    value={task.title} 
                    type='text' 
                    name='title' 
                    placeholder='Write a title' 
                    autoComplete="off" 
                    className='py-3 px-4 focus:outline-none focus:text-gray bg-gray-700 w-full' 
                    onChange={handleChange} />
                </div>
                <div className='mb-5'>
                    <textarea value={task.description} name='description' rows='2' placeholder='Write a description' className='py-3 px-4 focus:outline-none focus:text-gray bg-gray-700 w-full' onChange={handleChange}></textarea>
                </div>
                <button className='bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5'>
                    {task.id ? 'Edit' : 'Create task'}
                </button>
            </form>
        </div>
    )
}
