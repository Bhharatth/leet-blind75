import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "@/components/navBar"
import { Problem } from '@/utils/types/problemTypes';
import { api } from "@/utils/api";
import ProblemTable from "@/components/problemTable";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
   const { data: sessionData } = useSession();
  console.log(sessionData?.user?.name)


  return (
    <div className="bg-slate-600">
    <NavBar  />
    <ProblemTable/>
   </div>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.post.getSecretMessage.useQuery(
//     undefined, 
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
