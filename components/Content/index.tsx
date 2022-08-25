import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Content() {
  return (
    <div className="grid grid-cols-12 w-full mx-auto justify-center lg: max-w-7xl p-8">
      <div className="flex flex-col items-center py-4 lg:text-left lg:col-span-6 col-span-12 lg:items-start">
        <h2 className="font-bold text-3xl text-pink">Software Development</h2>
        <p className="text-2xl leading-9">
          Specialized in <strong>Full Stack Web development</strong>, I create and collaborate on
          building optimized <strong>web applications</strong> using the latest technologies,
          tools and methodologies.
        </p>
      </div>
      <div className="lg:col-start-8 lg:col-span-4 col-span-full pt-8">
        <Carousel infiniteLoop={true} autoPlay={true} interval={4000} showStatus={false} showArrows={false}>
          <div className="w-full border-2 border-pink rounded-md">
            <h2 className="text-2xl font-bold text-[white] bg-gradient-to-tr from-pink to-blue py-1 text-center">Technologies</h2>
            <div className="flex flex-row justify-center px-4 pt-4 pb-8">
              <div className="px-3">  
                <Image
                priority
                src="/../public/images/react.png"
                height="64"
                width="44"
                className="px-3"
                alt={"react"}
                />
              </div>
              <div className="px-3">
                <Image
                priority
                src="/../public/images/node.png"
                height="64"
                width="44"
                alt={"node"}
                />
              </div>
              <div className="px-2">
                <Image
                priority
                src="/../public/images/aws.png"
                height="64"
                width="44"
                alt={"aws"}
                />
              </div>
            </div>
          </div>
          <div className="w-full border-2 border-pink rounded-md">
            <h2 className="text-2xl font-bold text-[white] bg-gradient-to-tr from-pink to-blue py-1 text-center">Methodologies</h2>
            <div className="flex flex-row justify-center px-4 pt-4 pb-8">
              <div className="px-2">
                <Image
                priority
                src="/../public/images/scrum.png"
                height="64"
                width="44"
                alt={"scrum"}
                />
              </div>
              <div className="px-2">
                <Image
                priority
                src="/../public/images/kanban.png"
                height="64"
                width="44"
                alt={"kanban"}
                />
              </div>
            </div>
          </div>
          <div className="w-full border-2 border-pink rounded-md">
            <h2 className="text-2xl font-bold text-[white] bg-gradient-to-tr from-pink to-blue py-1 text-center">Tools</h2>
            <div className="flex flex-row justify-center px-4 pt-4 pb-8">
            <div className="px-2">
                <Image
                priority
                src="/../public/images/miro.png"
                height="64"
                width="44"
                alt={"miro"}
                />
              </div>
              <div className="px-2">
                <Image
                priority
                src="/../public/images/drive.png"
                height="64"
                width="44"
                alt={"drive"}
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}