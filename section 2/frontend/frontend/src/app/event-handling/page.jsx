'use client'
import React from 'react'

const EventHandling = () => {
    return (
        <div>
            <div className='container mx-auto my-5'>
                <h1 className='mt-4 font-bold text-3xl text-center'>Event Handling</h1>

                <button
                    onClick={() => { alert('button was clicked') }}
                    className='p-3 bg-blue-200 border'>Click Event</button>
                <input
                    onChange={(e) => { console.log(e.target.value); }}
                    className='mt-5 border p-3 w-full'
                    type="color" />

            </div>
        </div>
    )
}

export default EventHandling;
