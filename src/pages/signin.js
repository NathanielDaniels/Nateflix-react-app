import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes'
// import { Link } from 'react-router-dom';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const [demo, setDemo] = useState(false)

  console.log("Demo Start",demo)

  const isInvalid = userPassword === '' || emailAddress === '';

  const handleSignin = event => {
    event.preventDefault();

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

  const handleDemo = () => {
    console.log("demo clicked")
    setDemo(demo => !demo)
    console.log("demo after click", demo)
    // if (demo) {
    setEmailAddress("demo@demo.com")
    setUserPassword("demo")
    // history.push(ROUTES.BROWSE);
    
    console.log(emailAddress, userPassword)
    // }
  }
  
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input 
              type="email" 
              placeholder="Email"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              required
            />
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

            <Form.Demo 
              onClick={() => handleDemo()}
              // onChange={() => {
              //   setEmailAddress("demo@demo.com")
              //   setUserPassword("demo")
              // }}
              type="button"
            >
              Demo
            </Form.Demo>

            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>

          </Form.Base>
        </Form>

        {/* <Form.Demo onClick={() => {
          console.log('demo Clicked')
          return handleDemo
        }}>
          Demo
        </Form.Demo> */}

      </HeaderContainer>
      <FooterContainer />
    </>
  )
}