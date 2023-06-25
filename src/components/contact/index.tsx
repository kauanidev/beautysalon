import { Button } from "../button";

const contactInfos = [
  {
    icon: "/icons/phone.svg",
    content: "11 99845-6754",
  },
  {
    icon: "/icons/pin.svg",
    content: "R. Amauri Souza, 346",
  },
  {
    icon: "/icons/mail.svg",
    content: "contato@beautysalon.com",
  },
];

export const Contact = () => {
  return (
    <section
      id="contato"
      className="container mx-auto py-10 md:py-40 flex md:items-center justify-between lg:justify-start gap-10 lg:gap-[268px] flex-col md:flex-row"
    >
      <div>
        <h2 className="text-2xl sm:text-4xl font-bold font-title text-primary-dark max-w-[404px] !leading-[150%]">
          Entre em contato com a gente!
        </h2>
        <p className="text-lg text-gray mt-3 mb-6 max-w-[364px]">
          Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir
          suas críticas e sugestões.
        </p>
        <Button>
          <img src="/icons/whatsapp.svg" alt="Logo WhatsApp" />
          Entrar em contato
        </Button>
      </div>
      <div className="flex flex-col gap-8">
        {contactInfos.map((info) => (
          <div key={info.content} className="flex items-center gap-3">
            <img src={info.icon} className="h-6 w-6 object-contain" />
            <p className="text-gray text-lg">{info.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
