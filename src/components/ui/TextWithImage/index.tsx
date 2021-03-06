import { ImageSharpFluid } from 'helpers/definitions';
import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

import * as Styled from './styles';

interface Props {
  name: string;
  nick: string;
  position: string;
  email: string;
  image: {
    childImageSharp: {
      gatsbyImageData: ImageSharpFluid;
    };
  };
}

const TextWithImage: React.FC<Props> = ({ name, nick, position, image, email}) => (
  <Styled.TextWithImage>
    <Styled.Image>
      <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={nick} />
    </Styled.Image>
    <Styled.Point />
    <Styled.Details>
      <Styled.Name>{name}</Styled.Name>
      <Styled.NickName>{nick}</Styled.NickName>
      <Styled.Position>{position}</Styled.Position>
      <Styled.Email href={`mailto:${email}`}>{email}</Styled.Email>
    </Styled.Details>
  </Styled.TextWithImage>
);

export default TextWithImage;
