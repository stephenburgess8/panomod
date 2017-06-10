import React from 'react'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'
import { Code } from '../styles/style'

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as='a'
      href='https://github.com/stephenburgess8/panomod#readme'
    >{text}</Interactive>
  )

  return (
    <div>
      <p>
        Panomod for life.
      </p>
      <p>
        This is an example single page app built
        with React and React&nbspRouter using {' '}
        <Code>BrowserRouter</Code>. Navigate with the links below and
        refresh the page or copy/paste the url to test out the redirect
        functionality deployed to overcome GitHub&nbspPages incompatibility
        with single page apps (like this one).
      </p>
      <p>
        Please see the {repoReadmeLink('repo readme')} for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </p>
      <div>
        <Interactive
          as={ Link }
          to='/panoviewer'
        >Panoview</Interactive>
      </div>
      <div>
        <Interactive
          as={ Link }
          to='/panoviewer/two-deep?field1=foo&field2=bar#boom!'
        >Example two deep with query and hash</Interactive>
      </div>
    </div>
  )
}
