

const StudentResult = () => {
  const student = {
    name: "John Doe",
    rollNumber: "12345",
    class: "10th Grade",
    marks: {
      Math: 75,
      Science: 82,
      English: 68,
      History: 90,
      Geography: 55,
    },
  };

  // Calculate total and percentage
  const subjects = Object.keys(student.marks);
  const totalMarks = subjects.reduce((total, subject) => total + student.marks[subject], 0);
  const percentage = (totalMarks / (subjects.length * 100)) * 100;
  const pass = percentage >= 40; // Threshold for pass/fail

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Result</h1>

      {/* Student Information */}
      <div style={styles.info}>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Roll Number:</strong> {student.rollNumber}</p>
        <p><strong>Class:</strong> {student.class}</p>
      </div>

      {/* Result Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject}>
              <td style={styles.td}>{subject}</td>
              <td style={styles.td}>{student.marks[subject]}</td>
            </tr>
          ))}
          <tr style={styles.totalRow}>
            <td style={styles.totalCell}><strong>Total</strong></td>
            <td style={styles.totalCell}><strong>{totalMarks}</strong></td>
          </tr>
          <tr>
            <td style={styles.totalCell}><strong>Percentage</strong></td>
            <td style={styles.totalCell}><strong>{percentage.toFixed(2)}%</strong></td>
          </tr>
        </tbody>
      </table>

      {/* Pass/Fail Status */}
      <div style={{ ...styles.status, backgroundColor: pass ? "#2ecc71" : "#e74c3c" }}>
        {pass ? "Pass" : "Fail"}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f4f7f9",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#34495e",
    marginBottom: "1.5rem",
  },
  info: {
    marginBottom: "1.5rem",
    fontSize: "1.1rem",
    color: "#2c3e50",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "1.5rem",
  },
  th: {
    backgroundColor: "#1abc9c",
    color: "#ffffff",
    padding: "0.75rem",
    fontSize: "1rem",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "0.75rem",
    fontSize: "1rem",
    color: "#34495e",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
  },
  totalRow: {
    backgroundColor: "#ecf0f1",
  },
  totalCell: {
    padding: "0.75rem",
    fontSize: "1rem",
    color: "#34495e",
    textAlign: "left",
  },
  status: {
    textAlign: "center",
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
};

export default StudentResult;
