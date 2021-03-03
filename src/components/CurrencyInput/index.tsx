import FieldLabel from 'components/FieldLabel';
import { Wrapper, DollarSignIcon, InputWrapper, Input } from './styled';

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
    <Wrapper className={className}>
      <FieldLabel htmlFor="currency-input">Total amount</FieldLabel>
      <InputWrapper>
        <DollarSignIcon title="Dollar sign icon" />
        <Input
          id="currency-input"
          onValueChange={(value) => handleChange(value)}
          groupSeparator=","
          decimalSeparator="."
          value={value}
        />
      </InputWrapper>
    </Wrapper>
  );
}

export default CurrencyInput;
