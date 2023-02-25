import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
