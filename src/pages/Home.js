import React from 'react'
import { FaqsContainer } from '../containers/faqs';
import { JumbotronContainer } from '../containers/jumbotron'
import { OptFormContainer } from '../containers/opt-form'
import { FooterContainer } from '../containers/footer'

function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <OptFormContainer/>
      <FooterContainer />
    </>
  )
}

export default Home