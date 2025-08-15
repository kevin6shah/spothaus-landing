import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MapPin, 
  Sparkles, 
  Search, 
  Star, 
  Users, 
  Zap, 
  Globe, 
  Smartphone,
  ArrowRight,
  Play,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(scrollY, [0, 100], ['rgba(15, 15, 15, 0)', 'rgba(15, 15, 15, 0.95)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="App">
      {/* Header */}
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        style={{ backgroundColor: headerBackground }}
      >
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <img src="./spothaus_app_icon.png" alt="Spothaus Logo" width="32" height="32" />
            </div>
            <span>Spothaus</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#map-view">Map View</a>
            <a href="#list-view">List View</a>
            <a href="#download" className="cta-button">Download</a>
          </nav>

          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Find Places That Match Your <span className="gradient-text">Vibe</span>
            </h1>
            <p className="hero-subtitle">
              Spothaus is an AI-powered app that helps you discover the perfect NYC spots based on vibe, 
              not just ratings or location. Find cozy cafes, lively rooftops, and hidden gems that feel right.
            </p>
            <div className="hero-buttons">
              <a href="#download" className="primary-button">
                <AppleIcon />
                Download on App Store
              </a>
              <button className="secondary-button">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-app-preview">
              <img src="./map_view.PNG" alt="Spothaus App Interface" className="hero-screenshot" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <motion.div 
            className="problem-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>The Problem with Traditional Maps</h2>
            <p>
              I built Spothaus because I was constantly frustrated with how static Google Maps felt. 
              When I wanted to find a spot that matched a specific vibe—whether it was a cozy cafe to work from 
              or a lively rooftop with jazz music—I couldn't just search for it.
            </p>
            <div className="problem-cards">
              <div className="problem-card">
                <div className="card-icon">
                  <Search size={24} />
                </div>
                <h3>Limited Search</h3>
                <p>Can't search by atmosphere, mood, or vibe</p>
              </div>
              <div className="problem-card">
                <div className="card-icon">
                  <Star size={24} />
                </div>
                <h3>Rating Blind</h3>
                <p>High ratings don't tell you if the vibe matches</p>
              </div>
              <div className="problem-card">
                <div className="card-icon">
                  <MapPin size={24} />
                </div>
                <h3>Location Only</h3>
                <p>Just shows what's nearby, not what feels right</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <motion.div 
            className="solution-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Spothaus Changes Everything</h2>
            <p className="solution-subtitle">
              It's mobile-first and AI-powered, designed to understand what you're really looking for.
            </p>
            
            <div className="solution-features">
              <div className="feature">
                <div className="feature-icon">
                  <Sparkles size={32} />
                </div>
                <div className="feature-content">
                  <h3>AI-Powered Understanding</h3>
                  <p>Reads real customer reviews and understands the actual vibe of each place</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <Zap size={32} />
                </div>
                <div className="feature-content">
                  <h3>Smart Matching</h3>
                  <p>Scores matches to your search query so the most relevant spots show up first</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <Globe size={32} />
                </div>
                <div className="feature-content">
                  <h3>Flexible Views</h3>
                  <p>Shows results in map and list view, with light and dark mode</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="screenshots-section">
        <div className="container">
          <motion.div 
            className="screenshots-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>See Spothaus in Action</h2>
            <p>Experience the intuitive interface that makes finding your perfect spot effortless</p>
          </motion.div>
          
          <div className="screenshots-grid">
            <motion.div 
              className="screenshot-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="screenshot-image">
                <img src="./welcome.PNG" alt="Spothaus Welcome Screen" className="app-screenshot" />
              </div>
              <h3>Welcome Experience</h3>
              <p>Intuitive onboarding that gets you started with vibe-based search</p>
            </motion.div>

            <motion.div 
              className="screenshot-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="screenshot-image">
                <img src="./natural_language.PNG" alt="Spothaus Natural Language Search" className="app-screenshot" />
              </div>
              <h3>Natural Language Search</h3>
              <p>Search by vibe, mood, and specific needs using everyday language</p>
            </motion.div>

            <motion.div 
              className="screenshot-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="screenshot-image">
                <img src="./list_view.PNG" alt="Spothaus List View Results" className="app-screenshot" />
              </div>
              <h3>Smart Results</h3>
              <p>AI-powered matching with vibe scores and relevant tags</p>
            </motion.div>

            <motion.div 
              className="screenshot-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="screenshot-image">
                <img src="./place_details.PNG" alt="Spothaus Place Details" className="app-screenshot" />
              </div>
              <h3>Place Details</h3>
              <p>Comprehensive place information with hours, features, and quick actions</p>
            </motion.div>

            <motion.div 
              className="screenshot-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="screenshot-image">
                <img src="./ai_summary.PNG" alt="Spothaus AI Summary" className="app-screenshot" />
              </div>
              <h3>Detailed Insights</h3>
              <p>AI-generated summaries and actionable information for each spot</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map View Section */}
      <section id="map-view" className="map-view-section">
        <div className="container">
          <motion.div 
            className="map-view-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Map View</h2>
            <p>Explore NYC with our intuitive map interface showing vibe-matched locations</p>
          </motion.div>
          
          <div className="map-view-content">
            <motion.div 
              className="map-view-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Visual Discovery</h3>
              <p>Browse the city map with color-coded pins representing different types of spots. Green pins show high-match locations, while yellow pins indicate good alternatives.</p>
              
              <div className="map-features">
                <div className="map-feature">
                  <div className="feature-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>Smart Pins</h4>
                    <p>Color-coded location markers based on vibe match scores</p>
                  </div>
                </div>
                
                <div className="map-feature">
                  <div className="feature-icon">
                    <Search size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>Search Overlay</h4>
                    <p>Large search bar for natural language queries</p>
                  </div>
                </div>
                
                <div className="map-feature">
                  <div className="feature-icon">
                    <Globe size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>NYC Focused</h4>
                    <p>Detailed street names and neighborhood labels</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="map-view-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="screenshot-image">
                <img src="./map_view.PNG" alt="Spothaus Map View" className="app-screenshot" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* List View Section */}
      <section id="list-view" className="list-view-section">
        <div className="container">
          <motion.div 
            className="list-view-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>List View</h2>
            <p>Browse results in an organized list with detailed information and AI insights</p>
          </motion.div>
          
          <div className="list-view-content">
            <motion.div 
              className="list-view-visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="screenshot-image">
                <img src="./list_view.PNG" alt="Spothaus List View" className="app-screenshot" />
              </div>
            </motion.div>
            
            <motion.div 
              className="list-view-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Organized Results</h3>
              <p>View all matching locations in a clean, organized list format with match scores, ratings, and vibe tags for easy comparison.</p>
              
              <div className="list-features">
                <div className="list-feature">
                  <div className="feature-icon">
                    <Zap size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>Match Scores</h4>
                    <p>Green circles showing AI-calculated relevance scores</p>
                  </div>
                </div>
                
                <div className="list-feature">
                  <div className="feature-icon">
                    <Star size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>Ratings & Reviews</h4>
                    <p>Star ratings and review counts for each location</p>
                  </div>
                </div>
                
                <div className="list-feature">
                  <div className="feature-icon">
                    <Sparkles size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>AI Picks</h4>
                    <p>Special tags highlighting top AI recommendations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <motion.div 
            className="features-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Spothaus?</h2>
            <p>Built for the modern New Yorker who values experience over convenience</p>
          </motion.div>
          
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Sparkles size={32} />
              </div>
              <h3>AI-Powered</h3>
              <p>Advanced AI that understands context, mood, and what makes a place special</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Community-Driven</h3>
              <p>Real reviews from real people, analyzed by AI to find the perfect match</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Smartphone size={32} />
              </div>
              <h3>Mobile-First</h3>
              <p>Designed specifically for mobile use with intuitive gestures and dark mode</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <MapPin size={32} />
              </div>
              <h3>NYC Focused</h3>
              <p>Built for New York City with local knowledge and neighborhood insights</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <motion.div 
            className="how-it-works-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>How Spothaus Works</h2>
            <p>Three simple steps to find your perfect spot</p>
          </motion.div>
          
          <div className="steps">
            <motion.div 
              className="step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Describe Your Vibe</h3>
                <p>Use natural language to describe what you're looking for. "Cozy coffee shop with books" or "lively rooftop with jazz music"</p>
              </div>
            </motion.div>

            <motion.div 
              className="step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>AI Analyzes & Matches</h3>
                <p>Our AI reads real customer reviews, understands the vibe, and scores matches based on your search</p>
              </div>
            </motion.div>

            <motion.div 
              className="step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Discover Perfect Spots</h3>
                <p>Browse results in map or list view, read AI summaries, and find places that feel right for you</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Find Your Perfect Vibe?</h2>
            <p>Join thousands of New Yorkers discovering amazing spots every day</p>
            <div className="cta-buttons">
              <a href="#" className="primary-button large">
                <AppleIcon />
                Download on App Store
              </a>
              <p className="coming-soon">Coming to Android soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <div className="logo-icon">
                  <img src="./spothaus_app_icon.png" alt="Spothaus Logo" width="32" height="32" />
                </div>
                <span>Spothaus</span>
              </div>
              <p>AI-powered vibe matching for NYC</p>
            </div>
            
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How it Works</a>
              <a href="#screenshots">Screenshots</a>
              <a href="#map-view">Map View</a>
              <a href="#list-view">List View</a>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#privacy">Privacy</a>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="#twitter">Twitter</a>
              <a href="#instagram">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Spothaus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Apple Icon Component
function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

export default App;
