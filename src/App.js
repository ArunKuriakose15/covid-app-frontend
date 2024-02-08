import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatient from './components/AddPatient';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddPatient />} />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
