import { Container, Carousel } from "react-bootstrap";
import "../css/portfolio.css";

import lylesImg1 from "../assets/portfolio/img1.png";
import lylesImg2 from "../assets/portfolio/img2.png";
import lylesImg3 from "../assets/portfolio/img3.png";
import lylesImg4 from "../assets/portfolio/img4.png";
import lylesImg8 from "../assets/portfolio/img8.png";
import lylesImg12 from "../assets/portfolio/img12.png";
import lylesImg13 from "../assets/portfolio/img13.png";

import zooverseeImg6 from "../assets/portfolio/img6.png";
import zooverseeImg7 from "../assets/portfolio/img7.png";
import zooverseeImg5 from "../assets/portfolio/img5.png";
import zooverseeImg9 from "../assets/portfolio/img9.png";
import zooverseeImg10 from "../assets/portfolio/img10.png";
import zooverseeImg11 from "../assets/portfolio/img11.png";

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
            {slide.src ? (
              <img
                className="portfolio-project__image"
                src={slide.src}
                alt={slide.alt}
              />
            ) : (
              <div className="portfolio-project__placeholder">
                <span>{slide.label}</span>
              </div>
            )}
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
  const inediti = [
    {
      title: "Lyle's Coaching",
      slides: [
        { src: lylesImg1, alt: "Lyle's Coaching - schermata 1" },
        { src: lylesImg2, alt: "Lyle's Coaching - schermata 2" },
        { src: lylesImg3, alt: "Lyle's Coaching - schermata 3" },
        { src: lylesImg4, alt: "Lyle's Coaching - schermata 4" },
        { src: lylesImg8, alt: "Lyle's Coaching - schermata 5" },
        { src: lylesImg12, alt: "Lyle's Coaching - schermata 6" },
        { src: lylesImg13, alt: "Lyle's Coaching - schermata 7" },
      ],
      description:
        "Lyle’s Coaching è una piattaforma dedicata al fitness che mette in contatto gli utenti con un personal trainer certificato. Permette di acquistare schede di allenamento, inviare richieste tramite form pubblico, creare un account e accedere a un’area personale. Include richieste per piani su misura, pannello admin e pagamenti gestiti tramite Stripe.",
    },
    {
      title: "ZoOversee",
      slides: [
        { src: zooverseeImg6, alt: "ZoOversee - schermata 1" },
        { src: zooverseeImg7, alt: "ZoOversee - schermata 2" },
        { src: zooverseeImg5, alt: "ZoOversee - schermata 3" },
        { src: zooverseeImg9, alt: "ZoOversee - schermata 4" },
        { src: zooverseeImg10, alt: "ZoOversee - schermata 5" },
        { src: zooverseeImg11, alt: "ZoOversee - schermata 6" },
      ],
      description:
        "ZoOversee è una piattaforma dedicata alla tutela dell’ambiente e delle specie in via d’estinzione. Permette di candidarsi per missioni in tutto il mondo, sostenere singoli progetti tramite adozioni a distanza e accedere al proprio profilo utente. Le donazioni vengono gestite tramite Stripe.",
    },
  ];

  const mockups = [
    {
      title: "Mockup in arrivo 01",
      slides: [
        { label: "Spazio per screen mockup 01" },
        { label: "Spazio per screen mockup 02" },
      ],
      description:
        "Una nuova direzione visiva sarà inserita qui prossimamente.",
    },
    {
      title: "Mockup in arrivo 02",
      slides: [
        { label: "Spazio per screen mockup 01" },
        { label: "Spazio per screen mockup 02" },
      ],
      description:
        "Un secondo progetto mockup verrà aggiunto in questa sezione.",
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
          <p className="portfolio-section__label">INEDITI</p>

          {inediti.map((project) => (
            <ProjectCarousel key={project.title} project={project} />
          ))}
        </Container>
      </section>

      <section className="portfolio-section portfolio-section--mockups">
        <Container>
          <p className="portfolio-section__label">MOCKUPS</p>

          {mockups.map((project) => (
            <ProjectCarousel key={project.title} project={project} />
          ))}
        </Container>
      </section>
    </main>
  );
}

export default Portfolio;