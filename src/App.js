import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Profile, Login, Feed} from './ComponentImporter'


function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          
      </Routes>
    </div>
  );
}

export default App;
