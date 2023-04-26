import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="overflow-hidden grid grid-cols-2 gap-0 mt-[5.5rem] pb-[6.594rem] relative">
      <div className="ml-[8.313rem] pt-[6.594rem]">
        <div className="flex mb-[4rem]">
          <a className="bg-green rounded-lg text-white mr-4 px-2" href="#">
            Just In
          </a>
          Mycover.ai just launched there AI Inspection APP
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>

        <div className="mt-[2.063rem]">
          <h2 className="text-[3rem] font-[700] text-green_gradient">
            Revolutionizing the insurance experience in Africa
          </h2>
          <p className="mt-[2.063rem]">
            Our Open Insurance API enables businesses and innovators easily
            embed or build new insurtech solutions to distribute insurance to
            anyone, from anywhere.{" "}
          </p>
        </div>

        <div className="hidden lg:flex mt-[2.5rem]">
          <Link
            className="w-[7.813rem] text-center py-[0.75rem] bg-green rounded text-white mr-[2.063rem]"
            href="/"
          >
            Get Started
          </Link>

          <Link
            className="flex items-center w-[7.813rem] text-center py-[0.75rem] mr-[1.313rem] text-gray-600 bg-[#F2F4F7] rounded"
            href="/"
          >
            View Demo
            <Image
              className="object-cover rounded ml-4 min-w-[18px]"
              src="/img/icons/watch_vid.svg"
              alt="img"
              width={18}
              height={13.5}
            />
          </Link>
        </div>
      </div>

      <div className="pt-[6.594rem] z-10">
        <Image
          className="object-cover rounded w-[500%]"
          src="/img/hero.svg"
          alt="img"
          width={1220}
          height={981}
        />
      </div>

      <Image
        className="object-cover rounded absolute top-[-2.2rem] right-0 min-w-[136px] z-0"
        src="/img/hero_esclipes_top_left.svg"
        alt="img"
        width={136}
        height={383}
      />

      <Image
        className="object-cover rounded absolute bottom-[-7.5rem] right-[25.8rem] min-w-[136px] rotate-90"
        src="/img/hero_esclipes_top_left.svg"
        alt="img"
        width={136}
        height={383}
      />

      <Image
        className="object-cover rounded absolute bottom-[-7.5rem] left-0 min-w-[136px] rotate-[175deg] opacity-[.61]"
        src="/img/chevron_down.svg"
        alt="img"
        width={232.47}
        height={292.02}
      />
    </section>
  );
}
