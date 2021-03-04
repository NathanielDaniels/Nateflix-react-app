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
  const [searchTerm, setSearchTerm] = useState('');

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
              <Header.Link 
                active={ category === 'series' ? 'true' : 'false' }
                onClick={ () => setCategory('series') }>
                Series
              </Header.Link>
              <Header.Link 
                active={ category === 'films' ? 'true' : 'false' }
                onClick={ () => setCategory('films') }>
                Films
              </Header.Link>
            </Header.Group>

            <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Header.Group>
          </Header.Frame>

          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
              City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
              futile attempt to feel like he's part of the world around him.
            </Header.Text>
          </Header.Feature>

          <Header.PlayButton>Play</Header.PlayButton>
        </Header>
        <FooterContainer />
    </>)
    : (<SelectProfileContainer user={ user } setProfile={setProfile} />);
}