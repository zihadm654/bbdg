import "./App.css";
import Routers from "./routes/routes";
import Navbar from "./helpers/navbar/Navbar";
import Footer from "./helpers/footer/Footer";
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routers />
      <Footer />
    </>
  );
};
export default App;
