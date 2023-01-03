import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
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

        {/* PROJECTS */}
        <section id="projects">
          <Projects />
        </section>
        {/* SKILLS */}
        <section id="skills">
          <Skills />
        </section>

        {/* CONTACTS */}
      </div>
    </div>
  )
}
