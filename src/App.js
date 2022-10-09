
import './App.css';
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section from './components/section2/Section';
import Slider from './components/slider/Slider';
import Section3 from './section3/Section3';

function App() {
     
     
  return (
    <div className="App">
     <Header/>
     <Section1/>
     <Slider/>
     <Section/>
     <Section3 
      
      title="Наша история" 
      subtitle="Наработки длинной в 25 лет"  text="Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей "/>
    </div>
  );
}

export default App;
