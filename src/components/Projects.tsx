import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data = [

    {
        id:0,
        title : "Editable Resume Builder",
        desc: "A Typescript-based Editable and Interactive resume built with HTML and CSS.",
        img: "/project_01.jpg",
        tags: ["HTML","Node","CSS","Typescript"]
    },
    
    {
        id:1,
        title : " Interactive Resume",
        desc: "A Typescript-based Interactive Personal resume with HTML and CSS.",
        img: "/project_02.jpg",
        tags: ["HTML","Node","CSS","Typescript"]
    }

    ,
    
    {
        id:2,
        title : "Cozy Corner",
        desc: "A fully Responsive Coffee shop website using pure HTML and CSS with a bit touch of Typescript ",
        img: "/project_03.jpg",
        tags: ["HTML","Node","CSS","Typescript"]
    }
];



const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>

        <Heading title='My Projects'/>

        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>

    </div>
  )
}

export default Projects