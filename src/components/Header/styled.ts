import styled from 'styled-components';
import { mediaQueries } from 'theme';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.neutralWhite};
  padding: 16px;

  ${mediaQueries.desktop} {
    padding: 24px 56px;
  }
`;
