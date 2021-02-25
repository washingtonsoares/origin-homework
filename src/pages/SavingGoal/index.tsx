import * as Styled from './styled';
import SubTitle from './SubTitle';
import CardHeader from './CardHeader';

function SavingGoal() {
  return (
    <Styled.Wrapper>
      <Styled.CardWrapper>
        <SubTitle />
        <Styled.GoalCard>
          <CardHeader />
        </Styled.GoalCard>
      </Styled.CardWrapper>
    </Styled.Wrapper>
  );
}

export default SavingGoal;
