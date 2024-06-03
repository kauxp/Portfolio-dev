import React from 'react'
import Tile from '../components/Tile'
import { CiGlobe } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import profile from './profile.jpeg';

const About = () => {
  return (
    <div className=' bg-[#010e1b] text-white h-screen flex flex-col items-center gap-8 pt-8'>
        <div className='description-container flex flex-col gap-12 align-middle justify-center w-3/6'>
            <div className='about-container flex  gap-5 flex-col'>
                <h4 className=' text-4xl'>About</h4>
                <div className='description flex gap-10'>
                    <img className=' w-2/6 h-auto' src={profile} alt='picture'></img>
                    <p className=' font-light text-lg antialiased text-white'> 
                    I am a dedicated and enthusiastic undergraduate student with a strong interest in software development and artificial intelligence. Through extensive exposure to the fundamental concepts and practical applications in these fields, I have developed a deep passion for them. I am driven by a desire to create and implement algorithms to tackle real-world industry challenges.
                        <ul className=' list-disc m-2'>
                            <li>Email: paramjeetkaur4326@gmail.com</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h4 className='text-4xl'>Interests</h4>
                <div className='interests-container grid grid-cols-2 gap-8'>
                    <Tile skill='Software Development' icon={<CiGlobe size={56} color='green'/>}/>
                    <Tile skill='Machine Learning' icon={<FaDatabase size={36} color='blue' />}/>
                    <Tile skill='Algorithms' icon={<IoNewspaper size={46} color='#AA336A'/>}/>
                    <Tile skill='Gymnastics' icon={<MdOutlineSportsGymnastics size={46} color='yellow'/>}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About