import React from 'react';
import { locationArray } from '../JSON/LocationData';

export default function LocationInfo() {
    const [LocationData, setLocationData] = React.useState(locationArray);
  return (
    <>
    {LocationData.map(data => (
        <div className='text-center'>
            <h1 className='text-xl font-semibold'>{data.name}</h1>
            <div>
                <p>{data.address}</p>
            </div>
            <div>
                <p>{data.days}</p>
                <p>{data.hours}</p>
            </div>
            <div>
                <p className='inline-block pr-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                </p>
                <p className='inline-block align-top'>
                    {data.starNum} from {data.reviewNum} reviews
                </p>
            </div>
        </div>
    ))}
    </>
  )
}
