import React from 'react'

const Writingfour = () => {
  return (
    <div className='relative h-48 w-80 md:w-96 border-y border-y-[#312d2d] p-4 flex flex-col justify-around mb-12 mr-8'>
        <img src='https://ksets.netlify.app/personal/quote.png' alt=''
            className='absolute -top-3'
        />
        <a href="https://www.freecodecamp.org/news/scroll-animations-with-javascript-intersection-observer-api/">

        <p className='text-[#9c9c9c] text-start'>
        How to Add Scroll Animations to a Page with JavaScript's Intersection Observer API
        </p>
        </a>

        <div className='flex items-center space-x-2'>
            <span className='h-[3rem] w-[3rem] rounded-full bg-cover'
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1558864559-ed673ba3610b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60)`,
                }}
            >
            </span>
                <p className='text-white text-lg font-medium'>Freecode Camp</p>
        </div>
    </div>
  )
}

export default Writingfour