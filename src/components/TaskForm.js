import React, { useState } from 'react'

export const TaskForm = () => {
    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const handleChange = e => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(task)
    }

    return (
        <div className='flex justify-center items-center h-3/4'>
            <form className='bg-gray-900 p-10' onSubmit={handleSubmit}>
                <h2 className='mb-7 text-3x1'>A task</h2>
                <div className='mb-5'>
                    <input type='text' name='title' placeholder='Write a title' autoComplete="off" className='py-3 px-4 focus:outline-none focus:text-gray bg-gray-700 w-full' onChange={handleChange} />
                </div>
                <div className='mb-5'>
                    <textarea name='description' rows='2' placeholder='Write a description' className='py-3 px-4 focus:outline-none focus:text-gray bg-gray-700 w-full' onChange={handleChange}></textarea>
                </div>
                <button className='bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5'>
                    Create task
                </button>
            </form>
        </div>
    )
}
