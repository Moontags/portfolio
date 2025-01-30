import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-8 gap-y-4 font-serif">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="text-3xl font-bold">Welcome to my Portfolio</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis in sapien vehicula vehicula.
        </p>
      </div>
      <div className="relative">
        <Image
          className="flex-1 rounded-lg overflow-hidden grayscale"
          src="/images/authors/me.jpeg" 
          alt="Author"
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  );
}
