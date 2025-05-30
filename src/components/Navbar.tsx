
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  console.log('Navbar component is rendering on route:', location.pathname);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fas fa-shopping-bag me-2"></i>
          ShopEase
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} to="/">
                <i className="fas fa-home me-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/products')}`} to="/products">
                <i className="fas fa-th-large me-1"></i>Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact')}`} to="/contact">
                <i className="fas fa-envelope me-1"></i>Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/cart')}`} to="/cart">
                <i className="fas fa-shopping-cart me-1"></i>
                Cart
                <span className="badge bg-primary ms-1">0</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/login')}`} to="/login">
                <i className="fas fa-sign-in-alt me-1"></i>Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
