import Button from 'components/Button';
import CurrencyInput from 'components/CurrencyInput';
import MonthPicker from 'components/MonthPicker';
import MonthlyAmountResume from './MonthlyAmountResume';
import * as Styled from './styled';

function Form() {
  return (
    <Styled.Form>
      <Styled.FieldsWrapper>
        <Styled.FieldWrapper>
          <Styled.FieldLabel>Total amount</Styled.FieldLabel>
          <CurrencyInput />
        </Styled.FieldWrapper>
        <Styled.FieldWrapper>
          <Styled.FieldLabel>Reach goal by</Styled.FieldLabel>
          <MonthPicker />
        </Styled.FieldWrapper>
      </Styled.FieldsWrapper>
      <MonthlyAmountResume />
      <Styled.ButtonWrapper>
        <Button>Confirm</Button>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
}

export default Form;
