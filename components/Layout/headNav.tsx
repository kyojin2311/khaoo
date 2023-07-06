import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Kahoot_Logo.svg";
import StarsIcon from "@mui/icons-material/Stars";
import ava from "../../public/Logo Sonat.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useState } from "react";
export default function Head() {
  const [avaToggle, setAvaToggle] = useState(false);
  const [notiToggle, setNotiToggle] = useState(false);
  const notiClickHandler = () => {
    if (avaToggle) {
      setAvaToggle(!avaToggle);
    }
    setNotiToggle(!notiToggle);
  };
  const avaClickHandler = () => {
    if (notiToggle) {
      setNotiToggle(!notiToggle);
    }
    setAvaToggle(!avaToggle);
  };
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg: pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link href="#">
              <Image src={logo} alt="logo" className="w-72 h-10" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white hidden">
                Kahoot
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <a href="#" className="text-green-700 mr-4">
              <StarsIcon className="w-9" />
              <span className="font-semibold text-sm">Upgrade</span>
            </a>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5"
            >
              CREATE
            </button>
            <div className="flex items-center ml-3">
              <div>
                <button
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={avaClickHandler}
                >
                  <Image
                    src={ava}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  ></Image>
                </button>
              </div>
              <div
                className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                  avaToggle ? "block" : "hidden"
                }`}
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                  margin: "0px",
                  transform: "translate3d(92.5rem, 65px, 0px)",
                }}
              >
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-900 dark:text-white">
                    Pham Thach
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                    thachpv@sonat.vn
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Change Language
                    </a>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div>
              <button
                className="hidden p-1 ml-2 text-gray-500 rounded-lg sm:flex hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={notiClickHandler}
              >
                <NotificationsNoneIcon className="rounded-full w-8 h-8" />
              </button>
              <div
                className={`z-50 max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600  ${
                  notiToggle ? "block" : "hidden"
                }`}
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                  margin: "0px",
                  transform: "translate3d(87.5rem, 70px, 0px)",
                }}
              >
                <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  Notifications
                </div>
                <div className="grid grid-cols-3 gap-4 p-4">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    HEHE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
