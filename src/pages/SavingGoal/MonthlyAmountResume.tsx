import * as Styled from './styled';

function MonthlyAmountResume() {
  return (
    <Styled.MonthlyAmountInfo>
      <Styled.MonthlyAmount>
        <Styled.MonthlyAmountTitle>Monthly amount</Styled.MonthlyAmountTitle>
        <Styled.MonthlyAmountValue>$521</Styled.MonthlyAmountValue>
      </Styled.MonthlyAmount>
      <Styled.Detail>
        You’re planning <strong>48 monthly deposits</strong> to reach your{' '}
        <strong>$25,000</strong> goal by
        <strong> October 2020.</strong>
      </Styled.Detail>
    </Styled.MonthlyAmountInfo>
  );
}

export default MonthlyAmountResume;
