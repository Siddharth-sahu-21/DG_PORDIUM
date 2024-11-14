import React from 'react'

const ChatingPage = () => { 

    // const [chatList, setTaskList] = useState([])
    
    // const addNewChat = (e) => {
        
    //     if (e.code === 'Enter') {
    //         if (!e.target.value) {
    //             alert('please enter a task to add');
    //             return;

    //         }
    //         const newChat = { text: e.target.value, completed: false };
    //         setTaskList([newChat, ...chatList]);

    //         e.target.value = '';
    //     }


    // }
  return (
    <div className='h-screen pt-10 bg-gray-300'>
    <div className='container bg-white'>
        <div className='w-full bg-gray-300 h-[70vh] '>
          <h1 className='text-bold text-xl'>hello</h1>
            
        </div>
        <div className='w-full bg-white' >start your chat</div>
    </div>
    </div>
  )
}

export default ChatingPage;