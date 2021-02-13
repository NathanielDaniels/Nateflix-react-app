import React from 'react'
import {Item, Inner, Container, Title} from './styles/jumbotron'


function Jumbotron({children, direction = "row", ...restProps}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}
Jumbotron.Title = function JumbotronContainer({ children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

export default Jumbotron