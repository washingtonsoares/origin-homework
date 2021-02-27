import styled from 'styled-components';
import { ReactComponent as ArrowIconComponent } from 'assets/arrow-icon.svg';
import { breakpoints } from 'theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};
  border-radius: 4px;
  padding: 7.5px 20px;

  @media ${breakpoints.desktop} {
    padding: 4px 20px;
  }
`;

export const LeftArrowIcon = styled(ArrowIconComponent)`
  cursor: pointer;
`;

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
