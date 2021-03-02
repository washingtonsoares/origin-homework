import * as Styled from './styled';
import { getMonthTextFromDate, getYearFromDate } from 'utils/date';
import { formatCurrency } from 'utils/currency';

type Props = {
  totalAmount?: number;
  monthsDiff?: number;
  monthlyDeposits: number;
  completionDate: Date;
};

function MonthlyAmountResume({
  totalAmount,
  monthsDiff,
  monthlyDeposits,
  completionDate
}: Props) {
  const month = getMonthTextFromDate(completionDate);
  const year = getYearFromDate(completionDate);

  return (
    <Styled.MonthlyAmountInfo>
      <Styled.MonthlyAmount>
        <Styled.MonthlyAmountTitle>Monthly amount</Styled.MonthlyAmountTitle>
        <Styled.MonthlyAmountValue>
          {formatCurrency(monthlyDeposits)}
        </Styled.MonthlyAmountValue>
      </Styled.MonthlyAmount>
      <Styled.Detail>
        You&apos;re planning <strong>{monthsDiff} monthly deposits</strong> to
        reach your <strong>{formatCurrency(totalAmount)}</strong> goal by
        <strong>
          {' '}
          {month} {year}.
        </strong>
      </Styled.Detail>
    </Styled.MonthlyAmountInfo>
  );
}

export default MonthlyAmountResume;
