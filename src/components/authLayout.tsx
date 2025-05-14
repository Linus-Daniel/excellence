import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
    children:ReactNode;
    title:string;
}

const AuthLayout = ({ children, title }:Props) => {
  return (
    <>
      <Head>
        <title>{title} | School Management System</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-primary-default p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-10">
          <div className="text-center mb-8">
            <img 
              src="/logo.png" 
              alt="School Logo" 
              className="h-16 mx-auto"
            />
            <h1 className="text-[#712779] text-2xl font-semibold mt-4">
              School Management System
            </h1>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;