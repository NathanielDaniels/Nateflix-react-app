import React, { useState, useContext } from 'react';
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'
// import { HeaderContainer } from './header'


export function BrowseContainer() {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  // console.log(category)

  const { firstbase } = useContext(FirebaseContext)

  const user = {
    displayName: "Nathan",
    photoURL: "2"
  }

  return profile.displayName ? (
    <>
        <Header src="joker1" dontShowOnSmallViewPort >
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} alt="Nateflix"/>
              <Header.TextLink 
                active={ category === 'series' ? 'true' : 'false' }
                OnClick={ () => setCategory('series') }>
                Series
              </Header.TextLink>
              <Header.TextLink 
                active={ category === 'films' ? 'true' : 'false' }
                OnClick={ () => setCategory('films') }>
                Films
              </Header.TextLink>
            </Header.Group>
          </Header.Frame>
        </Header>
        <FooterContainer />
    </>)
    : (<SelectProfileContainer user={ user } setProfile={setProfile} />);
}