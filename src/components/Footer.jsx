import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-8 bg-zinc-800 w-full">
      <ul className="flex justify-center gap-8">
        <li>
          <Link to="/terms-of-use">
            Terms of Use
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/release-notes">
            Release Notes
          </Link>
        </li>
        <li>
          <Link to="/">
            &copy; 2024 Calendara
          </Link>
        </li>
      </ul>
    </footer>
  );
}
