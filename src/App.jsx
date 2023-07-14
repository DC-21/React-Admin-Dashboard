import React from 'react'
import { Route, Routes } from "react-router-dom";
import Profile from './components/Profile'
import Username from './pages/Username'
import Password from './pages/Password';
import Permissions from './pages/Permissions';
import Activity from './pages/Activity';
import Accountstatus from './pages/Accountstatus';
import Integrations from './pages/Integrations';

const App = () => {
  return (
    <>
      <Profile/>
      <Routes>
      <Route path="/username" element={<Username />} />
      <Route path="/password" element={<Password />} />
      <Route path="/permissions" element={<Permissions />} />
      <Route path="/accountstatus" element={<Accountstatus />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/integrations" element={<Integrations />} />
      </Routes>
    </>
  )
}

export default App