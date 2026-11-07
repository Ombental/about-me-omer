import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-light-text">
      <header className="flex justify-center mb-8">
        <span
          className="text-3xl font-bold text-light-text"
          role="img"
          aria-label="Omer Bental logo"
        >
          &lt;Omer /&gt;
        </span>
      </header>

      <nav className="mb-8">
        <ul className="flex justify-center gap-4">
          <li>
            <Link to="/" className="hover:text-accent-color transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-accent-color transition-colors">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact-info" className="hover:text-accent-color transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
