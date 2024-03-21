import { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const router = useRouter();
  const scrollEndTimeout = useRef<number>();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const scrollStart = useCallback(() => {
    setIsScrolling(true);
  }, []);

  const scrollEnd = useCallback(() => {
    setIsScrolling(false);
  }, []);

  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      scrollStart();
    }
    clearTimeout(scrollEndTimeout.current);
    scrollEndTimeout.current = window.setTimeout(() => {
      scrollEnd();
    }, 200);
  }, [isScrolling, scrollStart, scrollEnd]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (isScrolling) {
      setIsMenuVisible(false);
    }
  }, [isScrolling]);

  return (
    <nav
      className={clsx([
        "bg-amber-100 w-[100%] h-[48px] flex flex-row justify-center items-center",
        "animate:none ease-linear duration-300 fixed top-0 transition-transform",
        {
          "-translate-y-12": isScrolling,
        },
      ])}
    >
      Jedi Software
      <div
        className="absolute right-[24px] flex flex-row justify-center items-center cursor-pointer"
        onClick={() => {
          setIsMenuVisible((prev) => !prev);
        }}
      >
        <LuMenu />
      </div>
      <div
        className={clsx([
          "bg-amber-100 w-full flex justify-center items-center",
          "animate:none ease-linear duration-300 absolute transition-opacity",
          {
            "top-[48px]": isMenuVisible,
            "top-[-200px]": !isMenuVisible,
            "opacity-1": isMenuVisible,
            "opacity-0": !isMenuVisible,
          },
        ])}
      >
        <ul>
          <li
            className={clsx([
              "py-1 text-center hover:text-amber-300",
              {
                "text-amber-300": router.pathname === "/",
              },
            ])}
          >
            <Link
              href="/"
              onClick={() => {
                setIsMenuVisible(false);
              }}
            >
              Home
            </Link>
          </li>
          <li
            className={clsx([
              "py-1 text-center hover:text-amber-300",
              {
                "text-amber-300": router.pathname === "/find-the-cheese",
              },
            ])}
          >
            <Link
              href="/find-the-cheese"
              onClick={() => {
                setIsMenuVisible(false);
              }}
            >
              Find The Ccheese
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
