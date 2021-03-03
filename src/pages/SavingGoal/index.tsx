import PageSubTitle from './SubTitle';
import GoalDetails from './GoalDetails';
import SimulationForm from './SimulationForm';
import { Wrapper, CardWrapper, GoalCard } from './styled';

function SavingGoal() {
  return (
    <Wrapper>
      <CardWrapper>
        <PageSubTitle />
        <GoalCard>
          <GoalDetails />
          <SimulationForm />
        </GoalCard>
      </CardWrapper>
    </Wrapper>
  );
}

export default SavingGoal;
