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
              <h1>
                Использую только самые лучшие красивые и свежие продукты,выбирая
                все тщательно
              </h1>
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
              <h1>Круглосуточная доставка и самовывоз</h1>
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
              <h1>
                Фиксированная цена, не меняется по факту готовности букета
              </h1>
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
              <h1>
                Разнообразие букетов, композиций, всегда готова
                экспериментировать,делать что то новое
              </h1>
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
              <h1>
                Индивидуальный подход к каждому заказу.Учитываются вкусы и
                пожелания, измененения
              </h1>
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
