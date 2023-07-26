function App() {
  return (
    //clear - deletes all unecessary
    <div className="wrapper clear">
      {/* header block with 2 headers */}
      {/* using macro classes from module */}
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" />
          <div className="headerInfo">
            <h3 classname="text-uppercase">React Sneakers</h3>
            <p className="opacity-5"> Best Sneakers Shop</p>
          </div>
        </div>

        <ul className="d-flex">
          <li classname="mr-30">
            <img width={18} height={18} src="img/basket.png" />
            <span>0 USD</span>
          </li>
          <li>
            <img width={18} height={18} src="img/user.png" />
          </li>
        </ul>
      </header>
      {/* Main block with sneakers showcase */}
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>
        <div className="d-flex">
          {/* One item sneaker card */}
          <div className="card">
            {/* Photo of sneakers */}
            <img width={133} height={112} src="img/sneakers/1.png" />
            <h5>Men's sneakers nikeair-270 for running</h5>
            <div className="d-flex justify-between">
              {/* shopping card */}
              <div className="d-flex flex-column align-center">
                <span>Price:</span>
                <b>145USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          {/* One item sneaker card */}
          <div className="card">
            {/* Photo of sneakers */}
            <img width={133} height={112} src="img/sneakers/2.png" />
            <h5>
              Quality and stylish womens running sneakers Nike Airmax Black
            </h5>
            <div className="d-flex justify-between">
              {/* shopping card */}
              <div className="d-flex flex-column align-center">
                <span>Price:</span>
                <b>80USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          {/* One item sneaker card */}
          <div className="card">
            {/* Photo of sneakers */}
            <img width={133} height={112} src="img/sneakers/3.png" />
            <h5>Best Men's Sneakers for Running Kalenji-100 Gray</h5>
            <div className="d-flex justify-between">
              {/* shopping card */}
              <div className="d-flex flex-column align-center">
                <span>Price:</span>
                <b>120USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          {/* One item sneaker card */}
          <div className="card">
            {/* Photo of sneakers */}
            <img width={133} height={112} src="img/sneakers/4.png" />
            <h5>Men's Sneakers Adidas Yeezy 100% original</h5>
            <div className="d-flex justify-between">
              {/* shopping card */}
              <div className="d-flex flex-column align-center">
                <span>Price:</span>
                <b>100USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
