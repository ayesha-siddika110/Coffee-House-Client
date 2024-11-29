import React, { useEffect } from 'react';
import banner from '../../../images/more/3.png'
import './hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../../images/icons/1.png'

const Hero = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 }); // You can customize the duration here
      }, []);
    return (
        <>
        
        
        <div className='bg-img text-white flex items-center'>
            {/* <div className='lg:w-[50%]'></div> */}

            <div data-aos="fade-up-left" className='pl-[40%] space-y-2'>
                <h1 className='text-3xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-xs font-extralight text-gray-300 w-[70%]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-[#E3B577] text-black text-sm px-2 py-1 rounded-sm hover:bg-[#fff0] border  border-[#E3B577] hover:border-white hover:text-white'>Learn More</button>

            </div>

            
        </div>
        <div className='bg-[#ECEAE3]'>
            <div className='w-[80%] m-auto flex justify-between py-2'>
                <div>
                    <img src={img1} alt="" />
                    <h1>Awesome Aroma</h1>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={img1} alt="" />
                    <h1>Awesome Aroma</h1>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={img1} alt="" />
                    <h1>Awesome Aroma</h1>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={img1} alt="" />
                    <h1>Awesome Aroma</h1>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
            </div>

        </div>
        </>
    );
};

export default Hero;