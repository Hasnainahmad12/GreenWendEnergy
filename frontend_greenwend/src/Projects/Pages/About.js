import React from 'react'
import "../Styles/About.css";
import people from "../Images/People.png";
import enjoy from "../Images/enjoy.png";
import Footer from '../Components/Footer';
import hand from "../Images/hand.png";
import ceo from "../Images/ceo.png";
import ceo2 from "../Images/ceo2.png";
import { team } from '../Config/Data';
import Team from '../Components/Team';

const About = () => {
  return (
    <>
    <div className='flex flex-wrap gap-6 justify-center'>
      <div className='h-[500px] w-[600px] pt-[100px]'>
          <p className='about__head'>Economy  |  Efficency  |  Effectiveness</p>

          <h2 className='about__title'>About Our Company <span className='text-[#5EA410]'>Green</span><span className='text-[#202E86]'>Wend</span><span className='text-[#F6951D]'>Energy</span></h2>

          <p className='about__desc'>Greenwend Energy Pvt Ltd is here to help you in your difficult situations like power cut, High electricity bills and much more.</p>
      </div>

        <div className='image__div pt-[100px]'>
            <img src={people} alt='' />
        </div>
    </div>
   
      <br />
      <br />
      <div className='enjoy__image'>
        <img src={enjoy} alt=' ' />
      </div>

      <div className='flex flex-wrap justify-center gap-[32px]'>
        <div className='about__maindiv'>
          <p className='about__details'>100%</p>
          <p className='about__accuracy'>Accuracy</p>
          <p className='about__team'>We are having a highly expert team</p>
        </div>

        <div className='about__maindiv'>
          <p className='about__details'>150+</p>
          <p className='about__accuracy'>Projects Done</p>
          <p className='about__team'>We have installed 150+ systems all over country</p>
        </div>

        <div className='about__maindiv'>
          <p className='about__details'>250+</p>
          <p className='about__accuracy'>Happy Clients</p>
          <p className='about__team'>All our clients are highly satisfied from our work</p>
        </div>

        <div className='about__maindiv'>
          <p className='about__details'>20+</p>
          <p className='about__accuracy'>Products</p>
          <p className='about__team'>We are having latest solar products for you </p>
        </div>
      </div>
      <br />

      <div className='hand__image'>
        <h2 className='hand__title'>Our <span className='font-bold'>Trusted partners</span></h2>
      </div>
      <br />

      <div className='flex flex-wrap justify-center h-[100vh] mt-16 relative'>
        <div className='ceo__about'>
          <h2 className='ceo__mission'>Our Mission</h2>
          
          <h2 className='ceo__leading'>Leading <span className='
          text-[#5462BA]'>Energy</span> Provider</h2>

          <p className='ceo__message'>Our mission is to provide the highest quality cost effective renewable energy power products and services and enhance our customer's satisfaction through improvement in energy utilization, reducing energy bills and environment protection.
          </p>
        </div>

        <div className='ceo__mainImage'>
          <img src={ceo} className='ceo__image' alt='' />
          <div className='ceo__name absolute top-96 left-[595px]'>
            <p className='ceo__mr'>Mr. Zeeshan Syed</p>
            <p className='ceo__company'>CEO- GreenWendEnergy</p>
          </div>
        </div>
      </div>
      <br />

      {/* Our Vision  */}
      <div className='flex flex-wrap justify-center h-[100vh] gap-14'>
        <div className='ceo__mainVision'>
            <img src={ceo2} className='ceo__visionImage' alt='' />
        </div>

        <div className='ceo__vision'>
          <h2 className='ceo__visionMessage'>Our Vision</h2>
          
          <h2 className='ceo__wants'>Company Wants to <span className='
          text-[#5462BA]'>Achive</span></h2>

          <p className='ceo__visionPara'>We strive to become one of the leading and most reliable solar energy company providing the best services and innovative products. Continuously conforming to our ever-growing professional demeanor as well as quality assurance standards to earn the privilege of being 1st choice.
          </p>
        </div>
      </div>
      <br />  

      {/* Values Area */}
      <div className='value'>
          <p className='value__head'>Our Values</p>
          
          <h2 className='value__range'>PRODUCE HIGH RANGE OF POWER</h2>

          <p className='value__contain'> We value our customers and try our level best to give them the best services. We also strive hard to provide good after sale services.</p>
      </div>
      <br />
      <br />
      <br />

      {/* Team */}
      <div className='team'>
          <p className='team__para'>GreenWendEnergy Team</p>

          <h2 className='team__amazing'>The Amazing Team Of Us</h2>

        {/* {Team is Card, This 'team' is Data Pass Through Cards} */}
        <div className='flex flex-wrap justify-center gap-24 mt-3'>
            {team.map((it) => {
              return <div>
                <Team ImgSrc={it.img} Name={it.title} position={it.position}/>
              </div>
            })}
        </div>

      </div>
      
      <br />
      <Footer />
    </>
  )
}

export default About