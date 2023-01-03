import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div className='max-w-6xl mx-auto '>
      <Head>
        <title>Kalle's portfolio</title>
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

      {/* CONTACTS */}
    </div>
  )
}
