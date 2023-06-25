const socials = [
  {
    icon: "/icons/instagram.svg",
    href: "https://instagram.com",
  },
  {
    icon: "/icons/facebook.svg",
    href: "https://facebook.com",
  },
  {
    icon: "/icons/youtube.svg",
    href: "https://youtube.com",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-primary py-[60px]">
      <div className="container mx-auto flex justify-between flex-col md:flex-row md:items-center gap-8 md:gap-0">
        <div className="text-white">
          <img src="/logo2.svg" />
          <p className="mt-6 mb-3">©{new Date().getFullYear()} Beautysalon.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className="flex items-center gap-8">
          {socials.map((social) => (
            <a key={social.icon} href={social.href} target="_blank">
              <img src={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
