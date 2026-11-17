import { useEffect, useState, type ReactNode } from "react";
import { siteConfig } from "./config";

const services = [
  {
    number: "01",
    title: "Desarrollo artístico",
    text: "Aterrizamos tu idea, definimos una dirección y construimos un proyecto con identidad propia.",
    accent: "idea → identidad",
  },
  {
    number: "02",
    title: "Producción musical",
    text: "Convertimos referencias, emociones y conceptos en canciones terminadas y listas para avanzar.",
    accent: "concepto → canción",
  },
  {
    number: "03",
    title: "Mezcla & mastering",
    text: "Claridad, carácter y consistencia para que tu música se sostenga en cualquier sistema.",
    accent: "sesión → entrega",
  },
  {
    number: "04",
    title: "Audiovisual",
    text: "Piezas visuales que amplifican el universo del artista y acompañan cada lanzamiento.",
    accent: "sonido → imagen",
  },
  {
    number: "05",
    title: "Beats",
    text: "Bases originales para encontrar el pulso, la atmósfera y el lenguaje de cada proyecto.",
    accent: "ritmo → visión",
  },
];

const process = [
  ["Escuchamos", "Entendemos tu momento, tus referencias y lo que quieres decir."],
  ["Trazamos", "Definimos una ruta creativa y una forma concreta de trabajar."],
  ["Creamos", "Producimos, refinamos y tomamos decisiones contigo."],
  ["Lanzamos", "Cerramos cada pieza con coherencia para que salga al mundo."],
];

