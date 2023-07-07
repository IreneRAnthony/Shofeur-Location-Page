import React from 'react'

// Filter is temporarily static, as there is no database to filter from
export default function Filter() {
  return (
    <>
        <div className="collapse border-0 rounded-lg bg-amber-200 collapse-arrow w-1/3 p-2">
            <input type="checkbox" /> 
            <div className="font-semibold collapse-title text-xl">
                Filters
            </div>
            <div className="collapse-content"> 
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Vehicle Type:</span>
                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>SUV</option>
                            <option>Sedan</option>
                            <option>Limo</option>
                            <option>Party Bus</option>
                            <option>Shuttle</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Number of People</span>
                        </label>
                        <input type="number" placeholder="Type here" className="input w-full max-w-xs" />
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Smoking:</span> 
                            <input type="checkbox" className="checkbox bg-stone-50" />
                        </label>
                    </div>
                <button type='submit' className='btn text-white bg-zinc-600 drop-shadow-lg border-none'>Apply Filters</button>
                </form>
            </div>
        </div>
    </>
  )
}
