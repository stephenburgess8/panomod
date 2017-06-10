import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import Interactive from 'react-interactive'

const breadCrumbTitles = {
  '': 'Home',
  panoviewer: 'Panoviewer',
  'two-deep': 'Two Deep',
}

function BreadcrumbsItem({ match }) {
  const title = breadCrumbTitles[match.url.split('/').slice(-1)]
  const to = title === undefined ? '/' : match.url

  return (
    <span className='pano-breadcrumb'>
      <Interactive
        as={ Link }
        to={ to }
      >
        { title || 'Page Not Found' }
      </Interactive>
      { !match.isExact && title && ' / ' }
      { title &&
        <Route
          component={ BreadcrumbsItem }
          path={ `${ match.url === '/' ? '' : match.url }/:path` }
        />
      }
    </span>
  )
}

BreadcrumbsItem.propTypes = {
  match: PropTypes.object.isRequired,
}

export default function Breadcrumbs() {
  return (
    <Route
      className='pano-breadcrumbs'
      component={ BreadcrumbsItem }
      path='/'
    />
  )
}
