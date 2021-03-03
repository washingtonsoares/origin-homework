import * as Styled from './styled';

function GoalDetails() {
  return (
    <Styled.GoalDetails>
      <Styled.GoalIcon title="Goal icon" />
      <Styled.GoalInfo>
        <Styled.GoalTitle>Buy a house</Styled.GoalTitle>
        <Styled.GoalSubTitle>Saving goal</Styled.GoalSubTitle>
      </Styled.GoalInfo>
    </Styled.GoalDetails>
  );
}

export default GoalDetails;
