export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-8 bg-zinc-800 w-full">
      <ul className="flex justify-center gap-8">
        <li>
          Terms of Use
        </li>
        <li>
          Privacy Policy
        </li>
        <li>
          Release Notes
        </li>
        <li>
          <a href="/">
            &copy; 2024 Calendara
          </a>
        </li>
      </ul>
    </footer>
  );
}
