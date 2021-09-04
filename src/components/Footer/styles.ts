import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`border-t border-gray-200 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
    margin-left: auto;
  }
`;

export const Left = styled.div`
  ${tw`flex items-center justify-center w-full`};
  justify-content: left;
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mr-3`};
  height: 24px;

  img {
    ${tw``};
  }
`;
