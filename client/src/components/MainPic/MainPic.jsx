import React from "react";

const MainPic = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
                 <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
                         <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/firstPic.jpeg"
              height="100%"
              width="100%"
              alt="first pic"
            ></img>

            <div className="carousel-caption d-none d-md-block">
              <h5>
                Использую только самые лучшие красивые и свежие продукты,выбирая
                все тщательно.
              </h5>
            </div>
          </div>
          <div className="carousel-item">
          <img
              src="images/firstPic.jpeg"
              height="100%"
              width="100%"
              alt="first pic"
            ></img>

            <div className="carousel-caption d-none d-md-block">
              <h5>Круглосуточная доставка и самовывоз</h5>
            </div>
          </div>
          <div className="carousel-item">
          <img
              src="images/firstPic.jpeg"
              height="100%"
              width="100%"
              alt="first pic"
            ></img>

            <div className="carousel-caption d-none d-md-block">
              <h5>Круглосуточная доставка и самовывоз</h5>
            </div>
          </div>
          <div className="carousel-item">
          <img
              src="images/firstPic.jpeg"
              height="100%"
              width="100%"
              alt="first pic"
            ></img>

            <div className="carousel-caption d-none d-md-block">
              <h5>Круглосуточная доставка и самовывоз</h5>
            </div>
          </div>
          <div className="carousel-item">
          <img
              src="images/firstPic.jpeg"
              height="100%"
              width="100%"
              alt="first pic"
            ></img>

            <div className="carousel-caption d-none d-md-block">
              <h5>
                Использую только самые лучшие красивые и свежие продукты,выбирая
                все тщательно.
              </h5>
              {/* <p>Некоторый репрезентативный заполнитель для третьего слайда.</p> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  );
};

export default MainPic;
