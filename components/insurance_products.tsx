import Image from "next/image";

export default function InsuranceProducts() {
  return (
    <section className="relative py-[5.063rem]">
      <div className="bg-[#1849A9] h-[2.188rem] w-[15.438rem] absolute top-0 left-0"></div>

      <div className="text-center mb-[4.75rem]">
        <h2 className="text-[1.875rem] font-[700] mb-[0.313rem]">
          Exciting insurance products for all <span className="hightlight relative">sectors</span>
        </h2>
        <p className="text-[1.25rem]">
          Distribute tailor made products with access to multiple insurance
          companies.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[1.188rem] px-[9.313%]">
        <div className="flex items-center b-shadow py-[3.125rem] px-[1.875rem]">
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
        <div className="flex items-center b-shadow py-[3.125rem] px-[1.875rem]">
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
        <div className="flex items-center b-shadow py-[3.125rem] px-[1.875rem]">
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
        <div className="flex items-center b-shadow py-[3.125rem] px-[1.875rem]">
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
        <div className="flex items-center b-shadow py-[3.125rem] px-[1.875rem]">
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
        <div className="flex items-center b-shadow py-[3.125rem] px-[1.875rem]">
          <a href="#" className="flex items-center text-[1.25rem] text-green">
            View more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </div>


      <div className="grid grid-cols-2 py-[7.625rem] pl-[9.313%]">
            
            <div>
              <h2 className="text-[1.875rem] text-gray-800 font-[700] mb-[4.063rem]">Manage all insurance activities from a unified <span className="hightlight relative">platform</span>.</h2>
              
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
                    Designed for anyone
                  </div>
                  <p className="text-[1.25rem] text-gray-600 font-[500] ml-[0.5rem]">Sell to customers directly from your dashboard.</p>
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
                    Manage policies
                  </div>
                  <p className="text-[1.25rem] font-[500] ml-[0.5rem]">Process, activate and track customer policies.</p>
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
                    Claims handling
                  </div>
                  <p className="text-[1.25rem] font-[500] text-gray-600 ml-[0.5rem]">Reliably automate claims in real-time.</p>
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
                    Real-time analytics
                  </div>
                  <p className="text-[1.25rem] font-[500] text-gray-600 ml-[0.5rem]">Essential insights needed to grow your business.</p>
                </div>

              </div>
            </div>
            
          
            <div>
              <Image
              className="object-cover rounded mr-0 md:mt-[-80px] w-[500%]"
              src="/img/darshboard.svg"
              alt="img"
              width={501}
              height={981}
            />
            </div>
            
      </div>
    </section>
  );
}
