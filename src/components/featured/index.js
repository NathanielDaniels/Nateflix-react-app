import React from 'react'
import {Container, Title, Subtitle} from './styles/featured'

export default function Featured({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Featured.Title = function featuredTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Featured.Subtitle = function featuredSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}