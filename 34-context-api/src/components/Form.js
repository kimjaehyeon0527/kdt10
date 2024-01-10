import Button from './Button';
import Panel from './Panel';

export default function Form() {
  return (
    <Panel title={'welcome'}>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}
