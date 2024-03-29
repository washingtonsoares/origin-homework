import styled from 'styled-components';
import { mediaQueries, fontFamilies } from 'theme';
import CurrencyInputComponent from 'components/CurrencyInput';

export const Wrapper = styled.main`
  padding-top: 32px;
  display: flex;
  justify-content: center;

  ${mediaQueries.desktop} {
    padding-top: 48px;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;

  ${mediaQueries.desktop} {
    width: 560px;
  }
`;

export const SubTitle = styled.h5`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.brandColorPrimary};
  text-align: center;
  margin-bottom: 24px;
`;

export const GoalCard = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralWhite};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 30px 24px 40px;

  ${mediaQueries.desktop} {
    padding: 35px 40px 40px;
  }
`;

export const GoalTitle = styled.h1`
  font-family: ${fontFamilies.rubik};
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

export const GoalIcon = styled.img`
  margin-right: 16.14px;
`;

export const GoalDetails = styled.div`
  display: flex;
`;

export const SimulationForm = styled.form`
  margin-top: 10px;

  ${mediaQueries.desktop} {
    margin-top: 20px;
  }
`;

export const FieldsWrapper = styled.div`
  ${mediaQueries.desktop} {
    display: flex;
  }
`;

export const CurrencyInput = styled(CurrencyInputComponent)`
  margin-bottom: 15px;

  ${mediaQueries.desktop} {
    width: 56%;
    margin-right: 16px;
  }
`;

export const SimulationResume = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};
  border-radius: 8px;
  margin-top: 24px;
`;

export const MonthlyAmount = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 27px 24px 29px;

  ${mediaQueries.desktop} {
    padding: 32px 32px 23px 32px;
  }
`;

export const MonthlyAmountTitle = styled.h5`
  font-size: 18px;
  line-height: 22px;
`;

export const MonthlyAmountValue = styled.h5`
  font-family: ${fontFamilies.rubik};
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.brandColorSecondary};
`;

export const SimulationDetails = styled.p`
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blueGray10};
  padding: 24px 32px;
  margin: 0;

  ${mediaQueries.desktop} {
    text-align: left;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
