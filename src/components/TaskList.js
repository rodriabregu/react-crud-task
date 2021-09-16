import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const TaskList = () => {
    const { tasks } = useContext(GlobalContext)

    return (
        <div className='flex justify-center'>
            <div className='w-6/12'>
            { tasks.map(t => (
                <div className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between' key={t.id}>
                    <div>
                        <h2>{t.title}</h2>
                        <h2>{t.id}</h2>
                    </div>
                    <div>
                        <button>
                            Edit
                        </button>
                        <button>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
