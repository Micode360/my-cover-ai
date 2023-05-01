import Image from "next/image";

export default function Header({ nav, setNav }: any) {
  return (
    <section className="flex justify-between items-center py-[1.125rem] px-[2.188rem]">
      <div className="text-[1.5rem] font-[700]">
        {nav === "claim" ? (
          "Claims"
        ) : nav === "makeClaim" ? (
          <span onClick={() => setNav("claim")} className="flex items-center cursor-pointer">
            <Image
              className="min-w-[1.125rem] rounded-full mr-[1.375rem]"
              src="/img/admin/back_arrow.svg"
              alt="img"
              width={18}
              height={18}
            />
            Claims
          </span>
        ) : (
          ""
        )}
      </div>
      <div>
        <input
          className="border-b-[1px] py-[0.875rem] px-[2.188rem]"
          placeholder="search"
        />
      </div>

      <div className="flex items-center">
        <svg
          className="mr-[1.375rem]"
          width="20"
          height="25"
          viewBox="0 0 20 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 24.5C11.375 24.5 12.5 23.375 12.5 22H7.5C7.5 23.375 8.625 24.5 10 24.5ZM17.5 17V10.75C17.5 6.9125 15.4625 3.7 11.875 2.85V2C11.875 0.9625 11.0375 0.125 10 0.125C8.9625 0.125 8.125 0.9625 8.125 2V2.85C4.55 3.7 2.5 6.9 2.5 10.75V17L0 19.5V20.75H20V19.5L17.5 17ZM15 18.25H5V10.75C5 7.65 6.8875 5.125 10 5.125C13.1125 5.125 15 7.65 15 10.75V18.25Z"
            fill="#757B8C"
          />
        </svg>
        <Image
          className="object-cover min-w-[2.5rem] rounded-full mr-[1.375rem]"
          src="/img/admin/avatar.png"
          alt="img"
          width={40}
          height={40}
        />
        Hello Alexander
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 ml-[0.563rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
