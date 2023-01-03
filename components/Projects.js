import React from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import funi from "/public/Funidata.jpeg"
import futu from "/public/Futurice.png"
import py from "/public/Python.png"



import { 
    motion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Project({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className='h-screen flex justify-center items-center relative snap-center'>
      <div className='relative overflow-hidden w-3/4' ref={ref}>
        <Image className='inset-0 w-full h-full' src={id} alt="project" />
      </div>
      <motion.div
      style={{ y }} 
      className="p-6 rounded-lg shadow-lg bg-white max-w-sm left-[calc(50%+200px)] absolute"
      >
        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
        <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the cards
        content.
        </p>
      </motion.div>
    </section>
  );
}

function Projects() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[funi, futu, py].map((image) => (
        <Project id={image} />
      ))}
      <motion.div className="fixed left-0 right-0 h-2 bg-black bottom-0 " style={{ scaleX }} />
    </>
  )
}

export default Projects

{/* <div className="relative flex-column justify-center items-center pt-72">
      <div className="relative h-screen">
      <Image height={1000} width={1000} alt="Project" src={futu} />
      <motion.div 
      className="block p-6 rounded-lg shadow-lg bg-white max-w-sm absolute right-0 top-1/4 z-10"
      >
        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
        <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
        </p>
      </motion.div>
      </div>
      <div className="relative h-screen">
      <Image height={1000} width={1000} alt="Project" src={funi} />
      <motion.h2 className="right-0 absolute">
        Testi
      </motion.h2>
      </div>
      <div className="relative h-screen">
      <Image height={1000} width={1000} alt="Project" src={py} />
      </div>
    </div> */}