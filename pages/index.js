import Head from 'next/head'
import CaseStudy from '../components/CaseStudy'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

import { 
  motion,
  useScroll,
  useSpring,
} from 'framer-motion'


export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  return (
    <div className='bg-slate-50 '>
      <div className='max-w-6xl mx-auto '>
        <Head>
          <title>Homepage</title>
        </Head>
        {/* HEADER */}
        <Header />
        {/* HERO */}
        <section id="hero">
          <Hero />
        </section>
        {/* SKILLS */}
        <section id="skills">
          <Skills />
        </section>
        {/* PROJECTS */}
        <section id="projects">
          <Projects />
        </section>
        {/* CASE STUDY */}
        <section>
          <CaseStudy />
        </section>
        <motion.div className="sticky bottom-3 left-0 right-0 h-2 bg-slate-900" style={{ scaleX }} />
      </div>
    </div>
  )
}
