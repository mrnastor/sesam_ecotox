import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  extLink?: string;
}

const ListItem: React.FC<Props> = ({ title, subtitle, extLink }) => (
  <Styled.LisItem>
    <Styled.Point />
    <Styled.Details>
      <Styled.Title>{title}</Styled.Title>
      { subtitle ? <Styled.Subtitle>{subtitle}</Styled.Subtitle> : null }
      { extLink ? <Styled.ExtLink href={extLink} target="_blank">{extLink}</Styled.ExtLink> : null }
    </Styled.Details>
  </Styled.LisItem>
);

export default ListItem;
