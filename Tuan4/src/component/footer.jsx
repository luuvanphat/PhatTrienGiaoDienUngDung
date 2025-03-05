import { useState } from 'react';
import './chefify.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div>
            <p className="tittle-footer">About Us</p>
            <p>
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <input type="text" placeholder="Enter your email" />
            <button
              type="submit"
              style={{ backgroundColor: "rgba(245, 72, 134, 255)" }}
            >
              Send
            </button>
          </div>
          <div className="policy">
            <div>
              <img src="/img/chefifywhite.png" alt="Chefify Logo" />
            </div>
            <p>2023 Chefify Company</p>
            <p>Terms of Service | Privacy Policy</p>
          </div>
        </div>
        
        <div className="center">
          <p className="tittle-footer">Learn More</p>
          <div className="menu">
            <nav>
              <ul>
                <li><a href="#">Our Cooks</a></li>
                <li><a href="#">See Our Features</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </nav>
          </div>

          <p className="tittle-footer" style={{ marginTop: "42px" }}>Shop</p>
          <div className="menu">
            <nav>
              <ul>
                <li><a href="#">Gift Subscription</a></li>
                <li><a href="#">Send us Feedback</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="right">
          <p className="tittle-footer">Recipes</p>
          <div className="menu">
            <nav>
              <ul>
                <li><a href="#">What to Cook This Week</a></li>
                <li><a href="#">Pasta</a></li>
                <li><a href="#">Dinner</a></li>
                <li><a href="#">Healthy</a></li>
                <li><a href="#">Vegetable</a></li>
                <li><a href="#">Vegan</a></li>
                <li><a href="#">Christmas</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
