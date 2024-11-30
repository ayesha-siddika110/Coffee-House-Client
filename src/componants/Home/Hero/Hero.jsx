import React, { useEffect } from 'react';
import banner from '../../../images/more/3.png'
import './hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../../images/icons/1.png'
import img2 from '../../../images/icons/2.png'
import img3 from '../../../images/icons/3.png'
import img4 from '../../../images/icons/4.png'

const Hero = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 }); // You can customize the duration here
      }, []);
    return (
        <>
        
        
        <div className='bg-img text-white flex items-center'>
            {/* <div className='lg:w-[50%]'></div> */}

            <div data-aos="fade-up-left" className='pl-[40%] space-y-2'>
                <h1 className='text-6xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-xl font-extralight text-gray-300 w-[70%]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-[#E3B577] text-black text-xl px-2 py-1 rounded-sm hover:bg-[#fff0] border  border-[#E3B577] hover:border-white hover:text-white'>Learn More</button>

            </div>

            
        </div>
        <div className='bg-[#ECEAE3]'>
            <div className='w-[80%] m-auto gap-3 grid md:grid-cols-4 grid-cols-2 lg:grid-cols-4 py-8'>
                <div className='space-y-1'>
                    <img className='w-12' src={img1} alt="" />
                    <h1 className='font-semibold text-3xl text-[#331A15]'>Awesome Aroma</h1>
                    <p className=''>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='space-y-1'>
                    <img className='w-12' src={img2} alt="" />
                    <h1 className='font-semibold text-3xl text-[#331A15]'>High Quality</h1>
                    <p className=''>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='space-y-1'>
                    <img className='w-12' src={img3} alt="" />
                    <h1 className='font-semibold text-3xl text-[#331A15]'>Pure Grades</h1>
                    <p className=''>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='space-y-1'>
                    <img className='w-12' src={img4} alt="" />
                    <h1 className='font-semibold text-3xl text-[#331A15]'>Proper Roasting</h1>
                    <p className=''>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
              
            </div>

        </div>
        </>
    );
};

export default Hero;