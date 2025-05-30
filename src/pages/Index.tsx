
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: 5
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 249,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: 4
    },
    {
      id: 3,
      name: "Professional Camera",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
      rating: 5
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      rating: 4
    }
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold mb-4 animate-fade-in-up">
                  Welcome to ShopEase
                </h1>
                <p className="lead mb-4 animate-fade-in-up">
                  Discover amazing products at unbeatable prices. 
                  Your one-stop destination for all your shopping needs.
                </p>
                <div className="animate-fade-in-up">
                  <a href="/products" className="btn btn-primary btn-lg me-3">
                    Shop Now
                  </a>
                  <a href="#featured" className="btn btn-outline-light btn-lg">
                    View Products
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" 
                  alt="Shopping"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
                  <h5>Free Shipping</h5>
                  <p className="text-muted">Free shipping on orders over $50</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <i className="fas fa-undo fa-3x text-primary mb-3"></i>
                  <h5>Easy Returns</h5>
                  <p className="text-muted">30-day hassle-free returns</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <i className="fas fa-headset fa-3x text-primary mb-3"></i>
                  <h5>24/7 Support</h5>
                  <p className="text-muted">Round-the-clock customer service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Featured Products</h2>
            <p className="text-muted">Check out our most popular items</p>
          </div>
          <div className="row">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="/products" className="btn btn-primary btn-lg">
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3>Subscribe to Our Newsletter</h3>
              <p className="mb-0">Get the latest deals and updates delivered to your inbox</p>
            </div>
            <div className="col-lg-6">
              <form className="d-flex">
                <input 
                  type="email" 
                  className="form-control me-2" 
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-light">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
