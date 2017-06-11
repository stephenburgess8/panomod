import React, { Component } from 'react'
import Interactive from 'react-interactive'
import { Switch, Route, Link } from 'react-router-dom'
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent'
import PageNotFound from './PageNotFound'

const ExamplePageText = () => (
  <p>
    This is an example page. Refresh the page or copy/paste the url to
    test out the redirect functionality (this same page should load
      after the redirect).
  </p>
)

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
    console.log(this.state.screenX)
    return (
      <div
        className='panoview'
      >
        <img
          alt='Arboretum Panorama'
          className='panoview-image'
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
  }

  dragStart(event) {
    let startX = event.screenX
    console.log('onDragStart ', startX)

    if (this.state.startX) {
      const screenX = 0

      startX += this.state.screenX + this.state.startX
      this.setState({
        screenX,
        startX,
      })
    } else {
      this.setState({ startX })
    }
  }
}

export default function PanoViewer() {
  return (
    <Switch>
      <Route
        exact path='/panoviewer/two-deep'
        render={ ({ location }) => (
          <div>
            <ExamplePageText />
            <ExampleTwoDeepComponent location={ location } />
          </div>
        ) }
      />
      <Route
        exact path='/panoviewer'
        render={ () => (
          <div>
            <PanoView />
            <div>
              <Interactive
                as={ Link }
                to='/panoviewer/two-deep?field1=foo&field2=bar#boom!'
              >Example two deep with query and hash</Interactive>
            </div>
          </div>
        ) }
      />
      <Route component={ PageNotFound } />
    </Switch>
  )
}
