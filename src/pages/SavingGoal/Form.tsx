import CurrencyInput from 'components/CurrencyInput';
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
        </Styled.FieldWrapper>
      </Styled.FieldsWrapper>
      <MonthlyAmountResume />
    </Styled.Form>
  );
}

export default Form;
