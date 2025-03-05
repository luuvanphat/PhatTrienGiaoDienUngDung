import { useState } from 'react';
import './chefify.css';



function Header() {

    return (
        <>
        <div class="header">
        <div class="logo">
          <a href="#">
            <img src="../img/Group 9.png" alt="" />
          </a>
        </div>
        <div class="search-box">
          <button class="fa-solid fa-magnifying-glass">
            <input class="search" type="text" placeholder="Search" />
          </button>
        </div>

        <div class="menu">
          <nav>
            <ul>
              <li><a href="#Whattocook">What to cook</a></li>
              <li><a href="#Recipes">Recipes</a></li>
              <li><a href="#Ingredients">Ingredients</a></li>
              <li><a href="#Occasions">Occasions</a></li>
              <li><a href="#AboutUs">About Us</a></li>
            </ul>
          </nav>
        </div>
        <div class="box-check">
          <a href="#">
            <div>
              <img src="../img/check.png" alt="" />
            </div>
            <p>Your Recipe Box</p>
          </a>
        </div>
        <div class="avatar">
          <a href="#">
            <img src="../img/avatar.png" alt="" />
          </a>
        </div>
      </div>
        </>
    );
}
export default Header;