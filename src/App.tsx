import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-light-text">
      <header className="flex justify-center mb-8">
        <svg
          className="w-12 h-12 text-light-text"
          viewBox="0 0 300 271"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="X logo"
        >
          <title>X logo</title>
          <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
        </svg>
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
