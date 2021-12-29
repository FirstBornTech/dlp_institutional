import { useState } from 'react';
import Dashboard from './views/Dashboard';
import SignIn from './views/SignIn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <SignIn signInSuccess={(e)=>setIsLoggedIn(e)}/>}
    </>
  );
}

export default App;
