const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Daniel Oliveira. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
