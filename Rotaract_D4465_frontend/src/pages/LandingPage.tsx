import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [currentFocus, setCurrentFocus] = useState(0);
  const [isHoveringGear, setIsHoveringGear] = useState(false);

  const rotaryFocuses = [
    {
      title: 'Paz y Prevención/Resolución de Conflictos',
      icon: '☮️',
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
      icon: '👨‍👩‍👧‍👦',
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

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isHoveringGear) return;

    const interval = setInterval(() => {
      setCurrentFocus((prev) => (prev + 1) % rotaryFocuses.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHoveringGear]);

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
            <Link to="/signup" className="btn-join">Únete</Link>
            <Link to="/login" className="btn-login">Iniciar sesión</Link>
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
      </section>

      {/* Impact Cards Section */}
      <section className="dashboard-section">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0dba76569d00dacf6aed0b2600488f02da40e002?width=2872"
          alt="Rotaract Activities"
          className="dashboard-background"
        />
        <h2 className="section-title-dark">Nuestro Impacto en Números</h2>
        <div className="impact-cards-grid">
          <div className="impact-card">
            <div className="impact-card-icon">👥</div>
            <div className="impact-card-content">
              <h3 className="impact-card-title">Miembros Activos</h3>
              <p className="impact-card-number">1,200+</p>
              <p className="impact-card-description">Jóvenes rotaractianos comprometidos con el cambio positivo en todo Perú, representando diversas profesiones y sectores.</p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-card-icon">🏢</div>
            <div className="impact-card-content">
              <h3 className="impact-card-title">Clubes</h3>
              <p className="impact-card-number">45+</p>
              <p className="impact-card-description">Clubes distribuidos estratégicamente en el Distrito 4465, creando redes de servicio y generando cambio comunitario.</p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-card-icon">🎯</div>
            <div className="impact-card-content">
              <h3 className="impact-card-title">Proyectos Anuales</h3>
              <p className="impact-card-number">150+</p>
              <p className="impact-card-description">Ejecutamos proyectos enfocados en las áreas de enfoque de Rotary, transformando realidades y generando impacto duradero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title-dark">Galería de Impacto</h2>
        <p className="gallery-intro">Conoce nuestros proyectos y la transformación que generamos en las comunidades</p>
        <div className="gallery-grid">
          <div className="gallery-item gallery-item-large">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop" alt="Proyecto Comunitario" />
            <div className="gallery-overlay">
              <h3>Proyectos Comunitarios</h3>
              <p>Iniciativas de impacto social</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=400&fit=crop" alt="Voluntariado" />
            <div className="gallery-overlay">
              <h3>Voluntariado</h3>
              <p>Manos que transforman</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop" alt="Educación" />
            <div className="gallery-overlay">
              <h3>Educación</h3>
              <p>Formando líderes</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop" alt="Sostenibilidad" />
            <div className="gallery-overlay">
              <h3>Sostenibilidad</h3>
              <p>Cuidando nuestro planeta</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="Comunidad" />
            <div className="gallery-overlay">
              <h3>Comunidad</h3>
              <p>Unidos por un cambio</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Rotary Focuses - Rotating Gear with Info Panel */}
      <section className="focuses-section" id="proyectos">
        <h2 className="section-title-dark">Las 7 Áreas de Enfoque de Rotary</h2>
        <p className="focuses-intro">
          Nuestros proyectos se alinean con las áreas prioritarias de Rotary International para crear un cambio sostenible.
        </p>
        <div className="focuses-container">
          <div className="gear-container" onMouseEnter={() => setIsHoveringGear(true)} onMouseLeave={() => setIsHoveringGear(false)}>
            <div className="gear-left">
              <div className="gear-background"></div>
              <div className="gear-wrapper">
                <div className={`gear-image-container ${isHoveringGear ? 'paused' : ''}`} style={{
                  transform: `rotate(${(currentFocus * 360) / rotaryFocuses.length}deg)`
                }}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F280c32c99f674779bfdb99f79dc5f99a%2F558da4db16c54c39b0e4082f1eff6b36?format=webp&width=800"
                    alt="Rotary Gear"
                    className="gear-image"
                  />
                  <svg className="focus-icons-ring" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    {rotaryFocuses.map((focus, index) => {
                      const angle = (index * 360) / rotaryFocuses.length;
                      const radius = 155;
                      const x = 200 + radius * Math.cos((angle - 90) * Math.PI / 180);
                      const y = 200 + radius * Math.sin((angle - 90) * Math.PI / 180);
                      const isActive = currentFocus === index;
                      return (
                        <g key={index}>
                          <circle
                            cx={x} cy={y} r="38"
                            fill={isActive ? '#C41E3A' : '#FFF'}
                            stroke="#C41E3A"
                            strokeWidth="2.5"
                            opacity={isActive ? 1 : 0.85}
                            style={{transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'}}
                          />
                          <text
                            x={x} y={y}
                            textAnchor="middle"
                            dy="0.35em"
                            fontSize="24"
                            fontWeight="bold"
                            fill={isActive ? '#FFF' : '#C41E3A'}
                            style={{transition: 'fill 0.8s cubic-bezier(0.4, 0, 0.2, 1)'}}
                          >
                            {focus.icon}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>

            <div className="gear-right">
              <div className="focus-info-panel">
                <div className="info-header">
                  <span className="info-icon">{rotaryFocuses[currentFocus].icon}</span>
                  <div className="info-text">
                    <h3 className="info-title">{rotaryFocuses[currentFocus].title}</h3>
                    <span className="area-badge">Área {currentFocus + 1} de {rotaryFocuses.length}</span>
                  </div>
                </div>

                <p className="info-description">{rotaryFocuses[currentFocus].description}</p>

                <div className="info-footer">
                  <div className="progress-dots">
                    {rotaryFocuses.map((_, index) => (
                      <button
                        key={index}
                        className={`dot ${currentFocus === index ? 'active' : ''}`}
                        onClick={() => setCurrentFocus(index)}
                        aria-label={`Focus ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                  <p className="auto-rotate-label">Rotación automática cada 6 segundos</p>
                </div>
              </div>
            </div>
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

export default LandingPage;
