import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Profile, Login} from './ComponentImporter'


function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/feed' element={<Feed />} /> */}
      </Routes>
    </div>
  );
}

export default App;
