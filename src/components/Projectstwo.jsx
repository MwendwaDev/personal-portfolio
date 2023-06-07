import React from 'react'
import Button from './Button'

const Projectstwo = ({flip, image, button}) => {
  return (
    <div className={`lg:flex ${flip && "flex-row-reverse"} px-6 md:px-36 mb-12 w-full space-x-4 `}>
        <div className='flex-1 flex flex-col justify-around h-80 px-6'>
                <h1 className='text-black text-[2rem] font-medium'>The Code dev</h1>

            <p className='text-[#9C9C9C]'>
               This website is multipage built with HTML, CSS and JavaScript. It utilises
               different layout skills for each page  </p>

            <a href="https://thecodedev.netlify.app/">

            <Button text={"View Project"} className={`${button} px-10 w-fit py-2`}/>
            </a>
        </div>

        <div className='h-80 flex-1 bg-cover rounded-lg' style={{backgroundImage: `url("https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")`}}>
        
        
        </div>
    </div>
  )
}

export default Projectstwo