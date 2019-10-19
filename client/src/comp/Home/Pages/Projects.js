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
            {data.map( alpha => {
            return  <div key={alpha.id} className="pCard">
                        <h5 className="title">{alpha.title}</h5>
                        <p>{alpha.descriptor}</p>
                        <div>{alpha.picture}</div>
                        <p>{JSON.stringify(alpha.tags)}</p>
                    </div>
            })}
            </div>

        </div>
    )
}
