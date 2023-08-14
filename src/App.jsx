// Other
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//styles
import './styles/index.scss';

function App() {
  return <main className='app-container'>
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </main>
   
}

export default App
