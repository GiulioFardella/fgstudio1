import { Container, Carousel } from "react-bootstrap";
import "../css/portfolio.css";

import img1 from "../assets/portfolio/img1.png";
import img2 from "../assets/portfolio/img2.png";
import img3 from "../assets/portfolio/img3.png";
import img4 from "../assets/portfolio/img4.png";
import img5 from "../assets/portfolio/img5.png";
import img6 from "../assets/portfolio/img6.png";
import img8 from "../assets/portfolio/img8.png";
import img9 from "../assets/portfolio/img9.png";
import img10 from "../assets/portfolio/img10.png";
import img11 from "../assets/portfolio/img11.png";
import img12 from "../assets/portfolio/img12.png";
import img13 from "../assets/portfolio/img13.png";
import img14 from "../assets/portfolio/img14.png";
import img15 from "../assets/portfolio/img15.png";
import img16 from "../assets/portfolio/img16.png";
import img17 from "../assets/portfolio/img17.png";
import img18 from "../assets/portfolio/img18.png";
import img19 from "../assets/portfolio/img19.png";
import img20 from "../assets/portfolio/img20.png";
import img21 from "../assets/portfolio/img21.png";

function ProjectCarousel({ project }) {
  return (
    <article className="portfolio-project">
      <h2 className="portfolio-project__title">{project.title}</h2>

      <Carousel
        interval={null}
        indicators={false}
        className="portfolio-project__carousel"
      >
        {project.slides.map((slide, index) => (
          <Carousel.Item key={`${project.title}-${index}`}>
            <img
              className="portfolio-project__image"
              src={slide.src}
              alt={slide.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <p className="portfolio-project__description">
        {project.description}
      </p>
    </article>
  );
}

function Portfolio() {
  const projects = [
    {
      title: "Lyle's Coaching",
      slides: [
        { src: img1, alt: "Lyle's Coaching - schermata 1" },
        { src: img5, alt: "Lyle's Coaching - schermata 2" },
        { src: img8, alt: "Lyle's Coaching - schermata 3" },
        { src: img12, alt: "Lyle's Coaching - schermata 4" },
        { src: img13, alt: "Lyle's Coaching - schermata 5" },
        { src: img14, alt: "Lyle's Coaching - schermata 6" },
      ],
      description:
        "Lyle’s Coaching è una piattaforma fitness pensata per mettere in contatto utenti e personal trainer. Include presentazione dei servizi, acquisto di schede, richieste personalizzate, area utente, pannello admin e pagamenti tramite Stripe.",
    },
    {
      title: "euLive",
      slides: [
        { src: img2, alt: "euLive - homepage" },
        { src: img18, alt: "euLive - registrazione artista" },
        { src: img19, alt: "euLive - calendario eventi" },
        { src: img21, alt: "euLive - dettaglio evento" },
        { src: img20, alt: "euLive - registrazione utente" },
        { src: img21, alt: "euLive - popup serata live" },
      ],
      description:
        "euLive è un mockup frontend per una piattaforma musicale dedicata a eventi analogici e semi-analogici. Il progetto valorizza artisti, utenti, calendario serate, registrazione artista e registrazione pubblico, con uno stile urbano, scuro e ad alto impatto visivo.",
    },
    {
      title: "ZoOversee",
      slides: [
        { src: img10, alt: "ZoOversee - schermata 1" },
        { src: img3, alt: "ZoOversee - schermata 2" },
        { src: img9, alt: "ZoOversee - schermata 3" },
        { src: img11, alt: "ZoOversee - schermata 4" },
        { src: img16, alt: "ZoOversee - schermata 5" },
      ],
      description:
        "ZoOversee è una piattaforma dedicata alla tutela ambientale e alle specie in via d’estinzione. Permette di esplorare missioni, candidarsi a progetti internazionali, sostenere iniziative tramite adozioni a distanza e gestire il proprio profilo utente.",
    },
    {
      title: "Bianchi & Api",
      slides: [
        { src: img4, alt: "Bianchi & Api - homepage" },
        { src: img6, alt: "Bianchi & Api - prodotti" },
        { src: img15, alt: "Bianchi & Api - griglia mieli" },
        { src: img17, alt: "Bianchi & Api - iniziative e ricerca" },
      ],
      description:
        "Bianchi & Api è un mockup frontend per un’apicoltura artigianale. Presenta una homepage narrativa, una sezione prodotti con mieli e prezzi, e un’area dedicata a territorio, tutela delle api e ricerca entomologica.",
    },
  ];

  return (
    <main className="portfolio-page">
      <section className="portfolio-hero page-hero">
        <Container>
          <p className="portfolio-hero__eyebrow">PORTFOLIO</p>

          <h1>Progetti, idee e direzioni visive.</h1>

          <p className="portfolio-hero__text">
            Una raccolta di siti, concept e mockup costruiti per essere chiari,
            funzionali e riconoscibili.
          </p>
        </Container>
      </section>

      <section className="portfolio-section">
        <Container>
          <p className="portfolio-section__label">PROGETTI</p>

          {projects.map((project) => (
            <ProjectCarousel key={project.title} project={project} />
          ))}
        </Container>
      </section>
    </main>
  );
}

export default Portfolio;