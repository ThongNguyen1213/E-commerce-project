import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Navbar, Billboards, Login, Register, Inventory, Products} from './components';

function App() {
  return (
    <div > 
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Billboards />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/items/:gender" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
