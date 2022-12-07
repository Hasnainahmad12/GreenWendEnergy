import React from 'react'
import footerphone from "../Images/footerphone.png";
import logo from "../Images/Logo.png";
import email from "../Images/email.png";
import location from "../Images/Location.png";
import "../Styles/Footer.css";
// import facebook from "../Images/Facebook.png";
// import instagram from "../Images/instagram.png";
// import linkedIn from "../Images/Linkedin.png";
// import google from "../Images/Google+.png";
// import twitter from "../Images/Twitter.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaGooglePlus, FaInstagram , FaMailBulk} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=''>
          {/* Footer , Call Protion*/}
          <div className='flex flex-wrap justify-center mt-14'>
                <div className='footer__firstheight'>
                    <div className='footer__first'>
                        <img src={footerphone} className='pt-10 pl-5' alt='' />
                        <p className='footer__para'>Call our support team</p>
                        <p className='footer__contact'>+92-317-7003000</p>
                        <div className='h-[450px] w-[450px]'>
                            <img src={logo} className='mt-32 h-[49px] w-[50.71px ml-6' alt='' />
                            <p className='footer__details'>GreenWendEnery is your trusted partner for innovative and smart energy solutions across Pakistan. GreenWend Energy has been focused on thier customer’s success. This single focus has enabled us to constantly improve our internal processes to meet and exceed our customers’ expectations.</p>
                        </div>
                    </div>
                </div>

                  {/*2nd Email Portion */}
                <div className='footer__secondheight'>
                    <div className='footer__second'>
                        <img src={email} className='pt-10 pl-5' alt='' />
                        <p className='footer__para'>Send us an Email</p>
                        <p className='footer__contact'>info@greenwendenergy.com</p>

                            <p className='second__footpara'>Useful Links</p>
                    
                        <div className='second__footsection'>
                            <p>Latest News</p>
                            <p>New Blogs</p>
                            <p>New Products</p>
                            <p>Get Quote</p>
                        </div>
                        
                            <p className='second__footpara1'>Products</p>
                
                        <div className='second__footsection1'>
                            <p>Inverter/UPS</p>
                            <p>Battries</p>
                            <p>Solar Panels</p>
                        </div>
                    </div>
                </div>
                    
                {/* Contact Protion */}
                <div className='footer__thirdheight'>
                    <div className='footer__third'>
                        <img src={location}  className='pt-10 pl-5' alt='' />
                        <p className='footer__para1'>office# 2, 2nd floor, Khyber Heights
                        Board Bazar, Peshawar, Pakistan</p>

                         <div className='h-[450px] w-[450px]'>
                            <p className='third__footpara'>Get Updates</p>
                            <p className='footer__details'>Subscirbe to recieve weekly updated news and special offers.</p>
                            <div className="main">
                                 {/* <FaMailBulk className='iconImage'/> */}
                                 <img className="iconImage" src={email} alt="" />
                                 <input type="email" className="input" placeholder="Enter your email" />
                            </div>
                        </div>
                    </div>
                </div>
                <span className='footer__line'></span>
                
                <div className='flex flex-wrap gap-56'>
                    <div className='flex flex-wrap gap-10 text-3xl mt-[-50px] ml-4'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaLinkedin />
                            <FaGooglePlus />
                    </div>
                    
                    <div>
                        <h2 className='last__line mt-[-50px]'>Copyright  2022 Your Company.Inc  | Privacy Policy  |  Tearms and Conditions</h2>        
                    </div>

                </div>
                <br />
            </div> 
    </div>
  )
}

export default Footer