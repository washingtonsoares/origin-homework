import { ReactComponent as Logo } from 'assets/logo.svg';
import * as Styled from './styled';

function Header() {
  return (
    <Styled.Header>
      <Logo title="Origin's logo" />
    </Styled.Header>
  );
}

export default Header;
