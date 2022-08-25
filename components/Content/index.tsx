import Carousel from "../Carousel";

export default function Content() {
  return (
    <div className="grid grid-cols-12 w-full mx-auto justify-center lg: max-w-7xl p-8">
      <div className="flex flex-col items-center py-4 lg:items-start text-center lg:text-left lg:col-span-6 col-span-12">
        <h2 className="font-bold text-3xl text-blue">Software Development</h2>
        <p className="text-2xl leading-9">
          Specialized in Full Stack Web development, I create and collaborate on
          building optimized web applications using the latest technologies,
          tools and methodologies.
        </p>
      </div>
      <div className="relative h-min-xl lg:col-start-8 lg:col-span-4 col-span-full py-8">
        <Carousel />
      </div>
    </div>
  );
}