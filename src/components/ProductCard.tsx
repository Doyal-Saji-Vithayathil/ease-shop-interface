
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  originalPrice?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card product-card h-100">
        {discount > 0 && (
          <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 m-2 rounded">
            -{discount}%
          </div>
        )}
        
        <img 
          src={product.image} 
          alt={product.name}
          className="card-img-top product-image"
        />
        
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.name}</h6>
          
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i}
                className={`fas fa-star ${i < product.rating ? 'text-warning' : 'text-muted'}`}
              ></i>
            ))}
            <small className="text-muted ms-1">({product.rating}/5)</small>
          </div>
          
          <div className="price-section mb-3">
            <span className="h5 text-primary mb-0">${product.price}</span>
            {product.originalPrice && (
              <span className="text-muted text-decoration-line-through ms-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <div className="mt-auto">
            <div className="d-grid gap-2">
              <Link 
                to={`/product/${product.id}`} 
                className="btn btn-outline-primary btn-sm"
              >
                View Details
              </Link>
              <button className="btn btn-primary btn-sm">
                <i className="fas fa-cart-plus me-1"></i>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
