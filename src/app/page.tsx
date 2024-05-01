"use client";
import thisIsFine from "../../public/thisisfine.svg";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMediumCircle,
} from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";
import CompanyLogo from "@/components/CompanyLogo";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark h-screen" : "h-screen"}>
      <main className="dark:bg-black px-2 sm:px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40 bg-white">
        <section className="">
          <nav className="pt-10 mb-6 flex justify-between">
            <Image
              src={thisIsFine}
              alt="This is fine"
              width={100}
              height={100}
            />
            <ul className="flex items-center">
              <li>
                {/* Conditionally render MdLightMode or MdDarkMode based on darkMode */}
                {darkMode ? (
                  <MdLightMode
                    onClick={() => setDarkMode(!darkMode)}
                    className="dark:text-white text-black cursor-pointer text-3xl"
                  />
                ) : (
                  <MdDarkMode
                    onClick={() => setDarkMode(!darkMode)}
                    className="dark:text-white text-black cursor-pointer text-3xl"
                  />
                )}
              </li>
              <li>
                <a
                  href="https://rxresu.me/vsebastianvc/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-700 to-teal-700 px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-5">
            <h2 className="text-4xl py-2 dark:text-teal-300 text-black font-medium md:text-5xl">
              Sebastian Valencia
            </h2>
            <h3 className="text-l py-2 md:text-xl dark:text-white text-black">
              Engineering Manager / Android Lead
            </h3>
            <div className="text-5xl flex justify-center gap-16 py-3 ">
              <a
                href="https://www.linkedin.com/in/sebastianvalencia93/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white text-black"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/vsebastianvc"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white text-black"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://medium.com/@vsebastianvc"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white text-black"
              >
                <AiFillMediumCircle />
              </a>
            </div>
          </div>
          <div className="mx-auto rounded-2xl w-60 h-60 relative overflow-hidden">
            <Image
              src={"/vsebastianvc.png"}
              alt="Picture of Sebastian Valencia"
              layout="responsive"
              objectFit="cover"
              width={50}
              height={50}
            />
          </div>
        </section>

        <section className="mb-5">
          <h3 className="text-center text-xl mt-10 mb-6 dark:text-white text-black font-medium md:text-4xl tracking-widest">
            Clients
          </h3>
          <div className="grid grid-cols-5 gap-4 place-items-center justify-center ">
            <CompanyLogo
              image="wsl"
              alt="World Surf League"
              customClasses="dark:invert"
              target="#wsl-experience"
            />
            <CompanyLogo
              image="polestar"
              alt="Polestar"
              customClasses="dark:invert"
              target="#accuweather-experience"
            />
            <CompanyLogo
              image="accuweather"
              alt="Accuweather"
              target="#accuweather-experience"
            />
            <CompanyLogo image="bell" alt="Bell" target="#bell-experience" />
            <CompanyLogo
              image="sevenEleven"
              alt="Seven Eleven"
              target="#sevenEleven-experience"
            />
            <CompanyLogo
              image="gopuff"
              alt="GoPuff"
              target="#gopuff-experience"
            />
            <CompanyLogo
              image="perksy"
              alt="Perksy"
              customClasses="dark:invert"
              target="#perksy-experience"
            />
            <CompanyLogo
              image="sickKids"
              alt="Sick Kids"
              target="#sickkids-experience"
            />
          </div>
        </section>

        <section className="pl-5">
          <h3 className="text-center text-xl mt-10 mb-10 dark:text-white text-black font-medium md:text-4xl tracking-widest">
            Experience
          </h3>

          {/* <div id="accordion-example">
            <h2 id="accordion-example-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-expanded="true"
                aria-controls="accordion-example-body-1"
              >
                <span>What is Flowbite?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-example-body-1"
              className="hidden"
              aria-labelledby="accordion-example-heading-1"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{" "}
                  <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    get started
                  </a>{" "}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h2 id="accordion-example-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-expanded="false"
                aria-controls="accordion-example-body-2"
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-example-body-2"
              className="hidden"
              aria-labelledby="accordion-example-heading-2"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{" "}
                  <a
                    href="{{< param homepage >}}/figma/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
            <h2 id="accordion-example-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-expanded="false"
                aria-controls="accordion-example-body-3"
              >
                <span>
                  What are the differences between Flowbite and Tailwind UI?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-example-body-3"
              className="hidden"
              aria-labelledby="accordion-example-heading-3"
            >
              <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a
                      href="{{< param homepage >}}/pro/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <ol className="relative mb-5 border-s border-gray-200 dark:border-gray-700 justify-center pb-10">
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Engineer Lead | WSL - Tribalscale{" "}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                  Latest
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June, 2023 - Present
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                IPSUM...
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Engineer Lead | SickKids - Tribalscale
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May, 2023
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                IPSUM...
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3
                id="wsl-experience"
                className="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Engineer Lead | WSL - Tribalscale
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                December, 2022 - April, 2023
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                IPSUM...
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Engineering Manager | Tribalscale
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June, 2022 - November, 2022
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                IPSUM...
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3
                id="accuweather-experience"
                className="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Engineer Lead | Accuweather/Polestar - Tribalscale
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                January, 2022 - May, 2022
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                An Android Automotive (AAOS) application that offers a simple,
                easy-to-use product for users the most up-to-date and accurate
                weather information in their vehicle.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-extrabold">Technologies Used:</span>{" "}
                Kotlin, AppCarLibrary, Jetpack components, Android SDK, Koin,
                GitHub, Android Studio, Mockito.
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                React Native Engineer | GoPuff - Tribalscale
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                October, 2021 - December, 2021
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                GoPuff has built an app available in-market that is effectively
                a mobile view of a web app. The requirements were to “lift and
                shift” this client experience from a web app to a React Native
                implementation.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-extrabold">Technologies Used:</span>{" "}
                Native implementation. Technologies Used: JavaScript, Android,
                IOS, CSS, Shell, GraphQL.
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Engineer Lead | WSL - Tribalscale
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September, 2021 - October, 2021
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                Given that Runn is used by TribalScale to manage allocations for
                projects, including Internal (non-billable) projects, Client
                Billable projects run internally, and also for Staff
                Augmentation run by a client PM. this web application provided
                more relevant insight for TribalScale in regards to allocation
                cliffs and overall team balance.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-extrabold">Technologies Used:</span>{" "}
                JavaScript, Vue, CSS, HTML, Shell, Google Cloud.L.
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Engineer Lead | Bell - Tribalscale
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July, 2021 - August, 2021
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                The Bell Voice app essentially allows the user to record the
                movie they were watching for 10 seconds, then this recording
                would be sent to the backend for identification. Finally, the
                user was shown the name of the movie that he had previously
                recorded for 10 seconds with a success rate of almost 100%.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-extrabold">Technologies Used:</span>{" "}
                Kotlin, Jetpack components, Java, Android SDK, Koin, GitHub,
                Android Studio, Charles Proxy, Postman, Retrofit, Glide.
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Engineer Lead | Bell - Tribalscale
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April, 2021 - June, 2021
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                The Bell Widget app already provided a seamless experience to
                view current news and Bell updates. the main goal here was to
                update their current Target SDK level to 30 and resolve current
                issues regarding data collection with the widget. Through this
                engagement, Bell will be able to continue preloading their
                widget on upcoming Android 11 devices.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-extrabold">Technologies Used:</span> Java,
                Android SDK, GitHub, Android Studio, Charles Proxy, Postman,
                Glide.
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Engineer Lead | Perksy - Tribalscale
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                January, 2021 - April, 2021
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                The Perksy app for Android powers real-time research of
                Millennials and Gen-Zers through a next-generation,
                do-it-yourself customer insights mobile app. The effectiveness
                of Perksy’s application comes from the internal rewards-based
                system, awarding users each time they answer questions, creating
                endless opportunities for collecting consumer data and insight.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-extrabold">Technologies Used:</span> Java,
                Kotlin, Jetpack components, Java, Android SDK, Koin, GitHub,
                Android Studio, Charles Proxy, Postman, Retrofit.
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Android Engineer | 7-Eleven - Resolve Tech Solutions
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August, 2019 - January, 2021
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                The 7-Eleven app for Android lets users earn points and get
                rewards like free drinks and food, pay with contactless
                checkout, Pay for Fuel at selected 7-Eleven stores and invite
                friends to get rewarded, among many other features.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-extrabold">Technologies Used:</span> Java,
                Java, Kotlin, Android SDK, Dagger 2, GitHub, JIRA, AsyncTask,
                Android Studio, Charles Proxy, Postman, Zeplin, Slack, Retrofit,
                Espresso, Junit, MixPanel, Kochava, MacOS.
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Software Engineer Core - Voice | Avantel S.A.S.
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April, 2016 - August, 2018
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                Designed, developed, and supported software applications in
                Agile-Scrum environments, to automate mass provisioning of
                parameter changes of voice, messaging, and data services across
                national mobile-to-mobile telecom platforms.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-extrabold">Technologies Used:</span> Java,
                Android Studio, Dagger 2, GitHub, Android Studio, Java 8, Maven,
                Hibernate, Oracle, RESTful API, Eclipse, Bash, WEKA, R, SQL
                Developer, Windows, RHEL, Linux.
              </p>
            </li>
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Android Developer | WM Wireless & Mobile
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June, 2015 - April, 2016
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                Crafted enterprise mobile applications from inception on
                Android. Steered the UI team, overseeing the design of screens
                across multiple projects. Provided mentorship to junior
                developers and played a pivotal role in documenting a
                substantial portion of the framework delivered to a government
                entity.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-extrabold">Technologies Used:</span> Java,
                Android Studio, REST, SQLite, GreenDao, Git / GitHub, Windows,
                Android SDK, AsyncTask
              </p>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2C8.34315 2 7 3.34315 7 5V6H5C3.34315 6 2 7.34315 2 9V11.382L3.44682 12.1054L3.45172 12.1078L3.47887 12.121C3.50439 12.1332 3.54461 12.1523 3.5988 12.1771C3.70722 12.2269 3.87138 12.2999 4.08547 12.3885C4.51397 12.5658 5.14061 12.8047 5.91908 13.0442C7.48062 13.5247 9.62825 14 12 14C14.3717 14 16.5194 13.5247 18.0809 13.0442C18.8594 12.8047 19.486 12.5658 19.9145 12.3885C20.1286 12.2999 20.2928 12.2269 20.4012 12.1771C20.4554 12.1523 20.4956 12.1332 20.5211 12.121L20.5483 12.1078L20.5528 12.1056L20.5538 12.1051L22 11.382V9C22 7.34315 20.6569 6 19 6H17V5C17 3.34315 15.6569 2 14 2H10ZM15 6V5C15 4.44772 14.5523 4 14 4H10C9.44772 4 9 4.44772 9 5V6H15ZM21.4472 13.8944L22 13.618V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V13.6181L2.55278 13.8944L2.55527 13.8957L2.55922 13.8976L2.57152 13.9037L2.61341 13.924C2.64892 13.941 2.69952 13.965 2.76447 13.9948C2.89433 14.0544 3.08173 14.1376 3.32077 14.2365C3.79852 14.4342 4.48438 14.6953 5.33091 14.9558C7.01937 15.4753 9.37174 16 12 16C14.6282 16 16.9806 15.4753 18.6691 14.9558C19.5156 14.6953 20.2015 14.4342 20.6792 14.2365C20.9183 14.1376 21.1057 14.0544 21.2355 13.9948C21.3005 13.965 21.3511 13.941 21.3866 13.924L21.4285 13.9037L21.4408 13.8976L21.4447 13.8957L21.4461 13.895C21.4461 13.895 21.4472 13.8944 21.0146 13.0292L21.4472 13.8944ZM12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12H12.01C12.5623 12 13.01 11.5523 13.01 11C13.01 10.4477 12.5623 10 12.01 10H12Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="pd-5 text-lg font-semibold text-gray-900 dark:text-white">
                📲 Journey Started
              </h3>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
