import React from 'react'
import './projects.sass'

import data from '../../../data/projDat.js'

import divider from '../../../assets/divider01.png'

export default function Projects() {

    return (
        <div className="page">
            
            <div className="top-title">
                <h2>My Recent Work</h2>
                <img src={divider} alt=""/>
            </div>

            <div className="content">
                {/* main landing page to show off my work */}
                {/* map function to create each card  */}
            {data.map( alpha => {

                // takes user to the page of for the project
                let redirector = () => { window.location.href = `/${alpha.page}`}
                // takes user to github
                let gitdirector = () => {window.location.href = `${alpha.gitlink}`}
                // links user to the website
                let webdirector = () => {window.location.href = `${alpha.weblink}`}

                return  <div key={alpha.id} className="pCard" >

                            <h3 className="title">{alpha.title}</h3>

                             <div className="image-cart">
                                {/* <button className="image-next-button"></button> */}
                                <img 
                                onClick={webdirector}
                                alt="of project" 
                                key={alpha.picture} 
                                src={require(`../../../assets/${alpha.picture}.png`)} 
                                className="picture" />
                                {/* <button className="image-next-button"></button> */}
                            </div>


                            <div className="second-block">
                                <p className="descriptor">{alpha.descriptor}</p>

                                {/* maps out the tags  */}
                                <div className="tag-div">
                                    {alpha.tags.map(t=>(
                                    <><i className="tag" key={t}>{t}</i><br/></>)
                                    )}
                                </div>

                            </div>

                                {/* call to action */}
                                <div className="call2action">
                                    <a 
                                        onClick={gitdirector}
                                        >View the project on GitHub
                                        </a><br/> or 
                                    <a
                                        onClick={redirector}
                                        > Learn more
                                        </a>
                                </div>
                    </div>
                
            })} {/* end of map-able card  */} 
            {/* end of content div  */}
            </div>
        {/* end of page div  */}
        </div>
    )
}
