const navLinks = [
  {
    href: "inicio",
    title: "Início",
  },
  {
    href: "sobre",
    title: "Sobre",
  },
  {
    href: "servicos",
    title: "Serviços",
  },
  {
    href: "depoimentos",
    title: "Depoimentos",
  },
  {
    href: "contato",
    title: "Contato",
  },
];

export const Header = () => {
  return (
    <header className="w-full h-[72px] border-b border-b-gray-light">
      <div className="container mx-auto flex items-center justify-between h-full">
        <img src="/logo.svg" />
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              className="text-primary-dark hover:text-primary transition-colors"
              href={`#${link.href}`}
              key={link.href}
            >
              {link.title}
            </a>
          ))}
        </nav>
        <img className="block md:hidden" src="/icons/menu.svg" />
      </div>
    </header>
  );
};
