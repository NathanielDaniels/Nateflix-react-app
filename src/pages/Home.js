import React from 'react'
import { OptForm, Featured } from '../components'
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Featured>
          <Featured.Title>Unlimited films, TV programmes and more.</Featured.Title>
          <Featured.SubTitle>Watch anywhere. Cancel at any time.</Featured.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart
            your membership.</OptForm.Text>
          </OptForm>
        </Featured>
        
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}