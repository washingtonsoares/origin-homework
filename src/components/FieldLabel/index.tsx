import styled from 'styled-components';
import { mediaQueries } from 'theme';

const FieldLabel = styled.label`
  font-size: 12px;
  line-height: 21px;
  display: inline-block;
  margin-bottom: 5px;

  ${mediaQueries.desktop} {
    font-size: 14px;
  }
`;

export default FieldLabel;
