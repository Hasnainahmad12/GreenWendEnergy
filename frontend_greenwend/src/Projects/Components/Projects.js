import React from 'react'
import "../Styles/Projects.css";

const Projects = ({ImgSrc, Title, Learn}) => {
  return (
    <div>
        <div className='mt-20 project__div'>
            <img src={ImgSrc} className="project__image" alt='' />
                <p className='projects__title'>{Title}</p>
                <p className='projects__learn'>{Learn}</p>
        </div>
    </div>
  )
}

export default Projects