import React from 'react'
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'

function Home() {
  return (
    <>
      <HeaderContainer>
        <p>Hello</p>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}

export default Home