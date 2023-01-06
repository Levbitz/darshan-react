import Chat from "./components/Chat/Chat";
import Gpay from "./components/Gpay/Gpay";
import LessonDayTwo from "./components/lessondayTwo/LessonDayTwo";
import Products from "./components/Products/Products";
import CheatsPage from "./pages/CheatsPage/CheatsPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import PdtDetailPage from "./pages/PdtDetailPage/PdtDetailPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/details/:id" element={<PdtDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="row">
//                   <div className="col-md-12">
//     <div className="container">
//       <Products />
//       <LessonDayTwo />

//       <CheatsPage />

//       <Chat />
//                 </div>
