
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const allProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: 5,
      category: "electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 249,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: 4,
      category: "electronics"
    },
    {
      id: 3,
      name: "Professional Camera",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
      rating: 5,
      category: "electronics"
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      rating: 4,
      category: "electronics"
    },
    {
      id: 5,
      name: "Designer T-Shirt",
      price: 29,
      originalPrice: 49,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      rating: 4,
      category: "clothing"
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 89,
      originalPrice: 129,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: 5,
      category: "clothing"
    },
    {
      id: 7,
      name: "Coffee Maker",
      price: 149,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      rating: 4,
      category: "home"
    },
    {
      id: 8,
      name: "Indoor Plant Set",
      price: 39,
      originalPrice: 59,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
      rating: 4,
      category: "home"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'home', label: 'Home & Garden' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div>
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4 fw-bold text-center">Our Products</h1>
              <p className="lead text-center text-muted">
                Discover our amazing collection of quality products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-3 mb-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Filters</h5>
                </div>
                <div className="card-body">
                  <h6>Categories</h6>
                  <div className="mb-3">
                    {categories.map(category => (
                      <div className="form-check" key={category.value}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="category"
                          id={category.value}
                          checked={selectedCategory === category.value}
                          onChange={() => setSelectedCategory(category.value)}
                        />
                        <label className="form-check-label" htmlFor={category.value}>
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  <h6>Sort By</h6>
                  <select 
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="mb-0 text-muted">
                  Showing {sortedProducts.length} products
                </p>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="fas fa-th"></i>
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="fas fa-list"></i>
                  </button>
                </div>
              </div>
              
              <div className="row">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {sortedProducts.length === 0 && (
                <div className="text-center py-5">
                  <i className="fas fa-search fa-3x text-muted mb-3"></i>
                  <h4>No products found</h4>
                  <p className="text-muted">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
