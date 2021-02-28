import * as Styled from './styled';
import { ReactComponent as DollarSignIcon } from 'assets/dollar-sign-icon.svg';

type Props = {
  onChange: (value: number) => void;
};

function CurrencyInput({ onChange }: Props) {
  return (
    <Styled.Wrapper>
      <DollarSignIcon />
      <Styled.Input
        onValueChange={(value) => onChange(Number(value))}
        groupSeparator=","
        decimalSeparator="."
      />
    </Styled.Wrapper>
  );
}

export default CurrencyInput;
