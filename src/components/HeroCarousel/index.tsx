import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';

import { ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

const Carousel = Loadable(() => import('components/ui/Carousel'));

interface HeroCarousel {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const HeroCarousel: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "carousel" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 200, maxHeight: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const testimonials: HeroCarousel[] = allMarkdownRemark.edges;

  return (
    <Styled.CaroContainer section>
      <Styled.Testimonials>
        <Carousel>
          {testimonials.map((item) => {
            const {
              id,
              frontmatter: { cover, title }
            } = item.node;

            return (
              <Styled.Testimonial key={id}>
                <Styled.Image>
                  <Img fluid={cover.childImageSharp.fluid} alt={title} />
                </Styled.Image>
              </Styled.Testimonial>
            );
          })}
        </Carousel>
      </Styled.Testimonials>
    </Styled.CaroContainer>
  );
};

export default HeroCarousel;
