import React from 'react'
import VehicleInfo from './VehicleInfo';
import Filter from './Filter';
import { carsArray } from '../JSON/CarData';

export default function VehicleOptions() {
    const [CarData, setCarData] = React.useState(carsArray);
  return (
    <div className='w-3/4 m-auto'>
        <Filter />
        {CarData.map(data => (
            <div key={data.id} className="collapse collapse-arrow">
                <input type="checkbox" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    <h2 className='text-xl font-semibold'>{data.name}</h2>
                </div>
                <div className="collapse-content"> 
                    <VehicleInfo vData={data} />
                </div>
            </div>
        ))}
    </div>
  )
}
