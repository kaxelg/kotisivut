import React from 'react'
import Image from 'next/image'


import { 
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue 
} from 'framer-motion'

function Projects() {
  return (
    <div className="relative flex justify-center items-center">
        <section>
          <Image width={300} height={300} src="/kotisivut/public/Futurice.png" alt="Futurice project"  />
        </section>
        <section>
          <Image width={300} height={300} src="/kotisivut/public/Funidata.jpeg" alt="Funidata project" />
        </section>
        <section>
          <Image width={300} height={300} src="/kotisivut/public/Phyton.png" alt="Phyton project" />
        </section>
    </div>
  )
}

export default Projects
