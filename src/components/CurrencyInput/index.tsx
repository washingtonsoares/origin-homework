import FieldLabel from 'components/FieldLabel';
import * as Styled from './styled';

type Props = {
  onChange: (value: number) => void;
  className?: string;
};

function CurrencyInput({ onChange, className }: Props) {
  return (
    <Styled.Wrapper className={className}>
      <FieldLabel htmlFor="currency-input">Total amount</FieldLabel>
      <Styled.InputWrapper>
        <Styled.DollarSignIcon title="Dollar sign icon" />
        <Styled.Input
          id="currency-input"
          onValueChange={(value) => onChange(Number(value))}
          groupSeparator=","
          decimalSeparator="."
          placeholder="0,00"
        />
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
}

export default CurrencyInput;
