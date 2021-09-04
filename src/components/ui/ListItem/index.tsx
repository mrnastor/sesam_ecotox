import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
}

const ListItem: React.FC<Props> = ({ title, subtitle }) => (
  <Styled.Timeline>
    <Styled.Point />
    <Styled.Details>
      <Styled.Title>{title}</Styled.Title>
      { subtitle ? <Styled.Subtitle>{subtitle}</Styled.Subtitle> : null }
    </Styled.Details>
  </Styled.Timeline>
);

export default ListItem;
