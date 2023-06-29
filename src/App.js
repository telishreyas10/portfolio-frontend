import logo from "./logo.svg";
import "./App.css";
import { About, Footer, Header, Skills, Testimonial, Work } from './containers';
import {Navbar} from './components'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;
