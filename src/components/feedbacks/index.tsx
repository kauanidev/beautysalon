import { Feedback } from "./feedback";

const feedbacks = [
  {
    content:
      "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.",
    authorImg: "/feedbacks/Feedback1.png",
    authorName: "Wanessa Souza",
  },
  {
    content:
      "Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.",
    authorImg: "/feedbacks/Feedback2.png",
    authorName: "Luna Falcão",
  },
];

export const Feedbacks = () => {
  return (
    <section
      id="depoimentos"
      className="py-10 lg:py-40 bg-white border-b border-b-primary/40"
    >
      <div className="container mx-auto">
        <h2 className="font-title font-bold text-primary-dark text-2xl sm:text-4xl text-center max-w-[481px] mx-auto">
          Depoimentos de quem já passou por aqui
        </h2>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-4 sm:mt-10 lg:mt-16">
          {feedbacks.map((feedback) => (
            <Feedback key={feedback.authorName} feedback={feedback} />
          ))}
        </div>
      </div>
    </section>
  );
};
