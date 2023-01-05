import React from 'react'
import { useRef } from 'react'
import {BrowserView, MobileView} from 'react-device-detect';
import Image from 'next/image'
import funi from "/public/Funidata.jpeg"
import futu from "/public/Futurice.png"
import py from "/public/Python.png"
import fam from "/public/Fam.png"



import { 
    motion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Project(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  console.log(props);

  return (
    <>
      <BrowserView>
        <section className='h-screen flex justify-center items-center relative snap-center '>
        <div className='relative overflow-hidden object-cover drag-area' ref={ref}>
          <Image className='inset-0 w-3/4' src={props.img} alt={props.p} />
        </div>
        <motion.div
        style={{ y }} 
        className="p-6 rounded-lg shadow-lg bg-white max-w-sm left-[calc(50%+200px)] absolute cursor-grab active:cursor-grabbing"
        drag dragConstraints={ref}
        >
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{props.title}</h5>
          <p className="text-gray-700 text-base mb-4">{props.info}</p>
          <p className='text-gray-600 text-xs text-right'>Move me if I am in the way.</p>
        </motion.div>
        </section>
      </BrowserView>
      <MobileView>
      <section className='h-screen flex justify-center items-center relative snap-center '>
        <div className='relative overflow-hidden object-cover drag-area' ref={ref}>
          <Image className='inset-0 w-full h-full' src={props.img} alt={props.p} />
        </div>
      </section>
      </MobileView>
    </>
  );
}

function Projects() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const proj = [{
    id: 1,
    p: "Sisu usability research for Funidata Oy",
    info: "I was part of team that conducted user research of Sisu program",
    img: funi
  }, {
    id: 2,
    p: "Futurice website renewal",
    info: "I was part of dev team who did website renewal",
    img: futu
  }, {
    id: 3,
    p: "Python program",
    info: "I created UI and was part of group who made program that shows user greenhouse gas emissions.",
    img: py
  }, {
    id: 4,
    p: "PadelFam case study",
    info: "I created UI and was part of group who made program that shows user greenhouse gas emissions.",
    img: fam
  }]
  return (
    <>
      {proj.map((props) => (
        <Project key={props.id} img={props.img} info={props.info} title={props.p} />
      ))}
      <motion.div className="fixed left-0 right-0 h-2 bg-black bottom-0 " style={{ scaleX }} />
    </>
  )
}

export default Projects