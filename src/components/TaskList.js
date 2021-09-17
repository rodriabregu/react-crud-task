import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom'

export const TaskList = () => {
    const { tasks, deleteTask, toggleTask } = useContext(GlobalContext)

    return (
        <div className='flex justify-center'>
            {/* <button onClick={() => deleteTask()}>
                Delete all
            </button> */}
            <div className='w-6/12'>
            { tasks?.map(t => (
                <div className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between' key={t.id}>
                    <div>
                        <h2>{t.title}</h2>
                        <h6>{t.id}</h6>
                        <p>{t.description}</p>
                        <button className='bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2' onClick={() => toggleTask(t.id)}>
                            {t.done ? 'Undone' : 'Done'}
                        </button>
                    </div>
                    <div>
                        <Link to={`/edit/${t.id}`} className='bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2'>
                        Edit
                        </Link>
                        <button onClick={() => deleteTask(t.id)} className='bg-red-600 hover:bg-red-500 py-2 px-4 mr-2'>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
