import React, { useState } from 'react';

import { Container, TeacherListScroll, SearchForm, Label, Input, InputGroup, InputBlock, SubmitButton, SubmitButtonText } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons'

const TeacherList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  return (
    <Container>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#fff" />
        </BorderlessButton>
      )} >
      {isFilterVisible && (
         <SearchForm>
         <Label>Matéria</Label>
         <Input
           placeholder="Qual a matéria?"
           placeholderTextColor="#c1bccc"
         />

         <InputGroup>
           <InputBlock>
             <Label>Dia da semana</Label>
             <Input
               placeholder="Qual dia?"
               placeholderTextColor="#c1bccc"
             />
           </InputBlock>

           <InputBlock>
             <Label>Horário</Label>
             <Input
               placeholder="Qual horário?"            placeholderTextColor="#c1bccc"

             />
           </InputBlock>

         </InputGroup>

         <SubmitButton>
           <SubmitButtonText>Filtrar</SubmitButtonText>
         </SubmitButton>
       </SearchForm>
    
      )}
      </PageHeader>


      <TeacherListScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />

      </TeacherListScroll>
    </Container>
  );
}

export default TeacherList;