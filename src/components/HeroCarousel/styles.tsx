import Container from 'components/ui/Container';
import { StyledProps } from 'components/ui/Container/styles';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Testimonials = styled.div`
  ${tw`max-w-screen-sm mx-auto w-full sm:mb-4`};
`;

export const Testimonial = styled.div`
  ${tw`flex flex-col items-center text-center mt-4`};
`;

export const Image = styled.figure`
  ${tw`mx-auto`};

  img {
    ${tw`border-4 border-white`};
  }
`;

export const Title = styled.h3`
  ${tw`font-semibold my-4`};
`;

export const CaroContainer = styled.div<StyledProps>`
  ${tw`flex flex-wrap max-w-screen-md w-full mx-auto`};
  ${({ section }) => section && tw`py-0 mb-10 md:mb-5 sm:py-0`};
`;
