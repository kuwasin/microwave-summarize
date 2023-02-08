import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Vegetables from "./components/pages/Vegetables";
import MeatFish from "./components/pages/MeatFish";
function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
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
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route
            path={`${process.env.PUBLIC_URL}/vegetables`}
            element={<Vegetables />}
          />
          <Route path={`${process.env.PUBLIC_URL}/meatfish`}  element={<MeatFish />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
