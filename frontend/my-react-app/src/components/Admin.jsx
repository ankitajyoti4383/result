// src/components/Admin.jsx

import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li>
            <Link to="/upload">Upload Results</Link>
          </li>
          <li>
            <Link to="/">View Student Results</Link>
          </li>
          {/* Add more admin functionalities as needed */}
          {/* For example, you could add a link to manage users */}
          <li>
            <Link to="/manage-users">Manage Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Admin;
