import React from "react";

const Header = () => {
  return (
    <div>
      <section className="bg-gray-800 p-3 grid">
        <p className=" place-self-center text-gray-50 text-[12px]">
          Special offers : 15% off for first purchase for new users
        </p>
        <figure>
          <img src="" alt="" />
        </figure>
      </section>
      <section className="py-5 px-6 bg-gray-0">
        <ul className="flex gap-2 text-[18px]">
          <li>
            <span>Men</span>
            <img src="" alt="" />
          </li>
          <li>
            <span>Women</span>
            <img src="" alt="" />
          </li>
          <li>
            <span>Kids</span>
            <img src="" alt="" />
          </li>
          <li>
            <span>New In</span>
            <img src="" alt="" />
          </li>
        </ul>
        <span></span>
      </section>
    </div>
  );
};

export default Header;
