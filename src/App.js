import Dashboard from './views/Dashboard';
import SignIn from './views/SignIn';

const isLoggedIn = true;
function App() {
  return (
    <>
    {isLoggedIn?<Dashboard/>:<SignIn/>}
    </>
  );
}

export default App;
