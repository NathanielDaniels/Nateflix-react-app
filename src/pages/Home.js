import React from 'react'
import { OptForm, Featured } from '../components'
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'

function Home() {
  return (
    <>
      <HeaderContainer>
        <Featured>
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

export default Home