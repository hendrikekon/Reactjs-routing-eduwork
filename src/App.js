import { Link, Outlet } from "react-router-dom";
import './App.css';
import Menu from "./ComponentRouting";

function App() {
  return (
    <div className="App">
      <div className="nav-menu">
        <div className="logo">
          <h1>Belajar ReactJS Routing</h1>
        </div>
        <Menu />
      </div>
      
      
      {/* <nav>
        <Link to='/home' className='nb'>
          Home
        </Link>
        <Link to='/products' className='nb'>
          Products
        </Link>
        <Link to='/about' className='nb'>
          About
        </Link>
        <Link to='/contactus' className='nb'>
          Contact us
        </Link>
      </nav> */}
      
      {/* note belajar: menu bisa dipanggil di App.js atau dibuatkan Component tersendiri */}

      <Outlet />
    </div>
  );
}

export default App;
