import React from 'react'

const Writingthree = () => {
  return (
    <div className='relative h-48 w-80 md:w-96 border-y border-y-[#312d2d] p-4 flex flex-col justify-around mb-12 mr-8'>
        <img src='https://ksets.netlify.app/personal/quote.png' alt=''
            className='absolute -top-3'
        />
        <a href="https://mwendwabundi.hashnode.dev/two-ways-to-authenticate-a-react-app-with-firebase">

        <p className='text-[#9c9c9c] text-start'>
        In this article, we are going to look at two ways to authenticate a React application using Firebase.
        </p>
        </a>

        <div className='flex items-center space-x-2'>
            <span className='h-[3rem] w-[3rem] rounded-full bg-cover'
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)`,
                }}
            >
            </span>
                <p className='text-white text-lg font-medium'>Hashnode</p>
        </div>
    </div>
  )
}

export default Writingthree