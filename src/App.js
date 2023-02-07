import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Vesitables from "./components/pages/Vesitables";
import MeatFish from "./components/pages/MeatFish";
import Others from "./components/pages/Others";
function App() {
  return (
    <>
      <Router>
        <div className="h-14 bg-slate-500">
          <div className="h-full flex justify-center items-center">
            <h2 className="text-white text-xl font-black">
              レンジで簡単に下ごしらえ
            </h2>
          </div>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vesitables" element={<Vesitables />} />
          <Route path="/meatfish" element={<MeatFish />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
