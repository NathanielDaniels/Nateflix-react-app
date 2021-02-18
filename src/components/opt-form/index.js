import React from 'react'
import {Container} from './styles/opt-form'

export default function optForm({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}