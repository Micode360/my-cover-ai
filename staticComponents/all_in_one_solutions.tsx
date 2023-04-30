import Image from "next/image";

export default function AllInOneSolutions() {
  return (
    <section className="px-[9.313%] py-[6.438rem] bg-[#F9FAFB] ">
      <div className="text-center mb-[4.75rem]">
        <h2 className="text-[1.875rem] font-[700] mb-[0.313rem]">
          All-in-one solution for your <span className="hightlight relative">customers</span>
        </h2>
        <p className="text-[1.25rem]">
          Increase retention by giving customers the convenience of a seamless
          insurance experience with our user-friendly mobile app. Customers
          enjoy insurance from anywhere.
        </p>
      </div>

      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-center">
          <div className="flex items-center text-[1rem] py-[0.5rem] border-r-green border-r-[4px] w-[80%]">
            <Image
              className="rounded mr-4 min-w-[1.25rem]"
              src="/img/icons/bullet.svg"
              alt="img"
              width={20}
              height={20}
            />
            Policy Manangement
          </div>
          <div className="flex items-center text-[1rem] py-[0.5rem] border-r-[#D0D5DD] border-r-[4px] w-[80%]">
            <Image
              className="object-cover rounded mr-4 min-w-[1.25rem]"
              src="/img/icons/empty_bullet.svg"
              alt="img"
              width={20}
              height={20}
            />
            Simple Wallet System
          </div>
          <div className="flex items-center text-[1rem] py-[0.5rem] border-r-[#D0D5DD] border-r-[4px] w-[80%]">
            <Image
              className="object-cover rounded mr-4 min-w-[1.25rem]"
              src="/img/icons/empty_bullet.svg"
              alt="img"
              width={20}
              height={20}
            />
            Claims Management
          </div>
          <div className="flex items-center text-[1rem] py-[0.5rem] border-r-[#D0D5DD] border-r-[4px] w-[80%]">
            <Image
              className="object-cover rounded mr-4 min-w-[1.25rem]"
              src="/img/icons/empty_bullet.svg"
              alt="img"
              width={20}
              height={20}
            />
            E-HMO ID
          </div>
          <div className="flex items-center text-[1rem] py-[0.5rem] border-r-[#D0D5DD] border-r-[4px] w-[80%]">
            <Image
              className="object-cover rounded mr-4 min-w-[1.25rem]"
              src="/img/icons/empty_bullet.svg"
              alt="img"
              width={20}
              height={20}
            />
            Fraud-free Inspection
          </div>
        </div>
        <div>
          <Image
            className="object-cover rounded mr-0 md:mt-[-4px] w-[100%] z-10"
            src="/img/my_plan.svg"
            alt="img"
            width={220.98}
            height={483.54}
          />
        </div>
        <div className="flex flex-col justify-center ml-[3rem] ">
            <div>
                <h2 className="text-[1.5rem] font-[700] mb-[0.938rem]">Efficient Policy Manangement</h2>
                <p className="text-[1.125rem] font-[400]">Your customers have full control over policies purchased from you. The app is made to take the worry off you in managing all insurance activities.</p>
            </div>
        </div>
      </div>

      <div>
        <p className="mb-[2.063rem]">Brands that support us:</p>
        <div className="flex justify-between items-center">
          <div className="min-w-[66px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/techstars.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>

          <div className="min-w-[151px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/techabal.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>

          <div className="min-w-[106px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/techtrend.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>

          <div className="min-w-[162px]">
            <Image
              className="object-cover rounded w-[100%]"
              src="/img/sponsors/flutterwave.svg"
              alt="img"
              width={66}
              height={38}
            />
          </div>

        </div>
      </div>

    </section>
  );
}
