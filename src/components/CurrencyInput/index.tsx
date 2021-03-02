import FieldLabel from 'components/FieldLabel';
import * as Styled from './styled';

type Props = {
  onChange: (value: number | undefined) => void;
  className?: string;
  value?: number;
};

function CurrencyInput({ onChange, className, value }: Props) {
  const handleChange = (value: string | undefined) => {
    const normalizedValue = value ? Number(value) : undefined;
    onChange(normalizedValue);
  };

  return (
    <Styled.Wrapper className={className}>
      <FieldLabel htmlFor="currency-input">Total amount</FieldLabel>
      <Styled.InputWrapper>
        <Styled.DollarSignIcon title="Dollar sign icon" />
        <Styled.Input
          id="currency-input"
          onValueChange={(value) => handleChange(value)}
          groupSeparator=","
          decimalSeparator="."
          value={value}
        />
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
}

export default CurrencyInput;
