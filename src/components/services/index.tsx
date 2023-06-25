import { Service } from "./service";

const services = [
  {
    iconUrl: "/icons/service1.svg",
    title: "Terapia capilar",
    description:
      "Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.",
  },
  {
    iconUrl: "/icons/service2.svg",
    title: "Cortes",
    description:
      "A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.",
  },
  {
    iconUrl: "/icons/service3.svg",
    title: "Tratamentos",
    description:
      "O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.",
  },
];

export const Services = () => {
  return (
    <section
      id="servicos"
      className="py-10 lg:py-20 border-b border-b-primary/40"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-[523px] mx-auto">
          <h2 className="text-4xl font-bold font-title mb-4 text-primary-dark">
            Serviços
          </h2>
          <p className="text-lg text-primary-dark">
            Com mais de 10 anos no mercado, o{" "}
            <span className="font-bold text-primary">Beautysalon</span> já
            conquistou clientes de inúmeros países com seus tratamentos
            exclusivos e totalmente naturais
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-10 lg:mt-16">
          {services.map((service) => (
            <Service key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
