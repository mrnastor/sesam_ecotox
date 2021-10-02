import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  extLink?: string;
  date: string;
}

const DateListItem: React.FC<Props> = ({ title, subtitle, extLink, date }) => (
  <Styled.LisItem>
    <Styled.ListDate>{date}</Styled.ListDate>
    <Styled.Details>
      <Styled.Title>{title}</Styled.Title>
      { subtitle ? <Styled.Subtitle>{subtitle}</Styled.Subtitle> : null }
      { extLink ? <Styled.ExtLink href={extLink} target="_blank">{extLink}</Styled.ExtLink> : null }
    </Styled.Details>
  </Styled.LisItem>
);

export default DateListItem;
