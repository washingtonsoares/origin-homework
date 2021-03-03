import * as Styled from './styled';
import { getMonthTextFromDate, getYearFromDate } from 'utils/date';
import { formatCurrency } from 'utils/currency';

type Props = {
  totalAmount?: number;
  monthsDiff?: number;
  monthlyDeposits: number;
  completionDate: Date;
};

function SimulationResume({
  totalAmount,
  monthsDiff,
  monthlyDeposits,
  completionDate
}: Props) {
  const month = getMonthTextFromDate(completionDate);
  const year = getYearFromDate(completionDate);

  return (
    <Styled.SimulationResume>
      <Styled.MonthlyAmount>
        <Styled.MonthlyAmountTitle>Monthly amount</Styled.MonthlyAmountTitle>
        <Styled.MonthlyAmountValue data-testid="monthly-deposits">
          {formatCurrency(monthlyDeposits)}
        </Styled.MonthlyAmountValue>
      </Styled.MonthlyAmount>
      <Styled.Detail data-testid="goal-simulation-details">
        You&apos;re planning <strong>{monthsDiff} monthly deposits</strong> to
        reach your <strong>{formatCurrency(totalAmount)}</strong> goal by
        <strong>
          {' '}
          {month} {year}.
        </strong>
      </Styled.Detail>
    </Styled.SimulationResume>
  );
}

export default SimulationResume;