function ArrowIcon({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow-icon arrow-icon--${direction}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function SoundMark() {
  return (
    <div className="sound-mark" aria-hidden="true">
      {[8, 18, 29, 15, 38, 23, 44, 31, 20, 36, 13, 26].map((height, index) => (
        <span key={index} style={{ height }} />
      ))}
    </div>
  );
}

type SocialPlatform = "instagram" | "tiktok";

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15.3 4v10.1a4.45 4.45 0 1 1-3.9-4.42"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3 4c.72 2.35 2.36 3.74 4.7 3.98"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SocialLink({
  platform,
  variant,
}: {
  platform: SocialPlatform;
  variant: "hero" | "menu" | "footer";
}) {
  const isInstagram = platform === "instagram";
  const label = isInstagram ? "Instagram" : "TikTok";
  const href = isInstagram ? siteConfig.instagram : siteConfig.tiktok;

  return (
    <a
      className={`social-button social-button--${variant}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Abrir ${label} de Recbel Studios`}
    >
      <span className="social-button__icon"><SocialIcon platform={platform} /></span>
      <span className="social-button__copy">
        <strong>{label}</strong>
        {variant === "footer" && <small>@recbel.studios</small>}
      </span>
      <span className="social-button__arrow" aria-hidden="true">↗</span>
    </a>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a className={`button button--${variant}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Agenda Recbel">
      <button className="modal__backdrop" aria-label="Cerrar agenda" onClick={onClose} />
      <div className="modal__panel">
        <div className="modal__header">
          <div>
            <span className="eyebrow">Agenda Recbel</span>
            <h2>Hablemos de tu proyecto.</h2>
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>
        {siteConfig.bookingUrl ? (
          <iframe
            className="booking-frame"
            src={siteConfig.bookingUrl}
            title="Reservar una reunión con Recbel"
          />
        ) : (
          <div className="booking-placeholder">
            <SoundMark />
            <p className="booking-placeholder__label">Vista previa</p>
            <h3>La experiencia está lista. Falta conectar el calendario.</h3>
            <p>
              Cuando Recbel cree su evento en Cal.com, pega el enlace en
              <code> VITE_CALCOM_URL </code> y la agenda aparecerá aquí, sin sacar al visitante del sitio.
            </p>
            <button className="button button--primary" onClick={onClose}>
              <span>Volver al sitio</span>
              <ArrowIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const openBooking = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setBookingOpen(true);
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a href="#inicio" className="brand" aria-label="Recbel Studios, inicio" onClick={closeMenu}>
          <img src="/recbel-logo.jpeg" alt="Recbel Studios" />
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#incubadora" onClick={closeMenu}>Incubadora</a>
          <a href="#proceso" onClick={closeMenu}>Proceso</a>
          <a href="#agenda" onClick={closeMenu}>Contacto</a>
          <a className="nav-book" href="#agenda" onClick={openBooking}>
            Agendar <ArrowIcon />
          </a>
          <div className="nav-socials" aria-label="Redes sociales">
            <SocialLink platform="instagram" variant="menu" />
            <SocialLink platform="tiktok" variant="menu" />
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__noise" aria-hidden="true" />
          <div className="hero__topline">
            <span>Estudio creativo musical</span>
            <span>Santiago · Chile</span>
          </div>

          <div className="hero__content" data-reveal>
            <p className="hero__kicker">De la idea al lanzamiento</p>
            <h1>
              Haz que tu música
              <span> diga quién eres.</span>
            </h1>
            <div className="hero__bottom">
              <p>
                Desarrollamos artistas y proyectos con intención: producción musical, mezcla, mastering,
                audiovisual y beats.
              </p>
              <div className="hero__actions">
                <ButtonLink href="#agenda" onClick={openBooking}>Agenda una reunión</ButtonLink>
                <ButtonLink href="#servicios" variant="ghost">Explora Recbel</ButtonLink>
              </div>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="orbit orbit--one" />
            <div className="orbit orbit--two" />
            <div className="hero__disc">
              <span>REC</span>
              <i />
            </div>
          </div>

          <div className="hero__socials" aria-label="Sigue a Recbel Studios">
            <span>@recbel.studios</span>
            <SocialLink platform="instagram" variant="hero" />
            <SocialLink platform="tiktok" variant="hero" />
          </div>

          <a href="#manifiesto" className="scroll-cue" aria-label="Continuar al contenido">
            <span>Scroll</span>
            <ArrowIcon direction="down" />
          </a>
        </section>

        <section className="manifesto section" id="manifiesto">
          <div className="section-label" data-reveal>
            <span>01</span>
            <span>Nuestra forma de crear</span>
          </div>
          <div className="manifesto__copy" data-reveal>
            <p className="display-copy">
              No fabricamos canciones en serie. Construimos universos que se pueden escuchar,
              <em> ver y sentir.</em>
            </p>
            <p className="side-copy">
              Trabajamos contigo desde el primer concepto hasta la versión que estás listo para compartir.
              Cada decisión tiene una razón. Cada detalle sostiene tu identidad.
            </p>
          </div>
        </section>

        <section className="services section" id="servicios">
          <div className="section-heading" data-reveal>
            <div className="section-label section-label--light">
              <span>02</span>
              <span>Lo que hacemos</span>
            </div>
            <h2>Todo lo que tu proyecto necesita para tomar forma.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number} data-reveal>
                <div className="service-card__meta">
                  <span>{service.number}</span>
                  <span>{service.accent}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-card__line" />
              </article>
            ))}
            <article className="service-card service-card--cta" data-reveal>
              <span className="eyebrow">¿No sabes por dónde partir?</span>
              <h3>Trae la idea. La ruta la construimos juntos.</h3>
              <ButtonLink href="#agenda" variant="light" onClick={openBooking}>Cuéntanos tu proyecto</ButtonLink>
            </article>
          </div>
        </section>

        <section className="incubator section" id="incubadora">
          <div className="incubator__graphic" aria-hidden="true" data-reveal>
            <span className="incubator__ring incubator__ring--one" />
            <span className="incubator__ring incubator__ring--two" />
            <span className="incubator__core">R</span>
          </div>
          <div className="incubator__content" data-reveal>
            <div className="section-label">
              <span>03</span>
              <span>Incubadora Recbel</span>
            </div>
            <h2>Tu carrera también se produce.</h2>
            <p className="incubator__lead">
              Un espacio de capacitación y acompañamiento para artistas que quieren avanzar con dirección,
              método y una mirada honesta sobre su proyecto.
            </p>
            <ul className="incubator__list">
              <li><span>01</span> Claridad artística y objetivos</li>
              <li><span>02</span> Acompañamiento tipo coaching musical</li>
              <li><span>03</span> Herramientas para desarrollar el proyecto</li>
              <li><span>04</span> Seguimiento y decisiones con intención</li>
            </ul>
            <ButtonLink href="#agenda" onClick={openBooking}>Conoce la incubadora</ButtonLink>
          </div>
        </section>

        <section className="process section" id="proceso">
          <div className="section-heading section-heading--split" data-reveal>
            <div className="section-label section-label--light">
              <span>04</span>
              <span>El proceso</span>
            </div>
            <h2>Una ruta clara.<br />Un resultado que se siente tuyo.</h2>
          </div>

          <div className="process-list">
            {process.map(([title, description], index) => (
              <article className="process-step" key={title} data-reveal>
                <span className="process-step__number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <SoundMark />
              </article>
            ))}
          </div>
        </section>

        <section className="statement" aria-label="Declaración Recbel">
          <div className="statement__track" aria-hidden="true">
            <span>ESCUCHA · CREA · TRANSFORMA · </span>
            <span>ESCUCHA · CREA · TRANSFORMA · </span>
          </div>
          <div className="statement__inner" data-reveal>
            <span className="eyebrow">Recbel Studios</span>
            <p>
              La música empieza como una intuición.<br />
              <strong>Nosotros la llevamos hasta el final.</strong>
            </p>
          </div>
        </section>

        <section className="booking section" id="agenda">
          <div className="booking__intro" data-reveal>
            <div className="section-label">
              <span>05</span>
              <span>Hablemos</span>
            </div>
            <h2>Tu próximo proyecto puede empezar con una conversación.</h2>
            <p>
              Elige el tipo de reunión que mejor representa tu momento. Antes de juntarnos te haremos unas
              preguntas breves para aprovechar bien el tiempo.
            </p>
          </div>

          <div className="booking__card" data-reveal>
            <div className="booking__options">
              <div>
                <span>01</span>
                <p>Conoce Recbel</p>
                <small>Primera conversación</small>
              </div>
              <div>
                <span>02</span>
                <p>Evalúa tu proyecto</p>
                <small>Producción y servicios</small>
              </div>
              <div>
                <span>03</span>
                <p>Incubadora</p>
                <small>Orientación inicial</small>
              </div>
            </div>
            <div className="booking__action">
              <span className="availability"><i /> Agenda online</span>
              <h3>Encuentra un horario que te acomode.</h3>
              <ButtonLink href="#agenda" onClick={openBooking}>Ver horarios disponibles</ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand">
          <img src="/recbel-logo.jpeg" alt="Recbel Studios" />
          <p>Desarrollamos artistas desde la idea hasta el lanzamiento.</p>
        </div>
        <div className="footer__nav">
          <div>
            <span>Navegación</span>
            <a href="#servicios">Servicios</a>
            <a href="#incubadora">Incubadora</a>
            <a href="#proceso">Proceso</a>
          </div>
          <div>
            <span>Contacto</span>
            <a href="#agenda" onClick={openBooking}>Agenda</a>
            {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
            <div className="footer__socials" aria-label="Redes sociales de Recbel Studios">
              <SocialLink platform="instagram" variant="footer" />
              <SocialLink platform="tiktok" variant="footer" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Recbel Studios</span>
          <span>Santiago, Chile</span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>

      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </div>
  );
}
