'use client'

import Head from "../../node_modules/next/head";
import Image from "next/image";
import thisIsFine from "../../public/thisisfine.png";
import { FaCode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiArticleMedium } from "react-icons/pi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>


      <main className="dark:bg-black px-10 md:px-20 lg:px-40 bg-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <ul className="flex-0 object-cover h-12 w-24 ">
              <Image
                src={thisIsFine}
                alt="This is fine"/>
            </ul>
            <ul className="flex items-center">
              <li>
                {/* Conditionally render MdLightMode or MdDarkMode based on darkMode */}
                {darkMode ? (
                  <MdLightMode onClick={() => setDarkMode(!darkMode)} className="dark:text-white text-black cursor-pointer text-3xl" />
                ) : (
                  <MdDarkMode onClick={() => setDarkMode(!darkMode)} className="dark:text-white text-black cursor-pointer text-3xl" />
                )}

              </li>
              <li>
                <a
                  href="https://rxresu.me/vsebastianvc/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-700 to-teal-700 px-4 py-2 rounded-md ml-8">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex justify-between">
            <div className="mr-5">
              <FaCode className="dark:text-white text-black text-5xl" />
            </div>
            <div className="text-center p-2">
              <h2 className="text-4xl py-2 dark:text-teal-300 text-black font-medium md:text-5xl">Sebastian Valencia</h2>
              <h3 className="text-l py-2 md:text-xl dark:text-white text-black">Engineering Manager / Android Lead</h3>
              <div className="text-5xl flex justify-center gap-16 py-3 ">
                <a
                  href="https://www.linkedin.com/in/sebastianvalencia93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white text-black">
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/vsebastianvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white text-black">
                  <FaGithub />
                </a>
                <a
                  href="https://medium.com/@vsebastianvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white text-black">
                  <PiArticleMedium />
                </a>
              </div>
            </div>
            <div className="ml-5 mt-32">
              <FaCode className="dark:text-white text-black text-5xl" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
