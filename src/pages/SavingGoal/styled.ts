import styled from 'styled-components';
import { breakpoints } from 'theme';
import { ReactComponent as HouseIcon } from 'assets/house-icon.svg';

export const Wrapper = styled.main`
  padding-top: 32px;
  display: flex;
  justify-content: center;

  @media ${breakpoints.desktop} {
    padding-top: 48px;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;

  @media ${breakpoints.desktop} {
    width: 560px;
  }
`;

export const SubTitle = styled.h5`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 24px;

  strong {
    font-weight: 600;
  }
`;

export const GoalCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 30px 24px 40px;
`;

export const GoalTitle = styled.h1`
  color: ${({ theme }) => theme.colors.blueGray900};
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
`;

export const GoalSubTitle = styled.h5`
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.blueGray400};
`;

export const GoalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled(HouseIcon)`
  margin-right: 16.14px;
`;

export const CardHeader = styled.div`
  display: flex;
`;
