export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-3 text-xs text-gray-400 text-center z-50">
      <p>
        made by{" "}
        <a
          href="https://www.linkedin.com/in/tomas-calle/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline cursor-pointer"
        >
          Tomas
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/cristiancamilocorrea/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline cursor-pointer"
        >
          Cristian
        </a>
        {" • "}
        design by{" "}
        <a
          href="https://www.linkedin.com/in/alejandra-garcia-garcia-b30000000000000000000000/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline cursor-pointer"
        >
          Aleja
        </a>
        {" • "}
        inspiration from{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline cursor-pointer"
        >
          vercel.com
        </a>
      </p>
    </footer>
  );
}
