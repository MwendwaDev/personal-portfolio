import React from 'react'
import Projects from './Projects'
import Projectstwo from './Projectstwo';
import Projectsthree from'./Projectsthree';
import Fade from 'react-reveal/Fade';

const ProjectsSection = () => {
  return (
    <div className='bg-gray-200 flex flex-col items-center'>
        <div className="text-center flex flex-col items-center pb-16 pt-12">
            <Fade bottom>
            <h1 id="Projects" className="text-black text-[3rem] font-medium">Projects</h1>
            </Fade>

            <Fade bottom>
            <p className="text-[#9C9C9C] md:w-[35rem] text-center mx-4 mt-4">
               Here are some of my projects.
            </p>

            </Fade>
        </div>

        <Fade bottom>
        <Projects image={"https://ksets.netlify.app/personal/mac.jpg"} button="bg-[#FFA217]"/>
        </Fade>
        <Fade bottom>

        <Projectstwo flip image={"https://ksets.netlify.app/personal/mac.jpg"} button="bg-[#000AFF]"/>
        </Fade>

        <Fade bottom>
        <Projectsthree image={"https://ksets.netlify.app/personal/mac.jpg"} button="bg-[#2AB090]"/>

        </Fade>
    </div>
  )
}

export default ProjectsSection