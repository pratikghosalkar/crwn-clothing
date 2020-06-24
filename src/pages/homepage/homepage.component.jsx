import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

export const HomePage = () => {
  return (
    <HomePageContainer className="homepage">
      <Directory />
    </HomePageContainer>
  );
};
