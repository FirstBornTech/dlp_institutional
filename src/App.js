import Dashboard from './views/Dashboard';
import SignIn from './views/SignIn';

const isLoggedIn = false;
function App() {
  return (
    <>
    {isLoggedIn?<Dashboard/>:<SignIn/>}
    </>
  );
}

export default App;
