// import "./App.css";
import BuildClubLogo from './assets/logo.png'


function App() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col font-body">
      {/* Navbar */}
      <header className="bg-primary text-background flex justify-between items-center px-6 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img
            src={BuildClubLogo}
            alt="Buildclub logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-2xl font-heading font-bold tracking-tight">
            Buildclub
          </h1>
        </div>
        <nav className="flex gap-6 text-base font-medium">
          <a
            href="#"
            className="hover:text-secondary transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-colors duration-200"
          >
            Projects
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row justify-center items-center flex-grow px-6 py-16 bg-background text-text">
        <div className="max-w-2xl text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Welcome to <span className="text-primary">Buildclub</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
            We’re a team of creators, coders, and innovators turning ideas into
            real-world projects. Join us and let’s build something amazing
            together.
          </p>
          <button
            onClick={() =>
              alert("Welcome to Buildclub — where innovation begins! 💡")
            }
            className="mt-4 bg-secondary text-primary font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-primary hover:text-secondary transition-all duration-200"
          >
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-background text-center py-4 text-sm">
        <p>© 2025 Buildclub</p>
      </footer>
    </div>
  );
}

export default App;
