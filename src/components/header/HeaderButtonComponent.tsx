import Image from "next/image";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import { watchElementFocus } from "~/utils/react/reactEffect";
import { reverseState } from "~/utils/react/stateUtils";

const HeaderButtonComponent: React.FC<{
  label: string;
  href?: string;
  menuContent?: ReactNode;
}> = ({ label, href, menuContent }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  watchElementFocus(elementRef.current, setMenuOpen);

  if (menuContent)
    return (
      <div className="relative" ref={elementRef}>
        <button
          className={`flex h-full items-center justify-center border-b border-transparent p-2 duration-75  ${
            isMenuOpen ? "border-black/30" : "hover:border-black/30"
          }`}
          onClick={() => reverseState(setMenuOpen)}
        >
          <div className="flex items-center justify-center gap-2">
            {label}{" "}
            <div
              className={`h-2 w-2 border-b border-l border-gray-500 duration-75 ${
                isMenuOpen ? "mt-[0.2rem] -rotate-45" : "mt-2 -rotate-[135deg] "
              }`}
            ></div>
          </div>
        </button>
        <div
          className={`dropdown absolute top-16 rounded-md bg-white shadow-lg duration-75 ${
            isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {menuContent}
        </div>
      </div>
    );

  if (href)
    return (
      <Link
        href={href}
        className="relative flex h-full items-center justify-center border-b border-transparent p-2 duration-75 hover:border-black/30"
      >
        {label}
      </Link>
    );

  return <></>;
};
export default HeaderButtonComponent;

export const HeaderCircleButton: React.FC<{
  href?: string;
  className?: string;
  menuClassName?: string;
  menuContent?: ReactNode;
  src?: string;
}> = ({ href, menuContent, className, menuClassName, src }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  watchElementFocus(elementRef.current, setMenuOpen);

  if (menuContent)
    return (
      <div
        className={`relative ${className ? className : ""}`}
        ref={elementRef}
      >
        <button
          className={`relative ml-auto h-12 w-12 rounded-full border  ${
            isMenuOpen ? "border-black/30" : "hover:border-black/30"
          }`}
          onClick={() => reverseState(setMenuOpen)}
        >
          {src && (
            <Image
              src={src}
              alt=""
              fill={true}
              className="rounded-full object-cover"
            />
          )}
        </button>
        <div
          className={`dropdown absolute top-16 rounded-md bg-white shadow-lg duration-75 ${
            menuClassName ? menuClassName : ""
          } ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          {menuContent}
        </div>
      </div>
    );

  if (href)
    return (
      <Link
        href={href}
        className="relative ml-auto h-12 w-12 rounded-full border"
      >
        {src && (
          <Image
            src={src}
            alt=""
            fill={true}
            className="rounded-full object-cover"
          />
        )}
      </Link>
    );

  return <></>;
};
