import React from 'react'
import { Route, Routes } from "react-router-dom";
import Profile from './components/Profile'
import Username from './pages/Username'
import Password from './pages/Password';
import Team from './pages/Team';
import Email from './pages/Email';
import Plan from './pages/Plan';
import Billing from './pages/Billing';
import Integrations from './pages/Integrations';

const App = () => {
  return (
    <>
      <Profile/>
      <Routes>
      <Route path="/username" element={<Username />} />
      <Route path="/password" element={<Password />} />
      <Route path="/team" element={<Team />} />
      <Route path="/email" element={<Email />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/integrations" element={<Integrations />} />
      </Routes>
    </>
  )
}

export default App