import React from 'react'
import { SiAdobexd, SiFigma, SiPython, SiJupyter, SiJavascript, SiCss3, SiHtml5, SiNextdotjs, SiGithub, SiPostgresql, SiVisualstudiocode, SiReact } from "react-icons/si"
import { IconContext } from 'react-icons'

function Skills() {
  return (
    <>
    <div className='block'>
      <div className='pb-24 text-center text-2xl'><h2>Technologies I have worked with</h2></div>
      <div className='h-80 snap-center flex items-center justify-center'>
        <div className='grid auto-rows-auto auto-cols-max grid-cols-4 gap-y-10 gap-x-10 text-center'>
          <IconContext.Provider value={{size: 50}}>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiAdobexd></SiAdobexd></div>
              <p>Adobe XD</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiFigma></SiFigma></div>
              <p>Figma</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiPython></SiPython></div>
              <p>Python</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiJupyter></SiJupyter></div>
              <p>Jupyter notebook</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiJavascript></SiJavascript></div>
              <p>Javascript</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiCss3></SiCss3></div>
              <p>CSS</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiHtml5></SiHtml5></div>
              <p>Html</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiNextdotjs></SiNextdotjs></div>
              <p>Next.js</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiReact></SiReact></div>
              <p>React</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiVisualstudiocode></SiVisualstudiocode></div>
              <p>VS Code</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiGithub></SiGithub></div>
              <p>GitHub</p>
            </div>
            <div>
              <div className='flex items-center justify-center h-20 w-36'><SiPostgresql></SiPostgresql></div>
              <p>PostgreSQL</p>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      </div>
    </>
  )
}

export default Skills