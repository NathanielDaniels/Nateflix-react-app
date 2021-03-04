import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes'

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = userPassword === '' || emailAddress === '';

  const handleSignin = event => {
    event.preventDefault();
    // console.log("Email: ", emailAddress)
    // console.log("Password: ", userPassword)

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, userPassword)
      .then(() => {
          setEmailAddress('');
          setUserPassword('');
          setError('');
          history.push(ROUTES.BROWSE);
      })
      .catch((error) => setError(error.message));
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