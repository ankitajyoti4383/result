

import  { useState } from 'react';

const UploadStudent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [grade, setGrade] = useState('');
  const [section, setSection] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) startUpload();
  };

  const startUpload = () => {
    setUploadComplete(false);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setUploadComplete(true);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);
  };

  return (
    <div style={styles.uploadContainer} className="animated-title">
      <h2 style={styles.uploadTitle} className="animated-title">Upload Student Information</h2>
      <p style={styles.uploadDescription}className="animated-title">
        Enter student details and upload a file containing additional data if available.
      </p>
      
      <div style={styles.inputBox}> {/* Box around input fields */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={styles.input}
            placeholder="Enter Student Name"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Student ID</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            style={styles.input}
            placeholder="Enter Student ID"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Grade</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            style={styles.input}
            placeholder="Enter Grade"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Section</label>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            style={styles.input}
            placeholder="Enter Section"
          />
        </div>
      </div>

      <div
        style={{
          ...styles.dropArea,
          backgroundColor: isDragging ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFileUpload(e);
        }}
      >
        <input
          type="file"
          id="file-upload"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
        <label htmlFor="file-upload" style={styles.uploadLabel}>
          Drag & Drop your file here or <span style={styles.browseText}>Browse</span>
        </label>
      </div>

      {progress > 0 && (
        <div style={styles.progressBar}>
          <div style={{ ...styles.progress, width: `${progress}%` }}></div>
        </div>
      )}

      {uploadComplete && (
        <div style={styles.successMessage}>
          <span style={styles.checkmark}>✔</span> Upload Successful!
        </div>
      )}
    </div>
  );
};

const styles = {
  uploadContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #36d1dc, #5b86e5)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundImage:'url("https://www.surveylegend.com/wordpress/wp-content/themes/sage/resources/images/img/modal/upgrade-file-upload.png")'
  },
  uploadTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    animation: 'fadeInDown 1s ease forwards',
    color:'rgba(3,48,103,255)',
  },
  uploadDescription: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    
  },
  inputBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background color for the box
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Subtle shadow for the box
    width: '100%',
    maxWidth: '500px',
    marginBottom: '1.5rem',
    
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '1rem',
  },
  label: {
    fontSize: '1rem',
    color: 'rgba(3,48,103,255)',
    marginBottom: '0.5rem',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '5px',
    border: '2px solid #ffcc00', // Adding border around input
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light background for contrast
    width: '100%',
    fontSize: '1rem',
    color: '#fff',
    outline: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
  },
  dropArea: {
    border: '2px dashed rgba(3,48,103,255)',
    padding: '2rem',
    borderRadius: '10px',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    width: '100%',
    maxWidth: '500px',
    marginTop: '1.5rem',
  },
  uploadLabel: {
    fontSize: '1.2rem',
    cursor: 'pointer',
    color:"rgba(3,48,103,255)"
  },
  browseText: {
    color: 'rgba(3,48,103,255)',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  progressBar: {
    width: '100%',
    maxWidth: '500px',
    height: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '5px',
    marginTop: '1rem',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  progress: {
    height: '100%',
    backgroundColor: '#ffcc00',
    transition: 'width 0.3s ease-in-out',
  },
  successMessage: {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    color: '#00ffab',
    display: 'flex',
    alignItems: 'center',
    animation: 'fadeIn 1s ease forwards',
  },
  checkmark: {
    fontSize: '1.5rem',
    marginRight: '0.5rem',
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



export default UploadStudent;
