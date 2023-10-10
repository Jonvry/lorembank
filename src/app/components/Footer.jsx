"use client"
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear.toString());
  }, []);

  return (
    <footer className="bg-gray-950 py-10 px-6  sm:px-16">
        <div className="max-w-screen-xl grid grid-cols-1 m-auto gap-8 mb-8 sm:w-[80vw] sm:grid-cols-3 sm:place-items-center">
          <h4 className="font-bold text-gray-300 mb-auto">LoremBank</h4>
            <div className="grid gap-2">
                <h6 className="text-gray-300">Quick Link</h6>
                  <Link className="text-gray-500" href="">Services</Link>
                  <Link className="text-gray-500" href="">Features</Link>
                  <Link className="text-gray-500" href="">Pricing</Link>
                  <Link className="text-gray-500" href="">About Us</Link>
            </div>
              <div className="mb-auto">
                <h6 className="text-gray-300 mb-2">Social Media</h6>
                    <Link className="text-gray-500 flex items-center gap-2 mb-2" href="https://www.facebook.com/" target="_blank">
                    <Image
                      className=""
                      src="/Facebook.svg"
                      alt="Facebook Logo"
                      width={28}
                      height={28}
                      priority
                    />
                      Facebook
                    </Link>
                    <Link className="text-gray-500 flex items-center gap-2" href="https://www.instagram.com/" target="_blank">
                    <Image
                      className=""
                      src="/Instagram.svg"
                      alt="Instagram Logo"
                      width={28}
                      height={28}
                      priority
                    />
                      Instagram
                    </Link>
              </div>
        </div>
          <div className="my-4 w-full h-px bg-gray-500"></div>
            <p className="text-gray-500 text-center text-xs">Copyright &#64; {year}</p>
    </footer>
  );
};

export default Footer;
