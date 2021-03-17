import './App.css';

import Home from "./components/home";
import Head from "./components/head";
import Aboutus from './components/aboutus';
import Service from './components/service';
import Workflow from './components/workflow';
import Tech from './components/tech';
import Customer from './components/customer';
import Case from './components/case';
import Footer from './components/footer';
import Feed from './components/feedback';

function App() {
  return (
    <div className="App">
    <Head />
    <Home />
    <Aboutus />
    <Service />
    <Workflow />
    <Tech />
    <Customer />
    <Case />
    <Feed />
    <Footer />

    </div> 
  );
}

export default App;
