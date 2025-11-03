import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState<'members' | 'clubs' | 'projects'>('members');
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [expandedFocus, setExpandedFocus] = useState<number | null>(null);

  const dashboardData = {
    members: { count: '1,200+', label: 'Miembros Activos', icon: '👥' },
    clubs: { count: '45+', label: 'Clubes', icon: '🏛️' },
    projects: { count: '150+', label: 'Proyectos Anuales', icon: '🎯' }
  };

  const rotaryFocuses = [
    {
      title: 'Paz y Prevención/Resolución de Conflictos',
      icon: '🕊️',
      description: 'Promovemos la paz y el entendimiento entre comunidades.'
    },
    {
      title: 'Prevención y Tratamiento de Enfermedades',
      icon: '⚕️',
      description: 'Apoyamos la salud y el bienestar de las comunidades.'
    },
    {
      title: 'Agua y Saneamiento',
      icon: '💧',
      description: 'Garantizamos el acceso a agua potable y saneamiento básico.'
    },
    {
      title: 'Salud Materno Infantil',
      icon: '👶',
      description: 'Protegemos la salud de madres e hijos.'
    },
    {
      title: 'Educación Básica y Alfabetización',
      icon: '📚',
      description: 'Fomentamos la educación de calidad para todos.'
    },
    {
      title: 'Desarrollo Económico Comunitario',
      icon: '💼',
      description: 'Impulsamos el crecimiento económico sostenible.'
    },
    {
      title: 'Medio Ambiente',
      icon: '🌱',
      description: 'Protegemos nuestro planeta para las futuras generaciones.'
    }
  ];

  const values = [
    {
      title: 'Servicio',
      icon: '🤝',
      description: 'Dedicamos nuestro tiempo y esfuerzo para crear un impacto positivo en nuestras comunidades.'
    },
    {
      title: 'Liderazgo',
      icon: '🎯',
      description: 'Desarrollamos habilidades que nos permiten liderar con el ejemplo y motivar el cambio.'
    },
    {
      title: 'Compañerismo',
      icon: '👫',
      description: 'Construimos relaciones duraderas basadas en respeto mutuo y apoyo comunitario.'
    },
    {
      title: 'Diversidad',
      icon: '🌍',
      description: 'Celebramos nuestras diferencias creando un ambiente inclusivo para todos.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className={`navbar ${navbarScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/69484d16ca0afae22dd6aa3eb937859f7b4571de?width=312" 
            alt="Rotaract Logo" 
            className="logo"
          />
          <div className="nav-links">
            <a href="#proyectos">Proyectos</a>
            <a href="#convocatorias">Convocatorias</a>
            <a href="#club-finder">Club Finder</a>
            <a href="#quienes-somos">¿Quiénes somos?</a>
          </div>
          <div className="nav-buttons">
            <button className="btn-join">Únete</button>
            <button className="btn-login">Iniciar sesión</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay-dark"></div>
        <div className="hero-overlay-red"></div>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/722a988afc24c9d265123ec1217424cbea5a3927?width=3138" 
          alt="Rotaract Group" 
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">Rotaract Distrito 4465 - Perú</h1>
          <p className="hero-subtitle">
            Jóvenes líderes comprometidos con el servicio comunitario, 
            el desarrollo profesional y la paz mundial.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="quienes-somos">
        <div className="section-header">
          <h2 className="section-title">¿Quiénes somos?</h2>
        </div>
        <h3 className="about-main-title">Jóvenes líderes al servicio de la comunidad</h3>
        <p className="about-description">
          Rotaract es una organización mundial de jóvenes adultos patrocinada por Rotary International. 
          En el Distrito 4465, que comprende Perú, somos más de 1,200 jóvenes comprometidos con 
          el servicio comunitario, el desarrollo profesional y el liderazgo.
        </p>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/0dba76569d00dacf6aed0b2600488f02da40e002?width=2872" 
          alt="Rotaract Activities" 
          className="about-image"
        />
      </section>

      {/* Interactive Dashboard */}
      <section className="dashboard-section">
        <h2 className="section-title-dark">Nuestro Impacto</h2>
        <div className="dashboard">
          <div className="dashboard-tabs">
            {Object.entries(dashboardData).map(([key, data]) => (
              <button
                key={key}
                className={`dashboard-tab ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key as typeof activeTab)}
              >
                <span className="tab-icon">{data.icon}</span>
                <span className="tab-label">{data.label}</span>
              </button>
            ))}
          </div>
          <div className="dashboard-content">
            <div className="dashboard-stat">
              <span className="stat-number">{dashboardData[activeTab].count}</span>
              <span className="stat-label">{dashboardData[activeTab].label}</span>
            </div>
            <p className="dashboard-description">
              {activeTab === 'members' && 'Más de 1,200 jóvenes rotaractianos activos en todo Perú, comprometidos con el cambio positivo.'}
              {activeTab === 'clubs' && '45 clubes distribuidos estratégicamente en todo el Distrito 4465, creando redes de servicio.'}
              {activeTab === 'projects' && 'Ejecutamos más de 150 proyectos cada año enfocados en las áreas de enfoque de Rotary.'}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="section-title-dark">Nuestros Valores</h2>
        <div className="values-container">
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card-wrapper">
                <div className="value-card">
                  <div className="value-card-inner">
                    <div className="value-icon-container">
                      <span className="value-icon">{value.icon}</span>
                    </div>
                    <h3 className="value-title">{value.title}</h3>
                  </div>
                  <div className="value-back">
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Rotary Focuses */}
      <section className="focuses-section" id="proyectos">
        <h2 className="section-title-dark">Las 7 Áreas de Enfoque de Rotary</h2>
        <p className="focuses-intro">
          Nuestros proyectos se alinean con las áreas prioritarias de Rotary International para crear un cambio sostenible.
        </p>
        <div className="focuses-container">
          <div className="focuses-grid">
            {rotaryFocuses.map((focus, index) => (
              <div
                key={index}
                className={`focus-card ${expandedFocus === index ? 'expanded' : ''}`}
                onClick={() => setExpandedFocus(expandedFocus === index ? null : index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setExpandedFocus(expandedFocus === index ? null : index);
                  }
                }}
              >
                <div className="focus-card-content">
                  <div className="focus-icon-large">{focus.icon}</div>
                  <h3 className="focus-title">{focus.title}</h3>
                  <p className="focus-description">{focus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-card">
            <h2 className="mission-title">Nuestra Misión</h2>
            <p className="mission-text">
              Brindar oportunidades a jóvenes para desarrollar su liderazgo y habilidades profesionales 
              a través del servicio comunitario, creando proyectos que generen un impacto positivo 
              y sostenible en el Perú y el mundo.
            </p>
          </div>
          <div className="vision-card">
            <h2 className="vision-title">Nuestra Visión</h2>
            <p className="vision-text">
              Ser reconocidos como la organización de jóvenes líderes más influyente del Perú, 
              impulsando el cambio social a través del servicio, la innovación y el compromiso 
              con los valores de Rotary International.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="footer-section footer-branding">
              <div className="footer-logo-box">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/69484d16ca0afae22dd6aa3eb937859f7b4571de?width=312" 
                  alt="Rotaract Logo" 
                  className="footer-logo"
                />
              </div>
              <h3 className="footer-brand-text">Rotaract Distrito 4465</h3>
              <p className="footer-tagline">Jóvenes líderes al servicio de la comunidad</p>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li><a href="#clubs">Clubes</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Información</h4>
              <ul className="footer-links">
                <li><a href="#privacy">Política de Privacidad</a></li>
                <li><a href="#terms">Términos de Servicio</a></li>
                <li><a href="#help">Ayuda</a></li>
                <li><a href="#faq">Preguntas Frecuentes</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Contacto</h4>
              <div className="footer-contact">
                <p>📍 Av. Ejemplo 123, Lima, Perú</p>
                <p>📞 +51 (1) 999 999 999</p>
                <p>✉️ info@rotaract4465.org</p>
              </div>
              <div className="footer-socials">
                <a href="#facebook" className="social-link">f</a>
                <a href="#instagram" className="social-link">📷</a>
                <a href="#linkedin" className="social-link">in</a>
                <a href="#twitter" className="social-link">𝕏</a>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p>&copy; 2025 Rotaract Distrito 4465. Todos los derechos reservados.</p>
            <p>Patrocinado por Rotary International</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
