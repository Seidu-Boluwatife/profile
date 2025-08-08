import React from 'react'
import Button from './Button'

const FrontEndMentor = () => {
  return (
    <div className='flex flex-col items-center space-y-2 justify-center bg-black min-h-screen'>
        <div className='p-3 flex flex-col items-center space-y-2 w-[300px] h-[500px] bg-gray-950'> 
            <img src="/tife_pic.jpg" alt="my pic" className='w-24 h-24 rounded-full'/>
        <h1 className='text-white text-xl md:text-2xl'>
            Seidu Boluwatife
        </h1>
        <p className='text-yellow-400'>
            Nigeria, Lagos State
        </p>
        <p className='text-white'>
            Front-end Developer and Hardware Engineer
        </p>
        <div className=' text-white text-xl text-center w-f space-y-3 w-full pb-5 '>


            <Button name='GitHub ' href='https://github.com/Seidu-Boluwatife' target='_blank'/>
            <Button name='Frontend Mentor' href='https://www.frontendmentor.io/' target='_blank' />
            <Button name='LinkedIn' href='https://www.linkedin.com/in/boluwatife-seidu/' target='_blank'/>
            <Button name='Twitter'href='https://x.com/' target='_blank' />
            <Button name='Instagram' href='https://www.instagram.com/'  target='_blank'/>
            
           
        </div>
    
        </div>
        
    </div>
  )
}

export default FrontEndMentor