import Carousel from "react-bootstrap/Carousel";
import "../css/homefooter.css"
function HomeFooter() {
  return (
    <section className="home-footer">
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="carousel-placeholder">
            <p>Mockup 01</p>
          </div>

          <Carousel.Caption>
            <h3>Progetto editoriale</h3>
            <p>Sito essenziale per un brand creativo.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-placeholder">
            <p>Mockup 02</p>
          </div>

          <Carousel.Caption>
            <h3>Attività locale</h3>
            <p>Identità chiara, informazioni immediate.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-placeholder">
            <p>Mockup 03</p>
          </div>

          <Carousel.Caption>
            <h3>Portfolio professionale</h3>
            <p>Uno spazio pulito per mostrare il proprio lavoro.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default HomeFooter;