import React from 'react'
import Button from './Button'
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div id="contact" className='bg-gray-200 flex flex-col items-center'>
        <div className="text-center flex flex-col items-center pb-16 pt-12">
            <Fade bottom>
            <h1 className="text-black text-[3rem] font-medium">Get In Touch</h1>
            </Fade>
            <Fade bottom>
            <p className="text-[#9C9C9C] md:w-[35rem] text-center mx-4 mt-4">
                To get in touch with me you can use <h3 className='text-[#5e5e]'>mwendwadev@gmail.com</h3> to 
                email me. Let's talk, code and write. Adios. 
            </p>
            </Fade>
        </div>

       
    </div>
  )
}

export default Contact