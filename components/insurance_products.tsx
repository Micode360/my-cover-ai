import Image from "next/image";

export default function InsuranceProducts() {
  return (
    <section className="relative py-[5.063rem] px-[9.313%]">
      <div className="bg-[#1849A9] h-[2.188rem] w-[15.438rem] absolute top-0 left-0"></div>

      <div className="text-center">
        <h2 className="text-[1.875rem] font-[700] mb-[0.313rem]">
          Exciting insurance products for all sectors
        </h2>
        <p className="text-[1.25rem]">
          Distribute tailor made products with access to multiple insurance
          companies.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[1.188rem]">
        <div className="flex items-center shadow-md py-[3.125rem] px-[1.875rem]">
          <div className="mr-4">
            <div className="min-w-[2.275rem]">
              <Image
                className="object-cover rounded ml-4"
                src="/img/icons/home.svg"
                alt="img"
                width={50}
                height={50}
              />
            </div>
          </div>
          <p className="text-[1.25rem] font-[700]">Home</p>
        </div>
        <div className="flex items-center shadow-md py-[3.125rem] px-[1.875rem]">
          <div className="mr-4">
            <div className="min-w-[2.275rem]">
              <Image
                className="object-cover rounded ml-4"
                src="/img/icons/auto.svg"
                alt="img"
                width={50}
                height={50}
              />
            </div>
          </div>
          <p className="text-[1.25rem] font-[700]">auto</p>
        </div>
        <div className="flex items-center shadow-md py-[3.125rem] px-[1.875rem]">
          <div className="mr-4">
            <div className="min-w-[50px]">
              <Image
                className="object-cover rounded ml-4"
                src="/img/icons/gadget.svg"
                alt="img"
                width={50}
                height={50}
              />
            </div>
          </div>
          <p className="text-[1.25rem] font-[700]">Gadget</p>
        </div>
        <div className="flex items-center shadow-md py-[3.125rem] px-[1.875rem]">
          <div className="mr-4">
            <div className="min-w-[50px]">
              <Image
                className="object-cover rounded ml-4"
                src="/img/icons/travel.svg"
                alt="img"
                width={50}
                height={50}
              />
            </div>
          </div>
          <p className="text-[1.25rem] font-[700]">Travel</p>
        </div>
        <div className="flex items-center shadow-md py-[3.125rem] px-[1.875rem]">
          <div className="mr-4">
            <div className="min-w-[50px]">
              <Image
                className="object-cover rounded ml-4"
                src="/img/icons/health.svg"
                alt="img"
                width={50}
                height={50}
              />
            </div>
          </div>
          <p className="text-[1.25rem] font-[700]">Health</p>
        </div>
        <div className="flex items-center shadow-md py-[3.125rem] px-[1.875rem]">
          <div className="flex items-center text-[1.25rem] text-green">
            View more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
        </div>
      </div>
    </section>
  );
}
