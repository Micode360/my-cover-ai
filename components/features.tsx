import Image from "next/image";

export default function Features() {
  return (
    <section className="py-[7.313rem] relative">
    <div className="bg-[#070707] h-[2.188rem] w-[15.438rem] absolute top-0 right-0"></div>
      <div>
        <p className="px-[9.313%] mb-[2.063rem]">Brands growing with us :</p>
        <div className="flex justify-between items-center px-[9.313%]">
          <div className="min-w-[66px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/bolt.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>

          <div className="min-w-[151px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/bitmama.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>

          <div className="min-w-[151px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/blackcopper.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>

          <div className="min-w-[106px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/jise.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>

          <div className="min-w-[162px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/transtura.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>

          <div className="min-w-[173px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/self_alliance.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-25 py-[5.063rem] px-[9.313%]">
        <div className="text-center mb-[6.438rem]">
          <h2 className="text-[1.875rem] font-[700] mb-[0.313rem]">
            Insurtech with innovators in mind
          </h2>
          <p className="text-[1.25rem]">
            Build insurtech solutions with Africa’s largest digital insurance
            infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[1.25rem] ">
          <div className="bg-light_gray rounded-xl p-[4.813rem] relative overflow-hidden">
            <div className="min-w-[50px] mb-[3.375rem]">
                <Image
                className="object-cover rounded ml-4"
                src="/img/icons/blocks.svg"
                alt="img"
                width={50}
                height={50}
                />
            </div>
            <h2 className="font-[700] text-[1.5rem] text-gray-800 mb-[2.875rem]">Built for Anyone</h2>
            <p className="text-[1.25rem]">Direct access to several insurance companies in one place without worrying about multiple partnerships, integrations or compliance.</p>
            <Image
              className="object-cover rounded absolute bottom-[-7.5rem] left-0 min-w-[136px] rotate-[175deg] opacity-[.61]"
              src="/img/chevron_down.svg"
              alt="img"
              width={232.47}
              height={292.02}
            />
          </div>
          <div className="bg-light_green rounded-xl p-[4.813rem] relative overflow-hidden">
          <div className="min-w-[50px] mb-[3.375rem]">
                <Image
                className="object-cover rounded ml-4"
                src="/img/icons/API_integration.svg"
                alt="img"
                width={50}
                height={50}
                />
            </div>
            <h2 className="font-[700] text-[1.5rem] text-gray-800 mb-[2.875rem]">Easy to integrate APIs</h2>
            <p className="text-[1.25rem]">Seamless and direct integrations into your platform. Built on a framework that lets you easily deploy insurance into the purchasing experience of customers.</p>
            <Image
              className="object-cover rounded absolute bottom-[-7.5rem] left-0 min-w-[136px] rotate-[175deg] opacity-[.61]"
              src="/img/chevron_down.svg"
              alt="img"
              width={232.47}
              height={292.02}
            />
          </div>
          <div className="bg-light_green rounded-xl p-[4.813rem] relative overflow-hidden">
          <div className="min-w-[50px] mb-[3.375rem]">
                <Image
                className="object-cover rounded ml-4"
                src="/img/icons/briefcase.svg"
                alt="img"
                width={50}
                height={50}
                />
            </div>
            <h2 className="font-[700] text-[1.5rem] text-gray-800 mb-[2.875rem]">Automated Claim Management</h2>
            <p className="text-[1.25rem]">Your customers gets automated claim support, from notifications to loss assessments, and instant payouts using real-time data inputs.</p>
            <Image
              className="object-cover rounded absolute bottom-[-7.5rem] left-0 min-w-[136px] rotate-[175deg] opacity-[.61]"
              src="/img/chevron_down.svg"
              alt="img"
              width={232.47}
              height={292.02}
            />
          </div>
          <div className="bg-light_gray rounded-xl p-[4.813rem] relative overflow-hidden">
          <div className="min-w-[50px] mb-[3.375rem]">
                <Image
                className="object-cover rounded ml-4"
                src="/img/icons/blocks_2.svg"
                alt="img"
                width={50}
                height={50}
                />
            </div>
            <h2 className="font-[700] text-[1.5rem] text-gray-800 mb-[2.875rem]">End-to-End Service</h2>
            <p className="text-[1.25rem]">Get access to a significant tool in the insurance value chain; a robust admin support for policy and claims management.</p>
            <Image
              className="object-cover rounded absolute bottom-[-7.5rem] left-0 min-w-[136px] rotate-[175deg] opacity-[.61]"
              src="/img/chevron_down.svg"
              alt="img"
              width={232.47}
              height={292.02}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
