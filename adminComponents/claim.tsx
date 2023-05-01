import Image from "next/image";

export default function Claim({ setNav }:any) {
  let claims = [
    {
      customerName: "Alex Igwe",
      insuranceNo: "IN - 4567899",
      emailAddress: "alex@gmail.com",
      phoneNumber: "090876542345",
      product: "Comprehensive Auto",
      policy_id: "RTYUI-12",
      AllTimeClaimed: "2",
      dateSubmitted: "12th Jan 2020",
    },
  ];
  return (
    <>
      {/*Headings 1*/}
      <section className="flex justify-between items-start py-[2.313rem] px-[1.938rem]">
        <div>
          <button onClick={()=>setNav('makeClaim')} className="rounded-lg bg-green text-white px-[2.75rem] py-[0.563rem]">
            Make Claim
          </button>
        </div>

        <div className="flex justify-between items-cennter">
          <div className="flex flex-col mr-[1.75rem] text-white bg-green py-2 px-4 rounded-lg w-fit">
            <h2>Total claims</h2>
            <p className="mb-0">2,420</p>
          </div>

          <div className="flex flex-col mr-[1.75rem] text-white bg-[#7A5AF8] py-2 px-4 rounded-lg w-fit">
            <h2>Settled</h2>
            <p className="mb-0">500</p>
          </div>

          <div className="flex flex-col mr-[1.75rem] text-white bg-[#F5B203] py-2 px-4 rounded-lg w-fit">
            <h2>In progress</h2>
            <p className="mb-0">300</p>
          </div>

          <div className="flex flex-col text-white bg-[#F97066] py-2 px-4 rounded-lg w-fit">
            <h2>Rejected</h2>
            <p className="mb-0">1050</p>
          </div>
        </div>
      </section>

      {/*Headings 2*/}
      <section className="flex justify-between px-[1.938rem] items-center">
        <div>
          <button className="bg-black text-white px-[1.125rem] py-[0.625rem] rounded-l-lg">
            All
          </button>
          <button className="px-[1.125rem] py-[0.625rem] border-[1px]">
            Paid
          </button>
          <button className="px-[1.125rem] py-[0.625rem] border-[1px]">
            Pending
          </button>
          <button className="px-[1.125rem] py-[0.625rem] border-[1px] rounded-r-lg">
            Rejected
          </button>
        </div>

        <div className="flex items-center">
          <div className="border-[1px] rounded-md flex items-center py-[0.625rem] px-[0.313rem] mr-[0.75rem]">
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
              className="outline-none"
              placeholder="Search e.g insurance no. , pro.."
            />
          </div>

          <button className="flex items-center py-[0.625rem] px-[0.675rem] rounded-md mtr-[1.25rem]">
            <svg
              className="mr-[0.656rem]"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H14M1.5 1H16.5M6.5 11H11.5"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Filters
          </button>

          <button className="flex items-center py-[0.625rem] px-[0.675rem] rounded-md mtr-[1.25rem]">
            <svg
              className="mr-[0.656rem]"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.82422 4.56265L7.42421 2.96265L9.02421 4.56265"
                stroke="#101828"
                stroke-width="0.9375"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.42383 9.36225V3.00598"
                stroke="#101828"
                stroke-width="0.9375"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 8C2.5 10.7625 4.375 13 7.5 13C10.625 13 12.5 10.7625 12.5 8"
                stroke="#101828"
                stroke-width="0.9375"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Export
          </button>
        </div>
      </section>

      {/*All Claims: Mapped out data*/}
      <section className="px-[1.938rem] py-[1.813rem]">
        <div className="mb-[0.813rem]">
          <h2 className="text-[1.125rem]">All Claims</h2>
          <p className="ml-0">245 claims</p>
        </div>

        <table className="table-auto w-full text-[#667085]">
          <thead>
            <tr className="text-left py-[0.813rem] px-[1.5rem] border-b-[1px]">
              <th>
                <input
                  type="checkbox"
                  className="min-w-[20px] min-h-[20px] rounded-md mr-[0.75rem] checked:bg-green"
                />
              </th>
              <th className="py-[0.813rem]">Costumer name</th>
              <th className="py-[0.813rem]">Insurance No.</th>
              <th className="py-[0.813rem]">Email address</th>
              <th className="py-[0.813rem]">Phone no</th>
              <th className="py-[0.813rem]">Product</th>
              <th className="py-[0.813rem]">Policy I.D</th>
              <th className="py-[0.813rem]">All time claimed</th>
              <th className="py-[0.813rem]">Date submitted</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((data, index) => (
              <tr className="border-b-[1px]" key={index}>
                <td className="py-[1.625rem]">
                  <input
                    type="checkbox"
                    className="min-w-[20px] min-h-[20px] rounded-md mr-[0.75rem] cursor-pointer checked:bg-green"
                  />
                </td>
                <td className="flex items-center py-[1.625rem]">
                  <Image
                    className="object-cover min-w-[2.5rem] rounded-full mr-[1.375rem]"
                    src="/img/admin/avatar.png"
                    alt="img"
                    width={40}
                    height={40}
                  />
                  {data.customerName}
                </td>
                <td className="py-[1.625rem]">{data.insuranceNo}</td>
                <td className="py-[1.625rem]">{data.emailAddress}</td>
                <td className="py-[1.625rem]">{data.phoneNumber}</td>
                <td className="py-[1.625rem]">{data.product} </td>
                <td className="py-[1.625rem]">{data.policy_id}</td>
                <td className="py-[1.625rem]">{data.AllTimeClaimed}</td>
                <td className="py-[1.625rem]">{data.dateSubmitted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
