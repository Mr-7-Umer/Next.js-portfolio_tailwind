import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>

        <div className='grid md:grid-cols-2 gap-20 items-center'>

            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl text-gray-300'>Technologies I work On</h2>
                <br />
                <br />
                <p className='text-gray-500 pt-2'>
                I&apos;m passionate about using the latest technologies 
                to build modern,
                scalable applications. 
                Here are the technologies I work with.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-3xl sm:text-4xl'>
                 
                    <div className='space-y-2'>
                        <ul>
                        <li data-aos="zoom-in-up" className='text-blue-500'>Typescript</li>
                        <li data-aos="zoom-in-up" className='text-white'>Next.js</li>
                        <li data-aos="zoom-in-up" className='text-yellow-400'>Python</li>
                        </ul>

                    </div>
                    
                    <div className='space-y-2'>
                        <ul>
                        <li data-aos="zoom-in-up" className='text-teal-400'>Tailwind</li>
                        <li data-aos="zoom-in-up" className='text-red-500'>Html</li>
                        <li data-aos="zoom-in-up" className='text-accent'>Node.js</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills