import * as Styled from './styled';

type Props = {
  children: React.ReactNode;
  htmlFor: string;
};

function FieldLabel({ children, htmlFor }: Props) {
  return <Styled.Label htmlFor={htmlFor}>{children}</Styled.Label>;
}

export default FieldLabel;
