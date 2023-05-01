import Image from "next/image";

export default function MakeClaim({ setNav }: any) {
  let claims = [
    {
      productName: "Credit life",
      productCategory: "Credit life",
      provider: "Arm life Plc",
      distributor: "Mycovergenius",
      product_id: "PR23456",
      no_customer: "10",
      date_added: "12th Jan 2020",
      policy_status: "Active",
      actions: "claimed",
    },
  ];

  return (
    <>
      <section className="py-[2.313rem] px-[1.938rem]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[2.125rem] font-[600]">Make Claim</h2>
            <p className="mb-0 text-[1.125rem] text-[#344054]">
              Select a product to make claim on
            </p>
          </div>

          <div>
            <Image
              className="min-w-[9.135rem] mr-[1.375rem]"
              src="/img/admin/claim.svg"
              alt="img"
              width={146.16}
              height={126.69}
            />
          </div>
        </div>
      </section>

      <section className="flex px-[1.938rem] justify-between items-center">
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

        <button className="flex items-center py-[0.625rem] px-[0.675rem] rounded-md mtr-[1.25rem]">
          Filters by:All Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </section>

      <section className="px-[1.938rem] py-[1.813rem]">
        <table className="table-auto w-full text-[#667085]">
          <thead>
            <tr className="text-left py-[0.813rem] px-[1.5rem] border-b-[1px]">
              <th>
                <input
                  type="checkbox"
                  className="min-w-[20px] min-h-[20px] rounded-md mr-[0.75rem] checked:bg-green"
                />
              </th>
              <th className="py-[0.813rem]">Product Name</th>
              <th className="py-[0.813rem]">Product Category</th>
              <th className="py-[0.813rem]">Provider</th>
              <th className="py-[0.813rem]">Distributor</th>
              <th className="py-[0.813rem]">Product I.D</th>
              <th className="py-[0.813rem]">No. customer</th>
              <th className="py-[0.813rem]">Date added</th>
              <th className="py-[0.813rem]">Policy status</th>
              <th className="py-[0.813rem]">Actions</th>
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
                    className="min-w-[2.25rem] mr-[0.75rem]"
                    src="/img/admin/homework.svg"
                    alt="img"
                    width={36}
                    height={36}
                  />
                  {data.productName}
                </td>
                <td className="py-[1.625rem]">{data.productCategory}</td>
                <td className="py-[1.625rem]">{data.provider}</td>
                <td className="py-[1.625rem]">{data.distributor}</td>
                <td className="py-[1.625rem]">{data.product_id} </td>
                <td className="py-[1.625rem]">{data.no_customer}</td>
                <td className="py-[1.625rem]">{data.date_added}</td>
                <td className="py-[1.625rem] text-green">
                  {data.policy_status}
                </td>
                <td className="py-[1.625rem]">
                  <button
                    onClick={() => setNav("claimModal")}
                    className="px-[2.613rem] py-[0.478rem] bg-[#D8EEE9] rounded-md"
                  >
                    Claim
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
