import React from 'react';
import MapImg from '../images/Museum/Map.jpg'; 

export default function LocationMap() {
  return (
    <>
        <div className='border-2 border-slate-300 rounded p-1 m-2'>
            <img src={MapImg} alt='Map of the designated location' />
        </div>
    </>
  )
}
