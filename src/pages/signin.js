import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

export default function Signin() {
  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const isInvalid = userPassword === '' || emailAddress === '';

  const handleSignin = event => {
    event.preventDefault();
    console.log("Email: ", emailAddress)
    console.log("Password: ", userPassword)
  }
  
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            {/* <Form.Text>Email</Form.Text> */}
            <Form.Input 
              type="email" 
              placeholder="Email"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              required
            />
            {/* <Form.Text>Password</Form.Text> */}
            <Form.Input 
              type="password" 
              placeholder="Password"
              value={userPassword}
              onChange={({ target }) => setUserPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={isInvalid}>Sign In</Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>

          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}