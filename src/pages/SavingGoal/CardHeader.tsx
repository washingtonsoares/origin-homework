import * as Styled from './styled';

function CardHeader() {
  return (
    <Styled.CardHeader>
      <Styled.Icon />
      <Styled.GoalInfo>
        <Styled.GoalTitle>Buy a house</Styled.GoalTitle>
        <Styled.GoalSubTitle>Saving goal</Styled.GoalSubTitle>
      </Styled.GoalInfo>
    </Styled.CardHeader>
  );
}

export default CardHeader;
