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
      <div>
        <Interactive
          as={ Link }
          to='/panoviewer'
        >Panoview</Interactive>
      </div>
    </div>
  )
}
