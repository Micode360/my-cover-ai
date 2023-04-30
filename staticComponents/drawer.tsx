import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"


export default function DrawerComp() {
  const [menu, setMenu] = useState<any>("mClose");
  
    return (                
      <>
        <svg  onClick={() => setMenu("mOpen")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <div
        className={`${menu} flex flex-col p-4 bg-[#eee] position fixed top-0 right-0 left-0 bottom-0 m-3 rounded-xl`}
      >
      <nav className="border-b-[1px] py-6 ml-6">
        <Link href="#">
          <Image
            className="object-cover rounded min-w-[166px]"
            src="/img/logo.svg"
            alt="img"
            width={166}
            height={36}
          />
        </Link>
      </nav>
        <ul className="ml-0">
          <li className="list-none border-b-[1px] border-t-[1px] p-6">
            <Link href="#">Products</Link>
          </li>
          <li className="list-none border-b-[1px] border-t-[1px] p-6">
            <Link href="#">Solutions</Link>
          </li>
          <li className="list-none border-b-[1px] border-t-[1px] p-6">
            <Link href="#">Developers</Link>
          </li>
          <li className="list-none border-b-[1px] border-t-[1px] p-6">
            <Link href="#">Company</Link>
          </li>
          <li className="list-none border-b-[1px] border-t-[1px] p-6">
            <Link href="#">Learn</Link>
          </li>
        </ul>
        <div className="flex pt-6 ml-6">
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
        <span
          className="bg-white rounded-xl text-[1.2rem] absolute top-4 right-4 cursor-pointer py-2 px-4 text-green shadow-md font-[700] "
          onClick={() => setMenu("mClose")}
        >
          X
        </span>
      </div>
      </>
    )
  }