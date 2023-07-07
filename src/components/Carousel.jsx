import React from 'react';
import frontImg from '../images/Museum/Front.jpg';
import interiorImg from '../images/Museum/Interior.jpg';
import sideImg from '../images/Museum/Side.jpg';

export default function Carousel() {
  return (
    <>
        <div className="carousel w-full border-0 rounded">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={frontImg} className="w-full" alt='The exterior view'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={sideImg} className="w-full" alt='The side view' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={interiorImg} className="w-full" alt='The interior view' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    </>
  )
}
