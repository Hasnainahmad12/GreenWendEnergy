import React from 'react'
import "../Styles/Team.css";

const Team = ({ImgSrc, Name, position}) => {
  return (
    <div className='h-[444] w-[340px]'>
        <img src={ImgSrc} className='h-[360px] w-[340px]' alt='' />
        <div className='h-[84px] w-[340px] bg-[#FFFFFF]'>
            <p className='name'>{Name}</p>
            <p className='title'>{position}</p>
        </div>
    </div>
  )
}

export default Team