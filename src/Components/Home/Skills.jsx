import React from 'react';
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoDesignernews } from "react-icons/io5";
import { AiFillApi } from "react-icons/ai";
import './Scrollbar.css'

const Skills = () => {
   
  const skills = [
    {
      logo: TiHtml5,
      head: 'HTML 5',
      title: 'HTML5 Web Development',
      description: 'Building modern, semantic, and accessible web pages using the latest HTML5 standards.'
    },
    {
      logo: FaCss3,
      head: 'CSS 3',
      title: 'CSS3 Styling and Animation',
      description: 'Designing beautiful and responsive web interfaces using modern CSS3 techniques.'
    },
    {
      logo: DiJavascript,
      head: 'JAVA-SCRIPT',
      title: 'JavaScript Programming',
      description: 'Creating dynamic and interactive web applications using JavaScript.'
    },
    {
      logo: FaReact,
      head: 'REACT JS',
      title: 'React.js Development',
      description: 'Developing efficient and scalable single-page applications using React.js.'
    },
    {
      logo: RiTailwindCssLine,
      head: 'HTML 5',
      title: 'Tailwind CSS Integration',
      description: 'Implementing utility-first CSS framework for rapid UI development.'
    },
    {
      logo: SiMongodb,
      head: 'MONGO DB',
      title: 'MongoDB Database Management',
      description: 'Managing and scaling NoSQL databases with MongoDB.'
    },
    {
      logo: IoLogoDesignernews,
      head: 'WEB DESIGN',
      title: 'Responsive Web Design',
      description: 'Ensuring websites are mobile-friendly and adapt seamlessly to various screen sizes and devices.'
    },
    {
      logo: AiFillApi,
      head: 'API',
      title: 'API Development and Integration',
      description: 'Developing and integrating RESTful and GraphQL APIs to enhance web application functionality and data exchange.'
    },
  ];

  return (
    <div className='w-auto h-screen overflow-hidden bg-backimage bg-cover bg-center md:p-4 sm:p-3 p-7 lg:p-5'>
      <div className='w-auto max-w-screen flex-auto justify-center items-center'>
        <div className="rounded-md bg-stone-50 lg:m-4 md:m-3 sm:m-2 m-1">
          <h1 className='lg:p-4 md:p-3 sm:p-2 p-1 text-[#41a441] underline underline-offset-2 text-lg sm:text-xl md:text-2xl lg:text-3xl [text-shadow:3px_4px_7px_rgb(0,0,0,0.7)] font-bold text-center mb-4 sm:mb-6 md:mb-6 lg:mb-8'>My Skills</h1>
        </div>
        <div
          className=' grid grid-cols-1 snap-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 md:gap-4 sm:gap-3 gap-2 w-auto lg:h-[600px] md:h-[500px] sm:h-[420px] h-[560px] overflow-auto smooth-scroll hide-scrollbar'
        >
          {skills.map((val, id) => (
            <div key={id} className='border-none outline-none h-auto lg:p-4 md:p-3 p-2 rounded-lg bg-neutral-50 shadow-xl flex flex-col items-center text-center'>
              <val.logo title={val.head} className='hover:animate-bounce hover:delay-300 duration-300 ease-in-out md:h-14 md:w-14 lg:h-16 lg:w-16 sm:h-12 sm:w-12 h-10 w-10 rounded-full bg-white shadow-lg mt-1 border-2 border-[#41a441] p-2 text-[#41a441]' />
              <h2 className='font-bold p-2 text-sm md:text-base lg:text-lg sm:text-xl'>{val.title}</h2>
              <p className='font-medium mt-1 lg:mt-2 lg:text-base md:text-base text-xs sm:text-base'>{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
