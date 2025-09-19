import { Routes, Route } from 'react-router-dom'
import HomePage from '../src/views/HomePage'
import Privacy from './views/Privacy';
import Terms from './views/Terms';
import Support from './views/Support';
import Reset from './views/Reset';
import Success from './views/Success';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/reset-password" element={<Reset />} /> 
      <Route path="/success" element={<Success />} /> 
    </Routes>
  )
}

export default App;

