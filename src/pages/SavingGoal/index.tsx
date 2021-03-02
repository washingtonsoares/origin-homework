import * as Styled from './styled';
import SubTitle from './SubTitle';
import GoalDetails from './GoalDetails';
import SimulationForm from './SimulationForm';

function SavingGoal() {
  return (
    <Styled.Wrapper>
      <Styled.CardWrapper>
        <SubTitle />
        <Styled.GoalCard>
          <GoalDetails />
          <SimulationForm />
        </Styled.GoalCard>
      </Styled.CardWrapper>
    </Styled.Wrapper>
  );
}

export default SavingGoal;
