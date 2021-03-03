import {
  GoalDetails,
  GoalIcon,
  GoalInfo,
  GoalTitle,
  GoalSubTitle
} from './styled';

function GoalDetailsComponent() {
  return (
    <GoalDetails>
      <GoalIcon title="Goal icon" />
      <GoalInfo>
        <GoalTitle>Buy a house</GoalTitle>
        <GoalSubTitle>Saving goal</GoalSubTitle>
      </GoalInfo>
    </GoalDetails>
  );
}

export default GoalDetailsComponent;
