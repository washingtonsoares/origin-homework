import { Label } from './styled';

type Props = {
  children: React.ReactNode;
  htmlFor: string;
};

function FieldLabel({ children, htmlFor }: Props) {
  return <Label htmlFor={htmlFor}>{children}</Label>;
}

export default FieldLabel;
