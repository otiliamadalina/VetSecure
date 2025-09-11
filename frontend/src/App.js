import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./layout/navbar";
import Home from "./pages/home/home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>

            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />

                </Routes>
            {/*<Footer />*/}
        </Router>
    </div>
  );
}

export default App;
