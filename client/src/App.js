import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './styles/App.scss'
import Intro from './components/Intro';
import Header from './components/Header';
import About from './components/About';
import Home from "./pages/Home";
import Registration from "./components/Registration";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/registration" element={<Registration/>}/>

        </Routes>
      </BrowserRouter>

    // <div className="App">
    //   {/* if there is no info in cache - up, otherwise - out*/}
    //   {/* <Header ending='up' auth='Почати'/> */}
    //   {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //   <Intro/>
    //   <About/>
    // </div>
  );
}

export default App;
