import React from 'react';
import {Container, Title, SubTitle} from './styles/featured';

export default function Featured({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Featured.Title = function featuredTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Featured.SubTitle = function featuredSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}