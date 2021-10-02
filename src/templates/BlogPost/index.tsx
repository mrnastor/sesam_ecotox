import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Gallery from '@browniebroke/gatsby-image-gallery'
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface GalleryImage {
  childImageSharp: {
    thumb: IGatsbyImageData
    full: IGatsbyImageData
    meta: {
      originalName: string
    }
  }
}

interface Post {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    latest?: boolean;
    galleryImages : GalleryImage[]
  };
}

interface Props {
  data: {
    markdownRemark: Post;
  };
  pageContext: {
    slug: string;
    next: Post;
    previous: Post;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  const images = post.frontmatter.galleryImages && post.frontmatter.galleryImages.map((node) => {
    return {
       ...node.childImageSharp,
       caption: node.childImageSharp.meta.originalName,
    }
  })

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        <TitleSection title={post.frontmatter.date} subtitle={post.frontmatter.title} />
        <FormatHtml content={post.html} />
        { images &&
        <Styled.SGallery>
          <Gallery images={images}/>
        </Styled.SGallery>
        }
        <Styled.Links>
          <span>
            {previous && !post.frontmatter.latest && (
              <Link to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </Styled.Links>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        latest
        galleryImages {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
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
`;
