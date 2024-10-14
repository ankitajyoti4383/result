
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Darshboard';
import StudentResults from './components/StudentResults';
import UploadResult from './components/UploadResult';
import ViewResult from './components/ViewResult';
import './components/Navbar.css'; 
import StudentLogin from './components/StudentLogin';
import FacultyLogin from './components/FacultyLogin';
import AnimatedSidebar from './components/AnimatedSidebar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/AnimatedSidebar" element={<AnimatedSidebar/>} />
        <Route path="/StudentResults" element={<StudentResults />} />
        <Route path="/UploadResult" element={<UploadResult />} />
        <Route path="/ViewResult" element={<ViewResult />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        
        
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;