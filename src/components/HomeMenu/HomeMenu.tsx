export default function HomeMenu() {
  const menuLinks = [
    { linkAddress: "/", linkText: "TOUR" },
    { linkAddress: "/music", linkText: "MUSIC" },
    { linkAddress: "/merch", linkText: "MERCH" },
    { linkAddress: "/contact", linkText: "CONTACT" },
  ];

  return (
    <nav>
      <ul className="z-30 text-white font-lexend flex flex-col text-5xl md:text-xl gap-24 md:flex-row space-x-4 list-none absolute top-1/2 left-1/2 w-10/12 justify-between align items-center text-center transform -translate-x-1/2 -translate-y-1/2">
        {menuLinks.map((link, index) => {
          return (
            <li key={index}>
              <a
                href={link.linkAddress}
                className="hover:text-gray-400 cursor-pointer"
              >
                {link.linkText}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
