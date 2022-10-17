import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main/Main';
import Header from "./components/Header/Header";
import ProduceDetail from './pages/ProductDetail/ProductDetail';
function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>s
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
