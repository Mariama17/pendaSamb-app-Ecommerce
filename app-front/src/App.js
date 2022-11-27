import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Login from './components/login';
import AboutUs from './components/aboutUs';
import Contact from './components/contact';
import Inscription from './components/inscription';
import './css/main.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function Home() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/inscription" element={<Inscription/>} />
                <Route exact path="/contact" element={<Contact/>} />
                <Route exact path="/aboutUs" element={<AboutUs/>} />
            </Routes>
        </Router>
    );
}
   
export default App;