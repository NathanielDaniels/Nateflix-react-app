import React from 'react'
import { Container } from './styles/loading'

export default function loading({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}