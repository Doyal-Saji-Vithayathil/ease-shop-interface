
const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>ShopEase</h5>
            <p className="text-muted">
              Your ultimate shopping destination for quality products at unbeatable prices.
              Shop with confidence and enjoy fast, reliable delivery.
            </p>
            <div className="social-links">
              <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="me-3"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Home & Garden</a></li>
              <li><a href="#">Sports</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt me-2"></i>123 Shopping Street, City, State 12345</li>
              <li><i className="fas fa-phone me-2"></i>+1 (555) 123-4567</li>
              <li><i className="fas fa-envelope me-2"></i>support@shopease.com</li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 ShopEase. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="me-3">Privacy Policy</a>
            <a href="#" className="me-3">Terms of Service</a>
            <a href="#">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
