import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import { Background, Container, Logo, ButtonLink } from './styles/header'

export default function Header({bg = true, children, ...restProps}) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
  return (
    <ReachRouterLink to={to}>
      {/* <Logo {...restProps}/> */}
      <Logo {...restProps}>Nateflix</Logo>
    </ReachRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}
// Header.Menu = function HeaderMenu({children, ...restProps}) {
//   <Menu {...restProps}>{children}</Menu>
// }

// Header.Item = function HeaderItem({children, ...restProps}) {
//   <Item {...restProps}>{children}</Item>
// }