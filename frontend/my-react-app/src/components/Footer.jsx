

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h3 style={styles.title} >Result Management System</h3>
          <p style={styles.text}  >An efficient system for managing and accessing student results securely and accurately.</p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.subtitle}>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><a href="/Dashboard" style={styles.link}  >Home</a></li>
            <li><a href="/student-login" style={styles.link}  >Student Login</a></li>
            <li><a href="/faculty-login" style={styles.link}  >Faculty Login</a></li>
            <li><a href="/ContactUs" style={styles.link}  >Contact Us</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.subtitle}  >Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.icon}>🌐 Facebook</a>
            <a href="https://twitter.com" style={styles.icon}>🌐 Twitter</a>
            <a href="https://linkedin.com" style={styles.icon}>🌐 LinkedIn</a>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Result Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "rgba(52, 73, 94, 1) ",
    color: '#ffffff',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    zIndex: '1',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginBottom: '1rem',
  },
  section: {
    maxWidth: '300px',
    textAlign: 'left',
    transition: 'transform 0.3s',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.5',
    opacity: '0.85',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: '0.7rem',
    transition: 'color 0.3s',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#76c7c0',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  icon: {
    color: '#76c7c0',
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: 'transform 0.3s, color 0.3s',
  },
  bottomBar: {
    borderTop: '1px solid #444',
    paddingTop: '1rem',
    fontSize: '0.9rem',
    color: '#aaaaaa',
    opacity: '0.8',
  },
};

// Hover effects
styles.link[':hover'] = { color: '#fff' };
styles.icon[':hover'] = { transform: 'translateY(-5px)', color: '#ffffff' };



export default Footer;

