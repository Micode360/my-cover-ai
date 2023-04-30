import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function FAQs() {
    let faq = [
        {
            question:'Are you an Insurance Company?',
            answer: 'MyCover.ai is a product of the first insurtech in Nigeria. We enable any business to access multiple insurance companies and their products from one place.'
        },
        {
            question:'How do I handle claims?',
            answer: 'MyCover.ai is a product of the first insurtech in Nigeria. We enable any business to access multiple insurance companies and their products from one place.'
        },
        {
            question:'Do I need a license?',
            answer: 'MyCover.ai is a product of the first insurtech in Nigeria. We enable any business to access multiple insurance companies and their products from one place.'
        }
    ]
  return (
    <section className="bg-gray-200 grid grid-cols-2 px-[9.313%] py-[6.438rem]">
      <div>
        <h2 className="text-[2.25rem] font-[700] mb-[1.625rem]">
          Do you still have <span className="hightlight relative">questions?</span>
        </h2>
        <p className="text-[1.25rem] font-[500] mb-[2.625rem]">
          Have a chat with anyone from our friendly team here.
        </p>
        <div className="flex mb-[1.625rem]">
          <Link
            className="w-[7.813rem] text-center py-[0.75rem] bg-green rounded text-white mr-[2.063rem]"
            href="/"
          >
            Contact Us
          </Link>
        </div>
      </div>

      
      <Accordion defaultIndex={[0]} allowMultiple>
          {faq.map((data:any, index:any)=>(
            <AccordionItem
            borderTop='1px'
            borderBottom='1px'  
            borderColor='gray.200'
            key={index}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="1.125rem"
                  py="6"

                >
                  {data.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel py={4} fontSize="1rem" bgColor="#F2F4F7">
                {data.answer}
            </AccordionPanel>
          </AccordionItem>
          ))}
        </Accordion>
    </section>
  );
}
