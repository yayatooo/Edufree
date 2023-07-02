import AccordionItem from "./AccordionItem"
import { SetStateAction, useState } from "react"
import {accordionFill} from '@/libs/AccordionData'

  

const FaqSection = () => {

  const [open, setOpen] = useState(-1)

  const toggle = (index: number) => {
    if (open === index) {
      setOpen(1);
    } else {
      setOpen(index);
    }
  };

  // const toggle = (isOpen: boolean) => {
  //   setOpen(isOpen);
  // };

  return (
    <section className="w-full flex justify-center py-10 mobile:p-10 mobile:flex-col laptop:flex-row">
    
    <div className="font-poppins py-6 laptop:w-4/12 text-start mobile:w-full mobile:text-center laptop:text-start">
        <h1 className="font-semibold laptop:text-2xl laptop:w-8/12 mobile:w-full">Frequently Asked Questions</h1>
        <p className="laptop:w-10/12 py-4 mobile:w-full">Masih bingung atau ragu? Hubungi kami di nomor  +6288 999 222 333</p>
    </div>

      <div>
        {accordionFill.map((data, index) => {
          return (
            <AccordionItem
              key={index}
              open={open === index}
              order={data.order}
              title={data.title}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
          )
        })}
      </div>
      
    </section>
  )
}

export default FaqSection
