import Image from "next/image"
export default function Footer() {
  return (
    <section className="px-[9.313%] py-[3.375rem]">
      <div className="grid grid-cols-4">
        <div className="mb-[5.313rem]">
          <h2 className="text-[1.25rem] font-[700] mb-[1rem]">
            PRODUCT CATEGORY
          </h2>
          <ul className="ml-0">
            <li className="list-none mb-[0.688rem]">Health</li>
            <li className="list-none mb-[0.688rem]">Auto</li>
            <li className="list-none mb-[0.688rem]">Travel</li>
            <li className="list-none mb-[0.688rem]">Gadget</li>
            <li className="list-none mb-[0.688rem]">Office Content</li>
            <li className="list-none mb-[0.688rem]">Home</li>
          </ul>
        </div>
        <div className="mb-[5.313rem]">
          <h2 className="text-[1.25rem] font-[700] mb-[1rem]">COMPANY</h2>
          <ul className="ml-0">
            <li className="list-none mb-[0.688rem]">About Us</li>
            <li className="list-none mb-[0.688rem]">Privacy Policy</li>
            <li className="list-none mb-[0.688rem]">Blog</li>
            <li className="list-none mb-[0.688rem]">Careers</li>
            <li className="list-none mb-[0.688rem]">Terms and Conditions</li>
            <li className="list-none mb-[0.688rem]">Mycovergenius</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className="text-[1.25rem] font-[700] mb-[1rem]">ABOUT US</h2>
          <p>
            MyCover.ai is Africa&apos;s leading insurance infrastructure
            platform. We leverage artificial intelligence and machine learning
            to scale insurance penetration across the continent. Through our
            retail channel mycovergenius, we provide product-focused and
            technology-driven policies targeted at deepening insurance adoption
            in Africa; creating unique and relevant products in partnership with
            leading insurance companies. To us, insurance is not just about
            policies, it is Africa&apos;s surest safety net!
          </p>
        </div>
        <div className="mb-[5.313rem]">
          <h2 className="text-[1.25rem] font-[700] mb-[1rem]">
            CUSTOMER SUPPORT
          </h2>
          <ul className="ml-0">
            <li className="list-none mb-[0.25rem]">Phone: +234 1234567889</li>
            <li className="list-none mb-[0.25rem]">info@mycover.ai</li>
            <li className="list-none mb-[0.25rem]">
              Hours: Mon. - Fri. 8AM - 5PM
            </li>
          </ul>
        </div>
        <div className="mb-[5.313rem]">
          <h2 className="text-[1.25rem] font-[700] mb-[1rem]">CONTACT</h2>
          <ul className="ml-0">
            <li className="list-none mb-[0.688rem]">
              No 8, Province Estate,Maruwa bust stop, Lekki Phase 1
            </li>
          </ul>
          <div className="flex items-center">
            <a href="#" className="mr-[1.5rem]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9963 0.738281H1.97919C1.29378 0.738693 0.738144 1.2946 0.738281 1.98029V21.9974C0.738693 22.6828 1.2946 23.2384 1.98029 23.2383H12.7573V14.5371H9.83496V11.1313H12.7573V8.62495C12.7573 5.71838 14.5318 4.13635 17.1245 4.13635C18.3664 4.13635 19.4336 4.22891 19.7446 4.27025V7.30811H17.9567C16.5461 7.30811 16.2729 7.97841 16.2729 8.96223V11.1313H19.6458L19.2063 14.5371H16.2729V23.2383H21.9963C22.6821 23.2384 23.2381 22.6826 23.2383 21.9968C23.2383 21.9967 23.2383 21.9966 23.2383 21.9963V1.97919C23.238 1.29378 22.682 0.738144 21.9963 0.738281Z"
                  fill="#1D2939"
                />
              </svg>
            </a>
            <a href="#" className="mr-[1.5rem]">
            <Image
              className="rounded min-w-[24px]"
              src="/img/icons/instagram.svg"
              alt="img"
              width={24}
              height={24}
            />
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.81926 19.0105C16.3103 19.0105 20.9536 11.976 20.9536 5.87612C20.9536 5.67633 20.9495 5.47737 20.9406 5.2795C21.8418 4.62784 22.6252 3.81464 23.2433 2.88902C22.4162 3.25682 21.5259 3.50408 20.5923 3.61595C21.5453 3.04423 22.2771 2.14021 22.6221 1.06255C21.7302 1.59134 20.7424 1.97551 19.6909 2.18301C18.8485 1.28573 17.6491 0.724609 16.3211 0.724609C13.772 0.724609 11.7046 2.79188 11.7046 5.34018C11.7046 5.70261 11.7452 6.05486 11.8243 6.3928C7.98768 6.19975 4.58544 4.36296 2.30889 1.56973C1.91261 2.2518 1.68392 3.04437 1.68392 3.89004C1.68392 5.4914 2.49891 6.90549 3.73811 7.73245C2.98078 7.7092 2.2694 7.50129 1.64746 7.15523C1.64677 7.17463 1.64677 7.19348 1.64677 7.21412C1.64677 9.44981 3.23795 11.3165 5.35048 11.7394C4.96246 11.845 4.55421 11.9018 4.13316 11.9018C3.83622 11.9018 3.54672 11.8726 3.26547 11.8186C3.85315 13.6527 5.55743 14.9874 7.57791 15.0248C5.99788 16.2632 4.00753 17.0009 1.84436 17.0009C1.47229 17.0009 1.1045 16.9796 0.743164 16.9369C2.78621 18.2464 5.2122 19.0106 7.8194 19.0106"
                  fill="#1D2939"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div>Mycover.ai © 2021 / ALL RIGHTS RESERVED</div>
    </section>
  );
}
