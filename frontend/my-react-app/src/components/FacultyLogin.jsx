import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyLogin = () => {
  const [FacultyId, setFacultyId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Faculty ID:', FacultyId, 'Password:', password, 'Remember Me:', rememberMe);
    // Add your login logic here
  };
  const handleForgotPassword = () => {
    // Logic for forgot password can be implemented here
    alert('Redirecting to the password recovery page...');
  };
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // Perform any validation or actions before navigation
    navigate("/UploadResult"); // Redirects to the /dashboard route
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.formContainer}>
          <h2 style={styles.title} className="animated-title" >Faculty Login</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="text"
              placeholder="Faculty ID"
              value={FacultyId}
            
              onChange={(e) => setFacultyId(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <div style={styles.rememberMeContainer}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={styles.checkbox}
              />
              <label htmlFor="rememberMe" style={styles.rememberMeLabel}>Remember Me</label>
            </div>
            <button onClick={handleLoginClick} className="animated-title"   type="submit" style={styles.button}>
              Login
            </button>
            <p style={styles.forgotPassword} onClick={handleForgotPassword}>
              Forgot Password?
            </p>
          </form>
        </div>
      </div>
      <style>
        {`
          input::placeholder {
            color: black; 
          }
        `}
      </style>
    </div>
    
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.VJGQjiM1PLbaacqLVzxRHAHaCB&pid=Api&P=0&h=180")', // Replace with a background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  
  forgotPassword: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#4e54c8',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  formContainer: {
    backgroundColor: '',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '2rem',

  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  input: {
    padding: '0.8rem',
    margin: '0.5rem 0',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor:"rgb(66, 177, 181)",
color:"black",
  },
  button: {
    padding: '0.8rem',
    margin: '1rem 0',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4e54c8',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  rememberMeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '1rem',
  },
  checkbox: {
    marginRight: '0.5rem',
    cursor: 'pointer',
  },
  rememberMeLabel: {
    fontSize: '0.9rem',
    color: '#333',
  },
  // Hover & focus effects
  buttonHover: {
    backgroundColor: '#6c63ff',
    transform: 'scale(1.05)',
  },
  inputFocus: {
    border: '1px solid #4e54c8',
    boxShadow: '0 0 5px rgba(78, 84, 200, 0.5)',
  },
};

// Applying pseudo-hover and focus effects using inline style approach
styles.button[':hover'] = styles.buttonHover;
styles.input[':focus'] = styles.inputFocus;
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



export default FacultyLogin;
