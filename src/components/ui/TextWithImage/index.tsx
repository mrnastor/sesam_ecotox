import { ImageSharpFluid } from 'helpers/definitions';
import React from 'react';
import Img from 'gatsby-image';

import * as Styled from './styles';

interface Props {
  name: string;
  nick: string;
  position: string;
  image: {
    childImageSharp: {
      fluid: ImageSharpFluid;
    };
  };
}

const TextWithImage: React.FC<Props> = ({ name, nick, position, image}) => (
  <Styled.TextWithImage>
    <Styled.Image>
      <Img fluid={image.childImageSharp.fluid} alt={nick} />
    </Styled.Image>
    <Styled.Point />
    <Styled.Details>
      <Styled.Name>{name}</Styled.Name>
      <Styled.NickName>{nick}</Styled.NickName>
      <Styled.Position>{position}</Styled.Position>
    </Styled.Details>
    {/* <Styled.Content>{content}</Styled.Content> */}
  </Styled.TextWithImage>
);

export default TextWithImage;
