import React from 'react';
import Library from './lib.jpeg'
import quiz from './Screenshot from 2024-06-02 11-34-16.png'
const Projects = () => {
  return (
    <div className='h-screen bg-[#010e1b] text-white flex flex-col items-center pt-8'>
        <div className=' flex flex-col align-middle justify-center gap-10  w-2/5'>
            <h4 className=' text-4xl'>Projects</h4>
            <div className=' cards grid grid-cols-2 gap-10'>
                <div>
                  <p className=' text-2xl font-mono font-bold'>Library Management System</p>
                  <p className=' mt-3  text-lg '>-Java, SpringBoot, MySQL</p>
                </div>
                <a className=' card flex flex-col gap-4 justify-start' href="https://github.com/kauxp/Library-Management-System">
                <img  src={Library}/>
                </a>

                <div>
                  <p className=' text-2xl font-mono font-bold'>QuizApp</p>
                  <p className=' mt-3  text-lg '>-HTML, CSS, Javascript</p>
                </div>
                <a className=' card flex flex-col gap-4 justify-start' href="https://github.com/kauxp/QuizApp">
                    <img  src={quiz}/>
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default Projects