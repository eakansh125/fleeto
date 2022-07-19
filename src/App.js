import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Profile, Login, Signup, Feed, Bookmark} from './ComponentImporter'


function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/bookmark' element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
