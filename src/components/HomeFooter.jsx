
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
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
import img14 from "../assets/portfolio/img14.png";
import img16 from "../assets/portfolio/img16.png";
import img17 from "../assets/portfolio/img17.png";
import img18 from "../assets/portfolio/img18.png";
import img19 from "../assets/portfolio/img19.png";
import img20 from "../assets/portfolio/img20.png";
import img21 from "../assets/portfolio/img21.png";
import img22 from "../assets/portfolio/img22.png";
import img23 from "../assets/portfolio/img23.png";
import img24 from "../assets/portfolio/img24.png";
import img25 from "../assets/portfolio/img25.png";
import img26 from "../assets/portfolio/img26.png";
import img27 from "../assets/portfolio/img27.png";
import img28 from "../assets/portfolio/img28.png";
import img29 from "../assets/portfolio/img29.png";
import img30 from "../assets/portfolio/img30.png";

const portfolioItems = [
  { image: img1, alt: "Lyle's Coaching - schermata 1" },
  { image: img2, alt: "euLive - homepage" },
  { image: img3, alt: "ZoOversee - schermata 1" },
  { image: img4, alt: "Bianchi & Api - homepage" },
  { image: img5, alt: "Lyle's Coaching - schermata 2" },
  { image: img6, alt: "Bianchi & Api - prodotti" },
  { image: img7, alt: "Portfolio - schermata 7" },
  { image: img8, alt: "Lyle's Coaching - schermata 3" },
  { image: img9, alt: "ZoOversee - schermata 2" },
  { image: img10, alt: "ZoOversee - schermata 3" },
  { image: img11, alt: "ZoOversee - schermata 4" },
  { image: img12, alt: "Lyle's Coaching - schermata 4" },
  { image: img13, alt: "Lyle's Coaching - schermata 5" },
  { image: img14, alt: "Lyle's Coaching - schermata 6" },
  { image: img16, alt: "ZoOversee - schermata 5" },
  { image: img17, alt: "Bianchi & Api - iniziative" },
  { image: img18, alt: "euLive - registrazione artista" },
  { image: img19, alt: "euLive - calendario eventi" },
  { image: img20, alt: "euLive - registrazione utente" },
  { image: img21, alt: "euLive - dettaglio evento" },

  // SerraIdee
  { image: img22, alt: "SerraIdee - homepage" },
  { image: img23, alt: "SerraIdee - presentazione" },
  { image: img24, alt: "SerraIdee - visione" },
  { image: img25, alt: "SerraIdee - ricerca" },
  { image: img26, alt: "SerraIdee - attività" },
  { image: img27, alt: "SerraIdee - partecipazione" },
  { image: img28, alt: "SerraIdee - footer" },
  { image: img29, alt: "SerraIdee - versione chiara" },
  { image: img30, alt: "SerraIdee - dialogo" },
];

function HomeFooter() {
  return (
    <section className="home-footer">
      <Container>
        <h1>Inediti</h1>

        <Carousel interval={null}>
          {portfolioItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="home-footer__image"
                src={item.image}
                alt={item.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default HomeFooter;
