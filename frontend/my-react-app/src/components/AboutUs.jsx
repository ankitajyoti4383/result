

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title} className="animated-title">About Us</h1>
      <p style={styles.description} className="animated-title">
        Welcome to the Result Management System! Our mission is to make managing academic results straightforward, accurate, and accessible for all users. With a team of dedicated professionals, we’re here to provide a reliable and secure platform for both students and faculty.
      </p>

      <div style={styles.teamSection}>
        <h2 style={styles.teamTitle} className="animated-title">Meet Our Team</h2>
        <div style={styles.teamContainer} className="animated-title">
          {teamData.map((member, index) => (
            <div style={styles.teamMember} key={index}>
              <img src={member.image} alt={member.name} style={styles.image} />
              <p style={styles.name}>{member.name}</p>
              <p style={styles.role}>{member.role}</p>
              <p style={styles.bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Contact Us</h2>
        <p>Email: support@resultmanagement.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>
    </div>
  );
};

const teamData = [
  {
    name: 'John Doe',
    role: 'Project Lead',
    bio: 'Experienced project lead with a passion for educational technology.',
    image: 'team-member1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Developer',
    bio: 'Front-end developer specializing in interactive and user-friendly interfaces.',
    image: 'team-member2.jpg',
  },
  {
    name: 'Alice Johnson',
    role: 'Designer',
    bio: 'Creative designer focused on beautiful and accessible designs.',
    image: 'team-member3.jpg',
  },
];

const styles = {
  container: {
    padding: '3rem',
    fontFamily: 'Arial, sans-serif',
    color: '#2c3e50',
    animation: 'fadeIn 1.5s ease-in-out',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    backgroundImage:'url("http://news.harvard.edu/wp-content/uploads/2020/03/Zoom_Background_004.jpg")'
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
    boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
    borderRadius: '10px',
    backgroundColor:'rgba(80, 40, 10, 0.8)',
    color:"black",
    
  },
  teamSection: {
    textAlign: 'center',
  },
  teamTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    
    marginBottom: '1rem',
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '1rem',
    
  },
  teamMember: {
    textAlign: 'center',
    maxWidth: '200px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
    backgroundColor:'rgba(80, 40, 10, 0.8)'
    
    
  },
  teamMemberHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    borderRadius: '50%',
    marginBottom: '0.5rem',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'black',
  },
  role: {
    fontSize: '1rem',
    color: '#7f8c8d',
    marginBottom: '0.5rem',
  },
  bio: {
    fontSize: '0.9rem',
    color: '#95a5a6',
  },
  contactSection: {
    marginTop: '3rem',
    textAlign: 'center',
    
    padding: '2rem',
    borderRadius: '10px',
    backgroundColor:'rgba(80, 40, 10, 0.8)',
    color:"black",
  },
  contactTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '1rem',
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

  .teamMember:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default AboutUs;
