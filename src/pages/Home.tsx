import "../main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import image_musify from "../assets/images/musify.png";
// import { useNavigate } from "react-router-dom";

function Home() {
  // const navigate = useNavigate();

  // const changeRoute = () => {
  //   navigate("/project1");
  // };

  const changeRouteToMusify = () => {
    window.open("https://github.com/YwaoFugimoto/projectSocial", "_blank");
  };

  const changeRouteToSpotfy = () => {
    window.open("https://open.spotify.com/playlist/4QGwu3gfSwhLQBqzHKGc9D?si=6YRo8rCzTS29w-qukkBDoA", "_blank");    
  };

  return (
    <>
      <div className="page-container">
        <header className="headerMain">
          <h1>Ywao's portfolio</h1>
        </header>

        <main className="content-wrap">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              {/* <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button> */}
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1" // 2
                aria-label="Slide 2" // 3
              ></button>
            </div>

            {/* INICIO CAROUSEL */}

            <div className="carousel-inner">
              {/* PRIMEIRA JANELA  */}
              <div className="carousel-item active">
                <div className="carousel-background">
                  <img
                    src={image_musify}
                    className="carousel-image"
                    alt="Musify"
                  />
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Musify</h5>
                  <p>
                    Uma rede social focada em compartilhar letras de música.
                  </p>
                  <button className="btn btn-secondary" onClick={changeRouteToMusify}>
                    Abrir
                  </button>
                </div>
              </div>

              {/* SEGUNDA JANELA  */}



              {/* TERCEIRA JANELA CARREGANDO DEFAULT */}

              <div className="carousel-item">
                <div className="loading-container text-white">
                  <div className="loading-text">Carregando</div>
                  <div className="loading-bar ">
                    <div className="progress"></div>
                  </div>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Em breve</h5>
                  <p>Projeto em desenvolvimento...</p>
                  <button className="btn btn-secondary" onClick={changeRouteToSpotfy}>
                    Aguardar
                  </button>
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
              <span className="visually-hidden">Previous</span>
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
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </main>

        <footer className="footerMain">
          <div className="footerContent">
            <div className="contactItem ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="contactIcon"
              />
              <a
                className="text-secondary text-decoration-none"
                href="https://github.com/MeuUsuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/YwaoFugimoto
              </a>
            </div>
            <div className="contactItem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="contactIcon"
              />
              <a
                className="text-secondary text-decoration-none"
                href="https://www.linkedin.com/in/MeuUsuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ywaofugimoto
              </a>
            </div>
            <div className="contactItem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
                className="contactIcon"
              />
              <a
                className="text-secondary text-decoration-none"
                href="mailto:meuemail@example.com"
              >
                fugimoto.ywao@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
