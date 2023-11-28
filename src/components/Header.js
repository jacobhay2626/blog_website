import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import MobileNav from './MobileNav';

function Header () {
  return (
    <header className='header'>
      <div className="nav-area">
        <Link href="/" className="logo">
          Logo
        </Link>
        <Navbar />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;