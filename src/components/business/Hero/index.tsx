import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-row gap-8 items-center">
      <div className="grow flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Bienvenido! Soy Metalit0</h1>
        <p>
          Este es mi humilde blog, donde escribo sobre desarrollo de software
        </p>
      </div>
      <Image
        className="W-[150px] h-[150px] rounded-lg object-cover"
        alt="Metalit0"
        src="/avatar.png"
        width={150}
        height={150}
      />
    </section>
  );
};

export default Hero;
