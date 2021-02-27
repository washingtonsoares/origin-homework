import * as Styled from './styled';
import { ReactComponent as DollarSignIcon } from 'assets/dollar-sign-icon.svg';

function CurrencyInput() {
  return (
    <Styled.Wrapper>
      <DollarSignIcon />
      <Styled.Input
        groupSeparator=","
        decimalSeparator="."
        placeholder="0.00"
      />
    </Styled.Wrapper>
  );
}

export default CurrencyInput;
