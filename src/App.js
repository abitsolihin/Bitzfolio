import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Project from './Pages/Project';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project/>}>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
