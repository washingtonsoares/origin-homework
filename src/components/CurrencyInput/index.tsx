import * as Styled from './styled';
import { ReactComponent as DollarSignIcon } from 'assets/dollar-sign-icon.svg';

function CurrencyInput() {
  return (
    <Styled.Wrapper>
      <DollarSignIcon />
      <Styled.Input groupSeparator="," decimalSeparator="." />
    </Styled.Wrapper>
  );
}

export default CurrencyInput;
