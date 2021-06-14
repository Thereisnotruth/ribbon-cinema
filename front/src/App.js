import Controller from './Controller';
import './scss/main.scss';
import useStore from './useStore';

function App() {
  const { Auth } = useStore();

  Auth.init();
  return (
    <Controller />
  );
}

export default App;
