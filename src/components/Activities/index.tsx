import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Link from 'gatsby-link';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { ImageSharpFluid, SectionTitle } from 'helpers/definitions';
import DateListItem from 'components/ui/DateListItem';
import * as Styled from './styles';

interface Activity {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        childImageSharp: {
          gatsbyImageData: ImageSharpFluid;
        };
      };
    };
  };
}

const Activities: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "blog section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  gatsbyImageData(
                    width: 800
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const activities: Activity[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <Styled.ActLink to="/blog">
        <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      </Styled.ActLink>
      {activities.map((item) => {
        const {
          id,
          fields: { slug },
          frontmatter: { title, date }
        } = item.node;

        return (
          <Link to={slug}>
            <DateListItem
              key={id}
              title={title}
              date={date}
            >
            </DateListItem>
          </Link>
        );
      })}
    </Container>
  );
};

export default Activities;
