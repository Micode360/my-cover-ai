import Image from "next/image";

export default function InsuranceForBussinessModel() {
  return (
    <div className="grid grid-cols-2 py-[7.625rem] pl-[9.313%]">
      <div>
        <h2 className="text-[1.875rem] text-gray-800 font-[700] mb-[1.438rem]">
          Insurance for any business <span className="hightlight relative">model</span>
        </h2>
        <p className="text-[1.25rem] text=[#1D2939] mb-[1.125rem]">
          Our API is perfect for anyone, from non-digital businesses to large
          fintech platforms to unlock new markets in different ways.
        </p>
        <div className="grid grid-cols-2 gap-[1.563rem]">
          <div>
            <div className="py-[0.5rem] text-gray-800 flex items-center text-[1.5rem] font-[700]">
              <Image
                className="object-cover rounded mr-4 min-w-[1.25rem]"
                src="/img/icons/bullet.svg"
                alt="img"
                width={20}
                height={20}
              />
              Go Full White Label
            </div>
            <p className="text-[1.125rem] text-gray-600 font-[500] ml-[0.5rem]">
              Our API enable customers interact with your platform only.
            </p>
          </div>

          <div>
            <div className="py-[0.5rem] text-gray-800 flex items-center text-[1.5rem] font-[700]">
              <Image
                className="object-cover rounded text-gray-600 mr-4 min-w-[1.25rem]"
                src="/img/icons/bullet.svg"
                alt="img"
                width={20}
                height={20}
              />
              Seamless Integration
            </div>
            <p className="text-[1.125rem] font-[500] ml-[0.5rem]">
              Easy integrations without partnerships and compliance.
            </p>
          </div>

          <div>
            <div className="py-[0.5rem] text-gray-800 flex items-center text-[1.5rem] font-[700]">
              <Image
                className="object-cover rounded  mr-4 min-w-[1.25rem]"
                src="/img/icons/bullet.svg"
                alt="img"
                width={20}
                height={20}
              />
              Semi White Label
            </div>
            <p className="text-[1.125rem] font-[500] text-gray-600 ml-[0.5rem]">
              Optimise operational costs by leveraging our solutions.
            </p>
          </div>

          <div>
            <div className="py-[0.5rem] text-gray-800 flex items-center text-[1.5rem] font-[700]">
              <Image
                className="object-cover rounded mr-4 min-w-[1.25rem]"
                src="/img/icons/bullet.svg"
                alt="img"
                width={20}
                height={20}
              />
              No Platform
            </div>
            <p className="text-[1.125rem] font-[500] text-gray-600 ml-[0.5rem]">
              Our platform was built for non-digital businesses too.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center ml-[8.875rem] shadow-2xl relative overflow-hidden">
        <Image
          className="object-cover rounded mr-0 md:mt-[-4px] w-[220.98px] z-10"
          src="/img/checkout.svg"
          alt="img"
          width={220.98}
          height={483.54}
        />

        <Image
          className="object-cover rounded absolute bottom-[-4rem] left-[-40px] min-w-[136px] rotate-[2deg] scale-[0.65] opacity-[.61]"
          src="/img/checkout_chevron.svg"
          alt="img"
          width={232.47}
          height={292.02}
        />
      </div>
    </div>
  );
}
