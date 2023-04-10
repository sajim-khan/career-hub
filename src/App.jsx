import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header/Header';

function App() {

  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App
