import { app as appClasName } from './App.module.css';
import Exercise from '@/lecture/38-Stack-layout-component.jsx';

console.log(appClasName);

function App() {
  return (
    <div className={appClasName}>
      <Exercise />
    </div>
  );
}

export default App;