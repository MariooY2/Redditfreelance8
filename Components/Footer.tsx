import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Daniel Oliveira. All rights reserved.
        </p>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/bio" className="hover:underline">
                Bio
              </Link>
            </li>
            <li>
              <Link href="/startup-tools-list" className="hover:underline">
                Startup Tools
              </Link>
            </li>
            <li>
              <Link
                href="/danieloliveirasocialmedia"
                className="hover:underline"
              >
                Social Media
              </Link>
            </li>
            <li>
              <Link href="/web" className="hover:underline">
                Web Design
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:underline">
                Featured
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
