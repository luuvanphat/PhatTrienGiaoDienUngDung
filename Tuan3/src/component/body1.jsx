import './chefify.css'; 

function Body1() {
  return (
    <>
      <div className="body">
        <div className="left">
          <div className="filter">
            <a href="#"><img src="/img/list_filter.png" alt="Filter" /></a>
            <p>FILTERS</p>
          </div>

          <div className="type">
            <p>Type</p>
            <div className="option-type">
              <div className="type-left">
                <div className="component-type">
                  <div>
                    <img src="/img/checkbox.png" alt="Checkbox" />
                  </div>
                  <p>Pan-fried</p>
                </div>
                <div className="component-type">
                  <div>
                    <img src="/img/checkboxpink.png" alt="Checkbox" />
                  </div>
                  <p>Grilled</p>
                </div>
                <div className="component-type">
                  <div>
                    <img src="/img/checkbox.png" alt="Checkbox" />
                  </div>
                  <p>Sauteed</p>
                </div>
                <div className="component-type">
                  <div>
                    <img src="/img/checkbox.png" alt="Checkbox" />
                  </div>
                  <p>Steamed</p>
                </div>
              </div>
              <div className="type-right">
                <div className="component-type">
                  <div>
                    <img src="/img/checkbox.png" alt="Checkbox" />
                  </div>
                  <p>Stir-fried</p>
                </div>
                <div className="component-type">
                  <div>
                    <img src="/img/checkboxpink.png" alt="Checkbox" />
                  </div>
                  <p>Roasted</p>
                </div>
                <div className="component-type">
                  <div>
                    <img src="/img/checkbox.png" alt="Checkbox" />
                  </div>
                  <p>Baked</p>
                </div>
                <div className="component-type">
                  <div>
                    <img src="/img/checkbox.png" alt="Checkbox" />
                  </div>
                  <p>Stewed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="time">
            <p>Time</p>
            <div className="time-slider">
              <div className="time-minutes">
                <p>30 minutes</p>
                <p>50 minutes</p>
              </div>
              <div className="slider">
                <img src="/img/slider.png" alt="Slider" />
              </div>
            </div>
          </div>

          <div className="rating">
            <p>Rating</p>
            <div className="rating-check">
              <div className="rating-component">
                <img src="/img/checkbox.png" alt="Checkbox" />
                <img src="/img/rating_5.png" alt="5 Stars" />
              </div>
              <div className="rating-component">
                <img src="/img/checkbox.png" alt="Checkbox" />
                <img src="/img/rating_4.png" alt="4 Stars" />
              </div>
              <div className="rating-component">
                <img src="/img/checkboxpink.png" alt="Checkbox" />
                <img src="/img/rating_3.png" alt="3 Stars" />
              </div>
              <div className="rating-component">
                <img src="/img/checkboxpink.png" alt="Checkbox" />
                <img src="/img/rating_2.png" alt="2 Stars" />
              </div>
              <div className="rating-component">
                <img src="/img/checkboxpink.png" alt="Checkbox" />
                <img src="/img/rating_1.png" alt="1 Star" />
              </div>
            </div>
          </div>
          
          <div>
            <button className="btn-apply" type="submit">Apply</button>
          </div>
        </div>

        <div className="right">
          <p className="text-sorry">Sorry, no results were found for "cakescascsa"</p>
          <div>
            <img src="/img/nothing.png" alt="Nothing Found" />
          </div>
          <p className="text-description">We have all your independence Day sweets covered.</p>
          <div className="difference-option">
            <a href="#" style={{ backgroundColor: "#ffeff5", color: "#dd8dac" }}>Sweet Cake</a>
            <a href="#" style={{ backgroundColor: "#f4f0ff", color: "#bba0e5" }}>Black Cake</a>
            <a href="#" style={{ backgroundColor: "#feeff5", color: "#eaa4c0" }}>Pozole Verde</a>
            <a href="#" style={{ backgroundColor: "#ecfbff", color: "#9eced2" }}>Healthy food</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body1;
