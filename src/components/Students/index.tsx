import React from 'react';

import ListItem from 'components/ui/ListItem';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import * as Styled from './styles';

import StudentData from '../../data/students/students.json'

interface Student {
  name: string;
  thesisTopic: string;
  graduated?: boolean;
}

interface Students {
  title: string;
  msLabel: string;
  phdLabel: string;
  msStudents: Student[];
  phdStudents: Student[];
}

const Students: React.FC = () => {

  const msStudents: Student[] = StudentData.msStudents;
  const phdStudents: Student[] = StudentData.phdStudents;

  return (
    <Container section>
      <TitleSection title={''} subtitle={StudentData.title} />

      <Styled.PostDoc>{StudentData.msLabel}</Styled.PostDoc>

      {msStudents.map((item, i) => {
        const {
          name,
          thesisTopic,
          graduated,
        } = item;

        const nameString = graduated ? `${name} (Graduated)` : name

        return (
          <ListItem
            key={name}
            title={nameString}
            subtitle={thesisTopic}
          />
        );
      })}

      <Styled.PostDoc>{StudentData.phdLabel}</Styled.PostDoc>

      {phdStudents.map((item, i) => {
        const {
          name,
          thesisTopic,
        } = item;

        return (
          <ListItem
            key={name}
            title={name}
            subtitle={thesisTopic}
          />
        );
      })}
    </Container>
  );
};

export default Students;
