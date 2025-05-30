
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199,
    originalPrice: 299,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29"
    ],
    rating: 5,
    reviews: 127,
    description: "Experience premium sound quality with these wireless headphones. Featuring advanced noise cancellation technology, 30-hour battery life, and premium comfort for all-day wear.",
    features: [
      "Advanced noise cancellation",
      "30-hour battery life",
      "Premium comfort design",
      "High-quality sound",
      "Wireless connectivity",
      "Built-in microphone"
    ],
    inStock: true,
    category: "Electronics"
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 249,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: 4
    },
    {
      id: 3,
      name: "Professional Camera",
      price: 899,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
      rating: 5
    }
  ];

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div>
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="py-3 bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
              <li className="breadcrumb-item active">{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-6 mb-4">
              <div className="mb-3">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="img-fluid rounded shadow"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="row">
                {product.images.map((image, index) => (
                  <div className="col-4" key={index}>
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className={`img-fluid rounded cursor-pointer ${selectedImage === index ? 'border border-primary' : ''}`}
                      style={{ height: '100px', objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => setSelectedImage(index)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="col-lg-6">
              <div className="mb-3">
                <h1 className="h2">{product.name}</h1>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`fas fa-star ${i < product.rating ? 'text-warning' : 'text-muted'}`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-muted">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-center">
                  <span className="h3 text-primary me-3">${product.price}</span>
                  <span className="text-muted text-decoration-line-through me-2">
                    ${product.originalPrice}
                  </span>
                  <span className="badge bg-danger">-{discount}%</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-muted">{product.description}</p>
              </div>

              <div className="mb-4">
                <h6>Key Features:</h6>
                <ul className="list-unstyled">
                  {product.features.map((feature, index) => (
                    <li key={index} className="mb-1">
                      <i className="fas fa-check text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <label className="form-label">Quantity:</label>
                    <div className="input-group" style={{ width: '120px' }}>
                      <button 
                        className="btn btn-outline-secondary"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="form-control text-center"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      />
                      <button 
                        className="btn btn-outline-secondary"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <span className={`badge ${product.inStock ? 'bg-success' : 'bg-danger'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2 d-md-flex">
                <button 
                  className="btn btn-primary btn-lg flex-fill"
                  disabled={!product.inStock}
                >
                  <i className="fas fa-cart-plus me-2"></i>
                  Add to Cart
                </button>
                <button className="btn btn-outline-secondary btn-lg">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="mb-4">Related Products</h3>
          <div className="row">
            {relatedProducts.map(product => (
              <div className="col-md-6 mb-4" key={product.id}>
                <div className="card h-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-primary h6">${product.price}</span>
                      <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
