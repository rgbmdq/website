import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex mx-auto p-8">
      <div className="w-full">
        <div>
          <h1 className="font-bold text-6xl text-blue">Hi! I'm Rodrigo</h1>
          <h4 className="text-2xl leading-9 text-gray-900">
            Professional <strong>Software Developer</strong> & <strong>Marketer</strong>, with <strong>5 year of
            experience</strong> collaborating with the IT Industry.
          </h4>
        </div>
        <div className="mt-8">
          <button className="inline-flex justify-center py-3 px-10 border-4 border-transparent shadow-sm text-base font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2">Let's connect!</button>
        </div>
      </div>
      <div className="w-full m-auto ml-10">
        <Image
          priority
          src="/../public/images/profile.jpeg"
          className="rounded-full"
          height={144}
          width={144}
          alt={"me"}
        />
      </div>
    </div>
  );
}
