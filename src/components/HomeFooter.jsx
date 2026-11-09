
import { Container } from "react-bootstrap";
import ZoomableCarousel from "./ZoomableCarousel";
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

import pic1 from "../assets/portfolio/mobile/pic1.png";
import pic2 from "../assets/portfolio/mobile/pic2.png";
import pic3 from "../assets/portfolio/mobile/pic3.png";
import pic4 from "../assets/portfolio/mobile/pic4.png";
import pic5 from "../assets/portfolio/mobile/pic5.png";
import pic6 from "../assets/portfolio/mobile/pic6.png";
import pic7 from "../assets/portfolio/mobile/pic7.png";
import pic8 from "../assets/portfolio/mobile/pic8.png";
import pic9 from "../assets/portfolio/mobile/pic9.png";
import pic10 from "../assets/portfolio/mobile/pic10.png";
import pic11 from "../assets/portfolio/mobile/pic11.png";
import pic12 from "../assets/portfolio/mobile/pic12.png";
import pic13 from "../assets/portfolio/mobile/pic13.png";
import pic14 from "../assets/portfolio/mobile/pic14.png";
import pic15 from "../assets/portfolio/mobile/pic15.png";
import pic16 from "../assets/portfolio/mobile/pic16.png";
import pic17 from "../assets/portfolio/mobile/pic17.png";

const desktopImages = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13,
  img14, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26,
  img27, img28, img29, img30,
];

const mobileImages = [
  pic1, pic2, pic3, pic4, pic5, pic6,
  pic7, pic8, pic9, pic10, pic11, pic12,
  pic13, pic14, pic15, pic16, pic17,
];

const portfolioItems = desktopImages.map((src, index) => ({
  src,
  alt: `Progetto web - schermata ${index + 1}`,
}));

const mobileItems = mobileImages.map((src, index) => ({
  src,
  alt: `Layout mobile - schermata ${index + 1}`,
}));

function HomeFooter() {
  return (
    <>
      <section className="home-footer">
        <Container>
          <h1>Inediti</h1>

          <ZoomableCarousel
            items={portfolioItems}
            imageClassName="home-footer__image"
            indicators={true}
          />
        </Container>
      </section>

      <section className="home-mobile-showcase">
        <Container>
          <h2>Mobile layout</h2>

          <ZoomableCarousel
            items={mobileItems}
            className="home-mobile-showcase__carousel"
            imageClassName="home-mobile-showcase__image"
          />
        </Container>
      </section>
    </>
  );
}

export default HomeFooter;
