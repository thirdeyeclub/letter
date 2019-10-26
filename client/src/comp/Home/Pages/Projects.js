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

                let redirector = () => { window.location.href = `/${alpha.link}`}

                return  <div key={alpha.id} className="pCard" >

                            <h3 className="title">{alpha.title}</h3>

                            <div className="second-block">
                                <p className="descriptor">{alpha.descriptor}</p>

                                {/* maps out the tags  */}
                                <div className="tag-div">
                                    {alpha.tags.map(t=>(
                                    <><i className="tag" key={t}>{t}</i><br/></>)
                                    )}
                                </div>
                            </div>

                            <div className="image-cart">
                                {/* <button className="image-next-button"></button> */}
                                <img 
                                onClick={redirector}
                                alt="of project" 
                                key={alpha.picture} 
                                src={require(`../../../assets/${alpha.picture}.png`)} 
                                className="picture" />
                                {/* <button className="image-next-button"></button> */}
                            </div>

                    </div>
            })}
            {/* end of content div  */}
            </div>
        {/* end of page div  */}
        </div>
    )
}
