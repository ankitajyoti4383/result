

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title} className="animated-title">Contact Us</h1>
      <p style={styles.description}>
        We would love to hear from you! If you have any questions or feedback, please reach out using the information below.
      </p>

      <div style={styles.contactSection}className="animated-title">
        <div style={styles.contactInfo}>
          <h2 style={styles.infoTitle}>Get in Touch</h2>
          <p>Email: <a href="mailto:support@resultmanagement.com" style={styles.link}>support@resultmanagement.com</a></p>
          <p>Phone: <a href="tel:+15551234567" style={styles.link}>+1 (555) 123-4567</a></p>
          <p>Address: 123 Main St, City, Country</p>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.formTitle}>Send a Message</h2>
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Your Email" style={styles.input} required />
          <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
      </div>
      <style>
        {`
          input::placeholder {
            color: rgba(3,48,103,255); 
          }
            textarea::placeholder{
            color:rgba(3,48,103,255)}
        `}
      </style>
    </div>
  );
};

// Function to handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  alert('Your message has been sent!');
};

// Styles
const styles = {
  container: {
    padding: '3rem',
    fontFamily: 'Arial, sans-serif',
    color: '#2c3e50',
    animation: 'fadeIn 1.5s ease-in-out',
    backgroundSize: 'cover',       // Ensures the image covers the full background
    backgroundPosition: 'center',  // Centers the image
    backgroundRepeat: 'no-repeat',
    backgroundImage:'url("https://wallpapercave.com/wp/wp9346932.jpg")'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: 'white',
  },
  description: {
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto 2.5rem auto',
    color: 'white',
  },
  contactSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
    color:"white",
  },
  contactInfo: {
    flex: '1',
    minWidth: '250px',
      backgroundColor:'rgba(80, 40, 10, 0.8)',
      margin: '0 auto 2.5rem auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
      borderRadius: '10px',
    padding: '2rem',
    color:"white",

    animation: 'fadeIn 1s ease',
    
  },
  infoTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: 'white',
  },
  link: {
    color: '#2980b9',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#3498db',
  },
  form: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    
    
    animation: 'fadeIn 1s ease',
    backgroundColor:'rgba(80, 40, 10, 0.8)',
      margin: '0 auto 2.5rem auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
      borderRadius: '10px',
  },
  formTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: 'white',
  },
  input: {
    padding: '0.8rem',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
    fontSize: '1rem',
    transition: 'border 0.3s ease',
    backgroundColor:"rgb(66, 177, 181)",
  },
  textarea: {
    padding: '0.8rem',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
    fontSize: '1rem',
    transition: 'border 0.3s ease',
    minHeight: '100px',
    backgroundColor:"rgb(66, 177, 181)",
  },
  submitButton: {
    padding: '0.8rem',
    backgroundColor: '#2980b9',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};

// Adding Animation CSS to style tags
const animationStyles = `
  .animated-title {
    animation: slideIn 1s ease;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  input:focus, textarea:focus {
    border: 1px solid #2980b9;
    outline: none;
  }

  button:hover {
    background-color: #3498db;
    transform: translateY(-2px);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default ContactUs;
