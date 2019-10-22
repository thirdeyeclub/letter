import React ,{useState} from 'react'
import './projects.sass'

import data from '../../../data/projDat.js'

// all project pages
import Safe from './project-pages/Safe.js'
import Sup from './project-pages/Sup.js'
import VR from './project-pages/VR.js'
import Slack from './project-pages/Slack.js'
import Mm from './project-pages/Mm.js'

export default function Projects() {
    
    return (
        <div className="page">

            <div className="title">
                <h3>My Recent Work</h3>
            </div>

            <div className="content">
                {/* main landing page to show off my work */}
                {/* map function to create each card  */}
            {data.map( alpha => {
                return  <div key={alpha.id} className="pCard" >

                        <h5 className="title">{alpha.title}</h5>
                        <p className="descriptor">{alpha.descriptor}</p>

                        <div className="image-cart">
                            {/* <button className="image-next-button"></button> */}
                            <img 
                            alt="of project" 
                            key={alpha.picture} 
                            src={require(`../../../assets/${alpha.picture}.png`)} 
                            className="picture" />
                            {/* <button className="image-next-button"></button> */}
                        </div>
                            {/* maps out the tags  */}
                        <div className="tag-div">
                            {alpha.tags.map(t=>(
                            <i className="tag" key={t}> {t} </i>)
                            )}
                        </div>
                    </div>
            })}
            {/* end of content div  */}
            </div>
        {/* end of page div  */}
        </div>
    )
}
