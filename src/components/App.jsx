import React from 'react'
import Interactive from 'react-interactive'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import PanoViewer from './PanoViewer'
import PageNotFound from './PageNotFound'
import Breadcrumbs from './Breadcrumbs'

import '../styles/panomod'

export default function App() {
  return (
    <div className='panomod'>
      <div className='pano-container'>
        <h1 className='pano-title'>Panomod Panorama Viewer</h1>

        <nav>
          <Breadcrumbs />
        </nav>

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/panoviewer' component={ PanoViewer } />
          <Route component={ PageNotFound } />
        </Switch>
      </div>
      <div className='pano-footer'>
        <Interactive
          as='a'
          className='pano-link'
          href='http://www.uxstephen.com'
          interactiveChild
          focus={ {} }
          touchActive={ {} }
          touchActiveTapOnly
        >
          Code and concept by <i className='name-person'>Stephen Burgess</i>
        </Interactive>
      </div>
    </div>
  )
}
