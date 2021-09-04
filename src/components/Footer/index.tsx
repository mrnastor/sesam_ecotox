import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'components/ui/Container';
import Img from 'gatsby-image';

import * as Styled from './styles';
import { ImageSharpFixed } from 'helpers/definitions';

const Footer: React.FC = () => {
  const { fbImage } = useStaticQuery(graphql`
  query {
    fbImage: file(relativePath: { eq: "fbicon.png" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);

  const fbImagePath: ImageSharpFixed = fbImage.childImageSharp.fixed;  
  
  return (
    <Styled.Footer>
      <Container>
        <Styled.Links>
          <Styled.Left>
            Copyright 2021
          </Styled.Left>
          <Styled.Link
            href="https://www.facebook.com/UPLBSESAM.EcotoxLab"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Styled.Image>
              <Img fixed={fbImagePath} alt={'Facebook'} />
            </Styled.Image>
          </Styled.Link>
        </Styled.Links>
      </Container>
    </Styled.Footer>
  )
};

export default Footer;
