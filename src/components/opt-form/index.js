import React from 'react'
import {name} from './styles/opt-form'

export default function optForm({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}