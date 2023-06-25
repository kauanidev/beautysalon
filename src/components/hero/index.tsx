import { Button } from "../button";

export const Hero = () => {
  return (
    <section className="border-b border-b-primary/30 py-10 lg:pt-[84px] lg:pb-[172px]">
      <div className="container mx-auto flex justify-between items-center gap-8 lg:gap-[118px] flex-col-reverse lg:flex-row">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-bold font-title !leading-[145%]">
            Saúde natural para os seus cabelos
          </h1>
          <p className="text-gray text-lg mt-3 mb-6">
            Um salão exclusivo em São Paulo, especializado em tratamentos
            naturais.
          </p>
          <Button>Agendar um horário</Button>
        </div>
        <img src="/hero-img.png" className="lg:-mr-[50px]" />
      </div>
    </section>
  );
};
