import React from 'react'
import Message from './Message.jsx'

export default function VehicleInfo(props) {
  return (
    <div className='text-xl pt-1'>
        <div>
            <img className='border-2 rounded-md border-slate-300 w-5/6' src={props.vData.carImg} alt='The described vehicle for rent' />
        </div>

        <div className='w-1/3 border-2 border-slate-300 rounded-md px-3 pb-1.5'>
            <div className='flex justify-between'>
                <div>
                    <p>{props.vData.reviewNum} reviews</p>
                </div>
                <div>
                    <p className='inline-block align-top pr-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    </p>
                    <p className='inline-block font-semibold'>
                        {props.vData.starNum}
                    </p> 
                </div>
            </div>

            <div className='flex justify-between'>
                <div>
                    <p className='inline-block font-semibold'>${props.vData.price}/hr</p>
                </div>
                <div>
                    <p className='inline-block align-top pr-1 text-right'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                    </p>
                    <p className='inline-block font-semibold align-top'>{props.vData.peopleNum}</p>
                </div>
            </div>

            <div>
                <Message />
            </div>
        </div>
    </div>
  )
}
