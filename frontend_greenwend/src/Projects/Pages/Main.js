import React, { useEffect, useState } from 'react'
import "../Styles/Main.css";
import { data, projects, Slider } from '../Config/Data';
import img from "../Images/Vector1.png";
import img1 from "../Images/research.png";
import img2 from "../Images/solution1.png";
import img3 from "../Images/warranty1.png";
import img4 from "../Images/compitative.png";
import img5 from "../Images/customer.png";
import about from "../Images/about.png";
import dot from "../Images/dot.png";
import Cards from '../Components/Cards';
import Projects from '../Components/Projects';
import vector12 from "../Images/vector12.png";
import { FaArrowRight } from "react-icons/fa";
import mobileImage from "../Images/mobileImage.PNG";
import star from "../Images/star.png";
import arrow from "../Images/arrow.png";
import Footer from '../Components/Footer';


const Main = () => {
  const [Count , setCount] = useState(0);
  const value = Slider[Count];

  const ForWard = () =>{
    const next = Count + 1;
    const lent = Slider.length;
    if(next === lent){
      setCount(0);
    }    
    else{
      setCount(next);
    }
  }

  const BackWard = () =>{
    const back = Count - 1;
    const lent = Slider.length;

    if(back<0)
    {
      setCount(lent -1)
    }
    else{
      setCount(back);
    }
  }

  useEffect(() =>{
   const setting = setTimeout(() =>{ 
      ForWard()
    },3000);
    return () =>clearTimeout(setting)
  },[Count]);

  return (
    <div>
      {/* Slider Show */}
      <div className='main__image relative'> 
          <div className='slider__image'>
            <img src={value.img} className="h-[100vh] w-[100%] " alt='' />
          </div>
        
          <div className='absolute top-[230px] left-0 right-0 ml-auto mr-auto flex justify-center items-center flex-col'>
            <div className='main__heading'>
              <h2><span className='text-[#5EA410]'>{value.title}</span><span className='text-[#202E86]'>{value.title1}</span><span className='text-[#F6951D]'>{value.title2}</span></h2>
            </div>
            <div className='main__title'>
              <p>{value.subtitle}</p>
              
                <button className='main__button'>{value.button}</button>
            </div>
          </div>
        {/* find this pexils <p className='absolute top-[656px]'>sdhfksdjfhksdhj</p> */}
      </div>

    {/* Home Services */}
    <div className='home__container'>
      <div className='main__title-div'>
          <p className='title__line'>Why Choose <span className='font-semibold'>GREENWENDENERGY?</span></p>
      </div>

  {/* First Choose  */}
  <div className='flex flex-wrap'>
      <div className='item__class'>
          <div className='avator'>
              <img src={img} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>Professional Teams.</p>
          </div>
      </div>

      {/* Second Choose  */}
      <div className='item__class'>
          <div className='avator'>
              <img src={img1} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>Continuous research & development</p>
          </div>
      </div>

      {/* third Choose  */}
      <div className='item__class'>
          <div className='avator'>
              <img src={img2} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>Tailor made solutions.</p>
          </div>
      </div>

      {/* fourth Choose  */}
      <div className='item__class'>
          <div className='avator'>
              <img src={img3} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>longest warranties</p>
          </div>
      </div>

      {/* fifth Choose  */}
      <div className='item__class'>
          <div className='avator'>
              <img src={img4} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>Competitive prices.</p>
          </div>
      </div>

      {/* Sixth Choose  */}
      <div className='item__class'>
          <div className='avator'>
              <img src={img5} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>best after sale services</p>
          </div>
      </div>

    </div>
    </div>

      {/* About Services */}
      <div className='about__div'>
      <div>
          <img src={about} className="about__image" alt='' />
          <div className='mession__div'>
              <img src={dot} className='pt-20 ml-3' alt='' />
              <p className='paraghraph'>Mission: To provide high quality cost effective products and enhance customer's satisfaction.</p>
          </div>
      </div>

      <div>
        <p className='about__us'>About US</p>
        <p className='heading'>What is <span className='font-bold text-[#5462BA]'>GreenWendEnergy?</span></p>
        <p className='about__paragh'>Greenwend Energy Pvt Ltd is providing SOLAR ENERGY services and products. We deal in TIER 1 Solar panels (Branded with 30/12 years warranty), Solar inverter (Branded with warranty), Batteries and other Solar products.</p>
        <p className='about__more'>More About Us <FaArrowRight className='mt-[-25px] ml-[170px]'/></p>
      </div>
      </div>

      {/* Services Design */}
        <div>
            <h2 className='Services'>Our <span className='text-[#5462BA] font-bold'>Services</span></h2>
            
            <p className='services__para'>We are happy to use our expertise to work with you to develop a tailor-made solution for your challenge. Here are some highlights of our range of service</p>

            {/* Services Cards */}
            <div className='flex flex-wrap justify-center mt-10 gap-12'>
              {data.map((it) =>{
                return <div>
                  <Cards ImgSrc={it.img} Title={it.title} Desc={it.desc} Learn={it.learn} />
                </div>
              })}
            </div>
        </div>

        {/* Our Achievements  */}

        <div className='mt-20 achive__image'>
            <h2 className='our__head'>Our <span className='font-bold'>Achievements</span></h2>
              
              <div className='flex flex-wrap justify-center pt-28'>
                <div className='flex flex-wrap justify-center h-32 w-80'>
                    <p className='our__para'>7000<span className='kilometer'>(KW)</span></p>
                    <p className='our__title'>Installed Capacity</p>
                </div>

                <div className='flex flex-wrap justify-center h-32 w-80'>
                    <p className='our__para'>5000<span className='kilometer'>(KWh)</span></p>
                    <p className='our__title'>Self Consumption</p>
                </div>

                <div className='flex flex-wrap justify-center h-32 w-80'>
                    <p className='our__para'>35434<span className='kilometer'>(KG)</span></p>
                    <p className='our__title'>Carbon Reduced</p>
                </div>

                <div className='flex flex-wrap justify-center h-32 w-80'>
                    <p className='our__para'>2000<span className='kilometer'>(KWh)</span></p>
                    <p className='our__title'>Grid Export</p>
                </div>

              </div>
        </div>
        <br />
        <br />

        {/* Our Projects */}
            <div>
                <h2 className='our__projects'>Our <span className='text-[#5462BA] font-bold'>Projects</span></h2>
                <div className='flex flex-wrap justify-center gap-4'>
                   {projects.map((it) => {
                      return <div>
                      <Projects ImgSrc={it.img} Title={it.title} Learn={it.learn} />
                    </div>
                    })}
                </div>
            </div>
              
              {/* Testimony Added */}
              <div className='testimony'>
                <h2 className='testimony__head'>Testimony</h2>
                <div className='vector__image'>
                  <img src={vector12} alt='' />
                </div>

                <div>
                  <div className='flex flex-wrap justify-center gap-2 text-5xl text-[#F6951D] mt-[-80px]'>  
                    <img src={star} className='h-[60.33px] w-[60.67px] text-[#F6951D]' alt='' />
                    <img src={star} className='h-[60.33px] w-[60.67px] text-[#F6951D]' alt='' />
                    <img src={star} className='h-[60.33px] w-[60.67px] text-[#F6951D]' alt='' />
                    <img src={star} className='h-[60.33px] w-[60.67px] text-[#F6951D]' alt='' />
                    <img src={star} className='h-[60.33px] w-[60.67px] text-[#F6951D]' alt='' />
                    {/* <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span> */}
                  </div>
                  <div className=''>
                    <p className='user__review'>I was looking for a good solar company to install solar system for my house as we know nowadays electricity bills are too high.Then I came across this company called GreenWendWnergy. I had a great experience as the team was very cooperative and they have quite good after sale services</p>

                    <p className='user__name'>Mr. Muhammad Ali - Warsak Road peshawar</p>
                  </div>
                </div>
              </div>

              {/* Mobile Application Page Added */}
              <div className='mt-28 flex flex-wrap justify-center'>
                  <div className='mobile__image'>
                      <img src={mobileImage} alt='' />
                  </div>

                  <div className='h-[100vh] w-[598px]'>
                     <h2 className='mobile__head'>Our <span className='font-bold text-[#5462BA] flex'>Mobile Application</span></h2>

                     <p className='mobile__para'>Greenwend Energy Pvt Ltd is having one of the best and user friendly mobile application throughout the solar industry for monitoring your solar plant and you can also control your solar plant with this application. You can download our application by just clicking the link bellow.</p>

                     <p className='mobile__download'>Download app <FaArrowRight className='mt-[-14px] ml-[175px]'/></p>
                  </div>
              </div>

              {/* Cantact US */}
              <div className='cantact__us m-auto'>
                    <h2 className='cantact__head'>Contact Us </h2>
                    <p className='contact__para'>Let’s discuss <span className=''>your solar project</span></p>


                    {/* Form Contact */}
                    <div className='flex flex-wrap justify-center h-[500px] w-[80%] gap-8 m-auto'>
                      <div className=' h-36 w-[480px]'>
                          <label htmlFor='name' className='label'>Name</label>
                          <input type="text"  id='name' name='name' className='inputFeild' placeholder='Muhammad Nasir' />
                      </div>

                      <div className=' h-36 w-[480px] '>
                          <label htmlFor='email' className='label'>Email</label>
                          <input type="email" id='email' name='email' className='inputFeild' placeholder='m_nasir1234@gmail.com' />
                      </div>
                      
                      <div className='message__feild'>
                          <label htmlFor='message' className='label1'>Message</label>
                          <textarea type="email" id='message' name='message' className='inputMessage' placeholder='Type your message here' />
                      </div>
                      
                      <div className='form__button'>
                          <button className='send__button'>Send Message</button>
                      </div>

                    </div>
              </div>
              <br />
              <br />
              <Footer />
      </div>
    )
}

export default Main