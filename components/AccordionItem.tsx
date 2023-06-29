import React, { MouseEventHandler } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {Collapse} from 'react-collapse';


type AccordionProps = {
  open: boolean;
  toggle?: MouseEventHandler<HTMLDivElement>;
  order?: string;
  title: string;
  desc: string;
};

const AccordionItem = ({toggle,order,title,desc, open}: AccordionProps) => {
  return (
    <div className='pt-3'>
      <div className='bg-white flex justify-between font-poppins laptop:px-14 laptop:py-6 items-center mobile:p-4' onClick={toggle}>
        <div className='flex gap-8'>
          <h1 className='laptop:text-2xl font-semibold text-blue-card mobile:text-lg'>{order}</h1>
          <h1 className='laptop:text-2xl font-semibold mobile:text-lg'>{title}</h1>
        </div>
          <div className='text-2xl'>
              {open ? <IoIosArrowUp/> : <IoIosArrowDown/> }
          </div>
      </div>
      <Collapse isOpened={open}>
        <p className='bg-white laptop:w-9/12 mx-auto laptop:px-4 font-poppins laptop:text-lg font-medium pb-5 mobile:text-xs mobile:p-0'>{desc}</p>
      </Collapse>
    </div>
  )
}

export default AccordionItem
