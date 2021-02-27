import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};
  border-radius: 4px;
  padding: 20px;
  display: flex;
`;

export const Currency = styled.span`
  margin-right: 13px;
  color: ${({ theme }) => theme.colors.blueGray100};
  font-size: 24px;
`;

export const Input = styled(CurrencyInput)`
  border: none;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blueGray600};
`;
