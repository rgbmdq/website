import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-12 w-full mx-auto justify-center lg: max-w-7xl p-8">
      <div className="flex flex-col items-center py-4 lg:items-start text-center lg:text-left lg:col-span-5 col-span-12">
        <h1 className="font-bold text-5xl text-blue">Hi! I'm Rodrigo</h1>
        <h4 className="text-2xl px-4 text-black lg:px-0">
          Professional <strong>Software Developer</strong> &{" "}
          <strong>Marketer</strong>, with <strong>5 year of experience</strong>{" "}
          collaborating with the IT Industry.
        </h4>
        <button className="inline-flex justify-center py-3 px-10 mt-8 border-4 shadow-sm bg-pink text-[white] font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2">
          Let's connect!
        </button>
      </div>
      <div className="lg:col-start-8 lg:col-span-4 col-span-full py-4 m-auto">
        <div className="p-1 bg-gradient-to-tr from-pink to-blue rounded-full leading-[0] \">
          <Image
            priority
            src="/../public/images/profile.jpeg"
            height={244}
            width={244}
            objectFit="cover"
            className="rounded-full"
            alt={"me"}
          />
        </div>
      </div>
    </div>
  );
}
