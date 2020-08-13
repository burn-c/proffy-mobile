import React, { ReactNode } from 'react';

import { Container, TopBar, Header, Title } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation, NavigationHelpersContext } from '@react-navigation/native';

interface IPageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container >
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Header>

        <Title>{title}</Title>
        {headerRight}
      </Header>

      {children}
    </Container>
  );
}

export default PageHeader;