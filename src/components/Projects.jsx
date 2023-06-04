import React from 'react'
import Button from './Button'

const Projects = ({flip, image, button}) => {
  return (
    <div className={`lg:flex ${flip && "flex-row-reverse"} px-6 md:px-36 mb-12 w-full space-x-4 `}>
        <div className='flex-1 flex flex-col justify-around h-80 px-6'>
                <h1 className='text-black text-[2rem] font-medium'>Blog App</h1>

            <p className='text-[#9C9C9C]'>
               This blog app is built with Reactjs and Hygraph CMS. The content on the blog section is fetched from
               the CMS.
            </p>
            <a href="https://blog-appdemo.netlify.app/">

            <Button text={"View Project"}  className={`${button} px-10 w-fit py-2`}/>
            </a>
        </div>

        <div className='h-80 flex-1 bg-cover rounded-lg' style={{backgroundImage: `url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80")`}}>
        
        </div>
    </div>
  )
}

export default Projects