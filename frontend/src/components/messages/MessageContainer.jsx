import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        <>
        {/* Header */}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className="label-text">To:</span>
            <span className="label-text">John Doe </span>
        </div>

        {/* messages */}
        <Messages/>


        {/* message input */}
        <MessageInput/>

        
        </>
    </div>
  )
}

export default MessageContainer