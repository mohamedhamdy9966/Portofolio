import './App.css';
import 'react-bootstrap'
import NavBar from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Footer } from './Components/Footer';
import { Projects } from './Components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
