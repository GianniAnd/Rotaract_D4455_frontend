import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState<'members' | 'clubs' | 'projects'>('members');

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

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
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

      {/* Values Cards */}
      <section className="values-section">
        <h2 className="section-title-dark">Nuestros Valores</h2>
        <div className="values-grid">
          <div className="value-card">
            <svg className="value-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.4905 31.4905C34.538 28.443 36.25 24.3098 36.25 20C36.25 15.6902 34.538 11.557 31.4905 8.50951C28.443 5.46205 24.3098 3.75 20 3.75C15.6902 3.75 11.557 5.46205 8.50951 8.50952C5.46205 11.557 3.75 15.6902 3.75 20C3.75 24.3098 5.46205 28.443 8.50952 31.4905C11.557 34.538 15.6902 36.25 20 36.25C24.3098 36.25 28.443 34.538 31.4905 31.4905Z" stroke="#2E4454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="value-title">Servicio</h3>
            <p className="value-description">
              Dedicamos nuestro tiempo y esfuerzo para crear un impacto positivo en nuestras comunidades locales e internacionales.
            </p>
          </div>

          <div className="value-card">
            <svg className="value-icon" width="40" height="40" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.417 0C27.0357 0.000175244 34.8328 7.79829 34.833 17.417C34.8328 27.0357 27.0357 34.8328 17.417 34.833C7.79829 34.8328 0.000175233 27.0357 0 17.417C0.000175881 7.79829 7.79829 0.000175892 17.417 0ZM17.417 1.5C8.62672 1.50018 1.50018 8.62672 1.5 17.417C1.50018 26.2073 8.62672 33.3328 17.417 33.333C26.2073 33.3328 33.3328 26.2073 33.333 17.417C33.3328 8.62672 26.2073 1.50018 17.417 1.5ZM23.7734 10.0674C24.0578 9.9383 24.3923 9.99914 24.6133 10.2197C24.8343 10.4408 24.8949 10.776 24.7656 11.0605L21.0957 19.1348C20.9254 19.5095 20.7984 19.7998 20.6094 20.0527C20.4516 20.2638 20.2638 20.4516 20.0527 20.6094C19.7998 20.7984 19.5095 20.9254 19.1348 21.0957L11.0605 24.7656C10.776 24.8949 10.4408 24.8343 10.2197 24.6133C9.99914 24.3923 9.9383 24.0578 10.0674 23.7734L13.7373 15.6992C13.9077 15.3243 14.0355 15.0333 14.2246 14.7803C14.3823 14.5694 14.5694 14.3823 14.7803 14.2246C15.0333 14.0355 15.3243 13.9077 15.6992 13.7373L23.7734 10.0674ZM16.3193 15.1025C15.886 15.2995 15.7718 15.3562 15.6787 15.4258C15.5828 15.4975 15.4975 15.5828 15.4258 15.6787C15.3562 15.7718 15.2995 15.886 15.1025 16.3193L12.2598 22.5723L18.5137 19.7305C18.947 19.5335 19.0612 19.4768 19.1543 19.4072C19.2502 19.3355 19.3355 19.2502 19.4072 19.1543C19.4768 19.0612 19.5335 18.947 19.7305 18.5137L22.5723 12.2598L16.3193 15.1025Z" fill="#2E4454"/>
            </svg>
            <h3 className="value-title">Liderazgo</h3>
            <p className="value-description">
              Desarrollamos habilidades de liderazgo que nos permiten liderar con el ejemplo y motivar a otros hacia el cambio positivo.
            </p>
          </div>

          <div className="value-card">
            <svg className="value-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3816 4.22342C17.4512 3.94519 17.7012 3.75 17.988 3.75H22.012C22.2988 3.75 22.5488 3.94519 22.6184 4.22341L23.4801 7.67024C23.5337 7.88465 23.6969 8.05365 23.9069 8.12267C24.3847 8.27977 24.8499 8.4649 25.3004 8.67613C25.4785 8.75963 25.6851 8.76054 25.8611 8.67258L29.3198 6.94321C29.5604 6.8229 29.851 6.87006 30.0413 7.06028L32.9397 9.95875C33.13 10.149 33.1771 10.4396 33.0568 10.6802L31.3274 14.1389C31.2395 14.3149 31.2404 14.5215 31.3239 14.6996C31.4829 15.0388 31.6272 15.3863 31.7558 15.7413C31.8227 15.9261 31.9682 16.0727 32.1546 16.1349L35.8226 17.3575C36.0779 17.4426 36.25 17.6815 36.25 17.9505V22.0495C36.25 22.3185 36.0779 22.5574 35.8226 22.6425L32.1546 23.8651C31.9682 23.9273 31.8227 24.0739 31.7558 24.2587C31.6272 24.6137 31.4829 24.9612 31.3239 25.3004C31.2404 25.4785 31.2395 25.6851 31.3274 25.8611L33.0568 29.3198C33.1771 29.5604 33.1299 29.851 32.9397 30.0413L30.0413 32.9397C29.851 33.13 29.5604 33.1771 29.3198 33.0568L25.8611 31.3274C25.6851 31.2395 25.4785 31.2404 25.3004 31.3239C24.9612 31.4829 24.6137 31.6272 24.2587 31.7558C24.0739 31.8227 23.9273 31.9682 23.8651 32.1546L22.6425 35.8226C22.5574 36.0779 22.3185 36.25 22.0495 36.25H17.9505C17.6815 36.25 17.4426 36.0779 17.3575 35.8226L16.1349 32.1546C16.0727 31.9682 15.9261 31.8227 15.7413 31.7558C15.2686 31.5845 14.8092 31.3855 14.365 31.1608C14.1677 31.061 13.9326 31.065 13.7431 31.1788L10.6957 33.0072C10.4498 33.1547 10.135 33.116 9.93224 32.9132L7.08682 30.0678C6.88403 29.865 6.84527 29.5502 6.99283 29.3043L8.82121 26.257C8.93497 26.0674 8.93899 25.8323 8.83918 25.635C8.55909 25.0814 8.31899 24.5041 8.12267 23.9069C8.05365 23.6969 7.88465 23.5337 7.67024 23.4801L4.22342 22.6184C3.94519 22.5488 3.75 22.2988 3.75 22.012L3.75 17.988C3.75 17.7012 3.94519 17.4512 4.22342 17.3816L7.67024 16.5199C7.88465 16.4663 8.05365 16.3031 8.12267 16.0931C8.31899 15.496 8.55909 14.9186 8.83918 14.365C8.93899 14.1677 8.93496 13.9326 8.82121 13.7431L6.99282 10.6957C6.84526 10.4498 6.88401 10.135 7.08681 9.93224L9.93222 7.08682C10.135 6.88403 10.4498 6.84527 10.6957 6.99283L13.743 8.82121C13.9326 8.93497 14.1677 8.93899 14.365 8.83919C14.9186 8.55909 15.4959 8.31899 16.0931 8.12267C16.3031 8.05365 16.4663 7.88465 16.5199 7.67024L17.3816 4.22342Z" stroke="#2E4454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26.25 20C26.25 23.4518 23.4518 26.25 20 26.25C16.5482 26.25 13.75 23.4518 13.75 20C13.75 16.5482 16.5482 13.75 20 13.75C23.4518 13.75 26.25 16.5482 26.25 20Z" stroke="#2E4454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="value-title">Compañerismo</h3>
            <p className="value-description">
              Construimos relaciones duraderas basadas en el respeto mutuo, la amistad y el apoyo entre rotaractianos de todo el mundo.
            </p>
          </div>

          <div className="value-card">
            <svg className="value-icon" width="54" height="57" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3636 30.3636V36.1818C25.3636 39.3951 27.9685 42 31.1818 42C34.3951 42 37 39.3951 37 36.1818C37 32.9685 34.3951 30.3636 31.1818 30.3636H25.3636ZM25.3636 30.3636V21.6364M25.3636 30.3636H16.6364M25.3636 21.6364V15.8182C25.3636 12.6049 27.9685 10 31.1818 10C34.3951 10 37 12.6049 37 15.8182C37 19.0315 34.3951 21.6364 31.1818 21.6364H25.3636ZM25.3636 21.6364H16.6364M10.8182 21.6364L10.8074 21.6364M10.8074 21.6364C7.59908 21.6306 5 19.0279 5 15.8182C5 12.6049 7.60489 10 10.8182 10C14.0315 10 16.6364 12.6049 16.6364 15.8182V21.6364M10.8074 21.6364H16.6364M16.6364 21.6364V30.3636M16.6364 30.3636V36.1818C16.6364 39.3951 14.0315 42 10.8182 42C7.60489 42 5 39.3951 5 36.1818C5 32.9685 7.60489 30.3636 10.8182 30.3636H16.6364Z" stroke="#2E4454" strokeWidth="1.5"/>
            </svg>
            <h3 className="value-title">Diversidad</h3>
            <p className="value-description">
              Celebramos y valoramos nuestras diferencias, creando un ambiente inclusivo donde todos tienen voz y participación.
            </p>
          </div>
        </div>
      </section>

      {/* 7 Rotary Focuses */}
      <section className="focuses-section" id="proyectos">
        <h2 className="section-title-dark">Las 7 Áreas de Enfoque de Rotary</h2>
        <p className="focuses-intro">
          Nuestros proyectos se alinean con las áreas prioritarias de Rotary International para crear un cambio sostenible.
        </p>
        <div className="focuses-grid">
          {rotaryFocuses.map((focus, index) => (
            <div key={index} className="focus-card">
              <div className="focus-icon">{focus.icon}</div>
              <h3 className="focus-title">{focus.title}</h3>
              <p className="focus-description">{focus.description}</p>
            </div>
          ))}
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
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7dc1e6f9a7001f3e55499a6b40b3bff2dfcdea21?width=2880" 
          alt="Footer Background" 
          className="footer-background"
        />
        <div className="footer-content">
          <div className="footer-logo-section">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/69484d16ca0afae22dd6aa3eb937859f7b4571de?width=312" 
              alt="Rotaract Logo" 
              className="footer-logo"
            />
            <p className="footer-tagline">Distrito 4465</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Enlaces</h4>
              <a href="#about">Acerca de</a>
              <a href="#contact">Contacto</a>
              <a href="#help">Ayuda</a>
              <a href="#privacy">Política de Privacidad</a>
            </div>
            <div className="footer-column">
              <h4>Contacto</h4>
              <p>📍 Av. Ejemplo 123, Lima, Perú</p>
              <p>📞 +51 999 999 999</p>
              <p>✉️ info@rotaract4465.org</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Rotaract Distrito 4465. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
