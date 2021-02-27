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
  font-family: 'Rubik', sans-serif;
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

export const Form = styled.form`
  margin-top: 28px;

  @media ${breakpoints.desktop} {
    margin-top: 36px;
  }
`;

export const FieldsWrapper = styled.div`
  @media ${breakpoints.desktop} {
    display: flex;
  }
`;

export const FieldWrapper = styled.div`
  margin-bottom: 16px;
`;

export const FieldLabel = styled.label`
  font-size: 14px;
  line-height: 150%;
  display: inline-block;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.blueGray900};
`;

export const MonthlyAmountInfo = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};
  border-radius: 8px;
  margin-top: 24px;
`;

export const MonthlyAmount = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 27px 24px 29px;
`;

export const MonthlyAmountTitle = styled.h5`
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.blueGray900};
`;

export const MonthlyAmountValue = styled.h5`
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Detail = styled.p`
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blueGray10};
  color: ${({ theme }) => theme.colors.blueGray900};
  padding: 24px 0;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
