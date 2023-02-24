import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar';
import WithSubnavigation from './components/WithSubnavigation';

function App() {
  return (
    <div >
      <Navbar/>
      <WithSubnavigation/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
