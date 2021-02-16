import React from 'react';
import { Accordion } from '../components'
import faqsData from '../fixtures/faqs.json'

console.log(faqsData.map(item => item.header))

export function FaqsContainer() {
  return (
    <Accordion>
      {/* <Accordion.Title>Frequently Asked Questions</Accordion.Title> */}
      {faqsData.map(item => <Accordion.Title>{item.header}</Accordion.Title>)}
      
    </Accordion>
  )
}