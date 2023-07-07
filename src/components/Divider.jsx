import React from 'react'

export default function Divider(props) {
  return (
    <div className="flex flex-col w-full border-opacity-50 my-8.5">
        <div className="divider text-xl font-semibold">{props.text}</div>
    </div>
  )
}
