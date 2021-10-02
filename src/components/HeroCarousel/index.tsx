import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
          gatsbyImageData: ImageSharpFluid;
        };
      };
    };
  };
}

interface CarouselImage {
  childImageSharp: {
    gatsbyImageData: ImageSharpFluid;
  };
}

interface FrontMatter {
  title: string;
  subtitle: string;
  images: CarouselImage[]
}

const HeroCarousel: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "carousel section" } }) {
        frontmatter {
          title
          subtitle
          images {
            childImageSharp {
              gatsbyImageData(
                height: 300
                width: 500
              )
            }
          }
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "carousel" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(
                    height: 300
                    width: 500
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const fmatter: FrontMatter = markdownRemark.frontmatter;

  return (
    <Styled.CaroContainer section>
      <Styled.Testimonials>
        <Carousel>
          {fmatter.images.map((item, index) => {
            const {
              gatsbyImageData
            } = item.childImageSharp;

            return (
              <Styled.Testimonial key={index}>
                <Styled.Image>
                  <GatsbyImage image={gatsbyImageData} alt={''} />
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
