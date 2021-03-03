import { getMonthTextFromDate, getYearFromDate } from 'utils/date';
import { formatCurrency } from 'utils/currency';
import {
  SimulationResume,
  MonthlyAmountTitle,
  MonthlyAmount,
  MonthlyAmountValue,
  SimulationDetails
} from './styled';

type Props = {
  totalAmount?: number;
  monthsDiff?: number;
  monthlyDeposits: number;
  completionDate: Date;
};

function SimulationResumeComponent({
  totalAmount,
  monthsDiff,
  monthlyDeposits,
  completionDate
}: Props) {
  const month = getMonthTextFromDate(completionDate);
  const year = getYearFromDate(completionDate);

  return (
    <SimulationResume>
      <MonthlyAmount>
        <MonthlyAmountTitle>Monthly amount</MonthlyAmountTitle>
        <MonthlyAmountValue data-testid="monthly-deposits">
          {formatCurrency(monthlyDeposits)}
        </MonthlyAmountValue>
      </MonthlyAmount>
      <SimulationDetails data-testid="goal-simulation-details">
        You&apos;re planning <strong>{monthsDiff} monthly deposits</strong> to
        reach your <strong>{formatCurrency(totalAmount)}</strong> goal by
        <strong>
          {' '}
          {month} {year}.
        </strong>
      </SimulationDetails>
    </SimulationResume>
  );
}

export default SimulationResumeComponent;
