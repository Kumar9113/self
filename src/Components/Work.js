import'./WorkCard.css'
import React from 'react'
import WorkCard from './WorkCard'
import ProjectCardData from './WorkCardData'


const Work= () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-conatiner'>
            {
                ProjectCardData.map((val,ind)=>
                {
                    return(
                        <WorkCard
                         key={ind} 
                         imgsrc={val.imgsrc}
                         title={val.title}
                         text={val.text}
                         view={val.view}

                         ></WorkCard>
                    )

                })
            }
        
           
        </div>
    </div>
  )
}

export default Work