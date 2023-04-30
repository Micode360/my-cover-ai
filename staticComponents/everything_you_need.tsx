import Link from "next/link";
import Image from "next/image";

export default function EverythingYouNeedToKnow() {
  return (
    <section className="grid grid-cols-2 gap-2 bg-deep_blue px-[9.313%] py-[9.375rem] relative overflow-hidden">
      <div>
        <div>
<h2 className="text-[1.875rem] text-green font-[700] mb-[1.625rem]">
            Everything you need to start building
          </h2>
          <p className="text-white text-[1.25rem] font-[500] mb-[2.625rem]">
            We understand the crux of good developer experience while
            interfacing with an API. Our developer-friendly guide will get you
            started in no time.
          </p>          
          <div className="flex mb-[1.625rem]">
            <Link
              className="w-[7.813rem] text-center py-[0.75rem] bg-green rounded text-white mr-[2.063rem]"
              href="/"
            >
              Read the docs
            </Link>
          </div>
        </div>

        <div className="bg-[#1D2939] py-[2.938rem] px-[2.688rem] rounded-xl">
          <div className="mb-[3.375rem]">
            <div className="py-[0.5rem] text-white flex items-center text-[1.5rem] font-[700]">
              <Image
                className="object-cover rounded  mr-4 min-w-[1.25rem]"
                src="/img/icons/bullet.svg"
                alt="img"
                width={20}
                height={20}
              />
              APIs
            </div>
            <p className="text-[1.25rem] font-[500] text-[#D0D5DD] ml-[0.5rem]">
              Seamless API integrations designed to optimised user’s experience.
            </p>
          </div>

          <div className="mb-[3.375rem]">
            <div className="py-[0.5rem]  text-white flex items-center text-[1.5rem] font-[700]">
              <Image
                className="object-cover rounded  mr-4 min-w-[1.25rem]"
                src="/img/icons/bullet.svg"
                alt="img"
                width={20}
                height={20}
              />
              SDKs
            </div>
            <p className="text-[1.25rem] font-[500] text-[#D0D5DD] ml-[0.5rem]">
              Customizable SDKs that plays nicely with your infrastructure.
            </p>
          </div>

          <div className="mb-[3.375rem]">
            <div className="py-[0.5rem] text-white flex items-center text-[1.5rem] font-[700]">
              <Image
                className="object-cover rounded  mr-4 min-w-[1.25rem]"
                src="/img/icons/bullet.svg"
                alt="img"
                width={20}
                height={20}
              />
              Claims
            </div>
            <p className="text-[1.25rem] font-[500] text-[#D0D5DD] ml-[0.5rem]">
              Reliably automate claims assessment with real-time data inputs,
              enabled by our API.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="z-10">
          <Image
            className="object-cover rounded w-[100%]"
            src="/img/img_form.svg"
            alt="img"
            width={1220}
            height={981}
          />
        </div>

        <div className="bg-[#1D2939] py-[1.25rem] px-[1.125rem] mx-2 rounded-xl">
          <div
            className="block font-[monospace] blue-glob-gradient px-[1.563rem] py-[2.25rem] text-[1rem] text-white outline-none"
          >
            <div>
              <span className="#B4FDFE">mycover.</span>{" "}
              <span className="text-[#F3D246]">{"buildWithOptions({"}</span>
            </div>
            <div>
              <span className="text-[#F3D246]">name:</span>{" "}
              <span className="text-[#98CD89]">{`'Peter the builder',`}</span>
            </div>
            <div>
              <span className="text-[#F3D246]">env:</span>{" "}
              <span className="text-[#B4F1A3]">{`'production-sandbox',`}</span>
            </div>
            <div>
              <span className="text-[#F3D246]">{`key: '',`}</span>{" "}
              <span className="text-[#A866F7]">{`//Your key from mycover.aidashboard`}</span>
            </div>
            <div>
              <span className="text-[#F3D246]">{`token: '',`}</span>{" "}
              <span className="text-[#A866F7]">{`//Your token from mycover.ai dashboard`}</span>
            </div>
            <div>
              <span className="text-[#F3D246]">{`})`}</span>
            </div>
          </div>
        </div>

        <div className="bg-green w-[1020px] h-[291.53px] rotate-[35deg] absolute top-[-150px] right-[-350px]"></div>
        <Image
          className="object-cover rounded absolute top-0 right-[-20px] min-w-[136px] rotate-[20deg] opacity-[.61]"
          src="/img/chevron_down.svg"
          alt="img"
          width={232.47}
          height={292.02}
        />

        <Image
          className="object-cover rounded absolute bottom-[-7.5rem] left-[-20px] min-w-[136px] rotate-[175deg] opacity-[.61]"
          src="/img/chevron_down.svg"
          alt="img"
          width={232.47}
          height={292.02}
        />
      </div>
    </section>
  );
}
