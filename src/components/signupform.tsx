"use client"
import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { useSession, getSession, signIn } from 'next-auth/react';
interface SignupType{
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUserName: (userName: string) => void;
  onClick: () => void;
}

const SignUpPage = (props: SignupType) => {
  const user =  getSession();
  console.log(user);


  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = () => {
    // Call the provided functions with the values from the state
    props.setUserName(userName);
    props.setEmail(email);
    props.setPassword(password);
    console.log({userName, email,password})
    props.onClick();
  };

 


  return (
    <div>
      <Form.Root className="w-[260px]">
        <div className='text-white text-xl font-bold font-mono mt-16'>Sign Up</div>
        <h4 className=' font-sans text-gray-400 text-sm flex'>Already have an account? <div className='text-sky-400'>Log In</div></h4>
        <Form.Field className="grid mb-[10px] mt-7" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white font-sans">UserName</Form.Label>
            <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
              Please enter your UserName
            </Form.Message>
            <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
              Please provide a valid Username
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border hover: outline-green-300 w-full  shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white  outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[black] selection:color-sky-400 selection:bg-black bg-black"
              type="text"
              required
              defaultValue=""
              value={userName}
              onChange={(e)=> setUserName(e.target.value)}
              
            />
          </Form.Control>
        </Form.Field>

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
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </Form.Control>
        </Form.Field>



        <Form.Submit asChild>

          <button className=" font-bold font-mono text-base box-border w-full text-violet11  inline-flex h-[35px] items-center justify-center rounded-full bg-sky-700 px-[15px] font-medium leading-none   mt-[10px] border-gray-200 text-white  disabled:opacity-50 "
          onClick={()=>handleSignup()} >
            Sign Up
          </button>

        </Form.Submit>
      </Form.Root>
    </div>
  )


}

export default SignUpPage;