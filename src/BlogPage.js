import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Sparkles, Zap, Users, Smartphone, Star, CheckCircle } from 'lucide-react';
import './BlogPage.css';

function BlogPage() {
  return (
    <div className="blog-page">
      {/* Header */}
      <header className="blog-header">
        <div className="container">
          <div className="header-content">
            <a href="/#/" className="back-link">
              <ArrowLeft size={20} />
              Back to Spothaus
            </a>
            <div className="logo">
              <div className="logo-icon">
                <img src="./spothaus_app_icon.png" alt="Spothaus Logo" width="32" height="32" />
              </div>
              <span>Spothaus</span>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="blog-content">
        <div className="container">
          {/* Article Header */}
          <motion.article 
            className="blog-article"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <header className="article-header">
              <div className="article-meta">
                <span className="publish-date">December 2024</span>
                <span className="read-time">5 min read</span>
              </div>
              <h1 className="article-title">
                What is Spothaus? — The AI Vibe-Matching App for NYC
              </h1>
              <p className="article-subtitle">
                Discover how Spothaus is revolutionizing the way New Yorkers find their perfect spots through AI-powered vibe matching
              </p>
            </header>

            {/* Article Body */}
            <div className="article-body">
              <section className="article-section">
                <h2>What is Spothaus?</h2>
                <p>
                  <strong>Spothaus</strong> is an innovative, AI-powered mobile application designed specifically for New York City residents and visitors who want to discover places that match their exact vibe and preferences. Unlike traditional map applications that focus solely on location, ratings, or basic categories, <strong>Spothaus</strong> understands the nuanced atmosphere, mood, and character of each establishment.
                </p>
                
                <p>
                  At its core, <strong>Spothaus</strong> solves a fundamental problem that many New Yorkers face daily: finding the perfect spot that aligns with their current mood, needs, and desired atmosphere. Whether you're looking for a cozy coffee shop with books for remote work, a lively rooftop bar with jazz music, or a quiet restaurant for a romantic dinner, <strong>Spothaus</strong> uses advanced AI to analyze real customer reviews and match you with places that feel right.
                </p>
              </section>

              <section className="article-section">
                <h2>The Problem Spothaus Solves</h2>
                <p>
                  Traditional map applications like Google Maps have limitations that <strong>Spothaus</strong> directly addresses:
                </p>
                
                <div className="problem-list">
                  <div className="problem-item">
                    <div className="problem-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="problem-content">
                      <h3>Location-Only Focus</h3>
                      <p>Traditional maps show what's nearby but don't consider if the vibe matches your needs</p>
                    </div>
                  </div>
                  
                  <div className="problem-item">
                    <div className="problem-icon">
                      <Star size={24} />
                    </div>
                    <div className="problem-content">
                      <h3>Rating Blindness</h3>
                      <p>High ratings don't tell you if the atmosphere matches your desired experience</p>
                    </div>
                  </div>
                  
                  <div className="problem-item">
                    <div className="problem-icon">
                      <Sparkles size={24} />
                    </div>
                    <div className="problem-content">
                      <h3>Limited Search Capabilities</h3>
                      <p>Can't search by atmosphere, mood, or specific vibe characteristics</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="article-section">
                <h2>How Spothaus Works</h2>
                <p>
                  <strong>Spothaus</strong> operates on a sophisticated AI system that understands context, mood, and the subtle nuances that make each place unique:
                </p>
                
                <div className="how-it-works">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Natural Language Search</h3>
                      <p>Users describe what they're looking for using everyday language: "cozy coffee shop with books" or "lively rooftop with jazz music"</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>AI Analysis</h3>
                      <p><strong>Spothaus</strong> AI reads through real customer reviews, understanding the actual vibe and atmosphere of each establishment</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Smart Matching</h3>
                      <p>The AI scores matches based on relevance to your search, presenting results in order of best fit</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="article-section">
                <h2>Key Features of Spothaus</h2>
                
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Sparkles size={32} />
                    </div>
                    <h3>AI-Powered Understanding</h3>
                    <p><strong>Spothaus</strong> uses advanced natural language processing to understand context, mood, and specific requirements from your search queries.</p>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Zap size={32} />
                    </div>
                    <h3>Smart Matching Algorithm</h3>
                    <p>Our proprietary AI algorithm analyzes thousands of reviews to score and rank places based on how well they match your vibe requirements.</p>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Users size={32} />
                    </div>
                    <h3>Community-Driven Insights</h3>
                    <p><strong>Spothaus</strong> leverages real customer experiences and reviews, processed through AI to extract meaningful insights about atmosphere and vibe.</p>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Smartphone size={32} />
                    </div>
                    <h3>Mobile-First Design</h3>
                    <p>Built specifically for mobile use with intuitive gestures, dark mode support, and seamless navigation between map and list views.</p>
                  </div>
                </div>
              </section>

              <section className="article-section">
                <h2>Why Spothaus is Different</h2>
                <p>
                  What sets <strong>Spothaus</strong> apart from other discovery apps is its focus on the intangible aspects of places that matter most to people:
                </p>
                
                <ul className="difference-list">
                  <li><strong>Vibe-First Approach:</strong> Unlike traditional apps that prioritize location and ratings, <strong>Spothaus</strong> puts atmosphere and mood at the center of the discovery process.</li>
                  <li><strong>Contextual Understanding:</strong> Our AI understands that "cozy" means different things in different contexts and can distinguish between a cozy coffee shop and a cozy restaurant.</li>
                  <li><strong>Real-Time Relevance:</strong> <strong>Spothaus</strong> considers your current mood and needs, not just generic preferences.</li>
                  <li><strong>NYC Expertise:</strong> Built specifically for New York City with deep knowledge of neighborhoods, local culture, and what makes each area unique.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Use Cases for Spothaus</h2>
                <p>
                  <strong>Spothaus</strong> is perfect for various scenarios where traditional apps fall short:
                </p>
                
                <div className="use-cases">
                  <div className="use-case">
                    <h3>Remote Workers</h3>
                    <p>Find coffee shops with the right atmosphere for productivity, whether you need quiet solitude or ambient background noise.</p>
                  </div>
                  
                  <div className="use-case">
                    <h3>Date Planning</h3>
                    <p>Discover romantic restaurants with the perfect ambiance, from intimate lighting to the right noise level for conversation.</p>
                  </div>
                  
                  <div className="use-case">
                    <h3>Social Gatherings</h3>
                    <p>Locate bars and restaurants that match your group's energy, whether you want a lively party atmosphere or a relaxed social setting.</p>
                  </div>
                  
                  <div className="use-case">
                    <h3>Mood-Based Discovery</h3>
                    <p>Find places that match your current emotional state, from uplifting spots when you're feeling down to calming environments when you need peace.</p>
                  </div>
                </div>
              </section>

              <section className="article-section">
                <h2>The Technology Behind Spothaus</h2>
                <p>
                  <strong>Spothaus</strong> leverages cutting-edge AI and machine learning technologies:
                </p>
                
                <div className="tech-details">
                  <div className="tech-item">
                    <h3>Natural Language Processing (NLP)</h3>
                    <p>Advanced NLP models that understand context, sentiment, and nuanced language in both search queries and review analysis.</p>
                  </div>
                  
                  <div className="tech-item">
                    <h3>Sentiment Analysis</h3>
                    <p>AI-powered sentiment analysis that goes beyond positive/negative to understand the specific emotions and atmosphere described in reviews.</p>
                  </div>
                  
                  <div className="tech-item">
                    <h3>Machine Learning Matching</h3>
                    <p>Sophisticated ML algorithms that learn from user behavior and continuously improve matching accuracy over time.</p>
                  </div>
                </div>
              </section>

              <section className="article-section">
                <h2>Getting Started with Spothaus</h2>
                <p>
                  Ready to experience the future of place discovery? Here's how to get started with <strong>Spothaus</strong>:
                </p>
                
                <div className="getting-started">
                  <div className="step-item">
                    <div className="step-icon">
                      <CheckCircle size={24} />
                    </div>
                    <div className="step-content">
                      <h3>Download the App</h3>
                      <p>Available on the App Store for iOS devices (Android version coming soon)</p>
                    </div>
                  </div>
                  
                  <div className="step-item">
                    <div className="step-icon">
                      <CheckCircle size={24} />
                    </div>
                    <div className="step-content">
                      <h3>Describe Your Vibe</h3>
                      <p>Use natural language to tell <strong>Spothaus</strong> what you're looking for</p>
                    </div>
                  </div>
                  
                  <div className="step-item">
                    <div className="step-icon">
                      <CheckCircle size={24} />
                    </div>
                    <div className="step-content">
                      <h3>Discover Perfect Matches</h3>
                      <p>Browse AI-curated results in map or list view with detailed insights</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="article-section">
                <h2>Conclusion</h2>
                <p>
                  <strong>Spothaus</strong> represents a paradigm shift in how we discover and choose places to visit. By focusing on vibe, atmosphere, and the intangible qualities that make experiences memorable, <strong>Spothaus</strong> helps New Yorkers find places that truly resonate with their needs and preferences.
                </p>
                
                <p>
                  Whether you're a longtime resident looking to explore new neighborhoods or a visitor wanting to experience the authentic NYC vibe, <strong>Spothaus</strong> is your AI-powered companion for discovering the perfect spots that match your unique style and mood.
                </p>
                
                <div className="cta-box">
                  <h3>Ready to Find Your Perfect Vibe?</h3>
                  <p>Download <strong>Spothaus</strong> today and discover a new way to explore New York City</p>
                  <a href="/#/#download" className="cta-button">
                    Download Spothaus
                  </a>
                </div>
              </section>
            </div>
          </motion.article>
        </div>
      </main>

      {/* Footer */}
      <footer className="blog-footer">
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
              <a href="/#/#features">Features</a>
              <a href="/#/#how-it-works">How it Works</a>
              <a href="/#/#screenshots">Screenshots</a>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <a href="/#/">Home</a>
              <a href="/#/blog/what-is-spothaus">Blog</a>
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

export default BlogPage;
