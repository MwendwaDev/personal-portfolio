import React from 'react'

const Writing = () => {
  return (
    <div className='relative h-48 w-80 md:w-96 border-y border-y-[#312d2d] p-4 flex flex-col justify-around mb-12 mr-8'>
        <img src='https://ksets.netlify.app/personal/quote.png' alt=''
            className='absolute -top-3'
        />
        <a href="https://medusajs.com/blog/13-live-chat-widgets-for-ecommerce-stores-in-2023/">

        <p className='text-[#9c9c9c] text-start'>
        Improve customer satisfaction and boost sales on your ecommerce store with these top 13 live chat widgets for 2023. 
        </p>
        </a>

        <div className='flex items-center space-x-2'>
            <span className='h-[3rem] w-[3rem] rounded-full bg-cover'
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1584433305355-9cb73387fc61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=848&q=80)`,
                }}
            >
            </span>
                <p className='text-white text-lg font-medium'>Medusajs</p>
        </div>
    </div>
  )
}

export default Writing