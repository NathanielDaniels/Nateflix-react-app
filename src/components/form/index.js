import React from 'react';
import {Container} from './styles/form'

export function Form({children, ...restProps}) {
  return <Form {...restProps}>{children}</Form>
}

Form.Container = function formContainer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}