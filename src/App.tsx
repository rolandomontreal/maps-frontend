import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import { Outlet } from 'react-router-dom';

function App() {
  const [jwtToken, setJwtToken] = useState<null | string>(null);

  if (!jwtToken) {
    return <StartPage signin={() => console.log('Sign in pressed')} />
  }

  return (
    <div>
      This be the maps project
      <div>
        <nav>
          <p>Here navigation should be</p>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
