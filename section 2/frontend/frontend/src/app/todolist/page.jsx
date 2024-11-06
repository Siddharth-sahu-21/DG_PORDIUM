'use client';
import React, { useState } from 'react'

const TodoList = () => {
    //let count = 0;
const [count, setCount] = useState(0);


    return (
        <div className='bg-gray-300 h-screen pt-10'>
            <div className='container mx-auto rounder-lg bg-white border '>
                <h1 className='text-3xl'>{count}</h1>
                <button onClick={() => {setCount(count+1); console.log(count);}}>add count</button>
                <div className='p-4 border-b-2'>
                    <input type="text" placeholder='Enter a Task to add in your todolist'
                    className='px-3 py-2 rounded w-full bg-gray-200  ' />
                </div>
                <div>

                </div>

            </div>
        </div>
    )
}

export default TodoList;