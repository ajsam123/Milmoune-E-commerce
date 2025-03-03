import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Policy from "../components/Policy";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

const SignUp = () => {
  return (
    <section className="bg-gray-0 min-h-screen grid grid-cols-2 ">
      <section className="flex flex-col gap-6 p-[64px]">
        <div className="flex flex-col gap-8">
          <figure>
            <img src="/images/logo.svg" alt="" />
          </figure>
          <div className="">
            <h1 className="text-gray-800 font-medium text-[40px] leading-[52px]">
              Get started now...
            </h1>
            <span className="text-5 leading-[26px] mt-[26px] font-normal text-gray-600">
              Let’s create your account and get shopping
            </span>
          </div>
        </div>
        <section className="flex flex-col gap-16">
          <form className="flex flex-col gap-8">
            <section className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <Input label="First Name" placeholder="Ex: Maulana" />
                <div className="flex justify-end items-end gap-1.5">
                  <Input label="Birth Date" placeholder="Date" />
                  <Input placeholder="Month" type="" />
                  <Input placeholder="Year" />
                </div>
                <Input type="email" label="Email" />
              </div>
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Ex: Pratama"
                />
                <div>
                  <label>Title</label>
                  <select className="bg-gray-100 mt-2 px-3 py-2 w-full text-gray-600">
                    <option value="">Select</option>
                  </select>
                </div>
                <Input type="password" label="Password" />
              </div>
            </section>
            <section className="flex flex-col gap-4 ">
              <Button>CREATE ACCOUNT</Button>
              <div className=" flex gap-2 justify-center items-center">
                <span className="text-gray-600 text-[18px]">
                  Already have an account?
                </span>
                <Link to="/login">
                  <ButtonLink>LOGIN</ButtonLink>
                </Link>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <span className="text-gray-600 font-medium place-self-center">
                Or continue with
              </span>
              <div className="flex gap-2 w-full mt-4">
                <button className="border border-gray-200 py-2 px-6 font-medium w-full">
                  GOOGLE
                </button>
                <button className="border border-gray-200 py-2 px-6 font-medium w-full">
                  AAPLE
                </button>
              </div>
            </section>
          </form>
          <section>
            <Policy />
          </section>
        </section>
      </section>
    </section>
  );
};

export default SignUp;
