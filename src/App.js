import Home from "./components/Home";
import Jokes from "./components/Jokes";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
