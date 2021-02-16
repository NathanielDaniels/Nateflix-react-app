import React from 'react';
import { Accordion } from '../components'
import faqsData from '../fixtures/faqs.json'

console.log(faqsData.map(item => item.header))

export function FaqsContainer() {
  return (
    <Accordion>
      {faqsData.map(item => (
        <Accordion.Item key={item.key}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}