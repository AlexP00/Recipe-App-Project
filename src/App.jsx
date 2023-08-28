// Components
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Recipe from './pages/Recipe';
import Populary from './pages/Populary';
import Recipes from './pages/Recipes';

// Other
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



//styles
import './styles/index.scss';

function App() {
  return (  <main className='app-container'>
    <Router>
       <NavBar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe /> } />
        <Route  path='/populary' element={<Populary />}/>
        <Route path='/recipes/:id' element={<Recipes />}/>
      </Routes>
    </Router>
  </main>
  )
}

export default App;
