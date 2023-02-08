import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Vesitables from "./components/pages/Vesitables";
import MeatFish from "./components/pages/MeatFish";
function App() {
  return (
    <>
      <Router>
        <div className="h-14 bg-red-400">
          <div className="h-full flex justify-center items-center">
            <Link to={"/"}>
              <h2 className="text-white text-xl font-black">
                レンジで簡単に下ごしらえ
              </h2>
            </Link>
          </div>
        </div>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vesitables" element={<Vesitables />} />
          <Route path="meatfish" element={<MeatFish />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
