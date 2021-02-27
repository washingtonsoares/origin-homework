import * as Styled from './styled';
import SubTitle from './SubTitle';
import CardHeader from './CardHeader';
import Form from './Form';

function SavingGoal() {
  return (
    <Styled.Wrapper>
      <Styled.CardWrapper>
        <SubTitle />
        <Styled.GoalCard>
          <CardHeader />
          <Form />
        </Styled.GoalCard>
      </Styled.CardWrapper>
    </Styled.Wrapper>
  );
}

export default SavingGoal;
