import React from 'react';

import { Container, TeacherListScroll } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView } from 'react-native';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />


      <TeacherListScroll
        contentContainerStyle={{
          
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