import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64  text-white p-2 transition-transform duration-300 z-10 ${
          true ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-36`}
      >
        <nav className="text-black">
          <ul className="space-y-2 text-xs mt-20">
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
    </header>
  );
};

export default Header;
