import React from 'react';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import { Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio, Footer, Price, PriceValue, ButtonsContainer, FavoriteButton, ContactButton, ContactButtonText } from './styles';
import { Image } from 'react-native';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar
          source={{ uri: 'https://github.com/burn-c.png' }}
        />

        <ProfileInfo>

          <Name>Carlos Oliveira</Name>
          <Subject>Música</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Aqui tem uma biografia muito linda, sabe como é né ?
        {'\n'}
        {'\n'}
        Texto Muito Bonita cara!!


        Aqui tem uma biografia muito linda, sabe como é né ?
        {'\n'}
        Texto Muito Bonita cara!!
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton>
            <Image source={heartOutlineIcon} />
          </FavoriteButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>

    </Container>
  );
}

export default TeacherItem;