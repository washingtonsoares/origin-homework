import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';
import { fontFamilies } from 'theme';
import { ReactComponent as DollarSignIconComponent } from 'assets/dollar-sign-icon.svg';

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const DollarSignIcon = styled(DollarSignIconComponent)`
  position: absolute;
  left: 13px;
`;

export const Input = styled(CurrencyInput)`
  font-family: ${fontFamilies.rubik};
  border: none;
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blueGray600};
  width: 100%;
  padding: 15px 15px 15px 44px;
`;
