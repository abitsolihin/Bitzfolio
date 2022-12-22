import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Landingpage from './Components/Landingpage';
import Project from './Pages/Project';
import Uiux from './Components/Uiux';
import Website from './Components/Website';
import Admin from './Pages/Admin';
import Addproject from './Components/Addproject';
import Allproject from './Components/Allproject';
import Projectdetail from './Components/Projecdetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />}>
          <Route path='/project/all' element={<Allproject />} />
          <Route path='/project/website' element={<Website />} />
          <Route path='/project/landingpage' element={<Landingpage />} />
          <Route path='/project/uiux' element={<Uiux />} />
        </Route>
        <Route path='/project/detail/:id' element={<Projectdetail/>}/> 
        <Route path='/admin' element={<Admin />}>
          <Route path='/admin/addproject' element={<Addproject />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
