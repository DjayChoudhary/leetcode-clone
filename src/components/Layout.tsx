import Image from "next/image";
import avatar from "@/assets/avatar.jpg";

import { FaLinkedinIn } from "react-icons/fa";
export default function Layout() {
  return (
    <main className="mx-auto w-full p-4 max-w-screen-lg">
      <section className="flex space-x-4 grow">
        <section className="bg-white min-w-[300px] rounded-lg px-4 py-5 shadow-lg">
          <div className="profile flex flex-col gap-4">
            <div className="flex gap-4">
              <Image
                className="h-20 w-20 rounded-lg"
                height={100}
                width={100}
                alt="logo"
                src={avatar}
              />
              <div className="flex flex-col justify-between">
                <span className="font-semibold text-[#262626]">
                  DjayChoudhary
                </span>
                <span className="text-gray-500">
                  Rank{" "}
                  <span className="text-gray-600 font-medium">467,840</span>
                </span>
              </div>
            </div>
            <button className="bg-green-300 bg-opacity-20 w-full text-green-500 text-sm font-semibold py-2 rounded-lg">
              Edit Profile
            </button>
            <span className="text-gray-500 text-sm flex items-center gap-2">
              <FaLinkedinIn className="h-4 w-4" />
              <span className="">DhananjayChoudhary</span>
            </span>
            <span className="-mt-2 border-b border-b-gray-200 h-px w-full"></span>
          </div>
        </section>
        <section className="flex flex-col gap-4 max-w-[calc(100%_-_316px)]">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </section>
      </section>
    </main>
  );
}

function DisplayCard() {
  const falsy = null;
  return (
    <>
      <div className="min-w-max max-w-full flex-1 bg-white rounded-lg py-6 shadow-lg space-x-4">
        <div className="shadow-level3 dark:shadow-dark-level3 bg-layer-1 dark:bg-dark-layer-1 rounded-lg min-h-[186px] w-full pt-4 pb-3 lc-xl:h-[186px]">
          <div className="px-[13px] text-xs font-medium text-label-3 dark:text-dark-label-3">
            Solved Problems
          </div>
          <div className="mx-3 flex items-center lc-xl:mx-8">
            <div className="mr-8 mt-6 flex min-w-[100px] justify-center">
              <div className="shrink relative max-h-[100px] max-w-[100px] z-base">
                <svg
                  className="h-full w-full origin-center -rotate-90 transform"
                  viewBox="0 0 100 100"
                >
                  <circle
                    fill="none"
                    cx="50px"
                    cy="50px"
                    r="46"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke="currentColor"
                    className="w-[100px] text-gray-4 dark:text-dark-gray-4"
                  ></circle>
                  <circle
                    fill="none"
                    cx="50px"
                    cy="50px"
                    r="46"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke="currentColor"
                    className="cursor-pointer text-brand-orange dark:text-dark-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                    stroke-dasharray="14.343183158886522 274.68334097137443"
                    stroke-dashoffset="0"
                    data-difficulty="ALL"
                  ></circle>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                  <div>
                    <div className="text-[24px] font-medium text-label-1 dark:text-dark-label-1">
                      126
                    </div>
                    <div className="whitespace-nowrap text-xs text-label-3 dark:text-dark-label-3">
                      Solved
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-4 lc-xl:max-w-[228px]">
              <div className="space-y-2">
                <div className="flex w-full items-end text-xs">
                  <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                    Easy
                  </div>
                  <div className="flex flex-1 items-center">
                    <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                      74
                    </span>
                    <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                      /621
                    </span>
                  </div>
                  <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                    <span className="space-x-1.5">
                      <span>Beats</span>
                      <span className="font-medium text-label-2 dark:text-dark-label-2">
                        85.9%
                      </span>
                    </span>
                  </div>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                  <div className="absolute h-full w-full bg-green-1 dark:bg-dark-green-1"></div>
                  <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-olive dark:bg-dark-olive"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex w-full items-end text-xs">
                  <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                    Medium
                  </div>
                  <div className="flex flex-1 items-center">
                    <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                      46
                    </span>
                    <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                      /1352
                    </span>
                  </div>
                  <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                    <span className="space-x-1.5">
                      <span>Beats</span>
                      <span className="font-medium text-label-2 dark:text-dark-label-2">
                        73.0%
                      </span>
                    </span>
                  </div>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                  <div className="absolute h-full w-full bg-yellow-1 dark:bg-dark-yellow-1"></div>
                  <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow dark:bg-dark-yellow"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex w-full items-end text-xs">
                  <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                    Hard
                  </div>
                  <div className="flex flex-1 items-center">
                    <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                      6
                    </span>
                    <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                      /566
                    </span>
                  </div>
                  <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                    <span className="space-x-1.5">
                      <span>Beats</span>
                      <span className="font-medium text-label-2 dark:text-dark-label-2">
                        51.0%
                      </span>
                    </span>
                  </div>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                  <div className="absolute h-full w-full bg-red-1 dark:bg-dark-red-1"></div>
                  <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-s dark:bg-dark-red-s"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
