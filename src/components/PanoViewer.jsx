import React, { Component } from 'react'
import Interactive from 'react-interactive'
import { Switch, Route, Link } from 'react-router-dom'
import PageNotFound from './PageNotFound'

class PanoView extends Component {
  constructor() {
    super()
    this.state = {
      screenX: 0,
      startX: null,
      endX: null,
    }

    this.onDrag = this.drag.bind(this)
    this.onDragStart = this.dragStart.bind(this)
  }

  render() {
    const marginLeft = this.state.screenX - this.state.startX
    
    return (
      <div className='panoview'>
        <img
          alt='Arboretum Panorama'
          className='panoview-image'
          draggable='true'
          onDrag={ this.onDrag }
          onDragStart={ this.onDragStart }
          src='resources/images/panoroma_arboretum_1.jpg'
          style={ { marginLeft } }
        />
      </div>
    )
  }

  drag(event) {
    const screenX = event.screenX
    if (screenX !== 0) {
      this.setState({ screenX })
    }

    event.dataTransfer.setData('text/plain', 'node')

    const target = event.currentTarget
    target.style.cursor = 'grabbing'
  }

  dragStart(event) {
    const x = event.screenX
    console.log('onDragStart ', x)
    if (this.state.startX) {
      const marginLeft = this.state.screenX - this.state.startX
      const startX = x - marginLeft
      const screenX = x
      this.setState({
        screenX,
        startX,
      })
    } else {
      const startX = event.screenX
      this.setState({ startX })
    }

    event.dataTransfer.setData('text/plain', 'node')
  }
}

export default function PanoViewer() {
  return (
    <Switch>
      <Route
        exact path='/panoviewer'
        render={ () => (
          <div>
            <PanoView />
          </div>
        ) }
      />
      <Route component={ PageNotFound } />
    </Switch>
  )
}
