import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface IButtonProps {
  primary?: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 40px;
  background-color: #8257e5;

`;

export const Title = styled.Text`
font-family: Archivo_400Regular;
  color: #FFF;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)<IButtonProps>`
  height: 150px;
  width: 48%;
  background-color: ${props => props.primary ? '#9871f5' : '#04d361' };
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;


`;

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #FFF;
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;