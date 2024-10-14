// HomePage.js

import { Link } from 'react-router-dom';
import Sidebar from './AnimatedSidebar';
import { useState } from 'react';

const Dashboard = () => {
  const [isStudentHovered, setStudentHovered] = useState(false);
  const [isFacultyHovered, setFacultyHovered] = useState(false);

  return (
    <>
      <Sidebar />
      <div className="home-page" style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title} className="animated-title" >RESULT MANAGEMENT SYSTEM</h1>
          <p style={styles.subtitle} className="animated-title" >Select your login option:</p>

          <div style={styles.buttonsContainer}>
            <Link className="animated-title" 
              to="/student-login"
              style={{
                ...styles.button,
                ...styles.studentButton,
                ...(isStudentHovered ? styles.buttonHover : {}),
              }}
              onMouseEnter={() => setStudentHovered(true)}
              onMouseLeave={() => setStudentHovered(false)}
            >
              Student Login
            </Link>

            <Link className="animated-title" 
              to="/faculty-login"
              style={{
                ...styles.button,
                ...styles.facultyButton,
                ...(isFacultyHovered ? styles.buttonHover : {}),
              }}
              onMouseEnter={() => setFacultyHovered(true)}
              onMouseLeave={() => setFacultyHovered(false)}
            >
              Faculty Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    backgroundImage:'url("https://149350888.v2.pressablecdn.com/wp-content/uploads/students-background.jpg")',
    backgroundSize: 'cover',       // Ensures the image covers the full background
    backgroundPosition: 'center',  // Centers the image
    backgroundRepeat: 'no-repeat', },
  content: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.3rem',
    marginBottom: '2.5rem',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '30px',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition for smooth animations
    textAlign: 'center',
  },
  studentButton: {
    backgroundColor: '#56ab2f',
    boxShadow: '0 4px 8px rgba(0, 128, 0, 0.3)',
  },
  facultyButton: {
    backgroundColor: '#f2994a',
    boxShadow: '0 4px 8px rgba(255, 140, 0, 0.3)',
  },
  buttonHover: {
    transform: 'scale(1.05)', // Scale up on hover
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
};
const animationStyles = `
  .animated-title {
    animation: slideIn 1s ease;
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


export default Dashboard;
