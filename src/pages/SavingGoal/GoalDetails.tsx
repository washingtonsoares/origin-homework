import { Goal } from 'types/Goal';
import {
  GoalDetails,
  GoalIcon,
  GoalInfo,
  GoalTitle,
  GoalSubTitle
} from './styled';
import Icons from 'components/Icons';

type Props = {
  goal: Goal | undefined;
};

function GoalDetailsComponent({ goal }: Props) {
  const icon = Icons[goal?.icon || ''];

  return (
    <GoalDetails>
      <GoalIcon src={icon} alt="" />
      <GoalInfo>
        <GoalTitle>{goal?.name}</GoalTitle>
        <GoalSubTitle>Saving goal</GoalSubTitle>
      </GoalInfo>
    </GoalDetails>
  );
}

export default GoalDetailsComponent;
