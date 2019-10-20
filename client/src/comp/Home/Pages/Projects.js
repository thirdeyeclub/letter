import React from 'react'
import data from '../../../data/projDat.js'
import './projects.sass'

export default function Projects() {
    return (
        <div className="page">

            <div className="title">
                <h2>Projects</h2>
                <p>descrption</p>
                ------------------
            </div>

            <div className="content">
                {/* map function to create each card  */}
            {data.map( alpha => {
            return  <div key={alpha.id} className="pCard">

                        <h5 className="title">{alpha.title}</h5>
                        <p>{alpha.descriptor}</p>
                        <div className="image-cart">
                        <img alt="of project" key={alpha.picture} src={require(`../../../assets/${alpha.picture}.png`)} className="picture" />
                        </div>
                        <p>{JSON.stringify(alpha.tags)}</p>
                    </div>
            })}
            </div>

        </div>
    )
}
