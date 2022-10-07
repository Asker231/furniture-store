
import './App.css';
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section from './components/section2/Section';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
     <Header/>
     <Section1/>
     <Slider/>
     <Section/>
    </div>
  );
}

export default App;
