import React from 'react';
import { Footer } from '../components';
// import { Container } from "../components/footer/index"

export function FooterContainer() {
  return (
    <Footer>
    <Footer.Title>Questions? Contact Us.</Footer.Title>
    <Footer.Break />
    <Footer.Row>
      <Footer.Column>
        <Footer.Link href="#">FAQs</Footer.Link>
      </Footer.Column>
    </Footer.Row>
    </Footer>
  )
}