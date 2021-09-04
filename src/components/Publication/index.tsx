import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ListItem from 'components/ui/ListItem';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import * as Styled from './styles';

import { SectionTitle } from 'helpers/definitions';

interface Publication {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      title: string;
      subtitle?: string;
    };
  };
}

const Publication: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "publications section" } }) {
        frontmatter {
          title
          subtitle
          recentLabel
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "publication" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              subtitle
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const publications: Publication[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      <Styled.Subsection>{sectionTitle.recentLabel}</Styled.Subsection>  

      {publications.map((item) => {
        const {
          id,
          html,
          frontmatter: { title, subtitle }
        } = item.node;

        return (
          <ListItem
            key={id}
            title={title}
            subtitle={subtitle}
          />
        );
      })}
    </Container>
  );
};

export default Publication;
