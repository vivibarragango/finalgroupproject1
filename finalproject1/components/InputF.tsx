'use client'
import {Input} from "@nextui-org/react";

export default function InputF() {
  return (
   
    <div className="flex w-full flex-wrap md:flex-nowrap flex-col gap-4" >
      <p className="mb-2 font-head">Subscribe to our Newsletter</p>  
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
  );
}
