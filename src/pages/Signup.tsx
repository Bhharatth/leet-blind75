import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import * as Form from '@radix-ui/react-form';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { signIn, SignInOptions } from 'next-auth/react';
import { api } from '@/utils/api';
import { SignUpResponse } from '@/common/authSchema';


const Signup = () => {
    
    const router = useRouter();
    const [userName, setUserName] =useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const createUsers = api.account.signup.useMutation<SignUpResponse>({
        onSuccess: (res)=> {
          if(res){
            console.log('User created successfully');
    
            try {
              signIn("credentials", {
                name:userName,
                email,
                password,
                redirect: false
              });
            alert("user created successfully")
    
         
            } catch (error) {
              console.log(error)
              
            }
           
          }
      
        },
        onError:(error)=> {
          if (error.message === 'FORBIDDEN') {
            alert(error.message)
          } else {
          }
        }
      });

      const handleCredentialSubmit = async(e:any) => {
        e.preventDefault();
        console.log('Submitting user credentials...');
        console.log('Username:', userName);
        console.log('Email:', email);
        console.log('Password:', password);
      
        try {
            const res = await createUsers.mutate({
                email,
                userName,
                password,
              });
              console.log('User created successfully');
              
              console.log('User signed in:', res);
            } catch (error) {
              console.error('Error creating user:', error);
            }
        
      };
      
    const handleGoogleSubmit =  ()=> {
        signIn("google");
      }
    const handleGitHubSubmit =  ()=> {
        signIn("github");
      }
    return (
        <div>
            <div className='flex flex-row h-screen'>
            <div className='bg-gray-950 md:flex-1/3 w-0 md:w-1/3 lg:flex-1/3 lg:w-1/3  relative md:overflow-hidden lg:overflow-hidden'>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>
    <Image src="/logo-7.jpg" className="rounded-md" width={600} height={300} alt='logo' />
    
</div>


                <div className='bg-zinc-900 flex-1 md:flex-2/3 lg:flex-2/3  w-sceen md:w-2/3 lg:w-2/3  flex flex-col justify-start items-center'>
                    <div>
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
          onClick={handleCredentialSubmit} >
            Sign Up
          </button>

        </Form.Submit>
      </Form.Root>
    </div>
                    </div>


                    <div className="flex items-center mt-5">
                        <div className="w-9 h-0.5 bg-gray-500"></div>

                        <hr className="flex flex-col border-gray-500" />
                        <span className=" flex justify-center text-gray-500 text-xs uppercase"> Or Sign UP with</span>
                        <div className="w-9 h-0.5 bg-gray-500"></div>

                    </div>


                    <div className='flex flex-row gap-5 justify-center mt-4'>
                        <FaGithub className='text-white' style={{ fontSize: '4rem' }} onClick={handleGitHubSubmit}/>

                        <FcGoogle className='text-white' style={{ fontSize: '4rem' }} onClick={handleGoogleSubmit} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup