import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ListItem from 'components/ui/ListItem';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { SectionTitle } from 'helpers/definitions';

interface Research {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      title: string;
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
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const experiences: Research[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {experiences.map((item) => {
        const {
          id,
          html,
          frontmatter: { title }
        } = item.node;

        return (
          <ListItem
            key={id}
            title={title}
          />
        );
      })}
    </Container>
  );
};

export default Research;
