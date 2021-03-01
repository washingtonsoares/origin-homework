import styled from 'styled-components';
import { breakpoints } from 'theme';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.neutralWhite};
  padding: 16px;

  @media ${breakpoints.desktop} {
    padding: 24px 56px;
  }
`;
