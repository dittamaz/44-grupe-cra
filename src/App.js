//import logo from './logo.svg';
import './App.css'; 
import './Layout.css';
import { Footer } from './Components/Footer';
import { Hero } from './Components/Hero';
import { Main } from './Components/Main';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Main />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
