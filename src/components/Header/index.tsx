import { ReactComponent as Logo } from 'assets/logo.svg';
import { Header } from './styled';

function HeaderComponent() {
  return (
    <Header>
      <Logo title="Origin's logo" />
    </Header>
  );
}

export default HeaderComponent;
