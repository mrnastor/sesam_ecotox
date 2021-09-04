import styled from 'styled-components';
import tw from 'tailwind.macro';

export const TextWithImage = styled.div`
  ${tw`flex flex-col sm:flex-row w-full p-4 relative border-indigo-200`};

  &:last-child {
    ${tw`pb-0`};
  }
`;

export const Details = styled.div`
  ${tw`w-full sm:w-full`};
`;

export const Content = styled.div`
  ${tw`w-full sm:w-2/3 mt-4 sm:mt-0`};
`;

export const Name = styled.div`
  ${tw`font-semibold mt-3`};
`;

export const NickName = styled.div`
  ${tw`text-xs`};
`;

export const Position = styled.div`
  ${tw`text-xs`};
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-indigo-200 bg-indigo-100 rounded-full absolute`};
  left: -6px;
  top: 20px;
  display: none;
`;

export const Image = styled.figure`
  ${tw`w-40 h-40 mr-10`};
`;
