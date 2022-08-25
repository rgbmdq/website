import { useState } from "react";

import Image from "next/image";
export default function Carousel() {

  const [currentSlide, setSlide] = useState(0);


  function next(){}
  function prev(){}

  function showSlide(){
    // recorrer slides quitar hidden actual y agregar hidden al resto
  }

  return (
    <div className="relative w-full h-[24vh] border-2 border-[lightgrey] rounded-md p-4">
        <ul>
          <li>
              <h2 className="text-2xl font-bold text-blue py-1 font bold text-center">Development</h2>
              <div className="flex justify-between px-4 py-2">
                <Image
                priority
                src="/../public/images/react.png"
                height="64"
                width="44"
                alt={"react"}
                />
                <Image
                priority
                src="/../public/images/node.png"
                height="64"
                width="44"
                alt={"node"}
                />
                <Image
                priority
                src="/../public/images/aws.png"
                height="64"
                width="44"
                alt={"aws"}
                />
            </div>
          </li>
        </ul>
        <div className="my-2 w-full flex justify-center">
          <div className="my-2 w-8 flex justify-between">
            <button className="cursor-pointer bg-[black] p-1 rounded-full bg-opacity-80 shadow-lg" />
            <button className="cursor-pointer bg-[grey] p-1 rounded-full bg-opacity-80 shadow-lg" />
            <button className="cursor-pointer bg-[grey] p-1 rounded-full bg-opacity-80 shadow-lg" />
          </div>
        </div>
    </ div>
  );
}