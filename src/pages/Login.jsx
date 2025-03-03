import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Policy from "../components/Policy";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

const Login = () => {
  return (
    <section className="bg-gray-0 min-h-screen grid grid-cols-2 ">
      <section className="flex flex-col gap-6 p-[64px]">
        <div className="flex flex-col gap-8">
          <figure>
            <img src="/images/logo.svg" alt="" />
          </figure>
          <div className="">
            <h1 className="text-gray-800 font-medium text-[40px] leading-[52px]">
              Welcome Back
            </h1>
            <span className="text-5 leading-[26px] mt-[26px] font-normal text-5">
              Log in with your email and password
            </span>
          </div>
        </div>
        <form action="">
          <div className="flex flex-col gap-3">
            <div>
              <Input
                label="Email"
                placeholder="Ex : maulana.pratama@gmailcom"
                type="text"
              />
              <Input
                label="Password"
                placeholder="Enter Password"
                type="password"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <button className="w-5 h-5 rounded-full bg-gray-50 border border-gray-100"></button>
                <span className="text-[18px]">Remember me</span>
              </div>
              <ButtonLink>FORGOT PASSWORD?</ButtonLink>
            </div>
            <div>
              <Button>LOGIN</Button>
              <div className="mt-4 flex gap-2 justify-center items-center">
                <span className="text-gray-600 text-[18px]">
                  Didn’t have an account?
                </span>
                <Link to="/signup">
                  <ButtonLink>CREATE ACCOUNT</ButtonLink>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <span className="text-gray-600 font-medium place-self-center">
              Or continue with
            </span>
            <div className="flex flex-col gap-2 w-full mt-4">
              <button className="border border-gray-200 py-2 px-6 font-medium">
                GOOGLE
              </button>
              <button className="border border-gray-200 py-2 px-6 font-medium">
                AAPLE
              </button>
            </div>
          </div>
        </form>
        <Policy />
      </section>
      <div></div>
    </section>
  );
};

export default Login;
