import React from 'react'
import Jumbotron from '../components/jumbotron'

function Home() {
  return (
    <>
      <Jumbotron.Container>
        <Jumbotron.Title><p>Hello</p></Jumbotron.Title>
        <Jumbotron.SubTitle><p>Welcome to Jumbotron</p></Jumbotron.SubTitle>
        {/* <Jumbotron.Image></Jumbotron.Image> */}
      </Jumbotron.Container>
    </>
  )
}

export default Home