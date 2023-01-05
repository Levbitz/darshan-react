import Chat from "./components/Chat/Chat";
import Gpay from "./components/Gpay/Gpay";
import LessonDayTwo from "./components/lessondayTwo/LessonDayTwo";
import Products from "./components/Products/Products";
import CheatsPage from "./pages/CheatsPage/CheatsPage";

function App() {
  return (
    <div className="container">
      <Products />
      <LessonDayTwo />

      <CheatsPage />

      <Chat />
    </div>
  );
}

export default App;
