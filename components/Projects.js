import React from 'react'
import { useRef } from 'react'
import {BrowserView, MobileView} from 'react-device-detect';
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

function Project(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <>
      <BrowserView>
        <section className='h-screen flex justify-center items-center relative snap-center'>
        <div className='relative object-cover drag-area' ref={ref}>
          <Image className='inset-0 w-3/4' src={props.img} alt={props.p} unoptimized={true}/>
        </div>
        <motion.div
        style={{ y }} 
        className="p-6 rounded-lg shadow-lg bg-white max-w-sm left-[calc(50%+200px)] absolute cursor-grab active:cursor-grabbing"
        drag dragConstraints={ref}
        dragMomentum={false}
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

  const proj = [{
    id: 1,
    p: "Sisu usability research for Funidata Oy",
    info: "I was part of student team that conducted user research of Sisu student system. We figured out key functionalities of Sisu and created tasks around them. After that we conducted several user tests and analyzed the results.",
    img: funi
  }, {
    id: 2,
    p: "Futurice.com website renewal",
    info: "I was part of student dev team who did website renewal for Futurice. I worked closely with futurice UX team to learn about website design progress. Technologies used: Next.js, Typescript, CSS modules, Netlify and Contentful",
    img: futu
  }, {
    id: 3,
    p: "Greenhouse gas monitoring program",
    info: "I designed UI and was part of group who made program that displays greenhouse gas emissions. The program fetches data from two APIs and plots the data according to users preferences. Technologies used: PyQt5 and Python",
    img: py
  }]
  return (
    <>
      <div className='absolute text-2xl pt-24 left-2/4 -translate-x-2/4'><h2>Scroll down to see some projects I have worked on</h2></div>
      {proj.map((props) => (
        <Project key={props.id} img={props.img} info={props.info} title={props.p} />
      ))}
    </>
  )
}

export default Projects