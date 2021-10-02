import React from 'react';
import * as Styled from './styles';

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <Styled.BlogBody
    className="format-html"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;
