import Link from "next/link";
import Image from "next/image"


export default function JoinUs () {
    return (
        <section className="bg-deep_blue grid grid-cols-2 px-[9.313%] py-[3.375rem] relative overflow-hidden">
        <div className="flex items-center">
            <div>
                <h2 className="text-[3rem] text-white font-[700] mb-[1.625rem]">
                Join our insurtech ecosystem to democratise insurance in <span className="text-green">Africa</span>. 
            </h2>
            <div className="flex mb-[1.625rem]">
                <Link
                className="w-[7.813rem] text-center py-[0.75rem] bg-green rounded text-white mr-[2.063rem]"
                href="/"
                >
                Get Started
                </Link>
            </div>
            </div>
        </div>
        <div className="z-10">
            <Image
            className="object-cover rounded mr-0 md:mt-[-4px] w-[100%] z-10"
            src="/img/image_group.svg"
            alt="img"
            width={220.98}
            height={483.54}
            />
        </div>

        <Image
          className="object-cover rounded absolute top-[-4rem] right-[-12rem] min-w-[1119.31px] rotate-[15deg]"
          src="/img/curvy_lines.svg"
          alt="img"
          width={232.47}
          height={292.02}
        />

        <Image
          className="object-cover rounded absolute bottom-0 left-[-20px] min-w-[136px] rotate-[2deg] scale-[0.95] opacity-[.81]"
          src="/img/checkout_chevron.svg"
          alt="img"
          width={232.47}
          height={292.02}
        />
      </section>
    );
}