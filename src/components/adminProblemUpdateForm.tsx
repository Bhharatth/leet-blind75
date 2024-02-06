import React from 'react';
import * as Form from '@radix-ui/react-form';

const AdminProblemUpdateForm = () => {
  return (
    <div>
    <Form.Root className="w-[260px]">
<div className='text-white text-xl font-bold font-mono mt-16'>UPDATE PROBLEM</div>
<Form.Field className="grid mb-[10px] mt-7" name="title">
<div className="flex items-baseline justify-between">
<Form.Label className="text-[15px] font-medium leading-[35px] text-white font-sans">Title</Form.Label>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
  Please enter a Title
</Form.Message>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
  Please provide a valid Title
</Form.Message>
</div>
<Form.Control asChild>
<input
  className="box-border hover: outline-green-300 w-full  shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white  outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[black] selection:color-sky-400 selection:bg-black bg-black"
  type="text"
  required
  defaultValue=""
//   value={userName}
//   onChange={(e)=> setUserName(e.target.value)}
  
/>
</Form.Control>
</Form.Field>
<Form.Field className="grid mb-[10px] mt-7" name="category">
<div className="flex items-baseline justify-between">
<Form.Label className="text-[15px] font-medium leading-[35px] text-white font-sans">Category</Form.Label>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
  Please enter your Category
</Form.Message>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
  Please provide a valid Category
</Form.Message>
</div>
<Form.Control asChild>
<input
  className="box-border hover: outline-green-300 w-full  shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white  outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[black] selection:color-sky-400 selection:bg-black bg-black"
  type="text"
  required
  defaultValue=""
//   value={userName}
//   onChange={(e)=> setUserName(e.target.value)}
  
/>
</Form.Control>
</Form.Field>
<Form.Field className="grid mb-[10px] mt-7" name="difficulty">
<div className="flex items-baseline justify-between">
<Form.Label className="text-[15px] font-medium leading-[35px] text-white font-sans">difficulty</Form.Label>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
  Please enter your difficulty
</Form.Message>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
  Please provide a valid difficulty
</Form.Message>
</div>
<Form.Control asChild>
<input
  className="box-border hover: outline-green-300 w-full  shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white  outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[black] selection:color-sky-400 selection:bg-black bg-black"
  type="text"
  required
  defaultValue=""
//   value={userName}
//   onChange={(e)=> setUserName(e.target.value)}
  
/>
</Form.Control>
</Form.Field>
<Form.Field className="grid mb-[10px] mt-7" name="email">
<div className="flex items-baseline justify-between">
<Form.Label className="text-[15px] font-medium leading-[35px] text-white font-sans">Order</Form.Label>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
  Please enter your Order
</Form.Message>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
  Please provide a valid Order
</Form.Message>
</div>
<Form.Control asChild>
<input
  className="box-border hover: outline-green-300 w-full  shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white  outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[black] selection:color-sky-400 selection:bg-black bg-black"
  type="text"
  required
  defaultValue=""
//   value={userName}
//   onChange={(e)=> setUserName(e.target.value)}
  
/>
</Form.Control>
</Form.Field>
{/* 
<Form.Field className="grid mb-[10px]" name="email">
<div className="flex items-baseline justify-between">
<Form.Label className="text-[15px] font-medium leading-[35px] text-white font-sans">Email</Form.Label>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
  Please enter your email
</Form.Message>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
  Please provide a valid email
</Form.Message>
</div>
<Form.Control asChild>
<input
  className="box-outline-green-300 w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white  outline-none  bg-black"
  type="email"
  required
  defaultValue=""
//   value={}
//   onChange={}
/>
</Form.Control>
</Form.Field>

<Form.Field className="grid mb-[10px]" name="email">
<div className="flex items-baseline justify-between">
<Form.Label className="text-[15px] font-medium leading-[35px] text-white font-sans">Password</Form.Label>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
  Please enter a Password
</Form.Message>
<Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
  Please provide a valid password
</Form.Message>
</div>
<Form.Control asChild>
<input
  className="box-border hover: outline-green-300 w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white  outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[black] selection:color-sky-400 selection:bg-black bg-black"
  type="password"
  required
  defaultValue=""
//   value={}
//   onChange={}
/>
</Form.Control>
</Form.Field> */}



<Form.Submit asChild>

<button className=" font-bold font-mono text-base box-border w-full text-violet11  inline-flex h-[35px] items-center justify-center rounded-full bg-sky-700 px-[15px] font-medium leading-none   mt-[10px] border-gray-200 text-white  disabled:opacity-50 "
//   onClick={} 
>
UPDATE
</button>

</Form.Submit>
</Form.Root>
</div>
  )
}

export default AdminProblemUpdateForm