import Writing from "./Writing"
import Fade from 'react-reveal/Fade';
import Writingtwo from './Writingtwo'
import Writingthree from './Writingthree'
import Writingfour from './Writingfour'

const Actualwriting = () => {
  return (
    <div>
        <div id ="writing" className="text-center flex flex-col items-center pb-16 pt-12">
            <Fade bottom>
            <h1 className="text-white text-[3rem] font-medium">Technical Writing</h1>
            </Fade>

            <Fade bottom>
            <p className="text-[#9C9C9C] md:w-[35rem] text-center mx-6 mt-4">
                I love writing tutorials and articles about different technologies.
            </p>
            </Fade>

        <div className="px-36 flex flex-wrap items-center justify-center mt-16">
            <Fade left>
            <Writing />
            </Fade>

            <Fade right>
            <Writingtwo />
            </Fade>
            <Fade left>
            <Writingthree />
            </Fade>
            <Fade right>
            <Writingfour />
            </Fade>
        </div>
        </div>
    </div>
  )
}

export default Actualwriting