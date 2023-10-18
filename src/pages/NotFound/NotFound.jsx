import React from 'react';
// import { Link } from 'react-router-dom';
import IMG404 from '../../components/Pictures/goose_404.png';
import {
  BackButton,
  BackHome,
  BoxNotFoundPage,
  ContainerNotFoundPage,
  Image,
  ImagePosition,
  Text404,
  TitleNotFoundPage,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <ContainerNotFoundPage>
      <BoxNotFoundPage>
        <ImagePosition>
          <TitleNotFoundPage>4</TitleNotFoundPage>
          <Image src={IMG404} alt="Goose" />
          <TitleNotFoundPage>4</TitleNotFoundPage>
        </ImagePosition>
        <Text404>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Text404>
        <BackButton>
          <BackHome to="/">Back to home</BackHome>
        </BackButton>
      </BoxNotFoundPage>
    </ContainerNotFoundPage>
  );
};

export default NotFound;
