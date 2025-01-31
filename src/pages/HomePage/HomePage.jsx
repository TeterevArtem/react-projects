import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <h1>This is Home page</h1>
      <p>You can choose project page on list below</p>
      <nav>
        <Link to="/counter">Counter</Link>
      </nav>
    </>
  )
}

export default HomePage