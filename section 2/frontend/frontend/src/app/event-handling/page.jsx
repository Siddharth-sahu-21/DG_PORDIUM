'use client'
import Image from 'next/image';
import React from 'react'

const EventHandling = () => {
   const previewImage = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (data) => {
        const img = new Image();
        img.scr = data.target.result;
        document.body.appendchild(img);
    }
    reader.readAsDataURL(file);
   }
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

                    <input type="file" onChange={previewImage}/>

            </div>
        </div>
    )
}

export default EventHandling;
