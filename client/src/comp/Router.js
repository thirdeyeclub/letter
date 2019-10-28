import React from 'react'
import { Route } from 'react-router-dom'

// routes
//main pages
import Intro from './Home/Pages/Intro'
import Project from './Home/Pages/Projects';
import Contact from './Home/Pages/Contact';
//sub pages
import Safe from './Home/Pages/project-pages/Safe.js'
import Sup from './Home/Pages/project-pages/Sup.js'
import VR from './Home/Pages/project-pages/VR.js'
import Slack from './Home/Pages/project-pages/Slack.js'
import Mentor from './Home/Pages/project-pages/Mentor'


export default () =>{
    return(
        <>
        <Route path={'/'} exact component={Intro} />
        <Route path={'/check-this-out'} exact component={Project} />
        <Route path={'/work-with-me'} exact component={Contact} />

        <Route path={'/project-1'} exact component={Safe} />
        <Route path={'/project-2'} exact component={Sup} />
        <Route path={'/project-3'} exact component={VR} />
        <Route path={'/project-4'} exact component={Slack} />
        <Route path={'/project-5'} exact component={Mentor} />
        </>
    )
}