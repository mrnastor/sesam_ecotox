import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const LisItem = styled.div`
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

export const Title = styled.div`
  ${tw`font-semibold mt-0`};
`;

export const Subtitle = styled.div`
  ${tw`text-xs`};
`;

export const Date = styled.div`
  ${tw`text-xs border  border-teal-400 rounded-full px-2`};
  width: fit-content;
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-indigo-200 bg-indigo-100 rounded-full absolute`};
  left: -6px;
  top: 22px;
`;

export const ExtLink = styled.a`
  ${tw`text-xs`};
`;

export const ListDate = styled.h3`
  ${tw`text-xs text-indigo-500`};
  min-width: 90px;
  margin-top: 4px;
`;
