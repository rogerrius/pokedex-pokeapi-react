import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes'
import { useState } from 'react';

function App() {
  const [n_gen, setN_gen] = useState(0)
  const routing = useRoutes(routes(n_gen, setN_gen));
  
  return (
    <div className='App'>
      {routing}
    </div>
  );
}

export default App;