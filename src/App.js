import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import Project from './Pages/Project';
import Uiux from './Pages/Uiux';
import Website from './Pages/Website';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project/>}>
          <Route path='/project/website' element={<Website />} />
          <Route path='/project/landingpage' element={<Landingpage />} />
          <Route path='/project/uiux' element={<Uiux />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
