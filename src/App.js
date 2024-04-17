import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </DataProvider>
      </div>
    </Router>
  )
}

export default App;
