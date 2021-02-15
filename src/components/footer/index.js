import React from 'react'
import { Container } from './styles/footer'

export default function Footer({ children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

// Footer.container = ({children, ...restProps}) => {
//   return <Footer {...restProps}>{children}</Footer>
// }