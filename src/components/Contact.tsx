import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>

        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>

                <h2 className='text-6xl' data-aos="zoom-in-up">Get in Touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                   drop me message , give me a call , or send me a message 
                </p>

              <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <AiOutlineMail size={30} /> bsm@gmail.com
              </div>
              <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                < BsTelephone  size={30} />  03152092395
              </div>


            </div>

            <div className='space-y-8'>

                {/* name */}
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-blue-600' 
                    id='name'/>
                </div>

                {/* email */}
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-blue-600' 
                    id='email'/>
                </div>
                {/* message */}
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className=' bg-transparent border border-blue-600' 
                    id='msg' rows={8}>
                        </textarea>
                </div>
                <button className='bg-blue-600 p-2 px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>

    </div>
  )
}

export default Contact