import { useState } from "react";
import imgHero from "../imports/Homepage/2930859cb1f8618d31d2a0dd4c46bf8f04241caf.png";
import imgAbout from "../imports/Homepage/f51f30e5621442560b0300513c04d04d9ee1649a.png";
import imgAct1 from "../imports/Homepage/f51f30e5621442560b0300513c04d04d9ee1649a.png";
import imgAct2 from "../imports/Homepage/fa2d5111304f900eba040c5b26742acd5ac6eb59.png";
import imgAct3 from "../imports/Homepage/ed6c3a4009458d7b70570a91cf2ba24e3aec05ed.png";
import imgAct4 from "../imports/Homepage/dcb2352901f237cbace3f9d5b62d84284f43279d.png";
import imgPcto from "../imports/Homepage/6614c38e3fc5a05db4d477020363c8c3ae74e2be.png";
import imgDest1 from "../imports/Homepage/c0cac8b344fb7e9a6c307868d7ee3e4f8b000cab.png";
import imgDest2 from "../imports/Homepage/a2cd618734c7f97021e2771ce81bf99c470dbdf4.png";
import imgDest3 from "../imports/Homepage/7e26595df8c28d32c656fd7da102771db8e439ab.png";
import imgDest4 from "../imports/Homepage/ff388cde9ac3170a6b54126b706d5dcb4fa0e60e.png";
import imgDest5 from "../imports/Homepage/d51d6a9916ef94d37ef0963e0afc74f643f2b4ef.png";
import imgDest6 from "../imports/Homepage/9e5a97dd95c940fefb00deaf338d5a9763062563.png";
import imgDest7 from "../imports/Homepage/2fe9d3cdc39bb3bdeeec5c3aad9d84f513a95d9c.png";
import imgLogo1 from "../imports/Homepage/691b89532544a3162e1036a1e5ecf7e93c453aef.png";
import imgLogo2 from "../imports/Homepage/b188fdf236a53a22e7df3df33de839b008f19010.png";

const activities = [
  {
    id: "laboratori",
    title: "Laboratori a scuola",
    img: imgAct1,
    description:
      "I nostri laboratori didattici portano la natura direttamente nelle aule scolastiche. Attraverso attività pratiche e coinvolgenti, gli studenti esplorano temi legati all'ecologia, alla biodiversità e alla sostenibilità ambientale.",
    bullets: [
      "Laboratori di scienze naturali e botanica",
      "Attività pratiche di educazione ambientale",
      "Percorsi personalizzati per ogni fascia d'età",
    ],
  },
  {
    id: "uscite",
    title: "Uscite giornaliere",
    img: imgAct2,
    description:
      "Le uscite giornaliere sono esperienze immersive nella natura locale. Guidiamo i ragazzi alla scoperta di ecosistemi vicini, insegnando loro ad osservare, rispettare e comprendere l'ambiente che li circonda.",
    bullets: [
      "Escursioni guidate in aree naturali protette",
      "Osservazione della flora e fauna locali",
      "Attività di orienteering e lettura del paesaggio",
    ],
  },
  {
    id: "campi",
    title: "Campi scuola",
    img: imgAct3,
    description:
      "I campi scuola sono esperienze residenziali di più giorni che permettono agli studenti di vivere immersi nella natura. Un'opportunità unica per sviluppare autonomia, spirito di squadra e consapevolezza ambientale.",
    bullets: [
      "Soggiorni residenziali da 3 a 7 giorni",
      "Programmi educativi integrati con il curricolo scolastico",
      "Attività serali e momenti di riflessione condivisa",
    ],
  },
  {
    id: "viaggi",
    title: "Viaggi di istruzione",
    img: imgAct4,
    description:
      "I viaggi di istruzione combinano cultura, storia e natura in percorsi unici attraverso l'Italia. Ogni viaggio è un'esperienza formativa completa che arricchisce la conoscenza e la sensibilità dei giovani partecipanti.",
    bullets: [
      "Itinerari culturali e naturalistici personalizzati",
      "Visite guidate a siti di interesse storico-naturale",
      "Accompagnamento di educatori esperti per tutta la durata",
    ],
  },
];

