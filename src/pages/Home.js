import React from 'react'
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/Header';
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'

function Home() {
  return (
    <>
      <HeaderContainer/>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}

export default Home