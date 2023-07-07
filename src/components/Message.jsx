import React from 'react'

export default function Message() {
  return (
    <>
        <h3>Send the owner a message:</h3>
        <div>
            <textarea className="textarea textarea-bordered textarea-md w-full max-w-xs" placeholder="Your message here..."></textarea>
        </div>
        <div className='m-2 text-center'>
            <button className="btn drop-shadow-lg text-zinc-600 bg-amber-200">Send</button>
        </div>
    </>
  )
}
