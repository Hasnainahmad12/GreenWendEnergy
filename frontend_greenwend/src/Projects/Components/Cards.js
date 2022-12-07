import React from 'react'
import "../Styles/Cards.css"
import { FaArrowRight } from "react-icons/fa";

const Cards = ({ImgSrc, Title, Desc, Learn, Button}) => {
  return (
    <div className='cards'>
            <div className='h-[445px] w-[370px]'>
                <img src={ImgSrc} className='cards__image' alt='' />
                <div className='text-center mt-4'>
                <p className='cards__title'>{Title}</p>
                <p className='cards__desc'>{Desc}</p>
                <p className='cards__learn'>{Learn}<FaArrowRight className='ml-32 mt-[-25px]'/></p>
                <button className='cards__button'>{Button}</button> 
                </div>
            </div>
    </div>
  )
}

export default Cards