const destinations = [
  {
    name: "Cilento",
    region: "SUD",
    img: imgDest1,
    description: "Paestum e le meraviglie della Magna Grecia, Grotte del Bussento, gite in barca e in fattoria.",
  },
  {
    name: "Marche",
    region: "CENTRO",
    img: imgDest2,
    description: "Urbino, Grotte di Frasassi e Fabriano, Gradara e Recanati con Casa Leopardi.",
  },
  {
    name: "Umbria",
    region: "CENTRO",
    img: imgDest3,
    description: "Cascata delle Marmore, Assisi, Perugia, Spoleto, Lago Trasimeno e Isola Polvese.",
  },
  {
    name: "Abruzzo",
    region: "CENTRO",
    img: imgDest4,
    description:
      "Parco Nazionale di Lazio, Abruzzo e Molise, Centro visite dell'orso, Civitella Alfedena e i suoi lupi, riserva naturale de La Camosciara.",
  },
  {
    name: "Maremma",
    region: "CENTRO-NORD",
    img: imgDest5,
    description: "Ecosistema della duna, Feniglia, Giardino dei tarocchi, Vulci, Volterra.",
  },
  {
    name: "Monte Amiata",
    region: "CENTRO-NORD",
    img: imgDest6,
    description: "Museo Parco minerario Abbadia San Salvatore, Vetta monte Amiata, Siena.",
  },
  {
    name: "Toscana ed Emilia Romagna",
    region: "CENTRO-NORD",
    img: imgDest7,
    description: "Arezzo e Santuario de La Verna, monte Fumaiolo e sorgenti del Tevere.",
  },
];

const ArrowRight = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
    <path d="M4.16667 10H15.8333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    <path d="M10 4.16667L15.8333 10L10 15.8333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
  </svg>
);

const ArrowRightWhite = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
    <path d="M2.1665 10H13.8332" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    <path d="M18.0049 3.17187L18.0049 16.8385" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    <path d="M8 4.1665L13.8333 9.99984L8 15.8332" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
    <path
      d="M13.3333 6.66667C13.3333 9.99533 9.64067 13.462 8.40067 14.5327C8.28515 14.6195 8.14453 14.6665 8 14.6665C7.85547 14.6665 7.71485 14.6195 7.59933 14.5327C6.35933 13.462 2.66667 9.99533 2.66667 6.66667C2.66667 5.25218 3.22857 3.89562 4.22876 2.89543C5.22896 1.89524 6.58551 1.33333 8 1.33333C9.41449 1.33333 10.771 1.89524 11.7712 2.89543C12.7714 3.89562 13.3333 5.25218 13.3333 6.66667Z"
      stroke="#CC794D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.33333"
    />
    <path
      d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
      stroke="#CC794D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.33333"
    />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 14 14">
    <path d="M13 1L1 13" stroke="#0E4542" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2" />
    <path d="M1 1L13 13" stroke="#0E4542" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2" />
  </svg>
);

type Modal = { type: "activity"; id: string } | { type: "thanks" } | null;

