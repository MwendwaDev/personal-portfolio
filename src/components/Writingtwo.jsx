import React from 'react'

const Writingtwo = () => {
  return (
    <div className='relative h-48 w-80 md:w-96 border-y border-y-[#312d2d] p-4 flex flex-col justify-around mb-12 mr-8'>
        <img src='https://ksets.netlify.app/personal/quote.png' alt=''
            className='absolute -top-3'
        />
        <a href="https://www.freecodecamp.org/news/usestate-hook-3-different-examples/">

        <p className='text-[#9c9c9c] text-start'>
        In this article, we are going to learn about the useState() hook and demonstrate its use with three different examples: 
        a button with conditional rendering, form handling, and the famous counter.
        </p>
        </a>

        <div className='flex items-center space-x-2'>
            <span className='h-[3rem] w-[3rem] rounded-full bg-cover'
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=951&q=80)`,
                }}
            >
            </span>
                <p className='text-white text-lg font-medium'>Freecode Camp</p>
        </div>
    </div>
  )
}

export default Writingtwo