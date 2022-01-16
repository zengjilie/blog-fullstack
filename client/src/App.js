import Single from "./pages/single/Single";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from './pages/register/Register'
import {useContext} from 'react';
import {userContext} from './context/Context';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const {user} = useContext(userContext);
  console.log(user);
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:postId" element={<Single />} />
          <Route path="write" element={<Write />} />
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
