
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 249,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + tax + shipping;

  return (
    <div>
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-light py-4">
        <div className="container">
          <h1 className="h2">Shopping Cart</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Cart</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-5">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
              <h3>Your cart is empty</h3>
              <p className="text-muted mb-4">Looks like you haven't added anything to your cart yet.</p>
              <Link to="/products" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="row">
              {/* Cart Items */}
              <div className="col-lg-8 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Cart Items ({cartItems.length})</h5>
                  </div>
                  <div className="card-body">
                    {cartItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="img-fluid rounded"
                              style={{ height: '80px', objectFit: 'cover' }}
                            />
                          </div>
                          <div className="col-md-4">
                            <h6 className="mb-1">{item.name}</h6>
                            <p className="text-muted mb-0">In Stock</p>
                          </div>
                          <div className="col-md-2">
                            <span className="fw-bold">${item.price}</span>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group" style={{ width: '120px' }}>
                              <button 
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <input 
                                type="number" 
                                className="form-control form-control-sm text-center"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                              />
                              <button 
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="col-md-1">
                            <button 
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => removeItem(item.id)}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </div>
                        {index < cartItems.length - 1 && <hr />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <Link to="/products" className="btn btn-outline-primary">
                    <i className="fas fa-arrow-left me-2"></i>
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Tax:</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping:</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between fw-bold">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    
                    {shipping > 0 && (
                      <div className="alert alert-info mt-3">
                        <small>Add ${(50 - subtotal).toFixed(2)} more for free shipping!</small>
                      </div>
                    )}

                    <div className="d-grid gap-2 mt-3">
                      <button className="btn btn-primary btn-lg">
                        Proceed to Checkout
                      </button>
                      <button className="btn btn-outline-secondary">
                        <i className="fab fa-paypal me-2"></i>
                        PayPal
                      </button>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="card mt-3">
                  <div className="card-body">
                    <h6>Have a promo code?</h6>
                    <div className="input-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter code"
                      />
                      <button className="btn btn-outline-secondary">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
