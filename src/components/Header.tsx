import { ReactComponent as Logo } from '../assets/logo.svg';
import * as Styled from './styles';

function Header() {
  return (
    <Styled.Header>
      <Logo />
    </Styled.Header>
  );
}

export default Header;
