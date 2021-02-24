import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';

export default function Signin() {
  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSignin = event => {
    event.preventDefault();
    console.log("Email: ", emailAddress)
    console.log("Password: ", userPassword)
    
  }
  
  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Text>Email</Form.Text>
          <Form.Input 
            type="email" 
            placeholder="Email"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
            required
          />
          <Form.Text>Password</Form.Text>
          <Form.Input 
            type="password" 
            placeholder="Password"
            value={userPassword}
            onChange={({ target }) => setUserPassword(target.value)}
          />
          <Form.Submit>Submit</Form.Submit>
        </Form.Base>
      </Form>
    </HeaderContainer>
  )
}