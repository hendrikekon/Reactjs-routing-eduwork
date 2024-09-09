import { Link, Outlet } from "react-router-dom";


const Menu = () => {
  return (
    <div className="nav-link">
        <nav>
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
        </nav>
    </div>
  );
}

export default Menu;
