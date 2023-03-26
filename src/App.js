import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import './App.css';

function App() {
  return (
   <Router> 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Item' element={<Item/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
