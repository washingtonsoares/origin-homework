import PageSubTitle from './SubTitle';
import GoalDetails from './GoalDetails';
import SimulationForm from './SimulationForm';
import { Wrapper, CardWrapper, GoalCard } from './styled';
import { Goal } from 'types/Goal';
import { getGoalById } from 'utils/goal';

const GOAL_ID = 7;

type Props = {
  goals: Goal[];
};

function SavingGoal({ goals }: Props) {
  // TODO: Buscar os dados da Goal pelo ID na URL
  const goal = getGoalById(goals, GOAL_ID);

  return (
    <Wrapper>
      <CardWrapper>
        <PageSubTitle />
        <GoalCard>
          <GoalDetails goal={goal} />
          <SimulationForm goal={goal} />
        </GoalCard>
      </CardWrapper>
    </Wrapper>
  );
}

export default SavingGoal;
