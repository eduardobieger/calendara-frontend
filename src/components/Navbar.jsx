export default function Navbar() {
  return (
    <nav className="bg-zinc-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-7">
          <h1 className="text-2xl font-bold text-white">Calendara</h1>
          <ul className="flex space-x-5">
            <li>
              <a href={`/`} className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href={`/about`} className="text-white">
                About
              </a>
            </li>
            <li>
              <a href={`/contact`} className="text-white">
                Contact
              </a>
            </li>
            <li>
              <a href={`/pricing`} className="text-white">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex space-x-5">
          <li>
            <a href={`login`} className="text-white">
              Login
            </a>
          </li>
          <li>
            <a href={`/signup`} className="text-white">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
