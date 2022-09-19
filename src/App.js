<<<<<<< HEAD
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </BrowserRouter>
>>>>>>> develop
    </div>
  );
}
