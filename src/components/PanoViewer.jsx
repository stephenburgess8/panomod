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
    }

    this.onDrag = this.drag.bind(this)
  }

  render() {
    const marginLeft = this.state.screenX

    return (
      <div
        className='panoview'
      >
        <img
          alt='Arboretum Panorama'
          className='panoview-image'
          onDrag={ this.onDrag }
          src='resources/images/panoroma_arboretum_1.jpg'
          style={ { marginLeft } }
        />
      </div>
    )
  }

  drag(event) {
    const screenX = event.screenX
    console.log(screenX)
    this.setState({ screenX })
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
