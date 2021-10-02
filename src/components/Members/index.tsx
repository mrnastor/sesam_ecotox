import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TextWithImage from 'components/ui/TextWithImage';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { ImageSharpFluid, SectionTitle } from 'helpers/definitions';
import * as Styled from './styles';

interface Member {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      name: string;
      nick: string;
      position: string;
      rank: string;
      image: {
        childImageSharp: {
          gatsbyImageData: ImageSharpFluid;
        };
      };
    };
  };
}

const Members: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "members section" } }) {
        frontmatter {
          title
          subtitle
          headLabel
          staffLabel
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "member" }
      } }
        sort: { order: ASC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              name
              nick
              rank
              position
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 200
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
  const members: Member[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      <Styled.Rank>{sectionTitle.headLabel}</Styled.Rank>

      {members.filter((m) => m.node.frontmatter.rank === 'head').map((item) => {
        const {
          id,
          html,
          frontmatter: { name, nick, position, image }
        } = item.node;

        return (
          <TextWithImage
            key={id}
            name={name}
            nick={nick}
            position={position}
            image={image}
          />
        );
      })}

      <Styled.Rank>{sectionTitle.staffLabel}</Styled.Rank>

      {members.filter((m) => m.node.frontmatter.rank === 'staff').map((item) => {
        const {
          id,
          html,
          frontmatter: { name, nick, position, image }
        } = item.node;

        return (
          <TextWithImage
            key={id}
            name={name}
            nick={nick}
            position={position}
            image={image}
          />
        );
      })}
    </Container>
  );
};

export default Members;
