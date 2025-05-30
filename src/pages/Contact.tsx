
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead text-muted">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-4 mb-5">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <h4 className="mb-4">Get in Touch</h4>
                  
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-map-marker-alt fa-2x text-primary me-3"></i>
                      <div>
                        <h6 className="mb-0">Address</h6>
                        <p className="text-muted mb-0">123 Shopping Street<br />City, State 12345</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-phone fa-2x text-primary me-3"></i>
                      <div>
                        <h6 className="mb-0">Phone</h6>
                        <p className="text-muted mb-0">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-envelope fa-2x text-primary me-3"></i>
                      <div>
                        <h6 className="mb-0">Email</h6>
                        <p className="text-muted mb-0">support@shopease.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-clock fa-2x text-primary me-3"></i>
                      <div>
                        <h6 className="mb-0">Business Hours</h6>
                        <p className="text-muted mb-0">
                          Mon - Fri: 9:00 AM - 6:00 PM<br />
                          Sat - Sun: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="social-links">
                    <h6>Follow Us</h6>
                    <a href="#" className="btn btn-outline-primary btn-sm me-2">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm me-2">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm me-2">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-5">
                  <h4 className="mb-4">Send us a Message</h4>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <select
                        className="form-select"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="orders">Order Related</option>
                        <option value="returns">Returns & Refunds</option>
                        <option value="partnership">Business Partnership</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please describe your inquiry in detail..."
                      ></textarea>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg">
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h3>Find Us</h3>
            <p className="text-muted">Visit our store for a hands-on shopping experience</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body p-0">
                  {/* Placeholder for map */}
                  <div 
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ height: '400px' }}
                  >
                    <div className="text-center">
                      <i className="fas fa-map-marked-alt fa-4x text-muted mb-3"></i>
                      <h5 className="text-muted">Interactive Map</h5>
                      <p className="text-muted">Map integration would go here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3>Frequently Asked Questions</h3>
            <p className="text-muted">Quick answers to common questions</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq1">
                    <button 
                      className="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapse1"
                    >
                      What are your shipping options?
                    </button>
                  </h2>
                  <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We offer free standard shipping on orders over $50. Express shipping is available for $10.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq2">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapse2"
                    >
                      What is your return policy?
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We accept returns within 30 days of purchase. Items must be in original condition.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq3">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapse3"
                    >
                      Do you offer customer support?
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! Our customer support team is available 24/7 via email, phone, and live chat.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