export default function App() {
  const [modal, setModal] = useState<Modal>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: "", cognome: "", telefono: "", email: "", attivita: "" });

  const openActivity = (id: string) => setModal({ type: "activity", id });
  const closeModal = () => setModal(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModal({ type: "thanks" });
    setFormData({ nome: "", cognome: "", telefono: "", email: "", attivita: "" });
  };

  const activeActivity = modal?.type === "activity" ? activities.find((a) => a.id === modal.id) : null;

  return (
    <div className="bg-[#f9f6f0] min-h-screen" style={{ fontFamily: "'Jost', sans-serif" }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(249,246,240,0.95)] backdrop-blur-sm border-b border-[rgba(44,76,59,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <img src={imgLogo2} alt="Manta Rei" className="h-8 object-contain" />
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("chi-siamo")} className="text-[#0e4542] hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-0 p-0">
              Chi Siamo
            </button>
            <button onClick={() => scrollTo("attivita")} className="text-[#0e4542] hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-0 p-0">
              Attività
            </button>
            <button onClick={() => scrollTo("destinazioni")} className="text-[#0e4542] hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-0 p-0">
              Destinazioni
            </button>
            <button
              onClick={() => scrollTo("contatti")}
              className="bg-[#0e4542] text-white px-6 py-2.5 rounded-full hover:bg-[#0a3330] transition-colors cursor-pointer border-0"
            >
              Contattaci
            </button>
          </div>
          <button
            className="md:hidden p-2 text-[#0e4542] bg-transparent border-0 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f9f6f0] border-t border-[rgba(44,76,59,0.1)] px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollTo("chi-siamo")} className="text-[#0e4542] text-left bg-transparent border-0 cursor-pointer py-1">Chi Siamo</button>
            <button onClick={() => scrollTo("attivita")} className="text-[#0e4542] text-left bg-transparent border-0 cursor-pointer py-1">Attività</button>
            <button onClick={() => scrollTo("destinazioni")} className="text-[#0e4542] text-left bg-transparent border-0 cursor-pointer py-1">Destinazioni</button>
            <button onClick={() => scrollTo("contatti")} className="bg-[#0e4542] text-white px-6 py-2.5 rounded-full text-center border-0 cursor-pointer">Contattaci</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={imgHero} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(44,76,59,0.5)]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1
            className="text-white mb-6 tracking-[2.4px]"
            style={{ fontFamily: "'Amatic SC', cursive", fontSize: "clamp(56px, 8vw, 96px)", lineHeight: 1, fontWeight: 700 }}
          >
            Riscoprire, Esplorare, Imparare
          </h1>
          <p className="text-[rgba(255,255,255,0.9)] mb-10 mx-auto" style={{ fontSize: "clamp(16px, 2.5vw, 24px)", lineHeight: 1.6, maxWidth: 640 }}>
            Uniamo la conoscenza della natura a pratiche educative non formali per il benessere degli esseri umani e degli ecosistemi.
          </p>
          <button
            onClick={() => scrollTo("chi-siamo")}
            className="inline-flex items-center gap-3 bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.3)] text-white px-6 py-3 rounded-full hover:bg-[rgba(255,255,255,0.3)] transition-colors cursor-pointer"
          >
            <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>Proposte per le Scuole 2026/2027</span>
            <ArrowRightWhite />
          </button>
        </div>
      </section>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="bg-[#f9f6f0] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <h2 style={{ fontFamily: "'Amatic SC', cursive", fontSize: "clamp(40px, 5vw, 60px)", lineHeight: 1, color: "#0e4542", fontWeight: 700 }}>
                Chi Siamo
              </h2>
              <div className="flex flex-col gap-6">
                <p style={{ color: "rgba(44,76,59,0.8)", fontSize: 18, lineHeight: 1.65 }}>
                  La cooperativa sociale <strong>Manta Rei</strong> nasce dall'esperienza nell'educazione ambientale e nell'accompagnamento in natura.
                </p>
                <div className="bg-[rgba(217,108,78,0.05)] border-l-4 border-[#cc794d] rounded-r-2xl px-7 py-5">
                  <p style={{ color: "#cc794d", fontSize: 20, lineHeight: 1.4, fontWeight: 500 }}>
                    La nostra missione è costruire un apprendimento stratificato orientato al benessere dell'individuo e della comunità.
                  </p>
                </div>
                <p style={{ color: "rgba(44,76,59,0.8)", fontSize: 18, lineHeight: 1.65 }}>
                  Crediamo che l'ambiente naturale non sia solo uno scenario, ma un vero e proprio educatore. Attraverso le nostre attività, guidiamo bambini e ragazzi alla scoperta del mondo che li circonda e, di riflesso, di loro stessi.
                </p>
              </div>
            </div>
            <div className="rounded-[48px] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
              <img src={imgAbout} alt="Chi Siamo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Il Nostro Metodo */}
      <section className="bg-[#e6efe9] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Amatic SC', cursive", fontSize: "clamp(40px, 5vw, 60px)", lineHeight: 1, color: "#0e4542", fontWeight: 700 }}>
              Il Nostro Metodo
            </h2>
            <p className="mt-4" style={{ color: "rgba(44,76,59,0.8)", fontSize: 20, lineHeight: 1.4 }}>
              Un approccio olistico che mette al centro la persona e l'ambiente.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
                    <path d="M27.0667 12.9333L24.06 21.9517C23.8964 22.4426 23.6207 22.8888 23.2547 23.2547C22.8888 23.6207 22.4426 23.8964 21.9517 24.06L12.9333 27.0667L15.94 18.0483C16.1036 17.5574 16.3793 17.1112 16.7453 16.7453C17.1112 16.3793 17.5574 16.1036 18.0483 15.94L27.0667 12.9333Z" stroke="#CC794D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    <path d="M20 36.6667C29.2047 36.6667 36.6667 29.2047 36.6667 20C36.6667 10.7953 29.2047 3.33333 20 3.33333C10.7953 3.33333 3.33333 10.7953 3.33333 20C3.33333 29.2047 10.7953 36.6667 20 36.6667Z" stroke="#CC794D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  </svg>
                ),
                title: "Riscoprire",
                desc: "La connessione autentica con la natura e con sé stessi, tornando all'essenziale.",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
                    <path d="M18.3333 33.3333C15.4068 33.3422 12.5838 32.2508 10.4242 30.2757C8.26464 28.3006 6.92628 25.5859 6.67456 22.6702C6.42284 19.7544 7.27615 16.8506 9.06525 14.5346C10.8543 12.2185 13.4485 10.6595 16.3333 10.1667C25.8333 8.33333 28.3333 7.46667 31.6667 3.33333C33.3333 6.66667 35 10.3 35 16.6667C35 25.8333 27.0333 33.3333 18.3333 33.3333Z" stroke="#CC794D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    <path d="M3.33333 35C3.33333 30 6.41667 26.0667 11.8 25C15.8333 24.2 20 21.6667 21.6667 20" stroke="#CC794D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  </svg>
                ),
                title: "Educare",
                desc: "Attraverso metodologie esperienziali e non formali, fuori dalle aule tradizionali.",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
                    <path d="M20 11.6667V35" stroke="#CC794D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    <path d="M5 30C4.55797 30 4.13405 29.8244 3.82149 29.5118C3.50893 29.1993 3.33333 28.7754 3.33333 28.3333V6.66667C3.33333 6.22464 3.50893 5.80072 3.82149 5.48816C4.13405 5.1756 4.55797 5 5 5H13.3333C15.1014 5 16.7971 5.70238 18.0474 6.95262C19.2976 8.20286 20 9.89856 20 11.6667C20 9.89856 20.7024 8.20286 21.9526 6.95262C23.2029 5.70238 24.8986 5 26.6667 5H35C35.442 5 35.866 5.1756 36.1785 5.48816C36.4911 5.80072 36.6667 6.22464 36.6667 6.66667V28.3333C36.6667 28.7754 36.4911 29.1993 36.1785 29.5118C35.866 29.8244 35.442 30 35 30H25C23.6739 30 22.4021 30.5268 21.4645 31.4645C20.5268 32.4021 20 33.6739 20 35C20 33.6739 19.4732 32.4021 18.5355 31.4645C17.5979 30.5268 16.3261 30 15 30H5Z" stroke="#CC794D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  </svg>
                ),
                title: "Imparare",
                desc: "In modo attivo e trasformativo, dove ogni esperienza diventa conoscenza radicata.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[40px] p-10 flex flex-col items-center gap-6 shadow-sm">
                <div className="bg-[rgba(204,121,77,0.1)] rounded-full w-20 h-20 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="text-center">
                  <h3 style={{ fontFamily: "'Amatic SC', cursive", fontSize: 36, color: "#0e4542", lineHeight: 1.1, fontWeight: 700, marginBottom: 12 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(44,76,59,0.7)", fontSize: 18, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Nostre Attività */}
      <section id="attivita" className="bg-[#f9f6f0] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12" style={{ fontFamily: "'Amatic SC', cursive", fontSize: "clamp(40px, 5vw, 60px)", lineHeight: 1, color: "#0e4542", fontWeight: 700 }}>
            Le Nostre Attività
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act) => (
              <div key={act.id} className="relative rounded-[32px] overflow-hidden shadow-lg h-[380px] group cursor-pointer" onClick={() => openActivity(act.id)}>
                <img src={act.img} alt={act.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,76,59,0.9)] via-[rgba(44,76,59,0.2)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-4">
                  <p style={{ fontFamily: "'Amatic SC', cursive", fontSize: 36, color: "white", lineHeight: 1, fontWeight: 700, letterSpacing: "0.9px" }}>
                    {act.title}
                  </p>
                  <div className="bg-[#f9f6f0] rounded-full w-10 h-10 flex items-center justify-center">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PCTO Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0e4542] rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="flex-1 px-10 py-14 lg:px-16 flex flex-col justify-center gap-10">
              <div className="flex flex-col gap-6">
                <span className="inline-flex items-center bg-[#cc794d] text-white px-4 py-1.5 rounded-full self-start" style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.7px" }}>
                  IN EVIDENZA
                </span>
                <h2 style={{ fontFamily: "'Amatic SC', cursive", fontSize: "clamp(40px, 5vw, 72px)", color: "#f9f6f0", lineHeight: 1, fontWeight: 700 }}>
                  Progetti PCTO in Cilento
                </h2>
                <p style={{ color: "rgba(249,246,240,0.9)", fontSize: 20, lineHeight: 1.65 }}>
                  Un'esperienza intensiva di 5 giorni dedicata agli istituti agrari. Ospitati presso l'
                  <strong>Agriturismo Zio Cristoforo</strong> nel cuore del Cilento, gli studenti vivranno un'immersione totale tra pratiche agricole sostenibili, scoperta del territorio e lavoro di squadra.
                </p>
              </div>
              <button
                onClick={() => scrollTo("contatti")}
                className="inline-flex items-center gap-3 bg-[#f9f6f0] text-[#0e4542] px-6 py-3 rounded-full self-start hover:bg-white transition-colors cursor-pointer border-0"
                style={{ fontWeight: 600, fontSize: 16 }}
              >
                Scarica il programma completo
                <ArrowRight />
              </button>
            </div>
            <div className="lg:w-[480px] h-64 lg:h-auto overflow-hidden opacity-20">
              <img src={imgPcto} alt="PCTO" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Destinazioni */}
      <section id="destinazioni" className="bg-[#f9f6f0] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Amatic SC', cursive", fontSize: "clamp(40px, 5vw, 60px)", lineHeight: 1, color: "#0e4542", fontWeight: 700 }}>
              Le Nostre Destinazioni
            </h2>
            <p className="mt-4" style={{ color: "rgba(44,76,59,0.8)", fontSize: 20, lineHeight: 1.4 }}>
              Territori unici dove la natura incontra la cultura e la storia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinations.map((dest) => (
              <div key={dest.name} className="bg-white rounded-[32px] overflow-hidden shadow-md">
                <div className="relative h-[200px]">
                  <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-[rgba(255,255,255,0.9)] flex items-center gap-1.5 px-3 py-1 rounded-full">
                    <LocationIcon />
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#0e4542", letterSpacing: "0.7px" }}>{dest.region}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 style={{ fontFamily: "'Amatic SC', cursive", fontSize: 32, color: "#0e4542", lineHeight: 1.1, fontWeight: 700, marginBottom: 8 }}>
                    {dest.name}
                  </h3>
                  <p style={{ color: "rgba(44,76,59,0.7)", fontSize: 16, lineHeight: 1.6 }}>{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti / Form */}
      <section id="contatti" className="bg-white py-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: 30, fontWeight: 500, color: "#0e4542", lineHeight: 1.2 }}>
              Richiedi informazioni
            </h2>
            <p className="mt-3" style={{ color: "rgba(14,69,66,0.7)", fontSize: 18, lineHeight: 1.55 }}>
              Lasciaci i tuoi dati e ti ricontatteremo per offrirti l'esperienza più adatta alle tue esigenze.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label style={{ color: "#0e4542", fontSize: 16, fontWeight: 500 }}>Nome *</label>
                <input
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Il tuo nome"
                  className="bg-white border border-[rgba(14,69,66,0.2)] rounded-[10px] px-4 py-3 outline-none focus:border-[#0e4542] transition-colors"
                  style={{ color: "#0a0a0a", fontSize: 16 }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ color: "#0e4542", fontSize: 16, fontWeight: 500 }}>Cognome *</label>
                <input
                  required
                  value={formData.cognome}
                  onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                  placeholder="Il tuo cognome"
                  className="bg-white border border-[rgba(14,69,66,0.2)] rounded-[10px] px-4 py-3 outline-none focus:border-[#0e4542] transition-colors"
                  style={{ color: "#0a0a0a", fontSize: 16 }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label style={{ color: "#0e4542", fontSize: 16, fontWeight: 500 }}>Telefono *</label>
              <input
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                placeholder="+39 123 456 7890"
                className="bg-white border border-[rgba(14,69,66,0.2)] rounded-[10px] px-4 py-3 outline-none focus:border-[#0e4542] transition-colors"
                style={{ color: "#0a0a0a", fontSize: 16 }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label style={{ color: "#0e4542", fontSize: 16, fontWeight: 500 }}>Email *</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tuaemail@esempio.com"
                className="bg-white border border-[rgba(14,69,66,0.2)] rounded-[10px] px-4 py-3 outline-none focus:border-[#0e4542] transition-colors"
                style={{ color: "#0a0a0a", fontSize: 16 }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label style={{ color: "#0e4542", fontSize: 16, fontWeight: 500 }}>Tipo di attività *</label>
              <select
                required
                value={formData.attivita}
                onChange={(e) => setFormData({ ...formData, attivita: e.target.value })}
                className="bg-white border border-[rgba(14,69,66,0.2)] rounded-[10px] px-4 py-3 outline-none focus:border-[#0e4542] transition-colors appearance-none cursor-pointer"
                style={{ color: formData.attivita ? "#0a0a0a" : "rgba(10,10,10,0.5)", fontSize: 16 }}
              >
                <option value="" disabled>Seleziona un'attività</option>
                <option value="laboratori">Laboratori a scuola</option>
                <option value="uscite">Uscite giornaliere</option>
                <option value="campi">Campi scuola</option>
                <option value="viaggi">Viaggi di istruzione</option>
                <option value="pcto">Progetti PCTO</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#0e4542] text-white rounded-full py-4 hover:bg-[#0a3330] transition-colors cursor-pointer border-0"
              style={{ fontSize: 16, fontWeight: 500 }}
            >
              Invia richiesta
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e4542] rounded-tl-[48px] rounded-tr-[48px] px-6 lg:px-20 pt-20 pb-12">
        <div className="max-w-7xl mx-auto border-b border-[rgba(249,246,240,0.2)] pb-16 mb-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <img src={imgLogo1} alt="Manta Rei" className="h-8 object-contain self-start" />
              <p style={{ color: "rgba(249,246,240,0.8)", fontSize: 18, lineHeight: 1.65, maxWidth: 400 }}>
                Cooperativa sociale specializzata nell'educazione ambientale e nell'accompagnamento in natura. Uniamo la conoscenza della natura a pratiche educative non formali.
              </p>
              <button
                onClick={() => scrollTo("contatti")}
                className="inline-flex items-center gap-3 border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] text-white px-6 py-3 rounded-full self-start hover:bg-[rgba(255,255,255,0.2)] transition-colors cursor-pointer"
                style={{ fontWeight: 600, fontSize: 16 }}
              >
                Proposte per le Scuole 2026/2027
                <ArrowRightWhite />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <h4 style={{ fontFamily: "'Amatic SC', cursive", fontSize: 30, color: "white", lineHeight: 1, fontWeight: 700 }}>Esplora</h4>
              <div className="flex flex-col gap-4">
                {["Chi Siamo", "Le Nostre Attività", "Destinazioni"].map((item, i) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(["chi-siamo", "attivita", "destinazioni"][i])}
                    className="text-left bg-transparent border-0 cursor-pointer"
                    style={{ color: "rgba(249,246,240,0.8)", fontSize: 18, lineHeight: 1.55 }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 style={{ fontFamily: "'Amatic SC', cursive", fontSize: 30, color: "white", lineHeight: 1, fontWeight: 700 }}>Contatti</h4>
              <div className="flex flex-col gap-4">
                <a href="mailto:scuole@coopmantarei.com" className="flex items-center gap-3" style={{ color: "rgba(249,246,240,0.8)", fontSize: 18 }}>
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <path d="M16.6667 3.33333H3.33333C2.41286 3.33333 1.66667 4.07953 1.66667 5V15C1.66667 15.9205 2.41286 16.6667 3.33333 16.6667H16.6667C17.5871 16.6667 18.3333 15.9205 18.3333 15V5C18.3333 4.07953 17.5871 3.33333 16.6667 3.33333Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M18.3333 5.83333L10.8583 10.5833C10.6011 10.7445 10.3036 10.83 10 10.83C9.6964 10.83 9.39894 10.7445 9.14167 10.5833L1.66667 5.83333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  scuole@coopmantarei.com
                </a>
                <a href="tel:+393331234567" className="flex items-center gap-3" style={{ color: "rgba(249,246,240,0.8)", fontSize: 18 }}>
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <path d="M16.5144 12.9337C16.5184 12.9641 16.5184 12.995 16.5144 13.0254C16.5097 13.3081 16.4648 13.5887 16.3811 13.8587C16.2286 14.3948 15.9556 14.889 15.583 15.3035C15.2104 15.718 14.748 16.0419 14.2311 16.2504C11.7311 17.0004 9.07278 16.2504 6.73111 15.0587C4.79907 14.0893 3.22799 12.527 2.24778 10.6004C1.06444 8.27538 0.297776 5.60038 1.04778 3.10038C1.26386 2.58514 1.59458 2.12596 2.01478 1.75773C2.43499 1.38951 2.93363 1.12194 3.47278 0.975382L4.30611 0.758715C4.37129 0.741904 4.44038 0.749585 4.50027 0.780302C4.56017 0.811019 4.60672 0.862639 4.63111 0.925382L5.29778 2.81705L6.28111 5.56705V5.64205C6.29745 5.70876 6.29165 5.77898 6.26459 5.84211C6.23754 5.90525 6.19069 5.95787 6.13111 5.99205C5.81003 6.23288 5.45283 6.42133 5.07278 6.55038C4.6172 6.69149 4.14788 6.78368 3.67278 6.82538C3.62779 6.82976 3.58432 6.84397 3.54544 6.86701C3.50656 6.89005 3.47322 6.92136 3.44778 6.95872C3.4273 6.99869 3.41662 7.04297 3.41662 7.08788C3.41662 7.1328 3.4273 7.17707 3.44778 7.21705C3.93389 8.78678 4.79148 10.2161 5.94778 11.3837C7.11761 12.5372 8.54618 13.3943 10.1144 13.8837C10.1544 13.9042 10.1987 13.9149 10.2436 13.9149C10.2885 13.9149 10.3328 13.9042 10.3728 13.8837C10.4091 13.8592 10.4398 13.8271 10.4628 13.7898C10.4858 13.7524 10.5006 13.7106 10.5061 13.667C10.547 13.1946 10.6392 12.7279 10.7811 12.2754C10.9047 11.8956 11.0937 11.5402 11.3394 11.2254C11.3749 11.1612 11.4326 11.1121 11.5016 11.0876C11.5707 11.063 11.6464 11.0646 11.7144 11.092H11.7894L14.5478 12.0754C15.2061 12.3087 15.7644 12.542 16.4228 12.7754C16.4561 12.7587 16.4978 12.8754 16.5144 12.9337Z" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  </svg>
                  +39 333 1234567
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center" style={{ color: "rgba(249,246,240,0.5)", fontSize: 14 }}>
          © 2026 Manta Rei Cooperativa Sociale. Tutti i diritti riservati.
        </p>
      </footer>

      {/* Activity Modal */}
      {modal?.type === "activity" && activeActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(0,0,0,0.5)]" onClick={closeModal}>
          <div
            className="bg-white rounded-[16px] shadow-2xl w-full max-w-lg p-14 flex flex-col gap-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-7">
              <div className="flex items-center justify-between">
                <h2 style={{ fontFamily: "'Amatic SC', cursive", fontSize: 48, color: "#0e4542", lineHeight: 1, fontWeight: 700, letterSpacing: "0.9px" }}>
                  {activeActivity.title}
                </h2>
                <button onClick={closeModal} className="flex-shrink-0 w-6 h-6 cursor-pointer bg-transparent border-0 p-0">
                  <CloseIcon />
                </button>
              </div>
              <p style={{ color: "rgba(14,69,66,0.7)", fontSize: 18, lineHeight: 1.55 }}>{activeActivity.description}</p>
              <ul className="flex flex-col gap-4">
                {activeActivity.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-[#0e4542]" />
                    <span style={{ color: "#0e4542", fontSize: 16, lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={closeModal}
              className="bg-[#0e4542] text-white rounded-full py-4 hover:bg-[#0a3330] transition-colors cursor-pointer border-0 w-full"
              style={{ fontSize: 16, fontWeight: 500 }}
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {modal?.type === "thanks" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(0,0,0,0.5)]" onClick={closeModal}>
          <div
            className="bg-white rounded-[16px] shadow-2xl w-full max-w-lg p-14 flex flex-col gap-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-7">
              <div className="flex items-center justify-between">
                <h2 style={{ fontFamily: "'Amatic SC', cursive", fontSize: 48, color: "#0e4542", lineHeight: 1, fontWeight: 700, letterSpacing: "0.9px" }}>
                  Grazie per averci contattato
                </h2>
                <button onClick={closeModal} className="flex-shrink-0 w-6 h-6 cursor-pointer bg-transparent border-0 p-0">
                  <CloseIcon />
                </button>
              </div>
              <p style={{ color: "rgba(14,69,66,0.7)", fontSize: 18, lineHeight: 1.55 }}>
                A breve verrai contattato dal nostro staff e riceverai le informazioni di cui hai bisogno.
              </p>
            </div>
            <button
              onClick={closeModal}
              className="bg-[#0e4542] text-white rounded-full py-4 hover:bg-[#0a3330] transition-colors cursor-pointer border-0 w-full"
              style={{ fontSize: 16, fontWeight: 500 }}
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
