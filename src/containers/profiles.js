import userEvent from '@testing-library/user-event';
import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function SelectProfileContainer() {
    return (
      <>
        <Header bg={ false }>
          <Header.Frame>
            <Header.Logo to={ ROUTES.HOME } alt="Nateflix"/>
          </Header.Frame>
        </Header>
        <Profiles>
          <Profiles.Title>Who's watching?</Profiles.Title>
          <Profiles.User onClick={() => setProfile({
            displayName: user.displayName,
            photoURL: user.photoURL
          })}>
            <Profiles.Picture src={ userEvent.photoURL } />
            <Profiles.Name>{ userEvent.displayName }</Profiles.Name>
          </Profiles.User>
        </Profiles>
      </>
    )
}