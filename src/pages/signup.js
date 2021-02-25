import React, {useState} from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const isInvalid = firstName === '' || userPassword === '' || emailAddress === '';

  const handleSignup = event => {
    event.preventDefault();

    console.log("Name: ", firstName)
    console.log("Email: ", emailAddress)
    console.log("Password: ", userPassword)
  }

  return (
    <>
      <HeaderContainer>
        <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit={handleSignup} method="POST">
              {/* <Form.Text>Email</Form.Text> */}
              <Form.Input 
                type="text" 
                placeholder="First Name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
                required
              />
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
                autoComplete="off"
                placeholder="Password"
                value={userPassword}
                onChange={({ target }) => {
                  setUserPassword(target.value)
                  if (userPassword.split('').length = 0) {
                    console.log('not valid password')
                  }
                }}
              />
              <Form.Submit type="submit" disabled={isInvalid}>Sign Up</Form.Submit>

              <Form.Text>
                Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
              </Form.Text>

              <Form.TextSmall>
                This page is protected by Google reCAPTCHA.
              </Form.TextSmall>

            </Form.Base>
          </Form>
      </HeaderContainer>
      <FooterContainer/>
    </>
  )
}