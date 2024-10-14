// Sidebar.js

// AnimatedSidebar.js
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AnimatedSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div style={isOpen ? styles.sidebarOpen : styles.sidebarClosed}>
      <button onClick={toggleSidebar} style={styles.toggleButton}>
        {isOpen ? '<' : '>'}
      </button>
      <h2 style={styles.title}></h2>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <Link className="animated-title" to="/" style={styles.link}>
            <i className="fas fa-home"></i> {isOpen && 'Home'}
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link className="animated-title" to="./components/StudentLogin" style={styles.link}>
            <i className="fas fa-user-graduate"></i> {isOpen && 'Students'}
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link  className="animated-title" to="/results" style={styles.link}>
            <i className="fas fa-list-alt"></i> {isOpen && 'Results'}
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link className="animated-title" to="/reports" style={styles.link}>
            <i className="fas fa-chart-bar"></i> {isOpen && 'Reports'}
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link className="animated-title" to="/" style={styles.link}>
            <i className="fas fa-cog"></i> {isOpen && 'Settings'}
          </Link>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebarOpen: {
    width: '150px',
    height: '100vh',
    backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-dark-blurred-background-smooth-gradient-texture-color-shiny-bright-website-pattern-banner-header-sidebar-graphic-art-image_1258-88596.jpg")',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.3)',
    transition: 'width 0.3s ease',
  },
  sidebarClosed: {
    width: '50px',
    height: '100vh',
    backgroundColor: "rgba(52, 73, 94, 1) ",
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.3)',
    transition: 'width 0.3s ease',
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    right: '-30px',
    transition: 'right 0.3s ease',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  menu: {
    listStyleType: 'none',
    padding: '0',
    
  },
  menuItem: {
    marginBottom: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
  },
};
const animationStyles = `
  .animated-title {
    animation: slideIn 2s ease;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .teamMember:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default AnimatedSidebar;
