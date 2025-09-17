import { Routes, Route } from 'react-router-dom'
import HomePage from '../src/views/HomePage'
import Privacy from './views/Privacy';
import Terms from './views/Terms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms/>} />

    </Routes>
  )
}


export default App;

