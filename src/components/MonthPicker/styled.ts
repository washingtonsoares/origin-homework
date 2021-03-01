import styled, { css } from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/arrow-icon.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};
  border-radius: 4px;
`;

export const ButtonWrapper = styled.button`
  padding: 21px 20px;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.neutralWhite};
  outline: none;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;

export const LeftArrowIcon = styled(ArrowIcon)``;

export const RightArrowIcon = styled(LeftArrowIcon)`
  transform: rotate(180deg);
`;

export const MonthWrapper = styled.div`
  margin: 4px 0;
`;

export const SelectedMonth = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
`;

export const SelectedYear = styled.h3`
  color: ${({ theme }) => theme.colors.blueGray400};
  font-weight: normal;
  text-align: center;
`;
