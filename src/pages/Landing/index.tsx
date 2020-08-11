import React from 'react';
import { Image } from 'react-native';

import { Container, Title, TitleBold, Button, ButtonsContainer, ButtonText, TotalConnections } from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  return <Container>
    <Image source={landingImg} />

    <Title>
      Seja bem-vindo, {'\n'}
      <TitleBold>
        O que deseja fazer?
      </TitleBold>
    </Title>

    <ButtonsContainer>
      <Button primary>
        <Image source={studyIcon} />

        <ButtonText>Estudar</ButtonText>
      </Button>

      <Button >
        <Image source={giveClassesIcon} />

        <ButtonText>Dar aulas</ButtonText>
      </Button>
    </ButtonsContainer>

    <TotalConnections>
      Total de 356 conexões já realizadas {' '}
      <Image source={heartIcon} />
    </TotalConnections>
  </Container>
}

export default Landing;