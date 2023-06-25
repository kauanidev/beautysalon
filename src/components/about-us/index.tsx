export const AboutUs = () => {
  return (
    <section id="sobre" className="bg-white">
      <div className="flex-col lg:flex-row flex items-center gap-8 lg:gap-[64px] py-10 lg:py-20 w-full max-w-[1245px] border-b border-b-primary/40">
        <img src="/about-img.png" />
        <div className="px-4 lg:px-0">
          <h2 className="font-bold text-4xl font-title text-primary-dark mb-4">
            Sobre nós
          </h2>
          <p className="text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
            quis bibendum diam. Sed consequat nisl laoreet eros ultricies
            pellentesque. Nullam in est porta, pellentesque massa vitae,
            vehicula risus. <br />
            <br />
            In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
            pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
            luctus, nunc finibus elementum suscipit, tortor augue vulputate
            sapien, vitae feugiat enim augue sed. <br />
            <br />
            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis
            rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu
            tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat,
            nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend
            dolor. Nullam eget dui at sem ullamcorper luctus.
          </p>
        </div>
      </div>
    </section>
  );
};
