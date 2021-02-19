import React from 'react';
import { Accordion, OptForm } from '../components'
import faqsData from '../fixtures/faqs.json'

console.log(faqsData.map(item => item.header))

export function FaqsContainer() {
  return (
    <Accordion>
    <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
      {faqsData.map(item => (
        <Accordion.Item key={item.key}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart
          your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email Address"/>
        <OptForm.Button>Try It Now</OptForm.Button>
      </OptForm>

    </Accordion>
  )
}



