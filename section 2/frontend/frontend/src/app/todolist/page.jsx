'use client';
import React, { useState } from 'react'

const TodoList = () => {
    //let count = 0;
    // const [count, setCount] = useState([

    const [taskList, setTaskList] = useState([])
    // { text: 'sabji lao', completed: false },
    // { text: 'doodh lao', completed: false },
    // { text: 'padhai karo', completed: false }



    const addNewTask = (e) => {
        
        if (e.code === 'Enter') {
            if (!e.target.value) {
                alert('please enter a task to add');
                return;

            }
            const newTask = { text: e.target.value, completed: false };
            setTaskList([newTask, ...taskList]);

            e.target.value = '';
        }


    }


    return (
        <div className='bg-gray-300 h-screen pt-10'>
            <div className='container mx-auto rounder-lg bg-white border '>
                {/* <h1 className='text-3xl'>{count}</h1> */}
                {/* <button onClick={() => {setCount(count+1); console.log(count);}}>add count</button> */}

                <div className='p-4 border-b-2'>
                    <input type="text"
                        onKeyDown={addNewTask}
                        placeholder='Enter a Task to add in your todolist'
                        className='px-3 py-2 rounded w-full bg-gray-200  ' />
                </div>
                <div className='p-4'>
                    {
                        taskList.map((task, index) => {
                            return <div key={index} className='rounded mb-4 p-4 border shadow'>
                                <p className='text-xl'>{task.text}</p>

                                <div className='mt-5 flex gap-5'>
                                    <button className='bg-red-500 text-white rounded-full px-3 py-1'>Delete</button>
                                    <button className='bg-blue-500 text-white rounded-full px-3 py-1'>complete</button>
                                </div>

                            </div>
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default TodoList;