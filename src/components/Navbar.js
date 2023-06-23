import { Link } from 'react-router-dom';

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
    </ul>
  </nav>
);

export default Navbar;
