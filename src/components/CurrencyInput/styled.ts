import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';
import { fontFamilies } from 'theme';

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const Input = styled(CurrencyInput)`
  font-family: ${fontFamilies.rubik};
  border: none;
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blueGray600};
  width: 100%;

  &:focus {
    outline: none;
  }
`;
