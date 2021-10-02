import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ListItem from 'components/ui/ListItem';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { GalleryImage, SectionTitle } from 'helpers/definitions';
import Gallery from '@browniebroke/gatsby-image-gallery';
import * as Styled from './styles';

interface Research {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      title: string;
      posterImages : GalleryImage[]
    };
  };
}

const Research: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "researches section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "research" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              posterImages {
                childImageSharp {
                  thumb: gatsbyImageData(
                    width: 500
                    height: 270
                    placeholder: BLURRED
                  )
                  full: gatsbyImageData(layout: FULL_WIDTH)
                  meta: fixed {
                    originalName
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const researches: Research[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {researches.map((item) => {
        const {
          id,
          html,
          frontmatter: { title, posterImages }
        } = item.node;

        const images = posterImages && posterImages.map((node) => {
          return {
             ...node.childImageSharp,
             caption: node.childImageSharp.meta.originalName,
          }
        })

        return (
          <>
            <ListItem
              key={id}
              title={title}
            />
            {images && <Gallery images={images} customWrapper={Styled.PGallery} /> }
          </>
        );
      })}
    </Container>
  );
};

export default Research;
