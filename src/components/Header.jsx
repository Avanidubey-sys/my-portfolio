import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
   <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
items-center justify-start gap-4 pt-28 sm:pt-32 lg:pt-36">

        <motion.div
        initial={{scale: 0}}
        whileInView={{scale:1}}
        transition={{duration: 0.6, delay:0.3}}>
            <Image src={assets.avaniportpic} alt='' 
            className='rounded-full w-70'/>
        </motion.div>
        <motion.h3 
        initial={{y: -20, opacity:0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness:100}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                Hi! I'm Avani Dubey.<Image src={assets.hand_icon} alt='' 
                className='w-6'/></motion.h3>
                <motion.h1
                initial={{y: -30, opacity:0}}
                whileInView={{y:0, opacity: 1}}
                transition={{duration: 0.8, delay:0.5}}
                className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
                Frontend Developer
                </motion.h1>
                    <motion.p 
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.6, delay:0.7}}
                    className='max-w-2xl mx-auto font-ovo'
                    >
                        Hi! I’m Avani Dubey, a Computer Science undergraduate at SAGE University, Bhopal. 
I’m passionate about crafting elegant and scalable web applications, blending creativity with robust code. 
From building dynamic interfaces with React.js and Next.js to exploring enterprise-level Java solutions, I thrive on turning ideas into impactful digital experiences.

                    </motion.p>
                    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                        <motion.a href="#contact" 
                        className='px-10 py-3 border border-white rounded-full bg-black
                        text-white flex items-center gap-2 '
                        initial={{y: 30, opacity:0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{duration: 0.6, delay:1}}>
                            Get in Touch<Image src={assets.right_arrow_white} alt='' 
                            className='w-4'/>
                        </motion.a>

                        <motion.a 
                        initial={{y: 30, opacity:0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{duration: 0.6, delay:1.2}}
                        href="/sample-resume.pdf" download 
                        className='px-10 py-3 border rounded-full border-gray-500 flex
                        items-center gap-2 bg-white'>
                            My Resume <Image src={assets.download_icon} alt='' 
                            className='w-4'/>
                        </motion.a>
 
                    </div>
    </div>
  )
}

export default Header;