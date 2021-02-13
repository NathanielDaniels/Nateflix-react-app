import React from 'react'
import Jumbotron from '../components/jumbotron'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Jumbotron.Container>
        <Jumbotron.Title><p>Hello</p></Jumbotron.Title>
      </Jumbotron.Container>
    </>
  )
}

export default Home