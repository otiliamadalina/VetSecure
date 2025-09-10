import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./layout/navbar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            {/* <Footer /> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
