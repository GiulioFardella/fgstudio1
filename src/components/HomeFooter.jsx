import Carousel from "react-bootstrap/Carousel";
import "../css/homefooter.css";

import img1 from "../assets/portfolio/img1.png";
import img2 from "../assets/portfolio/img2.png";
import img3 from "../assets/portfolio/img3.png";
import img4 from "../assets/portfolio/img4.png";
import img5 from "../assets/portfolio/img5.png";
import img6 from "../assets/portfolio/img6.png";
import img7 from "../assets/portfolio/img7.png";
import img8 from "../assets/portfolio/img8.png";
import img9 from "../assets/portfolio/img9.png";
import img10 from "../assets/portfolio/img10.png";
import img11 from "../assets/portfolio/img11.png";
import img12 from "../assets/portfolio/img12.png";
import img13 from "../assets/portfolio/img13.png";
import { Container } from "react-bootstrap";
const portfolioItems = [
  { image: img1, alt: "Mockup 1" },
  { image: img2, alt: "Mockup 2" },
  { image: img3, alt: "Mockup 3" },
  { image: img4, alt: "Mockup 4" },
  { image: img5, alt: "Mockup 5" },
  { image: img6, alt: "Mockup 6" },
  { image: img7, alt: "Mockup 7" },
  { image: img8, alt: "Mockup 8" },
  { image: img9, alt: "Mockup 9" },
  { image: img10, alt: "Mockup 10" },
  { image: img11, alt: "Mockup 11" },
  { image: img12, alt: "Mockup 12" },
  { image: img13, alt: "Mockup 13" },
];

function HomeFooter() {
  return (
    <section className="home-footer">
      <Container>
        <h1>Inediti</h1>
        <Carousel interval={null}>
          {portfolioItems.map((item) => (
            <Carousel.Item key={item.title}>
              <img
                className="home-footer__image"
                src={item.image}
                alt={item.alt}
              />

              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default HomeFooter;
