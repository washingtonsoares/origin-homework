import { Button } from './styled';

type Props = {
  children: React.ReactNode;
};

function ButtonComponent({ children }: Props) {
  return <Button>{children}</Button>;
}

export default ButtonComponent;
