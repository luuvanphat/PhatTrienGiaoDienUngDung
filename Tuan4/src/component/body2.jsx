import React from 'react';
import './chefify.css';

function Body2() {
  return (
    <div className="body2-container">
      {/* PHẦN HEADER CỦA TRANG (thông tin tác giả) */}
      <div className="body2-header">
        <div className="body2-profile">
          <img 
            src="/img/avatar.png" 
            alt="Emma Gonzalez" 
            className="body2-profile-img"
          />
          <div className="body2-profile-info">
            <h1>Emma Gonzalez's Recipe Box</h1>
            <p className="body2-profile-desc">
              Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former
              cooking editor at The Los Angeles Times. She is a recognized figure in the culinary 
              world, contributing to numerous cookbooks and food publications. Originally from 
              East Los Angeles, Emma now resides in New York City, where she explores a wide range 
              of culinary delights.
            </p>
            <div className="body2-profile-actions">
              <p className="subscribers">
                <strong>6.5k</strong> Subscribers
              </p>
              <button className="share-btn">
  Share 
  <img src='/img/Share fat.png' alt="Share Icon" style={{ width: '20px', height: '20px' }} />
</button>

            </div>
          </div>
        </div>
      </div>

      {/* PHẦN THANH TAB (Ví dụ: Saved Recipes, Favorites, v.v.) */}
      <div className="body2-tab">
        <ul>
          <li><a href="#saved-recipes" className="active">Saved Recipes</a></li>
          <li><a href="#favorites">Favorites</a></li>
          {/* Thêm tab khác nếu cần */}
        </ul>
      </div>

      {/* PHẦN GRID HIỂN THỊ MÓN ĂN */}
      <div className="body2-grid">
        
        {/* Card 1 */}
        <div className="body2-recipe-card">
          <img src="/img/italian_style_tomato_salad.png" alt="Italian-style tomato salad" />
          <p className="recipe-title">Italian-style tomato salad</p>
          {/* <img src='/img/Icon Button 73.png'></img> */}
          <p className="recipe-author">Recipe by Genevieve</p>
        </div>

        {/* Card 2 */}
        <div className="body2-recipe-card">
          <img src="/img/italian_style_tomato_salad.png" alt="Vegetable and shrimp spaghetti" />
          <p className="recipe-title">Vegetable and shrimp spaghetti</p>
          <p className="recipe-author">Recipe by Emma</p>
        </div>

        {/* Card 3 */}
        <div className="body2-recipe-card">
          <img src="/img/italian_style_tomato_salad.png" alt="Lotus delight salad" />
          <p className="recipe-title">Lotus delight salad</p>
          <p className="recipe-author">Recipe by Genevieve</p>
        </div>

        {/* Card 4 */}
        <div className="body2-recipe-card">
          <img src="/img/italian_style_tomato_salad.png" alt="Snack cakes" />
          <p className="recipe-title">Snack cakes</p>
          <p className="recipe-author">Recipe by Emma</p>
        </div>

        {/* Card 5 */}
        <div className="body2-recipe-card">
          <img src="/img/italian_style_tomato_salad.png" alt="Salad with cabbage and shrimp" />
          <p className="recipe-title">Salad with cabbage and shrimp</p>
          <p className="recipe-author">Recipe by Genevieve</p>
        </div>

        {/* Card 6 */}
        <div className="body2-recipe-card">
          <img src="/img/italian_style_tomato_salad.png" alt="Bean, shrimp, and potato" />
          <p className="recipe-title">Bean, shrimp, and potato</p>
          <p className="recipe-author">Recipe by Emma</p>
        </div>

        {/* Card 7 */}
        <div className="body2-recipe-card">
          <img src="/img/italian_style_tomato_salad.png" alt="Sunny-side up fried egg" />
          <p className="recipe-title">Sunny-side up fried egg</p>
          <p className="recipe-author">Recipe by Genevieve</p>
        </div>

        {/* Card 8 */}
        <div className="body2-recipe-card">
          <img src="/img/italian_style_tomato_salad.png" alt="Lotus delight salad" />
          <p className="recipe-title">Lotus delight salad</p>
          <p className="recipe-author">Recipe by Emma</p>
        </div>

      </div>
    </div>
  );
}

export default Body2;
