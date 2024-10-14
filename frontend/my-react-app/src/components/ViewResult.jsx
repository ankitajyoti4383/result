import  { useState } from 'react';

const ViewResult = () => {
  const [studentId, setStudentId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchResult = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        name: 'John Doe',
        id: '123456',
        grade: 'A',
        marks: {
          math: 95,
          science: 88,
          english: 90,
        },
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={styles.container} className="animated-title">
      <h2 style={styles.title} className="animated-title">VIEW STUDENT RESULT</h2>

      <div style={styles.inputContainer}>
        <label style={styles.label}className="animated-title">Enter Student ID:</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={styles.input}
          placeholder="Student ID"
        />
      </div>

      <button
        onClick={handleFetchResult}
        style={styles.button}
        disabled={!studentId}
      >
        {loading ? 'Fetching Result...' : 'View Result'}
      </button>

      {result && (
        <div style={styles.resultContainer}>
          <h3 style={styles.resultTitle} className="animated-title">Result Details</h3>
          <p style={styles.resultText} className="animated-title"><strong>Name:</strong> {result.name}</p>
          <p style={styles.resultText}className="animated-title"><strong>ID:</strong> {result.id}</p>
          <p style={styles.resultText}className="animated-title"><strong>Grade:</strong> {result.grade}</p>
          <h4 style={styles.subjectTitle}className="animated-title">Subject Marks</h4>
          <p style={styles.resultText}className="animated-title"><strong>Math:</strong> {result.marks.math}</p>
          <p style={styles.resultText}className="animated-title"><strong>Science:</strong> {result.marks.science}</p>
          <p style={styles.resultText}className="animated-title"><strong>English:</strong> {result.marks.english}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '2rem',
    background: 'linear-gradient(to right, #43cea2, #185a9d)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundSize: 'cover',       // Ensures the image covers the full background
    backgroundPosition: 'center',  // Centers the image
    backgroundRepeat: 'no-repeat', backgroundImage:'url("https://img.freepik.com/premium-photo/students-walking-class-university-college-environment-moving-crowd-blurred-background_873668-1870.jpg")',
    
    opacity:1,
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    animation: 'fadeIn 1.2s ease-out',
  },
  inputContainer: {
    marginBottom: '1.5rem',
    width: '100%',
    maxWidth: '400px',
  },
  label: {
    display: 'block',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #ddd',
    outline: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'border 0.3s, box-shadow 0.3s',
    color: '#333',
  },
  button: {
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    background: '#ff7e5f',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  resultContainer: {
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: 'rgba(150, 150, 150, 0.8)',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '500px',
    animation: 'fadeInUp 1.2s ease-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
  },
  resultTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color:'rgba(3,48,103,255)',
  },
  resultText: {
    fontSize: '1.1rem',
    margin: '0.5rem 0',
    color:"blue",
  },
  subjectTitle: {
    fontSize: '1.3rem',
    margin: '1rem 0 0.5rem',
    color:'rgba(3,48,103,255)',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes fadeInUp': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
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



export default ViewResult;
