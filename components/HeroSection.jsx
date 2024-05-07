import heroImg from "@Images/author-image2.png";
import Image from "next/image";
import TypingEffect from "@components/TypingEffect";
import ResumeButton from "./Resume";
export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 lg:text-6xl text-4xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to to-pink-600">
              Hello I&apos;m{" "}
            </span>
            <br />
            <TypingEffect />
          </h1>
          <p className=" text-base sm:text-lg lg:text-xl mb-6 text-[#ABD7BE]">
            I am a Full Stack Developer based in India. I love to build
            performant, responsive, and interactive web applications and
            websites.
          </p>
          <div className="">
            <button className="px-6 sm:w-fit w-full py-3 rounded-full mb-3 lg:mr-4 md:mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200  text-white ">
              Hire Me
            </button>

            <ResumeButton />
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="flex  justify-center items-end rounded-full sm:pt-5 bg-[#181818] w-[300px] lg:w-[400px] h-[300px] lg:h-[400px]">
            <Image
              src={heroImg}
              width={350}
              height={350}
              alt="Author Image"
              className=" rounded-full z-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
