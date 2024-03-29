import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Header, Loading, Card, Player } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'
import { useAuthListener } from '../hooks'

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  // const [clientWidth, setClientWidth] = useState('')

  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout
  }, [profile.displayName]) 

  
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      isCaseSensitive: false,
      keys: ['data.title','data.genre'],
    })

    const results = fuse.search(searchTerm).map(({item}) => item)

    if (slideRows.length > 0 && searchTerm.length > 3  && results.length > 0) {
      setSlideRows(results)
    } else {
      setSlideRows(slides[category]);
    }

    // console.log(results.map(item => item.data.map(movie => movie.title === searchTerm ? movie.title : "No movie with Title")))

    return () => {}
  }, [searchTerm])

  return profile.displayName ? (
    <>
      { loading ? <Loading src={user.photoURL}/> : <Loading.ReleaseBody/> }
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
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => {
                    setProfile({})
                    firebase.auth().signOut()
                  }}>
                    Sign out
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>

      </Header>

        <Card.Group>
          {slideRows.map(slideItem => (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>

              <Card.Title>{slideItem.title}</Card.Title>

              <Card.Wrapper>

                <Card.Pagination>
                  <Card.Arrow className="left-arrow" src='/images/icons/chevron-right.png'/>
                </Card.Pagination>

                <Card.Entities>
                  {slideItem.data.map(item => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} alt={item.title} />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>

                <Card.Pagination>
                  <Card.Arrow src='/images/icons/chevron-right.png'/>
                </Card.Pagination>
              </Card.Wrapper>

              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4"/>
                </Player>
              </Card.Feature>

            </Card>
          ))}
        </Card.Group>

      <FooterContainer />
    </>)
    : (<SelectProfileContainer user={ user } setProfile={ setProfile } />);
}