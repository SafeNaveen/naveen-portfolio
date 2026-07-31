export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-cyan-400">NK</h1>

        <nav>
          <ul className="flex gap-8">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}