type ServiceProps = {
  service: {
    iconUrl: string;
    title: string;
    description: string;
  };
};

export const Service = ({ service }: ServiceProps) => {
  return (
    <div className="shadow-lg rounded flex flex-col items-center pt-[58px] min-h-[352px] border-b-4 border-b-primary text-center">
      <img src={service.iconUrl} className="w-20 h-20 object-contain" />
      <h3 className="text-2xl font-title font-bold text-primary-dark mt-6 mb-3">
        {service.title}
      </h3>
      <p className="text-gray max-w-[256px]">{service.description}</p>
    </div>
  );
};
