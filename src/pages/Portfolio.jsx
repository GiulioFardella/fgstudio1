import { Container } from "react-bootstrap";
import ZoomableCarousel from "../components/ZoomableCarousel";
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

import gem1 from "../assets/portfolio/gem1.png";
import gem2 from "../assets/portfolio/gem2.png";
import gem3 from "../assets/portfolio/gem3.png";
import gem4 from "../assets/portfolio/gem4.png";
import gem5 from "../assets/portfolio/gem5.png";

function ProjectCarousel({ project }) {
  return (
    <article className="portfolio-project">
      <h2 className="portfolio-project__title">
        {project.title}
      </h2>

      <ZoomableCarousel
        items={project.slides}
        className="portfolio-project__carousel"
        imageClassName="portfolio-project__image"
      />

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
      title: "SerraIdee",
      slides: [
        { src: img22, alt: "SerraIdee - homepage" },
        { src: img23, alt: "SerraIdee - presentazione" },
        { src: img24, alt: "SerraIdee - visione" },
        { src: img25, alt: "SerraIdee - ricerca" },
        { src: img26, alt: "SerraIdee - attività" },
        { src: img27, alt: "SerraIdee - partecipazione" },
        { src: img28, alt: "SerraIdee - footer" },
        { src: img29, alt: "SerraIdee - versione chiara" },
        { src: img30, alt: "SerraIdee - dialogo" },
      ],
      description:
        "SerraIdee è un portale culturale dedicato al confronto e alla condivisione della conoscenza. Il progetto riunisce incontri, podcast, discussioni e contenuti video in uno spazio digitale pensato per mettere in dialogo idee, persone e prospettive differenti. L’interfaccia alterna composizioni editoriali, tipografia espressiva e contrasti cromatici, con una doppia identità visiva chiara e scura.",
    },

    {
      title: "euLive",
      slides: [
        { src: img2, alt: "euLive - homepage" },
        { src: img18, alt: "euLive - registrazione artista" },
        { src: img19, alt: "euLive - calendario eventi" },
        { src: img21, alt: "euLive - dettaglio evento" },
        { src: img20, alt: "euLive - registrazione utente" },
      ],
      description:
        "euLive è una piattaforma musicale dedicata a eventi analogici e semi-analogici. Il progetto valorizza artisti, utenti, calendario serate, registrazione artista e registrazione pubblico, con uno stile urbano, scuro e ad alto impatto visivo.",
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
      title: "GEM System 98",
      slides: [
        { src: gem1, alt: "GEM System 98 - schermata 1" },
        { src: gem2, alt: "GEM System 98 - schermata 2" },
        { src: gem3, alt: "GEM System 98 - schermata 3" },
        { src: gem4, alt: "GEM System 98 - schermata 4" },
        { src: gem5, alt: "GEM System 98 - schermata 5" },
      ],
      description:
        "GEM System 98 è un gestionale industriale progettato per aziende manifatturiere, pensato per centralizzare personale, presenze, ferie e permessi, produzione, segnalazioni, proposte dei dipendenti e comunicazioni aziendali. L’interfaccia riprende il linguaggio visivo dei gestionali Windows 98/2000, combinandolo con una struttura modulare moderna. Il prototipo è sviluppato in React e prevede un’evoluzione backend con Java, Spring Boot, PostgreSQL e REST API.",
    },

    {
      title: "Bianchi & Api",
      slides: [
        { src: img4, alt: "Bianchi & Api - homepage" },
        { src: img6, alt: "Bianchi & Api - prodotti" },
        { src: img17, alt: "Bianchi & Api - iniziative e ricerca" },
      ],
      description:
        "Bianchi & Api è un e-commerce per un’apicoltura artigianale. Presenta una homepage narrativa, una sezione prodotti con mieli e prezzi, e un’area dedicata a territorio, tutela delle api e ricerca entomologica.",
    },
  ];

  return (
    <main className="portfolio-page">
      <section className="portfolio-hero page-hero">
        <Container>
          <p className="portfolio-hero__eyebrow">
            PORTFOLIO
          </p>

          <h1>
            Progetti, idee e direzioni visive.
          </h1>

          <p className="portfolio-hero__text">
            Una raccolta di siti e concept costruiti per essere chiari,
            funzionali e riconoscibili.
          </p>
        </Container>
      </section>

      <section className="portfolio-section">
        <Container>
          <p className="portfolio-section__label">
            PROGETTI
          </p>

          {projects.map((project) => (
            <ProjectCarousel
              key={project.title}
              project={project}
            />
          ))}
        </Container>
      </section>
    </main>
  );
}

export default Portfolio;