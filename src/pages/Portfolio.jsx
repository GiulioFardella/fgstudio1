
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

// COMPONENTE PROGETTO

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

      <div className="portfolio-project__content">
        {project.description.map((paragraph, index) => (
          <p
            key={index}
            className="portfolio-project__description"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

// PORTFOLIO

function Portfolio() {
  const projects = [
    // 1. LYLE'S COACHING
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

      description: [
        `Lyle's Coaching è una piattaforma web dedicata al fitness e al personal training, progettata per mettere in contatto utenti e professionisti attraverso un ecosistema digitale che integra presentazione dei servizi, vendita di prodotti digitali e gestione delle richieste personalizzate.`,

        `L'applicazione comprende funzionalità di registrazione, login e autenticazione degli utenti, con aree riservate dedicate alla gestione del profilo e all'accesso ai servizi. La piattaforma consente di consultare cataloghi di schede di allenamento, selezionare prodotti digitali e pacchetti di consulenza e completare il processo di acquisto attraverso l'integrazione con Stripe per la gestione dei pagamenti online.`,

        `Sono presenti form strutturati per richieste personalizzate, contatti e acquisto di pacchetti, con flussi dedicati alla raccolta e all'organizzazione delle esigenze degli utenti. Il pannello amministrativo permette di gestire contenuti e servizi, distinguendo le funzionalità disponibili al pubblico da quelle riservate all'amministrazione.`,

        `Il progetto integra logiche applicative per l'autenticazione, la gestione delle sessioni, l'organizzazione dei cataloghi e dei processi di acquisto, con particolare attenzione alla progettazione responsive, alla navigazione e all'esperienza utente.`,
      ],
    },

    // 2. SERRAIDEE
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

      description: [
        `SerraIdee è un portale culturale e multimediale dedicato alla divulgazione, al confronto intellettuale e alla condivisione della conoscenza. Il progetto nasce con l'obiettivo di creare uno spazio digitale capace di favorire il dialogo tra idee, persone e prospettive differenti.`,

        `La piattaforma organizza incontri culturali, podcast, discussioni, contenuti editoriali e materiali audiovisivi attraverso una struttura informativa suddivisa in sezioni tematiche. L'interfaccia valorizza la presentazione dei contenuti e la navigazione tra differenti modalità di fruizione, integrando elementi dedicati alla comunicazione culturale e multimediale.`,

        `Dal punto di vista della progettazione UI/UX, SerraIdee utilizza composizioni editoriali, tipografia espressiva, gerarchie visive e contrasti cromatici per costruire un'esperienza riconoscibile. Il sistema grafico comprende una doppia identità visiva Light/Dark, pensata per adattare la presentazione dei contenuti a differenti preferenze di visualizzazione.`,

        `Il progetto pone particolare attenzione alla progettazione responsive, alla leggibilità, alla modularità dei componenti e all'organizzazione dell'architettura informativa, combinando sviluppo web, comunicazione visiva e divulgazione della conoscenza.`,
      ],
    },

    // 3. EULIVE
    {
      title: "euLive",

      slides: [
        { src: img2, alt: "euLive - homepage" },
        { src: img18, alt: "euLive - registrazione artista" },
        { src: img19, alt: "euLive - calendario eventi" },
        { src: img21, alt: "euLive - dettaglio evento" },
        { src: img20, alt: "euLive - registrazione utente" },
      ],

      description: [
        `euLive è una piattaforma web dedicata alla promozione della musica dal vivo e all'organizzazione di eventi analogici e semi-analogici. Il progetto nasce per creare un punto d'incontro digitale tra artisti, pubblico e realtà musicali, valorizzando la dimensione autentica delle esibizioni dal vivo.`,

        `La piattaforma comprende sezioni dedicate alla presentazione degli artisti, alla consultazione degli eventi e alla visualizzazione di un calendario delle serate. Le schede evento organizzano le informazioni relative agli appuntamenti musicali, facilitando la navigazione e la consultazione dei contenuti.`,

        `Il progetto distingue due differenti percorsi di registrazione: uno dedicato agli artisti e uno rivolto al pubblico. I moduli sono progettati per raccogliere informazioni specifiche in base alla tipologia di utente e rappresentano la base per una gestione differenziata dei profili e delle interazioni con la piattaforma.`,

        `L'interfaccia utilizza un'identità visiva urbana e contemporanea, caratterizzata da tema scuro, contrasti marcati, tipografia espressiva e componenti grafici ad alto impatto. La struttura responsive combina organizzazione dei dati, modularità delle sezioni e progettazione dei flussi utente.`,
      ],
    },

    // 4. ZOOVERSEE
    {
      title: "ZoOversee",

      slides: [
        { src: img10, alt: "ZoOversee - schermata 1" },
        { src: img3, alt: "ZoOversee - schermata 2" },
        { src: img9, alt: "ZoOversee - schermata 3" },
        { src: img11, alt: "ZoOversee - schermata 4" },
        { src: img16, alt: "ZoOversee - schermata 5" },
      ],

      description: [
        `ZoOversee è una piattaforma digitale dedicata alla tutela ambientale, alla conservazione della biodiversità e alla salvaguardia delle specie animali a rischio di estinzione. Il progetto nasce con l'obiettivo di rendere più accessibile la conoscenza e la partecipazione alle iniziative internazionali di conservazione.`,

        `L'applicazione organizza missioni ambientali, progetti di tutela e iniziative di sensibilizzazione attraverso sezioni informative e schede dedicate. Gli utenti possono esplorare le missioni disponibili, consultare i dettagli dei progetti e candidarsi a iniziative internazionali mediante moduli strutturati.`,

        `La piattaforma comprende funzionalità dedicate al sostegno delle iniziative attraverso programmi di adozione a distanza e un'area personale per la gestione del profilo utente. I percorsi applicativi sono organizzati per facilitare la consultazione dei progetti e l'interazione con i servizi disponibili.`,

        `L'interfaccia combina progettazione responsive, organizzazione dei contenuti, componenti modulari e flussi di navigazione dedicati. L'identità visiva è orientata alla comunicazione scientifica e ambientale, con attenzione alla chiarezza delle informazioni e all'accessibilità dell'esperienza utente.`,
      ],
    },

    // 5. GEM SYSTEM 98
    {
      title: "GEM System 98",

      slides: [
        { src: gem1, alt: "GEM System 98 - schermata 1" },
        { src: gem2, alt: "GEM System 98 - schermata 2" },
        { src: gem3, alt: "GEM System 98 - schermata 3" },
        { src: gem4, alt: "GEM System 98 - schermata 4" },
        { src: gem5, alt: "GEM System 98 - schermata 5" },
      ],

      description: [
        `GEM System 98 è un progetto di gestionale industriale modulare, concepito per digitalizzare e centralizzare i principali processi organizzativi delle aziende manifatturiere. La piattaforma riunisce in un unico ambiente digitale strumenti per il coordinamento del personale, delle attività produttive e delle comunicazioni interne.`,

        `Il sistema è progettato per comprendere moduli dedicati alla gestione dei dipendenti, rilevazione delle presenze, ferie e permessi, monitoraggio della produzione, segnalazioni operative, proposte dei lavoratori e comunicazioni aziendali. L'organizzazione modulare permette di distinguere le diverse aree funzionali e semplificare l'accesso alle informazioni.`,

        `Il prototipo frontend è sviluppato in React attraverso un'architettura a componenti riutilizzabili, con una struttura predisposta per successive integrazioni applicative. L'evoluzione backend prevista comprende Java e Spring Boot per la gestione della logica applicativa, PostgreSQL per la persistenza dei dati e REST API per la comunicazione tra frontend e backend.`,

        `Tra le funzionalità previste rientrano sistemi di autenticazione, gestione dei ruoli e autorizzazioni, con differenti livelli di accesso alle informazioni e agli strumenti aziendali.`,

        `Dal punto di vista grafico, GEM System 98 riprende il linguaggio dei software gestionali Windows 98/2000, reinterpretandolo attraverso un'interfaccia modulare moderna. Il progetto integra competenze di sviluppo software e conoscenza diretta dei processi produttivi, con particolare attenzione alle esigenze operative delle realtà industriali.`,
      ],
    },

    // 6. BIANCHI & API
    {
      title: "Bianchi & Api",

      slides: [
        { src: img4, alt: "Bianchi & Api - homepage" },
        { src: img6, alt: "Bianchi & Api - prodotti" },
        { src: img17, alt: "Bianchi & Api - iniziative e ricerca" },
      ],

      description: [
        `Bianchi & Api è un progetto web dedicato a un'attività di apicoltura artigianale, concepito per valorizzare la produzione locale, la qualità dei prodotti e il rapporto tra attività agricola, territorio e biodiversità.`,

        `La piattaforma presenta un'interfaccia orientata all'e-commerce, con una homepage narrativa dedicata alla storia e all'identità dell'attività, una sezione catalogo per la consultazione dei prodotti e un'organizzazione delle informazioni relative a mieli, caratteristiche e prezzi.`,

        `Il progetto comprende inoltre sezioni dedicate alla tutela delle api, alle iniziative ambientali e alla ricerca entomologica, integrando contenuti divulgativi con la presentazione commerciale dei prodotti.`,

        `Dal punto di vista della progettazione web, Bianchi & Api combina organizzazione del catalogo, componenti informativi, gerarchie visive e navigazione responsive. L'identità grafica valorizza un linguaggio naturale e artigianale, con particolare attenzione alla leggibilità e alla presentazione dei contenuti.`,
      ],
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
            Una raccolta di applicazioni web, piattaforme
            digitali e concept progettati per integrare
            funzionalità, esperienza utente e identità visiva.
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
