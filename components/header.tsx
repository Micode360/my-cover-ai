import Link from "next/link";
import Image from "next/image";
import DrawerComp from "./drawer";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white !z-20 flex justify-between shadow-md items-center py-[1.25rem] px-[9.313%]">
      <nav>
        <Image
          className="object-cover rounded min-w-[166px]"
          src="/img/logo.svg"
          alt="img"
          width={166}
          height={36}
        />
      </nav>
      <nav className="hidden h-fit lg:flex justify-between items-center">
        <Link className="px-[1.281rem]" href="/">
          Products
        </Link>
        <Link className="px-[1.281rem]" href="/">
          Solutions
        </Link>
        <Link className="px-[1.281rem]" href="/">
          Developers
        </Link>
        <Link className="px-[1.281rem]" href="/">
          Company
        </Link>
        <Link className="px-[1.281rem]" href="/">
          Learn
        </Link>
      </nav>
      <div className="hidden lg:flex">
        <Link
          className="w-[7.813rem] text-center py-[0.75rem] mr-[1.313rem] text-gray-600 bg-[#F2F4F7] rounded"
          href="/"
        >
          Login
        </Link>

        <Link
          className="w-[7.813rem] text-center py-[0.75rem] bg-green rounded text-white"
          href="/"
        >
          Get Started
        </Link>
      </div>

      <div className="flex lg:hidden">
        <DrawerComp />
      </div>
    </header>
  );
}
