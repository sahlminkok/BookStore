import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <h1>
          <Link to="/">Bookstore CMS</Link>
        </h1>
      </li>
      <div className="links">
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </div>
      <div className="icon">
        <svg
          stroke="#e8e8e8"
          fill="#fff"
          strokeWidth="2"
          viewBox="0 0 512 512"
          className="Navbar_icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#0290ff" d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z" />
        </svg>
      </div>
    </ul>
  </nav>
);

export default Navbar;
