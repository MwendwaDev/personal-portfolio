import Button from "./Button"
import Stack from "./Stack"
import { FaReact, FaGithub } from "react-icons/fa"
import { SiJavascript, SiCss3 } from "react-icons/si"
import {AiFillHtml5 } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';
import vectorimage from "../assets/vectorimage.jpg"

const Banner = () => {
  return (
    <div id="home" className="lg:mx-36 mx-6">
        <div className="md:flex items-center justify-between py-16">
            <div>
                <Fade bottom>
                    <h1 className="text-white text-[2rem] md:text-[2.5rem] font-medium text-center md:text-start">Mwendwa Bundi Emma</h1>
                </Fade>

                <Fade bottom>

                <p className="text-[#9C9C9C] md:w-[28rem] mt-4 text-[1.2rem]">
                I am front-end developer and technical writer. Technologies I use include;
                JavaScript, React, CSS, HTML. I also use APIs, CMS and Baas to build impeccable websites.
                As a technical writer I write articles & tutorials. I have written for Medusajs, Freecode Camp, Traceable AI, Educative.io and Hashnode among others.
                </p>

                <Button 
                    text={"Welcome Here"}
                    className="mt-6 shadow-md shadow-orange-500 bg-gradient-to-r hover:bg-gradient-to-l from-amber-300 to-amber-600"
                />
                </Fade>
            </div>

            <Fade right>
            <div className="flex items-center justify-center">
                <div className="xl:h-[25rem] h-[20rem] w-[20rem] xl:w-[25rem] rounded-full bg-cover mt-14 md:mt-0 animate-pulse" >
                 <img src={vectorimage} />
               
               

                </div>
            </div>
            </Fade>
        </div>

        <div className="pb-16 flex flex-col items-center md:items-start">
            <Fade bottom>
                <p className="text-white">Skills</p>
            </Fade>

            <Fade bottom>
            <div className="flex flex-wrap justify-center md:justify-start">
                <Stack Icon={FaReact} name="React JS"/>
                <Stack Icon={SiJavascript} name="Javascript"/>
                <Stack Icon={SiCss3} name="CSS" />
				<Stack Icon={AiFillHtml5} name="HTML" />
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Banner