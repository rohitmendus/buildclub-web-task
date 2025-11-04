import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="brand">
          <img src="logo.png" alt="Buildclub logo" className="nav-logo" />
          <h1 className="logo-text">Buildclub</h1>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Projects</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-text">
          <h2>Welcome to Buildclub</h2>
          <p>
            We’re a team of creators, coders, and innovators turning ideas into
            real-world projects. Join us and let’s build something amazing
            together.
          </p>
          <button
            onClick={() =>
              alert("Welcome to Buildclub — where innovation begins! 💡")
            }
          >
            Get Started
          </button>
        </div>
        {/* Hero image removed to use the logo in the navbar top-left */}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Buildclub</p>
      </footer>
    </div>
  );
}

export default App;
