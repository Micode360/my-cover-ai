import React, { useState } from "react"


export default function ClaimModal({ setNav }:any) {
    const [menu, setMenu] = useState<any>("mClose");

    let claims = [
        {
          customerName: "Alexandra Igwe",
          policy_No: "RTYUI-12",
          totalClaimed: "2",
          status:"Active",
          action:"Select"
        },
      ];
    return(
    <section className="mTranparent fixed top-0 bottom-0 right-0 left-0 z-20 flex justify-end">
        <div className="bg-white w-[50%] relative h-[100vh] py-[1.813rem] px-[2.063rem] mb-[3.438rem]">
            <span
                className="bg-white text-[1.2rem] absolute top-4 left-[-80px] cursor-pointer py-2 px-4 font-[700] rounded-full"
                onClick={() => setNav("makeClaim")}
            >
            X
            </span>

            <div className="mb-[3.438rem]">
            <h2 className="text-[2.125rem] font-[600]">Claim / <span className="text-green">Credit Life</span></h2>
            <p className="mb-0 text-[1.125rem] text-[#344054]">
                Select the Customer you are making claim on 
            </p>
            </div>

            <div className="flex items-center mb-[1.563rem]">
                    <div className="border-[1px] w-[80%] rounded-md flex items-center py-[0.625rem] px-[0.313rem] mr-[0.75rem]">
                <svg
                    className="w-6 h-6 mr-[0.656rem]"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>

                <input
                    className="outline-none w-full"
                    placeholder="Search product "
                />
                </div>

                <button className="py-[0.625rem] font-[600] px-[0.675rem] w-[20%] rounded-md border-[1px] ">
                    Filters by:All
                </button>
            </div>

            <table className="table-auto w-full text-[#667085]">
          <thead>
            <tr className="text-left py-[0.813rem] px-[1.5rem] border-b-[1px]">
              <th className="py-[0.813rem]">Costumer name</th>
              <th className="py-[0.813rem]">Policy No.</th>
              <th className="py-[0.813rem]">Total Claimed</th>
              <th className="py-[0.813rem]">Status</th>
              <th className="py-[0.813rem]">Action</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((data, index) => (
              <tr className="border-b-[1px]" key={index}>
                <td className="py-[1.625rem]">{data.customerName}</td>
                <td className="py-[1.625rem]">{data.policy_No}</td>
                <td className="py-[1.625rem]">{data.totalClaimed}</td>
                <td className="py-[1.625rem] flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" fill="#12B76A"/>
                </svg>

                    {data.status} 
                </td>
                <td className="py-[1.625rem]">{data.action}</td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
    </section>
    );
} 