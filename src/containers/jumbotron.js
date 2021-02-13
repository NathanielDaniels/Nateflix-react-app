import React from 'react'
import Jumbotron from '../components/jumbotron'
import jumboData from '../fixtures/jumbo.json';

function jumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Title><p>{item.title}</p></Jumbotron.Title>
          <Jumbotron.SubTitle><p>{item.subTitle}</p></Jumbotron.SubTitle>
          {/* <Jumbotron.Image></Jumbotron.Image> */}
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  )
}

export default jumbotronContainer
