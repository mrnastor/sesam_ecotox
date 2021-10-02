import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'components/ui/Container';
import { GatsbyImage } from "gatsby-plugin-image"

import * as Styled from './styles';
import { ImageSharpFixed } from 'helpers/definitions';

const Footer: React.FC = () => {
  const { fbImage } = useStaticQuery(graphql`
  query {
    fbImage: file(relativePath: { eq: "fbicon.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 24
          height: 24
        )
      }
    }
  }
`);

  const fbImagePath: ImageSharpFixed = fbImage.childImageSharp.gatsbyImageData;

  return (
    <Styled.Footer>
      <Container>
        <Styled.Links>
          <Styled.Left>
            © 2021
          </Styled.Left>
          <Styled.Link
            href="https://www.facebook.com/UPLBSESAM.EcotoxLab"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Styled.Image>
              <GatsbyImage image={fbImagePath} alt={'Facebook'} />
            </Styled.Image>
          </Styled.Link>
        </Styled.Links>
      </Container>
    </Styled.Footer>
  )
};

export default Footer;
