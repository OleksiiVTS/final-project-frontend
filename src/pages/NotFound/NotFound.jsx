import React from 'react';
// import { Link } from 'react-router-dom';
import IMG404 from '../../components/Pictures/goose_404.jpeg';
import {
  BackButton,
  BackHome,
  Image,
  ImagePosition,
  Title,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <ImagePosition>
        <Title>4</Title>
        <Image src={IMG404} alt="Goose" />
        <Title>4</Title>
      </ImagePosition>
      <BackButton>
        <BackHome>Back to home</BackHome>
      </BackButton>
    </>
  );
};

export default NotFound;
