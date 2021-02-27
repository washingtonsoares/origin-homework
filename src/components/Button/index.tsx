import * as Styled from './styled';

type Props = {
  children: React.ReactNode;
};

function Button({ children }: Props) {
  return <Styled.Button>{children}</Styled.Button>;
}

export default Button;
