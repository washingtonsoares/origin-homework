import * as Styled from './styled';

function MonthlyAmountResume() {
  return (
    <Styled.MonthlyAmountInfo>
      <Styled.MonthlyAmount>
        <Styled.MonthlyAmountTitle>Monthly amount</Styled.MonthlyAmountTitle>
        <Styled.MonthlyAmountValue>$521</Styled.MonthlyAmountValue>
      </Styled.MonthlyAmount>
      <Styled.Detail>
        You’re planning 48 monthly deposits to reach your $25,000 goal by
        October 2020.
      </Styled.Detail>
    </Styled.MonthlyAmountInfo>
  );
}

export default MonthlyAmountResume;
